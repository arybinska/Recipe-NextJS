import { useRouter } from "next/router";
import { Fragment } from "react";

import RecipeSummary from "../../components/recipe-detail/recipe-summary";
import RecipeLogistics from "../../components/recipe-detail/recipe-logistics";
import RecipeContent from "../../components/recipe-detail/recipe-content";

import { getRecipeById } from "../../dummy-data";
import ErrorAlert from "../../components/ui/error-alert";

function RecipeDetailPage() {
  const router = useRouter();

  const recipeId = router.query.recipeId;
  const recipe = getRecipeById(recipeId);

  if (!recipe) {
    return (
      <ErrorAlert>
        <p>No recipe found!</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <RecipeSummary title={recipe.title} />
      <RecipeLogistics
        date={recipe.date}
        people={recipe.people}
        image={recipe.image}
        imageAlt={recipe.title}
      />
      <RecipeContent>
        <p>{recipe.description}</p>
      </RecipeContent>
    </Fragment>
  );
}

export default RecipeDetailPage;
