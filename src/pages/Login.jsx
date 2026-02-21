import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { loginAdmin } from '../services/operations/authApi';
import Logo from '../assets/logo/logo.png';


export default function Login() {
    const navigate = useNavigate();

    // If already logged in, redirect to admin panel
    useEffect(() => {
        const token = localStorage.getItem("adminToken");
        if (token) navigate("/admin");
    }, [navigate]);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async (data) => {
        await loginAdmin(data, navigate);
    };

    return (
        <div className="min-h-screen bg-richblack-900 flex items-center justify-center px-4">
            {/* Background glow effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400 opacity-5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-600 opacity-5 rounded-full blur-3xl" />
            </div>

            <div className="relative w-full max-w-md">
                {/* Card */}
                <div className="bg-richblack-800 border border-richblack-700 rounded-2xl p-8 shadow-2xl">
                    {/* Logo */}
                    <div className="flex justify-center mb-6">
                        <img src={Logo} alt="CSI Logo" className="h-10 object-contain" />
                    </div>

                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-richblack-5">Admin Portal</h1>
                        <p className="text-richblack-300 text-sm mt-1">
                            Restricted access — authorised personnel only
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                        {/* Email */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="email" className="text-sm font-medium text-richblack-200">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter admin email"
                                className="bg-richblack-700 border border-richblack-600 text-richblack-5 rounded-lg px-4 py-3 text-sm
                                           outline-none focus:border-yellow-400 transition-colors duration-200
                                           placeholder:text-richblack-400"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Enter a valid email address",
                                    },
                                })}
                            />
                            {errors.email && (
                                <span className="text-yellow-100 text-xs">{errors.email.message}</span>
                            )}
                        </div>

                        {/* Password */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="password" className="text-sm font-medium text-richblack-200">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Enter admin password"
                                className="bg-richblack-700 border border-richblack-600 text-richblack-5 rounded-lg px-4 py-3 text-sm
                                           outline-none focus:border-yellow-400 transition-colors duration-200
                                           placeholder:text-richblack-400"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters",
                                    },
                                })}
                            />
                            {errors.password && (
                                <span className="text-yellow-100 text-xs">{errors.password.message}</span>
                            )}
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="mt-2 w-full bg-yellow-400 hover:bg-yellow-300 disabled:bg-richblack-500
                                       text-richblack-900 font-bold py-3 px-6 rounded-lg text-sm
                                       transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]
                                       disabled:cursor-not-allowed disabled:scale-100"
                        >
                            {isSubmitting ? "Signing In..." : "Sign In"}
                        </button>
                    </form>

                    {/* Footer note */}
                    <p className="text-center text-richblack-400 text-xs mt-6">
                        CSI AITR Admin Dashboard · Authorised users only
                    </p>
                </div>
            </div>
        </div>
    );
}
