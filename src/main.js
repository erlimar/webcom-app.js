// Copyright (c) E5R Development Team. All rights reserved.
// Licensed under the Apache License, Version 2.0. More license information in LICENSE.

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