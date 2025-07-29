import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import eyeIcon from '../../../../shared/Adorn. End Container.png'
import { useForm } from 'react-hook-form'
import { usePostLoginMutation } from '../../../../futures/services/userApi'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const togglePassword = () => setShowPassword(!showPassword)
  const [postLogin] = usePostLoginMutation()
  const navigate = useNavigate()


  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm()

  const onSubmit = async (formData) => {
    try {
      const response = await postLogin(formData).unwrap();

      localStorage.setItem('access_token', response.data);
      localStorage.setItem('wish', JSON.stringify([]))
      reset();
      navigate('/');
    } catch (err) {
      console.error('Хатои логин:', err?.data || err);
    }
  };


  return (
    <div className="w-full max-w-[500px] mx-auto px-4 py-8 mt-[100px]">
      <p className="font-bold text-3xl sm:text-4xl">Log in to Exclusive</p>
      <p className="text-gray-600 mt-1">Enter your details below</p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 flex flex-col items-center">
        <input
          {...register("userName", { required: "Name is required" })}
          className="border w-full p-3 rounded-md text-sm outline-none focus:ring-2 focus:ring-[#DB4444]"
          type="text"
          placeholder="Name"
        />
        {errors.userName && <p className="text-red-500 text-sm mt-1">{errors.userName.message}</p>}

        <div className="relative w-full mt-4">
          <input
            {...register("password", {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters'
              }
            })}
            className="border w-full p-3 rounded-md text-sm outline-none focus:ring-2 focus:ring-[#DB4444] pr-10"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          <img
            src={eyeIcon}
            alt="Toggle Password"
            onClick={togglePassword}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
          />
        </div>

        <div className="w-full text-right mt-2">
          <Link to="/sign-up">
            <p className="text-[#DB4444] text-sm hover:underline">Forgot Password?</p>
          </Link>
        </div>

        <button
          type="submit"
          className="bg-[#DB4444] w-full mt-6 text-white p-3 rounded-md hover:bg-[#c33c3c] transition cursor-pointer"
        >
          Log In
        </button>
      </form>
    </div>
  )
}

export default Login
