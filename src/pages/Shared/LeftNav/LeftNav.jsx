import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => setCategories(error))
    }, [])
    return (
        <div>
            <h4 style={{background: "#E7E7E7"}} className="p-3 text-center">All Category</h4>
            <div className="ps-4 py-2">
                {
                    categories.map(category => <p
                        key={category.id}
                    >
                        <Link to={`/category/${category.id}`} className="text-decoration-none text-secondary">{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;