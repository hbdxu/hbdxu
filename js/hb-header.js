let hbdxu = document.getElementsByClassName("hb-hbdxu")[0];
hbdxu.onclick = function () {
    window.location.reload();
}

 let why = document.getElementById("why");
 let whyOnclick = document.createAttribute("onclick");
 whyOnclick.nodeValue = "location.href='./html/hb-404.html'";
 why.attributes.setNamedItem(whyOnclick);

 let where = document.getElementById("where");
 let whereOnclick = document.createAttribute("onclick");
 whereOnclick.nodeValue = "location.href='./html/hb-404.html'";
 where.attributes.setNamedItem(whereOnclick);

 let when = document.getElementById("when");
 let whenOnclick = document.createAttribute("onclick");
 whenOnclick.nodeValue = "location.href='./html/hb-404.html'";
 when.attributes.setNamedItem(whenOnclick);

 let how = document.getElementById("how");
 let howOnclick = document.createAttribute("onclick");
 howOnclick.nodeValue = "location.href='./html/hb-404.html'";
 how.attributes.setNamedItem(howOnclick);

 let howMuch = document.getElementById("howMuch");
 let howMuchOnclick = document.createAttribute("onclick");
 howMuchOnclick.nodeValue = "location.href='./html/hb-404.html'";
 howMuch.attributes.setNamedItem(howMuchOnclick);

 let who = document.getElementById("who");
 let whoOnclick = document.createAttribute("onclick");
 whoOnclick.nodeValue = "location.href='./html/hb-404.html'";
 who.attributes.setNamedItem(whoOnclick);

 let hb = document.getElementById("hb");
 let hbOnclick = document.createAttribute("onclick");
 hbOnclick.nodeValue = "location.href='./html/hb-404.html'";
 hb.attributes.setNamedItem(hbOnclick);


 
//简易登录
let logOn = document.getElementsByClassName("logOn")[0];
var n;

// 获取头像
let avatar = document.getElementsByClassName("avatar")[0];

logOn.onclick = function () {
    console.log("点击成功")
    alert(`开始登录`);
    alert(`登录成功`);
    n = Math.floor(Math.random() * 20) + 1;
    avatar.src = `./images/hb-user/hb-user-boys (${n}).png`;
    logOn.innerHTML=`临时游客${n}`
}




