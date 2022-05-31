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

export interface Filters {
  visibility: number;
}
