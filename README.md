# webcom-app.js
Aplicativo Web com WebComponents


## Idéia

```html
<html>
  <body>
    <div id="app-root"></div>
  </body>
</html
```

```js
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
  
  /**
   * Startup application engine
   */
  function initFn() {}
  
  /**
   *
   */
  function routerResolverFn() {}
  
  // DOMContentLoaded only call initFn
  document.addEventListener("DOMContentLoaded", initFn)
```
