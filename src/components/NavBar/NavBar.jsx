import './NavBar.css'
import CartWidjet from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <header className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img className='logotes' src="public/logo0112.png" alt="logo tes del sur" width="100%"></img></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <nav className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            El mundo del té
                        </li>
                        <li className="nav-item">
                            Variedades
                        </li>
                        <li className="nav-item">
                            Accesorios
                        </li>
                        <li className="nav-item">
                            Tienda
                        </li>
                        <li className="nav-item">
                            Contacto
                        </li>
                    </ul>
                </nav>

                <CartWidjet />
            </div>
        </header>

    )
}

export default NavBar
