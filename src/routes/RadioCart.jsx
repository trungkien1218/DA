import React, { useState } from 'react';
import { Radio } from 'antd';
const App = () => {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);   
  };
  return (
    <Radio.Group onChange={onChange} value={value} style={{ paddingBottom:'20px', paddingTop:'20px'}}>
      <Radio value={1}>Direct payment</Radio>
      <Radio value={2}>Online payment</Radio>
      
    </Radio.Group>
  );
};
export default App;