namespace backend.Model;

public class ItemListDTO
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public float Rating { get; set; }
    public string Description { get; set; } = string.Empty;
    public string Image { get; set; } = string.Empty;
    public ICollection<AddReviewDTO> Reviews { get; set; } = null!;
}