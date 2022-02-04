import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppFrame from '../components/AppFrame';
import ProductsActions from '../components/ProductsActions';

/*
 * THE HOME CONNECTED COMPONENT
 */
const HomeContainer = props => {

    //Declare the useNavigate hook.
    let navigate = useNavigate();

    //Handle "See products list" button click and show it.
    function handleClick() {
        navigate("/products");
    }

    //Render APP.
    return (
        <div>
            <AppFrame
                header='SPA ReactJS'
                body={
                    <div>
                        <h2 className="text-xl font-bold text-gray-500 py-8" >Prueba SPA ReactJS</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in urna eget mauris fringilla feugiat. Praesent nec dictum dolor. Ut ultricies ex sed velit interdum, varius faucibus quam laoreet. Aenean arcu metus, dapibus sed ultricies non, iaculis a dolor. Pellentesque cursus varius nisl at auctor.</p>
                        <ProductsActions>
                            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={handleClick}>Ver listado de productos</button>
                        </ProductsActions>
                    </div>
                }
            />
        </div>
    );
};

export default HomeContainer;