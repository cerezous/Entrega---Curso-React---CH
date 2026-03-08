import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { sileo } from 'sileo'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../service/firebase'
import { Link } from 'react-router-dom'
import EmptyCart from './EmptyCart'
import { confirmCompra } from './ConfirmCompra'

const Checkout = () => {
  const [orderId, setOrderId] = useState('')
  const [loading, setLoading] = useState(false)
  const { cart, total, clear } = useContext(CartContext)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: '',
      lastname: '',
      address: '',
      mail: '',
      secondMail: ''
    }
  })

  const mail = watch('mail')

  const enviarOrden = (data) => {
    setLoading(true)
    const order = {
      comprador: {
        name: data.name,
        lastname: data.lastname,
        address: data.address,
        mail: data.mail
      },
      carrito: cart,
      total: total(),
      fecha: serverTimestamp()
    }
    const orderCollection = collection(db, 'orders')
    addDoc(orderCollection, order)
      .then((res) => {
        setOrderId(res.id)
        clear()
        sileo.info({
          title: '¡Compra realizada!',
          description: `Orden ${res.id}`,
          position: 'top-center'
        })
      })
      .catch(() => {
        sileo.error({
          title: 'Error',
          description: 'No se pudo procesar la compra. Intenta de nuevo.',
          position: 'top-center'
        })
      })
      .finally(() => setLoading(false))
  }

  const pedirConfirmacion = async (data) => {
    const totalPago = total().toFixed(2)
    const confirmar = await confirmCompra({
      message: '¿Confirmar compra?',
      total: totalPago
    })
    if (confirmar) {
      enviarOrden(data)
    }
  }

  if (!cart.length && !orderId) {
    return <EmptyCart />
  }

  if (orderId) {
    return (
      <section className="py-5 px-3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              <div className="card card-modern border-0 bg-white text-center p-5">
                <div className="mb-3">🥳</div>
                <h2 className="h4 fw-bold text-dark mb-2">¡Gracias por tu compra!</h2>
                <p className="text-secondary mb-4">Tu orden es: <strong className="text-dark">{orderId}</strong></p>
                <Link to="/" className="btn btn-dark rounded-pill px-4">
                  Volver al inicio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-4 py-md-5 px-3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 col-xl-6">
            <h1 className="display-6 fw-bold text-dark mb-4">Completa tus datos</h1>
            <div className="card card-modern border-0 bg-white p-4">
              <form onSubmit={handleSubmit(pedirConfirmacion)} className="d-flex flex-column gap-3">
                <div>
                  <input
                    className={`form-control form-control-lg rounded-pill ${errors.name ? 'is-invalid' : ''}`}
                    type="text"
                    placeholder="Nombre"
                    {...register('name', { required: 'El nombre es obligatorio' })}
                  />
                  {errors.name && (
                    <div className="invalid-feedback d-block ps-3">{errors.name.message}</div>
                  )}
                </div>
                <div>
                  <input
                    className={`form-control form-control-lg rounded-pill ${errors.lastname ? 'is-invalid' : ''}`}
                    type="text"
                    placeholder="Apellido"
                    {...register('lastname', { required: 'El apellido es obligatorio' })}
                  />
                  {errors.lastname && (
                    <div className="invalid-feedback d-block ps-3">{errors.lastname.message}</div>
                  )}
                </div>
                <div>
                  <input
                    className={`form-control form-control-lg rounded-pill ${errors.address ? 'is-invalid' : ''}`}
                    type="text"
                    placeholder="Dirección"
                    {...register('address', { required: 'La dirección es obligatoria' })}
                  />
                  {errors.address && (
                    <div className="invalid-feedback d-block ps-3">{errors.address.message}</div>
                  )}
                </div>
                <div>
                  <input
                    className={`form-control form-control-lg rounded-pill ${errors.mail ? 'is-invalid' : ''}`}
                    type="email"
                    placeholder="Correo electrónico"
                    {...register('mail', {
                      required: 'El correo es obligatorio',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Correo no válido'
                      }
                    })}
                  />
                  {errors.mail && (
                    <div className="invalid-feedback d-block ps-3">{errors.mail.message}</div>
                  )}
                </div>
                <div>
                  <input
                    className={`form-control form-control-lg rounded-pill ${errors.secondMail ? 'is-invalid' : ''}`}
                    type="email"
                    placeholder="Repite tu correo"
                    {...register('secondMail', {
                      required: 'Repite tu correo',
                      validate: (value) => value === mail || 'Los correos no coinciden'
                    })}
                  />
                  {errors.secondMail && (
                    <div className="invalid-feedback d-block ps-3">{errors.secondMail.message}</div>
                  )}
                </div>
                <button
                  type="submit"
                  className="btn btn-dark btn-lg rounded-pill mt-2"
                  disabled={loading}
                >
                  {loading ? 'Procesando...' : 'Completar compra'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Checkout
