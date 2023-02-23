using FluentValidation;
using HighSchoolAPI.Models;

namespace HighSchoolAPI.Validators;

public class CreateAnnouncementValidator : AbstractValidator<CreateAnnouncementDto>
{
    public CreateAnnouncementValidator()
    {
        RuleFor(x => x.Title)
            .MinimumLength(3)
            .NotEmpty();

        RuleFor(x => x.Description)
            .MinimumLength(3)
            .NotEmpty();
    }
}