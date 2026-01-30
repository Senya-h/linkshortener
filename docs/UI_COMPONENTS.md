# UI Components (shadcn/ui)

All UI elements in this application **must** use shadcn/ui components. No custom components are permitted.

## Core Principles

- **Only use shadcn/ui**: Every UI element must be built from shadcn/ui components. Do not create custom HTML/CSS solutions.
- **Composition over customization**: Combine existing shadcn/ui components to achieve desired functionality instead of modifying them.
- **Styling consistency**: Use shadcn/ui's built-in theming and Tailwind CSS for styling. Maintain visual consistency across the app.

## Implementation Guidelines

### When Adding Components

1. **Check shadcn/ui library first**: Browse the [shadcn/ui documentation](https://ui.shadcn.com) to find relevant components.
2. **Install if needed**: Use `npx shadcn-ui@latest add [component-name]` to add new components to the project.
3. **Use as-is or compose**: Either use components directly or compose multiple components together. Do not modify component internals.
4. **Follow naming conventions**: Import and use component names exactly as provided by shadcn/ui (e.g., `Button`, `Card`, `Dialog`).

### Common Components

Frequently used shadcn/ui components in this project:
- **Button**: For all clickable actions
- **Card**: For content containers and layouts
- **Dialog/Modal**: For overlays and forms
- **Input**: For text input fields
- **Select**: For dropdown selections
- **Form**: For form management and validation
- **Alert**: For notifications and messages
- **Badge**: For tags and labels
- **Tooltip**: For contextual information

### Styling

- Use Tailwind CSS utility classes alongside shadcn/ui components.
- Follow the project's Tailwind configuration in `tailwind.config.ts`.
- Leverage shadcn/ui's CSS variables for theming (defined in `globals.css`).
- Do not create custom CSS files for component styling; use Tailwind utilities.

## Do's and Don'ts

✅ **Do:**
- Compose multiple shadcn/ui components to build complex UIs
- Use Tailwind classes for layout and spacing adjustments
- Check the shadcn/ui docs for component variants and props
- Follow accessibility standards provided by shadcn/ui components

❌ **Don't:**
- Create custom components that duplicate shadcn/ui functionality
- Write custom CSS for components; use Tailwind instead
- Modify shadcn/ui component source files directly
- Import UI components from other libraries

## Component Props and Variants

Always use the component props and variants documented in shadcn/ui. Examples:
```tsx
// Button variants
<Button variant="default" />
<Button variant="outline" />
<Button variant="ghost" />

// Size variants
<Button size="sm" />
<Button size="lg" />
```

## Accessibility

shadcn/ui components include WCAG compliance by default. Always:
- Use semantic HTML provided by components
- Include descriptive labels for form inputs
- Test keyboard navigation and screen reader compatibility
- Follow shadcn/ui's accessibility guidelines

## Questions and Updates

If a UI requirement cannot be met with existing shadcn/ui components:
1. Consult the shadcn/ui documentation and examples
2. Check if component composition can solve the need
3. Verify Tailwind utilities can achieve the desired styling
4. Only propose new tools/libraries if truly necessary and document the decision
