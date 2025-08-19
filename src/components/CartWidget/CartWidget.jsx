import './CartWidget.css'

export default function CartWidget({ count = 0 }) {
  return (
    <div className="cart-widget">
      🛒 Mi carrito ({count})
    </div>
  )
}
