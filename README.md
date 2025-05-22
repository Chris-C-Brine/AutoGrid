# @Chris-C-Brine/AutoGrid
A responsive MUI grid component

**AutoGrid** is a flexible, responsive grid component for [Material UI](https://mui.com/material-ui/react-grid/), based on the `Grid` system. It streamlines dynamic layouts in React by letting you specify either a column count (for equal-width columns) or exact column widths, all while leveraging the power and theme integration of MUI.

---

## Features

- **Easy Responsive Layouts**: Arrange arbitrary React components in a grid.
- **Equal or Custom Column Sizes**: Use either a simple `columnCount` or fine-tuned `columnWidths` for complex designs.
- **Custom Grid System Size**: Optionally override the default 12-column MUI baseline (e.g., 16 or 24).
- **Typed API**: Written in TypeScript and ships with full types.

---

## Installation

```bash
npm install @chris-c-brine/autogrid
```
> **Peer Dependency:**  
> You must use `@mui/material` version 7.x as a peer dependency.

---

## Props

| Prop           | Type                      | Default | Description                                                                                                             |
|----------------|---------------------------|---------|-------------------------------------------------------------------------------------------------------------------------|
| `components`   | `ReactNode[]`             | —       | Array of React nodes/components to arrange in the grid.                                                                 |
| `columns`      | `number`                  | `12`    | Total number of columns in the grid system, as per MUI Grid. Change this for non-standard grid breakpoints (e.g., 16).  |
| `columnCount`  | `number`/`1..12` (typed)  | `1`     | Number of columns to use (each will be equal width). Can't exceed `columns` value.                                      |
| `columnWidths` | `number[]`                | —       | Exact widths for each column (should sum to `columns`). Overrides `columnCount` if present.                             |
| _...rest_      | `GridProps` (partial)     | —       | Any additional props are spread to the root MUI `Grid` container.                                                       |

---

## Examples
```tsx
import { AutoGrid } from "@chris-c-brine/autogrid";
import { TextField } from "@mui/material";
const fields = [
  <TextField label="First Name" />,
  <TextField label="Last Name" />,
  <TextField label="Email" />
];
```

### Three Equal Columns
```tsx 
<AutoGrid columnCount={3} components={fields} />;
```

### Custom Column Widths
```tsx 
<AutoGrid columnWidths={[6, 3, 3]} components={fields} /> // Layout: 6/ 12 (A), 3/ 12 (B), 3/ 12 (C)
```

### One Full-Width Row (Default)
```tsx 
<AutoGrid components={fields} />
```

### Custom Grid System (16 Columns)
```tsx 
<AutoGrid columns={16} columnCount={4} components={fields} /> // Each column will be 4/ 16 units wide
```

### Custom Breakpoint Example
```tsx 
<AutoGrid columns={8} columnWidths={[2, 3, 3]} components={fields} /> // Two columns 3/ 8 wide, one 2/ 8 wide
```

---

## Notes

- When `columnWidths` is provided, it takes precedence over `columnCount`. The widths must sum to the value of `columns`.
- The prop `columns` matches the MUI Grid system. For most designs, 12 is standard.
- Any additional props are passed directly to the MUI `Grid` container; this includes spacing, direction, etc.

---

## License

[ISC](LICENSE) © Christopher Brine
