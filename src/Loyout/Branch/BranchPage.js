import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { getCookie } from '../../Cookies'
import { Branch } from '../../data'
import { ADD_NEW_BRANCH, BRANCH_LOGIN } from '../../routes'
import './BranchPage.css'

export default function BranchPage() {
  const nav = useNavigate()
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [modal, setModal] = useState(false)
  const [pincode, setPincode] = useState()
  const USERR = getCookie('user')
  const BRANCH = getCookie('branch')

  const handleSubmit = async (val) => {
    localStorage.setItem('branch', val)
    await nav(BRANCH_LOGIN)
  }

  const BranchAdding = () => {
    return Swal.fire({
      position: 'center',
      title: 'შეიყვანეთ პინ კოდი',
      input: 'text',
      confirmButtonText: 'პროფილის წაშლა',
      cancelButtonText: 'გაუქმება',
      confirmButtonColor: '#fdcb6e',
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'გთხოვთ შეიყვანოთ პინკოდი!'
        } else {
          setPincode(value)
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        alert('ოპერაცია წარმატებულია')
        nav(ADD_NEW_BRANCH)
      } else if (result.isDismissed) {
        window.location.reload()
      }
    })
  }

  useEffect(() => {}, [user, password])

  return (
    <div className="branch-container">
      <p className="branch_header_text">აირჩიეთ ფილიაილი</p>
      <div className="branches_list">
        <button
          onClick={() => {
            nav(ADD_NEW_BRANCH)
          }}
          type="button"
          className="branch_card"
        >
          ფილიალის დამატება
        </button>
        {Branch.map((val, idx) => {
          return (
            <button
              onClick={() => {
                handleSubmit(val.branchName)
              }}
              key={idx}
              type="button"
              className="branch_card"
            >
              {val.branchName} - {val.id}
            </button>
          )
        })}
      </div>
      {/* {modal ? (
        <div className="modal_main">
          <div className="modal">
            <form onSubmit={() => handleSubmit()} className="login-form">
              <p>სისტემაში შესვლა</p>
              <div className="inp-cont">
                <label className="label" htmlFor="userName">
                  შეიყვანეთ მომხმარებელი
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
            </form>
          </div>
        </div>
      ) : null} */}
    </div>
  )
}
