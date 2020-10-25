import React from 'react';
import { Layout } from "antd";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MenuTop from './Componentes/MenuTop'
import Footer from'./Componentes/Footer'


//pages
import Home from './pages/home'
import Movie from './pages/Movie'

import PopularMovie from './pages/PopularMovie'
import Search from './pages/Search'
import Error404 from './pages/Error404'
import NewMovies from './pages/NewMovies';


function App() {

  //hacemos destructuring y sacamos del lay out el header y el counter
  const { Header, Content } = Layout




  // </Switch> se utiliza para que cuando encuentre una pagina no la repita o se detenga  <Route path="/movie/:id" exact={true} > el id es una variable que cambia el error 404 lo carga en todo moment hacemos el ruteo de nuestra aplñicación
  return (
    <Layout>
      <Router>
        <Header style={{backgroundColor:"#2E151B"}}
        style={{zIndex:1}}>
         <MenuTop/>
</Header>

        <Content>
          <Switch>
            <Route path="/" exact={true} >
              <Home/>
            </Route>
            <Route path="/new-movies" exact={true} >
              <NewMovies />
            </Route>
            <Route path="/popular-movie" exact={true} >
              <PopularMovie />
            </Route>
            <Route path="/search" exact={true} >
              <Search />
            </Route>
            <Route path="/movie/:id" exact={true} >
              <Movie />
            </Route>
            <Route path="*" exact={true} >
              <Error404 />
            </Route>
          </Switch>
        </Content>

    
      </Router>
    </Layout>
  );
}

export default App;
