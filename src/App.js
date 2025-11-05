// import logo from './logo.svg';
import './App.css';
import LoginForm from './Components/Auth/LoginForm';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <LoginForm />
      {/* Toast container must be included once in the app */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light" // or "dark"
      />
    </div>
  );
}

export default App;
