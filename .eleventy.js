module.exports = function(eleventyConfig) {
	eleventyConfig.setTemplateFormats(["pug", "html", "md"]);
	eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  
	// Configuración para evitar que se generen carpetas para cada página
	eleventyConfig.addGlobalData("permalink", function() {
	  return (data) => {
		// Si el archivo se llama index.pug, mantener la estructura normal
		if (data.page.fileSlug === "index") {
		  return "/index.html";
		}
		// Para otros archivos, generar directamente en la raíz
		return `/${data.page.fileSlug}.html`;
	  };
	});
  
	return {
	  dir: {
		input: "src/pug/pages",
		includes: "../_includes",
		layouts: "../_layouts",
		data: "../_data",
		output: "dist"
	  },
	  templateFormats: ["pug", "html", "md"],
	  htmlTemplateEngine: "pug",
	  markdownTemplateEngine: "pug"
	};
  };
  