function RecipeList(props) {
  const { items } = props;
  return (
    <ul>
      {items.map((recipe) => (
        <li></li>
      ))}
    </ul>
  );
}

export default RecipeList;
