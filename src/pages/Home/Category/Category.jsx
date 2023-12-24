import { useLoaderData, useParams } from "react-router-dom";


const Category = () => {
    const { id } = useParams();
    const categoryNews = useLoaderData();
    return (
        <div>
            <h2>This Category: {categoryNews.length}</h2>
        </div>
    );
};

export default Category;