using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HighSchoolAPI.Migrations
{
    /// <inheritdoc />
    public partial class ApplicationRecordsInUsersAreNowNullable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Applications_ApplicationId",
                table: "Users");

            migrationBuilder.AlterColumn<int>(
                name: "ApplicationId",
                table: "Users",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Applications_ApplicationId",
                table: "Users",
                column: "ApplicationId",
                principalTable: "Applications",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Applications_ApplicationId",
                table: "Users");

            migrationBuilder.AlterColumn<int>(
                name: "ApplicationId",
                table: "Users",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Applications_ApplicationId",
                table: "Users",
                column: "ApplicationId",
                principalTable: "Applications",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
