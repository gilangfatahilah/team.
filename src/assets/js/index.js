import DATA from "../data/DATA.json" assert { type: "json" };

// variables
const blogContent = document.querySelector("#cardRow");

// Function to get data and display results
const getdata = (data) => {
  let blogItem = "";

  data.blog.forEach((blogs) => {
    blogItem += `
      <div class="blog-item card p-0 " style="width : 23rem;">
        <div class="img-wrapper W-25">
          <img src="${blogs.picture}" class="py0 d-block w-100" alt="${blogs.name}">
        </div>
        <div class="card-body">
        <a href="template.html" class="text-decoration-none">
          <h5 class"card-title">${blogs.title}</h5>
        </a>  
          <p class="card-text py-2 fw-medium">${blogs.description}</p>
        <div class="user-profile d-flex align-items-center ">
          <img src="${blogs.profile}" class="d-block me-2" alt="${blogs.name}" />
          <p class ="fw-medium m-0">${blogs.name} | ${blogs.date}</p>
        </div>  
        </div>
      </div>`;
  });

  blogContent.innerHTML = blogItem;
};

getdata(DATA);
