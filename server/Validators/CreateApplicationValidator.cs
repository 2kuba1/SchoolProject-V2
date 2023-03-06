using FluentValidation;
using HighSchoolAPI.Models;

namespace HighSchoolAPI.Validators;

public class CreateApplicationValidator : AbstractValidator<CreateApplicationDto>
{
    public CreateApplicationValidator()
    {
        RuleFor(x => x.Age)
            .NotEmpty()
            .GreaterThan(0)
            .LessThan(100);

        RuleFor(x => x.Email)
            .NotEmpty()
            .EmailAddress();

        RuleFor(x => x.DateOfBirth)
            .Length(10)
            .NotEmpty();

        RuleFor(x => x.FirstAndLastName)
            .MinimumLength(3)
            .NotEmpty();
    }
}