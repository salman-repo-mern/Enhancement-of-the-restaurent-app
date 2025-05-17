import {useContext} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai'

import CartContext from '../../context/CartContext'

import './index.css'

const Header = () => {
  const {cartList, restaurantName} = useContext(CartContext)

  const renderCartIcon = () => (
    <div className="cart-icon-link position-relative">
      <Link to="/cart">
        <button type="button" className="cart-icon-button" data-testid="cart">
          <AiOutlineShoppingCart className="cart-icon" />
        </button>
      </Link>
      {cartList.length === 0 && (
        <div className="cart-count-badge" data-testid="cart-count">
          <p className="m-0 cart-count">{cartList.length}</p>
        </div>
      )}
    </div>
  )

  return (
    <header className="p-4 d-flex flex-row align-items-center nav-header">
      <Link to="/">
        <h1 className="m-0 logo-heading">{restaurantName}</h1>
      </Link>
      <div className="d-flex flex-row align-items-center ms-auto">
        <p className="mt-0 mb-0 me-2 d-none d-sm-block my-orders-text">
          My Orders
        </p>

        {renderCartIcon()}
      </div>
    </header>
  )
}

export default withRouter(Header)
