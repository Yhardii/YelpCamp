
// console.log(process.env.MAPBOX_TOKEN)
// mapboxgl.accessToken = `${process.env.MAPBOX_TOKEN}`



// mapboxgl.accessToken = 'pk.eyJ1IjoieWhhcmRpaTQiLCJhIjoiY2xscTVjdHhwMGR4ODNxdGh3aTJtdWcxcCJ9.LKUGvOHLl4Iy6hg_QBn7Wg'
console.log('hi')
mapboxgl.accessToken = mapboxToken
    const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: campground.geometry.coordinates, // starting position [lng, lat]
    zoom: 7, // starting zoom
});


new mapboxgl.Marker()
    .setLngLat(campground.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({offset: 25})
        .setHTML(
            `<h3>${campground.title}</h3><p>${campground.location}</p>`
        )
    )
    .addTo(map);
