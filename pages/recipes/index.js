import { useRouter } from "next/router";
import RecipeList from "../../components/recipes/recipe-list";
import RecipesSearch from "../../components/recipes/recipes-search";
import { getAllRecipes } from "../../dummy-data";

function AllRecipesPage() {
  const recipes = getAllRecipes();
  const router = useRouter();

  function findRecipesHandler(year, month) {
    const fullPath = `/recipes/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <>
      <RecipesSearch onSearch={findRecipesHandler} />
      <RecipeList items={recipes} />
    </>
  );
}

export default AllRecipesPage;
