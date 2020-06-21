declare namespace org {
    namespace apache {
        namespace coyote {
            /**
             * Constants.
             * @author Remy Maucherat
             */
            // @ts-ignore
            class Constants extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static readonly DEFAULT_URI_CHARSET: java.nio.charset.Charset
                // @ts-ignore
                public static readonly DEFAULT_BODY_CHARSET: java.nio.charset.Charset
                // @ts-ignore
                public static readonly MAX_NOTES: number /*int*/
                // @ts-ignore
                public static readonly STAGE_NEW: number /*int*/
                // @ts-ignore
                public static readonly STAGE_PARSE: number /*int*/
                // @ts-ignore
                public static readonly STAGE_PREPARE: number /*int*/
                // @ts-ignore
                public static readonly STAGE_SERVICE: number /*int*/
                // @ts-ignore
                public static readonly STAGE_ENDINPUT: number /*int*/
                // @ts-ignore
                public static readonly STAGE_ENDOUTPUT: number /*int*/
                // @ts-ignore
                public static readonly STAGE_KEEPALIVE: number /*int*/
                // @ts-ignore
                public static readonly STAGE_ENDED: number /*int*/
                // @ts-ignore
                public static readonly DEFAULT_CONNECTION_LINGER: number /*int*/
                // @ts-ignore
                public static readonly DEFAULT_TCP_NO_DELAY: boolean
                /**
                 * Has security been turned on?
                 */
                // @ts-ignore
                public static readonly IS_SECURITY_ENABLED: boolean
                /**
                 * The request attribute that is set to the value of {@code Boolean.TRUE}
                 * if connector processing this request supports use of sendfile.
                 */
                // @ts-ignore
                public static readonly SENDFILE_SUPPORTED_ATTR: java.lang.String | string
                /**
                 * The request attribute that can be used by a servlet to pass
                 * to the connector the name of the file that is to be served
                 * by sendfile. The value should be {@code java.lang.String}
                 * that is {@code File.getCanonicalPath()} of the file to be served.
                 */
                // @ts-ignore
                public static readonly SENDFILE_FILENAME_ATTR: java.lang.String | string
                /**
                 * The request attribute that can be used by a servlet to pass
                 * to the connector the start offset of the part of a file
                 * that is to be served by sendfile. The value should be
                 * {@code java.lang.Long}. To serve complete file
                 * the value should be {@code Long.valueOf(0)}.
                 */
                // @ts-ignore
                public static readonly SENDFILE_FILE_START_ATTR: java.lang.String | string
                /**
                 * The request attribute that can be used by a servlet to pass
                 * to the connector the end offset (not including) of the part
                 * of a file that is to be served by sendfile. The value should be
                 * {@code java.lang.Long}. To serve complete file
                 * the value should be equal to the length of the file.
                 */
                // @ts-ignore
                public static readonly SENDFILE_FILE_END_ATTR: java.lang.String | string
                /**
                 * The request attribute set by the RemoteIpFilter, RemoteIpValve (and may
                 * be set by other similar components) that identifies for the connector the
                 * remote IP address claimed to be associated with this request when a
                 * request is received via one or more proxies. It is typically provided via
                 * the X-Forwarded-For HTTP header.
                 */
                // @ts-ignore
                public static readonly REMOTE_ADDR_ATTRIBUTE: java.lang.String | string
            }
        }
    }
}
