import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Container, Title, List, Item, Arrow } from "./styles";
import up from "./up.svg";
import down from "./down.svg";

const SearchAdvancedItem = ({
  title,
  dropdownList,
  handleSelectItem,
  listInitialState,
}) => {
  const { t } = useTranslation();
  const [isListOpen, setListOpen] = useState(listInitialState);
  const headerTitle = title;

  const openDropdown = () => setListOpen(!isListOpen);

  return (
    <Container>
      <Title onClick={openDropdown}>
        <span>{headerTitle}</span>
        <Arrow src={isListOpen ? up : down} alt="arrow" />
      </Title>
      <List>
        {isListOpen
          ? dropdownList
              .sort((a, b) => a.id - b.id)
              .map((item) => (
                <Item
                  type="button"
                  isSelected={item.isSelected}
                  key={item.id}
                  onClick={() => handleSelectItem(item)}
                >
                  {t(item.ddElement)}
                </Item>
              ))
          : null}
      </List>
    </Container>
  );
};

export default SearchAdvancedItem;
