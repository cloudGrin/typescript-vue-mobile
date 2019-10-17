import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators';
import store from '@/store';
import { setLocalStore, getLocalStore } from '@/utils/storage';
import { getPlatform, PlatformInfo } from '@/utils/common-tools';


type langOption = 'en' | 'zh-CN';

export interface IGlobalState {
  language: langOption;
  platformInfo: PlatformInfo;
}

let language = getLocalStore('local_language') || navigator.language;
const languageBak = getLocalStore('local_language');
if (language === 'en-US') { language = 'en'; } else if (language === 'zh-cn') { language = 'zh-CN'; }
if (['en', 'zh-CN'].indexOf(language) === -1) {
  // 浏览器语言不在列表中
  language = 'en';
}
if (languageBak === null) {
  setLocalStore('local_language', language);
}

@Module({ dynamic: true, store, name: 'app' })
class Global extends VuexModule implements IGlobalState {
  public language = language as langOption;
  public platformInfo = getPlatform();

  @Action({ commit: 'SET_LANGUAGE' })
  public SetLanguage(lang: langOption) {
    return lang;
  }

  @Mutation
  private SET_LANGUAGE(lang: langOption) {
    this.language = lang;
  }
}
export const GlobalModule = getModule(Global);
