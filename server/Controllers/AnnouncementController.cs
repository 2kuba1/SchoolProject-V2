using HighSchoolAPI.Models;
using HighSchoolAPI.Services.Announcement;
using Microsoft.AspNetCore.Mvc;
using Supabase.Storage;

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
    public async Task<ActionResult<List<Bucket>>> CreateAnnouncement([FromBody]CreateAnnouncementDto dto)
    {
        var buckets = await _service.CreateAnnouncement();
        return Ok(buckets);
    }
}