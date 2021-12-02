const grandWrap = () => {
  fetch(`https://api.pexels.com/v1/search?query=your-query`, {
    headers: {
      Authorization: "563492ad6f917000010000013e0f770e160941b08a1bfcaa8e7cabc6",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let newFotos = data["photos"];
      const photosContainer = document.getElementById("photos");
      // photosContainer.innerHTML = "";

      newFotos.forEach((element) => {
        let newDiv = `<div class="col-6 h-25"> 
          <div class="card">
            <img src=${element.src.medium} class="card-img-top img-fluid h-25" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Enough is enough.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            <small class="text-muted">${element.id}</small>
          </div> </div>`;
        photosContainer.innerHTML += newDiv;
      });
    });
};
// window.onload;
