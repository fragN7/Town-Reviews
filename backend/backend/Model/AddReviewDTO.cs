namespace backend.Model;

public class AddReviewDTO
{
    public string Name { get; set; } = string.Empty;
    public float Rating { get; set; }
    public string Feedback { get; set; } = string.Empty;
}