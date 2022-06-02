export enum Priority {
  low = "low",
  medium = "medium",
  high = "high",
}

export type ConvertedPriority = number;

export interface FormItem {
  task: string;
  priority: Priority;
}

export interface ListItem {
  id: string;
  task: string;
  priority: ConvertedPriority;
  createDate: Date;
  endDate?: Date;
  completed?: Boolean;
}

export enum SortOption {
  task = "task",
  createDate = "createDate",
  endDate = "endDate",
  priority = "priority",
}

export enum Visibility {
  all = "all",
  high = "high",
  medium = "medium",
  low = "low",
}

export interface Filters {
  visibility: Visibility;
  sort: SortOption;
  searchText: string | null;
}

export interface Error {
  id: number;
  message: string;
}
