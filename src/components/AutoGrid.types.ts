import type { GridProps } from "@mui/material";
import {ReactNode} from "react";

/**
 * Props for the AutoGrid component
 */
export type AutoGridProps = Omit<GridProps, "container" | "children"> & {
  /**
   * Array of React components to be arranged in the grid
   */
  components?: ReactNode[];
  /**
   * Number of columns to display (maximum 12 due to MUI Grid system)
   * @default 1
   */
  columnCount?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  /**
   * Alternative to columnCount, specifies the exact column widths (total must sum to 12)
   *
   * @default undefined
   * @example
   * // 3 columns
   * columnWidths: [4, 4, 4]
   * // 2 columns
   * columnWidths: [4, 8]
   * // 1 column
   * columnWidths: [12] | columnCount: 1 | leave both blank
   */
  columnWidths?: number[] // e.g., [6, 3, 3] (must sum to 12)
};