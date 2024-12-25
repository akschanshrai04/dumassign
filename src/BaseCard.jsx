import { Rating } from "@material-tailwind/react";

function BaseCard(props) {
    let x = props.movie.rating;
    const y = (x * 10)/20;
    const z = Math.round(y);
    console.log(z);
    return (
        <div className="my-3 mx-3 w-[350px] max-h-[450px] backdrop-blur-md border border-gray-900 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transition-transform duration-300">
            <a href="#">
                <img className="text-white rounded-t-lg mx-auto my-auto w-[250px] h-[250px]" src={props.movie.image} alt={props.movie.image} />
            </a>
            <div className="p-5">
                <div className="text-white flex gap-2">
                    <Rating value={z} readonly/> <p>({props.movie.rating})</p>
                </div>
                <h5 className="my-2 mb-2 text-2xl text-white font-bold tracking-tight text-gray-900 dark:text-white">{props.movie.movie}</h5>
                <a href={props.movie.imdb_url} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-400 rounded-lg hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    IMDB site
                </a>
            </div>
        </div>
       

    );
}

export default BaseCard;



