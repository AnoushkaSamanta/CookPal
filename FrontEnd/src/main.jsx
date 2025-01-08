import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Explore from "./components/Explore/Explore.jsx";
import Help from "./components/Help/Help.jsx";
import Layout from "./Layout.jsx";
import Team from "./components/Team/Team.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import Activity from "./components/Activity/Activity.jsx";
import Blog from "./components/Blog/Blog.jsx";
import UseCases from "./components/UseCases/UseCases.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Insights from "./components/Insights/Insights.jsx";
import RecipesMenus from "./components/RecipesMenus/RecipesMenus.jsx";
import ShareRecipe from "./components/ShareRecipe/ShareRecipe.jsx";
import CustomMealPlan from "./components/CustomMealPlan/CustomMealPlan.jsx";
import CreateGroceryList from "./components/CreateGroceryList/CreateGroceryList.jsx";
import CookingTipsTricks from "./components/CookingTipsTricks/CookingTipsTricks.jsx";
import SearchRecipe from "./components/SearchRecipe/SearchRecipe.jsx";
import RecipeDetail from './Components/Home/RecipeDetail.jsx';
import Login from "./components/Login/Login.jsx"
import SignUp from "./components/SignUp/SignUp.jsx"
import { Provider } from 'react-redux'
import { store } from './store'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Login/>} />
      <Route path="signup" element={<SignUp />} />
      <Route path="home" element={<Home />} />
      <Route path="recipesandmenus" element={<RecipesMenus />} />
      <Route path="sharerecipe" element={<ShareRecipe />} />
      <Route path="custommealplan" element={<CustomMealPlan />} />
      <Route path="creategrocerylist" element={<CreateGroceryList />} />
      <Route path="cookingtipsandtricks" element={<CookingTipsTricks />} />
      <Route path="explore" element={<Explore />} />
      <Route path="help" element={<Help />} />
      <Route path="team" element={<Team />} />
      <Route path="aboutus" element={<AboutUs />} />
      <Route path="activity" element={<Activity />} />
      <Route path="blog" element={<Blog />} />
      <Route path="usecases" element={<UseCases />} />
      <Route path="testimonials" element={<Testimonials />} />
      <Route path="insights" element={<Insights />} />
      <Route path="searchrecipe" element={<SearchRecipe />} />
      <Route path="recipe/:id" element={<RecipeDetail />} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <>
   <Provider store={store}>
    <RouterProvider router={router} /></Provider>
  </>
);
