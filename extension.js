// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const prettier = require("prettier");


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "create-react-component" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand('extension.createReactComponent', function () {
		// The code you place here will be executed every time your command is executed
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			let document = editor.document;
			let selection = editor.selection;

			// Get the word within the selection
			let word = document.getText(selection);
      let template = `
      
			import React from 'react';
			import PropTypes from 'prop-types';
      
      const ${word} = (props) => {
        return (
          <React.Fragment>
            <div>Hello World!!</div>
          </React.Fragment>
        );
      }

      ${word}.propTypes = {

      }

      export default ${word};
      `;
      template = prettier.format(template);
      
      editor.edit(editBuilder => {
        editBuilder.replace(selection, template);
      });
		}

		// Display a message box to the user
		// vscode.window.showInformationMessage('Hello World!');
	});

	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
