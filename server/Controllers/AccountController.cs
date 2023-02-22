using HighSchoolAPI.Models;
using HighSchoolAPI.Services.Account;
using Microsoft.AspNetCore.Authorization;
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
 
    [HttpPost]
    [Route("login")]
    public async Task<ActionResult<string>> Login([FromBody] LoginDto dto)
    {
        var token = await _service.GenerateJwt(dto);
        return Ok(token);
    }

    [HttpGet]
    [Route("getApplicationStatus")]
    [Authorize(Roles = "User")]
    public async Task<ActionResult<string>> GetApplicationStatus()
    {
        var response = await _service.GetApplicationStatus();
        return Ok(response);
    }

    [HttpGet]
    [Route("getUserData")]
    [Authorize(Roles = "User,Admin")]
    public ActionResult<UserData> GetUserData()
    {
        var response = _service.GetUserData();
        return Ok(response);
    }
}