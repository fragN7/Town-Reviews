namespace backend.Model;

public class Review
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public float Rating { get; set; }
    public string Feedback { get; set; } = string.Empty;
    public int ItemId { get; set; }
    public Item Item { get; set; } = null!;
}