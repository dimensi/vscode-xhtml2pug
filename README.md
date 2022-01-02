# vscode-xhtml2pug README

Transform html to pug inside your Visual Studio Code, forget about using an external page anymore.

<a href="./watch-this.gif"><img src="./watch-this.gif" width="600"></a>

## Features

- Format selection.
- Multiple selections support.
- Keyboard shortcut: <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>p</kbd> / <kbd>⌘ Command</kbd> + <kbd>Alt</kbd> + <kbd>p</kbd>

## Installation

Install this extension from the [VSCode
Marketplace](https://marketplace.visualstudio.com/items?itemName=dimensi.vscode-xhtml2pug)

## Usage

1. Select the html.
   - Hit <kbd>⌘ Command</kbd> + <kbd>⇧ Shift</kbd> + <kbd>p</kbd> / <kbd>Ctrl</kbd> + <kbd>⇧ Shift</kbd> + <kbd>p</kbd>
   - Run `xHTML2Pug: Convert Vue to Pug` or <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>p</kbd> / <kbd>⌘ Command</kbd> + <kbd>Alt</kbd> + <kbd>p</kbd>.
   - Run `xHTML2Pug: Convert HTML to Pug`.

## Keyboard Shortcut

Use the following to embed a shortcut in keybindings.json. Replace with your preferred key bindings.

```json
{
  "key": "ctrl+alt+p",
  "command": "vscode-xhtml2pug.transformVue2Pug"
}
```

You can customize your shortcuts too under: File > Preferences > Keyboard Shortcuts. (Code > Preferences > Keyboard Shortcuts on macOS)
Check [key bindings docs](https://code.visualstudio.com/docs/getstarted/keybindings).

## Extension Settings

This extension contributes the following settings:

- `xhtml2pug.indent` (default: 'spaces'): Indent
- `xhtml2pug.numberOfSpaces` (default: 2): Number of spaces for indents
- `xhtml2pug.fragment` (default: true): Don't wrap into html > body
- `xhtml2pug.commas` (default: false): Commas in attributes
- `xhtml2pug.encode` (default: true): Encode html characters.
- `xhtml2pug.doubleQuotes` (default: false): Use double quotes for attributes
- `xhtml2pug.inlineCSS` (default: false): Place all classes in class attribute
- `xhtml2pug.classesAtEnd` (default: false): Place all classes after attributes
