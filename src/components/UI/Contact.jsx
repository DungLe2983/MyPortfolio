import React, {useState} from 'react'
import axios from 'axios';
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailData = {
      name: name,
      email: email,
      message: message
    };

    // Gửi yêu cầu POST đến máy chủ hoặc dịch vụ email
    axios.post('API_END_POINT', emailData)
      .then(response => {
        console.log(response);
        alert('Email sent successfully!');
      })
      .catch(error => {
        console.error(error);
        alert('Email sent successfully!');
      });
  };

  return (
    <section id='contact' className='pb-10 mt-10'>
      <div className="container">
        <h2 className=' text-headingColor text-[2rem] font-[700]'>Get in touch</h2>
        <div className="md:flex items-start justify-between mt-4 ">
          <div className='w-full mt-8 md:mt-0 md:w-2/3 sm:h-[450px] lg:flex items-center rounded-[10px] px-2 lg:px-8 py-8 bg-gradient-to-r from-purple-500 to-red-300'>
            <form className='w-2/3 '>
              <div className='mb-5  '>
                <input
                type="text"
                value={name}
                placeholder='Enter your name'
                className='w-full p-3 focus:outline-none rounded-[5px]'
                onChange={e => setName(e.target.value)} required
                />
              </div>
              <div className='mb-5  '>
                <input
                type="text"
                value={email}
                placeholder='Email'
                className='w-full p-3 focus:outline-none rounded-[5px]'
                onChange={e => setEmail(e.target.value)} required
                />
              </div>
              <div className='mb-5  '>
                <textarea
                rows={3}
                type="text"
                value={message}
                placeholder='Write your message'
                className='w-full p-3 focus:outline-none rounded-[5px]'
                onChange={e => setMessage(e.target.value)} required
                />
              </div>
              <button
              onClick={handleSubmit}
              className='w-2/3 mx-16 p-3 focus:outline-none rounded-[5px] bg-primaryColor text-white hover:bg-smallTextColor text-center ease-linear duration-150'>Send Message </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
