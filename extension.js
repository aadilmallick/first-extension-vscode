// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const axios = require("axios");
const { XMLParser, XMLBuilder } = require("fast-xml-parser");

const url = "https://news.ycombinator.com/news?p=1";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
async function activate(context) {
  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  const parser = new XMLParser();
  const builder = new XMLBuilder();

  let disposable = vscode.commands.registerCommand(
    "first-extension.darkJoke",
    async function () {
      // The code you place here will be executed every time your command is executed
      const response = await axios.get(
        "https://v2.jokeapi.dev/joke/Dark?type=single"
      );

      // Display a message box to the user
      vscode.window.showInformationMessage(response.data.joke);
    }
  );

  let disposable2 = vscode.commands.registerCommand(
    "first-extension.getArticles",
    async function () {
      // The code you place here will be executed every time your command is executed
      //   const response = await axios.get(url);
      //   const data = parser.parse(response.data);
      //   const xmlContent = builder.build(data);
      //   console.log(data.html);

      // Display a message box to the user
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
