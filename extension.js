// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const prettier = require('prettier');

const functionalReact = require('./templates/functionalReact');
const classReact = require('./templates/classReact');

const mapping = {
  func: functionalReact,
  class: classReact
};

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "create-react-component" is now active!'
  );

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    'extension.createFunctionalReactComponent',
    function() {
      createComponentFromTemplate('func');
    }
  );

  context.subscriptions.push(disposable);

  disposable = vscode.commands.registerCommand(
    'extension.createReactClassComponent',
    function() {
      createComponentFromTemplate('class');
    }
  );
  context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

function createComponentFromTemplate(type) {
  // The code you place here will be executed every time your command is executed
  const editor = vscode.window.activeTextEditor;
  if (editor) {
    let document = editor.document;
    let selection = editor.selection;

    // Get the word within the selection
    let word = document.getText(selection);
    let templateFn = mapping[type];
    let template = templateFn(word);
    template = prettier.format(template);

    editor.edit(editBuilder => {
      editBuilder.replace(selection, template);
    });
  }

  // Display a message box to the user
  // vscode.window.showInformationMessage('Hello World!');
}

module.exports = {
  activate,
  deactivate
};
