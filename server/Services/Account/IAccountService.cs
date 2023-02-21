using HighSchoolAPI.Models;

namespace HighSchoolAPI.Services.Account;

public interface IAccountService
{
    Task RegisterUser(RegisterUserDto dto);
    Task<string> GenerateJwt(LoginDto dto);
    Task<string> GetApplicationStatus();
    UserData GetUserData();
}