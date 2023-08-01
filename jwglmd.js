// ==UserScript==
// @name         泉州信息工程学院教务系统MD化
// @namespace
// @version      1.0
// @description  泉州信息工程学院教务系统MD化，基于mdui框架
// @author       Steve5wutongyu6
// @match        http://jwgl.qziedu.cn/*
// @match        http://jwgl.qziedu.cn/jsxsd/*
// @exclude      http://jwgl.qziedu.cn/jsxsd/xsxk/*
// @exclude      http://jwgl.qziedu.cn/jsxsd/xsxkjg/*
// @exclude      http://jwgl.qziedu.cn/jsxsd/xsxkkc/comeInBxxk
// @exclude      http://jwgl.qziedu.cn/jsxsd/xsxkkc/comeInXxxk
// @grant        none
// ==/UserScript==


(function () {
  'use strict';
  var color = "mdui-color-blue-grey-800";
  var colorNav = "mdui-color-blue-grey";
  var colorBackground = "mdui-color-blue-grey-50";
  // 首页净化
  var personalBanner = document.querySelector('.personal-banner');
  if (personalBanner) {
    personalBanner.remove();
  }
  var elementsToRemove = document.querySelectorAll('.personal-height-tab, .personal-height32 ');

  // 遍历并移除每个元素
  elementsToRemove.forEach(function (element) {
    element.remove();
  });
  //全局
  $("body").append(`
  <script src='https://cdn.bootcdn.net/ajax/libs/mdui/1.0.2/js/mdui.min.js'></script>
  <style>
    @import url('https://cdn.bootcdn.net/ajax/libs/mdui/1.0.2/css/mdui.min.css');
    @import url('https://www.mikolo.top/qziedumd/style.css');
  </style>
`);
  $("body").addClass(colorBackground); //我的桌面
  $("select").addClass("mdui-select");//下拉框
  $("input").addClass("mdui-textfield-input");//输入框
  $("button").addClass("mdui-btn").addClass("mdui-btn-raised");
  $("textarea").addClass("mdui-textfield-input");//文本框



  /**
   * 顶部条
   */
  $(".edu-navBar").addClass(colorNav).addClass("mdui-shadow-3");
  $(".icon-tab-left").replaceWith('<i class="mdui-icon material-icons" id="scrollLeft">chevron_left</i>'); //不过这两个按钮好像不起作用
  $(".icon-tab-right").replaceWith('<i class="mdui-icon material-icons" id="scrollRight">chevron_right</i>'); //不过这两个按钮好像不起作用
  $(".icon-alarm").replaceWith('<i class="mdui-icon material-icons" onclick="showMenuErji_menu(\'PTWH\',\'/ggly/xxtz_query\',\'消息通知\',3)">notifications</i>'); //消息通知图标
  /**
   * 侧边栏
   */
  $(".edu-aside").addClass(color).addClass("mdui-shadow-24"); //主背景
  $(".edu-bg-balck .accordion").addClass(color); //列表背景
  $(".edu-bg-balck .accordion>li>.link").addClass(color); //列表文字
  //列表图标
  $(".link .icon-xitongguanli").replaceWith('<i class="mdui-icon material-icons">home</i>'); //我的桌面
  $(".link .icon-chengjiguanli").replaceWith('<i class="mdui-icon material-icons">assignment</i>'); //学籍成绩
  $(".link .icon-biyeguanli").replaceWith('<i class="mdui-icon material-icons">person_pin</i>'); //培养管理
  $(".link .icon-peiyangfangan").replaceWith('<i class="mdui-icon material-icons">create</i>'); //考试报名
  $(".link .icon-zhuanjiazhandian").replaceWith('<i class="mdui-icon material-icons">gavel</i>'); //实践环节
  $(".link .icon-yuanxipinggu").replaceWith('<i class="mdui-icon material-icons">school</i>'); //教学评价
  $(".link .jiaoliushengguanli").replaceWith('<i class="mdui-icon material-icons">record_voice_over</i>'); //交流申请
  //缩小页面宽度
  document.body.style.maxWidth = 600;
  document.body.style.minWidth = 600;
  width = 600;
  /**
  * 侧边栏
  */
  $(".edu-aside").addClass(color).addClass("mdui-shadow-24"); //主背景
  $(".edu-bg-balck .accordion").addClass(color); //列表背景
  $(".edu-bg-balck .accordion>li>.link").addClass(color); //列表文字
  //列表图标
  $(".link .icon-xitongguanli").replaceWith('<i class="mdui-icon material-icons">home</i>'); //我的桌面
  $(".link .icon-chengjiguanli").replaceWith('<i class="mdui-icon material-icons">assignment</i>'); //学籍成绩
  $(".link .icon-biyeguanli").replaceWith('<i class="mdui-icon material-icons">person_pin</i>'); //培养管理
  $(".link .icon-peiyangfangan").replaceWith('<i class="mdui-icon material-icons">create</i>'); //考试报名
  $(".link .icon-zhuanjiazhandian").replaceWith('<i class="mdui-icon material-icons">gavel</i>'); //实践环节
  $(".link .icon-yuanxipinggu").replaceWith('<i class="mdui-icon material-icons">school</i>'); //教学评价
  $(".link .jiaoliushengguanli").replaceWith('<i class="mdui-icon material-icons">record_voice_over</i>'); //交流申请
  /**
  * 网站主体（嵌套）
  */
  $("#Frame0").attr('frameborder', 0);

  //顶部条
  $(".edu-navBar").addClass(colorNav).addClass("mdui-shadow-3");
  $(".icon-tab-left").replaceWith('<i class="mdui-icon material-icons" id="scrollLeft">chevron_left</i>'); //不过这两个按钮好像不起作用
  $(".icon-tab-right").replaceWith('<i class="mdui-icon material-icons" id="scrollRight">chevron_right</i>'); //不过这两个按钮好像不起作用
  $(".icon-alarm").replaceWith('<i class="mdui-icon material-icons" onclick="showMenuErji_menu(\'PTWH\',\'/ggly/xxtz_query\',\'消息通知\',3)">notifications</i>'); //消息通知图标
  //卡片
  $(".personal-common").addClass("mdui-card")
  //页面主标题
  var pageTitle = $(".Nsb_layout_r .title").text();
  $(".Nsb_layout_r .title").replaceWith('<div class="mdui-tab" mdui-tab><a class="mdui-ripple mdui-tab-active">' + pageTitle + '</a></div>');
  //表格
  $('.layui-table').addClass('mdui-table').addClass('mdui-table-hoverable').removeClass('layui-table');

})();
