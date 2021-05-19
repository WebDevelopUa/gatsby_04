# GatsbyJS 3.5 (Static site generator) + Airtable

### Pet-project website built with Gatsby v3.5 & Airtable

## [DEMO link of Frontend](https://xxx.netlify.app/) deployed on Netlify

- Image From External (CDN) Media Storage At [Cloudinary](https://cloudinary.com/)
- Backend for Content => [GitHub repo](https://github.com/...)
- [Frontend](https://xxxxxx.netlify.app) deployed on Netlify => `public` folder

> [localhost:8000](http://localhost:8000) version of Frontend requires [localhost:1337](http://localhost:1337) => run Backend: [Back-end GitHub repo](https://github.com/WebDevelopUa/xxx)

---

- [Gatsby 3.0](https://www.gatsbyjs.com)
- [Quick Start](https://www.gatsbyjs.com/docs/quick-start)
- [Gatsby Starters](https://www.gatsbyjs.com/starters/?v=3)
- [Hello world starter](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-hello-world/)
- [Gatsby Plugin Library](https://www.gatsbyjs.com/plugins/)
- [React icons](https://react-icons.github.io/react-icons/)
- [gatsby-plugin-image](https://www.gatsbyjs.com/plugins/gatsby-plugin-image)
- [Migrating from gatsby-image to gatsby-plugin-image](https://www.gatsbyjs.com/docs/reference/release-notes/image-migration-guide/)
- [Gatsby Image plugin](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/#restrictions-on-using-staticimage)
- [Getting Started with Gatsby](https://strapi.io/documentation/developer-docs/latest/developer-resources/content-api/integrations/gatsby.html#create-a-gatsby-app)
- [prop-types](https://www.npmjs.com/package/prop-types)
- [gatsby-plugin-react-helmet](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/)
- [Adding an Seo Component](https://www.gatsbyjs.com/docs/add-seo-component/)
- **_[Pexels stock photos](https://www.pexels.com/)_**
- **_[Completely Free online photo editing](https://www10.lunapic.com/editor/)_**
- [Favicon](https://favicon.io/favicon-generator/)
- [Inkscape](https://inkscape.org/release/inkscape-1.0.2/)
- [Adalo no code app builder](https://www.adalo.com) [help](https://help.adalo.com)
- [Airtable.js](https://www.npmjs.com/package/airtable)
- [gatsby-background-image](https://www.gatsbyjs.com/plugins/gatsby-background-image/)
- [Tables Generator: LaTeX HTML Text Markdown](https://www.tablesgenerator.com/markdown_tables)

---

Requirements:

- [Node.js](https://nodejs.org/uk/)
- [Netlify](https://www.netlify.com)
- [Airtable.js](https://www.npmjs.com/package/airtable)
- [Airtable](https://airtable.com) - Headless CMS

---

### Run in terminal

```
npm i
```

### Or install Gatsby project manually:

```
npm i -g gatsby-cli
gatsby --version
npm install -g npm@7.10.0
gatsby new gatsby-starter-default https://github.com/gatsbyjs/gatsby-starter-default
gatsby clean
gatsby develop
```

### Check the result:

- [localhost:8000](http://localhost:8000)
- [localhost:8000/\_\_\_graphql](http://localhost:8000/___graphql)

---

## Global styles

with styled-components (without using [global.css](src/components/global.css)) are in [`root-wrapper.js`](root-wrapper.js) file

wrapped in rootElement

```jsx
export const wrapRootElement = ({ element }) => (
  <>
    <GlobalStyle />
    {element}
  </>
)
```

## Background Image on Homepage

[gatsby-background-image](https://www.gatsbyjs.com/plugins/gatsby-background-image/)

Get background image from `images` folder using GraphQL query

```
const query = graphql`
  {
    file(relativePath: {eq: "slider-bg.jpg"}) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`
```

Paste it to [`<Background/>` component](src/components/Background.js)

---

# [Airtable](https://airtable.com) - Headless CMS

- [Free plan](https://airtable.com/pricing) includes

  - Unlimited bases
  - 1,200 records per base
  - 2GB of attachments per base
  - Grid, calendar, kanban, form, & gallery views

- Add a workspace
- Create Base => Grid view => rename columns to lowercase => create new table => [ProjectsSection](src/constants/dataTable-ProjectsSection.csv):

  | name               |                        image                         |                      type                       |    date    |
  | :----------------- | :--------------------------------------------------: | :---------------------------------------------: | :--------: |
  | (single line text) |                     (attachment)                     | (single select): - bathroom - bedroom - kitchen |   (date)   |
  | modern kitchen     |  ![kitchen-1](src/images/temp-images/kitchen-1.png)  |                     kitchen                     | 05/10/2021 |
  | outside bathroom   | ![bathroom-1](src/images/temp-images/bathroom-1.png) |                    bathroom                     | 01/01/2021 |
  | comfy bedroom      |  ![bedroom-1](src/images/temp-images/bedroom-1.png)  |                     bedroom                     | 10/10/2020 |
  | vintage kitchen    |  ![kitchen-2](src/images/temp-images/kitchen-2.png)  |                     kitchen                     | 01/05/2020 |
  | classic bathroom   | ![bathroom-2](src/images/temp-images/bathroom-2.png) |                    bathroom                     | 05/10/2020 |
  | retro bathroom     | ![bathroom-3](src/images/temp-images/bathroom-3.png) |                    bathroom                     | 15/10/2020 |

- Help => API Documentation => INTRODUCTION => The ID of this base is `appScClgH*******`
- Account => Generate API key => `keyYnbZx*********` => copy / paste to `.env.development` & `.env.production`:

```
GATSBY_AIRTABLE_API=keyYnbZxCJ****

GATSBY_AIRTABLE_BASE_ID=appScClgH****
```

- add code to [gatsby-config.js](gatsby-config.js):

```
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_API,
        concurrency: 5,
        tables: [
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
            tableName: `ProjectsSection`,
            mapping: { image: `fileNode` },
          },
        ],
      },
    },
```

- generate GraphQL query:

```
export const query = graphql`
  {
    allAirtable(
      filter: {table: {eq: "ProjectsSection"}}
      limit: 3
      sort: {fields: data___date, order: DESC}
    ) {
      nodes {
        id
        data {
          date
          name
          type
          image {
            localFiles {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
```

- render [Projects](src/components/Projects.js) component

---

- Create Base => Grid view => rename columns to lowercase => create new table => [ReviewSection](src/constants/dataTable-ReviewSection.csv):

| name      |                      image                       | quote                                                                                                                                                       | title  |
| :-------- | :----------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| Mr. Dog   | ![person-1](src/images/temp-images/person-1.jpg) | We have two lives, and the second begins when we realize we only have one. - Confucius                                                                      | Senior |
| Doggy Dog | ![person-2](src/images/temp-images/person-2.jpg) | Words are, in my not-so-humble opinion, our most inexhaustible source of magic. Capable of both inflicting injury, and remedying it. - Professor Dumbledore | Middle |
| True Dog  | ![person-3](src/images/temp-images/person-3.jpg) | It is impossible to begin to learn that which one thinks one already knows. - Epictetus                                                                     | Junior |

- add code to [gatsby-config.js](gatsby-config.js):
- generate GraphQL query:

```
{
  resolve: `gatsby-source-airtable`,
  options: {
    apiKey: process.env.GATSBY_AIRTABLE_API,
    concurrency: 5,
    tables: [
      {
        baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
        tableName: `ProjectsSection`,
        mapping: { image: `fileNode` },
      },
      {
        baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
        tableName: `ReviewSection`,
        mapping: { image: `fileNode` },
      },
    ],
  },
},
```

```
const query = graphql`
  {
    allAirtable(filter: { table: { eq: "ReviewSection" } }) {
      nodes {
        data {
          title
          name
          image {
            localFiles {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          quote
        }
      }
    }
  }
`
```

- render [Slider](src/components/Slider.js) component

---

> Delete package-lock.json before npm update

# Errors

> `npm i gatsby-plugin-offline`
>
> npm WARN deprecated core-js@2.6.12: core-js@<3.3 is no longer maintained and not recommended for usage due to the number
> of issues. Because of the V8 engine whims, feature detection in old core-js versions could cause a slowdown up to 100x ev
> en if nothing is polyfilled.
> Please, upgrade your dependencies to the actual version of core-js.

> ERROR
>
> (node:3700) [DEP0148] DeprecationWarning: Use of deprecated folder mapping "./" in the "exports" field module
> resolution of the package at D:\projects\gatsby_03\node_modules\postcss-js\package.json.
> Update this package.json to use a subpath pattern like "./\*".

### npm audit report

> lodash <=4.17.20
> Severity: high
> Prototype Pollution - https://npmjs.com/advisories/1523
> Command Injection - https://npmjs.com/advisories/1673
> No fix available
> node_modules/gatsby-source-airtable/node_modules/lodash
> airtable <=0.10.0
> Depends on vulnerable versions of lodash
> node_modules/gatsby-source-airtable/node_modules/airtable
> gatsby-source-airtable \*
> Depends on vulnerable versions of airtable
> node_modules/gatsby-source-airtable

---

# Hopefully everything is clear & You'll be good to go
