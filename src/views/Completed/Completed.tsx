import React from "react";
// Components
import Box from "components/Box/Box";
import Icon from "components/Icon/Icon";
import Title from "components/Title/Title";
import ListElement from "components/ListElement/ListElement";
// Icons
import { ReactComponent as Check } from "icons/check.svg";
// Interfaces
import { ListItem } from "interfaces";

interface Props {
  list: ListItem[];
  setList: React.Dispatch<React.SetStateAction<ListItem[]>>;
}

const Completed = ({ list, setList }: Props) => {
  return (
    <Box>
      <Title icon={<Icon icon={<Check />} color="green" />}>COMPLETED</Title>
      {list &&
        list.map((item) => {
          if (item.completed) {
            return (
              <ListElement
                key={item.id}
                listItem={item}
                setList={setList}
                list={list}
              />
            );
          } else {
            return null;
          }
        })}
    </Box>
  );
};

export default Completed;
