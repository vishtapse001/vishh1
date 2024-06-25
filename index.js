// Define the base URL for the API
const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

// Function to fetch meal data based on category
async function getCategoriesData(category) {
  const url = `${BASE_URL}/filter.php?c=${category}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Something went wrong:", error.message);
  }
}

// Function to fetch meal data based on ingredient
async function getIngredientData(ingredient) {
  const url = `${BASE_URL}/filter.php?i=${ingredient}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Something went wrong:", error.message);
  }
}

// Event listeners for the buttons
document.getElementById("get-category-data").addEventListener("click", () => {
  getCategoriesData("Seafood"); // Change 'Seafood' to any category you want to fetch
});

document.getElementById("get-ingredient-data").addEventListener("click", () => {
  getIngredientData("chicken_breast"); // Change 'chicken_breast' to any ingredient you want to fetch
});
