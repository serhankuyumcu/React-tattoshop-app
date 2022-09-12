import React, { useState } from 'react'
import './bookingForm.css'
import emailjs from 'emailjs-com'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const BookingForm = () => {

    const [phone, setPhone] = useState('')
    const [isSuccessful, setIsSuccessful] = useState(false)

    const handlePhoneInput = (e) => {
        const formattedPhoneNumber = formatPhoneNumber(e.target.value)
        setPhone(formattedPhoneNumber)
    }

    const formatPhoneNumber = (value) => {
        if (!value) return value
      
        const phoneNumber = value.replace(/[^\d]/g, '')
      
        const phoneNumberLength = phoneNumber.length
        if (phoneNumberLength < 4) return phoneNumber
      
        if (phoneNumberLength < 7) {
          return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
        }
      
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
          3,
          6
        )}-${phoneNumber.slice(6, 10)}`
    }

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_zzn6jgm', 'template_02bz8hb', e.target,'mfe_P39oyBjA_U4gI')
          .then((result) => {
              console.log(result.text)
              window.location.reload()
          }, (error) => {
              console.log(error.text)
          })

          e.target.reset()
      }

    const schema = yup.object().shape({
        name: yup.string()
            .required('Full Name is required')
            .min(6, 'Not enough characters')
            .max(30, 'Too many characters'),

        email: yup.string()
            .email()
            .required('Email is required'),

        phone: yup.string()
            .required('Phone number is required'),

        birthdate: yup.date()
            .nullable()
            .required('Date of birth is required, must be 18+ years of age')
            .transform((curr, orig) => orig === '' ? null : curr),

        artist: yup.string()
            .ensure()
            .required('Artist is required'),

        location: yup.string()
            .required('Tattoo Location is required')
            .min(3, 'Not enough characters')
            .max(25, 'Too many characters'),
        
        description: yup.string()
            .required('Tattoo Description is required')
            .min(10, 'Not enough characters')
            .max(200, 'Too many characters'),

    })

    const { register, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    return (
        <div className="booking-form">
            <h1 className="form-title"> Tattoo Request Form </h1>
            
            <form onSubmit={sendEmail}> 
                <div className="form-items">
                    <label className="labels"> Full Name <span className="asterik"> * </span> </label>
                    <input 
                        type="text" 
                        className="inputs" 
                        placeholder="Full Name"
                        name="name"
                        { ...register('name')}
                    />

                    { errors.name && <p className="err-msg"> {errors.name.message} </p> }
                </div>

                <div className="form-items">
                    <label className="labels"> Email Address <span className="asterik"> * </span> </label>
                    <input 
                        type="email" 
                        className="inputs" 
                        placeholder="Email Address" 
                        name="email"
                        { ...register('email')}
                    />

                    { errors.email && <p className="err-msg"> {errors.email.message} </p> }
                </div>

                <div className="form-items">
                    <label className="labels"> Phone Number <span className="asterik"> * </span> </label>
                    <input 
                        required
                        type="text" 
                        className="inputs" 
                        placeholder="Phone Number" 
                        name="phone"
                        onChange={(e) => handlePhoneInput(e)}
                        value={phone} 
                    />

                </div>

                <div className="form-items">
                    <label className="labels"> Date of Birth <span className="asterik"> * </span> </label>
                    <input 
                        type="date"
                        className="date-input"
                        name="birthdate"
                        { ...register('birthdate')}
                    />

                    { errors.birthdate && <p className="err-msg"> {errors.birthdate.message} </p> }
                </div>

                <div className="form-items">
                    <label className="labels"> Artist <span className="asterik"> * </span> </label>
                    <select className="artist-select"
                        name="artist"
                        { ...register('artist')}
                    >
                        <option value=""> Choose an Artist </option>
                        <option value="Arda"> Arda Pekcan </option>
                    </select>

                    { errors.artist && <p className="err-msg"> {errors.artist.message} </p> }
                </div>

                <div className="form-items">
                    <label className="labels"> Tattoo Location <span className="asterik"> * </span> </label>
                    <input 
                        type="text" 
                        className="inputs" 
                        placeholder="Tattoo Location"
                        name="location"
                        { ...register('location')}
                    />

                    { errors.location && <p className="err-msg"> {errors.location.message} </p> }
                </div>

                <div className="form-items">
                    <label className="labels"> Tattoo Description <span className="asterik"> * </span> </label>
                    <textarea 
                        className="textarea" 
                        placeholder="Detailed Tattoo Description"
                        name="description"
                        { ...register('description')}
                    />

                    { errors.description && <p className="err-msg"> {errors.description.message} </p> }
                </div>

                <div className="form-items">
                    <input type="submit" className="submit-btn" value="Submit"/>
                </div>
            </form>
        </div>
    )
}

export default BookingForm