import { setAttribute, scrollUp, setTitle, setFavicon, setContentOfHeader, setContentOfMain, setContentOfFooter, importCSSFromList, importJSFromList } from "https://js.nether.click/nether.js"

setAttribute("html", "lang", "en")

setFavicon("img/icons/favicon.png")

importCSSFromList([
    "https://web-ui.nether.click/components/css/logo.css",
    "https://web-ui.nether.click/fonts/lexend/lexend.css",
    "https://web-ui.nether.click/components/css/body.css",
    "https://web-ui.nether.click/components/css/header.css",
    "https://web-ui.nether.click/components/css/headings.css",
    "https://web-ui.nether.click/components/css/main.css",
    "https://web-ui.nether.click/components/css/header.css",
    "https://web-ui.nether.click/components/css/footer.css",
    "https://web-ui.nether.click/components/css/grouped-list.css",
    "https://web-ui.nether.click/components/css/section.css",
    "https://web-ui.nether.click/components/css/p.css",
    "https://web-ui.nether.click/components/css/a.css",
    "https://web-ui.nether.click/components/css/all.css",
    "https://web-ui.nether.click/components/css/table.css",
    "https://web-ui.nether.click/components/css/tabs-switching.css",
])

importJSFromList([
    "https://web-ui.nether.click/components/js/tabs-switching.js",
])

setContentOfHeader(`
    <button class="logo" onclick="showHome()" title="Displays Home Page">
        <img src="img/icons/favicon.png" alt="dqnx dev logo">
    </button>
`)

setContentOfFooter(`
    <button onclick="showHome()" title="Displays Home Page">
        <img src="img/icons/favicon.png" alt="dqnx dev logo">
    </button>
    <button onclick="showAbout()" title="Displays About Page">
        <img src="img/links-icons/about.svg" alt="About page link icon">
    </button>
`)

window.showHome = showHome
window.showAbout = showAbout

function showHome() {
    scrollUp()
    setTitle("dqnx dev")
    setContentOfMain(`
        <h1>dqnx dev</h1>
        <section>
            <h2>Links</h2>
            <div class="grouped-list">
                <button class="item" onclick="showAbout()">About</button>
            </div>
        </section>
    `)
}

function showAbout() {
    scrollUp()
    setTitle("About - dqnx dev")
    setContentOfMain(`
        <h1>About</h1>
        <section>
            <div class="tabs-switching">
                <div class="tabs">
                    <button class="tab active" onclick="showTab('who_i_am')" data-tab="who_i_am">Who I am</button>
                    <button class="tab" onclick="showTab('contact')" data-tab="contact">Contact</button>
                    <button class="tab" onclick="showTab('programming_languages_skills')" data-tab="programming_languages_skills">Programming Languages Skills</button>
                </div>

                <div class="tab-content active" id="who_i_am">
                    <h2>Who i am</h2>
                    <p>I am a student interested in coding and technology. Here you’ll find a collection of my projects,
                        along with details about my programming language skills.</p>
                </div>
                <div class="tab-content" id="contact">
                    <h2>Contact</h2>
                    <p>Email: <a href="mailto:dqnx-dev@outlook.com">dqnx-dev@outlook.com</a></p>
                    <p>Github: <a href="https://github.com/dqnx19">https://github.com/dqnx19</a></p>
                </div>
                <div class="tab-content" id="programming_languages_skills">
                    <h2>Programming Languages Skills</h2>
                    <table>
                        <tr>
                            <td>Language</td>
                            <td>Level of skill</td>
                        </tr>
                        <tr>
                            <td>HTML</td>
                            <td>Intermediate</td>
                        </tr>
                        <tr>
                            <td>CSS</td>
                            <td>Intermediate</td>
                        </tr>
                        <tr>
                            <td>Javascript</td>
                            <td>Basic</td>
                        </tr>
                        <tr>
                            <td>Python</td>
                            <td>Basic</td>
                        </tr>
                        <tr>
                            <td>PowerShell</td>
                            <td>Basic</td>
                        </tr>
                        <tr>
                            <td>Batch (windows cmd)</td>
                            <td>Basics</td>
                        </tr>
                    </table>
                </div>
            </div>
        </section>
    `)
}

showHome()