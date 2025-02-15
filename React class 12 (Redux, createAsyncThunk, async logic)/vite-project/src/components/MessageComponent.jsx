import React, { useState } from 'react';
import { Button, message, Space } from 'antd';

function MessageComponent({id}) {
    const [messageApi, contextHolder] = message.useMessage();

  console.log(id)

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
      // if(product){
      messageApi.open({
        type: 'warning',
        content: 'Product quantity has been increased because product is already present in the cart',
      });
    // }
    };
    
  return (
    <>
      {contextHolder}
     <Button type='primary'
     className='mt-2'
     onClick={id ? warning : success}>
      Add to Cart
      </Button>
  
    
    </>
  )
}

export default MessageComponent


