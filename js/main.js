$(document).ready(function() {

  // Disables horizontal scrolling in cart
  $('#dropdown-menu').perfectScrollbar({
    suppressScrollX: true
  });

  /* First cart item */

  // price1 var is equal to the text of whatever is in the .price1 class
  var price1 = $(".price1").text();
  var total1 = (quantity1 * price1).toFixed(2);
  // quantity1 var is equal to the text of whatever is in the .price1 class
  var quantity1 = parseInt($("input.quantity1").val());

  // add the price to the element with the class of .total
  $(".total1").append(price1);

  // Bind any changes of the input value.
  $("input.quantity1").bind("change click", function() {
    // Concatenate the string '$'' with the multiplication of the vars quantity1 and price1, and append it to the element with the class of .total. The toFixed method formats the number using fixed-point notation, in our case, two decimal places. Using jQuery helper plugin to add commas to numbers every three digits (plugins.js)
    $(".total1").text((quantity1 * price1).toFixed(2));
    quantity1 = parseInt($(this).val());

    $(".grand-quantity").text(quantity1 + quantity2);
    var total1 = (quantity1 * price1).toFixed(2);

    /* Sub Total */

    var subtotal = (parseFloat(total1) + total2).toFixed(2);
    $("#subtotal").text(subtotal);

  });

  /* Second cart item */

  var leatherQuantity = parseInt($("#leather-quantity").text());
  var canvasQuantity = parseInt($("#canvas-quantity").text());
  var suedeQuantity = parseInt($("#suede-quantity").text());

  var quantity2 = leatherQuantity + canvasQuantity + suedeQuantity;

  $("#total-quantity-item2").text(quantity2);

  var leatherCost = $("#leather-cost").text();
  var convertedLeatherCost = Number(leatherCost.replace(/[^0-9\.]+/g, ""));

  var canvasCost = $("#canvas-cost").text();
  var convertedCanvasCost = Number(canvasCost.replace(/[^0-9\.]+/g, ""));

  var suedeCost = $("#suede-cost").text();
  var convertedSuedeCost = Number(suedeCost.replace(/[^0-9\.]+/g, ""));

  var total2 = convertedLeatherCost + convertedCanvasCost + convertedSuedeCost;

  $(".total2").text("$" + total2).digits();

  /* Badge Counter */
  var grandQuantity = quantity1 + quantity2;

  $(".grand-quantity").text(grandQuantity);


});