// Interfaces
import { Priority, ListItem, Visibility } from "interfaces";

export function convertPriority(priority: Priority) {
  switch (priority) {
    case Priority.low:
      return 2;
    case Priority.medium:
      return 1;
    case Priority.high:
      return 0;
    default:
      return priority;
  }
}

export function convertVisibility(visibility: Visibility) {
  switch (visibility) {
    case Visibility.all:
      return -1;
    case Visibility.low:
      return 2;
    case Visibility.medium:
      return 1;
    case Visibility.high:
      return 0;
    default:
      return -1;
  }
}

export function convertPriorityBack(priority: number) {
  switch (priority) {
    case 2:
      return Priority.low;
    case 1:
      return Priority.medium;
    case 0:
      return Priority.high;
    default:
      return Priority.low;
  }
}

export function higherToLowerPriority(a: ListItem, b: ListItem) {
  if (a.priority < b.priority) {
    return -1;
  }
  if (a.priority > b.priority) {
    return 1;
  }
  return 0;
}

export function isTaskInArray(
  list: ListItem[],
  listItem: Omit<ListItem, "id">
) {
  let { task } = listItem;
  return list.find((el) => el.task === task);
}

export function showPriority(priority: number) {
  switch (priority) {
    case 2:
      return "L";
    case 1:
      return "M";
    case 0:
      return "H";
    default:
      return "";
  }
}

export function sortByTask(a: ListItem, b: ListItem) {
  return a.task.localeCompare(b.task);
}

export function sortByStartDate(a: ListItem, b: ListItem) {
  if (a.createDate < b.createDate) {
    return -1;
  }
  if (a.createDate > b.createDate) {
    return 1;
  }
  return 0;
}

export function sortByEndDate(a: ListItem, b: ListItem) {
  if (a.createDate < b.createDate) {
    return 1;
  }
  if (a.createDate > b.createDate) {
    return -1;
  }
  return 0;
}
