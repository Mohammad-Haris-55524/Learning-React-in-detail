import React from 'react';
import { Button, message, Space } from 'antd';
import { useSelector } from 'react-redux';

function MessageComponent({id}) {
  const cartItems = useSelector((state) => state.cart.cart);
    const [messageApi, contextHolder] = message.useMessage();

  // console.log(id)
    const product = cartItems.find((product)=> product.id === id)
    console.log(product)

    const success = () => {
      messageApi.open({
        type: 'success',
        content: 'Product has been added to cart successfully',
      });
    };
    const error = () => {
      messageApi.open({
        type: 'error',
        content: 'This is an error message',
      });
    };
    const warning = () => {
      messageApi.open({
        type: 'warning',
        content: 'This is a warning message',
      });
    };
    
  return (
    <>
      {contextHolder}
      <Space>
        <Button onClick={success}>Success</Button>
        {/* <Button onClick={error}>Error</Button>
        <Button onClick={warning}>Warning</Button> */}
      </Space>
    </>
  )
}

export default MessageComponent


