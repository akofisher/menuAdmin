import { Suspense } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import AddNewBranch from './Loyout/AddNewBranch/AddNewBranch'
import BranchPage from './Loyout/Branch/BranchPage'
import BranchLogin from './Loyout/BranchLogin/BranchLogin'
import BranchRecovery from './Loyout/BranchRecovery/BranchRecovery'
import Category from './Loyout/Category/Category'
import Login from './Loyout/Login/Login'
import Main from './Loyout/Main/Main'
import Products from './Loyout/Products/Products'
import PassRecovery from './Loyout/Recovery/PassRecovery'
import PrivateRoute from './PrivateRoute'
import './reset.css'
import {
  ADD_CATEGORY,
  ADD_NEW_BRANCH,
  ADD_PRODUCT,
  BRANCH_LOGIN,
  BRANCH_PAGE,
  BRANCH_RECOVERY,
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
          <Route exact path={BRANCH_RECOVERY} element={<BranchRecovery />} />
          <Route exact path={BRANCH_LOGIN} element={<BranchLogin />} />
          <Route exact path={ADD_NEW_BRANCH} element={<AddNewBranch />} />
          <Route exact path={PASS_RECOVERY} element={<PassRecovery />} />
          <Route
            exact
            path={MAIN_PAGE}
            element={
              <Suspense fallback={<div>...Loader</div>}>
                <PrivateRoute redirectTo={LOGIN}>
                  <Main />
                </PrivateRoute>
              </Suspense>
            }
          />
          <Route
            exact
            path={ADD_CATEGORY}
            element={
              <Suspense fallback={<div>...Loader</div>}>
                <PrivateRoute redirectTo={LOGIN}>
                  <Category />
                </PrivateRoute>
              </Suspense>
            }
          />
          <Route
            exact
            path={ADD_PRODUCT}
            element={
              <Suspense fallback={<div>...Loader</div>}>
                <PrivateRoute redirectTo={LOGIN}>
                  <Products />
                </PrivateRoute>
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
