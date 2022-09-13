import RecipeList from "../../components/recipes/recipe-list";
import RecipesSearch from "../../components/recipes/recipes-search";
import { getAllRecipes } from "../../dummy-data";

function AllRecipesPage() {
  const recipes = getAllRecipes();
  return (
    <>
      <RecipesSearch />
      <RecipeList items={recipes} />
    </>
  );
}

export default AllRecipesPage;
