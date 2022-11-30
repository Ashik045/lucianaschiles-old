import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import Swal from 'sweetalert2'
import { CartContext } from '../../Context/CardContext'
import styles from './cartsproduct.module.scss'

const CartsProduct = ({item}) => {
    const [quantitty, setQuantity] = useState(item.quantity || 1);
    const {dispatch} = useContext(CartContext);
    const [cartItem, setCartItem] = useState([]);

    useEffect(() => {
        const items = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('productlist'))
        setCartItem(items)
    }, [])

    const location = useRouter()

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

    // Something wrong with the quantity state(when updating the quantity its removed)
    const handleClick = (state, itemId) => {
        const newProduct = cartItem.map((product) => {
            let newItem;
            if (product._id === itemId) {
                newItem= {
                    ...product,
                    quantity: state === 'i' ? quantitty <= 20 && setQuantity(quantitty + 1) : quantitty > 1 && setQuantity(quantitty - 1)
                }
                return newItem;
            }
            return {...product}
        })
        console.log(newProduct);
        dispatch({type: 'UPDATE_QUANTITY', payload: newProduct})


        // if (state === 'd') {
        //     quantitty > 1 && setQuantity(quantitty - 1)
        
        //     dispatch({type: 'UPDATE_QUANTITY', payload: mainProduct})
        // } else {
        //     quantitty <= 20 && setQuantity(quantitty + 1)
            
        //     dispatch({type: 'UPDATE_QUANTITY', payload: mainProduct})
        // }
    }

    // remove cart from localStorage when user click on remove button
    const removeFromCart = () => {
        try {
            dispatch({type: 'REMOVE_FROM_LIST', payload: item._id})
            
            Toast.fire({
                icon: 'success',
                title: 'Delete From Cart',
            })
            location.reload()
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
            <p>USD <b style={{fontSize: '17px'}}>{(item.price * quantitty).toFixed(2)}</b></p>

            <div className={styles.carts_product_txt_btm}>
                <p><FaMinus className={styles.carts_quantity} onClick={() => handleClick('d', item._id)} /> <span>{quantitty}</span> <FaPlus className={styles.carts_quantity} onClick={() => handleClick('i', item._id)} /> </p>
                <button type='submit' onClick={removeFromCart}>Remove</button>
            </div>
        </div>
    </div>
  )
}

export default CartsProduct