using backend.Model;

namespace backend.Validators;

public class ReviewValidator
{
    public string ValidateReview(AddReviewDTO review)
    {
        var errors = string.Empty;
        errors += this.ValidateName(review.Name);
        errors += this.ValidateFeedback(review.Feedback);
        errors += this.ValidateRating(review.Rating);

        return errors;
    }

    private string ValidateName(string name)
    {
        var errors = string.Empty;

        if (name.Length > 25)
        {
            errors += "Name is too long, keep it under 25 characters \n";
        }

        return errors;
    }

    private string ValidateFeedback(string feedback)
    {
        var errors = string.Empty;

        if (feedback.Length > 250)
        {
            errors += "Feedback is too long, keep it under 25 characters \n";
        }

        return errors;
    }

    private string ValidateRating(float rating)
    {
        var errors = string.Empty;

        if (rating < 0 || rating > 5)
        {
            errors += "Rating is between 0 and 5 \n";
        }

        return errors;
    }
}