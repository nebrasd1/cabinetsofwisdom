import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [Component.LinksHeader()],
  afterBody: [],
  footer: Component.Footer({
    links: {
      //GitHub: "https://github.com/jackyzha0/quartz",
      "RSS Overall": "https://cabinetsofwisdom.com/index.xml",
      "RSS Writings & Things I Found": "https://cabinetsofwisdom.com/Output.rss"
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.ConditionalRender({
      component: Component.Epistemic(),
      condition: (page) => page.fileData.slug.startsWith("Output/Writings"),
    }),
    Component.ConditionalRender({
      component: Component.Properties(),
      condition: (page) => page.fileData.slug.startsWith("Information"),
    }),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "RECENT OUTPUT",
        limit: 4,
        filter: (f) =>
          //f.slug!.startsWith("Output/") && f.slug! !== "Output/index" && f.slug! !== "Output/Writings/index" && f.slug! !== "Output/Things_I_Found/index",
          f.slug!.startsWith("Output/") && !f?.frontmatter?.index,
        linkToMore: "Output/" as SimpleSlug,
      }),
    ),
/*removing highlights
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "RECENT HIGHLIGHTS",
        limit: 4,
        filter: (f) => f.slug!.startsWith("Information/References/") && !f?.frontmatter?.index && !f.frontmatter?.sidebar,
        linkToMore: "Information/References/" as SimpleSlug,
      }),
    ),
*/
  ],
  right: [
    //Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    //Component.Explorer(),
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "RECENT OUTPUT",
        limit: 4,
        filter: (f) =>
          f.slug!.startsWith("Output/") && !f?.frontmatter?.index,
        linkToMore: "Output/" as SimpleSlug,
      }),
    ),
/*removing highlights
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "RECENT HIGHLIGHTS",
        limit: 4,
        filter: (f) => f.slug!.startsWith("Information/References/") && !f?.frontmatter?.index && !f?.frontmatter?.sidebar,
        linkToMore: "Information/References/" as SimpleSlug,
      }),
    ),
*/
  ],
  right: [],
}

/* Extra sections in case we need them:

    Component.DesktopOnly(
      Component.ProcessLinks({
      title: "PROCESS",
      limit: 8,
      filter: (file) => file?.frontmatter?.processLink,
    }),
  ),
    Component.DesktopOnly(
      Component.SidebarLinks({
      title: "LINKS",
      limit: 8,
      filter: (file) => file?.frontmatter?.sidebar,
    }),
  ),
*/
