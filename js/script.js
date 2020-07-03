history.pushState(null, null, null);

window.addEventListener("popstate", function () {
  history.pushState(null, null, null);
});

// smooth scroll
$(function () {
  $('a[href^="#"]').click(function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

$(".-ebisu").on("click", function (event) {
  var anyText = "東京都渋谷区恵比寿西1-7-13 スイングビル4F";
  var textBox = document.createElement("textarea");
  textBox.setAttribute("id", "target");
  textBox.setAttribute("type", "hidden");
  textBox.textContent = anyText;
  document.body.appendChild(textBox);
  textBox.select();
  document.execCommand("copy");
  document.body.removeChild(textBox);
  alert("住所をコピーしました");
});

$(".-ginza").on("click", function (event) {
  var anyText = "東京都中央区銀座2-13-13 久保ビル2F";
  var textBox = document.createElement("textarea");
  textBox.setAttribute("id", "target");
  textBox.setAttribute("type", "hidden");
  textBox.textContent = anyText;
  document.body.appendChild(textBox);
  textBox.select();
  document.execCommand("copy");
  document.body.removeChild(textBox);
  alert("住所をコピーしました");
});

$("label").on("click", function () {
  $(this).toggleClass("anseroff");
});

// 全角を半角に
$("#numonly")
  .change(function () {
    var str = $(this).val();
    str = str.replace(
      /[Ａ-Ｚａ-ｚ０-９－！”＃＄％＆’（）＝＜＞，．？＿［］｛｝＠＾～￥]/g,
      function (s) {
        return String.fromCharCode(s.charCodeAt(0) - 65248);
      }
    );
    $(this).val(str.replace(/[^0-9]/g, ""));
  })
  .change();

$("#mailadd")
  .change(function () {
    var str = $(this).val();
    str = str.replace(
      /[Ａ-Ｚａ-ｚ０-９－！”＃＄％＆’（）＝＜＞，．？＿［］｛｝＠＾～￥]/g,
      function (s) {
        return String.fromCharCode(s.charCodeAt(0) - 65248);
      }
    );
    $(this).val(str);
  })
  .change();

$.datetimepicker.setLocale("ja");

var logic = function (currentDateTime) {
  // 'this' is jquery object datetimepicker
  if (
    currentDateTime.getDay() == 6 ||
    currentDateTime.getDay() == 0 ||
    Holiday.getHolidayName(new Date(currentDateTime)) !== ""
  ) {
    this.setOptions({
      step: 30,
      minTime: "10:00",
      maxTime: "18:45",
    });
  } else
    this.setOptions({
      step: 30,
      minTime: "12:00",
      maxTime: "20:45",
    });
};

$("#reserve-1").datetimepicker({
  onChangeDateTime: logic,
  onShow: logic,
});
$("#reserve-2").datetimepicker({
  onChangeDateTime: logic,
  onShow: logic,
});

$(".isview").on("inview", function (event, isInView) {
  if (isInView) {
    $("#floatcta").fadeOut(300);
  } else {
    $("#floatcta").fadeIn(300);
  }
});

$(".noview").on("inview", function (event, isInView) {
  if (isInView) {
    $("#floatcta").fadeOut(300);
  }
});

// slide down
$(".faq__questionWrapper").click(function () {
  if (!$(this).hasClass("isOpen")) {
    $(this).next().slideDown();
    $(this).addClass("isOpen");
  } else {
    $(this).next().slideUp();
    $(this).removeClass("isOpen");
  }
  $(".faq__iconVertical", this).toggle();
});

// modal
$(function () {
  $(".linkButton.-tel").on("click", function () {
    $(".js-modal").fadeIn();
    return false;
  });
  $(".js-modal-close").on("click", function () {
    $(".js-modal").fadeOut();
    return false;
  });
});

var $elem = $(".js-image-switch");
var sp = "-sp.";
var pc = "-pc.";
var replaceWidth = 1024;

function imageSwitch() {
  var windowWidth = parseInt($(window).width());

  $elem.each(function () {
    var $this = $(this);
    if (windowWidth >= replaceWidth) {
      $this.attr("src", $this.attr("src").replace(sp, pc));
    } else {
      $this.attr("src", $this.attr("src").replace(pc, sp));
    }
  });
}
imageSwitch();

var resizeTimer;
$(window).on("resize", function () {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function () {
    imageSwitch();
  }, 200);
});
