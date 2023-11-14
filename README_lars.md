# LSP Sample

## Docs

* [Extension API](https://code.visualstudio.com/api)
* [The page of interest](https://code.visualstudio.com/api/language-extensions/language-server-extension-guide)
* [The start project](https://github.com/microsoft/vscode-extension-samples/tree/main/lsp-sample)

## Steps taken

1. Create a copy of [the start project](https://github.com/microsoft/vscode-extension-samples/tree/main/lsp-sample).
2. `package.json`: add a dependency to your parser.
3. `package.json`: update the `name`, `description`, `author`, `version`, `publisher` and `repository` `url`.
4. For debugging, check [this issue on GitHub](https://github.com/microsoft/vscode-extension-samples/issues/836).
   In `launch.json`, add this section:
   ```json
   {
		"type": "node",
		"request": "attach",
		"name": "Attach to Server",
		"address": "localhost",
		"port": 6009,
		"restart": true,
		"sourceMaps": true,
		"outFiles": ["${workspaceRoot}/server/out/**/*.js"]
	},
   ```
   In `client/src/extension.ts`, add these options to `serverOptions`-`debug`
   ```javascript
   const debugOptions = { execArgv: ['--nolazy', '--inspect=6009'] };
   ```
   So:
   ```javascript
   const serverOptions: ServerOptions = {
		run: { module: serverModule, transport: TransportKind.ipc },
		debug: {
			module: serverModule,
			transport: TransportKind.ipc,
			options: debugOptions
		}
	};
   ```
5. Important: the extension only works when typing inside a document with an **explicit** `.txt`
   file extension.
6. Enable the extension for `.java` files:
   * In `package.json`: add `"onLanguage:java"`, after `"onLanguage:plaintext",`
   * In `client/src/extension.ts`: add `{ scheme: 'file', language: 'java' }`, after
     `{ scheme: 'file', language: 'plaintext' },`

### Don't run the Yeoman `yo` commands

**These commands don't give you a template that can easily be used as a language server extension!**
1. `npm install -g yo generator-code` **DON'T run these!**
2. `cd lsp-sample`
3. `yo code .`
etc.
