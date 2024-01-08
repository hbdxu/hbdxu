// let hbThreeLeft = document.querySelectorAll("#hb-three .hb-three-left")[0];
// let hbThreeLeftOnclick = document.createAttribute("onclick");
// hbThreeLeftOnclick.nodeValue = "location.href='./html/hb-404.html'";
// hbThreeLeft.attributes.setNamedItem(hbThreeLeftOnclick);


// let hbThreeRightImg = document.querySelectorAll("#hb-three .hb-three-rightImg")[0];
// let hbThreeRightImgOnclick = document.createAttribute("onclick");
// hbThreeRightImgOnclick.nodeValue = "location.href='./html/hb-404.html'";
// hbThreeRightImg.attributes.setNamedItem(hbThreeRightImgOnclick);


// let img1 = document.querySelectorAll("#hb-three .hb-three-box img")[0];
// let img1Onclick = document.createAttribute("onclick");
// img1Onclick.nodeValue = "location.href='./html/hb-404.html'";
// img1.attributes.setNamedItem(img1Onclick);

// let img2 = document.querySelectorAll("#hb-three .hb-three-box img")[1];
// let img2Onclick = document.createAttribute("onclick");
// img2Onclick.nodeValue = "location.href='./html/hb-404.html'";
// img2.attributes.setNamedItem(img2Onclick);

// let img3 = document.querySelectorAll("#hb-three .hb-three-box img")[2];
// let img3Onclick = document.createAttribute("onclick");
// img3Onclick.nodeValue = "location.href='./html/hb-404.html'";
// img3.attributes.setNamedItem(img3Onclick);

let ImgClick0 = function ImgClick0() {
    $('.hb-three-box img:eq(1)').removeClass("hb-three-white");
    $('.hb-three-box img:eq(2)').removeClass("hb-three-white");

    $('.hb-three-box img:eq(0)').addClass("hb-three-white");

    // 进入展示页面
    // $('.hb-three-right p:eq(0)').text('让我的眼睛见证今后的战斗！'); //建立第0个内容
    // $('.hb-three-right p:eq(1)').text('夏侯惇'); //建立第0个内容
    // $('.hb-three-right a').html('<a href="./html/other/hb-three-left-5.html">hbdxu</a>'); //建立第0个内容
    // $('.hb-three-left').html(' <a href="./html/other/hb-three-left-5.html"><img src="./images/hb-three-botton-5.png" alt="夏侯惇"></a>');
    $('.hb-three-right p:eq(0)').text('我们从不停歇。'); //建立第0个内容
    $('.hb-three-right p:eq(1)').text('俄洛伊'); //建立第0个内容
    $('.hb-three-right a').html('<a href="./html/other/hb-three-left-6.html">全点丶阵容</a>'); //建立第0个内容
    $('.hb-three-left').html(' <a href="./html/other/hb-three-left-6.html"><img src="./images/hb-three-botton-6.png" alt="俄洛伊"></a>');

}
let ImgClick1 = function ImgClick1() {
    $('.hb-three-box img:eq(2)').removeClass("hb-three-white");
    $('.hb-three-box img:eq(0)').removeClass("hb-three-white");

    $('.hb-three-box img:eq(1)').addClass("hb-three-white");
    // 进入展示页面
    // $('.hb-three-right p:eq(0)').text('水晶无法提高掉宝率，我的暗刃可以。'); //建立第1个内容
    // $('.hb-three-right p:eq(1)').text('暗隐猎兽者'); //建立第1个内容
    // $('.hb-three-right a').html('<a  href="./html/other/hb-three-left-4.html">hbdxu丨全点</a>');
    // $('.hb-three-left').html('<a href="./html/other/hb-three-left-4.html"><video src="./mp4/hb-three-botton-4.mp4" controls></video></a>');
    $('.hb-three-right p:eq(0)').text('让我的眼睛见证今后的战斗！'); //建立第1个内容
    $('.hb-three-right p:eq(1)').text('夏侯惇'); //建立第1个内容
    $('.hb-three-right a').html('<a  href="./html/other/hb-three-left-5.html">hbdxu</a>');
    $('.hb-three-left').html(' <a href="./html/other/hb-three-left-5.html"><img src="./images/hb-three-botton-5.png" alt="夏侯惇"></a>');
}
let ImgClick2 = function ImgClick2() {
    $('.hb-three-box img:eq(0)').removeClass("hb-three-white");
    $('.hb-three-box img:eq(1)').removeClass("hb-three-white");

    $('.hb-three-box img:eq(2)').addClass("hb-three-white");
    // 进入展示页面
    // $('.hb-three-right p:eq(0)').text('hbdxu的星球资源已经冲出地球向外界发声，旨在让普通大众也有机会冲出地球寻找自己的那一片星空。'); //建立第2个内容
    // $('.hb-three-right p:eq(1)').text('hbdxu星球计划'); //建立第2个内容
    // $('.hb-three-right a').html('<a class="three-right-p" href="">全体人员</a>');
    // $('.hb-three-left').html('<img src="./images/hb-three-botton-1.png" alt="hbdxu球星计划">');
    $('.hb-three-right p:eq(0)').text('水晶无法提高掉宝率，我的暗刃可以。'); //建立第2个内容
    $('.hb-three-right p:eq(1)').text('暗隐猎兽者'); //建立第2个内容
    $('.hb-three-right a').html('<a  href="./html/other/hb-three-left-4.html">hbdxu丨全点</a>');
    $('.hb-three-left').html('<a href="./html/other/hb-three-left-4.html"><video src="./mp4/hb-three-botton-4.mp4" controls></video></a>');
}
$('.hb-three-rightImg').map(function () {
    $('.hb-three-box img:eq(0)').click(function () {
        ImgClick0();
    })
    $('.hb-three-box img:eq(1)').click(function () {
        ImgClick1();

    })
    $('.hb-three-box img:eq(2)').click(function () {
        ImgClick2();

    })
})

$('.hb-three-rightImg').map(function () {
    let i = 0;
    $('.hb-three-rightImg').click(function () {
        i++;
        // 进行索引判断

        if (i == 3 || i == 0) {
            i = 0;
            ImgClick0();
        }

        if (i == 1) {
            ImgClick1();
        }

        if (i == 2) {
            ImgClick2();
        }

    })
})