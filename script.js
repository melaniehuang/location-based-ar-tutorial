window.onload = () => {
     let places = staticLoadPlaces();
     renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'Magnemite',
            location: {
                lat: -37.698820622107164,
                lng: 145.0230781279465,
            }
        },
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

        let model = document.createElement('a-box');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        model.setAttribute('color', 'blue');
        model.setAttribute('depth', '1');
        model.setAttribute('width', '1');
        model.setAttribute('height', '1');
        //model.setAttribute('rotation', '0 180 0');
        model.setAttribute('position', '0 0 0');
        // model.setAttribute('scale', '0.25 0.25 0.25');

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}