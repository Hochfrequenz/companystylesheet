# Hochfrequenz Icon System

This icon system provides a flexible and easy-to-use way to implement SVG icons in your frontend applications. It's designed to work seamlessly with Tailwind CSS and provides various customization options.

## Features

- Easy color customization using Tailwind's text colors
- Multiple size variants
- Consistent naming convention
- Animation utilities
- Responsive and scalable SVG icons

## Usage

1. Include the `icons.css` file in your project:
```html
<link rel="stylesheet" href="path/to/icons.css">
```

2. Use icons in your HTML with the following pattern:
```html
<span class="hf-icon hf-icon-[name] text-[color]"></span>
```

### Example Usage

```html
<!-- Basic icon usage -->
<span class="hf-icon hf-icon-heart"></span>

<!-- Colored icon using Tailwind -->
<span class="hf-icon hf-icon-heart text-red-500"></span>

<!-- Different sizes -->
<span class="hf-icon hf-icon-info hf-icon-sm text-blue-600"></span>
<span class="hf-icon hf-icon-info hf-icon-lg text-blue-600"></span>

<!-- Animated icon -->
<span class="hf-icon hf-icon-filter hf-icon-spin"></span>
```

## Available Icons

- `hf-icon-login` - Login icon
- `hf-icon-logout` - Logout icon
- `hf-icon-open-new` - Open in new window
- `hf-icon-up` - Up arrow
- `hf-icon-down` - Down arrow
- `hf-icon-up-down` - Up and down arrows
- `hf-icon-glossar-left` - Glossary left
- `hf-icon-glossar-right` - Glossary right
- `hf-icon-check-1` - Checkmark style 1
- `hf-icon-check-2` - Checkmark style 2
- `hf-icon-check-3` - Checkmark style 3
- `hf-icon-heart` - Heart icon
- `hf-icon-info` - Information icon
- `hf-icon-left` - Left arrow
- `hf-icon-download` - Download icon
- `hf-icon-filter` - Filter icon
- `hf-icon-question` - Question mark
- `hf-icon-growing-plant` - Growing plant icon

## Size Variants

- `hf-icon-xs` - Extra small (1em)
- `hf-icon-sm` - Small (1.25em)
- `hf-icon-md` - Medium (1.5em, default)
- `hf-icon-lg` - Large (2em)
- `hf-icon-xl` - Extra large (2.5em)

## Animation Classes

- `hf-icon-spin` - Continuous rotation
- `hf-icon-pulse` - Stepped rotation

## Customization with Tailwind

The icons inherit their color from the text color, so you can use any Tailwind text color utility:

- `text-primary` - Primary color
- `text-blue-500` - Blue color
- `text-red-600` - Red color
- etc.

## Best Practices

1. Always include the base `hf-icon` class along with the specific icon class
2. Use semantic color names from your design system
3. Choose appropriate icon sizes based on their context
4. Consider using animations sparingly to avoid visual distraction 