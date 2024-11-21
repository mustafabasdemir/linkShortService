using LinkShortener.Core.Services.Interfaces;
using LinkShortener.Core.Services;
using LinkShortener.Data;
using Microsoft.EntityFrameworkCore;
using LinkShortener.Service.Interfaces;
using LinkShortener.Service;

var builder = WebApplication.CreateBuilder(args);

// Vt baglantisi
builder.Services.AddDbContext<LinkShortDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DatabaseConnection")));

// Add services to the container.
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<ILinkService, LinkService>();
builder.Services.AddScoped<ITokenService, TokenService>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();