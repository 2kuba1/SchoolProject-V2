using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using HighSchoolAPI.Database;
using HighSchoolAPI.Database.Entities;
using HighSchoolAPI.Exceptions;
using HighSchoolAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

namespace HighSchoolAPI.Services.Account;

public class AccountService : IAccountService
{
    private readonly AppDbContext _dbContext;
    private readonly AuthSettings _authSettings;
    private readonly IUserContextService _contextService;
    private readonly IConfiguration _configuration;
    private readonly IHttpContextAccessor _httpContextAccessor;

    public AccountService(AppDbContext dbContext, AuthSettings authSettings, IUserContextService contextService, IConfiguration configuration, IHttpContextAccessor httpContextAccessor)
    {
        _dbContext = dbContext;
        _authSettings = authSettings;
        _contextService = contextService;
        _configuration = configuration;
        _httpContextAccessor = httpContextAccessor;
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

    public async Task<string> GenerateJwt(LoginDto dto)
    {
        var user = await  _dbContext.Users.
            Include(u => u.Role).FirstOrDefaultAsync(u => u.Email == dto.Email);
        if (user is null)
        {
            throw new InvalidLoginException("Invalid email or password");
        }

        var password = Verify(dto.Password, user.PasswordHash);
        if (password == false)
        {
            throw new InvalidLoginException("Invalid email or password");
        }

        var claims = new List<Claim>()
        {
            new Claim("Id", user.Id.ToString()),
            new Claim("FirstName", $"{user.FirstName}"),
            new Claim("LastName", $"{user.LastName}"),
            new Claim("Email", $"{user.Email}"),
            new Claim("Role", $"{user.Role.Name}")
        };

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_authSettings.JwtKey));
        var cred = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
        var expDate = DateTime.Now.AddDays(_authSettings.JwtExpireDays);

        var token = new JwtSecurityToken(_authSettings.JwtIssuer, _authSettings.JwtIssuer, claims, expires: expDate,
            signingCredentials: cred);

        var cookieOptions = new CookieOptions()
        {
            HttpOnly = true,
            Expires = DateTime.Now.AddMinutes(_configuration.GetValue<int>("Jwt:ExpireDays"))
        };

        var accessToken = new JwtSecurityTokenHandler().WriteToken(token);
        
        _httpContextAccessor?.HttpContext?.Response.Cookies.Append("accessToken", accessToken,
            cookieOptions);

        return accessToken;
    }

    public async Task<string> GetApplicationStatus()
    {
        var user = await _dbContext.Users.FirstOrDefaultAsync(u => u.Id == _contextService.GetUserId);
        return user.ApplicationStatus;
    }

    public UserData GetUserData()
    {
        var data = new UserData()
        {
            Email = _contextService.User.FindFirst(c => c.Type == "Email").Value,
            FirstName = _contextService.User.FindFirst(c => c.Type == "FirstName").Value,
            LastName = _contextService.User.FindFirst(c => c.Type == "LastName").Value
        };

        return data;
    }
}