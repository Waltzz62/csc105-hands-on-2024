import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
});

const LoginPage = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = (data) => {
        console.log("Login successful", data);
        navigate("/"); // Redirect to Home Page
    };

    return (
        <div className="bg-[#0f4c81] flex items-center justify-center h-screen">
            <div className="bg-[#edf1ff] w-[400px] h-auto rounded-lg p-6 flex flex-col items-center">
                <h1 className="font-bold text-[40px] text-black mb-4">Login</h1>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
                    {/* Email Input */}
                    <div className="w-full">
                        <input
                            type="email"
                            placeholder="Email"
                            {...register("email")}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Password Input */}
                    <div className="w-full">
                        <input
                            type="password"
                            placeholder="Password"
                            {...register("password")}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm">{errors.password.message}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        Login
                    </button>
                </form>

                {/* Sign Up Link */}
                <p className="mt-4 text-sm">
                    Don't have an account?{" "}
                    <button
                        onClick={() => navigate("/signup")}
                        className="text-blue-600 font-bold hover:underline"
                    >
                        Sign Up
                    </button>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
