// Copyright (c) E5R Development Team. All rights reserved.
// Licensed under the Apache License, Version 2.0. More license information in LICENSE.

const WebComponent = require('./web-component')
const registerComponent = require('./register-component')

/*
  import WebApp from 'webcom-app'
  import AboutPage from './pages/about-page'
  import MePage from './pages/me-page'
  import SignInGuardian from './guardians/signin-guardian'
  import ModernBrowserGuardian from './guardians/modern-browser-guardian'
  
  WebApp()
    .selector('#app-root')
    .resolver(routerResolverFn)
    .route({ path: '/about', component: AboutPage })
    .route({
      path: '/me',
      component: MePage,
      guardians: [ SignInGuardian, ModernBrowserGuardian]
    })
    .attach()

  WebApp.attach() {
    // ...
    document.addEventListener("DOMContentLoaded", WebApp.startup)
  }
*/

window.WebComponent = WebComponent
window.registerComponent = registerComponent

document.addEventListener("DOMContentLoaded", WebApp.startup)