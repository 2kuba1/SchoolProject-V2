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
    [Authorize(Roles = "Admin")]
    public async Task<ActionResult> CreateAnnouncementWithoutImages([FromBody] CreateAnnouncementDto dto)
    {
        await _service.CreateAnnouncementWithoutImages(dto);
        return Ok();
    }

    [HttpPost]
    [Route("{id:int}/addThumbnail")]
    [Authorize(Roles = "Admin")]
    public async Task<ActionResult> AddThumbnail([FromForm] IFormFile file, [FromRoute] int id)
    {
        await _service.AddThumbnail(file, id);
        return Ok();
    }

    [HttpPost]
    [Route("{id:int}/addImage")]
    [Authorize(Roles = "Admin")]
    public async Task<ActionResult> AddImage([FromForm] IFormFile file, [FromRoute] int id)
    {
        await _service.AddImage(file, id);
        return Ok();
    }

    [HttpDelete]
    [Route("/deleteAnnouncement/{announcementTitle}")]
    [Authorize(Roles = "Admin")]
    public async Task<ActionResult> DeleteAnnouncement([FromRoute] string announcementTitle)
    {
        await _service.DeleteAnnouncement(announcementTitle);
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
}