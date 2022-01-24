const isEnabled = () => ((window.IntercomIncludeInDevelopment || process.env.NODE_ENV === `production`) && typeof Intercom === `function` && window.IntercomAppId)

exports.onInitialClientRender = () => {
  if (!isEnabled()) {
    return
  }

  window.Intercom('boot', {
    app_id: window.IntercomAppId,
    hide_default_launcher: window.HideDefaultLauncher,
  })
}

exports.onRouteUpdate = function ({ location }) {
  if (!isEnabled()) {
    return
  }

  window.Intercom('update')
}
