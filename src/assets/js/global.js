import swal from 'sweetalert'
import router from '../../router'

const commonFn = {
    //refresh page
    shallowRefresh(name){
        router.replace({path: '/home/refresh', query: {name: name}})
    },
    //loginout 
    loginOut(){
        router.replace("/")
    },
    //stringify obj
    j2s(obj) {
        return JSON.stringify(obj)
    },
    // close global loading
    closeGlobalLoading() {
        setTimeout(() => {
        store.dispatch('showLoading', false)
        }, 0)
    },
    //open global loading
    openGlobalLoading() {
        setTimeout(() => {
        store.dispatch('showLoading', true)
        }, 0)
    },
    //dispatch function to store action
    onlineDeviceCount(val){
        store.dispatch('onlineDeviceCount', val)
    },

    swalWarnDo(title= "Are You Sure?", subject, confirmButtonText="confirm", cancelButtonText="cancel"){
        return swal({
            title,
            text: subject,
            icon: "warning",
            buttons: true,  
            dangerMode: true,
            buttons: [cancelButtonText, confirmButtonText]
        })
    },

    swalSuccessDo(title= "Are You Sure?", subject,  confirmButtonText="confirm", cancelButtonText="cancel"){
        return swal({
            title,
            text: subject,
            icon: "success",
            buttons: true,  
            dangerMode: true,
            buttons: [cancelButtonText, confirmButtonText]
        })
    },

    swalErrorDo(title= "Are You Sure?", subject,  confirmButtonText="confirm", cancelButtonText="cancel"){
        return swal({
            title,
            text: subject,
            icon: "error",
            buttons: true,  
            dangerMode: true,
            buttons: [cancelButtonText, confirmButtonText]
        })
    },

    swalInfoDo(title= "Are You Sure?", subject,  confirmButtonText="confirm", cancelButtonText="cancel"){
        return swal({
            title,
            text: subject,
            icon: "info",
            buttons: true,  
            dangerMode: true,
            buttons: [cancelButtonText, confirmButtonText]
        })
    },

    isObject(subject){
        if(Object.prototype.toString.call(subject) === "[object Object]"){
            return true;
        }else{
            return false;
        }
    },

    isArray(array){
        if(Object.prototype.toString.call(array) === "[object Array]"){
            return true;
        }else{
            return false;
        }
    },
    
    handleError(res, cb){
        if(res.status != undefined){
            let msg = res.data == undefined ? res.status: res.data;
            if(cb){
                swal("", msg, "error").then(() => {
                    cb()
                })
            }else{
                swal("", msg, "error")
            }
        }else{
            if(cb){
                swal("", res, "error").then(() => {
                    cb()
                })
            }else{
                swal("", res, "error")
            }
        }
    },
    isObject(subject){
        if(Object.prototype.toString.call(subject) === "[object Object]"){
            return true;
        }else{
            return false;
        }
    },

    isArray(array){
        if(Object.prototype.toString.call(array) === "[object Array]"){
            return true;
        }else{
            return false;
        }
    },
    timer: null,
    
    doBeforeLoginout(){
        cookie.setCookie("androidLinkToken",'',0);
        window.clearInterval(_g.timer);
        _g.timer = null;
    },

    removeLetter(str) {
        let i=0
        var result;
        var reg = /[a-zA-Z]+/; 
        if(typeof(str) == "string"){
            while (result = str.match(reg)){ 
                str = str.replace(result[0], '');
            }
        }
        return str;
    },
    // trim string
    trim(str){
        return str.replace(/^\s+|\s+$/g,"");
    }, 


    toNum(version){
        var version = version.toString();
        var versionArray = version.split(/\D/);
        var num_place=["","0","00","000","0000"],r=num_place.reverse();
        for (var i=0;i<versionArray.length;i++){ 
            var len=versionArray[i].length;       
            versionArray[i] = r[len]+versionArray[i];  
        } 
        var res = versionArray.join(''); 
        return res; 
    }, 
    cpr_version(v1,v2){ 
        let _v1 = this.toNum(v1)
        let _v2 = this.toNum(v2);
        return _v1 > _v2
    }  
}

export default commonFn
