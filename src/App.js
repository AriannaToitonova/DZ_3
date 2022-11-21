import logo from './logo.svg';
import './App.css';
import MainPage from "./pages/mainPage/MainPage";
import FormPage from "./pages/formPage/FormPage";
import RegusterUser from "./components/regusterUser/RegusterUser";
import ClassComponent from "./pages/classComponents/ClassComponent";
import ClassComponent2 from "./pages/classComponents2/ClassComponent2";

function App() {
    const user = {name: "Anna", age: 19}
  return (
    <div className="App">
      {/*<MainPage/>*/}
      <FormPage/>
      {/*  <RegusterUser/>*/}
      {/*  <ClassComponent name="Arianna"/>*/}
      {/*  <ClassComponent name="Meder"/>*/}
      {/*  <ClassComponent name="Anna"/>*/}
        <ClassComponent user={user}/>
        <ClassComponent2 user={user}/>
    </div>
  );
}

export default App;
