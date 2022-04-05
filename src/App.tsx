import React, { useState, useEffect } from 'react';
import './App.css';
import Repository from './modyo/repositories/RepositoryFactory';
import CardComentarioAfiliado from './components/card-comentario-afiliado/CardComentarioAfiliado';
import RespuestaModyo from './interfaces/RespuestaModyo';
import {listarRegiones} from './services/Geo';
import liquidParser from "./modyo/liquid/liquidParser";

const ApiRepository = Repository.get('api');

const App = () => {
  const [modyoData, setModyoData] = useState<RespuestaModyo | undefined>(undefined);
  /* const getRegiones = async () => {
    listarRegiones()
    .then(data => console.log(data))
    .catch(error => console.log(error));
  };*/
  const getModyoData = async () => {
    try {
      const espacioModyo: string = liquidParser.parse('{{vars.space}}');
      const categoriaModyo: string = liquidParser.parse('{{vars.category}}');
      const tipoBannerModyo: string = liquidParser.parse('{{vars.type}}');
      const data: RespuestaModyo = await ApiRepository.getEntriesByTypeCategory(espacioModyo, tipoBannerModyo, categoriaModyo);
      setModyoData(data);
    } catch (error) {
      console.log(error);
    } finally { }
  };
  useEffect(() => {
    // getRegiones();
    getModyoData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {modyoData?.data?.entries?.map((data, index) => {
          return (<div key={index} className="col-12 col-md-6 d-flex justify-content-center">
            <CardComentarioAfiliado comentario={data.fields}></CardComentarioAfiliado>
          </div>);
        })}
      </div>
    </div>
  );
}

export default App;
