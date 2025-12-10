import {Component} from 'react';
import Moviecard from './Moviecard';

class Movielist extends Component{

  

    render()
    {
        const {movies,incStars,decStars,handleCart,handleFavourite} = this.props;
        return(
            <>
            {movies.map((movie,index)=>
                <Moviecard 
                key={index} 
                movie={movie} 
                incStars = {incStars}
                decStars = {decStars} 
                handleCart = {handleCart}
                handleFavourite = {handleFavourite}
                />
            )}
            
            </>
        )
    }
}


export default Movielist