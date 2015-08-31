$(document).ready(function() {
  // Defining the interval for listening to changes (every 1 millisecond)
  // var interval = setInterval(listenForChanges, 1);

  // function listenForChanges() {

  //   // Getting the number of list items in the dropdown menu, and appending the amount to the text inside badge.
  //   var badgeCount = $("#dropdown-menu li.cart-item").length;
  //   $(".badge").text(badgeCount);

  //   if (badgeCount < 10) {
  //     $(".badge").addClass("badge-less-than-10");
  //   } else {
  //     $(".badge").removeClass("badge-less-than-10");
  //   }
  //   $(".badge").text(grandQuantity);
  // };

  // Disables horizontal scrolling in cart
  $('#dropdown-menu').perfectScrollbar({
    suppressScrollX: true
  });
  // Add product to the cart
  $("#addToCart").click(function() {
    $("#dropdown-menu").append("<li class='cart-item'>Sample Item</li><li role='separator' class='divider'></li>");
  });

  /* First cart item */

  // price1 var is equal to the text of whatever is in the .place class
  var price1 = $(".price1").text() * 1;

  // quantity1 var is equal to the text of whatever is in the .place class
  var quantity1 = parseInt($("input.quantity1").val());

  // add the price to the element with the class of .total
  $(".total1").append(price1);

  // When input with class of quantity is clicked,
  $("input.quantity1").click(function() {

    // Concatenate the string '$'' with the multiplication of the vars quantity1 and price1, and append it to the element with the class of .total. The toFixed method formats the number using fixed-point notation, in our case, two decimal places. Using jQuery helper plugin to add commas to numbers every three digits (plugins.js)

    $(".total1").text("$" + (quantity1 * price1).toFixed(2)).digits();


  });

  /* Second cart item */

  var leatherQuantity = parseInt($("#leather-quantity").text());
  var canvasQuantity = parseInt($("#canvas-quantity").text());
  var suedeQuantity = parseInt($("#suede-quantity").text());

  var quantity2 = leatherQuantity + canvasQuantity + suedeQuantity;

  var grandQuantity = quantity1 + quantity2;

  $("#total-quantity-item2").text(quantity2);

  $("#grand-quantity").text(grandQuantity);

  // Bind any changes of the input value.
  $("input.quantity1").bind("change", function() {
    quantity1 = parseInt($(this).val());
    $("#grand-quantity").text(quantity1 + quantity2);
  });





});