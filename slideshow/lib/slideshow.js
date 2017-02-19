(function () {

var mygallery=new fadeSlideShow({
	wrapperid: "fadeshow1", //ID of blank DIV on page to house Slideshow
	dimensions: [596, 375], //width/height of gallery in pixels. Should reflect dimensions of largest image
	imagearray: [
		["./app/assets/images/Sharpie_Bird.png", "", "", ""],
		["./app/assets/images/Sharpie_Bird.png", "", "", ""],
		["./app/assets/images/Sharpie_Bird.png", "", "", ""],
		["./app/assets/images/Sharpie_Bird.png", "", "", ""],
		["./app/assets/images/Sharpie_Bird.png", "", "", ""],
		["./app/assets/images/Sharpie_Bird.png", "", "", ""],
		["./app/assets/images/Sharpie_Bird.png", "", "", ""] //<--no trailing comma after very last image element!
	],
	displaymode: {type:'auto', pause:2000, cycles:0, wraparound:false},
	persist: false, //remember last viewed slide and recall within same session?
	fadeduration: 3000, //transition duration (milliseconds)
	descreveal: "ondemand",
	togglerid: ""
  })

})();
