import "./App.css";
import News from "./Components/News";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root";

const country = 'in';
const pageSize = 5;

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {
        index: true,
        element: <News key="general" category='general' country={country} pageSize={pageSize}/>,
      },
      {
        path: "/general",
        element: <News key="general" category='general' country={country} pageSize={pageSize}/>,
      },
      {
        path: "/business",
        element: <News key="business" category='business' country={country} pageSize={pageSize}/>,
      },
      {
        path: "/entertainment",
        element: <News key="entertainment" category='entertainment' country={country} pageSize={pageSize}/>,
      },
      {
        path: "/health",
        element: <News key="health" category='health' country={country} pageSize={pageSize}/>,
      },
      {
        path: "/science",
        element: <News key="science" category='science' country={country} pageSize={pageSize}/>,
      },
      {
        path: "/sports",
        element: <News key="sports" category='sports' country={country} pageSize={pageSize}/>,
      },
      {
        path: "/technology",
        element: <News key="technology" category='technology' country={country} pageSize={pageSize}/>,
      },
    ]
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
