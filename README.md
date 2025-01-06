# Rando PDF Maker

Welcome to **Rando PDF Maker**, a lightweight and efficient React application designed to generate randomized PDF files with unique filenames. This app was created to solve a repetitive and time-consuming problem: renaming the same file over and over while testing PDF-related features in other applications.

With **Rando PDF Maker**, you can generate up to 5 PDFs at once, each with a randomized filename composed of an adjective, a color, and an animal (e.g., `daring-blue-elephant.pdf`). This not only saves time but also ensures unique file names every time, making testing smoother and less frustrating.

[randopdf.app](https://randopdf.app)
---

## Features

- **Generate Random PDFs**: Create PDFs with randomized filenames in one click.
- **Batch Generation**: Choose to generate up to 5 PDFs simultaneously.
- **Unique File Names**: Filenames are dynamically composed of a random adjective, color, and animal.
- **Simple and Intuitive UI**: Designed for ease of use with dropdown selection and a single download button.

---

## Tech Stack

- **React**: For building the UI and handling state management.
- **Vite**: For a fast and modern development experience.
- **@react-pdf/renderer**: For generating the PDF documents.

---

## Why This App?

As a developer working with PDF testing, I frequently encountered the hassle of having to rename files manually every time I tested a new scenario. This became repetitive and annoying, especially when I needed to test multiple PDFs simultaneously. **Rando PDF Maker** automates this process, enabling seamless testing without the added frustration of manually renaming files.

---

## Installation & Setup

To get started with the project, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/rando-pdf-maker.git
cd rando-pdf-maker
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

This will launch the app in your default browser. By default, the development server runs on [http://localhost:5173](http://localhost:5173).

### 4. Build for Production

To create a production-ready build of the application:

```bash
npm run build
```

### 5. Preview the Production Build

```bash
npm run preview
```

---

## How It Works

### Randomized Filenames

Each PDF is assigned a filename composed of three random words:

1. **Adjective**: e.g., "daring," "curious," "fearless."
2. **Color**: e.g., "blue," "red," "yellow."
3. **Animal**: e.g., "camel," "duck," "elephant."

For example: `daring-blue-camel.pdf`.

The randomness is achieved using JavaScript functions to shuffle arrays and select elements dynamically from pre-defined lists in a JSON file.

---

### Key Components

1. **Dropdown**: Allows users to select the number of PDFs to generate.
2. **RandomDoc**: Handles the content and layout of each PDF using `@react-pdf/renderer`.
3. **File Generator**: Combines React and DOM manipulation to dynamically create and download PDF files with randomized names.

---

## Contribution

If you have suggestions or ideas to improve this app, feel free to fork the repository and open a pull request. Contributions are always welcome!

---

## License

This project is licensed under the [MIT License](LICENSE).

---

Thank you for checking out **Rando PDF Maker**! If this app has saved you time or made your workflow easier, give it a ⭐️ on GitHub. Happy coding! 🎉
