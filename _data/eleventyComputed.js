// This is a zany workaround to get out of manually declaring `parent` in every page's frontmatter. Stolen from
// https://github.com/adamduncan/eleventy-auto-navigation/blob/main/src/_data/eleventyComputed.js

module.exports = {
    eleventyNavigation: {
        key: (data) => {
            const urlParts = data.page.url.split("/");
            // Taking all but first and last leaves us with the page path
            const pathDirs = urlParts.slice(1, urlParts.length - 1);
            const path = `/${pathDirs.join("/")}`;
            return data.key || path;
        },
        title: (data) => data.title,
        parent: (data) => {
            if (data.page.url === "/") {
                return undefined;
            }

            // Get URL directory fragments
            const urlParts = data.page.url.split("/");
            // Taking all but first and last two leaves us with the parent directory path
            const parentDirs = urlParts.slice(1, urlParts.length - 2);
            const parent = `/${parentDirs.join("/")}`;

            // If no specific parent specified, try to automatically use fallback
            return data.parent || parent;
        },
        section: (data) => data.page.url.split("/")[1],
        order: (data) => data.order || data.weight,
        icon: (data) => data.icon,
        description: (data) => data.description,
        date: (data) => data.date || data.page.date || new Date(),
    },
};
