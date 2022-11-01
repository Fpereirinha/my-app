import "./index.sass";
import React from "react";
import img from "./ferramentas_svg.svg";
import img2 from "./search.svg";
export default function Ferramentas() {
	return (
		<div className="Ferramentas">
			<h1 className="ferramentas_before">Ferramentas</h1>
			<input
				type="text"
				placeholder="Localizar uma ferramenta, produtos e etc..."
			/>
		</div>
	);
}
