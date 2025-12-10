import {Component} from 'react';
import styles from './Navbar.module.css';

class Navbar extends Component{
    
    render(){
        const {cartCount} = this.props;
        return(

            <>
            <div className={styles.navbar}>
                <div className={styles.title}>
                    <h1>Movie Flix</h1>
                </div>
                <div className={styles.cart}>
                <img src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png" alt="cart" />
                    <span className={styles.cartCount}><strong>{cartCount}</strong></span>
                </div>
            </div>
            
            </>
        )
    }
}

export default Navbar