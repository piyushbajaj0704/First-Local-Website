// JavaScript Document

var image=document.getElementById("1");

var imageArray=["folder2.jpg", "000-erin_mccarley-love_save_the_empty-(2009)-front.jpg",  			"AlbumArt.jpg",  "00-carly_rae_jepsen-tug_of_war-(2008)-front.jpg", "00-ciara-the_evolution-2006-ciara_front.jpg"];

var imageIndex= 0;

function changeImage() {
	image.setAttribute("src",imageArray[imageIndex]);
	imageIndex++;
	if(imageIndex >= imageArray.length) {
		imageIndex=0;
	}
}

var imageInterval= setInterval(changeImage,3800);



image.onclick = function() {
	clearInterval(imageInterval);	
};


var image2=document.getElementById("2");

var imageArray2=["madonna-mdna.jpg","Album Artwork.jpg","Ashley Tisdale-Guilty Pleasure [Front].jpg","boa2.jpg","boyce_avenue-00-all_we_have_left-web-2010-som.jpg"];

var imageIndex2= 0;

function changeImage2() {
	image2.setAttribute("src",imageArray2[imageIndex2]);
	imageIndex2++;
	if(imageIndex2 >= imageArray2.length) {
		imageIndex2=0;
	}
}
window.setTimeout(changeImage8,500);
var imageInterval2= setInterval(changeImage2,2500);



image2.onclick = function() {
	clearInterval(imageInterval2);	
};


var image3=document.getElementById("3");

var imageArray3=["IMG.jpg","Cov.jpg","Cover - I Created Disco.jpg","Cov (2).jpg","Cover (2).jpg"];

var imageIndex3= 0;

function changeImage3() {
	image3.setAttribute("src",imageArray3[imageIndex3]);
	imageIndex3++;
	if(imageIndex3 >= imageArray3.length) {
		imageIndex3=0;
	}
}

var imageInterval3= setInterval(changeImage3,3000);



image3.onclick = function() {
	clearInterval(imageInterval3);	
};

var image4=document.getElementById("4");

var imageArray4=["front_cover.jpg","Pixie Lott-Turn It Up [Front].jpg","frontal.jpg","lady antebellum-need you now.jpg","satur.jpg"];

var imageIndex4= 0;

function changeImage4() {
	image4.setAttribute("src",imageArray4[imageIndex4]);
	imageIndex4++;
	if(imageIndex4 >= imageArray4.length) {
		imageIndex4=0;
	}
}
window.setTimeout(changeImage8,1500);
var imageInterval4= setInterval(changeImage4,5000);



image4.onclick = function() {
	clearInterval(imageInterval4);	
};


var image5=document.getElementById("5");

var imageArray5=["00-T.I.-Paper.Trail.Retail-2008-COVER.jpg","front (2).jpg","Rihanna - Loud (2010) (mrsjs) - FRONT.jpg","USA Cover-Kings Of Leon-Only By The Night [Front].jpg","Nicole Scherzinger - Her Name Is Nicole.jpg","Eminem_Look_At_Me_Now-front-large.jpg"];

var imageIndex5= 0;

function changeImage5() {
	image5.setAttribute("src",imageArray5[imageIndex5]);
	imageIndex5++;
	if(imageIndex5 >= imageArray5.length) {
		imageIndex5=0;
	}
}
window.setTimeout(changeImage8,4000);
var imageInterval5= setInterval(changeImage5,2600);



image5.onclick = function() {
	clearInterval(imageInterval5);	
};


var image6=document.getElementById("6");

var imageArray6=["000_david_guetta_-_one_more_love-web-2010.jpg","Unwritten - Natasha Bedingfield (Front) [2004].jpg","The Fray-How To Save A Life [Front].jpg","Two Door Cinema Club - (2010) - Tourist History.jpg","Front.jpg","Cover Front.jpg"];

var imageIndex6= 0;

function changeImage6() {
	image6.setAttribute("src",imageArray6[imageIndex6]);
	imageIndex6++;
	if(imageIndex6 >= imageArray6.length) {
		imageIndex6=0;
	}
}
window.setTimeout(changeImage8,1000);
var imageInterval6= setInterval(changeImage6,7000);



image6.onclick = function() {
	clearInterval(imageInterval6);	
};


var image7=document.getElementById("7");

var imageArray7=["cover.jpg","Flo Rida-R.O.O.T.S [Front].jpg","Life In Cartoon Motion - Mika.jpg","y8zke.jpg"];

var imageIndex7= 0;

function changeImage7() {
	image7.setAttribute("src",imageArray7[imageIndex7]);
	imageIndex7++;
	if(imageIndex7 >= imageArray7.length) {
		imageIndex7=0;
	}
}
window.setTimeout(changeImage8,1000);
var imageInterval7= setInterval(changeImage7,6000);



image7.onclick = function() {
	clearInterval(imageInterval7);	
};



var image8=document.getElementById("8");

var imageArray8=["5872314.jpg","Dignity[www.CienPorCien.Music.com].jpg","cover123.jpg","Havana Brown - We Run The Night (Explicit) ft. Pitbull - Sebastian[Ub3r].jpg","Sean Paul [Imperial Blaze] Front.jpg"];

var imageIndex8= 0;

function changeImage8() {
	image8.setAttribute("src",imageArray8[imageIndex8]);
	imageIndex8++;
	if(imageIndex8 >= imageArray8.length) {
		imageIndex8=0;
	}
}
 
var imageInterval8= setInterval(changeImage8,4000);


image8.onclick = function() {
	
	clearInterval(imageInterval8);
		
};
