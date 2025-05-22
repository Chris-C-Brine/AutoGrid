import { Grid } from "@mui/material";
import { Children, type FC, type ReactElement } from "react";
import {AutoGridProps} from "./AutoGrid.types";

/**
 * AutoGrid is a responsive grid component built on top of MUI Grid.
 * It arranges an array of child components according to column configuration,
 * supporting both equal-width columns and custom column widths.
 */
export const AutoGrid: FC<AutoGridProps> = ({ components, columnWidths, columnCount, columns=12, ...props }) => {
  // Select column sizes logic
  let columnSizes: number[] = [];

  if (columnWidths && columnWidths.length) {
    // Use explicit columnWidths if provided
    columnSizes = columnWidths;
  } else if (columnCount) {
    // Fall back to equally divided columns
    // e.g.1 columnCount=4 → [3,3,3,3]
    // e.g.2 columns=16, columnCount=4 → [4,4,4,4]
    columnSizes = Array(columnCount).fill(Math.floor(12 / columnCount));
  } else {
    // Default to 1 full-width column
    columnSizes = [columns];
  }

  const columnLength = columnSizes.length;

  return (
    <Grid container columns={columns} {...props}>
      {Children.toArray(components).map((child, idx) => (
        <Grid
          key={(child as ReactElement).key}
          size={{
            xs: columnSizes[idx % columnLength]
          }}
        >
          {child}
        </Grid>
      ))}
    </Grid>
  )
};