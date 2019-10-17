// Copyright (c) E5R Development Team. All rights reserved.
// Licensed under the Apache License, Version 2.0. More license information in LICENSE.

const WebComponent = require('./web-component')
const registerComponent = require('./register-component')
const router = require('./router')

/*
  // -----------------
  // Idéia
  // -----------------
  
  registerApp({
    selector: '#app-root',
    resolverResolver: routerResolverFn,
    routes: [
      { path: '/about', component: 'AboutPage' },
      { path: '/me', component: 'MePage', guardians: ['SigninGuardian', 'ModernBrowserGuardian'] },
    ]
  })
  
  registerGuardian('SigninGuardian', signinGuardianFn)
  registerGuardian('ModernBrowserGuardian', modernBrowserGuardianFn)
  
  //
  // Startup application engine
  //
  function initFn() {}
  
  //
  //
  //
  function routerResolverFn() {}
  
  // DOMContentLoaded only call initFn
  document.addEventListener("DOMContentLoaded", initFn)
*/

window.WebComponent = WebComponent
window.registerComponent = registerComponent

document.addEventListener("DOMContentLoaded", router)