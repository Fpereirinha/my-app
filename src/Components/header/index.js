import "./style.sass";
import React from "react";
import img from "./logo.svg";
export default function Header() {
	return (
		<div className="header_container">
			<img src={img} alt="" className="header_img" />
			<div className="ancors_header">
				<a href="#">Para você</a>
				<a href="#">Para empresa</a>
				<a href="#">Canais</a>
				<a href="#">Produtos</a>
				<a href="#">Ferramentas</a>
			</div>
			<a href="#" className="header_container_ancor">
				Entrar
			</a>
			<div class="container_select">
				<span class="content"></span>
				<select name="" id="" class="cabecalho_selection">
					<option class="selection_option" value="">
						Português
					</option>
				</select>
			</div>
		</div>
	);
}
