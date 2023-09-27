import React, { useState } from 'react';

function EmailForm() {
const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    if (name && email && phone && message) {
    const emailBody = `Name: ${name}\nEmail Address: ${email}\nPhone Number: ${phone}\nMessage: ${message}`;
    const recipientEmail = 'chiburomaonwuchekwa@gmail.com';

    
    const mailtoURL = `mailto:${recipientEmail}?subject=Form Submission&body=${encodeURIComponent(emailBody)}`;

    
    window.open(mailtoURL);

    
    setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    } else {
    alert('Please fill in all fields before submitting.');
    }
};

return (
    <div className='mt-[40px]'>
    <form onSubmit={handleSubmit}>
        <label htmlFor="name" className='text-lg block font-medium pb-2'>Name</label>
        <input
        type="text"
        id="name"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className='w-full p-2 rounded-lg outline-none'
        required
        /><br /><br />

        <label htmlFor="email" className='text-lg block font-medium pb-2'>Email Address</label>
        <input
        type="email"
        id="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        className='w-full p-2 rounded-lg outline-none'
        required
        /><br /><br />

        <label htmlFor="phone" className='text-lg block font-medium pb-2'>Phone Number</label>
        <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className='w-full outline-none p-2 rounded-lg'
        required
        /><br /><br />

        <label htmlFor="message" className='text-lg block font-medium pb-2'>Message</label>
        <textarea
        id="message"
        name="message"
        cols="30"
        rows="10"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        className='w-full p-2 rounded-lg outline-none'
        required
        ></textarea><br /><br />

        <button type="submit" className='bg-[#FDC435] py-2 rounded-lg w-24 text-lg font-medium'>Send</button>
    </form>
    </div>
);
}

export default EmailForm;