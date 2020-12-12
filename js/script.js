$(".ask").on("click", function (param) {
    param.preventDefault();
    $(this).toggleClass("active").next().stop().slideToggle(500);
    $(".answer").not($(this).next()).slideUp(500)
    $(".ask").not(this).removeClass("active")
})
$("button[data-filter]").click(function () {
    $("div[data-filter]").stop().slideUp(500);
    let color = $(this).attr("data-filter");
    $(`div[data-filter = ${color}]`).stop().slideDown(500)
    if (color == "all") {
        $("div[data-filter]").stop().slideDown(500);
    }
    $(this).addClass("active");
    $("button[data-filter]").not(this).removeClass("active");

})

function typing(element) {
    if (typeof element == "string") {
        let inner = $(element).html()
        let fullText = "";
        let counter = 0;
        let interval = setInterval(() => {
            fullText += inner[counter]
            $(element).html(fullText)
            counter++;
            if (fullText == inner) {
                clearInterval(interval)
                setTimeout(() => {
                    typing(element)
                }, 1000);
            }

        }, 100);
    }
}

typing("h1");

$(".js-modal-show").click(function (even) {
    even.preventDefault()
    $(".modal").fadeIn()
})
$(".close").click(function (e) {
    e.preventDefault()
    $(".modal").fadeOut(500)
})

$(".modal").click(function (e) {
    e.preventDefault();
    if (e.target == this) {
        $(".modal").fadeOut(500)
    }

})

$(".nav").css({
    position: "fixed",
    width: "100%",
    top: $(window).height() - $(".nav").outerHeight(),
    "z-index": 999
})

$(window).on("scroll", function () {
    let editPosition = $(window).height() - $(".nav").outerHeight() - $(window).scrollTop();
    if (editPosition > 0) {
        $(".nav").css("top", editPosition)
    } else {
        $(".nav").css("top", 0)
    }
})
/* Задание 1
При нажатии на ссылку “Read More” у текста с классом “text-hidden” должен удалиться класс “hidden”, чтобы отобразился текст. А у ссылки должен поменяться текст на “Hidden”. При повторном нажатии на эту же ссылку текст должен опять скрыться и у ссылки должен вернуться текст по умолчанию. */

$(".read-more").click(function (evenObj) {
    evenObj.preventDefault();
    if ($(this).html() == "Read More") {
        $("span").removeClass("hidden")
        $(this).html("Hidden")

    } else {
        $("span").addClass("hidden")
        $(this).html("Read More")
    }
})