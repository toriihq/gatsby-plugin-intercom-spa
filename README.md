# gatsby-plugin-intercom-spa

Easily add Intercom to your Gatsby site.

## Install
`npm install --save gatsby-plugin-intercom-spa`

## How to use

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: 'gatsby-plugin-intercom-spa',
    options: {
      app_id: 'YOUR_INTERCOM_APP_ID',
      include_in_development: true,
    }
  }
]
```
