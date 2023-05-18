import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getCookie } from '../../Cookies'
import './BranchRecovery.css'

export default function BranchRecovery() {
  const [user, setUser] = useState('')
  const [number, setNumber] = useState('')
  const nav = useNavigate()
  const USERR = getCookie('user')

  // useEffect(() => {
  //     if (USERR) {
  //         nav(MAIN_PAGE)
  //     }
  // }, [USERR])

  return (
    <div className="login-container">
      <form onSubmit={() => null} className="login-form">
        <Link className="recovery-link-sec" to={-1}>
          უკან დაბრუნება
        </Link>
        <div className="recovery-history-line">
          <p className="recovery-head-text">პაროლის აღდგენა</p>
        </div>
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
          <label className="label" htmlFor="number">
            შეიყვანეთ მობილური ნომერი
          </label>
          <input
            id="number"
            name="number"
            type="tel"
            onChange={(val) => setNumber(val.target.value)}
            variant="outlined"
            label="მობილური ნომერი"
            className="mobile-input"
            required
          />
        </div>
        <button className="submit-btn" type="submit">
          აღდგენა
        </button>
      </form>
    </div>
  )
}
