"use strict";
/**
 * Created by irfan on 10-Jul-17.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* Deployment Profiles */
var AppConfig = (function () {
    function AppConfig() {
    }
    /* Local */
    AppConfig.BE_HTTP_PROTOCOL = 'http';
    AppConfig.BE_HTTP_SEPARATOR = '://';
    AppConfig.BE_API_ENDPOINT = '127.0.0.1';
    // public static BE_API_ENDPOINT = '192.168.1.211';
    AppConfig.BE_API_PORT = '8080';
    AppConfig.BE_API_CONTEXT_PATH = 'AdminPortal';
    AppConfig.BE_ACCESS_CLIENT = 'APClient';
    AppConfig.BE_ACCESS_SECRET = 'APSecret';
    //  public static BILLING_API_ENDPOINT = 'http://192.168.1.212:8093/ProductLicensingApplication';    //Shaista's System
    //public static BILLING_API_ENDPOINT = 'http://stagebilling.sa-brightlife.com/ProductLicensingApplication';    //Stage server
    //public static BILLING_API_ENDPOINT = 'http://192.168.1.49:8080/ProductLicensingApplication';  // Dev Server
    AppConfig.BILLING_API_ENDPOINT = 'http://192.168.1.75:8080/ProductLicensingApplication'; //Dev Server2
    AppConfig.BILLING_TOKEN_USERNAME = 'admin';
    AppConfig.BILLING_TOKEN_PASSWORD = 'admin';
    //public static CONSOLE_API_ENDPOINT = 'http://192.168.1.187:8092/BrightLife';    // Zeb's System
    AppConfig.CONSOLE_API_ENDPOINT = 'http://192.168.1.27:8080/BrightLife'; // Dev server
    AppConfig.CONSOLE_TOKEN_USERNAME = 'consoleadmin@yopmail.com';
    AppConfig.CONSOLE_TOKEN_PASSWORD = '03sB*';
    return AppConfig;
}());
exports.AppConfig = AppConfig;
//# sourceMappingURL=app.config.js.map