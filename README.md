# Recipe Finder App

Welcome to the **Recipe Finder App**! This web application allows users to search for recipes based on various filters such as cuisine, ingredients, and preparation time. It fetches recipe data using the Spoonacular API and displays the results in an easy-to-navigate interface.

[DEMO LINK](https://recipe-finder-app-seven-sooty.vercel.app/) | [Repo](https://github.com/senkiv-oleh/recipe-finder-app)

## Features

- **Search Recipes**: Users can search for recipes by query, cuisine type, and maximum preparation time.
- **Recipe Details**: Users can view detailed information about a recipe, including ingredients, preparation time, servings, and more.
- **Responsive Design**: The app is fully responsive and works well on both desktop and mobile devices.
- **Filter Options**: Users can filter the search results based on criteria like cuisine and preparation time.

## Technologies Used

- **Frontend**:
  - Next.js 13 (App Router)
  - React
  - Tailwind CSS
- **API**: Spoonacular API for fetching recipe data
- **State Management**: React's `useState` and `useEffect`
- **Routing**: Next.js Dynamic Routes

## Installation

### 1. Clone the repository:

```bash
git clone git@github.com:senkiv-oleh/recipe-finder-app.git
```

### 2. Install dependencies:

Navigate to the project folder and install the required dependencies.

```bash
cd recipe-finder-app
npm install
```

### 3. Add environment variables:

You will need to add your Spoonacular API key to the `.env.local` file in the root of your project.

```bash
NEXT_PUBLIC_SPOONACULAR_API_KEY=your-api-key-here
```

### 4. Run the development server:

Start the development server using the following command:

```bash
npm run dev
```

Your app should now be running on [http://localhost:3000](http://localhost:3000).

## Usage

1. Open the app in your browser.
2. Use the search bar to search for recipes by query, cuisine, or preparation time.
3. Click on a recipe to view its detailed information, including ingredients and instructions.

## Folder Structure

- `src/app/recipes/[id]/page.tsx`: Dynamic page to display recipe details.
- `src/app/recipes/page.tsx`: The page to display a list of recipes.
- `src/app/page.tsx`: The main page to search.
- `src/components`: Contains functions for components.
- `src/constants`: Static data and constants
- `src/hooks`: Custom hook for fetching recipes based on search parameters.
- `src/services`: Contains functions for fetching recipe data from the Spoonacular API.
- `src/styles`: # CSS styles
- `src/types`: Type definitions for recipe details.
- `src/utils`: Helper utilities

## Contributing

If you'd like to contribute to this project, feel free to fork the repository, create a branch, and submit a pull request. Any improvements or bug fixes are welcome!

## License

This project is open-source and available under the [MIT License](LICENSE).
