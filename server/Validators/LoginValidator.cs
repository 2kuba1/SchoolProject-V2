using FluentValidation;
using HighSchoolAPI.Models;

namespace HighSchoolAPI.Validators;

public class LoginValidator : AbstractValidator<LoginDto>
{
    public LoginValidator()
    {
        RuleFor(x => x.Password)
            .MinimumLength(8)
            .MaximumLength(25)
            .NotEmpty()
            .WithMessage("Invalid email or password");

        RuleFor(x => x.Email)
            .EmailAddress()
            .NotEmpty()
            .WithMessage("Invalid email or password");
    }
}