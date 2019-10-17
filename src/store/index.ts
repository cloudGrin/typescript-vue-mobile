import Vue from 'vue';
import Vuex from 'vuex';
import { IGlobalState } from './modules/global';

Vue.use(Vuex);

export interface IRootState {
    global: IGlobalState;
}

// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<IRootState>({
    strict: process.env.NODE_ENV !== 'production'
});
