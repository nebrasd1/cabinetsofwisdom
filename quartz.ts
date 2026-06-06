import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"

ExternalPlugin.RecentNotes({
    filter: (f) => f.slug!.startsWith("output/") && !f?.frontmatter?.index
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
