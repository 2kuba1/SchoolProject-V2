using HighSchoolAPI.Database.Entities;
using HighSchoolAPI.Models;
using HighSchoolAPI.Services.Application;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HighSchoolAPI.Controllers;

[Route("/api/application")]
[ApiController]
public class ApplicationController : ControllerBase
{
    private readonly IApplicationService _service;

    public ApplicationController(IApplicationService service)
    {
        _service = service;
    }
    
    [HttpPost]
    [Route("createApplication")]
    [Authorize(Roles = "User")]
    public async Task<ActionResult> CreateApplication([FromBody] CreateApplicationDto dto)
    {
        await _service.CreateApplication(dto);
        return Ok();
    }
    
    [HttpPost]
    [Route("approveApplication")]
    [Authorize(Roles = "Admin")]
    public async Task<ActionResult> ApproveApplication([FromQuery]int id)
    {
        await _service.ApproveApplication(id);
        return Ok();
    }
    
    [HttpPost]
    [Route("rejectApplication")]
    [Authorize(Roles = "Admin")]
    public async Task<ActionResult> RejectApplication([FromQuery]int id)
    {
        await _service.RejectApplication(id);
        return Ok();
    }

    [HttpGet]
    [Route("getLastApplication")]
    [Authorize(Roles = "Admin")]
    public async Task<Application> GetLastApplication()
    {
        var lastApplication = await _service.GetLastApplication();
        return lastApplication;
    }
}