import React from "react";
import { Number } from "./Number";

const Home = (props) => {
	return (

		<div className="row">
			<div className="col bg-dark d-flex gap-4 justify-content-evenly">
				<div className="border rounded-5 d-flex justify-content-center align-items-center" style={{ width: "10rem", height: "18rem" }}>
					<i className="fa-regular fa-clock text-light" style={{ fontSize: "8rem" }}></i>
				</div>
				<Number valor={props.decenaDeMil} />
				<Number valor={props.unidadDeMil} />
				<Number valor={props.centena} />
				<Number valor={props.decena} />
				<Number valor={(`${props.unidad}` >= 0 && `${props.unidad}` < 10) ? `${props.unidad}` : 0} />
			</div>
		</div>
	);
};

export default Home;

// <i class="fa-solid fa-clock"></i>