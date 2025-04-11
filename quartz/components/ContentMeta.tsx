import { formatDate, getDate } from "./Date" //date modified component stuff
import { Date, getDate } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import { JSX } from "preact"
import style from "./styles/contentMeta.scss"

interface ContentMetaOptions {
  /**
   * Whether to display reading time
   */
  showReadingTime: boolean
  showComma: boolean
}

const defaultOptions: ContentMetaOptions = {
  showReadingTime: true,
  showComma: true,
}

export default ((opts?: Partial<ContentMetaOptions>) => {
  // Merge options with defaults
  const options: ContentMetaOptions = { ...defaultOptions, ...opts }

  function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const text = fileData.text

    if (text) {
       var modifiedSegment: string = "" //date modified component stuff
       var createdSegment: string = "" //date modified component stuff
       const segments: (string | JSX.Element)[] = []

      if (fileData.dates) {
        //segments.push(<Date date={getDate(cfg, fileData)!} locale={cfg.locale} />) //removed for date modified component stuff
        const cfgDefaultDataType = cfg.defaultDateType //date modified component stuff

         if (fileData.dates.created) {
           cfg.defaultDateType = "created"
           createdSegment = formatDate(getDate(cfg, fileData)!)
         }

         if (fileData.dates.modified) {
           cfg.defaultDateType = "modified"
           modifiedSegment = formatDate(getDate(cfg, fileData)!)
         }

         cfg.defaultDateType = cfgDefaultDataType
      }

      // Display reading time if enabled
      if (options.showReadingTime) {
        const { minutes, words: _words } = readingTime(text)
        const displayedTime = i18n(cfg.locale).components.contentMeta.readingTime({
          minutes: Math.ceil(minutes),
        })
        segments.push(<span>{displayedTime}</span>)
      }

      return (
        /*<p show-comma={options.showComma} class={classNames(displayClass, "content-meta")}>
          {segments}
        </p>*/ //date modified component stuff removing this and adding replacement below
        <p class={`content-meta ${displayClass ?? ""}`}>
           Created: {createdSegment} | Modified: {modifiedSegment}
        </p>
      )
    } else {
      return null
    }
  }

  ContentMetadata.css = style

  return ContentMetadata
}) satisfies QuartzComponentConstructor
