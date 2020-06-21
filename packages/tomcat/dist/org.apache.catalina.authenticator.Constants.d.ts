declare namespace org {
    namespace apache {
        namespace catalina {
            namespace authenticator {
                // @ts-ignore
                class Constants extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly SPNEGO_METHOD: java.lang.String | string
                    // @ts-ignore
                    public static readonly FORM_ACTION: java.lang.String | string
                    // @ts-ignore
                    public static readonly FORM_PASSWORD: java.lang.String | string
                    // @ts-ignore
                    public static readonly FORM_USERNAME: java.lang.String | string
                    // @ts-ignore
                    public static readonly KRB5_CONF_PROPERTY: java.lang.String | string
                    // @ts-ignore
                    public static readonly DEFAULT_KRB5_CONF: java.lang.String | string
                    // @ts-ignore
                    public static readonly JAAS_CONF_PROPERTY: java.lang.String | string
                    // @ts-ignore
                    public static readonly DEFAULT_JAAS_CONF: java.lang.String | string
                    // @ts-ignore
                    public static readonly DEFAULT_LOGIN_MODULE_NAME: java.lang.String | string
                    // @ts-ignore
                    public static readonly SINGLE_SIGN_ON_COOKIE: java.lang.String | string
                    /**
                     * The notes key to track the single-sign-on identity with which this
                     * request is associated.
                     */
                    // @ts-ignore
                    public static readonly REQ_SSOID_NOTE: java.lang.String | string
                    // @ts-ignore
                    public static readonly REQ_JASPIC_SUBJECT_NOTE: java.lang.String | string
                    /**
                     * The notes key for the password used to authenticate this user.
                     */
                    // @ts-ignore
                    public static readonly SESS_PASSWORD_NOTE: java.lang.String | string
                    /**
                     * The notes key for the username used to authenticate this user.
                     */
                    // @ts-ignore
                    public static readonly SESS_USERNAME_NOTE: java.lang.String | string
                    /**
                     * The previously authenticated principal (if caching is disabled).
                     */
                    // @ts-ignore
                    public static readonly FORM_PRINCIPAL_NOTE: java.lang.String | string
                    /**
                     * The original request information, to which the user will be
                     * redirected if authentication succeeds.
                     */
                    // @ts-ignore
                    public static readonly FORM_REQUEST_NOTE: java.lang.String | string
                }
            }
        }
    }
}
