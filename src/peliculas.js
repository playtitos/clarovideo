import React, { Component } from 'react';
import { Button } from 'reactstrap';
import logo from './claro_video.png';


export class Cuadro extends Component {
    constructor(props) {
        super(props);
        this._clickPelicula = this._clickPelicula.bind(this);
    }
    _clickPelicula() {
        this.props.click(this);
    }
    render() {
        return (
            <img src={this.props.img} alt="logo" className='imagen-pelicula col-md-4 cursor' onClick={this._clickPelicula} />
        );
    }
}


export class Contenedor extends Component {
    render() {
        return (
            <div className='contenedor-peliculas izq'>
                <div className='col-md-12'>
                    {this.props.peliculas.map(movie => {
                        return (
                            <Cuadro
                                click={this.props.onSeleccionaPelicula}
                                key={movie.id}
                                img={movie.image_large}
                                movie={movie.title_original}
                                title={movie.title}
                                data={movie}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export class Header extends Component {
    render() {
        return (
            <div className='col-md-12'>
                <div className='col-md-3 izq'>
                    <img src={logo} alt="logo" className='imagen-pelicula' />
                </div>
            </div>
        );
    }
}


export class Buscador extends Component {
    render() {
        return (
            <div className='buscador-input'>
                <span className='izq blanco'>Buscar: </span>
                <input className='form-control der blanco' type="text" onChange={this.props.onFiltraPelicula} />
            </div>
        );
    }
}


export class Completo extends Component {
    render() {
        const pelicula = this.props.pelicula;
        const estiloBack = {
            background: "url(" + pelicula.image_background + ") center center no-repeat",
        };
        const fecha = pelicula.duration.split(':');
        const duracion = pelicula.year + ' ' + fecha[0] + 'h ' + fecha[1] + 'min ' + fecha[2] + 's';
        return (
            <div className='completo tam-com-pelicula' style={estiloBack}>

                <div className='cont-desc-pelicula'>

                    <p className='completo izq blanco titulo-pelicula'>{pelicula.title}</p>

                    <div className='completo izq'>

                        <div className='col-md-4 pel-desc'>
                            <img src={pelicula.image_large} alt="peliculaSeleccionada" className='izq imagen-pelicula' />
                        </div>
                        <div className='col-md-8 pel-desc'>
                            <p className='izq blanco'>{pelicula.description_large}</p>
                            <p className='izq blanco'>{duracion}</p>
                            <Button className='der' outline color="white">{pelicula.rating_code}</Button>
                        </div>
                    </div>


                </div>

                <Button className='izq' outline color="white" onClick={this.props.onRegresaListado}>Regresar</Button>
            </div>
        );
    }
}