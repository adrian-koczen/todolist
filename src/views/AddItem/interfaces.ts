export enum Priority {
  low = "low",
  medium = "medium",
  high = "high",
}

export interface FormItem {
  task: string;
  priority: Priority;
}

export interface ListItem {
  id: string;
  task: string;
  priority: Priority;
  createTime: Date;
  endDate?: Date;
}
