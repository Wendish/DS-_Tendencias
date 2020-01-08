//var mapa = {
//	"MOM" : "Momentos",
//	"MIC" : "Mi Convención",
//	"LEC" : "Lector Digital",
//	"MII" : "Mi Información",
//	"ENC" : "Encuestas"
//};
//
//var menu = "MOM";
//var mapaSub = {
//	"MOM" : "1",
//	"MIC" : "1",
//	"LEC" : "1",
//	"MII" : "1",
//	"ENC" : "1"
//}
//
//var dia = "2.1.1";
//
///**
// * local storage
// * 
// * variables: login: true/false
// * 
// */
//const LOGIN = "login"
//
//function menuPrincipal(menuNuevo) {
//	document.getElementById('spanTitulo').innerHTML = mapa[menuNuevo];
//	var m = menuNuevo + "-" + mapaSub[menuNuevo]
//	menu = menuNuevo
//	openMenu(m)
//}
//
//function openMenu(submenu) {
//	// Declare all variables
//	var i, tabcontent, tablinks;
//
//	// limpia el contenido
//	tabcontent = document.getElementsByClassName("mdl-submenu-content");
//	for (i = 0; i < tabcontent.length; i++) {
//		tabcontent[i].style.display = "none";
//	}
//
//	// quita el activo
//	tablinks = document.getElementsByClassName("mdl-submenu");
//	for (i = 0; i < tablinks.length; i++) {
//		tablinks[i].className = tablinks[i].className.replace(" active", "");
//	}
//
//	var numSubmenu = submenu.substr(4, 1);
//
//	mapaSub[menu] = numSubmenu;
//
//	// si es MII, verifica si está logueado
//	if (menu == "MII") {
//		if (localStorage.getItem(LOGIN) == "false"
//				|| localStorage.getItem(LOGIN) == false) {
//			document.getElementById("panel-login").style.display = "block";
//			return;
//		} else {
//			// si esta logueado no hace return
//		}
//	}
//
//	// Show the current tab, and add an "active" class to the button that opened
//	// the tab
//	document.getElementById(submenu + "-content").style.display = "block";
//	document.getElementById(submenu).className += " active";
//
//};
//
///* funcion para el submenu horarios */
//function subMenuHrios(subMenuH, objH) {
//	var i;
//	var contenidos = document.getElementsByClassName("sub-sec-hrios");
//	var tabs = document.getElementsByClassName("tit-sub-hr");
//
//	for (i = 0; i < contenidos.length; i++) {
//		contenidos[i].style.display = "none";
//	}
//
//	for (i = 0; i < tabs.length; i++) {
//		// y[i].style.display="none";
//		tabs[i].classList.remove("tit-sub-hr-active");
//
//	}
//	if (objH == null) {
//		objH = document.getElementById("dia-" + dia)
//	} else {
//		dia = subMenuH;
//	}
//	objH.classList.add("tit-sub-hr-active");
//	document.getElementById("sub-mn-hrios-" + subMenuH).style.display = "block";
//
//}
//
//function abrirRecomendacion(idR) {
//
//	document.getElementById("reco_" + idR).style.display = "block";
//	document.getElementById("contenerdorPrincipalApp").style.display = "none";
//
//	document.querySelector("#reco_" + idR + ">div>div").onscroll = function(e) {
//		if (document.querySelector("#reco_" + idR + ">div>div").scrollTop > 140) {
//			document.querySelector("#reco_" + idR + ">div>div>header").style.backgroundColor = "#ec6b00";
//			document.querySelector("#reco_" + idR + ">div>div>header").style.color = "#fff";
//		} else {
//			document.querySelector("#reco_" + idR + ">div>div>header").style.backgroundColor = "transparent";
//		}
//
//	}
//}
//function abrirHotel(idR) {
//	document.getElementById("hotel_" + idR).style.display = "block";
//	document.getElementById("contenerdorPrincipalApp").style.display = "none";
//	document.querySelector("#hotel_" + idR + ">div>div").onscroll = function(e) {
//		if (document.querySelector("#hotel_" + idR + ">div>div").scrollTop > 140) {
//			document.querySelector("#hotel_" + idR + ">div>div>header").style.backgroundColor = "#ec6b00";
//			document.querySelector("#hotel_" + idR + ">div>div>header").style.color = "#fff";
//		} else {
//			document.querySelector("#hotel_" + idR + ">div>div>header").style.backgroundColor = "transparent";
//		}
//	}
//}
//
//function regresarHome(idR, tipo) {
//	if (tipo == "rec") {
//		document.getElementById("reco_" + idR).style.display = "none";
//		document.getElementById("contenerdorPrincipalApp").style.display = "block";
//	}
//	if (tipo == "hot") {
//		document.getElementById("hotel_" + idR).style.display = "none";
//		document.getElementById("contenerdorPrincipalApp").style.display = "block";
//	}
//	if (tipo == "log") {
//		document.getElementById("panel-usu-clave").style.display = "none";
//		document.getElementById("contenerdorPrincipalApp").style.display = "block";
//	}
//}
//
//function log(msj) {
//	console.log(msj)
//}
//
//function abrirLogin() {
//	/* document.getElementById("reco_" + idR).style.display = "block"; */
//	document.getElementById("contenerdorPrincipalApp").style.display = "none";
//	// document.getElementById("panel-login").style.display="none";
//	document.getElementById("panel-usu-clave").style.display = "block";
//
//}
//
//function cargarApp() {
//
//	if (localStorage.getItem(LOGIN) == null) {
//		localStorage.setItem(LOGIN, false)
//	}
//
//}
//
//function login() {
//	var codigo = document.getElementById("codigo-usuario").value;
//	var contrasenia = document.getElementById("contrasenia-usuario").value;
//
//	var obj = new Object();
//	obj.codigo = codigo;
//	obj.contrasenia = contrasenia;
//	ajaxFN(
//			"/home/daniel/git/yanbal-convenciones/convencion/www/json/login.json",
//			respuestaLogin, "POST", JSON.stringify(obj));
//
//}
//
//function respuestaLogin(objetoRespuesta) {
//
//	alert("hola")
//	alert(objetoRespuesta.usuario.nombre)
//}
//

var arrImagenesPost = new Array();
var contadorPs = 1;

function loading(variable) {
	// TODO
}

function mostrarMensaje(mensaje, tipo) {
	// TODO
}

function llenarCampos() {
	ajaxFN("http://www.scotyanbal.com/eventoUio2017/dao/listaPosts.php",
			respuestaCobertura, "GET", null);
}

/** PETICIONES AJAX */

function ajaxFN(url, funcion, tipo, data, contentType) {

	loading(true);
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		loading(false);
		if (this.readyState == 4 && this.status == 200) {
			try {
				// log("RESPONSE:: "+this.responseText)
				var objJson = JSON.parse(this.responseText)
				if (objJson.codigo == 1) {
					mostrarMensaje(objJson.system.mensaje, "ERROR");
				} else {
					funcion(objJson.system.contenido);
				}
			} catch (e) {
				mostrarMensaje(e, "ERROR");
			}
		} else if (this.status == 400 || this.status == 401
				|| this.status == 404 || this.status == 500) {
			mostrarMensaje("Ha ocurrido un error AJAX: code-" + this.status,
					"ERROR");
		}
	};
	xhttp.open(tipo, url, true);
	xhttp.send(data);
}

function respuestaCobertura(objetoRespuesta) {
	var txt = "";
	for (var i = 0; i < objetoRespuesta.dataSet.length; i++) {
		txt += "<div "
				+ "class='demo-card-wide mdl-card mdl-shadow--2dp mdl-cell mdl-cell--8-col mdl-cell--6-col-desktop cuadro-momentos'>"
				+ "<div class='mdl-card__title' style='background-image:url(http://www.scotyanbal.com/eventoUio2017/archivos/"
				+ obtenerPrimeraImagen(objetoRespuesta.dataSet[i].id,
						objetoRespuesta.listaMedia, objetoRespuesta.dataSet[i])
				+ ");'><!-- titulo sobre imagen--></div>"
				+ "<div class='mdl-card__supporting-text'>"
				+ "<h2 class='mdl-card__title-text'>"
				+ objetoRespuesta.dataSet[i].titulo
				+ "</h2>"
				+ objetoRespuesta.dataSet[i].texto
				+ "</div>"
				+ "<div class='mdl-card__actions'>"
				+ "<span class='mdl-card__supporting-text texto-fecha'>"
				+ objetoRespuesta.dataSet[i].fecha
				+ "</span> "
				+ "<a onclick='verCobertura("
				+ objetoRespuesta.dataSet[i].id
				+ ")' class='mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect'> VER </a>"
				+ "</div>" + "</div>";
	}
	document.getElementById("contenedorPostCobertura").innerHTML += txt;
}

function obtenerPrimeraImagen(idPost, listaMedia, objAjx) {
	var arrImg = new Array();
	var objPost = new Object;

	for (var i = 0; i < listaMedia.length; i++) {
		if (idPost == listaMedia[i].id_post) {
			arrImg.push(listaMedia[i].alias);
		}
	}

	objPost.idP = idPost;
	objPost.txtPost = objAjx.texto;
	objPost.titPost = objAjx.titulo;
	objPost.fecha = objAjx.fecha;
	objPost.arrImg = arrImg;
	objPost.url = objAjx.url_video;
	objPost.indice = contadorPs;
	arrImagenesPost.push(objPost);
	contadorPs++;

	for (i = 0; i < listaMedia.length; i++) {
		if (idPost == listaMedia[i].id_post) {
			return listaMedia[i].alias;
		}
	}
}

function verCobertura(id) {
	var obj = new Object;
	for (var i = 0; i < arrImagenesPost.length; i++) {
		if (arrImagenesPost[i].idP == id) {
			obj = arrImagenesPost[i];
		}
	}
	document.getElementById("contenedorCobertura").style.display = "block";
	document.getElementById("contenerdorPrincipalApp").style.display = "none";

	// cargar datos
	document.getElementById("fechaCobertura").innerHTML = obj.fecha;
	document.getElementById("textoCobertura").innerHTML = obj.txtPost;
	document.getElementById("tituloCobertura").innerHTML = obj.titPost;
	document.getElementById("imagenPrincipalCobertura").style.backgroundImage = "url(http://www.scotyanbal.com/eventoUio2017/archivos/"
			+ obj.arrImg[0];
	for (var i = 0; i < obj.arrImg.length; i++) {
		document.getElementById("imagenesCobertura").innerHTML += "<div class='mdl-grid'>"+"<div"
				+ " style='background-image:url(http://www.scotyanbal.com/eventoUio2017/archivos/"+ obj.arrImg[i]+");width: 160px;height: 160px;"
				+ "class='demo-card-image mdl-card mdl-shadow--2dp mdl-cell mdl-cell--8-col mdl-cell--6-col-desktop'"
				+ "style='margin: 10px auto'>"
				+ "<div class='mdl-card__title mdl-card--expand'></div>"
				+ "</div></div>";
	}

}
