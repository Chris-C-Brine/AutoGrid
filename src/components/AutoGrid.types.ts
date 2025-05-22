import type { GridProps } from "@mui/material";
import {ReactNode} from "react";

/**
 * Props for the AutoGrid component
 */
export type AutoGridProps = Omit<GridProps, "container" | "children" | "columns"> & {
  /**
   * Array of React components to be arranged in the grid
   */
  components?: ReactNode[];

  /**
   * Sets the total column count in the underlying MUI Grid system.
   * Defaults to 12 to match standard MUI behavior.
   * You can override this for custom grids, e.g. 16 or 24.
   * Used to validate and adjust columnCount and columnWidths if provided.
   * @default 12
   */
  columns?: number;

  /**
   * Number of columns to display (cannot be more than `columns`)
   * Defaults to 1.
   */
  columnCount?: number;

  /**
   * Alternative to columnCount, specifies the exact column widths (should sum to `columns`)
   *
   * @default undefined
   * @example
   * // For columns=12, three columns:
   * columnWidths: [4, 4, 4]
   */
  columnWidths?: number[]; // Should sum to columns
};
