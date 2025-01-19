import React from 'react';
import { useState,useEffect } from 'react';
import { Button, Modal, message} from 'antd';
import { Input } from 'antd';

const DynamicModalComponenet = ({receivedData, dataSource}) => {
const [formData, setFormData] = useState({
  id:'',
  first_name:'',
  last_name:'',
  email: '',
  date_of_birth: '',
  age: '',
  country: '',
  phone: '',
})
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isFormValid, setIsFormValid] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
console.log(messageApi)
// Form ko check ham kuch iss trha karen gy ky form ki sari input fields fill honi chaihyee koi field empty na ho to yaad
// rahy form ky data ko save karwany ky liye ham ny aik useState banai hy [formData, setFormData] ky name sy ab masla yah 
// aye ga ky formData aik object hy jis my ham multiple input fields ka data save karwa rahy han. Hamey check karwana hy ky
// koi bhe formData ki input field khali nahe honi chaihyee yani false nahe honi chaihyee to uss ky liye ham every method
// ka use kar lein gy lekin masla yah aye ga ky every method only works on array but formData to object hy to ham yahaan 
// formData ky object ko kuch iss trha array my covert kar lein gy ====> Object.values(formData). Ab yaad rahy iss my hamey
// 1 array mily ga jis ky andar formData ki sari inputs fields ki sirf values hongi uss par ham every ka method chalaein 
// gy or condition dein gy ky koi bhe input value empty nahe honi chaihee  (!== ''). Jo bhe output aye ga true/false ki 
// surat my usy ham conditonally check karwain gy submit button ko disable or able karny ky liye 

  // Function to check if all form fields are filled
    useEffect(() => {
      console.log("use effect rendering ...")
      const isFormFilled = Object.values(formData).every((value) => value.trim() !== '');
      setIsFormValid(isFormFilled);
    }, [formData])

  // Funtion for loading screen 
    const showLoading = () => {
    setOpen(true);
    setLoading(true);

    // Simple loading mock. You should add cleanup logic in real world.
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  const handleOkAndSubmitFormHandler = (e) => {
    e.preventDefault()
    setOpen(false);
    receivedData(formData)
    setFormData("")
    messageApi.open({
      type: 'success',
      content: 'Form Data updated sucessfully',
    });

  };

  const handleCancel = () => {
    setOpen(false);
  };


  const onInputChangeHandler = (e)=>{
    const {value,name} = e.target
    console.log(typeof(value))
    setFormData({...formData, id:Date.now().toString(), [name]: value})
  }

  return (
    <>
      <Button style={{background: "green"}} size='large' type="primary" onClick={showLoading}> Add Student Detail </Button>
      {contextHolder}
      <Modal
        open={open}
        title="Student information form"
        
        loading={loading}
        onOk={handleOkAndSubmitFormHandler}
        okText = "Submit Form"

        onCancel={handleCancel}
        footer={[
          <Button
            key="submit"
            type="primary"
            onClick={handleOkAndSubmitFormHandler}
            disabled={!isFormValid} // Disable button based on form validation
          >
            Submit Form
          </Button>,
        ]}
        >
          

<div style={{padding: "1rem"}}>
<form onSubmit={handleOkAndSubmitFormHandler}>

<label htmlFor="firstName">First Name
<Input placeholder="Enter First Name" value={formData.first_name} name='first_name' onChange={onInputChangeHandler}/>
</label>

<label htmlFor="lastName">Last Name
<Input placeholder="Enter Last Name" value={formData.last_name} name='last_name' onChange={onInputChangeHandler}/>
</label>

<label htmlFor="email">Email
<Input placeholder="Enter Email" value={formData.email} name='email' onChange={onInputChangeHandler}/>
</label>

<label htmlFor="dob">Date of Birth
<Input placeholder="Enter DOB" value={formData.date_of_birth} name='date_of_birth' onChange={onInputChangeHandler}/>
</label>

<label htmlFor="age">Age
<Input type='number' placeholder="Enter Age" value={formData.age} name='age' onChange={onInputChangeHandler}/>
</label>

<label htmlFor="country">Country
<Input placeholder="Enter Country" value={formData.country} name='country' onChange={onInputChangeHandler}/>
</label>

<label htmlFor="phone">Phone
<Input placeholder="Enter Phone no" value={formData.phone} name='phone' onChange={onInputChangeHandler} />
</label>
</form>
</div>
</Modal>
</>
  );
};

export default DynamicModalComponenet