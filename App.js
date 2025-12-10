import { Component } from "react";
import Movielist from "./Movielist";
import Navbar from "./NavbarModule";
import { movies } from "./movieData";

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: movies,
      cartCount: 0,
    };
  }

  incStars = (movie) => {
    const { movies } = this.state;
    let index = movies.indexOf(movie);
    if (movies[index].star >= 5) {
      return;
    }
    this.setState({
      star: (movies[index].star += 0.5),
    });
  };

  decStars = (movie) => {
    const { movies } = this.state;
    let index = movies.indexOf(movie);
    if (movies[index].star <= 0) {
      return;
    }
    this.setState({
      star: (movies[index].star -= 0.5),
    });
  };

  handleFavourite = (movie) => {
    const { movies } = this.state;
    let index = movies.indexOf(movie);
    movies[index].fav = !movies[index].fav;
    this.setState({
      movies,
    });
  };
  handleCart = (movie) => {
    let { movies,cartCount } = this.state;
    let index = movies.indexOf(movie);
    if(movies[index].isInCart){
      cartCount -= 1;
    }else{
      cartCount +=1;
    } 
    movies[index].isInCart = !movies[index].isInCart;
    this.setState({
        movies,
        cartCount,
    });
  };

  render() {

    const {movies,cartCount} = this.state;
    return (
      <>
        <Navbar cartCount = {cartCount}/>
        <Movielist movies={movies}
                   incStars={this.incStars}
                   decStars={this.decStars}
                   handleCart={this.handleCart}
                   handleFavourite={this.handleFavourite}
        />
      </>
    );
  }
}

export default App;
