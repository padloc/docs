function getItems(headers) {
    if (!headers.length) {
        return [];
    }
    const level = headers[0].level;
    const items = [];

    while (headers.length) {
        const item = {
            ...headers.shift(),
            children: [],
        };

        const subHeaders = [];

        while (headers.length && headers[0].level > level) {
            subHeaders.push(headers.shift());
        }

        item.children = getItems(subHeaders);
        items.push(item);
    }

    return items;
}

function getTOC(content) {
    const matches = content.matchAll(/\<(?<tag>h2|h3|h4) .*id="(?<id>.+?)".*?\>(?<title>.+?)\<\/\k<tag>\>/gi);
    const headers = [...matches].map(({ groups: { tag, id, title } }) => ({
        tag,
        id,
        title,
        level: Number(tag[1]),
    }));

    const toc = getItems(headers);
    return toc;
}

module.exports = {
    getTOC,
};
