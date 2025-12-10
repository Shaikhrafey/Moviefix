import React from "react";

export default class Moviecard extends React.Component {


  render() {
    const {incStars,movie, decStars, handleCart, handleFavourite} = this.props;
    const {title, plot,poster, price, rating,star,fav,isInCart} = this.props.movie;
    return (
      <>
        <div className="main">
          <div className="movie-card">
            <div className="left">
              <img
                src={poster}
                alt="poster"
              />
            </div>
            <div className="right">
              <div className="title">{title}</div>
              <div className="plot">{plot}</div>
              <div className="price">Rs. {price}</div>
              <div className="footer">
                <div className="rating">{rating}</div>
                <div className="star-dis">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/43/43625.png"
                    alt="decrease"
                    className="str-btn"
                    onClick={()=>decStars(movie)}
                  />
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                    alt="stars"
                    className="stars"
                  />
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/748/748113.png"
                    alt="increase"
                    className="str-btn"
                    onClick={()=>incStars(movie)}
                  />
                  <span className="starCount">{star}</span>
                </div>
                <button onClick={()=>handleFavourite(movie)} className={fav?"unfavourite-btn":"favourite-btn"}>{fav?"Un-favourite":"Favourite"}</button>
                <button onClick={()=>handleCart(movie)} className={isInCart?"remove-cart-btn":"cart-btn"}>
                {isInCart?"Remove from Cart":"Add to Cart"}</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
