var mapa = {
	"MOM": "Momentos",
	"MIC": "Mi Convención",
	"LEC": "Lector Digital",
	"MII": "Mi Información",
	"ENC": "Encuestas"
};

var menu = "MOM";
var mc;
var mapaSub = {
	"MOM": "1",
	"MIC": "1",
	"LEC": "1",
	"MII": "1",
	"ENC": "1"
}

var dia = "2.1.1";
var galActiva = 0;
var coberturaActiva = 0;
var lookActivo = 0;
/**
 * local storage
 * 
 * variables: login: true/false
 * 
 */
const TOKEN = "01804UIO-cnvnacynb.ADCCAI-000016-$4v14"
const LOGIN = "login"
const PREREGISTRO = "preregistro"
const USUARIO = "usuario"
const URL_IMG = "http://www.scotyanbal.com/eventoUio2017/archivos/";

function menuPrincipal(menuNuevo) {
	document.getElementById('spanTitulo').innerHTML = mapa[menuNuevo];
	document.querySelector("#mainCont").scrollTop = 0;
	var m = menuNuevo + "-" + mapaSub[menuNuevo]
	menu = menuNuevo
	openMenu(m)
}

function openMenu(submenu) {
	log(submenu)
	if (localStorage.getItem(PREREGISTRO) == "true"
		|| localStorage.getItem(PREREGISTRO) == true) {
		ponerPreRegistrado()
		if (submenu == "MII-1") {
			// si esta preregistrado no ingresa a esa pestana
			return;
		}

	}

	if (submenu == "ENC-1") {
		//if (localStorage.getItem(LOGIN) == "false"
		//|| localStorage.getItem(LOGIN) == false) {
		if (false) {
			document.getElementById("panel-login-1").style.display = "block";
			return;
		} else {
			// si esta logueado no hace return
			cargarDatosJson();
			document.getElementById("panel-login-1").style.display = "none";
			document.getElementById("cnt-enc-usr").style.display = "block";

		}

	}

	// Declare all variables
	var i, tabcontent, tablinks;

	// limpia el contenido
	tabcontent = document.getElementsByClassName("mdl-submenu-content");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// quita el activo
	tablinks = document.getElementsByClassName("mdl-submenu");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	var numSubmenu = submenu.substr(4, 1);

	mapaSub[menu] = numSubmenu;

	// si es MII, verifica si está logueado
	if (menu == "MII") {
		if (localStorage.getItem(LOGIN) == "false"
			|| localStorage.getItem(LOGIN) == false) {
			document.getElementById("panel-login").style.display = "block";
			return;
		} else {
			// si esta logueado no hace return
		}
	}

	// Show the current tab, and add an "active" class to the button that opened
	// the tab
	if (document.getElementById(submenu + "-content") != null) {
		document.getElementById(submenu + "-content").style.display = "block";
		document.getElementById(submenu).className += " active";
	}
};

function opcMenuSup(menu) {
	var myTabs = document.getElementById('cnt-tabs-app');
	var mdlTabs = myTabs.MaterialTabs;

	// Change focus to the second tab, using index.
	mdlTabs.setTab(menu);

	// Change focus back to the first tab, using the tab element.
	mdlTabs.setTab(document.getElementById('link_mnu_prc_mic'));
}

/* funcion para el submenu horarios */
function subMenuHrios(subMenuH, objH) {
	var i;
	var contenidos = document.getElementsByClassName("sub-sec-hrios");
	var tabs = document.getElementsByClassName("tit-sub-hr");

	for (i = 0; i < contenidos.length; i++) {
		contenidos[i].style.display = "none";
	}

	for (i = 0; i < tabs.length; i++) {
		// y[i].style.display="none";
		tabs[i].classList.remove("tit-sub-hr-active");

	}
	if (objH == null) {
		objH = document.getElementById("dia-" + dia)
	} else {
		dia = subMenuH;
	}
	objH.classList.add("tit-sub-hr-active");
	document.getElementById("sub-mn-hrios-" + subMenuH).style.display = "block";

}

MaterialTabs.prototype.setTab = function (index) {
	this.resetTabState_();
	this.resetPanelState_();
	if (index > 0) {
		if (index < this.tabs_.length) {
			this.tabs_[index].classList.add(this.CssClasses_.ACTIVE_CLASS);
		}
		if (index < this.panels_.length) {
			this.panels_[index].classList.add(this.CssClasses_.ACTIVE_CLASS);
		}
	}
};

function abrirRecomendacion(idR) {

	document.getElementById("reco_" + idR).style.display = "block";
	document.getElementById("contenerdorPrincipalApp").style.display = "none";
	headerScroll("#reco_", idR);
}
function abrirLook(idR) {
	//cargar datos look
	lookActivo = idR
	mostrarLook(0);

	document.getElementById("look_" + idR).style.display = "block";
	document.getElementById("contenerdorPrincipalApp").style.display = "none";
	headerScroll("#look_", idR);
}


function mostrarLook(tipo) {
	if (tipo == 0) {
		document.getElementById("btn-look-hom").style.backgroundColor = "#ccc";
		document.getElementById("btn-look-muj").style.backgroundColor = "#ec6b00";
	} else {
		document.getElementById("btn-look-hom").style.backgroundColor = "#ec6b00";
		document.getElementById("btn-look-muj").style.backgroundColor = "#ccc";
	}

	document.getElementById("txt-look-p-0").innerHTML = datosLook_0(lookActivo, tipo);
	document.getElementById("txt-look-p-1").innerHTML = datosLook_1(lookActivo, tipo);
	document.getElementById("txt-look-p-2").innerHTML = datosLook_2(lookActivo, tipo);
	document.getElementById("txt-look-p-3").innerHTML = datosLook_3(lookActivo, tipo);
	document.getElementById("img-look-p-1").src = "img/test1.jpg";

}

function abrirHotel(idR) {
	document.getElementById("hotel_" + idR).style.display = "block";
	document.getElementById("contenerdorPrincipalApp").style.display = "none";
	headerScroll("#hotel_", idR);
}

function regresarHome(idR, tipo) {
	if (tipo == "rec") {
		document.getElementById("reco_" + idR).style.display = "none";
	}
	if (tipo == "hot") {
		document.getElementById("hotel_" + idR).style.display = "none";
	}
	if (tipo == "vivo") {
		document.getElementById("en_vivo_" + idR).style.display = "none";
	}
	if (tipo == "look") {
		document.getElementById("look_" + idR).style.display = "none";
	}
	if (tipo == "encuesta") {
		document.getElementById("contenedorEncuesta").style.display = "none";
	}
	if (tipo == "cobert") {
		document.getElementById("contenedorCobertura").style.display = "none";
	}
	if (tipo == "log") {
		document.getElementById("panel-usu-clave").style.display = "none";
	}

	document.getElementById("contenerdorPrincipalApp").style.display = "flex";
}

function log(msj) {
	console.log(msj)
}

function abrirLogin() {
	document.getElementById("contenerdorPrincipalApp").style.display = "none";
	document.getElementById("panel-usu-clave").style.display = "block";

}

function cargarApp() {

	if (localStorage.getItem(LOGIN) == null
		|| localStorage.getItem(USUARIO) == undefined
		|| localStorage.getItem(USUARIO) == "undefined") {
		localStorage.setItem(LOGIN, false)
	}
	if (localStorage.getItem(PREREGISTRO) == null) {
		localStorage.setItem(PREREGISTRO, false)
	}

	if (localStorage.getItem(PREREGISTRO) == "true"
		|| localStorage.getItem(PREREGISTRO) == true) {
		ponerPreRegistrado()
	}

}

function ponerPreRegistrado() {
	mapaSub["MII"] = "2"
	document.getElementById("MII-1").style.cursor = "not-allowed";
	document.getElementById("MII-1-titulo").innerHTML = "Registrado";
	document.getElementById("MII-1-titulo").style.fontWeight = "normal";
	document.getElementById("MII-1-titulo").style.fontStyle = "italic";
}

function login() {

	document.getElementById("loading-login").style.display = "block";
	document.getElementById("btn-login-reg").style.display = "none";

	var reqSoapLogin = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">'
		+ '  <soapenv:Header/>'
		+ '<soapenv:Body>'
		+ '  <tem:AutenticarObtenerInformation>'
		+ '    <tem:usuario>c1</tem:usuario>'
		+ '  <tem:clave>p1</tem:clave>'
		+ ' </tem:AutenticarObtenerInformation>'
		+ '</soapenv:Body>'
		+ '</soapenv:Envelope>';

	var codigo = document.getElementById("codigo-usuario").value;
	var contrasenia = document.getElementById("contrasenia-usuario").value;

	reqSoapLogin = reqSoapLogin.replace("c1", codigo);
	reqSoapLogin = reqSoapLogin.replace("p1", encriptarPass(contrasenia));

	soap(reqSoapLogin);
}

function preRegistro() {
	var email = document.getElementById("usuario-txt-email").value;
	var celular = document.getElementById("usuario-txt-celular").value;

	var obj = new Object();
	obj.codigo = JSON.parse(localStorage.getItem(USUARIO)).codigo;
	obj.email = email;
	obj.celular = celular;
	obj.token = TOKEN;
	ajaxFN("json/preregistro.json", respuestaPreRegistro, "POST", JSON
		.stringify(obj));

}

function respuestaLogin(objetoRespuesta) {

	// BIEN
	document.getElementById("cnt-mnu-inf-log").style.display = "flex";
	localStorage.setItem(LOGIN, true)
	//localStorage.setItem(USUARIO, JSON.stringify(objetoRespuesta.usuario))

	document.getElementById("contenerdorPrincipalApp").style.display = "flex";
	document.getElementById("panel-usu-clave").style.display = "none";
	document.getElementById("panel-login").style.display = "none";

	document.getElementById("usuario-nombre").innerHTML = objetoRespuesta.nombre
	document.getElementById("usuario-status").innerHTML = objetoRespuesta.status
	document.getElementById("usuario-codigo").innerHTML = objetoRespuesta.codigo
	document.getElementById("usuario-region").innerHTML = objetoRespuesta.region
	document.getElementById("usuario-hotel").innerHTML = objetoRespuesta.hotel
	// document.write(JSON.parse(localStorage.getItem(USUARIO)).nombre)

	openMenu("MII-1")
}

function respuestaPreRegistro(objetoRespuesta) {

	// BIEN
	localStorage.setItem(PREREGISTRO, true)

	ponerPreRegistrado()

	openMenu("MII-2")

}

function loading(variable) {
	// TODO
}

function mostrarMensaje(mensaje, tipo) {
	// TODO alert(mensaje)
	alert(mensaje)

}

/** PETICIONES AJAX */

function ajaxFN(url, funcion, tipo, data) {

	loading(true);
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		loading(false);
		if (this.readyState == 4 && this.status == 200) {
			try {
				// log("RESPONSE:: "+this.responseText)
				var objJson = JSON.parse(this.responseText)
				if (objJson.codigo == 1) {
					mostrarMensaje(objJson.mensaje, "ERROR");
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
// **************************** LOGIN

var reqSoapPreReg = '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:tem="http://tempuri.org/">'
	+ '<soap:Header/>'
	+ '<soap:Body>'
	+ ' <tem:PreRegistro>'
	+ '  <tem:codigodir>1450</tem:codigodir>'
	+ ' <tem:token>01804UIO-cnvnacynb.ADCCAI-000016-$4v14</tem:token>'
	+ '<tem:telefono>34545434345</tem:telefono>'
	+ ' <tem:email>correo@mail.com</tem:email>'
	+ '</tem:PreRegistro>'
	+ '</soap:Body>' + '</soap:Envelope>';

function soap(txtEnvl) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open('POST', 'http://201.234.83.51/WSConvencion/WSConvencion.asmx',
		true);

	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState == 4) {
			if (xmlhttp.status == 200) {
				parser = new DOMParser();
				xmlDoc = parser.parseFromString(this.responseText, "text/xml");

				var objX = xmlDoc.getElementsByTagName("AutenticarObtenerInformationResult")[0].childNodes[0].nodeValue;
				var objJ;
				try {
					objJ = JSON.parse(objX);
				} catch (e) {
					alert("Ha ocurrido un error. Por favor intenta más tarde.")
					return false;
				}
				if (objJ.codigo == "0") {
					respuestaLogin(objJ)
				} else {
					alert(objJ.mensaje)
					document.getElementById("loading-login").style.display = "none";
					document.getElementById("btn-login-reg").style.display = "block";
				}
			}
		}
	}
	// Send the POST request
	xmlhttp.setRequestHeader('Content-Type', 'text/xml');
	xmlhttp.send(txtEnvl);
}

// ***************************** coberturas

var arrImagenesPost = new Array();
var contadorPs = 1;
var imagenGalActiva = 0;

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

function obtenerArticuloId(id) {
	for (var i = 0; i < arrImagenesPost.length; i++) {
		if (arrImagenesPost[i].idP == id) {
			return arrImagenesPost[i];
		}
	}
}
function obtenerSiguienteArticuloId(id) {
	for (var i = 0; i < arrImagenesPost.length; i++) {
		if (arrImagenesPost[i].idP == id) {
			if (i == (arrImagenesPost.length - 1)) {
				return arrImagenesPost[0];
			} else {
				return arrImagenesPost[i + 1];
			}
		}
	}
}
function obtenerAnteriorArticuloId(id) {
	for (var i = 0; i < arrImagenesPost.length; i++) {
		if (arrImagenesPost[i].idP == id) {
			if (i == 0) {
				return arrImagenesPost[(arrImagenesPost.length - 1)];
			} else {
				return arrImagenesPost[i - 1];
			}
		}
	}
}
function obtenerImagenArticuloId() {
	var art = obtenerArticuloId(coberturaActiva);

	var imgG = art.arrImg[imagenGalActiva]
	if (imgG == undefined) {
		imagenGalActiva = 0;
		imgG = art.arrImg[imagenGalActiva]
	}
	document.querySelector("#cnt-img-full>div>img").src = URL_IMG + imgG;
}

function verCobertura(id) {
	var obj = obtenerArticuloId(id)
	var artSig = obtenerAnteriorArticuloId(id);
	var artAnt = obtenerSiguienteArticuloId(id);

	document.getElementById("contenedorCobertura").style.display = "block";
	document.getElementById("contenerdorPrincipalApp").style.display = "none";
	document.getElementById("cnt-img-full").style.display = "none";

	// efecto scroll
	document.querySelector("#contenedorCobertura>div>div").scrollTop = 0;
	headerScroll("#contenedorCobertura", "");

	// cargar datos
	document.getElementById("fechaCobertura").innerHTML = obj.fecha;
	document.getElementById("textoCobertura").innerHTML = obj.txtPost;
	document.getElementById("tituloCobertura").innerHTML = obj.titPost;

	document.getElementById("imagenPrincipalCobertura").style.backgroundImage = "url("
		+ URL_IMG + obj.arrImg[0] + ")";
	var txtC = "<div class='cnt-img-cob'>";
	galActiva = 1;
	for (var i = 0; i < obj.arrImg.length; i++) {
		txtC += "<div onclick='verImgFull(1,"
			+ id
			+ ",&quot;"
			+ obj.arrImg[i]
			+ "&quot;," + i + ")'>"
			+ "<img src='"
			+ URL_IMG + obj.arrImg[i]
			+ "'class='demo-card-image mdl-card mdl-shadow--2dp mdl-cell mdl-cell--8-col mdl-cell--6-col-desktop'>"
			+ "</div>";
	}
	txtC += "</div>";
	document.getElementById("imagenesCobertura").innerHTML = txtC;

	document.getElementById("txtArtSigCob").innerHTML = artSig.titPost;
	document.getElementById("fecArtSigCob").innerHTML = artSig.fecha;
	document.getElementById("imgArtSigCob").src = URL_IMG + artSig.arrImg[0];

	document.getElementById("fecArtAntCob").innerHTML = artAnt.fecha;
	document.getElementById("imgArtAntCob").src = URL_IMG + artAnt.arrImg[0];
	document.getElementById("txtArtAntCob").innerHTML = artAnt.titPost;
	document.getElementById("btn-sig-art-cob").onclick = function () {
		verCobertura(artSig.idP)
	}
	document.getElementById("btn-ant-art-cob").onclick = function () {
		verCobertura(artAnt.idP)
	}

}

function respuestaCobertura(objetoRespuesta) {
	var txt = "";
	for (var i = 0; i < objetoRespuesta.dataSet.length; i++) {
		txt += "<div "
			+ "class='demo-card-wide mdl-card mdl-shadow--2dp mdl-cell mdl-cell--8-col mdl-cell--6-col-desktop cuadro-momentos'>"
			+ "<div class='mdl-card__title' style='background-image:url("
			+ URL_IMG
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
			+ ")' class='mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect btn-flt-r'> VER </a>"
			+ "</div>" + "</div>";
	}
	document.getElementById("contenedorPostCobertura").innerHTML += txt;
}

function llenarCampos() {
	ajaxFN("http://www.scotyanbal.com/eventoUio2017/dao/listaPosts.php",
		respuestaCobertura, "GET", null);
}

function verImgFull(tipo, idCobAct, img, idImg) {
	if (tipo == 1) {
		coberturaActiva = idCobAct;
		document.getElementById('cnt-img-full').style.display = "block";
		document.getElementById("contenedorCobertura").style.display = "none";
		document.querySelector("#cnt-img-full>div>img").src = URL_IMG + img;

		imagenGalActiva = idImg;
	}
}

function regresarFullImg() {
	if (galActiva == 1) {
		verCobertura(coberturaActiva)
	}
}

/**
 * ********************* EN VIVO
 */

/* echo por: Carlos */
function abrirEnVivo(idR) {
	document.getElementById("en_vivo_" + idR).style.display = "block";
	document.getElementById("contenerdorPrincipalApp").style.display = "none";
	headerScroll("#en_vivo_", idR);
}

function headerScroll(cont, id) {
	document.querySelector(cont + id + ">div>div").onscroll = function (
		e) {
		if (document.querySelector(cont + id + ">div>div").scrollTop > 140) {
			document.querySelector(cont + id + ">div>div>header").style.backgroundColor = "#ec6b00";
			document.querySelector(cont + id + ">div>div>header").style.color = "#fff";
		} else if (document.querySelector(cont + id + ">div>div").scrollTop > 80) {
			document.querySelector(cont + id + ">div>div>header").style.backgroundColor = "rgba(236, 107, 0, 0.91)";
			document.querySelector(cont + id + ">div>div>header").style.color = "#fff";
		} else if (document.querySelector(cont + id + ">div>div").scrollTop > 60) {
			document.querySelector(cont + id + ">div>div>header").style.backgroundColor = "rgba(236, 107, 0, 0.66)";
			document.querySelector(cont + id + ">div>div>header").style.color = "#fff";
		} else if (document.querySelector(cont + id + ">div>div").scrollTop > 30) {
			document.querySelector(cont + id + ">div>div>header").style.backgroundColor = "rgba(236, 107, 0, 0.33)";
			document.querySelector(cont + id + ">div>div>header").style.color = "#fff";
		} else {
			document.querySelector(cont + id + ">div>div>header").style.backgroundColor = "transparent";
		}
	}
}

function abrirVideoDeEnVivo(idEV) {
	document.getElementById('video_en_vivo_' + idEV).style.display = "block";
	document.getElementById("contenedorEnVivo").style.display = "none";
	headerScroll("#video_en_vivo_", idEV);
}

function regresarHomeEnVivo(idEV, tipo) {
	if (tipo == 'video') {
		document.getElementById('video_en_vivo_' + idEV).style.display = "none";
		document.getElementById('contenedorEnVivo').style.display = "block";
	}

}

function getBytTxt() {
	var str = "Hello";
	var bytes = [];

	for (var i = 0; i < str.length; ++i) {
		bytes.push(str.charCodeAt(i));
	}

	alert(bytes);
}

function encriptarPass(txt) {
	var Base64 = {
		_keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
		encode: function (e) {
			var t = "";
			var n, r, i, s, o, u, a;
			var f = 0;
			e = Base64._utf8_encode(e);
			while (f < e.length) {
				n = e.charCodeAt(f++);
				r = e.charCodeAt(f++);
				i = e.charCodeAt(f++);
				s = n >> 2;
				o = (n & 3) << 4 | r >> 4;
				u = (r & 15) << 2 | i >> 6;
				a = i & 63;
				if (isNaN(r)) {
					u = a = 64
				} else if (isNaN(i)) {
					a = 64
				}
				t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o)
					+ this._keyStr.charAt(u) + this._keyStr.charAt(a)
			}
			return t
		},
		decode: function (e) {
			var t = "";
			var n, r, i;
			var s, o, u, a;
			var f = 0;
			e = e.replace(/[^A-Za-z0-9+/=]/g, "");
			while (f < e.length) {
				s = this._keyStr.indexOf(e.charAt(f++));
				o = this._keyStr.indexOf(e.charAt(f++));
				u = this._keyStr.indexOf(e.charAt(f++));
				a = this._keyStr.indexOf(e.charAt(f++));
				n = s << 2 | o >> 4;
				r = (o & 15) << 4 | u >> 2;
				i = (u & 3) << 6 | a;
				t = t + String.fromCharCode(n);
				if (u != 64) {
					t = t + String.fromCharCode(r)
				}
				if (a != 64) {
					t = t + String.fromCharCode(i)
				}
			}
			t = Base64._utf8_decode(t);
			return t
		},
		_utf8_encode: function (e) {
			e = e.replace(/rn/g, "n");
			var t = "";
			for (var n = 0; n < e.length; n++) {
				var r = e.charCodeAt(n);
				if (r < 128) {
					t += String.fromCharCode(r)
				} else if (r > 127 && r < 2048) {
					t += String.fromCharCode(r >> 6 | 192);
					t += String.fromCharCode(r & 63 | 128)
				} else {
					t += String.fromCharCode(r >> 12 | 224);
					t += String.fromCharCode(r >> 6 & 63 | 128);
					t += String.fromCharCode(r & 63 | 128)
				}
			}
			return t
		},
		_utf8_decode: function (e) {
			var t = "";
			var n = 0;
			var r = c1 = c2 = 0;
			while (n < e.length) {
				r = e.charCodeAt(n);
				if (r < 128) {
					t += String.fromCharCode(r);
					n++
				} else if (r > 191 && r < 224) {
					c2 = e.charCodeAt(n + 1);
					t += String.fromCharCode((r & 31) << 6 | c2 & 63);
					n += 2
				} else {
					c2 = e.charCodeAt(n + 1);
					c3 = e.charCodeAt(n + 2);
					t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6
						| c3 & 63);
					n += 3
				}
			}
			return t
		}
	}
	var res = Base64.encode(txt);
	return res;

}

// *************************** ENCUESTAS

var totalPreguntas = 0;
var idEncuestaActiva;
var respuestas;
/* INCIO funcion para cargar datos JSON desde url */
var arrrgDatosJson = new Array();

function cargarDatosJson() {
	var ajaxRespuestaDatosJson = new XMLHttpRequest();
	ajaxRespuestaDatosJson.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			miJson = JSON.parse(this.responseText);
			validate = miJson.system.error.codigo;
			encuesta = miJson.system.contenido.encuestas;
			document.getElementById("listaEncuestas").innerHTML = "";

			if (validate == "0") {
				/* Pintado de encuestas */


				var txtE = '<h5 class="mainPrin"><b>Lista de Encuestas</b></h5>'
				for (var iterador = 0; iterador < encuesta.length; iterador++) {

					txtE += "<div class='btn-encuesta1' onclick='llamarBoton("
						+ encuesta[iterador].id
						+ ",&quot;"
						+ encuesta[iterador].nombre
						+ "&quot;);'><div class='blq-txt-enc'>"
						+ "<p class='Iter'><b>"
						+ encuesta[iterador].nombre
						+ "</b></p>"
						+ "<p class='Parr txt-hdr-enc'>Lorem ipsum dolor sit amet, consectetuer adipiscing</p></div>"
						+ "<div class='blq-chk-enc'><i class='material-icons'>check_box_outline_blank</i></div>"
						+ "</div><hr>"

				}
				document.getElementById("listaEncuestas").innerHTML = txtE;
			} else {
				alert('Error Inesperado');
			}

			/* FIN Pintado de encuestas */
		}
	};

	ajaxRespuestaDatosJson
		.open(
			"GET",
			"http://www.scotyanbal.com/encuesta/rest/controlLista.php?idAccion=cargarEncuestas",
			true);
	ajaxRespuestaDatosJson.send();
}
/* FIN funcion para cargar datos JSON desde url */

/* INCIO funcion para cargar preguntas JSON desde url */
var respuestaEncuestas = new Array();

function cargarPreguntasJson(id) {
	var ajaxRespuestaPreguntasJson = new XMLHttpRequest();
	ajaxRespuestaPreguntasJson.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			encuestasJason = JSON.parse(this.responseText);

			validateEncuesta = encuestasJason.system.error.codigo;

			miEncuesta = encuestasJason.system.contenido.preguntas;

			totalPreguntas = miEncuesta.length;
			document.getElementById("contenedorPreguntas").innerHTML = "";
			if (validateEncuesta == "0") {
				respuestas = new Array();

				/* pintado de preguntas de encuestas segun id */
				for (var iterador = 0; iterador < miEncuesta.length; iterador++) {
					objDto = new Object();
					objDto.idPregunta = miEncuesta[iterador].id;
					objDto.idRespuesta = 0;

					respuestas.push(objDto);

					document.getElementById("contenedorPreguntas").innerHTML += "<div class='btn-encuesta1'>"
						+ "<section class='encuestaLetra'>"
						+ miEncuesta[iterador].nombre
						+ "</section>"
						+ "<br>"
						+ "<div class='contenedorCaritas'>"
						+ "<article><span class='numeros numeros"
						+ miEncuesta[iterador].id
						+ "' id='num_5_"
						+ miEncuesta[iterador].id
						+ "'>5</span><br><img class='estiloCarita grpCar_"
						+ miEncuesta[iterador].id
						+ "' src='img/car_1.png' onclick='respuestaPreguntasEncuestaJson(1,this,"
						+ miEncuesta[iterador].id
						+ ",5);'></article>"
						+ "<article><span class='numeros numeros"
						+ miEncuesta[iterador].id
						+ "' id='num_4_"
						+ miEncuesta[iterador].id
						+ "'>4</span><br><img class='estiloCarita grpCar_"
						+ miEncuesta[iterador].id
						+ "' src='img/car_2.png' onclick='respuestaPreguntasEncuestaJson(2,this,"
						+ miEncuesta[iterador].id
						+ ",4);'></article>"
						+ "<article><span class='numeros numeros"
						+ miEncuesta[iterador].id
						+ "' id='num_3_"
						+ miEncuesta[iterador].id
						+ "'>3</span><br><img class='estiloCarita grpCar_"
						+ miEncuesta[iterador].id
						+ "' src='img/car_3.png' onclick='respuestaPreguntasEncuestaJson(3,this,"
						+ miEncuesta[iterador].id
						+ ",3);'></article>"
						+ "<article><span class='numeros numeros"
						+ miEncuesta[iterador].id
						+ "' id='num_2_"
						+ miEncuesta[iterador].id
						+ "'>2</span><br><img class='estiloCarita grpCar_"
						+ miEncuesta[iterador].id
						+ "' src='img/car_4.png' onclick='respuestaPreguntasEncuestaJson(4,this,"
						+ miEncuesta[iterador].id
						+ ",2);'></article>"
						+ "<article><span class='numeros numeros"
						+ miEncuesta[iterador].id
						+ "' id='num_1_"
						+ miEncuesta[iterador].id
						+ "'>1</span><br><img class='estiloCarita grpCar_"
						+ miEncuesta[iterador].id
						+ "' src='img/car_5.png' onclick='respuestaPreguntasEncuestaJson(5,this,"
						+ miEncuesta[iterador].id
						+ ",1);'></article>"
						+ "</div>" + '<hr>' + "</div>"

				}

			} else {
				alert('Error Inesperado');
			}
			/* FIN pintado de preguntas de encuestas segun id */
		}
	};
	ajaxRespuestaPreguntasJson
		.open(
			"GET",
			"http://www.scotyanbal.com/encuesta/rest/controlLista.php?idAccion=cargarEncuestasPreguntas&idEncuesta="
			+ id, true);
	ajaxRespuestaPreguntasJson.send();
}

/* INICIO funcion que muestra y oculta paginas de encuestas */
function llamarBoton(id, nombre) {
	document.getElementById("contenedorPreguntas").innerHTML = '<img src="img/loading-convencion.gif">';

	totalPreguntas = 0;
	cargarPreguntasJson(id)

	document.getElementById("contenerdorPrincipalApp").style.display = "none";
	document.getElementById("contenedorEncuesta").style.display = "block";
	document.getElementById("nombreEncuesta").innerHTML = nombre;
	idEncuestaActiva = id;
}

function formaDeCalificar() {

	document.getElementById("ventanaAyuda").style.display = "block";
}

function regresarEncuesta() {
	document.getElementById("ventanaAyuda").style.display = "none";
	/* FIN funcion que muestra y oculta paginas de encuestas */
}
/* cambia estado caritas */
function respuestaPreguntasEncuestaJson(img, obj, itr, num) {

	var seleccionRespuesta = document.getElementsByClassName('grpCar_' + itr);
	var seleccionNum = document.getElementsByClassName("numeros" + itr);

	for (var iteradorSeleccionRespuesta = 0; iteradorSeleccionRespuesta < seleccionRespuesta.length; iteradorSeleccionRespuesta++) {
		seleccionRespuesta[iteradorSeleccionRespuesta].setAttribute('src',
			'img/car_' + (iteradorSeleccionRespuesta + 1) + '.png')
		seleccionNum[iteradorSeleccionRespuesta].style.color = "#757575";
	}

	obj.setAttribute('src', 'img/' + img + '.png');

	document.getElementById("num_" + num + "_" + itr).style.color = "#ec6b00";

	respuestaEncuestas[itr] = img

	for (var i = 0; i < respuestas.length; i++) {

		if (respuestas[i].idPregunta == itr) {
			respuestas[i].idRespuesta = num;
		}

	}

}
/* FIN cambia estado caritas */
/* Alamacenar respuestas */
/* INIICIO get */
function enviarRespuestas(obj) {
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function () {
		if (ajax.readyState == 4 && ajax.status == 200) {
			alert("Encuesta Guardada");
			console.log(this.responseText);
		}
	};
	ajax
		.open(
			"POST",
			"http://www.scotyanbal.com/encuesta/rest/controlForm.php?idAccion=guardarRespuestaApp&obj="
			+ obj, true);
	ajax.send(obj);
}
/* FIN get */
function enviarRes() {

	var bandera = false;

	for (var i = 0; i < respuestas.length; i++) {

		if (respuestas[i].idRespuesta == 0) {
			bandera = true;
		}

	}

	if (bandera) {
		alert("Es necesario llenar todos los campos de la encuesta")

		return false;
	}

	var datos = new Object();
	datos.idEncuesta = idEncuestaActiva;
	datos.respuestas = respuestas;
	console.log(datos)
	enviarRespuestas(JSON.stringify(datos));

}

function regresarMenuPrincipal() {
	document.getElementById("contenedorListas").style.display = "block";
	document.getElementById("contenedorEncuesta").style.display = "none";
}

function nextImgGal() {
	imagenGalActiva++;
	obtenerImagenArticuloId();
}


//*************************************************//

function initApp() {
	cargarApp();
	llenarCampos();

	pictureSource = navigator.camera.PictureSourceType;
	destinationType = navigator.camera.DestinationType;

	// Get the element with id="defaultOpen" and click on it
	if (menu == "MOM" && mapaSub["MOM"] == "1") {
		document.getElementById("MOM-1").click();
	}
	if (menu == "MII" && mapaSub["MII"] == "1") {
		document.getElementById("MII-1").click();
	}
	subMenuHrios(dia, null);

	var myElement = document.querySelector("#cnt-img-full>div>img");
	mc = new Hammer(myElement);

	mc.on("panleft panright tap", function (ev) {
		imagenGalActiva++;
		obtenerImagenArticuloId()

	});

	document.getElementById("btn-last-img-gal").addEventListener("click", function (event) {
		imagenGalActiva--;
		obtenerImagenArticuloId();
		event.preventDefault()
	});
	document.getElementById("btn-next-img-gal").addEventListener("click", function (event) {
		imagenGalActiva++;
		obtenerImagenArticuloId();
		event.preventDefault()
	});


}
/*****INICIO funcion para subir y tomar foto del PRE-REGISTRO******/

var pictureSource;
var destinationType;
var img;
var codigo = '1000';


function onPhotoDataSuccess(imageData) {

	var smallImage = document.getElementById('fotoObtenida');

	smallImage.style.display = 'block';

	smallImage.src = imageData;
	document.getElementById("p1").innerHTML = smallImage.src;
	img = imageData;
}

function capturePhoto() {
	navigator.camera.getPicture(onPhotoDataSuccess, onFail, {

		quality: 60,
		destinationType: destinationType.FILE_URI
	});
}

function onFail(message) {
	alert('Falló porque: ' + message);
}



function subirFoto(imageURI) {
	var opcion = new FileUploadOptions();
	opcion.fileKey = "file";
	opcion.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);
	opcion.mimeType = "image/jpeg";
	alert('se guardó imagen: ' + opcion.fileName);
	var params = new Object();
	params.value1 = "test";
	params.value2 = "param";
	opcion.params = params;
	opcion.chunkedMode = false;

	var ft = new FileTransfer();
	ft.upload(imageURI, "http://saviasoft.com/tmp/yanbalEncrypt/sending.php?nombre=" + codigo, function (result) {
		alert('Se subió con éxito: ' + JSON.stringify(result));
	}, function (error) {

		alert('Falló al subir: ' + JSON.stringify(error));
	}, opcion);
}



function obtenerImagen() {
	subirFoto(img)
}
function onPhotoURISuccess(imageServer) {

	var fotoServer = document.getElementById('fotoObtenida');
	fotoServer.style.display = 'block';

	fotoServer.src = imageServer;
	img = imageServer;
}

function getPhoto(source) {
	// Recuperar la ubicación del archivo de imagen de la fuente especificada
	navigator.camera.getPicture(onPhotoURISuccess, onFail, {

		quality: 60,
		destinationType: destinationType.FILE_URI,
		sourceType: source
	}
	);
}
/****FIN funcion para subir y tomar foto del PRE-REGISTRO*******/
