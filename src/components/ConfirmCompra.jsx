import React from 'react'
import { confirmable, createConfirmation } from 'react-confirm'
import { Modal, Button } from 'react-bootstrap'

const ConfirmCompraDialog = ({ show, proceed, message, total }) => {
  return (
    <Modal show={show} onHide={() => proceed(false)} centered backdrop="static">
      <Modal.Body className="p-4 text-center">
        <p className="mb-2 fs-5 text-dark">{message}</p>
        <p className="mb-4 fw-bold text-dark">Total a pagar: ${total}</p>
        <div className="d-flex gap-2 justify-content-center flex-wrap">
          <Button
            variant="outline-secondary"
            className="rounded-pill px-4"
            onClick={() => proceed(false)}
          >
            Cancelar
          </Button>
          <Button
            variant="dark"
            className="rounded-pill px-4"
            onClick={() => proceed(true)}
          >
            Sí, confirmar
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export const confirmCompra = createConfirmation(confirmable(ConfirmCompraDialog))
