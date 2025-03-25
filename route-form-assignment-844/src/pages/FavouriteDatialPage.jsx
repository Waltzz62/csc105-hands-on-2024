import { useParams, useSearchParams } from "react-router-dom";


const FavDetailPage = () => {
    const { id } = useParams(); 
    const [searchParams] = useSearchParams();

    const q = searchParams.get("q") || "Not specified";
    const size = searchParams.get("size") || "Not specified";

    return (
        <div className="bg-[#f7cac9] min-h-screen flex flex-col items-center">
            <div className="p-6 max-w-md w-full bg-white rounded-lg shadow-lg mt-10 text-center">
                <h1 className="text-xl font-bold mb-4">Favourite Detail Page</h1>
                <p className="text-lg">
                Your favourite post is <span className="font-semibold">{q}</span>.
                </p>
                <p className="text-lg">
                Post ID is <span className="font-semibold">{id}</span>.
                </p>
                <p className="text-lg">
                Size is <span className="font-semibold">{size}</span>.
                </p>
            </div>
        </div>
  );
}
export default FavDetailPage;