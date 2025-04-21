import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import './App.css';
import "./index.css";
import LoadingSpinner from "./component/loading/LoadingSpinner";
// import LoadingSpinner from "./components/loading/LoadingSpinner.jsx";
const RegisterPage = lazy(() => import("./module/register/registerPage"));

function App() {
  const [loading, setLoading] = useState<boolean>(false);


  return (
    <>
      {loading ? <LoadingSpinner /> : ""}

      <div className="body font-promptRegu">
        {/* <BrowserRouter basename="/dbd-government-admin"> */}
        <BrowserRouter >
          <Routes>
            <Route
              key="r1"
              path="/"
              element={
                <Suspense key="s1"
                // fallback={<LoadingSpinner />}
                >
                  <RegisterPage setLoadingCallback={setLoading} />
                </Suspense>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
      {/* {loading ? <LoadingSpinner /> : ""} */}
    </>
  );
}

export default App;
