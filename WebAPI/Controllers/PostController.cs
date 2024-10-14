using Microsoft.AspNetCore.Mvc;
using WebAPI.Models;
using WebAPI.Views;

namespace WebAPI.Controllers
{
    [Route("postingan")]
    [ApiController]
    public class PostController : Controller
    {
        [HttpGet]
        public IActionResult GetPostingan()
        {
            try
            {
                List<Postingan> data = new List<Postingan>();
                data = PostView.SelectPostItem();
                return Ok(data);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPost]
        public IActionResult CreateChecklistItem([FromBody] Postingan Postingan)
        {
            try
            {
                PostView.InsertPostItem(Postingan);
                return StatusCode(201, "Success");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPut]
        public IActionResult UpdateChecklistItemStatus(string Judul, int IDPostingan)
        {
            try
            {
                PostView.UpdatePostItem(Judul, IDPostingan);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpDelete]
        public IActionResult DeleteChecklistItem(int IDPostingan)
        {
            try
            {
                PostView.DeletePostItem(IDPostingan);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
