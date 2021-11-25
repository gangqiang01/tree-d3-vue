let getCookie = function(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

//check out cookie exist or not
//if cookie is null then return true
let checkCookie = function(cname) {
    let username = getCookie(cname);
    if (username) {
        return true;
    } else {
        return false;
    }
}


//set cookie with cookie name ,value and timeout
let setCookie = function(cname, cvalue, exmins) {
    let d = new Date();
    d.setTime(d.getTime() + (exmins * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export default {getCookie, checkCookie, setCookie};