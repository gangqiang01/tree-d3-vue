import VueI18n from 'vue-i18n'

import EnElementLang from 'element-ui/lib/locale/lang/en'
import ZhElementLang from 'element-ui/lib/locale/lang/zh-CN'
import TwElementLang from 'element-ui/lib/locale/lang/zh-TW'
import ElementLocal from 'element-ui/lib/locale'

import EnLang from './en'
import ZhLang from './zh'
import TwLang from './tw'

import Cookies from '../assets/js/cookie'

export let i18n

let curLocale =Cookies.getCookie("link_lang")|| "en";

const messages = {
    en: {
        ...EnLang,
        ...EnElementLang,
    },
    zh: {
        ...ZhLang,
        ...ZhElementLang,
    },
    tw: {
        ...TwLang,
        ...TwElementLang
    }
}

export function setLang(val){
    curLocale = val;
    i18n.locale = curLocale;
}

export function getLang(){
    return curLocale
}



export function vueI18n(Vue){
    Vue.use(VueI18n);
    
    i18n = new VueI18n({
        locale: `${curLocale}`,
        messages
    })

    ElementLocal.i18n((key, value) => i18n.t(key, value))
}