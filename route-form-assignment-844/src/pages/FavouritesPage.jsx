import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const schema = z.object({
    number: z
      .number({ invalid_type_error: "Number is required" })
      .min(1, "Number must be at least 1")
      .max(100, "Number must be at most 100"),
    q: z.enum(["love", "like"], { message: "Please select a valid option" }),
    size: z.enum(["small", "medium", "large"], { message: "Please select a valid size" }),
});

const FavorPage = () => {
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    const { number, q, size } = data;
    navigate(`/fav/${number}?q=${q}&size=${size}`);
  };

  return (
    <div className="bg-[#be394f] flex items-center justify-center min-h-screen">
        <div className="p-6 max-w-md w-full bg-white rounded-lg shadow-lg">
            <h1 className="text-xl font-bold mb-4">This is the Favourites Page.</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block font-medium">Number (1-100):</label>
                    <input
                    type="number"
                    {...register("number", { valueAsNumber: true })}
                    className="border rounded-lg p-2 w-full"
                    />
                    {errors.number && <p className="text-red-500">{errors.number.message}</p>}
                </div>

                <div>
                    <label className="block font-medium">Query Parameter (q):</label>
                    <select {...register("q")} className="border rounded-lg p-2 w-full">
                    <option value="">Select an option</option>
                    <option value="love">Love</option>
                    <option value="like">Like</option>
                    </select>
                    {errors.q && <p className="text-red-500">{errors.q.message}</p>}
                </div>

                <div>
                    <label className="block font-medium">Size Parameter (size):</label>
                    <select {...register("size")} className="border rounded-lg p-2 w-full">
                    <option value="">Select a size</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    </select>
                    {errors.size && <p className="text-red-500">{errors.size.message}</p>}
                </div>

                <button
                    type="submit"
                    className="bg-[#be394f] text-white px-4 py-2 rounded-lg hover:bg-[#762331] w-full"
                >
                    Submit
                </button>
            </form>
        </div>
    </div>
  );
}
export default FavorPage;