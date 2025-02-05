import React from 'react'
import { Alert, Flex, Spin } from 'antd';
function Loader() {
    const contentStyle = {
        padding: 50,
        background: 'rgba(0, 0, 0, 0.05)',
        borderRadius: 4,
      };
      const content = <div style={contentStyle} />;
  return (
  
    <Flex gap="middle">     
      <Spin tip="Loading" size="large">
      </Spin>
    </Flex>


  )
}

export default Loader

