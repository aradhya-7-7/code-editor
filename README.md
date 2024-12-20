#Code-Editor

A simple code editor built with vanilla JavaScript, allowing users to write HTML, CSS, and JavaScript code in separate panes and preview the live output. The editor also includes a feature to download the written code as a ZIP file.

## Features

- **Three Separate Code Panes:**
  - HTML editor
  - CSS editor
  - JavaScript editor

- **Live Preview:**
  - Instantly see the changes in a preview window as you type.

- **Download as ZIP:**
  - Export your code files (HTML, CSS, JS) as a downloadable ZIP archive.

## Demo

![Code Editor Preview](preview-image.png) *(Replace with actual screenshot or demo GIF)*

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/aradhya-7-7/code-editor.git
   ```

2. Navigate to the project directory:
   ```bash
   cd code-editor
   ```

3. Open the `index.html` file in your browser:
   ```bash
   open index.html
   ```

## Usage

1. Write your code in the HTML, CSS, and JavaScript panes.
2. View the live preview in the output window.
3. Click the "Download as ZIP" button to download your code as a `.zip` file.

## File Structure

```
code-editor/
├── index.html      # Main HTML file containing the editor layout
├── style.css       # Styles for the editor
├── script.js       # Logic for live preview and ZIP download
├── README.md       # Project documentation
└── assets/         # (Optional) Images or other static assets
```

## Technologies Used

- **HTML** for layout
- **CSS** for styling
- **JavaScript** for interactivity and live updates

## How It Works

1. **Live Preview:**
   - Uses the `iframe` element to dynamically render the code written in the HTML, CSS, and JavaScript panes.
   - Listens for changes in the text areas and updates the `iframe` content in real-time.

2. **Download as ZIP:**
   - Generates files in memory using JavaScript.
   - Uses a library like `JSZip` to create a ZIP archive.
   - Prompts the user to download the ZIP file containing the code.

## Future Improvements

- Add syntax highlighting using a library like CodeMirror or Ace Editor.
- Include support for saving and loading projects.
- Enable dark mode for better usability.
- Add more file types (e.g., JSON, Markdown).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request to contribute to the project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by various online code editors like CodePen and JSFiddle.
- Uses [JSZip](https://stuk.github.io/jszip/) for creating ZIP files.

---

Happy Coding! 🎉
