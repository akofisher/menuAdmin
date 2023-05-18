import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCookie } from '../../Cookies'
import { BRANCH_PAGE } from '../../routes'
import './AddNewBranch.css'

export default function AddNewBranch() {
  const nav = useNavigate()
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const USERR = getCookie('user')

  // useEffect(() => {
  //   if (USERR) {
  //     nav(BRANCH_PAGE)
  //   }
  // }, [USERR])

  const handleSubmit = () => {
    nav(BRANCH_PAGE)
  }

  useEffect(() => {}, [user, password])

  return (
    <div className="login-container">
      <form onSubmit={() => handleSubmit()} className="login-form">
        <p>ფილიალის დამატება</p>
        <div className="inp-cont">
          <label className="label" htmlFor="userName">
            შეიყვანეთ ფილიალის სახელი
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
        <div className="inp-cont">
          <label className="label" htmlFor="password">
            გაიმეორეთ პაროლი
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
          დამატება
        </button>
      </form>
    </div>
  )
}
