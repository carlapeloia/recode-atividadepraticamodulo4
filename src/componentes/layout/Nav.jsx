import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../../paginas/Home';
import Destinos from '../../paginas/Destinos';
import Promocoes from '../../paginas/Promocoes';
import Contato from '../../paginas/Contato';
import '../layout/nav.css'

function Nav() {
  return (
    <Router>
      <header>
        <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light">
          <div className="container">
            <Link to="/" className="navbar-brand text-black-50 font-weight-bold">
              <span>CPTur</span>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
              <ul className="navbar-nav flex-grow-1">
                <li className="nav-item">
                  <Link to="/" className="nav-link text-light font-weight-bold">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/destinos" className="nav-link text-light font-weight-bold">Destinos</Link>
                </li>
                <li className="nav-item">
                  <Link to="/promocoes" className="nav-link text-light font-weight-bold">Promoções</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contato" className="nav-link text-light font-weight-bold">Contato</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <Route exact path="/"> {/* substituível por: <Route exact path="/" element={<Home/>}/> */}
        <Home />
      </Route>
      <Route exact path="/destinos">
        <Destinos />
      </Route>
      <Route exact path="/promocoes">
        <Promocoes />
      </Route>
      <Route exact path="/contato">
        <Contato />
      </Route>
    </Router>
  )
}

export default Nav