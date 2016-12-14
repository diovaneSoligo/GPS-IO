
var url = 'http://192.168.86.115:1000';
//var url = 'http://192.168.0.110:1000';

var banco = 0;
var vibraE = 1;
var comp = 0;
var dado ="";
var longSET = 0;
var latiSET = 0;
var LATISALVA = 0;
var LONGSALVA = 0;
var sens = 1;
var nivelOP = 0;

$(document).ready(function(){

	function app(dado){

					//BUSCA COORDENADAS
					document.getElementById("small_coord").innerHTML = "BUSCANDO...";
					document.getElementById("coord").innerHTML ="<i class='icon ion-ios-circle-filled' style='margin-top: 10px;''></i>";
					navigator.geolocation.getCurrentPosition(successo, error);

					//BUSCA STATUS INTERNET E TIPO DE CONEXÃO
					status_internet();

					onDeviceReady();

					if(sens == 1){

						var casas = parseInt(nivelOP);

						var sensiLATSALVA = parseFloat(LATISALVA);
						sensiLATSALVA = sensiLATSALVA.toFixed(casas);

						var sensilatiSET = parseFloat(latiSET);
						sensilatiSET = sensilatiSET.toFixed(casas);

						var sensiLONGSALVA = parseFloat(LONGSALVA);
						sensiLONGSALVA = sensiLONGSALVA.toFixed(casas);

						var sensilongSET = parseFloat(longSET);
						sensilongSET = sensilongSET.toFixed(casas);

						if(sensiLATSALVA == sensilatiSET){
							if(sensiLONGSALVA == sensilongSET){
								dado = "002";
							}else{
								dado = "001";
							}
						}else{
							dado = "001";
						}

						document.getElementById("termlat").innerHTML = sensiLATSALVA;
						document.getElementById("termlong").innerHTML = sensiLONGSALVA;
						document.getElementById("sualat").innerHTML = sensilatiSET;
						document.getElementById("sualong").innerHTML = sensilongSET;

						if(casas == 1){
							document.getElementById("nivel1").checked = true;
						}else if(casas == 2){
							document.getElementById("nivel2").checked = true;
						}else if(casas == 3){
							document.getElementById("nivel3").checked = true;
						}else if(casas == 4){
							document.getElementById("nivel4").checked = true;
						}else if(casas == 5){
							document.getElementById("nivel5").checked = true;
						}

					}else{
						document.getElementById("termlat").innerHTML = LATISALVA;
						document.getElementById("termlong").innerHTML = LONGSALVA;
						document.getElementById("sualat").innerHTML = latiSET;
						document.getElementById("sualong").innerHTML = longSET;

						if(LATISALVA == latiSET){
							if(LONGSALVA == longSET){
								dado = "002";
							}else{
								dado = "001";
							}
						}else{
							dado = "001";
						}
					}
				
					//verifica estado do terminal, e envia dado caso necessario
			    	$.ajax({
					    url: url,
					    data: { 'acao': dado},
					    dataType: 'jsonp',
					    crossDomain: true,
					    jsonp: false,
					    jsonpCallback: 'dados',

					    success: function(data,status,xhr) {
					    	document.getElementById("disp_texto").innerHTML = statusReturn(data.rele);
					    	
							comp = 1;
					    }

					  });

			    	if(comp == 0){
					    	document.getElementById("disp").innerHTML = "<i class='icon ion-sad' style='margin-top: 10px;''></i>";
					    	document.getElementById("small_disp").innerHTML = "NÃO ENCONTRADO";
					    	document.getElementById("disp_texto").innerHTML = statusReturn(3);
					    	if(vibraE == 0){
					    			vibraE = 1;
					    			Materialize.toast('..:: TERMINAL NÃO ENCONTRADO ::..', 3000, 'red-text');
					    			navigator.vibrate([500, 200, 1000, 200, 500]);
					    	}
					    }else{
					    	document.getElementById("disp").innerHTML = "<i class='icon ion-android-happy' style='margin-top: 10px;''></i>";
					    	document.getElementById("small_disp").innerHTML = "CONECTADO";
					    	if(vibraE == 1){
					    			vibraE = 0
									Materialize.toast('..:: TERMINAL CONECTADO ::..', 3000);
					    			navigator.vibrate([200, 500, 200, 500, 200]);
					    	}
					    	comp = 0;
					    }
					    
			        return false;
			    }

    setInterval(app, 4300);

  $( "#setar" ).click(function() {
		    if (confirm("Deseja setar as coordenadas do terminal? (OK - SIM || Cancelar - NÃO)") == true) {
					goEdit();
		       		navigator.vibrate([300, 200, 600, 200, 900]);
		    }else{
		        navigator.vibrate([200, 200, 200]);
		    }
		});

  $( "#sensib" ).click(function() {
					goEditSens();
		        navigator.vibrate([300, 200, 600]);
		});

/***************************/
  /*Sensibilidade*/
  $( "#nivel1" ).click(function() {
					goEditNivel1();
		        	navigator.vibrate([300, 200, 300]);
		});
  $( "#nivel2" ).click(function() {
					goEditNivel2();
		        	navigator.vibrate([300, 200, 300]);
		});
  $( "#nivel3" ).click(function() {
					goEditNivel3();
		        	navigator.vibrate([300, 200, 300]);
		});
  $( "#nivel4" ).click(function() {
					goEditNivel4();
		        	navigator.vibrate([300, 200, 300]);
		});
  $( "#nivel5" ).click(function() {
					goEditNivel5();
		        	navigator.vibrate([300, 200, 300]);
		});
/**********************************************************/
   function goEditNivel1() {
            var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
            db.transaction(EditNivel1, errorCB);
        };

        function EditNivel1(tx) {
        		tx.executeSql('UPDATE COORDENADAS  SET nivel = 1 WHERE id = 1');
        		Materialize.toast('Sensibilidade 1 (M-Baixa) Selecionada ..::', 2000);
        };
/****/
   function goEditNivel2() {
            var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
            db.transaction(EditNivel2, errorCB);
        };

        function EditNivel2(tx) {
        		tx.executeSql('UPDATE COORDENADAS  SET nivel = 2 WHERE id = 1');
        		Materialize.toast('Sensibilidade 2 (Baixa) Selecionada ..::', 2000);
        };
/*****/
   function goEditNivel3() {
            var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
            db.transaction(EditNivel3, errorCB);
        };

        function EditNivel3(tx) {
        		tx.executeSql('UPDATE COORDENADAS  SET nivel = 3 WHERE id = 1');
        		Materialize.toast('Sensibilidade 3 (Média) Selecionada ..:: +100Metros distancia', 2000);
        };
/****/
   function goEditNivel4() {
            var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
            db.transaction(EditNivel4, errorCB);
        };

        function EditNivel4(tx) {
        		tx.executeSql('UPDATE COORDENADAS  SET nivel = 4 WHERE id = 1');
        		Materialize.toast('Sensibilidade 4 (Auta) Selecionada ..:: +20Metros distancia', 2000);
        };
/****/
   function goEditNivel5() {
            var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
            db.transaction(EditNivel5, errorCB);
        };

        function EditNivel5(tx) {
        		tx.executeSql('UPDATE COORDENADAS  SET nivel = 5 WHERE id = 1');
        		Materialize.toast('Sensibilidade 5 (M-Auta) Selecionada ..::', 2000);
        };

/********** FUNÇÕES BD ***********/
	 function onDeviceReady() {//inicia e chama populaDB
        var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
        db.transaction(criaTabela, errorCB, successCB);//se ok vai pra successCB
    }

    function errorCB(err) {
        alert("Error processing SQL: "+err.code);
    }

    function successCB() {
        var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
        db.transaction(queryDB, errorCB);
    }

    //cria a tabela caso ela nao exista
    function criaTabela(tx) {//se a tabela nao existe entao cria
        tx.executeSql('CREATE TABLE IF NOT EXISTS COORDENADAS (id,latitude,longitude,sensibilidade,nivel)');
    }

    function queryDB(tx) { 
        tx.executeSql('SELECT * FROM COORDENADAS WHERE id = 1', [], querySuccess, errorCB);
    }

    function querySuccess(tx, results) {
        
        //vê o tamanho da tabela para listar
        var len = results.rows.length;

        if(len  < 1){
        	tx.executeSql('INSERT INTO COORDENADAS  (id,latitude,longitude,sensibilidade,nivel) VALUES (1,0,0,1,1)');
        }

        //varre a tabela listando os valores
        for (var i = 0; i < len; i++) {
                //armazena todos dados para poder editar  ex.: (id,'titulo','descricao')
               var tmpArgs=results.rows.item(i).id + ",'" + results.rows.item(i).latitude
                        + "','" + results.rows.item(i).longitude+"'";

                //acrescenta o tr e th dentro da div tblDiv
            document.getElementById("latitudeSALVO").innerHTML =results.rows.item(i).latitude;
            document.getElementById("longitudeSALVO").innerHTML =results.rows.item(i).longitude;
            LATISALVA=results.rows.item(i).latitude;
            LONGSALVA=results.rows.item(i).longitude;

            sens = results.rows.item(i).sensibilidade;

            nivelOP = results.rows.item(i).nivel;

            var sensibilidade;

            if(results.rows.item(i).sensibilidade == 1 ){
					sensibilidade = "<div><div class='switch'><label>"
                           + "<input type='checkbox' checked>"
                           + "<span class='lever'></span>"
                           + "</label></div>";
            	}else{
            		sensibilidade = "<div><div class='switch'><label>"
                           + "<input type='checkbox'>"
                           + "<span class='lever'></span>"
                           + "</label></div>";

            	}

            document.getElementById("sensib").innerHTML =sensibilidade;
            }     
        }

/*****************************************/
/**UPDATE DAS COORDENADAS NO BANCO**/
        function goEdit() {
            var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
            db.transaction(editRow, errorCB);
        };

        function editRow(tx) {
           tx.executeSql('UPDATE COORDENADAS  SET latitude =" '+latiSET+' ", longitude= " '+longSET+ ' " WHERE id = 1');
        	Materialize.toast('..:: Coordenada Terminal Setada ::..', 3000);
        };

        function errorCB(err) {
        alert("Error processing SQL: "+err.code);
    	};
/**UPDATE DA SENSIBILIDADE NO BANCO**/
        function goEditSens() {
            var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
            db.transaction(editRowSens, errorCB);
        };

        function editRowSens(tx) {
        	if(sens == 1){
        		tx.executeSql('UPDATE COORDENADAS  SET sensibilidade = 0 WHERE id = 1');
        		Materialize.toast('Sensibilidade Desativada ', 3000);
        	}else{
           		tx.executeSql('UPDATE COORDENADAS  SET sensibilidade = 1 WHERE id = 1');
           		Materialize.toast('Sensibilidade Ativada ', 3000);
        	}
        };

/********** OUTRAS FUNÇÕES **********/
	function statusReturn (valor) {
    	if(valor == 1) {
    		document.getElementById("disp_icon").innerHTML = "<i class='icon ion-android-sunny' style='margin-top: 10px;''></i>";
    		return "TERMINAL LIGADO";
    		}
    	else if(valor == 0) {
			document.getElementById("disp_icon").innerHTML = "<i class='icon ion-ios-sunny' style='margin-top: 10px;''></i>";
    		return "TERMINAL DESLIGADO";
    		}
    	else { 
    		document.getElementById("disp_icon").innerHTML = "<i class='icon ion-android-sad' style='margin-top: 10px;''></i>";
    		return "TERMINAL ???OPS???";}
    					};

	function successo(pos) {//coordenadas latitude e longitude
					var crd = pos.coords;
					longSET = crd.longitude;
					latiSET = crd.latitude;
					document.getElementById("longitude").innerHTML = longSET;
					document.getElementById("latitude").innerHTML = latiSET;
					document.getElementById("small_coord").innerHTML = "RECEBIDAS";
					document.getElementById("coord").innerHTML ="<i class='icon ion-ios-checkmark-outline' style='margin-top: 10px;''></i>";
							};

	function error(err) {//coordenadas latitude e longitude ERRO
					document.getElementById("coord").innerHTML ="<i class='icon ion-ios-close-outline' style='margin-top: 10px;''></i>";
					document.getElementById("small_coord").innerHTML = " ERRO ";
					document.getElementById("longitude").innerHTML = "ERRO ...";
					document.getElementById("latitude").innerHTML = "ERRO ...";
					Materialize.toast('ERROR(' + err.code + '): ' + err.message, 3000);
							};

	function status_internet(){//status, tipo de conexão
					var networkState = navigator.connection.type;

				    var states = {};
				    states[Connection.UNKNOWN]  = '>X<';
				    states[Connection.ETHERNET] = 'Ethernet connection';
				    states[Connection.WIFI]     = 'WIFI';
				    states[Connection.CELL_2G]  = '2G';
				    states[Connection.CELL_3G]  = '3G';
				    states[Connection.CELL_4G]  = '4G';
				    states[Connection.CELL]     = 'GEN';
				    states[Connection.NONE]     = 'OFF';

				    document.getElementById("net").innerHTML = states[networkState]+"<i class='icon ion-social-rss-outline' style='padding-left: 25px;''></i>";
	}
});	