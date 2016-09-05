angular.module('devmtnTravel').service('mainSrv', function(){

    this.travelInfo = [{
        city: 'Gallimimus Valley',
        country: 'Isla Nublar',
        image: "http://www.jurassicworld.com/media/map/locations/gallimimus-valley/gallery/gallimimus-running-by-truck.jpg",
        desc: 'Home to the Empire State Building, Times Square, Statue of Liberty and other iconic sites, New York City is a fast-paced, globally influential center of art, culture, fashion and finance',
        id: 112233,
        price: "134,500"

    }, {
        city: 'Innovation Center',
        country: 'Isla Nublar',
        image: "http://mms.businesswire.com/media/20150601005854/en/470209/5/jp4_r1v32_dom_0424_150429_25mj_g_srgb_099239_crop.jpg",
        desc: "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its picturesque 19th-century cityscape is crisscrossed by wide boulevards and the River Sein",
        id: 1122343,
        price: "90,900"
    },{
        city: 'Gyrosphere',
        country: 'Isla Nublar',
        image: "http://vignette1.wikia.nocookie.net/jurassicpark/images/b/bb/Gyrosphere.jpg/revision/latest/scale-to-width-down/1280?cb=20150606030102",
        desc: "Sydney, capital of New South Wales and one of Australia's largest cities, is best known for its harbourfront Opera House, with a distinctive sail-like design. Massive Darling Harbour and Circular Qua",
        id: 11223489,
        price: "111,200"


    }];
});
