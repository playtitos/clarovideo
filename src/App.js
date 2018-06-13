import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Contenedor, Header, Buscador, Completo } from '../src/peliculas';
const movies = require('../src/movies.json');

class App extends Component {
  constructor() {
    super();
    const peliculas = movies.response.groups;
    this.state = {
      peliculas,
      respPeliculas: peliculas,
      seleccionado: false,
      peliculaSeleccionada: []
    }
  }

  handleFiltraPelicula(e) {
    e.preventDefault();
    let peliculas = this.state.respPeliculas;
    let valor = e.target.value;
    if (validaDato(valor) !== '') {
      var resultados = peliculas.filter(function (movie) {
        return movie.title.toLowerCase().includes(valor.toLowerCase());
      });
    } else {
      resultados = this.state.respPeliculas;
    }
    this.setState({
      peliculas: resultados,
    });
  }

  handleSeleccionaPelicula(e) {
    this.setState({
      seleccionado: true,
      peliculaSeleccionada: e.props.data
    });
  }

  handleRegresa(e) {
    e.preventDefault();
    this.setState({
      seleccionado: false,
      peliculaSeleccionada: [],
      peliculas: this.state.respPeliculas
    });
  }

  render() {
    if (this.state.seleccionado) {
      return (
        <div className='col-md-12'>
          <Header />
          <Completo pelicula={this.state.peliculaSeleccionada} onRegresaListado={this.handleRegresa.bind(this)} />
        </div>
      );
    } else {
      return (
        <div className='col-md-12'>
          <Header />
          <Buscador onFiltraPelicula={this.handleFiltraPelicula.bind(this)} />
          <Contenedor peliculas={this.state.peliculas} onSeleccionaPelicula={this.handleSeleccionaPelicula.bind(this)} />
        </div>
      );
    }
  }
}

function validaDato(dato) {
  return dato === null || dato === undefined || dato === '' ? '' : dato;
}

export default App;