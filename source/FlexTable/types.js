/** @flow */

export type CellDataGetterParams = {
  columnData: ?any,
  dataKey: string,
  rowData: any
};

export type CellRendererParams = {
  cellData: ?any,
  columnData: ?any,
  dataKey: string,
  rowData: any,
  rowIndex: number
};

export type HeaderRendererParams = {
  columnData: ?any,
  dataKey: string,
  disableSort: ?boolean,
  label: ?string,
  sortBy: ?string,
  sortDirection: ?string
};
