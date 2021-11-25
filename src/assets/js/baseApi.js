import axios from 'axios'
import Qs from "qs"
import router from '../../router'
import swal from 'sweetalert'

let cancelArr = [];
//intercept axios api 
axios.interceptors.request.use((config) => {
     // before send request
    if(config.url.indexOf("/repoapps")<0 && config.url.indexOf("/repo/")<0){
        if(config.method === "put"){
            // send msg to exec device
            config.timeout = 1000*15;
        }else if(config.method === "post"){
            config.timeout = 1000*15;
        }else{
            config.timeout = 1000*10;
        }
        config.withCredentials = true;
        config.headers.accesstoken = cookie.getCookie("androidLinkToken");
        config.cancelToken = new axios.CancelToken((cancel) => {
            cancelArr.push({cancel});
        })
    }
    return config;
 }, function (err){
    return Promise.reject(err);
 });

// axios.interceptors.response.use(
//     response => {
//         return response;
//     },
//     error => {
//         if (error.response) {
//             switch (error.response.status) {
//                 case 401:
//                     // 401 clear token and session
//                     swal("","Login expired","error").then((val) =>{
//                         if(val){
//                             _g.doBeforeLoginout();
//                             router.replace({
//                                 path: '/',
//                                 query: {redirect: router.currentRoute.fullPath}
//                             })
//                         }
//                     });
                   
//             }
//         }
//         return Promise.reject(error.response)  // return error
//     });

let apiGet = function(url, object, config) {
    let geturl, fconfig;
    if(config == undefined){
        fconfig = {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
        };
        
    }else{
        fconfig = config;
    }
    if(object){
        fconfig.params = object;
    }
    geturl = encodeURI(url);
    return new Promise((resolve, reject) => {
        axios.get(geturl, fconfig).then((response) => {
            resolve(response)
        }).catch((err) => {
            if(err.response){
                resolve(err.response);
            }else if(err.code === "ECONNABORTED" && err.message.indexOf('timeout') != -1){
                console.error("[apiGet]"+err.message);
                let msgData = {data: "request timeout"};
                resolve(msgData);
            }else{
                console.error("[apiGet]"+err);
                resolve(err);
            }
            
        })
    })
}

let apiPost = function(url, data, config) {
    let fconfig;
    if(config == undefined){
        fconfig = {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
        };
        
    }else{
        fconfig = config;
        data = Qs.stringify(data)
    }
    return new Promise((resolve, reject) => {
        axios.post(url, data, fconfig).then((response) => {
            resolve(response)
        }).catch((err) => {
            if(err.response){
                resolve(err.response);
            }else if(err.code === "ECONNABORTED" && err.message.indexOf('timeout') != -1){
                console.error("[apiPost]"+err.message);
                let msgData = {data: "request timeout"};
                resolve(msgData);
            }else{
                console.error("[apiPost]"+err);
                resolve(err);
            }
        })
    })
}

let apiPostfile = function(url, data, config) {
    let fconfig;
    if(config == undefined){
        fconfig = {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }
    }else{
        fconfig = config;
    }
    return new Promise((resolve, reject) => {
        axios.post(url, data, fconfig).then((response) => {
            resolve(response)
        }).catch((err) => {
            if(err.response){
                resolve(err.response);
            }else if(err.code === "ECONNABORTED" && err.message.indexOf('timeout') != -1){
                console.error("[apiPostfile]"+err.message);
                let msgData = {data: "request timeout"};
                resolve(msgData);
            }else{
                console.error("[apiPostfile]"+err);
                resolve(err);
            }
        })
    })
}

let apiDelete = function(url) {
    return new Promise((resolve, reject) => {
        axios.delete(url).then((response) => {
            resolve(response)
        }).catch((err) => {
            if(err.response){
                resolve(err.response);
            }else if(err.code === "ECONNABORTED" && err.message.indexOf('timeout') != -1){
                console.error("[apiDelete]"+err.message);
                let msgData = {data: "request timeout"};
                resolve(msgData);
            }else{
                console.error("[apiDelete]"+err);
                resolve(err);
            }
        })
    })
}

let apiPut = function(url, data, config) {
    let fconfig;
    if(config == undefined){
        fconfig = {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
        };
        
    }else{
        fconfig = config;
        data = Qs.stringify(data)
    }
    return new Promise((resolve, reject) => {
        axios.put(url, data, fconfig).then((response) => {
            resolve(response)
        }).catch((err) => {
            if(err.response){
                resolve(err.response);
            }else if(err.code === "ECONNABORTED" && err.message.indexOf('timeout') != -1){
                console.error("[apiPut]"+err.message);
                let msgData = {data: "request timeout"};
                resolve(msgData);
            }else{
                console.error("[apiPut]"+err);
                resolve(err);
            }
        })
    })
}

//repoapi
let repoApiGet = function(myUrl, object){
    let array = [], getUrl;
    if(Object.prototype.toString.call(object) === "[object Object]" && JSON.stringify(object) != "{}"){
        for(let key in object){
            array.push(key+"="+object[key]);
        }
        let parameter = array.join("&")
        getUrl = myUrl+ "?" + parameter;
    }else{
        getUrl = myUrl;
    }

    getUrl = encodeURI(getUrl);
    return new Promise((resolve, reject) => {
        axios.defaults.headers['Authorization'] = cookie.getCookie("androidLinkToken");
        axios.get(getUrl).then((response) => {
            resolve(response)
        }).catch((err) => {
            resolve(err.response)
        });
    })
}

let repoApiPost = function(url, data){
    return new Promise(function(resolve, reject){
        axios.defaults.headers['Authorization'] = cookie.getCookie("androidLinkToken");
        axios.post(url, data).then((response) => {
            resolve(response)
        }).catch((err) => {
            resolve(err.response)
        })
    })
}
let repoApiDelete = function(url){
    return new Promise(function(resolve, reject){
        axios.defaults.headers['Authorization'] = cookie.getCookie("androidLinkToken");
        axios.delete(url).then((response) => {
            resolve(response)
        }).catch((err) => {
            resolve(err.response)
        })
    })
}
export {
    apiGet, 
    apiPost, 
    apiPostfile, 
    apiDelete, 
    apiPut, 
    repoApiGet, 
    repoApiPost,
    cancelArr,
    repoApiDelete
}
