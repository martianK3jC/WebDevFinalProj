# Recipe Book

A beginner-friendly Recipe Book web app built with plain HTML, CSS, and JavaScript. Browse recipes, filter by category, search by keyword, add your own recipes, and view full recipe details — all in one page, with no frameworks or backend required.

See live demo: https://martiank3jc.github.io/WebDevFinalProj/

---

## Features

- **Browse Recipes** — All recipes are displayed as cards in a responsive grid.
- **Filter by Category** — Click a pill button to show only recipes in that category (All, Vegan, Breakfast, Lunch, Dinner, Dessert, Quick Bite).
- **Search Recipes** — Type in the search bar to filter recipes live by name, description, category, difficulty, or ingredients.
- **Add a Recipe** — Fill in the Add Recipe form to create a new recipe card that appears instantly in the grid.
- **View Full Recipe** — Click VIEW RECIPE on any card to see the full details (ingredients, equipment, instructions, and more) in a modal.
- **Mobile Responsive** — The layout adjusts cleanly for smaller screens.

---

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and modals |
| CSS3 | Styling, layout (CSS Grid/Flexbox), animations |
| Vanilla JavaScript | All interactivity — filtering, search, add, view |
| Google Fonts | Typography (Playfair Display, DM Sans) |

No frameworks, no libraries, no backend, no database.

---

## File Structure

```
WebDevFinalProj/
│
├── index.html       ← Main page (recipe grid + both modals)
├── style.css        ← All styles for the page and modals
├── script.js        ← All JavaScript logic
│
├── modal.html       ← Reference file only (see note below)
├── README.md        ← This file
│
└── image/           ← Recipe images folder
```

> **Note on `modal.html`:** This file is a standalone prototype used during early development to design the Add Recipe modal layout. It is **not used** by the project. The working Add Recipe modal and the View Recipe modal are both inside `index.html`. You can safely ignore `modal.html`.

---

## How to Run

This project uses only static files — no build step or server required.

1. Download or clone the project folder.
2. Open `index.html` in any modern web browser (Chrome, Firefox, Edge, Safari).
3. That's it! The page will load with all 6 starter recipes ready.

> **Tip:** If images don't load, make sure the `image/` folder is in the same directory as `index.html` and that the filenames match exactly.

---

## Functionalities Implemented

### Filter by Category
- Click any pill button in the filter bar to show recipes from that category.
- Categories: **ALL**, **VEGAN**, **BREAKFAST**, **LUNCH**, **DINNER**, **DESSERT**, **QUICK BITE**
- The active pill is highlighted. Handled in `script.js` using `data-filter` attributes.

### Search Recipes
- Type in the search bar at the top to filter recipes in real time.
- Searches across: recipe name, description, category, difficulty, and ingredients.
- Works together with the selected category filter at the same time.

### Add Recipe
- Click **+ ADD RECIPE** in the header to open the form modal.
- Required fields: Recipe Name, Category, Prep Time, Difficulty, Servings, Short Description, Ingredients, Instructions.
- Image URL is optional. If left blank (or if the URL is broken), a placeholder image is used automatically.
- After saving, the new recipe card appears in the grid, the form resets, and the modal closes.

### View Recipe
- Every recipe card has a **VIEW RECIPE** button.
- Clicking it opens a detail modal showing: title, category, prep time, difficulty, servings, image, description, equipment, ingredients, and instructions.
- Close the modal with the **✕ CLOSE** button, the **CLOSE** button at the bottom, or by clicking the dark overlay.

### Mobile Responsive Layout
- The recipe grid switches from 3 columns → 2 columns → 1 column as the screen gets smaller.
- The modal form and filter pills are fully scrollable and usable on small screens.
- Handled entirely through CSS media queries in `style.css`.
---

## Group Members

| Member | Role |
|---|---|
| Kesha Jane L. Ceniza | JavaScript |
| Dave Francis V. Momongan | HTML |
| Cris Lorrenz E. Ortojan | CSS |
