import Vue from 'vue';
import LocalConfig from '@/config.json';
import Report from '@/utils/report';

const IS_DEV = process.env.NODE_ENV === 'development';

if (LocalConfig.SentryEnabled && !IS_DEV) {
    const sentry = Report.getInstance(Vue, {
        dsn: LocalConfig.SentryDSN,
        release: __VERSION__, // from webpack DefinePlugin
        environment: 'Prod'
    });

    window.$sentry = sentry;

    // 全局监控 Vue errorHandler
    Vue.config.errorHandler = (error, vm, info) => {
        window.$sentry.log({
            error,
            type: 'vue errorHandler',
            vm,
            info
        });
    };
}
