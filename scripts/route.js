document.addEventListener("DOMContentLoaded", function () {
  // Get all elements with the class "items"
  const productItems = document.querySelectorAll(".items");

  // Add click event listener to each product item
  productItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Get product details from the clicked item
      const productName = item.querySelector(".detail p").innerText;
      const productRate = item.querySelector(".detail .rate").innerText;
      const productRating = item.querySelector(".detail .rating").innerText;

      // Get the background image of the clicked item
      const backgroundImage = window
        .getComputedStyle(item.querySelector("#image"))
        .getPropertyValue("background-image");

      // Construct a URL for the product page with parameters
      const newPageURL = `product.html?name=${encodeURIComponent(
        productName
      )}&rate=${encodeURIComponent(productRate)}&rating=${encodeURIComponent(
        productRating
      )}&image=${encodeURIComponent(backgroundImage)}`;

      // Navigate to the product page with the details
      window.location.href = newPageURL;
    });
  });
});
