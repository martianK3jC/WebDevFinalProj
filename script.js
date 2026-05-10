// ============================================================
//  RECIPE BOOK — script.js
//  Vanilla JavaScript · Beginner-Friendly
// ============================================================


// ============================================================
// SECTION 1: GET ELEMENTS FROM THE PAGE
// We use getElementById to get a reference to each HTML element
// we need to work with in JavaScript.
// ============================================================

// --- Main page elements ---
const recipeGrid = document.getElementById('recipeGrid');   // The card grid area
const searchInput = document.getElementById('searchInput');  // The search bar

// --- Category filter pill buttons ---
// querySelectorAll returns a list of all elements with class "pill"
const pillButtons = document.querySelectorAll('.pill');

// --- Add Recipe modal form fields ---
const inputName = document.getElementById('inputName');
const inputCategory = document.getElementById('inputCategory');
const inputPrepTime = document.getElementById('inputPrepTime');
const inputDifficulty = document.getElementById('inputDifficulty');
const inputServings = document.getElementById('inputServings');
const inputImageUrl = document.getElementById('inputImageUrl');
const inputDescription = document.getElementById('inputDescription');
const inputEquipment = document.getElementById('inputEquipment');
const inputIngredients = document.getElementById('inputIngredients');
const inputInstructions = document.getElementById('inputInstructions');

// The Save Recipe button
const saveBtn = document.getElementById('saveBtn');

// --- Field error messages (shown below each required field) ---
const nameError = document.getElementById('nameError');
const prepTimeError = document.getElementById('prepTimeError');
const servingsError = document.getElementById('servingsError');
const descriptionError = document.getElementById('descriptionError');
const ingredientsError = document.getElementById('ingredientsError');
const instructionsError = document.getElementById('instructionsError');

// General form message shown near the Save button (success or error)
const formMessage = document.getElementById('formMessage');

// --- View Recipe modal elements ---
const viewModal = document.getElementById('viewModal');
const closeViewBtn = document.getElementById('closeViewBtn');
const closeViewBtn2 = document.getElementById('closeViewBtn2');
const viewName = document.getElementById('viewName');
const viewCategory = document.getElementById('viewCategory');
const viewPrepTime = document.getElementById('viewPrepTime');
const viewDifficulty = document.getElementById('viewDifficulty');
const viewServings = document.getElementById('viewServings');
const viewImg = document.getElementById('viewImg');
const viewDescription = document.getElementById('viewDescription');
const viewEquipSection = document.getElementById('viewEquipmentSection');
const viewEquipmentList = document.getElementById('viewEquipmentList');
const viewIngredients = document.getElementById('viewIngredientsList');
const viewInstructions = document.getElementById('viewInstructions');


// ============================================================
// SECTION 2: RECIPE DATA
// All recipes are stored in this array.
// Each recipe is an object with properties like name, category, etc.
// New recipes added by the user are pushed into this same array.
// ============================================================

const recipes = [
  {
    id: 1,
    name: "Herb Roasted Chicken",
    category: "dinner",
    prepTime: "40 Min",
    difficulty: "Easy",
    servings: "3",
    image: "image/herb-roast-chicken-15.jpg",
    description: "Short description of the recipe.",
    equipment: ["Roasting pan", "Meat thermometer"],
    ingredients: ["1 whole chicken", "Fresh herbs (rosemary, thyme)", "2 tbsp olive oil", "Salt and pepper"],
    instructions: "1. PREHEAT AND PREPARE\n• Preheat your oven to 375°F.\n• Pat the chicken dry.\n\n2. SEASON\n• Rub with olive oil and season with herbs.\n\n3. ROAST\n• Roast for 1 hour until golden."
  },
  {
    id: 2,
    name: "Lemon Garlic Grilled Chicken",
    category: "dinner",
    prepTime: "1 Hour",
    difficulty: "Hard",
    servings: "4",
    image: "image/Lemon-Garlic-Grilled-Chicken-Thighs-SQUARE.jpg",
    description: "Experience the perfect blend of zesty lemon and aromatic garlic with this roasted chicken recipe.",
    equipment: ["Grill or grill pan", "Tongs", "Mixing bowl"],
    ingredients: ["4 chicken thighs", "2 lemons, juiced", "4 garlic cloves, minced", "2 tbsp olive oil", "Salt and pepper", "Fresh parsley"],
    instructions: "1. MARINATE\n• Mix lemon juice, garlic, and olive oil.\n• Coat chicken and marinate for 30 minutes.\n\n2. GRILL\n• Preheat grill to medium-high heat.\n• Grill 6-7 minutes per side until cooked through.\n• Garnish with parsley and serve."
  },
  {
    id: 3,
    name: "Quinoa Veggie Stir-Fry",
    category: "vegan",
    prepTime: "30 Min",
    difficulty: "Easy",
    servings: "3",
    image: "image/Simple-Weeknight-Pineapple-Quinoa-Stir-Fry-FEATURED-1.jpg",
    description: "Quick, wholesome, and bursting with flavors, it's perfect for a healthy weeknight dinner.",
    equipment: ["Large wok or skillet", "Saucepan"],
    ingredients: ["1 cup quinoa", "2 cups vegetable broth", "1 cup pineapple chunks", "1 bell pepper, diced", "1 cup broccoli florets", "3 tbsp soy sauce", "1 tbsp sesame oil"],
    instructions: "1. COOK QUINOA\n• Rinse quinoa and cook in vegetable broth for 15 minutes.\n\n2. STIR-FRY\n• Heat sesame oil in wok over high heat.\n• Add vegetables and stir-fry for 5 minutes.\n• Add pineapple, quinoa, and soy sauce.\n• Toss and serve hot."
  },
  {
    id: 4,
    name: "Berry Bliss Smoothie Bowl",
    category: "breakfast",
    prepTime: "10 Min",
    difficulty: "Easy",
    servings: "2",
    image: "image/berry bliss.jpg",
    description: "This berry smoothie bowl is not only visually appealing but also a powerhouse of antioxidants.",
    equipment: ["Blender", "Bowls"],
    ingredients: ["1 cup frozen mixed berries", "1 banana", "½ cup almond milk", "Granola", "Fresh berries", "Chia seeds", "Honey"],
    instructions: "1. BLEND\n• Blend frozen berries, banana, and almond milk until smooth and thick.\n\n2. ASSEMBLE\n• Pour into bowls.\n• Top with granola, fresh berries, chia seeds, and a drizzle of honey.\n• Serve immediately."
  },
  {
    id: 5,
    name: "Spaghetti Aglio e Olio",
    category: "quick bite",
    prepTime: "20 Min",
    difficulty: "Easy",
    servings: "2",
    image: "image/Simply-Recipes-Spaghetti-Aglio-e-Olio-LEAD-2-c8e7e8c6edb04a8691463c6ea8cd4ba1.jpg",
    description: "A minimalist yet flavorful dish with garlic, olive oil, and a hint of red pepper flakes.",
    equipment: ["Large pot", "Skillet"],
    ingredients: ["200g spaghetti", "6 garlic cloves, thinly sliced", "¼ cup olive oil", "½ tsp red pepper flakes", "Salt to taste", "Fresh parsley, chopped", "Parmesan (optional)"],
    instructions: "1. COOK PASTA\n• Boil spaghetti in salted water until al dente. Reserve ½ cup pasta water.\n\n2. MAKE SAUCE\n• Heat olive oil in a skillet over medium-low.\n• Add garlic and red pepper flakes; cook until garlic is golden.\n\n3. COMBINE\n• Add pasta and a splash of pasta water to the skillet.\n• Toss well, top with parsley and parmesan, and serve."
  },
  {
    id: 6,
    name: "Grilled Veggies with Sauce",
    category: "vegan",
    prepTime: "25 Min",
    difficulty: "Medium",
    servings: "6",
    image: "image/images.jpg",
    description: "Served with a zesty chimichurri sauce, it's a perfect addition to your outdoor gatherings.",
    equipment: ["Grill or grill pan", "Blender or food processor"],
    ingredients: ["2 zucchinis, sliced", "2 bell peppers, quartered", "1 eggplant, sliced", "2 tbsp olive oil", "Salt and pepper", "Fresh parsley", "3 garlic cloves", "2 tbsp red wine vinegar", "Pinch of red pepper flakes"],
    instructions: "1. PREP VEGGIES\n• Brush vegetables with olive oil and season with salt and pepper.\n\n2. MAKE CHIMICHURRI\n• Blend parsley, garlic, olive oil, red wine vinegar, and red pepper flakes.\n\n3. GRILL\n• Grill vegetables 3-4 minutes per side until tender and charred.\n• Drizzle chimichurri over the top and serve."
  }
];


// ============================================================
// SECTION 3: ACTIVE FILTER
// This variable remembers which category pill is currently
// selected. It starts as "all" to show every recipe.
// ============================================================

let activeFilter = "all";


// ============================================================
// SECTION 4: BUILD ONE RECIPE CARD
// This function takes one recipe object and returns an HTML
// string for one card. We use a template literal (backticks)
// so we can easily put variables inside the HTML.
// ============================================================

function buildCard(recipe) {

  // Decide which image to show
  // If no image was given, use a placeholder image URL
  let imgSrc;
  if (recipe.image) {
    imgSrc = recipe.image;
  } else {
    imgSrc = "https://placehold.co/600x450/f2ede6/a89e96?text=No+Image";
  }

  // The onerror attribute on the <img> tag is a safety net:
  // if the image URL is broken, the browser automatically swaps
  // it out for the placeholder image.
  const cardHTML = `
    <div class="card" data-id="${recipe.id}" data-category="${recipe.category}">
      <div class="card-img-wrap">
        <img class="card-img"
             src="${imgSrc}"
             alt="${recipe.name}"
             onerror="this.onerror=null; this.src='https://placehold.co/600x450/f2ede6/a89e96?text=No+Image';">
      </div>
      <div class="card-body">
        <div class="card-title">${recipe.name}</div>
        <p class="card-desc">${recipe.description}</p>
        <div class="card-footer">
          <span class="card-meta">${recipe.prepTime} · ${recipe.difficulty} Prep · ${recipe.servings} Serves</span>
          <button class="btn-view" data-id="${recipe.id}">VIEW RECIPE</button>
        </div>
      </div>
    </div>
  `;

  return cardHTML;
}


// ============================================================
// SECTION 5: SHOW RECIPE CARDS
// This function:
//   1. Reads the current search term
//   2. Loops through all recipes
//   3. Checks if each recipe matches the filter AND search
//   4. Builds the HTML cards and puts them into the grid
// ============================================================

function showCards() {

  // Get what the user typed in the search bar
  // .toLowerCase() makes the search case-insensitive
  const searchTerm = searchInput.value.toLowerCase();

  // This string will collect all the card HTML we want to show
  let cardsHTML = "";

  // Counter to track how many recipes matched
  let matchCount = 0;

  // Loop through every recipe in the array
  for (let i = 0; i < recipes.length; i++) {

    const recipe = recipes[i];

    // --- Step 1: Check the category filter ---
    // If activeFilter is "all", every recipe passes.
    // Otherwise, only recipes whose category matches pass.
    let categoryMatch = false;

    if (activeFilter === "all") {
      categoryMatch = true;
    } else if (recipe.category === activeFilter) {
      categoryMatch = true;
    }

    // --- Step 2: Check the search term ---
    // If the search box is empty, every recipe passes.
    // Otherwise, check if the term appears in the recipe's fields.
    let searchMatch = false;

    if (searchTerm === "") {
      searchMatch = true;
    } else {
      // Join all ingredient strings into one long string to search through
      let ingredientText = "";
      for (let j = 0; j < recipe.ingredients.length; j++) {
        ingredientText = ingredientText + " " + recipe.ingredients[j];
      }

      // Check each searchable field
      if (recipe.name.toLowerCase().indexOf(searchTerm) !== -1) {
        searchMatch = true;
      } else if (recipe.description.toLowerCase().indexOf(searchTerm) !== -1) {
        searchMatch = true;
      } else if (recipe.category.toLowerCase().indexOf(searchTerm) !== -1) {
        searchMatch = true;
      } else if (recipe.difficulty.toLowerCase().indexOf(searchTerm) !== -1) {
        searchMatch = true;
      } else if (ingredientText.toLowerCase().indexOf(searchTerm) !== -1) {
        searchMatch = true;
      }
    }

    // --- Step 3: If BOTH checks pass, add this recipe's card ---
    if (categoryMatch && searchMatch) {
      cardsHTML = cardsHTML + buildCard(recipe);
      matchCount = matchCount + 1;
    }
  }

  // --- Step 4: Put the cards (or a message) into the grid ---
  if (matchCount === 0) {
    // No recipes matched — show a "no results" message
    recipeGrid.innerHTML = '<p class="no-results">No recipes found. Try a different search or filter.</p>';
  } else {
    // At least one recipe matched — show the cards
    recipeGrid.innerHTML = cardsHTML;
  }

  // After adding cards to the page, attach VIEW RECIPE button listeners
  attachViewButtons();
}


// ============================================================
// SECTION 6: CATEGORY FILTER PILLS
// When a pill button is clicked:
//   - Remove the active style from all pills
//   - Add the active style to the clicked pill
//   - Update activeFilter
//   - Re-show the cards
// ============================================================

for (let i = 0; i < pillButtons.length; i++) {

  // We need a separate addEventListener for each pill button
  pillButtons[i].addEventListener('click', function () {

    // Remove active style from ALL pills first
    for (let j = 0; j < pillButtons.length; j++) {
      pillButtons[j].classList.remove('active');
    }

    // Add active style to the pill that was just clicked
    // "this" refers to the button that was clicked
    this.classList.add('active');

    // Read the filter value from the button's data-filter attribute
    // Each pill has data-filter="all", data-filter="vegan", etc.
    activeFilter = this.getAttribute('data-filter');

    // Re-show the cards using the new filter
    showCards();
  });
}


// ============================================================
// SECTION 7: SEARCH BAR
// Every time the user types something in the search box,
// re-run showCards() so the results update live.
// ============================================================

searchInput.addEventListener('input', function () {
  showCards();
});


// ============================================================
// SECTION 8: FORM VALIDATION HELPERS
// These three functions handle showing, clearing, and
// checking errors on the Add Recipe form.
// They use DOM manipulation — no alert() popups.
// ============================================================

// showError: displays an error message under a field
// and highlights the field with a red border.
function showError(inputElement, errorElement, message) {
  errorElement.textContent = message;           // Write the error text into the <p>
  inputElement.classList.add('input-error');    // Add the red border style
}

// clearError: removes the error message and red border from a field.
function clearError(inputElement, errorElement) {
  errorElement.textContent = '';                // Clear the error text
  inputElement.classList.remove('input-error'); // Remove the red border style
}

// clearAllErrors: resets every field error and the general form message.
// Called before re-validating and after a successful save.
function clearAllErrors() {
  clearError(inputName, nameError);
  clearError(inputPrepTime, prepTimeError);
  clearError(inputServings, servingsError);
  clearError(inputDescription, descriptionError);
  clearError(inputIngredients, ingredientsError);
  clearError(inputInstructions, instructionsError);

  // Clear the general message and remove its colour classes
  formMessage.textContent = '';
  formMessage.classList.remove('error', 'success');
}

// validateForm: checks all required fields one by one.
// Returns true if everything is filled in, false if anything is missing.
function validateForm() {

  let isValid = true; // Start by assuming the form is valid

  // Check Recipe Name
  if (inputName.value.trim() === "") {
    showError(inputName, nameError, "Recipe name is required.");
    isValid = false;
  }

  // Check Prep Time
  if (inputPrepTime.value.trim() === "") {
    showError(inputPrepTime, prepTimeError, "Prep time is required.");
    isValid = false;
  }

  // Check Servings
  if (inputServings.value.trim() === "") {
    showError(inputServings, servingsError, "Servings is required.");
    isValid = false;
  }

  // Check Short Description
  if (inputDescription.value.trim() === "") {
    showError(inputDescription, descriptionError, "Short description is required.");
    isValid = false;
  }

  // Check Ingredients
  if (inputIngredients.value.trim() === "") {
    showError(inputIngredients, ingredientsError, "At least one ingredient is required.");
    isValid = false;
  }

  // Check Instructions
  if (inputInstructions.value.trim() === "") {
    showError(inputInstructions, instructionsError, "Instructions are required.");
    isValid = false;
  }

  return isValid; // true = all good, false = something was missing
}


// ============================================================
// SECTION 9: LIVE ERROR CLEARING
// When the user starts typing in a required field,
// immediately remove that field's error message.
// This gives instant feedback that the issue is being fixed.
// ============================================================

inputName.addEventListener('input', function () {
  clearError(inputName, nameError);
});

inputPrepTime.addEventListener('input', function () {
  clearError(inputPrepTime, prepTimeError);
});

inputServings.addEventListener('input', function () {
  clearError(inputServings, servingsError);
});

inputDescription.addEventListener('input', function () {
  clearError(inputDescription, descriptionError);
});

inputIngredients.addEventListener('input', function () {
  clearError(inputIngredients, ingredientsError);
});

inputInstructions.addEventListener('input', function () {
  clearError(inputInstructions, instructionsError);
});


// ============================================================
// SECTION 10: SAVE RECIPE
// When "Save Recipe" is clicked:
//   1. Clear old errors
//   2. Validate the form
//   3. If invalid — show error messages, stop
//   4. If valid   — build a new recipe object, add it to the
//      array, re-render the grid, show success, close modal
// ============================================================

saveBtn.addEventListener('click', function () {

  // Step 1: Clear any errors from a previous failed attempt
  clearAllErrors();

  // Step 2: Validate — if the form has empty required fields,
  // validateForm() marks them and returns false
  const formIsValid = validateForm();

  if (formIsValid === false) {
    // Show a general error message near the Save button
    formMessage.textContent = "Please complete all required fields.";
    formMessage.classList.add('error');
    return; // Stop here — do not save
  }

  // Step 3: Collect all the values from the form fields
  const name = inputName.value.trim();
  const category = inputCategory.value;
  const prepTime = inputPrepTime.value.trim();
  const difficulty = inputDifficulty.value;
  const servings = inputServings.value.trim();
  const imageUrl = inputImageUrl.value.trim();
  const description = inputDescription.value.trim();
  const equipmentRaw = inputEquipment.value.trim();
  const ingredRaw = inputIngredients.value.trim();
  const instructions = inputInstructions.value.trim();

  // Step 4: Split the equipment textarea into an array (one item per line)
  const equipmentList = [];
  if (equipmentRaw !== "") {
    const equipLines = equipmentRaw.split('\n');
    for (let i = 0; i < equipLines.length; i++) {
      let line = equipLines[i].trim();
      if (line !== "") {
        equipmentList.push(line);
      }
    }
  }

  // Step 5: Split the ingredients textarea into an array (one item per line)
  const ingredientList = [];
  const ingredLines = ingredRaw.split('\n');
  for (let i = 0; i < ingredLines.length; i++) {
    let line = ingredLines[i].trim();
    if (line !== "") {
      ingredientList.push(line);
    }
  }

  // Step 6: Build a new recipe object from the collected values
  const newRecipe = {
    id: Date.now(),        // Use the current timestamp as a unique ID number
    name: name,
    category: category,
    prepTime: prepTime,
    difficulty: difficulty,
    servings: servings,
    image: imageUrl,       // May be empty — buildCard() handles that
    description: description,
    equipment: equipmentList,
    ingredients: ingredientList,
    instructions: instructions
  };

  // Step 7: Add the new recipe to the recipes array
  recipes.push(newRecipe);

  // Step 8: Switch the filter back to "all" so the new recipe is visible,
  // then re-render the card grid
  activeFilter = "all";
  for (let i = 0; i < pillButtons.length; i++) {
    pillButtons[i].classList.remove('active');
  }
  document.querySelector('.pill[data-filter="all"]').classList.add('active');
  showCards();

  // Step 9: Show a success message near the Save button
  formMessage.textContent = "Recipe added successfully!";
  formMessage.classList.add('success');

  // Step 10: After a short delay, close the modal and reset the form
  // The Add Recipe modal uses the CSS :target rule — it shows when the URL
  // has #recipeModal in it. Setting window.location.hash to '' removes that
  // hash, so CSS hides the modal automatically.
  setTimeout(function () {

    window.location.hash = ''; // Remove hash → CSS :target hides the modal

    // Reset every form field back to empty (or its default option)
    inputName.value = '';
    inputCategory.value = inputCategory.options[0].value;
    inputPrepTime.value = '';
    inputDifficulty.value = inputDifficulty.options[0].value;
    inputServings.value = '';
    inputImageUrl.value = '';
    inputDescription.value = '';
    inputEquipment.value = '';
    inputIngredients.value = '';
    inputInstructions.value = '';

    // Clear all error states so the form is clean when opened next time
    clearAllErrors();

  }, 800); // Wait 800ms so the user can read the success message first

});


// ============================================================
// SECTION 11: VIEW RECIPE MODAL
// When "VIEW RECIPE" is clicked on any card, this section
// finds the matching recipe, fills in the modal with its
// details, and makes the modal visible.
// ============================================================

// This function adds a click listener to every VIEW RECIPE button.
// It is called after every showCards() because the buttons are
// re-created each time the grid is re-rendered.
function attachViewButtons() {

  const viewButtons = document.querySelectorAll('.btn-view');

  for (let i = 0; i < viewButtons.length; i++) {

    viewButtons[i].addEventListener('click', function () {

      // Read the recipe id stored in the button's data-id attribute
      const clickedId = Number(this.getAttribute('data-id'));

      // Search the recipes array for the one with a matching id
      let foundRecipe = null;
      for (let j = 0; j < recipes.length; j++) {
        if (recipes[j].id === clickedId) {
          foundRecipe = recipes[j];
          break; // Found it — stop the loop
        }
      }

      // Safety check: if no recipe was found, stop
      if (foundRecipe === null) {
        return;
      }

      // --- Fill in the modal text fields ---
      viewName.textContent = foundRecipe.name;
      viewCategory.textContent = foundRecipe.category.toUpperCase();
      viewPrepTime.textContent = foundRecipe.prepTime;
      viewDifficulty.textContent = foundRecipe.difficulty + " Prep";
      viewServings.textContent = foundRecipe.servings + " Serves";
      viewDescription.textContent = foundRecipe.description;
      viewInstructions.textContent = foundRecipe.instructions;

      // --- Set the recipe image ---
      // If no image was provided, show the placeholder
      if (foundRecipe.image) {
        viewImg.src = foundRecipe.image;
      } else {
        viewImg.src = "https://placehold.co/600x300/f2ede6/a89e96?text=No+Image";
      }
      viewImg.alt = foundRecipe.name;

      // If the image URL is broken, the onerror event swaps in the placeholder
      viewImg.onerror = function () {
        this.onerror = null; // Prevent an infinite loop
        this.src = "https://placehold.co/600x300/f2ede6/a89e96?text=No+Image";
      };

      // --- Build the ingredients list ---
      // Clear the list first, then add one <li> per ingredient
      viewIngredients.innerHTML = '';
      for (let k = 0; k < foundRecipe.ingredients.length; k++) {
        const li = document.createElement('li');
        li.textContent = foundRecipe.ingredients[k];
        viewIngredients.appendChild(li);
      }

      // --- Build the equipment list ---
      // Only show the Equipment section if there is equipment listed
      if (foundRecipe.equipment.length > 0) {
        viewEquipSection.style.display = 'block';
        viewEquipmentList.innerHTML = '';
        for (let k = 0; k < foundRecipe.equipment.length; k++) {
          const li = document.createElement('li');
          li.textContent = foundRecipe.equipment[k];
          viewEquipmentList.appendChild(li);
        }
      } else {
        viewEquipSection.style.display = 'none'; // Hide if no equipment
      }

      // --- Open the view modal ---
      // Adding the class "is-open" makes the modal visible (see style.css)
      viewModal.classList.add('is-open');

      // Prevent the page behind the modal from scrolling
      document.body.style.overflow = 'hidden';

    });
  }
}


// ============================================================
// SECTION 12: CLOSE VIEW RECIPE MODAL
// The view modal can be closed three ways:
//   1. The X button at the top
//   2. The CLOSE button at the bottom
//   3. Clicking the dark overlay behind the modal
// ============================================================

function closeViewModal() {
  viewModal.classList.remove('is-open'); // Hide the modal
  document.body.style.overflow = '';     // Allow the page to scroll again
}

// Close when the top X button is clicked
closeViewBtn.addEventListener('click', closeViewModal);

// Close when the bottom CLOSE button is clicked
closeViewBtn2.addEventListener('click', closeViewModal);

// Close when the user clicks on the dark area outside the modal box
viewModal.addEventListener('click', function (event) {
  // event.target is the element that was actually clicked.
  // If it equals viewModal (the dark overlay itself, not the box inside),
  // then the user clicked outside — so we close the modal.
  if (event.target === viewModal) {
    closeViewModal();
  }
});


// ============================================================
// SECTION 13: START THE PAGE
// Run showCards() once when the page first loads.
// This builds the initial recipe grid from the data array above.
// ============================================================

showCards();



