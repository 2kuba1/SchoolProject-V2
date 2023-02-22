using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HighSchoolAPI.Migrations
{
    /// <inheritdoc />
    public partial class ModifyAnnouncementEntity : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Announcements_Thumbnails_ThumbnailId",
                table: "Announcements");

            migrationBuilder.DropIndex(
                name: "IX_Announcements_ThumbnailId",
                table: "Announcements");

            migrationBuilder.DropColumn(
                name: "ThumbnailId",
                table: "Announcements");

            migrationBuilder.AddColumn<int>(
                name: "AnnouncementId",
                table: "Thumbnails",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "FileName",
                table: "Thumbnails",
                type: "longtext",
                nullable: false)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationDate",
                table: "Announcements",
                type: "datetime(6)",
                nullable: false,
                oldClrType: typeof(DateOnly),
                oldType: "date");

            migrationBuilder.CreateIndex(
                name: "IX_Thumbnails_AnnouncementId",
                table: "Thumbnails",
                column: "AnnouncementId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Thumbnails_Announcements_AnnouncementId",
                table: "Thumbnails",
                column: "AnnouncementId",
                principalTable: "Announcements",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Thumbnails_Announcements_AnnouncementId",
                table: "Thumbnails");

            migrationBuilder.DropIndex(
                name: "IX_Thumbnails_AnnouncementId",
                table: "Thumbnails");

            migrationBuilder.DropColumn(
                name: "AnnouncementId",
                table: "Thumbnails");

            migrationBuilder.DropColumn(
                name: "FileName",
                table: "Thumbnails");

            migrationBuilder.AlterColumn<DateOnly>(
                name: "CreationDate",
                table: "Announcements",
                type: "date",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "datetime(6)");

            migrationBuilder.AddColumn<int>(
                name: "ThumbnailId",
                table: "Announcements",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Announcements_ThumbnailId",
                table: "Announcements",
                column: "ThumbnailId");

            migrationBuilder.AddForeignKey(
                name: "FK_Announcements_Thumbnails_ThumbnailId",
                table: "Announcements",
                column: "ThumbnailId",
                principalTable: "Thumbnails",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
