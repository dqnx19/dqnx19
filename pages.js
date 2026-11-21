import { setFavicon } from "./vorxel/modules/setfavicon.js"
import { setHTML } from "./vorxel/modules/sethtml.js"
import { marked } from "./vorxel/lib/marked.js"

const favicon = "icons/favicon.png"
const readme = await fetch("readme.md").then(file => file.text());

setFavicon({
    url: favicon
})


setHTML({
    selector: document.body,
    content: marked.parse(readme)
})