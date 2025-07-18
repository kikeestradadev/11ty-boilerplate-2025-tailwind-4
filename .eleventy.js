module.exports = function(eleventyConfig) {
	eleventyConfig.setTemplateFormats(["pug", "html", "md"]);
	eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

	// Configuración para generar archivos HTML directamente en la raíz
	eleventyConfig.addGlobalData("permalink", function() {
		return (data) => {
			const slug = data.page.fileSlug;
			// Si el slug es vacío, undefined o 'index', generar index.html
			if (!slug || slug === "index") {
				return "/index.html";
			}
			return `/${slug}.html`;
		};
	});

	return {
		dir: {
			input: "src/pug/pages",
			includes: "../_includes",
			layouts: "../_layouts",
			data: "../_data",
			output: "public"
		},
		templateFormats: ["pug", "html", "md"],
		htmlTemplateEngine: "pug",
		markdownTemplateEngine: "pug"
	};
};
