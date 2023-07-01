namespace backend.Model;

public class Item
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public float Rating { get; set; }
    public string Description { get; set; } = string.Empty;
    public string Image { get; set; } = string.Empty;
    public ICollection<Review> Reviews { get; set; } = null!;
}