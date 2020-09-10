import Vue from 'vue'
import VueI18n from 'vue-i18n'

import elementEnLocale       from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZhLocale       from 'element-ui/lib/locale/lang/zh-CN'// element-ui lang
import elementKoreanLocale   from 'element-ui/lib/locale/lang/ko' //element-ui lang

import enLocale from './en'
import zhLocale from './zh'
import koreanLocale from './ko'

import { getStore } from '@/util/store'
Vue.use(VueI18n);

const Avue = window.AVUE;

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale,
    ...Avue.locale.en,
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale,
    ...Avue.locale.zh,
  },
  ko: {
    ...koreanLocale,
    ...elementKoreanLocale,
    ...Avue.locale.ko,
  }


};

const i18n = new VueI18n({
  locale: getStore({ name: 'language' }) || 'zh',
  messages,
  silentTranslationWarn: true
});

export default i18n
