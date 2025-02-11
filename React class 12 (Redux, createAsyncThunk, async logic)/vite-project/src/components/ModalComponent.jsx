import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { useDispatch } from 'react-redux';
import { clearAllCartItems } from '../store/features/cartSlice';

function ModalComponent({cartItems}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch()
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    dispatch(clearAllCartItems(cartItems))
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
    <Button type="primary" onClick={showModal}>
      Delete All cart items
    </Button>
    <Modal title="Cart" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <p>Are you Sure to empty all cart items ? </p>
    </Modal>
  </>
 
  )
}

export default ModalComponent