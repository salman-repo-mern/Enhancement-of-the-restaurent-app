import {useState, useContext} from 'react'

import CartContext from '../../context/CartContext'

import './index.css'

const DishItem = ({dishDetails}) => {
  const {
    dishName,
    dishType,
    dishPrice,
    dishCurrency,
    dishDescription,
    dishImage,
    dishCalories,
    addonCat,
    dishAvailability,
  } = dishDetails

  const [quantity, setQuantity] = useState(0)
  const {addCartItem} = useContext(CartContext)

  const onIncreaseQuantity = () => setQuantity(prevState => prevState + 1)

  const onDecreaseQuantity = () =>
    setQuantity(prevState => (prevState > 0 ? prevState - 1 : 0))

  const onAddItemToCart = () => {
    if (quantity > 0) {
      addCartItem({...dishDetails, quantity})
    }
  }

  const renderControllerButton = () => (
    <div className="controller-container bg-success">
      <button
        className="button"
        type="button"
        onClick={onDecreaseQuantity}
        data-testid="decrease-quantity"
      >
        -
      </button>
      <p className="quantity" data-testid="item-quantity">
        {quantity}
      </p>
      <button
        className="button"
        type="button"
        onClick={onIncreaseQuantity}
        data-testid="increase-quantity"
      >
        +
      </button>
    </div>
  )

  return (
    <li className="mb-3 p-3 dish-item-container d-flex">
      <div
        className={`veg-border ${dishType === 1 ? 'non-veg-border' : ''} me-3`}
      >
        <div className={`veg-round ${dishType === 1 ? 'non-veg-round' : ''}`} />
      </div>

      <div className="dish-details-container">
        <p className="dish-name" data-testid="dish-name">
          {dishName}
        </p>
        <p className="dish-currency-price">
          {dishCurrency} {dishPrice}
        </p>
        <p className="dish-description">{dishDescription}</p>

        {dishAvailability ? (
          renderControllerButton()
        ) : (
          <p className="not-availability-text text-danger">Not available</p>
        )}

        {addonCat.length !== 0 && (
          <p className="addon-availability-text mb-0">
            Customizations available
          </p>
        )}

        {quantity > 0 && (
          <button
            type="button"
            className="btn btn-outline-primary mt-3"
            onClick={onAddItemToCart}
            data-testid="add-to-cart"
          >
            ADD TO CART
          </button>
        )}
      </div>

      <p className="dish-calories text-warning">{dishCalories} calories</p>
      <img
        className="dish-image"
        alt={dishName}
        src={dishImage}
        data-testid="dish-image"
      />
    </li>
  )
}

export default DishItem
