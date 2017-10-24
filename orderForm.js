//Indexing Form
var theForm = document.forms["productInfo"];
var shippingForm = document.forms["shippingInfo"];
var billingForm = document.forms["billingInfo"];
var creditForm = document.forms["creditInfo"];

//Getting Price from the slected roeduct
var productPrice = new Array();
productPrice["product1"] = 30;
productPrice["product2"] = 50;

function getProductPrice() {
	var price = 0;
	var selectedProduct = theForm.elements["product"];
	price = productPrice[selectedProduct.value];
	return price;
}

//Getting quantity
var quantityArray = new Array();
quantityArray["one"] = 1;
quantityArray["two"] = 2;
quantityArray["three"] = 3;
quantityArray["four"] = 4;
quantityArray["five"] = 5;

function getquantity() {
	var quantityCount = 1;
	var selectedQuantity = theForm.elements["quantity"];
	quantityCount = quantityArray[selectedQuantity.value];
	return quantityCount;
}

//Calculating Shipping Cost
var shippingArray = new Array();
shippingArray["standard"] = 7.95;
shippingArray["express"] = 9.95;
shippingArray["nextDay"] = 12.95;

function getShippingPrice() {
	var shippingPrice = 0;
	var selectedShipping = theForm.elements["optradio"];
	for (var i = 0; i < selectedShipping.length; i++) {
		if (selectedShipping[i].checked) {
			shippingPrice = shippingArray[selectedShipping[i].value];
			break;
		}
	}
	return shippingPrice;
}

function calculateTotal() {
	var price = getProductPrice() *  getquantity();
	var tax = price * 0.06
	var shipping = getShippingPrice();
	var total = price+tax+shipping;
	document.getElementById('productTotal').value = "$" + price
	document.getElementById('njTax').value = "$" + tax;
	document.getElementById('shipping').value = "$" + shipping;
	document.getElementById('total').value = "$" + total;
	}

// Function for making billing address and shipping address same
function sameAddress(checked) {
	if (checked) {
		document.getElementById('billing_name').value = document.getElementById('shipping_name').value;
		document.getElementById('billing_street').value = document.getElementById('shipping_street').value;
		document.getElementById('billing_city').value = document.getElementById('shipping_city').value;
		document.getElementById('billing_state').value = document.getElementById('shipping_state').value;
		document.getElementById('billing_zip').value = document.getElementById('shipping_zip').value;
		}

	else {
		document.getElementById('billing_name').value = "";
		document.getElementById('billing_street').value = "";
		document.getElementById('billing_city').value = "";
		document.getElementById('billing_state').value = "";
		document.getElementById('billing_zip').value = "";
	}
}

//Reseting Form
function resetForm() {
	document.getElementById('productInfo').reset();
}

function submitForm() {
	var ask = window.confirm("Are you sure you want to submit the Form?");
    if (ask) {
        window.alert("Form has been Submitted");

     }
}

 
