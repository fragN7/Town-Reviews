namespace backend.Model;

public class ItemDTO
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public float Rating { get; set; }
    public string Description { get; set; } = string.Empty;
    public string Image { get; set; } = string.Empty;
}