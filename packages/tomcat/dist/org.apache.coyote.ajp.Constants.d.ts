declare namespace org {
    namespace apache {
        namespace coyote {
            namespace ajp {
                /**
                 * Constants.
                 * @author Remy Maucherat
                 */
                // @ts-ignore
                class Constants extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly DEFAULT_CONNECTION_TIMEOUT: number /*int*/
                    // @ts-ignore
                    public static readonly JK_AJP13_FORWARD_REQUEST: number /*byte*/
                    // @ts-ignore
                    public static readonly JK_AJP13_SHUTDOWN: number /*byte*/
                    // @ts-ignore
                    public static readonly JK_AJP13_PING_REQUEST: number /*byte*/
                    // @ts-ignore
                    public static readonly JK_AJP13_CPING_REQUEST: number /*byte*/
                    // @ts-ignore
                    public static readonly JK_AJP13_SEND_BODY_CHUNK: number /*byte*/
                    // @ts-ignore
                    public static readonly JK_AJP13_SEND_HEADERS: number /*byte*/
                    // @ts-ignore
                    public static readonly JK_AJP13_END_RESPONSE: number /*byte*/
                    // @ts-ignore
                    public static readonly JK_AJP13_GET_BODY_CHUNK: number /*byte*/
                    // @ts-ignore
                    public static readonly JK_AJP13_CPONG_REPLY: number /*byte*/
                    // @ts-ignore
                    public static readonly SC_RESP_CONTENT_TYPE: number /*int*/
                    // @ts-ignore
                    public static readonly SC_RESP_CONTENT_LANGUAGE: number /*int*/
                    // @ts-ignore
                    public static readonly SC_RESP_CONTENT_LENGTH: number /*int*/
                    // @ts-ignore
                    public static readonly SC_RESP_DATE: number /*int*/
                    // @ts-ignore
                    public static readonly SC_RESP_LAST_MODIFIED: number /*int*/
                    // @ts-ignore
                    public static readonly SC_RESP_LOCATION: number /*int*/
                    // @ts-ignore
                    public static readonly SC_RESP_SET_COOKIE: number /*int*/
                    // @ts-ignore
                    public static readonly SC_RESP_SET_COOKIE2: number /*int*/
                    // @ts-ignore
                    public static readonly SC_RESP_SERVLET_ENGINE: number /*int*/
                    // @ts-ignore
                    public static readonly SC_RESP_STATUS: number /*int*/
                    // @ts-ignore
                    public static readonly SC_RESP_WWW_AUTHENTICATE: number /*int*/
                    // @ts-ignore
                    public static readonly SC_RESP_AJP13_MAX: number /*int*/
                    // @ts-ignore
                    public static readonly SC_A_CONTEXT: number /*byte*/
                    // @ts-ignore
                    public static readonly SC_A_SERVLET_PATH: number /*byte*/
                    // @ts-ignore
                    public static readonly SC_A_REMOTE_USER: number /*byte*/
                    // @ts-ignore
                    public static readonly SC_A_AUTH_TYPE: number /*byte*/
                    // @ts-ignore
                    public static readonly SC_A_QUERY_STRING: number /*byte*/
                    // @ts-ignore
                    public static readonly SC_A_JVM_ROUTE: number /*byte*/
                    // @ts-ignore
                    public static readonly SC_A_SSL_CERT: number /*byte*/
                    // @ts-ignore
                    public static readonly SC_A_SSL_CIPHER: number /*byte*/
                    // @ts-ignore
                    public static readonly SC_A_SSL_SESSION: number /*byte*/
                    // @ts-ignore
                    public static readonly SC_A_SSL_KEY_SIZE: number /*byte*/
                    // @ts-ignore
                    public static readonly SC_A_SECRET: number /*byte*/
                    // @ts-ignore
                    public static readonly SC_A_STORED_METHOD: number /*byte*/
                    // @ts-ignore
                    public static readonly SC_A_REQ_ATTRIBUTE: number /*byte*/
                    /**
                     * AJP private request attributes
                     */
                    // @ts-ignore
                    public static readonly SC_A_REQ_LOCAL_ADDR: java.lang.String | string
                    // @ts-ignore
                    public static readonly SC_A_REQ_REMOTE_PORT: java.lang.String | string
                    // @ts-ignore
                    public static readonly SC_A_SSL_PROTOCOL: java.lang.String | string
                    // @ts-ignore
                    public static readonly SC_A_ARE_DONE: number /*byte*/
                    /**
                     * Default maximum total byte size for a AJP packet
                     */
                    // @ts-ignore
                    public static readonly MAX_PACKET_SIZE: number /*int*/
                    /**
                     * Size of basic packet header
                     */
                    // @ts-ignore
                    public static readonly H_SIZE: number /*int*/
                    /**
                     * Size of the header metadata
                     */
                    // @ts-ignore
                    public static readonly READ_HEAD_LEN: number /*int*/
                    // @ts-ignore
                    public static readonly SEND_HEAD_LEN: number /*int*/
                    /**
                     * Default maximum size of data that can be sent in one packet
                     */
                    // @ts-ignore
                    public static readonly MAX_READ_SIZE: number /*int*/
                    // @ts-ignore
                    public static readonly MAX_SEND_SIZE: number /*int*/
                    // @ts-ignore
                    public static readonly SC_M_JK_STORED: number /*int*/
                    // @ts-ignore
                    public static readonly SC_REQ_ACCEPT: number /*int*/
                    // @ts-ignore
                    public static readonly SC_REQ_ACCEPT_CHARSET: number /*int*/
                    // @ts-ignore
                    public static readonly SC_REQ_ACCEPT_ENCODING: number /*int*/
                    // @ts-ignore
                    public static readonly SC_REQ_ACCEPT_LANGUAGE: number /*int*/
                    // @ts-ignore
                    public static readonly SC_REQ_AUTHORIZATION: number /*int*/
                    // @ts-ignore
                    public static readonly SC_REQ_CONNECTION: number /*int*/
                    // @ts-ignore
                    public static readonly SC_REQ_CONTENT_TYPE: number /*int*/
                    // @ts-ignore
                    public static readonly SC_REQ_CONTENT_LENGTH: number /*int*/
                    // @ts-ignore
                    public static readonly SC_REQ_COOKIE: number /*int*/
                    // @ts-ignore
                    public static readonly SC_REQ_COOKIE2: number /*int*/
                    // @ts-ignore
                    public static readonly SC_REQ_HOST: number /*int*/
                    // @ts-ignore
                    public static readonly SC_REQ_PRAGMA: number /*int*/
                    // @ts-ignore
                    public static readonly SC_REQ_REFERER: number /*int*/
                    // @ts-ignore
                    public static readonly SC_REQ_USER_AGENT: number /*int*/
                    /**
                     * Converts an AJP coded HTTP method to the method name.
                     * @param code the coded value
                     * @return the string value of the method
                     */
                    // @ts-ignore
                    public static getMethodForCode(code: number /*int*/): string
                    /**
                     * Converts an AJP coded HTTP request header to the header name.
                     * @param code the coded value
                     * @return the string value of the header name
                     */
                    // @ts-ignore
                    public static getHeaderForCode(code: number /*int*/): string
                    /**
                     * Converts an AJP coded response header name to the HTTP response header name.
                     * @param code the coded value
                     * @return the string value of the header
                     */
                    // @ts-ignore
                    public static getResponseHeaderForCode(code: number /*int*/): string
                    // @ts-ignore
                    public static getResponseAjpIndex(header: java.lang.String | string): number /*int*/
                }
            }
        }
    }
}
