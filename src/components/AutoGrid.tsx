import {Grid} from "@mui/material";
import {Children, type FC, type ReactElement} from "react";
import {AutoGridProps, OriginalAutoGridProps} from "./AutoGrid.types";

/**
 * AutoGrid is a responsive grid component built on top of MUI Grid.
 * It arranges an array of child components according to column configuration,
 * supporting both equal-width columns and custom column widths.
 *
 * @example
 * // Basic usage with equal columns
 * <AutoGrid
 *   columnCount={3}
 *   components={[<Component1 />, <Component2 />, <Component3 />]}
 * />
 *
 * @example
 * // With custom column widths using numbers
 * <AutoGrid
 *   columnWidths={[3, 6, 3]}
 *   components={[<Sidebar />, <MainContent />, <Sidebar2 />]}
 * />
 *
 * @example
 * // With responsive column widths using MUI Grid size props
 * <AutoGrid
 *   columnWidths={[
 *     { xs: 12, md: 4 },
 *     { xs: 12, md: 8 }
 *   ]}
 *   components={[<Sidebar />, <MainContent />]}
 * />
 */
export const AutoGrid: FC<AutoGridProps> = ({components, columnWidths, columnCount, columns = 12, ...props}) => {
  // Empty or numeric columns only provided
  if (columnWidths == undefined || isNumberArray(columnWidths)) {
    return (<OriginalAutoGrid
      components={components}
      columnWidths={columnWidths}
      columnCount={columnCount}
      columns={columns} {...props}
    />);
  }

  return (
    <Grid container columns={columns} {...props}>
      {Children.toArray(components).map((child, idx) => (
        <Grid
          key={(child as ReactElement).key}
          size={columnWidths[idx % columnWidths.length]}>
          {child}
        </Grid>
      ))}
    </Grid>
  );
};

/**
 * Original implementation of AutoGrid that only supports numeric column widths.
 * This is maintained for backward compatibility.
 */
const OriginalAutoGrid: FC<OriginalAutoGridProps> =
  ({
     components, columnWidths,
     columnCount,
     columns = 12,
     ...props
   }) => {
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

/**
 * Type guard to check if an array contains only number values
 */
function isNumberArray(arr: any): arr is number[] {
  return Array.isArray(arr) && arr.every(i => typeof i === 'number');
}