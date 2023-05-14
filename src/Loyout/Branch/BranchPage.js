import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
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

  useEffect(() => {
    if (USERR && BRANCH) {
      nav(MAIN_PAGE)
    }
  }, [USERR, BRANCH])

  const handleSubmit = (val) => {
    setCookie('branch', val, 1)
    nav(MAIN_PAGE)
  }

  useEffect(() => {}, [user, password])

  return (
    <div className="branch-container">
      <p className="branch_header_text">აირჩიეთ ფილიაილი</p>
      <div className="branches_list">
        {Branch.map((val, idx) => {
          return (
            <button
              onClick={() => handleSubmit(val.branchName)}
              key={idx}
              type="button"
              className="branch_card"
            >
              {val.branchName} - {val.id}
            </button>
          )
        })}
      </div>
    </div>
  )
}
