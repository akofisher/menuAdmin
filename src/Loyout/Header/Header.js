import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { eraseCookie, getCookie } from '../../Cookies'
import { ADD_CATEGORY, ADD_PRODUCT, LOGIN, MAIN_PAGE } from '../../routes'
import './Header.css'

export default function Header() {
  let BRANCH = getCookie('branch')
  let nav = useNavigate()
  return (
    <div className="header-container">
      <Link
        className={
          window.location.pathname == MAIN_PAGE.replace(':branch', BRANCH)
            ? 'active-nav-links'
            : 'nav-links'
        }
        to={MAIN_PAGE.replace(':branch', BRANCH)}
      >
        მთავარი
      </Link>
      <Link
        className={
          window.location.pathname == ADD_CATEGORY.replace(':branch', BRANCH)
            ? 'active-nav-links'
            : 'nav-links'
        }
        to={ADD_CATEGORY.replace(':branch', BRANCH)}
      >
        კატეგორიები
      </Link>
      <Link
        className={
          window.location.pathname == ADD_PRODUCT.replace(':branch', BRANCH)
            ? 'active-nav-links'
            : 'nav-links'
        }
        to={ADD_PRODUCT.replace(':branch', BRANCH)}
      >
        პროდუქტები
      </Link>
      <button
        className="Logout_btn"
        onClick={() => {
          eraseCookie('user')
          eraseCookie('branch')
          nav(LOGIN)
          // window.location.reload()
        }}
      >
        {BRANCH}-დან გასვლა
      </button>
    </div>
  )
}
