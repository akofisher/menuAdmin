import React from 'react'
import { Link } from 'react-router-dom'
import { eraseCookie, getCookie } from '../../Cookies'
import { ADD_CATEGORY, ADD_PRODUCT, MAIN_PAGE } from '../../routes'
import './Header.css'

export default function Header() {
  let BRANCH = getCookie('branch')
  return (
    <div className="header-container">
      <Link
        className={
          window.location.pathname == MAIN_PAGE
            ? 'active-nav-links'
            : 'nav-links'
        }
        to={MAIN_PAGE}
      >
        მთავარი
      </Link>
      <Link
        className={
          window.location.pathname == ADD_CATEGORY
            ? 'active-nav-links'
            : 'nav-links'
        }
        to={ADD_CATEGORY}
      >
        კატეგორიები
      </Link>
      <Link
        className={
          window.location.pathname == ADD_PRODUCT
            ? 'active-nav-links'
            : 'nav-links'
        }
        to={ADD_PRODUCT}
      >
        პროდუქტები
      </Link>
      <button
        className="submit-btn"
        onClick={() => {
          eraseCookie('user')
          eraseCookie('branch')
          window.location.reload()
        }}
      >
        {BRANCH}-დან გასვლა
      </button>
    </div>
  )
}
