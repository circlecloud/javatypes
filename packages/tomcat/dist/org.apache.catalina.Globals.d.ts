declare namespace org {
    namespace apache {
        namespace catalina {
            /**
             * Global constants that are applicable to multiple packages within Catalina.
             * @author Craig R. McClanahan
             */
            // @ts-ignore
            class Globals extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * The servlet context attribute under which we store the alternate
                 * deployment descriptor for this web application
                 */
                // @ts-ignore
                public static readonly ALT_DD_ATTR: java.lang.String | string
                /**
                 * The request attribute under which we store the array of X509Certificate
                 * objects representing the certificate chain presented by our client,
                 * if any.
                 */
                // @ts-ignore
                public static readonly CERTIFICATES_ATTR: java.lang.String | string
                /**
                 * The request attribute under which we store the name of the cipher suite
                 * being used on an SSL connection (as an object of type
                 * java.lang.String).
                 */
                // @ts-ignore
                public static readonly CIPHER_SUITE_ATTR: java.lang.String | string
                /**
                 * Request dispatcher state.
                 */
                // @ts-ignore
                public static readonly DISPATCHER_TYPE_ATTR: java.lang.String | string
                /**
                 * Request dispatcher path.
                 */
                // @ts-ignore
                public static readonly DISPATCHER_REQUEST_PATH_ATTR: java.lang.String | string
                /**
                 * The WebResourceRoot which is associated with the context. This can be
                 * used to manipulate static files.
                 */
                // @ts-ignore
                public static readonly RESOURCES_ATTR: java.lang.String | string
                /**
                 * The servlet context attribute under which we store the class path
                 * for our application class loader (as an object of type String),
                 * delimited with the appropriate path delimiter for this platform.
                 */
                // @ts-ignore
                public static readonly CLASS_PATH_ATTR: java.lang.String | string
                /**
                 * The request attribute under which we store the key size being used for
                 * this SSL connection (as an object of type java.lang.Integer).
                 */
                // @ts-ignore
                public static readonly KEY_SIZE_ATTR: java.lang.String | string
                /**
                 * The request attribute under which we store the session id being used
                 * for this SSL connection (as an object of type java.lang.String).
                 */
                // @ts-ignore
                public static readonly SSL_SESSION_ID_ATTR: java.lang.String | string
                /**
                 * The request attribute key for the session manager.
                 * This one is a Tomcat extension to the Servlet spec.
                 */
                // @ts-ignore
                public static readonly SSL_SESSION_MGR_ATTR: java.lang.String | string
                /**
                 * The request attribute under which we store the servlet name on a
                 * named dispatcher request.
                 */
                // @ts-ignore
                public static readonly NAMED_DISPATCHER_ATTR: java.lang.String | string
                /**
                 * The servlet context attribute under which we store a flag used
                 * to mark this request as having been processed by the SSIServlet.
                 * We do this because of the pathInfo mangling happening when using
                 * the CGIServlet in conjunction with the SSI servlet. (value stored
                 * as an object of type String)
                 * @deprecated Unused. This is no longer used as the CGIO servlet now has
                 *              generic handling for when it is used as an include.
                 *              This will be removed in Tomcat 10
                 */
                // @ts-ignore
                public static readonly SSI_FLAG_ATTR: java.lang.String | string
                /**
                 * The subject under which the AccessControlContext is running.
                 */
                // @ts-ignore
                public static readonly SUBJECT_ATTR: java.lang.String | string
                // @ts-ignore
                public static readonly GSS_CREDENTIAL_ATTR: java.lang.String | string
                /**
                 * The request attribute that is set to the value of {@code Boolean.TRUE}
                 * if connector processing this request supports use of sendfile.
                 * Duplicated here for neater code in the catalina packages.
                 */
                // @ts-ignore
                public static readonly SENDFILE_SUPPORTED_ATTR: java.lang.String | string
                /**
                 * The request attribute that can be used by a servlet to pass
                 * to the connector the name of the file that is to be served
                 * by sendfile. The value should be {@code java.lang.String}
                 * that is {@code File.getCanonicalPath()} of the file to be served.
                 * Duplicated here for neater code in the catalina packages.
                 */
                // @ts-ignore
                public static readonly SENDFILE_FILENAME_ATTR: java.lang.String | string
                /**
                 * The request attribute that can be used by a servlet to pass
                 * to the connector the start offset of the part of a file
                 * that is to be served by sendfile. The value should be
                 * {@code java.lang.Long}. To serve complete file
                 * the value should be {@code Long.valueOf(0)}.
                 * Duplicated here for neater code in the catalina packages.
                 */
                // @ts-ignore
                public static readonly SENDFILE_FILE_START_ATTR: java.lang.String | string
                /**
                 * The request attribute that can be used by a servlet to pass
                 * to the connector the end offset (not including) of the part
                 * of a file that is to be served by sendfile. The value should be
                 * {@code java.lang.Long}. To serve complete file
                 * the value should be equal to the length of the file.
                 * Duplicated here for neater code in the catalina packages.
                 */
                // @ts-ignore
                public static readonly SENDFILE_FILE_END_ATTR: java.lang.String | string
                /**
                 * The request attribute set by the RemoteIpFilter, RemoteIpValve (and may
                 * be set by other similar components) that identifies for the connector the
                 * remote IP address claimed to be associated with this request when a
                 * request is received via one or more proxies. It is typically provided via
                 * the X-Forwarded-For HTTP header.
                 * Duplicated here for neater code in the catalina packages.
                 */
                // @ts-ignore
                public static readonly REMOTE_ADDR_ATTRIBUTE: java.lang.String | string
                // @ts-ignore
                public static readonly ASYNC_SUPPORTED_ATTR: java.lang.String | string
                /**
                 * The request attribute that is set to {@code Boolean.TRUE} if some request
                 * parameters have been ignored during request parameters parsing. It can
                 * happen, for example, if there is a limit on the total count of parseable
                 * parameters, or if parameter cannot be decoded, or any other error
                 * happened during parameter parsing.
                 */
                // @ts-ignore
                public static readonly PARAMETER_PARSE_FAILED_ATTR: java.lang.String | string
                /**
                 * The reason that the parameter parsing failed.
                 */
                // @ts-ignore
                public static readonly PARAMETER_PARSE_FAILED_REASON_ATTR: java.lang.String | string
                /**
                 * The master flag which controls strict servlet specification
                 * compliance.
                 */
                // @ts-ignore
                public static readonly STRICT_SERVLET_COMPLIANCE: boolean
                /**
                 * Has security been turned on?
                 */
                // @ts-ignore
                public static readonly IS_SECURITY_ENABLED: boolean
                /**
                 * Default domain for MBeans if none can be determined
                 */
                // @ts-ignore
                public static readonly DEFAULT_MBEAN_DOMAIN: java.lang.String | string
                /**
                 * Name of the system property containing
                 * the tomcat product installation path
                 */
                // @ts-ignore
                public static readonly CATALINA_HOME_PROP: java.lang.String | string
                /**
                 * Name of the system property containing
                 * the tomcat instance installation path
                 */
                // @ts-ignore
                public static readonly CATALINA_BASE_PROP: java.lang.String | string
                /**
                 * Name of the ServletContext init-param that determines if the JSP engine
                 * should validate *.tld files when parsing them.
                 * <p>
                 * This must be kept in sync with org.apache.jasper.Constants
                 */
                // @ts-ignore
                public static readonly JASPER_XML_VALIDATION_TLD_INIT_PARAM: java.lang.String | string
                /**
                 * Name of the ServletContext init-param that determines if the JSP engine
                 * will block external entities from being used in *.tld, *.jspx, *.tagx and
                 * tagplugin.xml files.
                 * <p>
                 * This must be kept in sync with org.apache.jasper.Constants
                 */
                // @ts-ignore
                public static readonly JASPER_XML_BLOCK_EXTERNAL_INIT_PARAM: java.lang.String | string
                /**
                 * Name of the ServletContext attribute under which we store the context
                 * Realm's CredentialHandler (if both the Realm and the CredentialHandler
                 * exist).
                 */
                // @ts-ignore
                public static readonly CREDENTIAL_HANDLER: java.lang.String | string
            }
        }
    }
}
