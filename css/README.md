# Hochfrequenz Icon System

This icon system provides a flexible and easy-to-use way to implement SVG icons in your frontend applications.
It's designed to work seamlessly with Tailwind CSS and provides various customization options.

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
<span class="hf-icon-[name] text-[color]"></span>
```

### Example Usage

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

## Showcase Examples

Here are some common use cases and combinations of our icon system:

### Navigation Elements
```html
<!-- Navigation with icons -->
<nav>
  <a href="/home" class="hf-icon-heart text-primary"></a>
  <a href="/settings" class="hf-icon-filter text-gray-600 hover:text-primary"></a>
  <button class="hf-icon-logout text-red-500"></button>
</nav>
```

### Interactive Elements
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

### Information Display
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

### Size Comparison
```html
<div class="space-x-4">
  <span class="hf-icon-growing-plant hf-icon-xs text-green-500"></span>
  <span class="hf-icon-growing-plant hf-icon-sm text-green-500"></span>
  <span class="hf-icon-growing-plant hf-icon-md text-green-500"></span>
  <span class="hf-icon-growing-plant hf-icon-lg text-green-500"></span>
  <span class="hf-icon-growing-plant hf-icon-xl text-green-500"></span>
</div>
```

### Interactive States
```html
<!-- Hover effects -->
<span class="hf-icon-heart text-gray-400 hover:text-red-500 transition-colors"></span>

<!-- Active state -->
<span class="hf-icon-filter text-blue-600 active:text-blue-800"></span>
```

## Best Practices

1. Always include the base `hf-icon` class along with the specific icon class
2. Use semantic color names from your design system
3. Choose appropriate icon sizes based on their context
4. Consider using animations sparingly to avoid visual distraction 