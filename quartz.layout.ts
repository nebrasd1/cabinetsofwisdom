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
      component: Component.Properties(), //right now using this as epistemic disclosure box.. if i need it for something else, might need to make an offshoot of it.
      condition: (page) => page.fileData.slug.startsWith("Output/Writings"),
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
        { Component: Component.ReaderMode() },
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
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "RECENT HIGHLIGHTS",
        limit: 4,
        filter: (f) => f.slug!.startsWith("Information/References/") && !f?.frontmatter?.index && !f.frontmatter?.sidebar,
        linkToMore: "Information/References/" as SimpleSlug,
      }),
    ),
  ],
  right: [
    //Component.Graph(),
    Component.Backlinks(),
    Component.DesktopOnly(Component.TableOfContents()),
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
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "RECENT HIGHLIGHTS",
        limit: 4,
        filter: (f) => f.slug!.startsWith("Information/References/") && !f?.frontmatter?.index && !f?.frontmatter?.sidebar,
        linkToMore: "Information/References/" as SimpleSlug,
      }),
    ),
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
