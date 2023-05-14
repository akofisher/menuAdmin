import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import BranchPage from './Loyout/Branch/BranchPage'
import Category from './Loyout/Category/Category'
import Login from './Loyout/Login/Login'
import Main from './Loyout/Main/Main'
import Products from './Loyout/Products/Products'
import PassRecovery from './Loyout/Recovery/PassRecovery'
import PrivateRoute from './PrivateRoute'
import './reset.css'
import {
  ADD_CATEGORY,
  ADD_PRODUCT,
  BRANCH_PAGE,
  LOGIN,
  MAIN_PAGE,
  PASS_RECOVERY,
} from './routes'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path={LOGIN} element={<Login />} />
          <Route exact path={BRANCH_PAGE} element={<BranchPage />} />
          <Route exact path={PASS_RECOVERY} element={<PassRecovery />} />
          <Route
            exact
            path={MAIN_PAGE}
            element={
              // <Suspense fallback={<Loader />}>
              <PrivateRoute redirectTo={LOGIN}>
                <Main />
              </PrivateRoute>
              // </Suspense>
            }
          />
          <Route
            exact
            path={ADD_CATEGORY}
            element={
              // <Suspense fallback={<Loader />}>
              <PrivateRoute redirectTo={LOGIN}>
                <Category />
              </PrivateRoute>
              // </Suspense>
            }
          />
          <Route
            exact
            path={ADD_PRODUCT}
            element={
              // <Suspense fallback={<Loader />}>
              <PrivateRoute redirectTo={LOGIN}>
                <Products />
              </PrivateRoute>
              // </Suspense>
            }
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
