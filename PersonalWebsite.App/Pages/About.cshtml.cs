using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace PersonalWebsite.App.Pages
{
    public class AboutModel : PageModel
    {

        // Proprietà per contenere i dati GeoJSON in formato stringa
        public string GeoJsonData { get; set; }
        public void OnGet()
        {
            var filePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "geojson", "filtered_countries.geojson");
            if (System.IO.File.Exists(filePath))
            {
                // Leggi il file e assegnalo alla proprietà GeoJsonData
                GeoJsonData = System.IO.File.ReadAllText(filePath);
            }
        }
    }
}
