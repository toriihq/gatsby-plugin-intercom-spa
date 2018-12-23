import React from 'react'

exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  const includeInDevelopment = !!(pluginOptions.include_in_development)
  const isEnabled = (includeInDevelopment || process.env.NODE_ENV === 'production')
  if (!isEnabled) {
    return null
  }

  return setPostBodyComponents([
    <script
      key={`gatsby-plugin-intercom-spa`}
      dangerouslySetInnerHTML={{
        __html: `
          window.IntercomAppId = '${pluginOptions.app_id}';
          window.IntercomIncludeInDevelopment = ${includeInDevelopment};
          (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/${pluginOptions.app_id}';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()
          `,
      }}
    />
  ])
}