/**
 * Created by irfan on 10-Jul-17.
 */

/* Deployment Profiles */

export class AppConfig {

    /* Local */

    public static BE_HTTP_PROTOCOL = 'http';
    public static BE_HTTP_SEPARATOR = '://';
    public static BE_API_ENDPOINT = '127.0.0.1';
    // public static BE_API_ENDPOINT = '192.168.1.211';
    public static BE_API_PORT = '8080';
    public static BE_API_CONTEXT_PATH = 'AdminPortal';
    public static BE_ACCESS_CLIENT = 'APClient';
    public static BE_ACCESS_SECRET = 'APSecret';
    //  public static BILLING_API_ENDPOINT = 'http://192.168.1.212:8093/ProductLicensingApplication';    //Shaista's System
    //public static BILLING_API_ENDPOINT = 'http://stagebilling.sa-brightlife.com/ProductLicensingApplication';    //Stage server
    //public static BILLING_API_ENDPOINT = 'http://192.168.1.49:8080/ProductLicensingApplication';  // Dev Server
    public static BILLING_API_ENDPOINT = 'http://192.168.1.75:8080/ProductLicensingApplication';    //Dev Server2
    public static BILLING_TOKEN_USERNAME = 'admin';
    public static BILLING_TOKEN_PASSWORD = 'admin';
    //public static CONSOLE_API_ENDPOINT = 'http://192.168.1.187:8092/BrightLife';    // Zeb's System
    public static CONSOLE_API_ENDPOINT = 'http://192.168.1.27:8080/BrightLife';        // Dev server
    public static CONSOLE_TOKEN_USERNAME = 'consoleadmin@yopmail.com';
    public static CONSOLE_TOKEN_PASSWORD = '03sB*';

}