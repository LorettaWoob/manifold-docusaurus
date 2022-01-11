(self.webpackChunkmanifold_docusaurus=self.webpackChunkmanifold_docusaurus||[]).push([[8116],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(a),h=r,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||o;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2924:function(e,t,a){"use strict";var n=a(7294).createContext(void 0);t.Z=n},5350:function(e,t,a){"use strict";var n=a(7294),r=a(2924);t.Z=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},1232:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var n=a(7294),r=a(6010),o={specContainer:"specContainer_3QmF",specTitleWrapper:"specTitleWrapper_3l3P",specTitle:"specTitle_1y8p",specSubtitle:"specSubtitle_2144",specContent:"specContent_21W2",specTable:"specTable_y2B1"},i=a(5350),s=function(e){var t=void 0===e?props:e,a=t.title,s=t.subtitle,l=t.items,d=t.children,p=(0,i.Z)();p.isDarkTheme,p.setLightTheme,p.setDarkTheme;return n.createElement("div",{className:(0,r.Z)(o.specContainer)},a&&n.createElement("div",{className:(0,r.Z)(o.specTitleWrapper)},n.createElement("span",{className:(0,r.Z)(o.specTitle)},a),s&&n.createElement("span",{className:(0,r.Z)(o.specSubtitle)},s)),l&&n.createElement("div",{className:(0,r.Z)(o.specTable)},n.createElement("table",{width:"100%"},n.createElement("tbody",null,l.map((function(e,t){return n.createElement("tr",{key:e.key},n.createElement("th",{className:(0,r.Z)(o.specKey)},e.key),n.createElement("td",{className:(0,r.Z)(o.specValue)},e.value))}))))),d?n.createElement("div",{className:(0,r.Z)(o.specContent)},d):null)}},3540:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var n=a(4034),r=a(9973),o=(a(7294),a(3905)),i=a(1232),s={id:"resource",title:"Resources",sidebar_label:"Resources"},l={unversionedId:"backend/resource",id:"backend/resource",isDocsHomePage:!1,title:"Resources",description:'const defaultImageFormats = "GIF, JPEG, JPG, PNG";',source:"@site/docs/backend/resource.md",sourceDirName:"backend",slug:"/backend/resource",permalink:"/manifold-docusaurus/docs/backend/resource",editUrl:"https://github.com/ManifoldScholar/manifold-docusaurus/edit/master/docs/backend/resource.md",version:"current",sidebar_label:"Resources",frontMatter:{id:"resource",title:"Resources",sidebar_label:"Resources"},sidebar:"docs",previous:{title:"Texts",permalink:"/manifold-docusaurus/docs/backend/texts"},next:{title:"Resource Collections",permalink:"/manifold-docusaurus/docs/backend/resource_collections"}},d="GIF, JPEG, JPG, PNG",p=[{value:"What Are Resources?",id:"what-are-resources",children:[]},{value:"Interface Overview",id:"interface-overview",children:[]},{value:"Adding New Resources",id:"adding-new-resources",children:[]},{value:"Bulk Adding/Updating Resources",id:"bulk-addingupdating-resources",children:[]},{value:"Settings and Fields",id:"settings-and-fields",children:[{value:"Properties",id:"properties",children:[]},{value:"Variants",id:"variants",children:[]},{value:"Metadata",id:"metadata",children:[]}]}],c={toc:p};function u(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-location"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"location")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Resources are specific to and contained within Manifold Projects. Resources are added and managed in the backend through a Project\u2019s ",(0,o.kt)("strong",{parentName:"p"},"Resource")," sidebar."),(0,o.kt)("p",{parentName:"div"},"Users with ",(0,o.kt)("strong",{parentName:"p"},"Admin"),", ",(0,o.kt)("strong",{parentName:"p"},"Editor"),", or ",(0,o.kt)("strong",{parentName:"p"},"Marketeer")," roles can manage Resources for any Project in an Instance. ",(0,o.kt)("strong",{parentName:"p"},"Project Creators")," can only add and edit Resources for those Projects they have created. Users with the default ",(0,o.kt)("strong",{parentName:"p"},"Reader")," role don\u2019t have access to the backend by default but can be given permission to modify specific Projects and their Resources on a one-off basis (see ",(0,o.kt)("a",{parentName:"p",href:"/manifold-docusaurus/docs/backend/users"},"Users")," and ",(0,o.kt)("a",{parentName:"p",href:"/manifold-docusaurus/docs/backend/projects#managing-access"},"Managing Access"),")."))),(0,o.kt)("h2",{id:"what-are-resources"},"What Are Resources?"),(0,o.kt)("p",null,"Resources are media that support and contextualize a Project\u2019s Texts or function as objects of inquiry, discussion, or exploration unto themselves. Resources can annotate a Project\u2019s Texts in the Reader; display in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Resources")," Content Block on the Project landing page, where they can also be curated into Resource Collections; are collected into a library view within the project; and are individually allotted their own detail page:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Resource Collection Page"',title:'"Resource',Collection:!0,'Page"':!0},"https://{domain-name}/projects/{project-slug}/resource-collection/{collection-slug}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Resource Library Page"',title:'"Resource',Library:!0,'Page"':!0},"https://{domain-name}/projects/{project-slug}/resources\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Resource Detail Page"',title:'"Resource',Detail:!0,'Page"':!0},"https://{domain-name}/projects/{project-slug}/resource/{resource-slug}\n")),(0,o.kt)("p",null,"Resources are tied to individual Projects and can be added to a Project one at a time or in bulk. When a Project is exported, Manifold includes all of a Project\u2019s Resources that it hosts in the export package (see ",(0,o.kt)("a",{parentName:"p",href:"/manifold-docusaurus/docs/backend/projects#exporting-and-preserving"},"Exporting and Preserving"),")."),(0,o.kt)("p",null,"Currently Manifold supports ten different Resource kinds:"),(0,o.kt)("h4",{id:"image"},"Image"),(0,o.kt)("p",null,"Images are static visual elements, with the notable exception of animated GIFs. Photographs, paintings, drawings, diagrams, maps, graphs, charts, musical examples are all examples of Images."),(0,o.kt)(i.Z,{title:"Image Attributes",items:[{key:"Format",value:d},{key:"Filesize",value:"Less than 10 mb (suggested)"},{key:"Variants",value:"High Resolution Image, Thumbnail Image"}],mdxType:"Spec"}),(0,o.kt)("h4",{id:"video"},"Video"),(0,o.kt)("p",null,"Video files can be uploaded into the native Manifold video player, and the application can source content hosted on YouTube of Vimeo for direct play. Manifold supports five video formats, two of which are playable directly in the browser; videos that cannot be played in the browser can be made available to readers for download."),(0,o.kt)(i.Z,{title:"Video Attributes",items:[{key:"Upload Formats",value:"MP4, WEBM, FLV, MOV, AVI"},{key:"Formats Playable in Browser",value:"MP4, WEBM"},{key:"Filesize",value:"Less than 100 mb (suggested)"},{key:"Streaming Formats",value:"YouTube, Vimeo"},{key:"Variants",value:"Variant 1, Variant 2, Poster Image, Thumbnail Image"}],mdxType:"Spec"}),(0,o.kt)("h4",{id:"audio"},"Audio"),(0,o.kt)("p",null,"Audio files can be uploaded into the native Manifold audio player in the MP3, FLAC, and WAV formats. OGG and OAA files can also be loaded, but they won't be playable in the browser, only available for download."),(0,o.kt)(i.Z,{title:"Audio Attributes",items:[{key:"Upload Formats",value:"MP3, FLAC, WAV, OGG, OGA"},{key:"Formats Playable in Browser",value:"MP3, FLAC, WAV"},{key:"Filesize",value:"Less than 100 mb (suggested)"},{key:"Variants",value:"Variant 1, Variant 2"}],mdxType:"Spec"}),(0,o.kt)("h4",{id:"file"},"File"),(0,o.kt)("p",null,"Files can be of any type and are not rendered in the browser. They serve as a means to deliver any kind of content as a download. Zip archives and standalone applications are two such examples."),(0,o.kt)(i.Z,{title:"File Attributes",items:[{key:"Formats",value:"Unrestricted"},{key:"Filesize",value:"Unrestricted"},{key:"Notes",value:"File Resources do not render in the browser; they are download only."}],mdxType:"Spec"}),(0,o.kt)("h4",{id:"link"},"Link"),(0,o.kt)("p",null,"Links reference and direct readers to a location within the application or to a remotely hosted page."),(0,o.kt)(i.Z,{title:"Link Attributes",items:[{key:"Format",value:"URL"}],mdxType:"Spec"}),(0,o.kt)("h4",{id:"pdf"},"PDF"),(0,o.kt)("p",null,"The PDF Resource is an instance of the File Resource specific to PDFs. PDFs are not rendered in the browser by Manifold, though many browsers support that functionality or allow for add-ons that do. If the browser cannot render the PDF, it can be made available as a download."),(0,o.kt)(i.Z,{title:"PDF Attributes",items:[{key:"Format",value:"PDF"},{key:"Filesize",value:"Unrestricted"},{key:"Notes",value:"PDF Resources only render in browsers equipped for that purpose; otherwise they are download only."}],mdxType:"Spec"}),(0,o.kt)("h4",{id:"document"},"Document"),(0,o.kt)("p",null,"The Document Resource is an instance of the File Resource specific to Microsoft Word, Open Office documents, and plain text files. Documents are only available as downloads and do not render in the browser."),(0,o.kt)(i.Z,{title:"Document Attributes",items:[{key:"Formats",value:"DOC, DOCX, TXT, ODT"},{key:"Filesize",value:"Unrestricted"},{key:"Notes",value:"Document Resources do not render in the browser; they are download only."}],mdxType:"Spec"}),(0,o.kt)("h4",{id:"spreadsheet"},"Spreadsheet"),(0,o.kt)("p",null,"The Spreadsheet Resource is an instance of the File Resource specific to Microsoft Excel and Open Office spreadsheets. Spreadsheets are only available as downloads and do not render in the browser."),(0,o.kt)(i.Z,{title:"Spreadsheet Attributes",items:[{key:"Formats",value:"XLS, XLSX, ODS"},{key:"Filesize",value:"Unrestricted"},{key:"Notes",value:"Spreadsheet Resources do not render in the browser; they are download only."}],mdxType:"Spec"}),(0,o.kt)("h4",{id:"presentation"},"Presentation"),(0,o.kt)("p",null,"The Presentation Resource is an instance of the File Resource specific to Microsoft PowerPoint. Presentations are only available as downloads and do not render in the browser."),(0,o.kt)(i.Z,{title:"Presentation Attributes",items:[{key:"Formats",value:"PPT, PPTX, ODP"},{key:"Filesize",value:"Unrestricted"},{key:"Notes",value:"Presentation Resources do not render in the browser; they are download only."}],mdxType:"Spec"}),(0,o.kt)("h4",{id:"interactive"},"Interactive"),(0,o.kt)("p",null,"Interactive Resources use iFrames to bring remotely hosted content like interactive maps, data visualizations, and data analysis tools (e.g., Gephi graphs, H5P applications, Shiny packages from R Studio) into Manifold Projects."),(0,o.kt)(i.Z,{title:"Interactive Attributes",items:[{key:"Formats",value:"URL"},{key:"Variants",value:"Poster Image, Thumbnail"}],mdxType:"Spec"}),(0,o.kt)("h2",{id:"interface-overview"},"Interface Overview"),(0,o.kt)("p",null,"Consistent with the backend views for Projects, the Resource interface is composed of three parts: a header, a sidebar, and an editing pane."),(0,o.kt)("h4",{id:"header"},"Header"),(0,o.kt)("p",null,"The header for the Resources view is the same as for all other Project-level Sidebar items, denoting the title and subtitle of the Project along with buttons to ",(0,o.kt)("strong",{parentName:"p"},"Preview")," or ",(0,o.kt)("strong",{parentName:"p"},"Delete")," it."),(0,o.kt)("p",null,"When individual Resource records are accessed, the header adjusts to the context, changing the functionality of those buttons: ",(0,o.kt)("strong",{parentName:"p"},"Preview")," opens the to the Resource\u2019s detail page, instead of the Project homepage, and ",(0,o.kt)("strong",{parentName:"p"},"Delete")," removes the specific Resource from the system, versus deleting the entire Project."),(0,o.kt)("h4",{id:"sidebar"},"Sidebar"),(0,o.kt)("p",null,"The Sidebar\u2019s ",(0,o.kt)("strong",{parentName:"p"},"Resource")," menu opens a view where new Resources can be added individually or in bulk and existing Resources can be searched through and filtered in a paginated list. When an individual Resource record is selected, the Sidebar will display new options specific to that Resource, described fully in ",(0,o.kt)("a",{parentName:"p",href:"/manifold-docusaurus/docs/backend/resource#settings-and-fields"},"Settings and Fields")," below."),(0,o.kt)("h4",{id:"editing-pane"},"Editing Pane"),(0,o.kt)("p",null,"To the right of the sidebar, the Editing Page displays a search bar with filtering options to sort through and find one ore more existing Resources that match a set of criteria, below which are options to add new Resources individually or in bulk to the Project, followed by a paginated list of all the Project\u2019s Resources, which can be selected and modified individually."),(0,o.kt)("p",null,"The search bar accepts keyword searches only and no search operators. Search results display beneath in the Resource list. Within the search bar are two buttons: ",(0,o.kt)("strong",{parentName:"p"},"Reset")," and ",(0,o.kt)("strong",{parentName:"p"},"Options"),". The ",(0,o.kt)("strong",{parentName:"p"},"Reset")," button clears the search bar and resets all of the filters. The ",(0,o.kt)("strong",{parentName:"p"},"Options")," button brings up two search filters and a sorting field to order the results."),(0,o.kt)("p",null,"The search filters, ",(0,o.kt)("strong",{parentName:"p"},"Select a tag")," and ",(0,o.kt)("strong",{parentName:"p"},"Select a type"),", are dropdown fields that surface lists of tags or Resource types (e.g., Image, Video) that are associated with existing Resources in the Project. Only one listing from each dropdown filter can be selected at a time. These filters can be used in conjunction with a keyword search or without, thereby filtering all Project Resources by tag and/or type."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Order Results")," dropdown has options to sort matching results alphabetically by title or by the date."),(0,o.kt)("h2",{id:"adding-new-resources"},"Adding New Resources"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Add a new resource")," button changes the view, bringing up the New Resource page, where Resources are added to the system individually. This page contains a number of fields, most prominent of which is ",(0,o.kt)("strong",{parentName:"p"},"Kind"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Kind")," field displays as a grid of thumbnails, each thumbnail corresponding to one of the ten different Manifold Resource kinds. The kind of Resource chosen affects which fields follow below. Generally, the system expects a user to choose a Resource kind, provide it a name in the ",(0,o.kt)("strong",{parentName:"p"},"Title")," field, and then use the ",(0,o.kt)("strong",{parentName:"p"},"File")," field to load the Resource file\u2014or, for remotely hosted Resources like ",(0,o.kt)("strong",{parentName:"p"},"URL")," or ",(0,o.kt)("strong",{parentName:"p"},"Interactive"),", supply a URL."),(0,o.kt)("p",null,"Users cannot proceed beyond this step until a Kind, Title, and File/URL have been provided. Once they have, the system will redirect the user to the Resource Detail Page described in the ",(0,o.kt)("a",{parentName:"p",href:"/manifold-docusaurus/docs/backend/resource#settings-and-fields"},"Settings and Fields")," section below."),(0,o.kt)("h2",{id:"bulk-addingupdating-resources"},"Bulk Adding/Updating Resources"),(0,o.kt)("p",null,"Below the search bar, the ",(0,o.kt)("strong",{parentName:"p"},"Bulk add resources")," button brings up a new interface, categorized into a series of steps, where Resources can be added to a Project in bulk or where you can update in bulk those Resources that are already in the Project."),(0,o.kt)("p",null,"Integration with Google Services is ",(0,o.kt)("em",{parentName:"p"},"required")," for the bulk add process to work; files intended for upload are fetched from a ",(0,o.kt)("em",{parentName:"p"},"publicly viewable")," Google Drive folder (see ",(0,o.kt)("a",{parentName:"p",href:"../administering/configuring/integration_settings#google-services"},"Integrations"),"). No other repository integrations are presently supported (e.g., OneDrive, Box, Dropbox)."),(0,o.kt)("h4",{id:"step-1-upload"},"Step 1: Upload"),(0,o.kt)("p",null,"This step provides Manifold with the metadata file it uses to populate the fields for each new Resource it is creating\u2014or to update metadata for existing Resources."),(0,o.kt)("p",null,"Manifold accepts comma separated files with either TXT or CSV extensions, which can be dropped onto the ",(0,o.kt)("strong",{parentName:"p"},"Upload a CSV")," field or selected using your device\u2019s file system by clicking the Upload a File link."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Alternatively"),", Manifold can source the metadata from Google Sheet that is ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"publicly viewable"))," when the URL to that sheet is included in the ",(0,o.kt)("strong",{parentName:"p"},"Google Sheets URL")," field."),(0,o.kt)("p",null,"In either case, uploading a file or referencing a Google Sheet, Manifold expects the data to include column heads corresponding to metadata fields, with each row describing the information about the individual Resources, as in ",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1wIhuLf09DsbUQ96Cmd8snM0Nq-dYwKp7kYaO6cFyffk/edit#gid=1184586745"},"this template"),"."),(0,o.kt)("h4",{id:"step-2-describe-data"},"Step 2: Describe Data"),(0,o.kt)("p",null,"The next two fields, categorized as Step 2, instruct Manifold how to understand the supplied metadata file."),(0,o.kt)("p",null,"The first, ",(0,o.kt)("strong",{parentName:"p"},"Which Row Contains the Column Headers"),", is a dropdown with input values ranging from 1\u20136. The system wants to know the row number where the column headers are in the metadata file. It will scrape the headers from the file for a later step, and knowing where the headers are allow the system to understand where in the sheet the information about the individual Resources begin."),(0,o.kt)("p",null,"The second field, ",(0,o.kt)("strong",{parentName:"p"},"Enter the Storage Identifier"),", tells Manifold which Google Drive folder from which to secure the Resources named in the metadata file. The system ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"does not"))," want the URL for the Drive folder; instead, it wants the folder\u2019s identity, which appears as a string of numbers and digits following ",(0,o.kt)("inlineCode",{parentName:"p"},"folders/")," in the URL."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"https://drive.google.com/drive/folders/{storage-identifier}\n")),(0,o.kt)("h4",{id:"step-3-map-columns-to-resource-attributes"},"Step 3: Map Columns to Resource Attributes"),(0,o.kt)("p",null,"The third step appears in its own view, with two containers, labeled ",(0,o.kt)("strong",{parentName:"p"},"Spreadsheet Columns")," and ",(0,o.kt)("strong",{parentName:"p"},"Available Attributes")," sitting below a button named ",(0,o.kt)("strong",{parentName:"p"},"Automatically Map Attributes"),"."),(0,o.kt)("p",null,"Here the interface displays in the Spreadsheet Column container the header labels it scraped from the metadata sheet in Step 2, beside the system\u2019s metadata attributes in the Available Attributes container."),(0,o.kt)("p",null,"Listings in the containers appear as ribbons with notches that fit together. Using a mouse to click and drag listings from ",(0,o.kt)("strong",{parentName:"p"},"Available Attributes")," to the ",(0,o.kt)("strong",{parentName:"p"},"Spreadsheet Columns")," container, metadata from the supplied file can be mapped to the appropriate fields in Manifold one by one."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Automatically Map Attributes")," will attempt to automatically match the attributes from the supplied metadata file to the system attributes, based off the wording of the column heads. Items that aren\u2019t mapped correctly can be manually adjusted."),(0,o.kt)("p",null,"This interface does not support keyboard controls at this time."),(0,o.kt)("h4",{id:"step-4-import-resources"},"Step 4: Import Resources"),(0,o.kt)("p",null,"The last step of the bulk upload process confirms what is being imported. The view includes a scrollable list of all the Resources Manifold is bringing into the project. Each row in this view corresponds to a row from the supplied metadata sheet. Manifold will indicate in each listing if it is creating a new Resource or updating an existing one with the material provided."),(0,o.kt)("p",null,"About the listings are two button options. ",(0,o.kt)("strong",{parentName:"p"},"Start Import")," will begin kick off the process where Resources are harvested and created in the system. The ",(0,o.kt)("strong",{parentName:"p"},"Back")," button returns the view to Step 3."),(0,o.kt)("p",null,"Once initiated, the import process may take a few moments to complete. As the system works, Manifold will provide regular status updates."),(0,o.kt)("p",null,"When the process is complete, the buttons above the listings will change to ",(0,o.kt)("strong",{parentName:"p"},"Back to Resources")," and ",(0,o.kt)("strong",{parentName:"p"},"Reset Import"),", and the individual listings will show with check marks or X\u2019s denoting whether the import was successful. "),(0,o.kt)("p",null,"Line items for failed imports will include a reason for the failure. The ",(0,o.kt)("strong",{parentName:"p"},"Reset Import")," button refreshes the Step 4 view, maintaining all of the settings from steps 1\u20133, to more easily run the import after correcting for any failures.  "),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Back to Resources")," button returns to the view to the main Resources view."),(0,o.kt)("h2",{id:"settings-and-fields"},"Settings and Fields"),(0,o.kt)("p",null,"Each Resource loaded to Manifold has its own discrete settings that are configurable and which can be accessed when you select a Resource from the Editing Pane. Doing so transforms the view, alters the functionality in the header (see ",(0,o.kt)("a",{parentName:"p",href:"/manifold-docusaurus/docs/backend/resource#interface"},"Interface"),"), and makes available a Resource-specific sidebar with the following options."),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("p",null,"Unless otherwise noted, the following attributes are common to all Resource kinds:"),(0,o.kt)("h4",{id:"kind"},"Kind"),(0,o.kt)("p",null,"The values in this dropdown correspond to the ten different Manifold Resource types and instruct the system how to understand the Resource. If this field is changed for an existing Resource, the system will retain values for attributes shared between the two kinds.\nTitle"),(0,o.kt)("p",null,"This is the display name of the Resource. It appears under the Resource thumbnail in the left margin of the Reader when the Resource is placed as a Text annotation, in the Resource modal window in the Reader, in the Resource library and detail page, and in the ",(0,o.kt)("strong",{parentName:"p"},"Resources")," Content Block and Resource Collection views."),(0,o.kt)("p",null,"The value in this field is also baked into the metadata that Manifold shares with other systems, crawlers, and social media platforms."),(0,o.kt)("p",null,"This field accepts Markdown formatting, though other systems the Resource is shared with may not."),(0,o.kt)("h4",{id:"sort-title"},"Sort Title"),(0,o.kt)("p",null,"Manifold sorts Resources alphabetically in lists and library views based on the value saved here. When left blank the system will instead use the value from the ",(0,o.kt)("strong",{parentName:"p"},"Title")," field."),(0,o.kt)("h4",{id:"fingerprint"},"Fingerprint"),(0,o.kt)("p",null,"A Resource\u2019s fingerprint is its own unique ID in the system. If a fingerprint value is not defined for a Resource when brought into the system, Manifold will assign a random UUID to it in this space."),(0,o.kt)("p",null,"Values entered here should be unique not just to the Project but to ",(0,o.kt)("em",{parentName:"p"},"the entire Manifold instance"),"."),(0,o.kt)("h4",{id:"slug"},"Slug"),(0,o.kt)("p",null,"A Resource slug appears as the final component of the the URL for its detail page: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"```html\nhttps://{domain-name}/projects/{project-slug}/resource/{resource-slug}\n```\n")),(0,o.kt)("p",null,"If left blank, the system will automatically create a slug for each new Resource based on its title."),(0,o.kt)("h4",{id:"tags"},"Tags"),(0,o.kt)("p",null,"Tags function as filters on the Resource library and detail pages, relating different Resources by theme or framework."),(0,o.kt)("p",null,"This field is a typeahead dropdown field pre-populated with existing tags that have already been associated with other Resources in the instance. New tags can be added to the system by typing them into this field. Once entered, tags appear in the container below the dropdown with an ",(0,o.kt)("strong",{parentName:"p"},"\xd7")," button beside their name, which removes them from the Resource."),(0,o.kt)("p",null,"Tags associated with Texts are distinct in the system from those associated with Resources."),(0,o.kt)("h4",{id:"description"},"Description"),(0,o.kt)("p",null,"This is a Markdown-enabled field meant to capture a detailed account of the Resource, which is rendered on the Resource\u2019s detail page and in the Manifold Reader modal for Resource annotations."),(0,o.kt)("h4",{id:"caption"},"Caption"),(0,o.kt)("p",null,"Copy saved here is intended to provide a brief statement about the Resource\u2019s context within the Project and provide information about its source."),(0,o.kt)("p",null,"Copy from this Markdown-enabled field appears with the Resource in frontend views and is baked into the metadata that Manifold shares with other systems, crawlers, and social media platforms. Those other systems will likely ",(0,o.kt)("em",{parentName:"p"},"not")," honor Markdown formatting and render the syntax as is."),(0,o.kt)("p",null,"The following two fields apply only to ",(0,o.kt)("strong",{parentName:"p"},"Image"),", ",(0,o.kt)("strong",{parentName:"p"},"Video"),", ",(0,o.kt)("strong",{parentName:"p"},"Audio"),", ",(0,o.kt)("strong",{parentName:"p"},"File"),", ",(0,o.kt)("strong",{parentName:"p"},"PDF"),", ",(0,o.kt)("strong",{parentName:"p"},"Document"),", ",(0,o.kt)("strong",{parentName:"p"},"Spreadsheet"),", and ",(0,o.kt)("strong",{parentName:"p"},"Presentation")," Resources. However, these will not show for ",(0,o.kt)("strong",{parentName:"p"},"Video")," Resources that are sourcing content from YouTube or Vimeo."),(0,o.kt)("h4",{id:"allow-download"},"Allow Download?"),(0,o.kt)("p",null,"Manifold does not make the Resource file loaded in the system available for download on the frontend unless this slider is toggled on. When on, a ",(0,o.kt)("strong",{parentName:"p"},"Download")," button displays on the Resource\u2019s detail page."),(0,o.kt)("p",null,"The slider defaults to the on position when a new Resource is created."),(0,o.kt)("h4",{id:"file-1"},"File"),(0,o.kt)("p",null,"This field displays the existing Resource file that was uploaded to the system. New files to replace the existing one can be dropped onto this field or selected using your device\u2019s file system by clicking the ",(0,o.kt)("strong",{parentName:"p"},"Upload a File")," link."),(0,o.kt)("h4",{id:"is-this-an-externally-linked-video"},"Is This an Externally Linked Video?"),(0,o.kt)("p",null,"This toggle, which applies only to ",(0,o.kt)("strong",{parentName:"p"},"Video")," Resources, tells Manifold whether the video is being uploaded to the system or if it is to be sourced from YouTube or Vimeo."),(0,o.kt)("p",null,"When toggled on, Manifold will fetch the video from the third party using the information from the following two fields that replace the standard ",(0,o.kt)("strong",{parentName:"p"},"File")," upload field."),(0,o.kt)("h4",{id:"video-id"},"Video ID"),(0,o.kt)("p",null,"The value in this field, which is offered only to ",(0,o.kt)("strong",{parentName:"p"},"Video")," Resources, identifies which specific video file Manifold should target on YouTube or Vimeo to bring in as a Resource."),(0,o.kt)("p",null,"This field ",(0,o.kt)("em",{parentName:"p"},"is not")," expecting a full URL, only a component of it. For YouTube, the ID follows after ",(0,o.kt)("inlineCode",{parentName:"p"},"?v="),"; and for Vimeo, it follows after ",(0,o.kt)("inlineCode",{parentName:"p"},"vimeo.com/"),"."),(0,o.kt)(i.Z,{title:"Video IDs in URLs",mdxType:"Spec"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Platform"),(0,o.kt)("th",{parentName:"tr",align:null},"Video URL"),(0,o.kt)("th",{parentName:"tr",align:null},"Video ID for Manifold"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"YouTube"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"https://www.youtube.com/watch?v=4czjS9h4Fpg")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"4czjS9h4Fpg"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Vimeo"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"https://vimeo.com/493544128")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"493544128")))))),(0,o.kt)("h4",{id:"external-video-type"},"External Video Type"),(0,o.kt)("p",null,"This dropdown, which is offered only to ",(0,o.kt)("strong",{parentName:"p"},"Video")," Resources, has two values, Youtube and Vimeo, and orients Manifold to properly secure the identified video from the correct source."),(0,o.kt)("h4",{id:"link-url"},"Link URL"),(0,o.kt)("p",null,"In place of the standard ",(0,o.kt)("strong",{parentName:"p"},"File")," upload field for Resources that get brought into the system, ",(0,o.kt)("strong",{parentName:"p"},"URL")," Resources instead require a target URL, which should be provided in full, e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"https://www.nasa.gov/"),", ",(0,o.kt)("em",{parentName:"p"},"not")," ",(0,o.kt)("inlineCode",{parentName:"p"},"nasa.gov"),". The ",(0,o.kt)("strong",{parentName:"p"},"Link")," Resource is the only kind with this attribute."),(0,o.kt)("h4",{id:"minimum-width-and-height"},"Minimum Width and Height"),(0,o.kt)("p",null,"These two fields, available only to ",(0,o.kt)("strong",{parentName:"p"},"Interactive")," Resources, provide Manifold with the preferred display ratio for the remotely sourced content. Input should be numerical and understood to be in units of pixels. Both fields are optional."),(0,o.kt)("h4",{id:"iframe-url"},"IFrame URL"),(0,o.kt)("p",null,"This field, specific to ",(0,o.kt)("strong",{parentName:"p"},"Interactive")," Resources, provides the system with the specific path to the remotely hosted content that Manifold will create a Resource around. Input should be the complete source URL, e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://sketchfab.com/models/c1c94e1f69df45eeae4a0a1d0d27e85b/embed\n")),(0,o.kt)("h3",{id:"variants"},"Variants"),(0,o.kt)("p",null,"This sidebar menu only appears for ",(0,o.kt)("strong",{parentName:"p"},"Image"),", ",(0,o.kt)("strong",{parentName:"p"},"Video"),", ",(0,o.kt)("strong",{parentName:"p"},"Audio"),", and ",(0,o.kt)("strong",{parentName:"p"},"Interactive")," Resources. All of the fields in this section anticipate an upload that can be dropped onto the field or selected using your device\u2019s file system by clicking the ",(0,o.kt)("strong",{parentName:"p"},"Upload a File")," link."),(0,o.kt)("h4",{id:"high-resolution-image"},"High Resolution Image"),(0,o.kt)("p",null,"Specific to the ",(0,o.kt)("strong",{parentName:"p"},"Image")," Resource, files loaded to this field are expected to be a higher-resolution alternative/equivalent to the primary Image Resource."),(0,o.kt)("p",null,"Manifold does not display the High Resolution Image in the application; instead, the hi-res file supplants the display version when provided as a download (see ",(0,o.kt)("strong",{parentName:"p"},"Allow Download?")," in ",(0,o.kt)("a",{parentName:"p",href:"/manifold-docusaurus/docs/backend/resource#properties"},"Properties"),")."),(0,o.kt)(i.Z,{title:"High Resolution Image Attributes",items:[{key:"Height and Width",value:"Unrestricted"},{key:"Max File Size",value:"Unrestricted"},{key:"Format",value:d}],mdxType:"Spec"}),(0,o.kt)("h4",{id:"poster-image"},"Poster Image"),(0,o.kt)("p",null,"Manifold automatically generates a landscape preview for Resources in a number of views in the frontend: in the modal when a Resource annotates a text in the Reader, on the Resource\u2019s detail page, and on Resource Collection pages."),(0,o.kt)("p",null,"Files loaded here replace the system-generated preview in those spaces."),(0,o.kt)(i.Z,{title:"Poster Image Attributes",items:[{key:"Max-Width",value:"1135 px"},{key:"Max-Height",value:"650 px"},{key:"Format",value:d}],mdxType:"Spec"}),(0,o.kt)("h4",{id:"thumbnail-image"},"Thumbnail Image"),(0,o.kt)("p",null,"Resources appear with thumbnail images in the Reader, when placed as an annotation, and in Collection and Library pages. Manifold also shares thumbnails with other systems, crawlers, and social media platforms."),(0,o.kt)("p",null,"The system will use the Resource file itself to automatically generate that thumbnail or include a system default when it cannot. Files loaded here replace the system-created thumbnails wherever they appear and when shared with other systems."),(0,o.kt)(i.Z,{title:"Thumbnail Image Attributes",items:[{key:"Width",value:"80 px"},{key:"Height",value:"50 px"},{key:"Format",value:d}],mdxType:"Spec"}),(0,o.kt)("h4",{id:"variants-1-and-2"},"Variants 1 and 2"),(0,o.kt)("p",null,"Because browser and system support for media files differ, Manifold accepts in these spaces alternate equivalents of the primary ",(0,o.kt)("strong",{parentName:"p"},"Video")," or ",(0,o.kt)("strong",{parentName:"p"},"Audio")," Resource."),(0,o.kt)("p",null,"For file types playable in the browser, if Manifold determines that the primary Resource file is not supported, it will look for a variant file that may be played instead."),(0,o.kt)(i.Z,{title:"Variant Attributes",items:[{key:"Video Variants",value:"MP4, WEBM, FLV, MOV, AVI"},{key:"Audio Variants",value:"MP3, FLAC, WAV, OFF, OGA"}],mdxType:"Spec"}),(0,o.kt)("h3",{id:"metadata"},"Metadata"),(0,o.kt)("p",null,"This view groups into different categories the available metadata fields that describe a Manifold Resource. Values displayed here appear in the modal overlay for Resources placed as annotations in the Reader, on the Resource detail page, and they are also included in the BagIt archive when a Project is exported (see ",(0,o.kt)("a",{parentName:"p",href:"/manifold-docusaurus/docs/backend/projects#exporting-and-preserving"},"Exporting and Preserving"),")."),(0,o.kt)("p",null,"All of the fields on this page support Markdown formatting with the exception of ",(0,o.kt)("strong",{parentName:"p"},"DOI"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/manifold-docusaurus/docs/backend/metadata"},"Metadata section")," provides definitions for each metadata element shown in this view."))}u.isMDXComponent=!0},6010:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);