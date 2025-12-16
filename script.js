const productForm = document.getElementById("productForm");
const productDisplay = document.getElementById("productDisplay");

productForm.addEventListener("submit", function (e) {
  e.preventDefault();

 
  const formData = {
    name: document.getElementById("productName").value,
    price: document.getElementById("price").value,
    description: document.getElementById("description").value,
    category: document.getElementById("category").value,
    ratings: document.getElementById("ratings").value,
    warranty: document.getElementById("warranty").value,
    company: document.getElementById("company").value,
    returnPolicy: document.getElementById("returnPolicy").value,
    imageFile: document.getElementById("imageFile").files[0],
  };

  if (formData.imageFile) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const imgSrc = e.target.result;

     
      const card = document.createElement("div");
      card.className = "col-md-6";
      card.innerHTML = `
        <div class="card product-card shadow-sm">
          <img src="${imgSrc}" class="card-img-top product-img" alt="${formData.name}">
          <div class="card-body">
            <h5 class="card-title">${formData.name}</h5>
            <p class="card-text"><strong>Price:</strong> $${formData.price}</p>
            <p class="card-text"><strong>Category:</strong> ${formData.category}</p>
            <p class="card-text"><strong>Rating:</strong> ${formData.ratings}/5</p>
            <p class="card-text"><strong>Warranty:</strong> ${formData.warranty}</p>
            <p class="card-text"><strong>Company:</strong> ${formData.company}</p>
            <p class="card-text"><strong>Return Policy:</strong> ${formData.returnPolicy}</p>
            <p class="card-text">${formData.description}</p>
          </div>
        </div>
      `;

      productDisplay.appendChild(card);
      productForm.reset();
    };
    reader.readAsDataURL(formData.imageFile);
  }
});
