exports.onInitialClientRender = () => {
  if (process.env.NODE_ENV === `production` && typeof Intercom === `function` && window.IntercomAppId) {
    window.Intercom("boot", {
      app_id: window.IntercomAppId
    });
  }
}

exports.onRouteUpdate = function({ location }) {
  if (process.env.NODE_ENV === `production` && typeof Intercom === `function` && window.IntercomAppId) {
    window.Intercom("update");
  }
}
