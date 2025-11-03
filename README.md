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

## Working setup with 20.3.9 and babel/preset-env 7.27.2

1. Run `npx npkill` and clear any cache/build directory
2. Switch to the `angular-20.3.9` branch
3. Run `npm install`
4. Run `npm run start`
5. Verify no errors are present in the browser's console

## Working setup with 20.1.6 and babel/preset-env 7.27.2

1. Run `npx npkill` and clear any cache/build directory
2. Switch to the `angular-20.1.6` branch
3. Run `npm install`
4. Run `npm run start`
5. Verify no errors are present in the browser's console
