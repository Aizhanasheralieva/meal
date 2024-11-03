import Layout from "./components/Layout/Layout.tsx";
import MealForm from "./components/MealForm/MealForm";
const App = () => {

  return (
  <>
    <Layout />
    <div className="container mt-5">
      <h1>Calorie Tracker</h1>
      <hr/>
      <button className="btn btn-primary mb-5" >Add new meal</button>
      <MealForm />
    </div>
  </>
  );
};

export default App;
