// ARRAYS CON LA INFORMACION A USAR:
let productos = [
    {
        nombre: "Joy Sedán",
        year:2012,
        codigo:88801359,
        marca: "Chevrolet",
        color:"Rojo",
        kilometraje:106936,
        precio:78298891,
        transmision:"Automático",
    },
    {
        nombre: "Onix",
        year:2009,
        codigo:86833782,
        marca:"Chevrolet",
        color:"Gris",
        kilometraje:74474,
        precio:78462525,
        transmision:"Automático",
    },
    {
        nombre: "Tracker",
        year:2021,
        codigo:78968732,
        marca:"Chevrolet",
        color:"Rojo",
        kilometraje:82705,
        precio:78513526,
        transmision:"Manual",
    },
    {
        nombre:"Captiva",
        year:2008,
        codigo:84606114,
        marca:"Chevrolet",
        color:"Azul",
        kilometraje:88204,
        precio:78835625,
        transmision:"Automático",
    },
    {
        nombre:"Equinox",
        year:2013,
        codigo:79057435,
        marca:"Chevrolet",
        color:"Blanco",
        kilometraje:76510,
        precio:79057435,
        transmision:"Automático",
    },
    {
        nombre: "Trailblazer",
        year:2014,
        codigo:80989898,
        marca:"Chevrolet",
        color:"Blanco",
        kilometraje:92702,
        precio:79151823,
        transmision:"Automático",
    },
    {
        nombre: "Tahoe",
        year:2009,
        codigo:76834508,
        marca:"Chevrolet",
        color:"Gris",
        kilometraje:85847,
        precio:79424614,
        transmision:"Automático",
    },
    {
        nombre:"March",
        year:2012,
        codigo:87981302,
        marca:"Nissan",
        color:"Negro",
        kilometraje:93962,
        precio:79588484,
        transmision:"Manual",
    },
    {
        nombre:"Versa",
        year:2010,
        codigo:87050502,
        marca:"Nissan",
        color:"Blanco",
        kilometraje:114781,
        precio:79851230,
        transmision:"Automático",
    },
    {
        nombre:"Sentra",
        year:2009,
        codigo:72073899,
        marca:"Nissan",
        color:"Rojo",
        kilometraje:108356,
        precio:80150860,
        transmision:"Manual",
    },
    {
        nombre:"Kicks",
        year:2013,
        codigo:86104579,
        marca:"Nissan",
        color:"Blanco",
        kilometraje:88458,
        precio:80558978,
        transmision:"Manual",
    },
    {
        nombre:"Frontier",
        year:2021,
        codigo:80100955,
        marca:"Nissan",
        color:"Gris",
        kilometraje:92349,
        precio:80911757,
        transmision:"Manual",
    },
    {
        nombre:"Murano",
        year:2005,
        codigo:77917460,
        marca:"Nissan",
        color:"Negro",
        kilometraje:73491,
        precio:80936500,
        transmision:"Automático",
    },
    {
        nombre:"Leaf",
        year:2009,
        codigo:88826767,
        marca:"Nissan",
        color:"Blanco",
        kilometraje:104193,
        precio:80943236,
        transmision:"Manual",
    },
    {
        nombre:"Rio",
        year:2021,
        codigo:83535587,
        marca:"KIA",
        color:"Negro",
        kilometraje:85017,
        precio:81516690,
        transmision:"Automático",
    },
    {
        nombre:"Picanto",
        year:2005,
        codigo:77277831,
        marca:"KIA",
        color:"Negro",
        kilometraje:84770,
        precio:81840537,
        transmision:"Automático",
    },
    {
        nombre:"Sonet",
        year:2017,
        codigo:71969286,
        marca:"KIA",
        color:"Rojo",
        kilometraje:80439,
        precio:82319233,
        transmision:"Automático",
    },
    {
        nombre:"Sportage",
        year:2006,
        codigo:83102220,
        marca:"KIA",
        color:"Negro",
        kilometraje:110939,
        precio:82534315,
        transmision:"Automático",
    },
    {
        nombre:"A3",
        year:2013,
        codigo:74126802,
        marca:"Audi",
        color:"Blanco",
        kilometraje:115035,
        precio:82693824,
        transmision:"Automático",
    },
    {
        nombre:"Q5",
        year:2009,
        codigo:86942635,
        marca:"Audi",
        color:"Azul",
        kilometraje:92742,
        precio:82841940,
        transmision:"Automático",
    },
    {
        nombre:"Q7",
        year:2006,
        codigo:80398441,
        marca:"Audi",
        color:"Azul",
        kilometraje:90804,
        precio:84081817,
        transmision:"Manual",
    },
    {
        nombre:"R8",
        year:2011,
        codigo:75301416,
        marca:"Audi",
        color:"Rojo",
        kilometraje:116597,
        precio:84267454,
        transmision:"Manual",
    },
    {
        nombre:"Gol",
        year:2019,
        codigo:79238238,
        marca:"Volkswagen",
        color:"Gris",
        kilometraje:91709,
        precio:84787966,
        transmision:"Manual",
    },
    {
        nombre:"Voyage",
        year:2007,
        codigo:80497984,
        marca:"Volkswagen",
        color:"Azul",
        kilometraje:87312,
        precio:84943890,
        transmision:"Manual",
    },
    {
        nombre:"T-cross",
        year:2017,
        codigo:79850863,
        marca:"Volkswagen",
        color:"Rojo",
        kilometraje:119913,
        precio:85297970,
        transmision:"Automático",
    },
    {
        nombre:"Taos",
        year:2020,
        codigo:70748267,
        marca:"Volkswagen",
        color:"Rojo",
        kilometraje:102055,
        precio:85494702,
        transmision:"Manual",
    },
    {
        nombre:"Amarok",
        year:2014,
        codigo:85329003,
        marca:"Volkswagen",
        color:"Rojo",
        kilometraje:86921,
        precio:85821053,
        transmision:"Automático",
    },
    {
        nombre:"Jetta",
        year:2021,
        codigo:76746487,
        marca:"Volkswagen",
        color:"Blanco",
        kilometraje:110509,
        precio:87765848,
        transmision:"Manual",
    },
    {
        nombre:"Corolla",
        year:2012,
        codigo:72189753,
        marca:"Toyota",
        color:"Gris",
        kilometraje:115320,
        precio:88718453,
        transmision:"Manual",
    },
    {
        nombre:"Fortuner",
        year:2017,
        codigo:75761591,
        marca:"Toyota",
        color:"Gris",
        kilometraje:115447,
        precio:89256412,
        transmision:"Manual",
    },
    {
        nombre:"4Runner",
        year:2007,
        codigo:82739682,
        marca:"Toyota",
        color:"Azul",
        kilometraje:82581,
        precio:89715742,
        transmision:"Automático",
    },
    {
        nombre:"Land Cruiser",
        year:2013,
        codigo:82703297,
        marca:"Toyota",
        color:"Negro",
        kilometraje:94527,
        precio:90670409,
        transmision:"Automático",
    },
    {
        nombre:"Prado",
        year:2018,
        codigo:88360974,
        marca:"Toyota",
        color:"Azul",
        kilometraje:79786,
        precio:90850069        ,
        transmision:"Manual",
    },
    {
        nombre:"Hilux",
        year:2015,
        codigo:72236321,
        marca:"Toyota",
        color:"Negro",
        kilometraje:106080,
        precio:90897974,
        transmision:"Manual",
    },
    {
        nombre:"Ranger",
        year:2017,
        codigo:79900933,
        marca:"Ford",
        color:"Azul",
        kilometraje:114513,
        precio:91045702,
        transmision:"Manual",
    },
    {
        nombre:"Escape",
        year:2019,
        codigo:70661253,
        marca:"Ford",
        color:"Rojo",
        kilometraje:107510,
        precio:92184962,
        transmision:"Automático",
    },
    {
        nombre:"Bronco",
        year:2018,
        codigo:85536436,
        marca:"Ford",
        color:"Blanco",
        kilometraje:76604,
        precio:93025257,
        transmision:"Manual",
    },
    {
        nombre:"Explorer",
        year:2005,
        codigo:88712962,
        marca:"Ford",
        color:"Gris",
        kilometraje:82671,
        precio:93173967,
        transmision:"Automático",
    },
    {
        nombre:"Mustang",
        year:2021,
        codigo:88987999,
        marca:"Ford",
        color:"Rojo",
        kilometraje:84330,
        precio:93232897        ,
        transmision:"Manual",
    },
    {
        nombre:"Kwid",
        year:2016,
        codigo:88987999,
        marca:"Renault",
        color:"Negro",
        kilometraje:87444,
        precio:93301370,
        transmision:"Manual",
    },
    {
        nombre:"Sandero",
        year:2020,
        codigo:72343944,
        marca:"Renault",
        color:"Blanco",
        kilometraje:74632,
        precio:93525549,
        transmision:"Automático",
    },
    {
        nombre:"Stepway",
        year:2007,
        codigo:83907072,
        marca:"Renault",
        color:"Blanco",
        kilometraje:115910,
        precio:93692637,
        transmision:"Automático",
    },
    {
        nombre:"logan",
        year:2015,
        codigo:78086376,
        marca:"Renault",
        color:"Azul",
        kilometraje:99082,
        precio:93893072,
        transmision:"Manual",
    },
    {
        nombre:"Duster",
        year:2014,
        codigo:76995826,
        marca:"Renault",
        color:"Gris",
        kilometraje:80458,
        precio:94016845,
        transmision:"Manual",
    },
    {
        nombre:"Koleos",
        year:2013,
        codigo:80439854,
        marca:"Renault",
        color:"Blanco",
        kilometraje:92373,
        precio:94344743,
        transmision:"Automático",
    },
    {
        nombre:"Oroch",
        year:2012,
        codigo:78212528,
        marca:"Renault",
        color:"Rojo",
        kilometraje:90514,
        precio:94353466,
        transmision:"Manual",
    },
    {
        nombre:"Mazda 2",
        year:2009,
        codigo:75879119,
        marca:"Mazda",
        color:"Negro",
        kilometraje:89348,
        precio:94535483,
        transmision:"Automático",
    },
    {
        nombre:"Mazda 3",
        year:2009,
        codigo:76482721,
        marca:"Mazda",
        color:"Gris",
        kilometraje:74905,
        precio:95227441,
        transmision:"Automático",
    },
    {
        nombre:"Mazda CX-30",
        year:2008,
        codigo:70879046,
        marca:"Mazda",
        color:"Azul",
        kilometraje:74066,
        precio:96013410,
        transmision:"Manual",
    },
    {
        nombre:"Mazda CX-50",
        year:2008,
        codigo:86381104,
        marca:"Mazda",
        color:"Gris",
        kilometraje:116091,
        precio:96154654,
        transmision:"Manual",
    },
    {
        nombre:"Tucson",
        year:2012,
        codigo:74259252,
        marca:"Hyundai",
        color:"Gris",
        kilometraje:113478,
        precio:96943528,
        transmision:"Manual",
    },
    {
        nombre:"C-Elysée",
        year:2010,
        codigo:71104036,
        marca:"Citroen",
        color:"Rojo",
        kilometraje:89067,
        precio:98687434,
        transmision:"Manual",
    },
    {
        nombre:"C4 Cactus",
        year:2014,
        codigo:86531369,
        marca:"Citroen",
        color:"Negro",
        kilometraje:106888,
        precio:99031186,
        transmision:"Manual",
    },
    {
        nombre:"C5 Aircross",
        year:2015,
        codigo:82679446,
        marca:"Citroen",
        color:"Azul",
        kilometraje:82161,
        precio:99104377,
        transmision:"Manual",
    },
    {
        nombre:"Compass",
        year:2008,
        codigo:71914296,
        marca:"Jeep",
        color:"Blanco",
        kilometraje:115279,
        precio:99276094,
        transmision:"Manual",
    },
    {
        nombre:"Wrangler",
        year:2014,
        codigo:75768780,
        marca:"Jeep",
        color:"Azul",
        kilometraje:118395,
        precio:99772605,
        transmision:"Manual",
    },
    {
        nombre:"Renegade",
        year:2005,
        codigo:76811451,
        marca:"Jeep",
        color:"Azul",
        kilometraje:115827,
        precio:99772847,
        transmision:"Automático",
    },

    
]
let impSel=""
function liquidar (seleccion){
    if (opcion===1) {
        seleccion.sort((a,b)=>{
            if (a.precio>b.precio) {
                return 1
            }
            if (a.precio<b.precio) {
                return -1
            }
            return 0
        })
    }
    if (opcion===2) {
        seleccion.sort((a,b)=>{
            if (a.nombre>b.nombre) {
                return 1
            }
            if (a.nombre<b.nombre) {
                return -1
            }
            return 0
        })
    }
    if (opcion===3) {
        seleccion.sort((a,b)=>{
            if (a.year>b.year) {
                return 1
            }
            if (a.year<b.year) {
                return -1
            }
            return 0
        })
    }
    if (opcion===4) {
        seleccion.sort((a,b)=>{
            if (a.kilometraje>b.kilometraje) {
                return 1
            }
            if (a.kilometraje<b.kilometraje) {
                return -1
            }
            return 0
        })
    }
    seleccion.sort((a,b)=>a-b)
    let mosSel=seleccion.map((le)=>{
    return{
        nombre:le.nombre,
        marca:le.marca,
        precio:le.precio,
        codigo:le.codigo,
        year: le.year,
        kilometraje: le.kilometraje
    }
    })
    // console.log(mosSel) console.log de prueba para ver resultados de la función .map
    mosSel.forEach((le)=>
    impSel=impSel+mosSel.indexOf(le)+". "+le.marca+" "+le.nombre+" año "+le.year+" | $"+le.precio+" | "+le.kilometraje+" Kms"+"\n"
    )
    let selVehi=Number(prompt("Los vehículos encontrados fueron:\n\n"+impSel+"\n\nPor favor ingrese el numero del vehículo del cual desea obtener más información"))
    let buscar = productos.find((le)=>le.codigo===mosSel[selVehi].codigo)
    let opComprar=Number(prompt("A Continuación se muestran los detalles del vehículo escogido:\n\nNombre: "+buscar.marca+" "+buscar.nombre+"\nColor: "+buscar.color+"\nKilometraje: "+buscar.kilometraje+" Km"+"\nPrecio: $"+buscar.precio+"\nTransmisión: "+buscar.transmision+"\nAño de fabricación: "+buscar.year+"\n\nPor favor ingresa 1 si quieres comprar este vehíchulo o cualquier otro botón para reiniciar la búsqueda de tu auto soñado"))
        
    if (opComprar===1) {
            alert("Felicitaciones por tu compra!\n\nUno de nuestros asesores se contactará contigo para seguir el proceso documental de la compra, recuerda que por seguridad el agente debe indicarte el código "+buscar.codigo+" para estar seguros de que te comunicas con alguien de nuestra agencia.\n\nPor favor no brindar datos personales si el código es diferente o no lo facilitan en la llamada")
        }

    }

// PRESENTACION DE PROGRAMA Y PRIMEROS MENUS

alert("Bienvenid@ a CarAssist\n\nTu asistente virtual para la compra de vehículos usados!")
let opcion=Number(prompt("Por favor escriba el número según la opción que desee realizar:\n\n1. Comprar vehículo según precio\n2. Comprar vehículo según su marca\n3. Comprar vehículo según su antiguedad\n4. Comprar vehículo según su kilometraje"))

if (opcion===1) {
    let presupuesto=Number(prompt("Vale, escojamos su vehículo acorde al precio!\n\n Tenemos vehículos desde COP $80000000 hasta los COP $120000000\n\nA continuación por favor ingrese su presupuesto máximo para la compra de su vehículo sin simbolos, comas o puntos."))

    let selPre=productos.filter((el)=>el.precio<=presupuesto)
    if (selPre.length<1) {
        alert("No se encontraron vehículos acorde a su presupuesto.\n\nPor favor recargue la página y vuelva a intentarlo")
    } else {
        liquidar(selPre)
    }
}
if (opcion===2) {
    let marca=prompt("Vale, escojamos su vehículo acorde a la marca!\nTenemos vehículos de las siguientes marcas:\n\nChevrolet\nNissan\nKIA\nAudi\nVolkswagen\nToyota\nFord\nRenault\nMazda\nHyundai\nCitroen\nJeep\n\nA continuación por favor escriba la marca de su interés")

    let selMarca=productos.filter((el)=>el.marca==marca)
    if (selMarca.length<1) {
        alert("No se encontraron vehículos acorde a su marca favorita.\n\nPor favor recargue la página y vuelva a intentarlo")
    } else {
        liquidar(selMarca)
    }
}
if (opcion===3) {
    let year2=Number(prompt("Vale, escojamos su vehículo acorde a su antiguedad!\n\n Tenemos vehículos desde el año 2005 hasta el año 2021\n\nA continuación por favor ingrese el año desde el cual le interesa ver vehículos (se mostrarán vehículos desde el año seleccionado hasta los más nuevos"))

    let selYear=productos.filter((el)=>el.year>=year2)
    if (selYear.length<1) {
        alert("No se encontraron vehículos acorde al año de su selección.\n\nPor favor recargue la página y vuelva a intentarlo")
    } else {
        liquidar(selYear)
    }
}
if (opcion===4) {
    let kilom=Number(prompt("Vale, escojamos su vehículo acorde al kilometraje!!\n\n Tenemos vehículos que tienen desde 70.000 hasta 120.000 Kms\n\nA continuación por favor ingrese el kilometraje desde el cual le gustaría ver opciones (ingresar kilometraje sin simbolos, letras, comas o puntos)\n\nNOTA: se mostrarán los vehículos con el kilometraje deseado y menores"))

    let selKilom=productos.filter((el)=>el.kilometraje<=kilom)
    if (selKilom.length<1) {
        alert("No se encontraron vehículos con el kilometraje ingresado o menores.\n\nPor favor recargue la página y vuelva a intentarlo")
    } else {
        liquidar(selKilom)
    }
}
alert("Gracias por usar CarAssist en el proceso de compra de su nuevo vehículo!")