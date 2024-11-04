import Layout from "./components/Layout/Layout.tsx";
import MealForm from "./components/MealForm/MealForm";
import { Routes, Route, useNavigate} from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  return (
  <>
    <Layout>
      <Routes>
        {/*<Route path="/" element={<App/>}/>*/}
        <Route path="/add" element={<MealForm/>} />
        <Route path="*" element={<p>Page not found</p>}/>
      </Routes>
    </Layout>
    <div className="container mt-5">
      <h1>Calorie Tracker</h1>
      <hr/>
      <button className="btn btn-primary mb-5" onClick={() => navigate('/add')}>Add new meal</button>
    </div>
  </>
  );
};

export default App;
