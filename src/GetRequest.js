function GetRequest() {
    var url = location.search;
    var theRequest = {};
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
var Request = GetRequest();
var SS,ES,Price,num,total,Zhaoling;
SS = Request['SS'];
ES = Request['ES'];
Price = Request['Price'];
num = Request['num'];
total = Request['total'];
Zhaoling = Request["Zhaoling"];