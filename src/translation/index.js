import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const initialiseTranslation = () => {
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources: {
        en: {
          translation: {
            Header: "Find the yummiest recipes!",
            SearchTitle: "Search a recipe",
            SearchSubtitle:
              "Click on search icon, then type your favourite ingredients",
            SearchPlaceholder: "Search...",
            MoreFilters: "+ FILTERS",
            ApplyFilters: "Apply Filters",
            ResetFilters: "Reset Filters",
            Ingredients: "Ingredients",
            SeeRecipe: "See recipe",
            MoreRecipes: "MOOORE YUMMY RECIPES",
            LatestSearches: "Recently searched",
            NoRecipes: "No Recipes found :(",
            NoRecipesSubtitle: "Try another search!",
          },
        },
        es: {
          translation: {
            Header: "Encuentra las recetas mas deliciosas!",
            SearchTitle: "Busca una receta",
            SearchSubtitle:
              "Clica en el icono y escribe tus ingredientes favoritos",
            SearchPlaceholder: "Busca...",
            MoreFilters: "+ FILTROS",
            ApplyFilters: "Aplicar Filtros",
            ResetFilters: "Borrar Filtros",
            Ingredients: "Ingredientes",
            SeeRecipe: "Ver receta",
            MoreRecipes: "MAS RECETAS DELICIOOOSAS",
            LatestSearches: "Busquedas recientes",
            NoRecipes: "No se han encontrado recetas :(",
            NoRecipesSubtitle: "Intenta otra busqueda!",
          },
        },
      },
      lng: "en",
      fallbackLng: "en",

      interpolation: {
        escapeValue: false,
      },
    });
};
