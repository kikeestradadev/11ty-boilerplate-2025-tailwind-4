module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats(["pug", "html", "md"]);
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

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
