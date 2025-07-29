import React from 'react'
import iconGoogle from '../../../../shared/Icon-Google.png'
import { Link, useNavigate } from 'react-router'
import { useGetRegisterMutation } from '../../../../futures/services/userApi'
import { useForm } from 'react-hook-form'

const SignUp = () => {
  const navigate = useNavigate()
  const [getRegister] = useGetRegisterMutation()

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm()

  const onSubmit = async (data) => {
    await getRegister(data)
    reset()
    navigate('/login')
  }

  const password = watch("password")

  return (
    <div className="w-full max-w-[500px] mx-auto px-4 py-8 mt-[100px]">
      <p className="font-bold text-3xl sm:text-4xl">Create an account</p>
      <p className=" text-gray-600 mt-1">Enter your details below</p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 flex flex-col items-center">
        <input
          {...register("userName", { required: "Name is required" })}
          className="border w-full p-3 rounded-md text-sm outline-none focus:ring-2 focus:ring-[#DB4444]"
          type="text"
          placeholder="Name"
        />
        {errors.userName && <p className="text-red-500 text-sm mt-1">{errors.userName.message}</p>}

        <input
          {...register("phoneNumber", {
            required: "Phone number is required",
            pattern: {
              value: /^[0-9]{9,15}$/,
              message: "Invalid phone number"
            }
          })}
          className="border w-full p-3 rounded-md text-sm outline-none focus:ring-2 focus:ring-[#DB4444] mt-4"
          type="text"
          placeholder="Phone Number"
        />
        {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>}

        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email format"
            }
          })}
          className="border mt-4 w-full p-3 rounded-md text-sm outline-none focus:ring-2 focus:ring-[#DB4444]"
          type="email"
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}

        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters"
            }
          })}
          className="border mt-4 w-full p-3 rounded-md text-sm outline-none focus:ring-2 focus:ring-[#DB4444]"
          type="password"
          placeholder="Password"
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}

        <input
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: value => value === password || "Passwords do not match"
          })}
          className="border mt-4 w-full p-3 rounded-md text-sm outline-none focus:ring-2 focus:ring-[#DB4444]"
          type="password"
          placeholder="Confirm Password"
        />
        {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}

        <button
          type="submit"
          className="bg-[#DB4444] w-full mt-4 text-white p-3 rounded-md hover:bg-[#c33c3c] transition cursor-pointer"
        >
          Create Account
        </button>

        <div className="flex items-center justify-center gap-3 border w-full rounded-md p-3 mt-4 cursor-pointer hover:bg-gray-100 transition">
          <img src={iconGoogle} alt="Google Icon" className="w-5 h-5" />
          <p className="text-sm">Sign up with Google</p>
        </div>

        <div className="flex justify-center w-full mt-6 gap-2 items-center text-sm">
          <p className="text-gray-600">Already have an account?</p>
          <Link to="/login">
            <p className="text-[#DB4444] hover:underline">Log in</p>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default SignUp
