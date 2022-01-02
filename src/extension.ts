// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { convert, PublicOptions } from "xhtml2pug";

function transformSelections(
  editor: vscode.TextEditor,
  parser: "html" | "vue"
) {
  let selections = editor.selections;
  const vscodeConfig = vscode.workspace.getConfiguration(
    "xhtml2pug",
    editor.document.uri
  );

  const options: PublicOptions = {
    attrComma: vscodeConfig.get("commas") ?? false,
    bodyLess: vscodeConfig.get("fragment") ?? true,
    classesAtEnd: vscodeConfig.get("classesAtEnd") ?? false,
    inlineCSS: vscodeConfig.get("inlineCSS") ?? false,
    doubleQuotes: vscodeConfig.get("doubleQuotes") ?? false,
    encode: vscodeConfig.get("encode") ?? true,
    symbol:
      vscodeConfig.get("indent") === "tabs"
        ? "\t"
        : " ".repeat(vscodeConfig.get("numberOfSpaces") ?? 2),
    parser,
  };

  return selections.map((selection) => {
    const htmlCode = editor.document.getText(selection);
    return convert(htmlCode, options);
  });
}

function replaceSelections(editor: vscode.TextEditor, fragments: string[]) {
  editor.edit((builder) => {
    fragments.forEach((fragment, i) => {
      if (!fragment) {
        return;
      }
      builder.replace(editor.selections[i], fragment);
    });
  });
}

const createCommand = (parser: "html" | "vue") => {
  return () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showInformationMessage("No editor is selected");
      return;
    }
    try {
      replaceSelections(editor, transformSelections(editor, parser));
    } catch (err) {
      vscode.window.showErrorMessage(`Error: ${(err as Error).message}`);
    }
  };
};
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let transformHTML2Pug = vscode.commands.registerCommand(
    "vscode-xhtml2pug.transformHTML2Pug",
    createCommand("html")
  );

  let transformVue2Pug = vscode.commands.registerCommand(
    "vscode-xhtml2pug.transformVue2Pug",
    createCommand("vue")
  );

  context.subscriptions.push(transformHTML2Pug, transformVue2Pug);
}

// this method is called when your extension is deactivated
export function deactivate() {}
