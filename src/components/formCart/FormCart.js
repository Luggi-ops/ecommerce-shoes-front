import React from 'react';
import { useEffect, useState } from 'react';
import './FormCart.css';

const FormCart = ({setOrder, order, handlePagar}) => {
    const [datos, setDatos] = useState({
        nombre: '',
        email: '',
        celular: '',
        envio: '',
        provincia: 'Buenos Aires',
        ciudad: '',
        barrio: '',
        calle: '',
        numero: ''
    });

    const [envio, setEnvio] = useState(false);
    const [provincias, setProvincias] = useState([]);
    const [departamentos, setDepartamentos] = useState([]);

    useEffect(() =>{
        getProvincias();
        getDepartamentos();
    }, [datos])

    const handleEnvio = (e) =>{
        setEnvio(!envio);
        setDatos({
            ...datos,
            [e.target.name] : e.target.checked
        })
    }

    const getProvincias = () =>{
       fetch('https://apis.datos.gob.ar/georef/api/provincias')
       .then(res => res.json())
       .then(data => setProvincias(data.provincias));
    }

    const getDepartamentos = () =>{
        fetch(`https://apis.datos.gob.ar/georef/api/departamentos?provincia=${datos.provincia}&max=50`)
       .then(res => res.json())
       .then(data => setDepartamentos(data.departamentos));
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setOrder({orderDate: {
            ...order.orderDate,
            datos
        }, orderConfirm: false})
        handlePagar();
    }

    const handleInputChange = (e) =>{
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    return (
        <div className="form-data-container">
            <h2>Ingrese sus datos: </h2>
            <form className="form" onSubmit={handleFormSubmit}>
                <div className="form-data">
                    <div>
                        <div className="form-data-item">
                            <label for="nombre">Nombre y apellido:</label>
                            <input 
                                type="text" 
                                name="nombre" 
                                id="nombre"
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="form-data-item">
                            <label for="email">Correo electrónico:</label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email"
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="form-data-item">
                            <label for="celular">Celular:</label>
                            <input 
                                type="tel" 
                                name="celular" 
                                id="celular"
                                onChange={handleInputChange}
                                required
                                />
                        </div>

                        <div className="form-data-item">
                            <label for="envio">Envío a domicilio:</label>
                            <input 
                                type="checkbox" 
                                name="envio" 
                                id="envio" 
                                onChange={handleEnvio}
                            />
                        </div>
                    </div>

                    {
                        envio?

                        <div className="form-envio">
                            <div className="form-data-item">
                                <label form="prov">Provincia</label>
                                <select 
                                    name="provincia" 
                                    id="prov" 
                                    onChange={handleInputChange}
                                    required
                                >
                                    {
                                        provincias.map( provincia => (
                                            <option vale={provincia.id} key={provincia.id}>{provincia.nombre}</option>
                                        ))
                                    }
                                </select>
                            </div>

                            <div className="form-data-item">
                                <label form="ciudad">Ciudad</label>
                                <select 
                                    name="ciudad" 
                                    id="ciudad"
                                    onChange={handleInputChange}
                                    required
                                >
                                    {
                                        departamentos.map( departamento => (
                                            <option vale={departamento.id} key={departamento.id}>{departamento.nombre}</option>
                                        ))
                                    }
                                </select>
                            </div>

                            <div className="form-data-item">
                                <label for="barrio">Barrio:</label>
                                <input 
                                    type="text" 
                                    name="barrio" 
                                    id="barrio"
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="form-data-item">
                                <label for="calle">Calle:</label>
                                <input 
                                    type="text" 
                                    name="calle" 
                                    id="calle"
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="form-data-item">
                                <label for="numero">Altura:</label>
                                <input 
                                    type="number" 
                                    name="numero" 
                                    id="numero"
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>
                        :
                        null
                    }
                </div>


                <input type="submit" value="Ir a pagar" className="btn"/>
            </form>
        </div>
    )
}

export default FormCart;
