window.onload = () => {
     let places = staticLoadPlaces();
     renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'position-1',
            location: {
                lat: -37.698823465370296,
                lng: 145.02308461004446,
            },
            color: 'white'
        },{
            name: 'position-2',
            location: {
                lat: -37.69822728976309,
                lng: 145.02266325330373,
            },
            color: 'white'
        },{
            name: 'position-3',
            location: {
                lat: -37.69942340939379,
                lng: 145.0234950194138,
            },
            color: 'white'
        },{
            name: 'position-4',
            location: {
                lat: -37.70046318788387,
                lng: 145.01920972398116,
            },
            color: 'red'
        }
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');
    console.log("rendering places");
    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        // let model = document.createElement('a-entity');
        // model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        // model.setAttribute('gltf-model', './assets/magnemite/bboots.gltf');
        // model.setAttribute('rotation', '0 180 0');
        // model.setAttribute('position', '0 0 -200');
        // model.setAttribute('animation-mixer', '');
        // model.setAttribute('scale', '0.25 0.25 0.25');

        let model = document.createElement('a-sphere');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        model.setAttribute('src', './assets/magnemite/textures/TCom_Gore_2K_albedo.jpg');
        model.setAttribute('repeat', '2 2');
        model.setAttribute('normal-map', '#gore-NRM');
        model.setAttribute('normal-texture-repeat', '2 2');
        model.setAttribute('roughness', '0');
        model.setAttribute('color', place.color);
        model.setAttribute('radius', '2');
        model.setAttribute('position', '0 0 0');
        model.setAttribute('animation', "property: rotation; to: 0 360 0; dur: 8000; easing: linear; loop: true")
        
        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}