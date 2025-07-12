var config = {
    style: 'mapbox://styles/irenef23/cmbhn9qph00fc01s15ns23o2f',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiaXJlbmVmMjMiLCJhIjoiY21iODR0Y3U3MDI1bDJrcXUzdmJrZzB4biJ9.9clbAi05ITW9QkdB5QDOdg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Puntos de recarga de vehículos eléctricos en las Islas Baleares',
    subtitle: 'Estaciones de propiedad pública del Govern en el año 2024',
    byline: 'Irene Fedriani',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [

        {
            id: 'intro-chapter',
            alignment: 'center',
            hidden: false,
            title: 'La situación del coche eléctrico en las Islas Baleares',
            image: 'https://img2.rtve.es/i/?w=1600&i=01712661513616.jpg',
            description: 'A medida que ha ido creciendo la demanda de vehículos eléctricos en las Islas Baleares, la infraestructura de recarga ha experimentado un crecimiento significativo, si bien aún enfrenta grandes desafíos en términos de operatividad. No existen datos definitivos del total de puntos de recarga, pero la patronal de automóviles Anfac estima que en la comunidad hay cerca de 1.770. Sin embargo, aproximadamente el 36% de estos puntos no están operativos.',
            location: {
                center: [2.80763, 39.53450],
                zoom: 6.89,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
          {
            id: 'next-chapter',
            alignment: 'top-right',
            hidden: false,
            title: 'Empresas y administraciones implicadas',
            description: 'Empresas privadas, compañías eléctricas e instituciones públicas están implicados en la instalación de nuevas terminales. Por ejemplo, Endesa está implantando más de 320 puntos de recarga en Baleares. </p>Por su parte, el Govern tiene un listado de los <b>cargadores de titularidad pública operativos</b>, aunque esta recopilación es limitada y no incluye aquellos puestos por compañías privadas, ya que no todas comunican su disponibilidad.',
            image: '/public/assets/GRAFICO.jpg',
            location: {
                center: [3.17994, 39.55589],
                zoom: 7.89,
                pitch: 0.5,
                bearing: 15
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'next-chapter',
            alignment: 'top-center',
            hidden: false,
            title: 'Baleares, por debajo de la media nacional',
            description: 'Según recogen medios como Cinco Días, Baleares está por debajo de la media nacional en operatividad (64% vs. 77,2%).',
            image: '/public/assets/media1.jpg',
            location: {
                center: [3.17994, 39.55589],
                zoom: 7.89,
                pitch: 0.5,
                bearing: 15
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Mallorca',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/18-10-30-Mallorca-Palma-RalfR-DJI_0308.jpg/500px-18-10-30-Mallorca-Palma-RalfR-DJI_0308.jpg',
            description: 'En el caso de <b>Mallorca</b>, en 2024 albergaba el mayor número de puntos, especialmente en la ciudad de Palma y en el eje de la carretera Ma-13, que conecta con Alcudia',
            location: {
                center: [2.64298, 39.58413],
                zoom: 10.5,
                pitch: 0,
                bearing: -11.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 2,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Menorca',
            image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Puerto_de_Ciudadela.jpg',
            description: 'La isla de Menorca es la siguiente con más puntos de recarga, aunque el año pasado solo contaba con dos de titularidad pública: en <b>la Ciudadela y en Mahón</b>.',
            location: {
                center: [4.02266, 39.99333],
                zoom: 9,
                pitch: 0,
                bearing: 10.40,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },        
        {
            id: 'third-identifier',
            alignment: 'center',
            hidden: false,
            title: 'Ibiza',
            image: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Puerto_de_Ibiza%2C_en_Baleares_%28Espa%C3%B1a%29.jpg',
            description: 'Pese a ser la segunda isla con más habitantes y a recibir un elevado número de turistas a lo largo de todo el año, en 2024 no había ningún punto de recarga público disponible, según los datos del Govern balear. En 2025, en cambio, ya están operativos seis: <b>tres en la ciudad de Ibiza, uno en Sant Antoni de Portmany y otros dos en Sant Josep de sa Talaia<b>.',
            location: {
                center: [1.41126, 38.98069],
                zoom: 9.47,
                pitch: 8.01,
                bearing: -1.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Formentera',
            image: 'https://www.formentera.es/wp-content/uploads/2018/11/Carrer-de-Sant-Francesc_Alfredo-Montero.jpg',
            description: '<b>Formentera</b>, la isla más pequeña de las cuatro habitadas, cuenta con una sola estación de recarga en su capital, San Francisco Javier.',
            location: {
                center: [1.56287, 38.69949],
                zoom: 10.84,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
        
    };
