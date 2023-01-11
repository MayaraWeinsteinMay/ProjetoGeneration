import { Link } from "react-router-dom";
import './navbar.css'




function Navbar (){
    return (
        <>
            <div className="container">
                <div className="btn" >
                    <a href="/"><img className="imagemlogo" src="https://i.imgur.com/oGKvCzi.png" alt="" /></a>
                </div>
                <div className="btn">
                    <Link to="/"><button className="btn btn-design">Home</button></Link>
                </div>
                <div className="btn ">
                    <Link to="/criarprojetos"><button className="btn btn-design">Criar Projetos</button></Link>
                </div>
                <div className="btn">
                    <Link to="/listaprojeto"><button className="btn btn-design">Lista Projeto</button></Link>
                </div>
                <div className="btn">
                    <Link to="/projetos"><button className=" btn btn-design">Projetos</button></Link>
                </div>
            </div>
        </>
    )
}

export default Navbar;
