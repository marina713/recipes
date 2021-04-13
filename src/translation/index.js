import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { advanceFiltersTranslation } from "./variables";

export const initialiseTranslation = () => {
  const initialLang = window.location.pathname.split("/")[2];

  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources: {
        en: {
          translation: {
            InitialSearch: "artichoke",
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
            NoRecipes: "No Recipes found for ",
            NoRecipesSubtitle: "Try another search!",
            Footer: "Copyright © Yummiest Recipes 2021",
            Loading: "Loading...",
            Cuisine: "Cuisine",
            Health: "Health",
            Meal: "Meal",
            Dish: "Dish",
            ...advanceFiltersTranslation.en,
          },
        },
        es: {
          translation: {
            InitialSearch: "alcachofa",
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
            NoRecipes: "No se han encontrado recetas con ",
            NoRecipesSubtitle: "Intenta otra busqueda!",
            Footer: "Copyright © Las Recetas mas Deliciosas 2021",
            Loading: "Cargando...",
            Cuisine: "Cocina",
            Health: "Salud",
            Meal: "Comida",
            Dish: "Plato",
            ...advanceFiltersTranslation.es,
          },
        },
      },
      lng: initialLang,
      fallbackLng: "en",

      interpolation: {
        escapeValue: false,
      },
    });
};
