using HighSchoolAPI.Database.Entities;
using HighSchoolAPI.Models;
using HighSchoolAPI.Services.Announcement;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HighSchoolAPI.Controllers;

[ApiController]
[Route("/announcements")]
public class AnnouncementController : ControllerBase
{
    private readonly IAnnouncementService _service;

    public AnnouncementController(IAnnouncementService service)
    {
        _service = service;
    }

    [HttpPost]
    [Route("createAnnouncement")]
    [Authorize(Policy = "AuthAdmin")]
    public async Task<ActionResult<int>> CreateAnnouncementWithoutImages([FromBody] CreateAnnouncementDto dto)
    {
        var id = await _service.CreateAnnouncementWithoutImages(dto);
        return Ok(id);
    }

    [HttpGet]
    [Route("getAll")]
    public IEnumerable<GetAnnouncementsDto> GetAllAnnouncements()
    {
        var announcements = _service.GetAllAnnouncements();
        return announcements;
    }

    [HttpPost]
    [Route("addThumbnail/{id:int}")]
    [Authorize(Policy = "AuthAdmin")]
    public async Task<ActionResult> AddThumbnail([FromForm] IFormFile file, [FromRoute] int id)
    {
        await _service.AddThumbnail(file, id);
        return Ok();
    }

    [HttpPost]
    [Route("addImage/{id:int}")]
    [Authorize(Policy = "AuthAdmin")]
    public async Task<ActionResult> AddImage([FromForm] IFormFile file, [FromRoute] int id)
    {
        await _service.AddImage(file, id);
        return Ok();
    }

    [HttpDelete]
    [Route("/deleteAnnouncement/{id:int}")]
    [Authorize(Policy = "AuthAdmin")]
    public async Task<ActionResult> DeleteAnnouncement([FromRoute] int id)
    {
        await _service.DeleteAnnouncement(id);
        return Ok();
    }

    [HttpGet]
    [Route("/getAnnouncements")]
    [AllowAnonymous]
    public ActionResult<IEnumerable<GetAnnouncementsDto>> GetAnnouncements([FromQuery] int pageNumber, [FromQuery]int pageSize)
    {
        var results = _service.GetAnnouncements(pageNumber, pageSize);
        return Ok(results);
    }

    [HttpGet]
    [Route("/getAnnouncementBody/{id:int}")]
    [AllowAnonymous]
    public async Task<ActionResult<GetAnnouncementBodyDto>> GetAnnouncementBody([FromRoute] int id)
    {
        var response = await _service.GetAnnouncementBody(id);
        return Ok(response);
    }
}