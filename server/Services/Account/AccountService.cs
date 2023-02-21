using HighSchoolAPI.Database;
using HighSchoolAPI.Database.Entities;
using HighSchoolAPI.Models;

namespace HighSchoolAPI.Services.Account;

public class AccountService : IAccountService
{
    private readonly AppDbContext _dbContext;

    public AccountService(AppDbContext dbContext)
    {
        _dbContext = dbContext;
    }
    
    public async Task RegisterUser(RegisterUserDto dto)
    {
        var newUser = new User()
        {
            Email = dto.Email,
            RoleId = dto.RoleId,
            FirstName = dto.FirstName,
            LastName = dto.LastName
        };

        var passwordHash = HashPassword(dto.Password);

        newUser.PasswordHash = passwordHash;

        await _dbContext.Users.AddAsync(newUser);
        await _dbContext.SaveChangesAsync();
    }
}