// Interfaces
import { Priority, ListItem } from "interfaces";

export function convertPriority(priority: Priority) {
  switch (priority) {
    case Priority.low:
      return 2;
    case Priority.medium:
      return 1;
    case Priority.high:
      return 0;
  }
}

export function compare(a: ListItem, b: ListItem) {
  if (a.priority < b.priority) {
    return -1;
  }
  if (a.priority > b.priority) {
    return 1;
  }
  return 0;
}