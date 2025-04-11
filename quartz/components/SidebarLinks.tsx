import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { FullSlug, SimpleSlug, resolveRelative } from "../util/path"
import { QuartzPluginData } from "../plugins/vfile"
import { byDateAndAlphabetical } from "./PageList"
import style from "./styles/sidebarLinks.scss"
import { Date, getDate } from "./Date"
import { GlobalConfiguration } from "../cfg"
import { i18n } from "../i18n/i18next"
import { classNames } from "../util/lang"

interface Options {
  title: string
  limit: number
  linkToMore: SimpleSlug | false
  filter: (f: QuartzPluginData) => boolean
  sort: (f1: QuartzPluginData, f2: QuartzPluginData) => number
}

const defaultOptions = (cfg: GlobalConfiguration): Options => ({
  title: "LINKS",
  limit: 3,
  linkToMore: false,
  filter: () => true,
  sort: byDateAndAlphabetical(cfg),
})

export default ((userOpts?: Partial<Options>) => {
  function SidebarLinks({ allFiles, fileData, displayClass, cfg }: QuartzComponentProps) {
    const opts = { ...defaultOptions(cfg), ...userOpts }
    const pages = allFiles.filter(opts.filter).sort(opts.sort)
    const remaining = Math.max(0, pages.length - opts.limit)
    return (
      <div class={`sidebarLinks ${displayClass ?? ""}`}>
        <h3>{opts.title}</h3>
        <ul class="sidebar-ul">
          {pages.slice(0, opts.limit).map((page) => {
            const title = page.frontmatter?.title

            return (
              <li class="sidebar-li">
                <div class="section">
                  <div class="desc">
                    <p>
                      <a href={resolveRelative(fileData.slug!, page.slug!)} class="internal">
                        {title}
                      </a>
                    </p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  SidebarLinks.css = style
  return SidebarLinks
}) satisfies QuartzComponentConstructor

/* Removed the following from function RecentNotes, under the Date section.. it pertains to adding tags under date.
                    <ul class="tags">
                    {tags.map((tag) => (
                      <li>
                        <a
                          class="internal tag-link"
                          href={resolveRelative(fileData.slug!, `tags/${tag}` as FullSlug)}
                        >
                          #{tag}
                        </a>
                      </li>
                    ))}
                  </ul>
*/

/* original recentnotes stuff
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/sidebarLinks.scss"
import { version } from "../../package.json"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  function SidebarLinks({ displayClass }: QuartzComponentProps) {
    const links = opts?.links ?? []
    return (
      <sidebarLinks class={`${displayClass ?? ""}`}>
        <h3>
          Links
        </h3>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </sidebarLinks>
    )
  }

  SidebarLinks.css = style
  return SidebarLinks
}) satisfies QuartzComponentConstructor
*/
