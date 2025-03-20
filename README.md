# companystylesheet - css 😉

This repository contains CSS which can be used to style things with the Hochfrequenz Corporate Design (aka `hochfrequenz.css`).
Add this repository as a submodule to your frontend project.
Don't forget to checkout submodules in your CI/CD.

## Table of Contents

- [companystylesheet - css 😉](#companystylesheet---css-)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
    - [Submodule Setup](#submodule-setup)
  - [Using Classes and Definitions](#using-classes-and-definitions)
  - [Fonts](#fonts)
  - [Icon System](#icon-system)
    - [Icon Features](#icon-features)
    - [Available Icons](#available-icons)
    - [Icon Usage](#icon-usage)
      - [Example Usage](#example-usage)
    - [Size Variants](#size-variants)
    - [Animation Classes](#animation-classes)
    - [Customization with Tailwind](#customization-with-tailwind)
    - [Showcase Examples](#showcase-examples)
      - [Navigation Elements](#navigation-elements)
      - [Interactive Elements](#interactive-elements)
      - [Information Display](#information-display)
      - [Size Comparison](#size-comparison)
      - [Interactive States](#interactive-states)
    - [Best Practices](#best-practices)
    - [Icon System Build Process](#icon-system-build-process)
      - [Prerequisites](#prerequisites)
      - [Building CSS Files](#building-css-files)
        - [Build CSS once](#build-css-once)
        - [Watch mode for development](#watch-mode-for-development)
      - [Browser Support](#browser-support)
      - [Output](#output)
      - [Integration](#integration)
      - [Development Workflow](#development-workflow)

## Installation

### Submodule Setup

```yaml
- uses: actions/checkout@v4
  with:
    ref: ${{ github.event.workflow_run.head_branch }}
    token: ${{ secrets.CSS_SUBMODULE_ACCESS_TOKEN }} # personal access token (PAT) with repo scope
    # https://github.com/Hochfrequenz/your-repository/settings/secrets/actions/CSS_SUBMODULE_ACCESS_TOKEN
    submodules: 'recursive'
```

## Using Classes and Definitions

You can re-use the colour definitions or classes from the `hochfrequenz.css` file by importing it into your applications CSS file:

```css
@import url('/path/under/which/your/application/serves/hochfrequenz.css');
/* ... */
.my_class {
  background-color: var(--grell-gruen); /* use the colour-definition from hochfrequenz.css here */
}
```

Note that trailing `;` is important.

## Fonts

A main reason to use this submodule may be, that it comes with the `.ttf` font files for both Roboto Condensed and Yanone Kaffeesatz.
Include the fonts like this:

```css
@font-face {
  font-family: 'Roboto';
  src: url(path/to/where/your/application/exposes/the/Roboto-Regular.ttf);
}
@font-face {
  font-family: 'Yanone Kaffeesatz';
  src: url(path/to/where/your/application/exposes/the/YanoneKaffeesatz-Regular.ttf);
}
@font-face {
  font-family: 'Roboto Condensed';
  src: url(path/to/where/your/application/exposes/the/Roboto_Condensed-Regular.ttf);
}
```

## Icon System

The Hochfrequenz Icon System provides a flexible and easy-to-use way to implement SVG icons in your frontend applications.
It's designed to work seamlessly with Tailwind CSS and provides various customization options.

### Icon Features

- Easy color customization using Tailwind's text colors
- Multiple size variants
- Consistent naming convention
- Animation utilities
- Responsive and scalable SVG icons

### Available Icons

| key                     | purpose/description | image                                            |
| ----------------------- | :-----------------: | ------------------------------------------------ |
| `hf-icon-login`         |     Login icon      | ![Login Icon](icons/login.svg)                   |
| `hf-icon-logout`        |     Logout icon     | ![Logout Icon](icons/logout.svg)                 |
| `hf-icon-open-new`      | Open in new window  | ![Open New Icon](icons/openinnew.svg)            |
| `hf-icon-up`            |      Up arrow       | ![Up Arrow Icon](icons/up.svg)                   |
| `hf-icon-down`          |     Down arrow      | ![Down Arrow Icon](icons/down.svg)               |
| `hf-icon-up-down`       | Up and down arrows  | ![Up Down Arrows Icon](icons/updown.svg)         |
| `hf-icon-glossar-left`  |    Glossary left    | ![Glossary Left Icon](icons/glossar_links.svg)   |
| `hf-icon-glossar-right` |   Glossary right    | ![Glossary Right Icon](icons/glossar_rechts.svg) |
| `hf-icon-check-1`       |  Checkmark style 1  | ![Checkmark 1 Icon](icons/haken1.svg)            |
| `hf-icon-check-2`       |  Checkmark style 2  | ![Checkmark 2 Icon](icons/haken2.svg)            |
| `hf-icon-check-3`       |  Checkmark style 3  | ![Checkmark 3 Icon](icons/haken3.svg)            |
| `hf-icon-heart`         |     Heart icon      | ![Heart Icon](icons/herz.svg)                    |
| `hf-icon-info`          |  Information icon   | ![Info Icon](icons/info.svg)                     |
| `hf-icon-left`          |     Left arrow      | ![Left Arrow Icon](icons/links.svg)              |
| `hf-icon-download`      |    Download icon    | ![Download Icon](icons/download.svg)             |
| `hf-icon-filter`        |     Filter icon     | ![Filter Icon](icons/filter.svg)                 |
| `hf-icon-question`      |    Question mark    | ![Question Icon](icons/frage.svg)                |
| `hf-icon-growing-plant` | Growing plant icon  | ![Growing Plant Icon](icons/growing_plant.svg)   |

### Icon Usage

1. Include the `icons.css` file in your project:

```html
<link rel="stylesheet" href="path/to/icons.css">
```

2. Use icons in your HTML with the following pattern:

```html
<span class="hf-icon-[name] text-[color]"></span>
```

#### Example Usage

```html
<!-- Basic icon usage -->
<span class="hf-icon-heart"></span>

<!-- Colored icon using Tailwind -->
<span class="hf-icon-heart text-red-500"></span>

<!-- Different sizes -->
<span class="hf-icon-info hf-icon-sm text-blue-600"></span>
<span class="hf-icon-info hf-icon-lg text-blue-600"></span>

<!-- Animated icon -->
<span class="hf-icon-filter hf-icon-spin"></span>
```

### Size Variants

- `hf-icon-xs` - Extra small (1em)
- `hf-icon-sm` - Small (1.25em)
- `hf-icon-md` - Medium (1.5em, default)
- `hf-icon-lg` - Large (2em)
- `hf-icon-xl` - Extra large (2.5em)

### Animation Classes

- `hf-icon-spin` - Continuous rotation
- `hf-icon-pulse` - Stepped rotation

### Customization with Tailwind

The icons inherit their color from the text color, so you can use any Tailwind text color utility:

- `text-primary` - Primary color
- `text-blue-500` - Blue color
- `text-red-600` - Red color
- etc.

### Showcase Examples

#### Navigation Elements

```html
<!-- Navigation with icons -->
<nav>
  <a href="/home" class="hf-icon-heart text-primary"></a>
  <a href="/settings" class="hf-icon-filter text-gray-600 hover:text-primary"></a>
  <button class="hf-icon-logout text-red-500"></button>
</nav>
```

#### Interactive Elements

```html
<!-- Button with icon -->
<button class="bg-blue-500 p-2 rounded">
  Download <span class="hf-icon-download text-white ml-2"></span>
</button>

<!-- Animated loading state -->
<button class="bg-gray-200 p-2" disabled>
  <span class="hf-icon-filter hf-icon-spin text-gray-600"></span> Loading...
</button>
```

#### Information Display

```html
<!-- Info card with icon -->
<div class="border p-4 rounded">
  <span class="hf-icon-info hf-icon-lg text-blue-500"></span>
  <h3>Important Information</h3>
  <p>Your content here...</p>
</div>

<!-- Status indicator -->
<div class="flex items-center">
  <span class="hf-icon-check-1 text-green-500"></span>
  <span>Task completed</span>
</div>
```

#### Size Comparison

```html
<div class="space-x-4">
  <span class="hf-icon-growing-plant hf-icon-xs text-green-500"></span>
  <span class="hf-icon-growing-plant hf-icon-sm text-green-500"></span>
  <span class="hf-icon-growing-plant hf-icon-md text-green-500"></span>
  <span class="hf-icon-growing-plant hf-icon-lg text-green-500"></span>
  <span class="hf-icon-growing-plant hf-icon-xl text-green-500"></span>
</div>
```

#### Interactive States

```html
<!-- Hover effects -->
<span class="hf-icon-heart text-gray-400 hover:text-red-500 transition-colors"></span>

<!-- Active state -->
<span class="hf-icon-filter text-blue-600 active:text-blue-800"></span>
```

### Best Practices

1. Always include the base `hf-icon` class along with the specific icon class
2. Use semantic color names from your design system
3. Choose appropriate icon sizes based on their context
4. Consider using animations sparingly to avoid visual distraction

### Icon System Build Process

#### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

#### Building CSS Files

The project uses PostCSS to process and optimize CSS files. The following npm scripts are available:

##### Build CSS once

```bash
npm run build:css
```

##### Watch mode for development

```bash
npm run watch:css
```

#### Browser Support

The CSS is processed with Autoprefixer to ensure compatibility with:

- Browsers with more than 1% global usage
- The last 2 versions of each browser
- Firefox ESR (Extended Support Release)
- Active browsers (updated in the last 24 months)

#### Output

After building, you can find the processed CSS files in the `build/css/` directory. These files are optimized and ready for production use.

#### Integration

To use the compiled CSS in your project, include the built CSS file from the `build/css/` directory:

```html
<link rel="stylesheet" href="path/to/build/css/icons.css">
```

#### Development Workflow

1. Install dependencies with `npm install`
2. Run `npm run watch:css` during development
3. Use `npm run build:css` for production builds

Remember to commit and push both your changes and the submodule reference when you're done making changes.
