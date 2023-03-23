using HighSchoolAPI.Models;
using HighSchoolAPI.Services.Comments;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HighSchoolAPI.Controllers;

[ApiController]
[Route("/api/comments")]
public class CommentsController : ControllerBase
{
    private readonly ICommentsService _service;

    public CommentsController(ICommentsService service)
    {
        _service = service;
    }
    
    [Route("addComment")]
    [Authorize(Policy = "AuthUser")]
    [HttpPost]
    public async Task<ActionResult> AddComment([FromBody] AddCommentDto dto)
    {
        await _service.AddComment(dto);
        return NoContent();
    }

    [Route("getComments/{id:int}")]
    [HttpGet]
    public async Task<ActionResult<IEnumerable<GetCommentsDto>>> GetComments([FromRoute] int id)
    {
        var comments = await _service.GetComments(id);
        return Ok(comments);
    }

    [Route("deleteComment/{id:int}")]
    [HttpDelete]
    [Authorize(Policy = "AuthUser")]
    public async Task<ActionResult> DeleteComment([FromRoute] int id)
    {
        await _service.DeleteComment(id);
        return NoContent();
    }
}