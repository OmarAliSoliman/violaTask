$(document).ready(function () {
  // choses-slider

  new WOW().init();

  if ($(".bg-sidenavOpen").length) {
    $(".bg-sidenavOpen").on("click", function () {
      $("#mySidenav").css("left", "-400px");
      $(this).css("display", "none");
      document.body.classList.remove("openMenuActive");
    });
  }

  $(window).scroll(() => {
    if ($(this).scrollTop() > 20) {
      $(".mynavbar").addClass("fixed-navbar");
      $("#floating").css("opacity", "1");
    } else {
      $(".mynavbar").removeClass("fixed-navbar");
      $("#floating").css("opacity", "0");
    }
  });

  $("#floating").click(() => {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      50
    );
  });

  var swiper = new Swiper(".headerSwiper", {  
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    speed: 1200,
    effect: 'fade',
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      init: function () {
        $(".swiper-progress-bar").removeClass("animate");
        $(".swiper-progress-bar").removeClass("active");
        $(".swiper-progress-bar").eq(0).addClass("animate");
        $(".swiper-progress-bar").eq(0).addClass("active");
      },
      slideChangeTransitionStart: function () {
        $(".swiper-progress-bar").removeClass("animate");
        $(".swiper-progress-bar").removeClass("active");
        $(".swiper-progress-bar").eq(0).addClass("active");
      },
      slideChangeTransitionEnd: function () {
        $(".swiper-progress-bar").eq(0).addClass("animate");
      },
    },
  });


  var swiper = new Swiper('.mySwiper', {
    // slidesPerView: 4,
    spaceBetween: 40,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });



  if ($(".formStyle").length) {
    $(".formStyle .form-control").on("focus", function () {
      $(this).parent(".form-group").find("label").addClass("activeInput");
      console.log("foces");
    });

    $(".formStyle .form-control").on("blur", function () {
      $(this).parent(".form-group").find("label").removeClass("activeInput");
      console.log("foces");
    });
  }




});

function openNav() {
  document.getElementById("mySidenav").style.left = "0";
  document.querySelector(".bg-sidenavOpen").style.display = "block";
  document.body.classList.add("openMenuActive");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.left = "-400px";
  document.querySelector(".bg-sidenavOpen").style.display = "none";
  document.body.classList.remove("openMenuActive");
}

if ($(".slideImg").length) {
  var headertImg = document.querySelectorAll(".slideImg");
  headertImg.forEach((es)=>{
    var parallaxInstance = new Parallax(es);
  })
}

const splash = 	document.querySelector(".splash");

document.addEventListener("DOMContentLoaded",(e)=> {
	setTimeout(()=> {
		splash.classList.add("displayNone");
	})
});
