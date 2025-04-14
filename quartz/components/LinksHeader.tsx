import { QuartzComponentConstructor } from "./types"
import style from "./styles/linksHeader.scss"

interface Options {
  links: Record<string, string>
}

export default (() => {
  function LinksHeader() {
    return (
      <div>
        <div id="links-header">
          <span>
            <a href="/Output/Things_I_Found/">🌱Output</a>
          </span>
          <span>
            <a href="/Information/References/">🗂️References</a>
          </span>
          <span>
            <a href="/Information/Lenses/">🔎Lenses</a>
          </span>
          <span>
            <a href="/Information/Questions/">❓Questions</a>
          </span>
          <span>
            <a href="/Output/Mistakes">📝Mistakes</a>
          </span>
        </div>
      <hr style="background-color: var(--gray); border-top: 1px var(--gray) solid; margin-top: 1.3rem"></hr>
      </div>
    )
  }

  LinksHeader.css = style
  return LinksHeader
}) satisfies QuartzComponentConstructor

// Below are templates for links (external and internal)
/*
          <span>
            <a href="/Indexes/Logs/">🪵Logs</a>
          </span>

          <span>
            <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Card%20index/Color/card_index_color.svg"></img>
            <a href="https://camargomau.com/">Blog</a>
          </span>

          <span>
            <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Books/Color/books_color.svg"></img>
            <a href="/Sciujo/MAC/MAC">MAC</a>
          </span>
*/
