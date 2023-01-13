import axios from "axios";
import { useState,useEffect } from "react";
import {carnes} from "/db.json"
import { Link } from "react-router-dom";

/*import ".Home.css";*/

const Início = () => {

  const[posts, setPost] = useState([]);

  const getPost = async() =>{
    
    try {
      const response = await axios.get("./db.json");
      const data = response.data;

      setPost(data);
  
    } catch (error) {
      console.log(error);
    }

  };

  useEffect(() =>{

    getPost()

  }, [])

  return <div>
    <h1> Últimos posts</h1>
    {carnes.length === 0? <p>Carregando...</p> : (
      carnes.map((peça) => (
        <div className="peça" key={peça.id}>
          <h2>{peça.title}</h2>
        </div>
      ))
    )}
  </div>
  
};

export default Início