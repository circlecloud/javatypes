declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace websocket {
                /**
                 * Internal implementation constants.
                 */
                // @ts-ignore
                class Constants extends java.lang.Object {
                    // @ts-ignore
                    public static readonly OPCODE_CONTINUATION: number /*byte*/
                    // @ts-ignore
                    public static readonly OPCODE_TEXT: number /*byte*/
                    // @ts-ignore
                    public static readonly OPCODE_BINARY: number /*byte*/
                    // @ts-ignore
                    public static readonly OPCODE_CLOSE: number /*byte*/
                    // @ts-ignore
                    public static readonly OPCODE_PING: number /*byte*/
                    // @ts-ignore
                    public static readonly OPCODE_PONG: number /*byte*/
                    /**
                     * Property name to set to configure the value that is passed to
                     * {@link javax.net.ssl.SSLEngine#setEnabledProtocols(String[])}. The value
                     * should be a comma separated string.
                     */
                    // @ts-ignore
                    public static readonly SSL_PROTOCOLS_PROPERTY: java.lang.String | string
                    // @ts-ignore
                    public static readonly SSL_TRUSTSTORE_PROPERTY: java.lang.String | string
                    // @ts-ignore
                    public static readonly SSL_TRUSTSTORE_PWD_PROPERTY: java.lang.String | string
                    // @ts-ignore
                    public static readonly SSL_TRUSTSTORE_PWD_DEFAULT: java.lang.String | string
                    /**
                     * Property name to set to configure used SSLContext. The value should be an
                     * instance of SSLContext. If this property is present, the SSL_TRUSTSTORE*
                     * properties are ignored.
                     */
                    // @ts-ignore
                    public static readonly SSL_CONTEXT_PROPERTY: java.lang.String | string
                    /**
                     * Property name to set to configure the timeout (in milliseconds) when
                     * establishing a WebSocket connection to server. The default is
                     * {@link #IO_TIMEOUT_MS_DEFAULT}.
                     */
                    // @ts-ignore
                    public static readonly IO_TIMEOUT_MS_PROPERTY: java.lang.String | string
                    // @ts-ignore
                    public static readonly IO_TIMEOUT_MS_DEFAULT: number /*long*/
                    // @ts-ignore
                    public static readonly MAX_REDIRECTIONS_PROPERTY: java.lang.String | string
                    // @ts-ignore
                    public static readonly MAX_REDIRECTIONS_DEFAULT: number /*int*/
                    // @ts-ignore
                    public static readonly HOST_HEADER_NAME: java.lang.String | string
                    // @ts-ignore
                    public static readonly UPGRADE_HEADER_NAME: java.lang.String | string
                    // @ts-ignore
                    public static readonly UPGRADE_HEADER_VALUE: java.lang.String | string
                    // @ts-ignore
                    public static readonly ORIGIN_HEADER_NAME: java.lang.String | string
                    // @ts-ignore
                    public static readonly CONNECTION_HEADER_NAME: java.lang.String | string
                    // @ts-ignore
                    public static readonly CONNECTION_HEADER_VALUE: java.lang.String | string
                    // @ts-ignore
                    public static readonly LOCATION_HEADER_NAME: java.lang.String | string
                    // @ts-ignore
                    public static readonly AUTHORIZATION_HEADER_NAME: java.lang.String | string
                    // @ts-ignore
                    public static readonly WWW_AUTHENTICATE_HEADER_NAME: java.lang.String | string
                    // @ts-ignore
                    public static readonly WS_VERSION_HEADER_NAME: java.lang.String | string
                    // @ts-ignore
                    public static readonly WS_VERSION_HEADER_VALUE: java.lang.String | string
                    // @ts-ignore
                    public static readonly WS_KEY_HEADER_NAME: java.lang.String | string
                    // @ts-ignore
                    public static readonly WS_PROTOCOL_HEADER_NAME: java.lang.String | string
                    // @ts-ignore
                    public static readonly WS_EXTENSIONS_HEADER_NAME: java.lang.String | string
                    // @ts-ignore
                    public static readonly MULTIPLE_CHOICES: number /*int*/
                    // @ts-ignore
                    public static readonly MOVED_PERMANENTLY: number /*int*/
                    // @ts-ignore
                    public static readonly FOUND: number /*int*/
                    // @ts-ignore
                    public static readonly SEE_OTHER: number /*int*/
                    // @ts-ignore
                    public static readonly USE_PROXY: number /*int*/
                    // @ts-ignore
                    public static readonly TEMPORARY_REDIRECT: number /*int*/
                    // @ts-ignore
                    public static readonly BLOCKING_SEND_TIMEOUT_PROPERTY: java.lang.String | string
                    // @ts-ignore
                    public static readonly DEFAULT_BLOCKING_SEND_TIMEOUT: number /*long*/
                    // @ts-ignore
                    public static readonly WS_AUTHENTICATION_USER_NAME: java.lang.String | string
                    // @ts-ignore
                    public static readonly WS_AUTHENTICATION_PASSWORD: java.lang.String | string
                    // @ts-ignore
                    public static readonly STRICT_SPEC_COMPLIANCE: boolean
                    // @ts-ignore
                    public static readonly INSTALLED_EXTENSIONS: java.util.List<Extension> | Array<Extension>
                }
            }
        }
    }
}
