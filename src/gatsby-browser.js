'use strict';

var isEnabled = function isEnabled() {
  const excludePath = window.IntercomExcludePath;

  return (window.IntercomIncludeInDevelopment || process.env.NODE_ENV === 'production') && typeof Intercom === 'function' && window.IntercomAppId && !excludePath.includes(location.pathname);
};

const locale = localStorage.getItem('gatsby-i18next-language') || 'ru';

const initIntercom = () => {
  window.Intercom('boot', {
    app_id: window.IntercomAppId,
    language_override: locale,
  });
};

exports.onInitialClientRender = function () {
  if (!isEnabled()) {
    return;
  }

  initIntercom();
};

exports.onRouteUpdate = function () {
  if (!isEnabled()) {
    window.Intercom('hide');
    window.Intercom('update', {
      hide_default_launcher: true,
    });
    return;
  }

  if (Intercom('getVisitorId') === undefined) {
    initIntercom();
    return;
  }

  window.Intercom('update', {
    hide_default_launcher: false,
  });
};
