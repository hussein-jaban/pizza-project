const totalOrder = [];
const orderSummary = $("#order-summary");
const tot = $("#total-price");

const prices = {
  small: 500,
  medium: 900,
  large: 1200,
};
let total = 0;

$("form").submit(function (event) {
  event.preventDefault();
  const fd = new FormData(this);
  const orderLine = {
    type: fd.get("type"),
    flavour: fd.get("flavour"),
    size: fd.get("size"),
    qty: fd.get("qty"),
    toppings: fd.getAll("toppings"),
    cost: prices[fd.get("size")],
  };
  total += parseFloat(prices[fd.get("size")]);
  totalOrder.push(orderLine);
  orderSummary.append(`
        <tr>
            <td>${orderLine.type}</td>
            <td>${orderLine.flavour}</td>
            <td>${orderLine.size}</td>
            <td>${orderLine.qty}</td>
            <td>${orderLine.toppings.join()}</td>
            <td>${orderLine.cost}</td>
            <td><button class='btn-remove'>Remove</button></td>
        </tr>
    `);
  tot.html(`<strong>KSH${total}</strong>`);
});

$("#tbl").on("click", ".btn-remove", function () {
  $(this).closest("tr").remove();
});

$("#checkout").on("click", () => {
  if (total === 0) {
    return alert("Invalid data");
  } else {
    prompt("enter your email address");
    prompt("enter your phone number");
    prompt("enter your location");
    alert(
      "Delivery time will be 30 mins and delivery fee is Ksh100. Thank you."
    );
  }
});
