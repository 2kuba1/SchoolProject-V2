using HighSchoolAPI.Models;
using HighSchoolAPI.Services.Account;
using Microsoft.AspNetCore.Mvc;

namespace HighSchoolAPI.Controllers;

[Route("/api/account")]
[ApiController]
public class AccountController : ControllerBase
{
    private readonly IAccountService _service;

    public AccountController(IAccountService service)
    {
        _service = service;
    }
    
    [HttpPost]
    [Route("register")]
    public async Task<ActionResult> RegisterUser([FromBody]RegisterUserDto dto)
    {
        await _service.RegisterUser(dto);
        return NoContent();
    }
}