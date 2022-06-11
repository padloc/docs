const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const { getTOC } = require("./_lib/toc");

module.exports = (config) => {
    function outdent(str) {
        const lines = str.split("\n");
        const minLeadingWhitespace = lines.reduce((min, line) => Math.min(min, Math.max(0, line.search(/[^\s]/))), 0);
        return lines.map((line) => line.slice(minLeadingWhitespace)).join("\n");
    }

    config.setLibrary(
        "md",
        markdownIt({
            html: true,
        }).use(markdownItAnchor)
    );

    config.addPlugin(require("@11ty/eleventy-navigation"));

    const html = (...args) => outdent(String.raw(...args)).trim();

    config.addPassthroughCopy("assets/**/*");

    config.setTemplateFormats(["html", "md", "njk", "png", "jpg"]);

    config.addNunjucksShortcode(
        "img",
        ({ src, title = "", alt = "" }) => html` <img src="${src}" title="${title}" alt="${alt}" /> `
    );

    config.addPairedNunjucksShortcode(
        "figure",
        (content, { caption }) =>
            html` <figure>${content} ${caption ? html`<figcaption>${caption}</figcaption>` : ""}</figure> `
    );

    config.addFilter("jsonify", (val) => JSON.stringify(val, null, 4));
    config.addFilter("startsWith", (str = "", searchString = "") => str.startsWith(searchString));
    config.addFilter("toc", getTOC);

    return {
        markdownTemplateEngine: "njk",
    };
};
