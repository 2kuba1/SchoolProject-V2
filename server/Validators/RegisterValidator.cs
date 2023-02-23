using System.Text.RegularExpressions;
using FluentValidation;
using HighSchoolAPI.Database;
using HighSchoolAPI.Models;

namespace HighSchoolAPI.Validators;

public class RegisterValidator : AbstractValidator<RegisterUserDto>
{
    public RegisterValidator(AppDbContext dbContext)
    {
        RuleFor(x => x.Email)
            .EmailAddress()
            .NotEmpty()
            .Custom((value, context) =>
            {
                var searchForEmail = dbContext.Users.FirstOrDefault(u => u.Email == value);

                if (searchForEmail is not null)
                {
                    context.AddFailure("This email already exist");
                }
            });

        RuleFor(x => x.FirstName)
            .MaximumLength(60)
            .MinimumLength(3)
            .NotEmpty();

        RuleFor(x => x.LastName)
            .MaximumLength(60)
            .MinimumLength(3)
            .NotEmpty();

        RuleFor(x => x.Password)
            .MinimumLength(8)
            .MaximumLength(25)
            .Must(HasValidPassword)
            .WithMessage("Password must contain special symbol, capital letter and digit");

        RuleFor(x => x.ConfirmPassword).Equal(e => e.Password);
    }
    
    private bool HasValidPassword(string pw)
    {
        var lowercase = new Regex("[a-z]+");
        var uppercase = new Regex("[A-Z]+");
        var digit = new Regex("(\\d)+");
        var symbol = new Regex("(\\W)+");

        return (lowercase.IsMatch(pw) && uppercase.IsMatch(pw) && digit.IsMatch(pw) && symbol.IsMatch(pw));
    }
}