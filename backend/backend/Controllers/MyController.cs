using backend.Model;
using backend.Repo;
using backend.Validators;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers;

[Route("api")]
public class MyController : ControllerBase
{
    private readonly DatabaseContext _context;
    private readonly ReviewValidator validator;

    public MyController(DatabaseContext context, ReviewValidator validator)
    {
        _context = context;
        this.validator = validator;
    }

    private static ItemDTO ItemToDTO(Item item) => new ItemDTO
    {
        Id = item.Id,
        Title = item.Title,
        Rating = item.Rating,
        Description = item.Description,
        Image = item.Image
    };
    
    private static AddReviewDTO ReviewToDTO(Review review) => new AddReviewDTO
    {
        Name = review.Name,
        Rating = review.Rating,
        Feedback = review.Feedback
    };

    [HttpGet("items")]
    [AllowAnonymous]
    public ActionResult<ICollection<ItemDTO>> GetItems()
    {
        return _context.Items
            .Select(x => ItemToDTO(x))
            .ToList();
    }
    
    [HttpGet("items/{id}")]
    [AllowAnonymous]
    public ActionResult<ItemListDTO> GetItemsById(int id)
    {
        var item = _context.Items
            .FirstOrDefault(x => x.Id == id);

        if (item == null)
        {
            throw new Exception("Item not found");
        }

        var reviews = _context.Reviews
            .Where(x => x.ItemId == id)
            .Select(x => ReviewToDTO(x))
            .ToList();

        var resultItem = new ItemListDTO
        {
            Id = id,
            Description = item.Description,
            Title = item.Title,
            Image = item.Image,
            Rating = item.Rating,
            Reviews = reviews
        };

        return Ok(resultItem);
    }
    
    [HttpPost("review/{id}")]
    [AllowAnonymous]
    public ActionResult ReviewItem(int id, [FromBody] AddReviewDTO review)
    {
        var item = _context.Items.Include(x => x.Reviews).FirstOrDefault(x => x.Id == id);

        if (item == null)
        {
            throw new Exception("Item not found");
        }
        
        var errors = this.validator.ValidateReview(review);
        if (errors != string.Empty)
        {
            throw new Exception(errors);
        }

        var newReview = new Review
        {
            Feedback = review.Feedback,
            Name = review.Name,
            Rating = review.Rating,
            ItemId = id,
            Item = item
        };
        
        _context.Reviews.Add(newReview);
        _context.SaveChanges();
        
        var averageRating = item.Reviews
            .Where(x => x.ItemId == id)
            .Average(r => r.Rating);

        var rating = Math.Round(averageRating, 2);
        
        item.Rating = (float)rating;
        _context.SaveChanges();

        return Ok();
    }
}