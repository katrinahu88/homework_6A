//Image changes when glaze type is selected
function chooseglaze() {
	var x = document.getElementById('glaze').value;
	if (x == "none") {
		document.getElementById('cinnaroll').src= 'images/noglaze.jpg';
	}
	if (x == "sugar milk") {
		document.getElementById('cinnaroll').src= 'images/originalroll.jpg';
	}
	if (x == "vanilla milk") {
		document.getElementById('cinnaroll').src= 'images/vanillamilkglaze.jpg';
	}
	if  (x == "double chocolate") {
		document.getElementById('cinnaroll').src= 'images/chocolateglaze.jpg';
	}
}

//Total price changes when quantity is selected
function pricechange() {
	var x = document.getElementById('quantity').value;
	if (x == "1") {
		document.getElementById('price').innerHTML= "Total: $2.99";
	}
	if (x == "3") {
		document.getElementById('price').innerHTML= "Total: $8.97";
	}
	if (x == "6") {
		document.getElementById('price').innerHTML= "Total: $17.94";
	}
	if  (x == "12") {
		document.getElementById('price').innerHTML= "Total: $35.88";
	} 
}

//Quantity in cart is updated when "Add to Cart" button pressed
var i = 0;
function addtocart() {
	document.getElementById('itemCount').innerHTML = "Cart (" + (++i) + ")";

}
