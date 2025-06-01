import { FullSlug, TransformOptions, transformLink} from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import  style from "./styles/properties.scss"

var disablePropertiesComponent = false // enable/disable here
var propertiesExcluded: string [] = [] // Blacklisted properties
var propertiesIncluded: string [] = ["author", "url", "datePublished", "date", "type", "source", "lenses"] // Whitelisted properties

// Mapping property names to look nicer in the website
const displayNameMap: Record<string, string> = {
  datePublished: "Date Published",
  url: "Original Link",
  date: "Date Last Highlighted"
}

function createLinkedElement(fileData: any, opts : any, value: string) {
  let cleanedValue = value.replace(/['"\[\]]+/g, '')
  let href = transformLink(fileData.slug!, cleanedValue, opts)

  return (
    <a  href={href} class="internal">{cleanedValue}</a>
  )
}

function createPropertyElement(key: string, value: any) {
 const displayName = displayNameMap[key] || key //this is needed for the property name mapping we did way above (also adjusts key to DisplayName three lines below)

 // If it's a URL property and a valid URL, create a clickable link
  if (key === "url" && typeof value === "string" && value.startsWith("http")) {
    return (
      <li>
        <span class="property">{displayName}</span>:{" "}
        <a href={value} target="_blank" rel="noopener noreferrer" class="external">
          {value}
        </a>
      </li>
    )
  }

  return(
    <li>
      <span class="property">{displayName}</span>: <span class="value">{value}</span>
    </li>
  )
}

function stringifyValues(strs: any) {
  var valueArray: string[] = [];

  if (strs && typeof strs === "object") {
    for (const s of strs) {
      valueArray.push(s);
    }
  }
  else if (typeof strs === "string") {
      valueArray.push(strs);
  }

  return valueArray;
}

export default (() => {
  function PropertiesWithWorkingLinks({fileData, allFiles}: QuartzComponentProps, ) {
    const opts: TransformOptions = {
      strategy: "shortest",
      allSlugs: allFiles.map((fp) => fp.slug as FullSlug)
    }

    if(disablePropertiesComponent){
      return null
    }

    var propertiesElements = []
    const useWhitelist = propertiesIncluded.length > 0

    if(Object.keys(fileData.frontmatter ?? {}).length > 0){
      for(const [key, value] of Object.entries(fileData.frontmatter ?? {})) {

        var keyIsExcluded = propertiesExcluded.includes(key)
        var keyIsIncluded = propertiesIncluded.includes(key)

        // Choose whitelist or blacklist filtering of properties (changed below to only show whitelisted properties and assume all others are blacklisted)
        // Added a whole section in here to make it so url property shows up as a proper clickable link.
//        if(!keyIsExcluded){
          if((useWhitelist && keyIsIncluded) || (!useWhitelist && !keyIsExcluded)) {
          var linkedElements = []
          var valueStringArray = stringifyValues(value);

          if (valueStringArray.length > 0){
            for(let i=0; i < valueStringArray.length; i++){
              if(valueStringArray[i].includes("[[")){
                if(i > 0){
                  linkedElements.push(", ")
                }
                linkedElements.push(createLinkedElement(fileData, opts, valueStringArray[i]))
              } else if (key === "url" && valueStringArray[i].startsWith("http")) {
                if (i > 0) {
                  linkedElements.push(", ")
                }
                linkedElements.push(
                  <a href={valueStringArray[i]} target="_blank" rel="noopener noreferrer" class="external">
                    {valueStringArray[i]}
                  </a>
                )
              } else{
                linkedElements.push(valueStringArray[i])
              }
            }
          }

//          propertiesElements.push(createPropertyElement(key, linkedElements)) //removed this to add the below which makes sure empty frontmatter isn't added.

// only show non‑empty items
            if (linkedElements.length > 0) {
              propertiesElements.push(createPropertyElement(key, linkedElements))
            }
        }
      }
    }

    if(propertiesElements.length === 0){
      return null
    }
    else{
      return (
        <div class="properties">
          <h3>ℹ️Properties</h3>
          <ul>{propertiesElements}</ul>
        </div>
      )
    }
  }

    PropertiesWithWorkingLinks.css = style
    return PropertiesWithWorkingLinks

  }
) satisfies QuartzComponentConstructor

/* Credit to both https://github.com/gamberoillecito for their author and nextnote from which I built this and to https://github.com/jackyzha0 both the creator and gracious question answerer*/
