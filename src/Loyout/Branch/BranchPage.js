import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { getCookie, setCookie } from '../../Cookies'
import { Branch } from '../../data'
import { MAIN_PAGE } from '../../routes'
import './BranchPage.css'

export default function BranchPage() {
  const nav = useNavigate()
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const USERR = getCookie('user')
  const BRANCH = getCookie('branch')
  const [modal, setModal] = useState(false)
  const [pincode, setPincode] = useState()

  useEffect(() => {
    if (USERR && BRANCH !== null) {
      nav(MAIN_PAGE.replace(':branch', BRANCH))
    }
  }, [USERR, BRANCH])

  const handleSubmit = async (val) => {
    setCookie('branch', val, 1)
    window.location.reload()
    if (USERR !== null && BRANCH !== null)
      await nav(MAIN_PAGE.replace(':branch', BRANCH))
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
            BranchAdding()
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
