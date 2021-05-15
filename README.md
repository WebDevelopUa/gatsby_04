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

---

Requirements:

- [Node.js](https://nodejs.org/uk/)
- [Netlify](https://www.netlify.com)
- [Airtable.js](https://www.npmjs.com/package/airtable)

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
