// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const axios = require("axios");

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
async function activate(context) {
  const url = "https://v2.jokeapi.dev/joke/Dark?type=single";

  const onActivate = async () => {
    const response = await axios.get(url);
    // Display a message box to the user
    vscode.window.showInformationMessage(response.data.joke);
  };

  let disposable = vscode.commands.registerCommand(
    "first-extension.darkJoke",
    onActivate
  );

  let disposable2 = vscode.commands.registerCommand(
    "first-extension.getArticles",
    async function () {
      vscode.window.showInformationMessage("Done!");
    }
  );

  context.subscriptions.push(disposable);
  context.subscriptions.push(disposable2);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
