const mappa = () => {
  const pois = [
    {
      "name": "Tamit",
      "coord": [ 22.331090, 31.638430 ],
      "submerged": true,
      "from": "(1963)",
      "to": 1964,
      "url": "tamit"
    },
    {
      "name": "Sonqi Tino",
      "coord": [ 21.218166, 30.678575 ],
      "from": 1964,
      "to": 1964,
      "from": 1967,
      "to": 1970,
      "submerged": true,
      "url": ""
    },
    {
      "name": "Jebel Barkal",
      "coord": [ 18.536380, 31.828804 ],
      "submerged": false,
      "from": 1973,
      "to": 2004,
      "post-it": "Scavi: 2005-2010 Università di Torino; 2011 - oggi: Ca'Foscari Università di Venezia (https://sites.google.com/view/egittologiavenezia/scavo)",
      "post-es": "Excavations: 2005-2010 University of Turin; 2011 - currently: Ca'Foscari University of Venice (https://sites.google.com/view/egittologiavenezia/scavo)",
      "url": ""
    },
    {
      "name": "Hugair Gubli",
      "coord": [ 18.244639, 31.642111 ],
      "submerged": true,
      "from": 2021,
      "to": "in corso",
      "url": ""
    },
    // {
    //     "name": "Diffinarti",
    //     "coord": [  ],
    //     "url": ""
    // },
    {
      "name": "Qasr Nimeri",
      "coord": [ 19.021721, 30.464450 ],
      "submerged": false,
      "from": 1970,
      "post-it": "Lavori sul campo a varie riprese a partire dal 2007 da parte dell'Università di Khartum",
      "post-en": "Fieldwork since 2007 by the Khartoum University",
      "url": ""
    },
    {
      "name": "El-Khandag",
      "coord" : [ 18.607773, 30.567303 ],
      "submerged": false,
      "from": 1970,
      "post-it": "Lavori sul campo a varie riprese a partire dal 2007 da parte dell'Università di Khartum",
      "post-en": "Fieldwork since 2007 by the Khartoum University",
      "url": ""
    },
    {
      "name": "Abkur",
      "coord": [ 18.042528, 31.076083 ],
      "submerged": false,
      "from": 1970,
      "post-it": "Lavori sul campo e ricognizioni da parte di Bogdan Zurawski, a partire dal 2000",
      "post-en": "Fieldwork and survey by Bogdan Zurawski, since 2000",
      "url": ""
    },
    {
      "name": "Merowe",
      "coord": [ 18.480473, 31.800610 ],
      "submerged": false,
      "from": 1970,
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
      "submerged": false,
      "from": 1970,
      "post-it": "Mission archéologique suisse à Kera (Soudan): dal 1977",
      "post-en": "Mission archéologique suisse à Kera (Soudan): since 1977",
      "url": ""
    }
  ];
  
  
  if (typeof L === 'undefined'){
    console.log('Load Leflet to build map: https://unpkg.com/leaflet@1.7.1/dist/leaflet.js');
    return;
  }
  
  if (typeof document.getElementById('map') === 'undefined'){
    console.log('Add element <div id="map"></div> in the document to build the map');
    return;
  }
  let lang = document.getElementById('map').textContent;
  if (lang !== 'it' && lang !== 'en'){
    lang = 'it';
    console.log('Language set to `it` by default. Please explicitly set language by adding `it` or `en` as content of div#map');
  }
  
  var map = L.map('map').setView([20.024509, 31.471851], 6);
  
  L.tileLayer( 'http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    opacity: 0.4
  }).addTo(map);

  pois.forEach(p => {
    let isCurrent;
    let submergedText = p.submerged ? (lang === 'it' ? '<p>Il sito è oggi sommerso</p>' : '<p>The site is today submerged</p>') : '';
    const fromToText = lang === 'it' ? `<p><strong>Attività Sapenza</strong><br> ${p.from} ${p.to ? `– ${p.to}` : ''}</p>` : `<p><strong>Sapienza activities</strong><br> ${p.from} — ${p.tp}</p>`;
    
    if (window.location.href.indexOf(`/${p.url}.html`) > -1){
      isCurrent = true;
    }
    
    const marker = L.circleMarker(p.coord, {
      color: isCurrent ? '#b81027' : '#302e2f',
      fillColor: isCurrent ? '#b81027' : '#302e2f',
      fillOpacity: 0.5,
      radius: 5
    });
    marker.addTo(map);
    marker.bindPopup(`
      <h5 class="text-center"><a href="./${p.url}" title="${p.name}">${p.name}</a></h5>
      <div class="text-center">
      ${submergedText}
      ${fromToText}
      </div>
    `);

    if (isCurrent){
      marker.openPopup();
    }
  });

};

mappa();
