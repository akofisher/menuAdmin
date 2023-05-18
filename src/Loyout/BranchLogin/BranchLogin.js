import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getCookie } from '../../Cookies'
import { BRANCH_RECOVERY, MAIN_PAGE } from '../../routes'
import './BranchLogin.css'

export default function BranchLogin() {
  const nav = useNavigate()
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const USERR = getCookie('user')
  const BRANCH = localStorage.getItem('branch')

  // useEffect(() => {
  //   if (USERR && BRANCH !== null) {
  //     // window.location.reload()
  //     nav(BRANCH_LOGIN)
  //   }
  // }, [])

  const handleSubmit = () => {
    // setCookie('branch', val, 1)
    // window.location.reload()
    if (USERR && BRANCH !== null) nav(MAIN_PAGE.replace(':branch', BRANCH))
  }

  // useEffect(() => {
  //   if (USERR) {
  //     nav(BRANCH_PAGE)
  //   }
  // }, [USERR])

  return (
    <div className="login-container">
      <form onSubmit={() => handleSubmit()} className="login-form">
        <p>ფილიალში შესვლა</p>
        <div className="inp-cont">
          <label className="label" htmlFor="userName">
            შეიყვანეთ ფილიალი
          </label>
          <input
            id="userName"
            name="userName"
            type="text"
            onChange={(val) => setUser(val.target.value)}
            variant="outlined"
            label="მომხმარებელი"
            className="user-input"
            required
          />
        </div>
        <div className="inp-cont">
          <label className="label" htmlFor="password">
            შეიყვანეთ პაროლი
          </label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={(val) => setPassword(val.target.value)}
            variant="outlined"
            label="პაროლი"
            className="pass-input"
            required
          />
        </div>
        <button className="submit-btn" type="submit">
          შესვლა
        </button>
        <Link className="recovery-link" to={BRANCH_RECOVERY}>
          პაროლის აღდგენა
        </Link>
      </form>
    </div>
  )
}
