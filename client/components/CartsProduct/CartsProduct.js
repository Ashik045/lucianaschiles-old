import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import Swal from 'sweetalert2'
import { CartContext } from '../../Context/CardContext'
import styles from './cartsproduct.module.scss'

const CartsProduct = ({item}) => {
    const [quantity, setQuantity] = useState(1);
    const {dispatch} = useContext(CartContext);
    console.log(quantity);

    // console.log(item._id);
    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        width: "18rem",
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      const handleClick = (state) => {
        if (state === 'd') {
            quantity > 1 && setQuantity(quantity -1)
        } else if (state === 'i') {
            quantity < 20 && setQuantity(quantity +1)
        }
      }

    const removeFromCart = () => {
        console.log(item._id);
        try {
            dispatch({type: 'REMOVE_FROM_LIST', payload: item._id})
            
            Toast.fire({
                icon: 'success',
                title: 'Delete From Cart',
            })
        } catch (error) {
            console.log(error);
        }
    }
    
  return (
    <div className={styles.carts_product}>
        <Link href={`/products/${item._id}`}>
            <Image src={item.images[0]} className={styles.carts_product_img} alt="cart img" height={180} width={200} />
        </Link>

        <div className={styles.carts_product_txt}>
            <Link href={`/products/${item._id}`}>
                <h3>{item.title}</h3>
            </Link>
            <p>USD <b style={{fontSize: '17px'}}>{item.price}</b></p>

            <div className={styles.carts_product_txt_btm}>
                <p><FaMinus className={styles.carts_quantity} onClick={() => handleClick('d')} /> <span>{quantity}</span> <FaPlus className={styles.carts_quantity} onClick={() => handleClick('i')} /> </p>
                <button type='submit' onClick={removeFromCart}>Remove</button>
            </div>
        </div>
    </div>
  )
}

export default CartsProduct