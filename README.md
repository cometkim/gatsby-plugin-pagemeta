# gatsby-plugin-pagemeta

A GatsbyJS plugin to use comments as page metadata.

## Usage

```bash
yarn add gatsby-plugin-pagemeta
```

Add plugin to the `gatsby-config.js`

```js
plugins: ['gatsby-plugin-pagemeta']
```

See [types](./src/types.ts) for more detail.

## Example

```tsx
// in pages/my-page.js

// @pageMeta:title My Page
// @pageMeta:description An example page

const MyPage: React.FC = () => {
  // ...
};

export default MyPage;
```

This plugin extracts the metadata from comments, so you can query them from otherside like

```graphql
query Navigation {
  allSitePage {
    nodes {
      path
      context {
        pageMeta {
          title
          description
        }
      }
    }
  }
}
```

## License

MIT
