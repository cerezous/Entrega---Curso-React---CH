import React from 'react'
import { confirmable, createConfirmation } from 'react-confirm'
import { Modal, Button } from 'react-bootstrap'

const ConfirmQuitarDialog = ({ show, proceed, message, productName }) => {
  return (
    <Modal show={show} onHide={() => proceed(false)} centered backdrop="static">
      <Modal.Body className="p-4 text-center">
        <p className="mb-2 fs-5 text-dark">{message}</p>
        {productName && <p className="mb-4 text-secondary">{productName}</p>}
        <div className="d-flex gap-2 justify-content-center flex-wrap">
          <Button
            variant="outline-secondary"
            className="rounded-pill px-4"
            onClick={() => proceed(false)}
          >
            Cancelar
          </Button>
          <Button
            variant="danger"
            className="rounded-pill px-4"
            onClick={() => proceed(true)}
          >
            Sí, quitar
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export const confirmQuitarProducto = createConfirmation(confirmable(ConfirmQuitarDialog))
