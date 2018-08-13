var Items = ["Bread", "Cola", "Cheese"];
var Prices = [2.00, 1.00, 1.50];
var Quantities = [0, 0, 0];
var total = 0;

function addToList(itemId) {
	var shoppingList = document.getElementById("shoppingList");

	var row = shoppingList.insertRow(1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	//var cell3 = row.insertCell(2);
	Quantities[itemId]++;
	cell1.innerHTML = Items[itemId];
	//cell2.innerHTML = Quantities[itemId];
	cell2.innerHTML = "$" + Prices[itemId].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

	total += Prices[itemId];

	//if (Quantities[itemId] === 0) {
	//	var row = shoppingList.insertRow(1);
	//	var cell1 = row.insertCell(0);
	//	var cell2 = row.insertCell(1);
	//	var cell3 = row.insertCell(2);
	//	Quantities[itemId]++;
	//	cell1.innerHTML = Items[itemId];
	//	cell2.innerHTML = Quantities[itemId];
	//	cell3.innerHTML = "$" + Prices[itemId].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
	//}
	//else {
	//	if (shoppingList.rows[1].cells[1].innerHTML == Items[itemId]) {
	//		shoppingList.deleteRow(1);
	//		var row = shoppingList.insertRow(1);
	//		var cell1 = row.insertCell(0);
	//		var cell2 = row.insertCell(1);
	//		var cell3 = row.insertCell(2);
	//		Quantities[itemId]++;
	//		cell1.innerHTML = Items[itemId];
	//		cell2.innerHTML = Quantities[itemId];
	//		cell3.innerHTML = "$" + Prices[itemId].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
	//	}
	//	else if (shoppingList.rows[2].cells[1].innerHTML == Items[itemId]) {
	//		shoppingList.deleteRow(2);
	//		var row = shoppingList.insertRow(2);
	//		var cell1 = row.insertCell(0);
	//		var cell2 = row.insertCell(1);
	//		var cell3 = row.insertCell(2);
	//		Quantities[itemId]++;
	//		cell1.innerHTML = Items[itemId];
	//		cell2.innerHTML = Quantities[itemId];
	//		cell3.innerHTML = "$" + Prices[itemId].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
	//	}
	//	else {
	//		shoppingList.deleteRow(3);
	//		var row = shoppingList.insertRow(3);
	//		var cell1 = row.insertCell(0);
	//		var cell2 = row.insertCell(1);
	//		var cell3 = row.insertCell(2);
	//		Quantities[itemId]++;
	//		cell1.innerHTML = Items[itemId];
	//		cell2.innerHTML = Quantities[itemId];
	//		cell3.innerHTML = "$" + Prices[itemId].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
	//	}
	//}


}

var checkouttime = 0;

function checkOut() {
	if (checkouttime === 0) {
		checkouttime++;
		var shoppingList = document.getElementById("shoppingList");
		shoppingList.innerHTML = "";

		var checkOut = document.getElementById("checkOut");
		var row = checkOut.insertRow(1);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		cell1.innerHTML = Items[0];
		cell2.innerHTML = Quantities[0];
		cell3.innerHTML = "$" + (Prices[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') * Quantities[0]);

		var row = checkOut.insertRow(1);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		cell1.innerHTML = Items[1];
		cell2.innerHTML = Quantities[1];
		cell3.innerHTML = "$" + (Prices[1].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') * Quantities[1]);

		var row = checkOut.insertRow(1);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		cell1.innerHTML = Items[2];
		cell2.innerHTML = Quantities[2];
		cell3.innerHTML = "$" + (Prices[2].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') * Quantities[2]);
		document.getElementById("total").innerText = "Total = $" + total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
	}
}