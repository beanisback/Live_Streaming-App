import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import store from "./utilis/store";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
 {
  path: "/", 
  element: <MainContainer />
 },
 {
  path: "watch",
  element: <WatchPage />
 },
 {
  path: "demo",
  element:( <>
  <Demo />
  <Demo2 />
  </>
  ),
   },
    ],
     },
      ]);

function App() {
  return (
    <Provider store={store}>
    <div>
      
      <Header />
      <RouterProvider router={appRouter} />
      <Footer />
      {/**
       * 
       * Header
       * Body
       * Sidebar
       *    Menuitems
       * Maincontainer
       *    Buttonlist
       *    Videocontainer
       *       videocard
       * 
       */}
    </div>
    </Provider>
  );
}

export default App;
 