import React from "react";
// Interfaces
import { ListItem } from "interfaces";

interface Props {
  listItem: ListItem;
}

const ModifyElement = ({ listItem }: Props) => {
  return <div>{listItem.id}</div>;
};

export default ModifyElement;
