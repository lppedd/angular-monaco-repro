# Monaco Editor reproducer

1. Run `npm install`
2. Run `npm run start`
3. Open the browser's console and verify you see the following error:

   ```text
   ERROR ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
     at new CodeEditorWidget (codeEditorWidget.js:69:252)
     at new StandaloneCodeEditor (standaloneCodeEditor.js:69:9)
     at new StandaloneEditor (standaloneCodeEditor.js:188:9)
     at InstantiationService._createInstance (instantiationService.js:130:24)
     at InstantiationService.createInstance (instantiationService.js:101:27)
     at Object.create (standaloneEditor.js:43:33)
     at App.ngAfterViewInit (app.ts:16:33)
     at callHookInternal (debug_node.mjs:860:14)
     at callHook (debug_node.mjs:887:13)
     at callHooks (debug_node.mjs:841:17)
   ```
