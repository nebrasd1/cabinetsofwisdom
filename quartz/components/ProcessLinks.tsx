import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { FullSlug, SimpleSlug, resolveRelative } from "../util/path"
import { QuartzPluginData } from "../plugins/vfile"
import { byDateAndAlphabetical } from "./PageList"
import style from "./styles/processLinks.scss"
import { Date, getDate } from "./Date"
import { GlobalConfiguration } from "../cfg"

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
  function ProcessLinks({ allFiles, fileData, displayClass, cfg }: QuartzComponentProps) {
    const opts = { ...defaultOptions(cfg), ...userOpts }
    const pages = allFiles.filter(opts.filter).sort(opts.sort)
    const remaining = Math.max(0, pages.length - opts.limit)
    return (
      <div class={`processLinks ${displayClass ?? ""}`}>
        <h3><div class="desc"><a href="/Output/Process" class="internal">{opts.title}</a></div></h3>
        <ul class="process-ul">
          {pages.slice(0, opts.limit).map((page) => {
            const title = page.frontmatter?.title

            return (
              <li class="process-li">
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

  ProcessLinks.css = style
  return ProcessLinks
}) satisfies QuartzComponentConstructor
