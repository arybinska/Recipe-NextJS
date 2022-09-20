const DUMMY_RECIPES = [
  {
    id: "r1",
    title: "KURCZAK W SOSIE Z CUKINIĄ I GORGONZOLĄ",
    description:
      "Aromatyczny kurczak w sosie z cukinią i gorgonzolą . PRZYGOTOWANIE Kurczaka oczyścić z błonek i kostek, pokroić na mniejsze filety: odkroić polędwiczkę - ruchomą część filetu, następnie filet przekroić wzdłuż na 2 cieńsze części. Rozbić tłuczkiem na jednakową grubość, ok. 1 cm. Doprawić solą oraz pieprzem. Cukinię przyciąć na końcach i pokroić w niedużą kostkę. Filety delikatnie obtoczyć w mące. Rozgrzać patelnię z oliwą lub olejem. Włożyć filety kurczaka, podsmażać po ok. 2 minuty z każdej strony. Odłożyć na talerz. Na tę samą patelnię wrzucić cukinię i smażyć co chwilę mieszając przez ok. 3 - 4 minuty. W międzyczasie dodać masło. Dodać całe mięso na patelnię i wsunąć ją miejscami pod cukinię. Trzymając danie na ogniu wlać bulion, dodać kurkumę, koperek i szczypiorek. Wymieszać i zagotować. Po chwili wlać śmietankę i delikatnie przemieszać składniki. Posypać posiekaną gorgonzolą. Doprawić w razie potrzeby solą i pieprzem i gotować jeszcze przez minutę.",
    people: "4",
    date: "2022-09-12",
    image: "images/kurczak_w_sosie_z_cukinia_gorgonzola.jpg",
    isFeatured: true,
  },
  {
    id: "r2",
    title: "ZIELONE CURRY Z KREWETKAMI",
    description:
      "Tajskie curry z mlekiem koksowym i krewetkami z dodatkiem cukinii, bakłażana oraz szpinaku. Błyskawiczne do przygotowania, ale wymagające skompletowania dodatków charakterystycznych dla kuchni tajskiej.",
    people: "4",
    date: "2022-09-13",
    image: "images/zielone_curry_z_krewetkami.jpg",
    isFeatured: true,
  },
  {
    id: "r3",
    title: "CIASTO NA PIZZE",
    description:
      "Najlepszy przepis na ciasto na pizze",
    people: "6",
    date: "2022-09-13",
    image: "images/pizza.jpg",
    isFeatured: true,
  },
];

export function getFeaturedRecipes() {
  return DUMMY_RECIPES.filter((recipe) => recipe.isFeatured);
}

export function getAllRecipes() {
  return DUMMY_RECIPES;
}

export function getFilteredRecipes(dateFilter) {
  const { year, month } = dateFilter;

  let filteredRecipes = DUMMY_RECIPES.filter((recipe) => {
    const recipeDate = new Date(recipe.date);
    return (
      recipeDate.getFullYear() === year && recipeDate.getMonth() === month - 1
    );
  });

  return filteredRecipes;
}

export function getRecipeById(id) {
  return DUMMY_RECIPES.find((recipe) => recipe.id === id);
}
