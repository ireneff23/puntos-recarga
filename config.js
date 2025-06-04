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
    subtitle: 'La accesibilidad a los puntos de recarga es un factor clave para fomentar la adopción de esta tecnología',
    byline: 'Irene Fedriani',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Mallorca',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/18-10-30-Mallorca-Palma-RalfR-DJI_0308.jpg/500px-18-10-30-Mallorca-Palma-RalfR-DJI_0308.jpg',
            description: 'Mallorca se caracteriza por ser la isla de mayor tamaño y con mayor cantidad de habitantes. Es por ello que alberga el mayor número de puntos de recarga, especialmente en la ciudad de Palma y en eleje de la carretera Ma-13, que conecta con Alcudia.',
            location: {
                center: [2.64298, 39.58413],
                zoom: 8.4,
                pitch: 0,
                bearing: -11.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
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
            description: 'La isla de Menorca es la siguiente con más puntos de recarga, aunque en este caso solo cuenta con dos: en la Ciudadela y en Mahón.',
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
            description: 'Pese a ser la segunda isla con más habitantes y a recibir un elevado número de turistas a lo largo de todo el año, no existe ningún punto de recarga disponible al público en estos momentos, según los datos del Govern balear.',
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
            description: 'Formentera, la isla más pequeña de las cuatro habitadas, cuenta con una solaestación de recarga en su capital, San Francisco Javier.',
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
        }
    ]
};
