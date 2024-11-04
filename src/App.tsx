import Layout from "./components/Layout/Layout.tsx";
import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home/Home.tsx";
import MealForm from "./components/MealForm/MealForm.tsx";
import EditMeal from "./containers/EditMeal/EditMeal.tsx";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<MealForm />} />
          <Route path="/edit/:id" element={<EditMeal />} />
          <Route path="*" element={<p>Page not found</p>} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
