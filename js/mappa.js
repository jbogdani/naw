const mappa = () => {
    const pois = [
        {
            "name": "Tamit",
            "coord": [ 22.331090, 31.638430 ],
            "url": "single"
        },
        {
            "name": "Sonqi Tino",
            "coord": [ 21.218166, 30.678575 ],
            "url": ""
        },
        {
            "name": "Gebel Barkal",
            "coord": [ 18.536380, 31.828804 ],
            "url": ""
        },
        {
            "name": "Hugair Gubli",
            "coord": [ 18.244639, 31.642111 ],
            "url": ""
        },
        {
            "name": "Diffinarti",
            "coord": [ 19.021721, 30.464450 ],
            "url": ""
        },
        {
            "name": "Khandag",
            "coord" : [ 18.607773, 30.567303 ],
            "url": ""
        },
        {
            "name": "Abkur",
            "coord": [ 18.042528, 31.076083 ],
            "url": ""
        },
        {
            "name": "Merowe",
            "coord": [ 18.480473, 31.800610 ],
            "url": ""
        },
        // {
        //     "name": "Keissi",
        //     "coord": [ 0, 0 ],
        //     "url": ""
        // },
        {
            "name": "Kerma",
            "coord": [ 19.600767, 30.410444 ],
            "url": ""
        }
    ];


    if (typeof L === 'undefined'){
        console.log('Load Leflet to build map: https://unpkg.com/leaflet@1.7.1/dist/leaflet.js');
    }

    if (typeof document.getElementById('map') === 'undefined'){
        console.log('Add element <div id="map"></div> in the document to build the map');
    }

    var map = L.map('map').setView([20.024509, 31.471851], 6);

    L.tileLayer( 'http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        opacity: 0.4
    }).addTo(map);

    pois.forEach(p => {
        let isCurrent;
        if (window.location.href.indexOf(`/${p.url}.html`) > -1){
            isCurrent = true;
        }
        const marker = L.circleMarker(p.coord, {
            color: isCurrent ? '#b81027' : '#302e2f',
            fillColor: isCurrent ? '#b81027' : '#302e2f',
            fillOpacity: 0.5,
            radius: 5
        }).addTo(map)
            .bindPopup(`<h5><a href="./${p.url}">${p.name}</a></h5>`);
        if (isCurrent){
            marker.openPopup();
        }
    });

};

mappa();
