exports.onInitialClientRender = () => {
  var includeInDevelopment = window.IntercomIncludeInDevelopment === undefined ? false : window.IntercomIncludeInDevelopment
  if ((includeInDevelopment || process.env.NODE_ENV === `production`) && typeof Intercom === `function` && window.IntercomAppId) {
    window.Intercom("boot", {
      app_id: window.IntercomAppId
    });
  }
}

exports.onRouteUpdate = function({ location }) {
  var includeInDevelopment = window.IntercomIncludeInDevelopment === undefined ? false : window.IntercomIncludeInDevelopment
  if ((includeInDevelopment || process.env.NODE_ENV === `production`) && typeof Intercom === `function` && window.IntercomAppId) {
    window.Intercom("update");
  }
}
