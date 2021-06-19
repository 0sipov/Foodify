async function getDish() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  let dish = await response.json();
  return (dish = dish.meals[0]);
}
export default getDish;
