import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import '../styles/Cart.css';

const Cart = ({ isOpen, onClose }) => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const total = cartItems.reduce((sum, item) => sum + item.quantity * item.precio, 0);

  const handleCheckout = () => {
    const randomOrderId = Math.floor(100000 + Math.random() * 900000); // 6 dígitos
    setOrderId(randomOrderId);
    setCheckoutComplete(true);

    // Limpiar el carrito (si se desea realmente eliminar los items)
    cartItems.forEach(item => removeFromCart(item.titulo));
  };

  if (!isOpen) return null;

  return (
    <div className="cart-overlay">
      <div className="cart-panel">
        <button className="close-btn" onClick={onClose}>×</button>

        {checkoutComplete ? (
          <div className="checkout-message">
            <h2>Gracias por su compra 🎉</h2>
            <p>Su número de seguimiento es: <strong>{orderId}</strong></p>
          </div>
        ) : (
          <>
            <h2>Carrito de Compra</h2>
            {cartItems.length === 0 ? (
              <p>El carrito está vacío.</p>
            ) : (
              <>
                <ul>
                  {cartItems.map(item => (
                    <li key={item.titulo}>
                      <strong>{item.titulo}</strong><br />
                      Precio unitario: {item.precio.toFixed(2)}€<br />
                      Cantidad:
                      <input
                        type="number"
                        value={item.quantity}
                        min="1"
                        onChange={(e) =>
                          updateQuantity(item.titulo, parseInt(e.target.value))
                        }
                      />
                      <p>Subtotal: {(item.quantity * item.precio).toFixed(2)}€</p>
                      <button onClick={() => removeFromCart(item.titulo)}>Eliminar</button>
                    </li>
                  ))}
                </ul>
                <h3>Total: {total.toFixed(2)}€</h3>
                <button onClick={handleCheckout} className="checkout-btn">Checkout</button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
