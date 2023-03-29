using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HighSchoolAPI.Migrations
{
    /// <inheritdoc />
    public partial class AddRelationBetweenCommentAndAnnouncement : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "AnnouncementId",
                table: "Comments",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Comments_AnnouncementId",
                table: "Comments",
                column: "AnnouncementId");

            migrationBuilder.AddForeignKey(
                name: "FK_Comments_Announcements_AnnouncementId",
                table: "Comments",
                column: "AnnouncementId",
                principalTable: "Announcements",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comments_Announcements_AnnouncementId",
                table: "Comments");

            migrationBuilder.DropIndex(
                name: "IX_Comments_AnnouncementId",
                table: "Comments");

            migrationBuilder.DropColumn(
                name: "AnnouncementId",
                table: "Comments");
        }
    }
}
