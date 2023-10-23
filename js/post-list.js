let localStTitle = localStorage.getItem("title");
let localStCategory = localStorage.getItem("category");
let newsAPI = "https://65365803bb226bb85dd1f268.mockapi.io/api/v1/posts";

$(document).ready(() => {
  $.ajax({
    url: newsAPI,
    type: "GET",
    dataType: "json",
  }).done((response) => {
    let content = "";
    response.forEach((post) => {
      content += `
            <div class="row">
                <div class="col-12 col-lg-6">
                    <div class="post-thumbnail">
                    <img
                        class="post-img"
                        src="${post.image}"
                        alt=""
                    />
                    </div>
                </div>

                <div class="col-12 col-lg-6">
                    <div class="post-content">
                        <a href="" class="btn-decor">${post.category}</a>
                        <a href="" class="post-title">${post.title}</a>
                    <div class="post-meta">
                        <a href="" class="post-author">${post.author}</a>
                        <i class="ri-user-6-fill"></i>
                        <a href="" class="post-date">${post.date}</a>
                    </div>
                    <p class="content">
                        ${post.content}
                    </p>
                    <div class="post-meta d-flex">
                        <a href="#"><i class="ri-message-3-line"></i> ${post.numberOfComment}</a>
                        <a href="#"><i class="ri-eye-line"></i> ${post.numberOfWatch}</a>
                        <a href="#"><i class="ri-thumb-up-line"></i> ${post.numberOfLike}</a>
                    </div>
                    </div>
                </div>
            </div>
        `;
    });
    $(".render-area").html(content);
  });

  $(".render-area").click(() => {
    window.location.href = "../detail.html";
  });
});

localStorage.setItem("title", "");
localStorage.setItem("category", "");
