export interface TableColumn {
  key: string;
  heading: string;
  type?: string;
}

export interface LinkColumn extends TableColumn {
  path: string;
}
