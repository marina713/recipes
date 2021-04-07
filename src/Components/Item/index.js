import React from "react";
import HealthCategory from "./HealthCategory/";
import IngredientsList from "../IngredientsList/";
import { useTranslation } from "react-i18next";
import {
  Container,
  Content,
  Button,
  Title,
  Image,
  ImageContainer,
} from "./styles";

const Item = ({ label, image, healthLabels, ingredientsList, url }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <Title>{label}</Title>
      <ImageContainer href={url}>
        <Image src={image} alt="" />
      </ImageContainer>
      <Content>
        <div>
          <HealthCategory data={healthLabels} />
          <IngredientsList ingredientsList={ingredientsList} />
        </div>
        <Button href={url} target="_blank" rel="noreferrer">
          {t("SeeRecipe")}
        </Button>
      </Content>
    </Container>
  );
};

export default Item;
