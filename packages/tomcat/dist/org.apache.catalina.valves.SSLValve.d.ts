declare namespace org {
    namespace apache {
        namespace catalina {
            namespace valves {
                /**
                 * When using mod_proxy_http, the client SSL information is not included in the
                 * protocol (unlike mod_jk and mod_proxy_ajp). To make the client SSL
                 * information available to Tomcat, some additional configuration is required.
                 * In httpd, mod_headers is used to add the SSL information as HTTP headers. In
                 * Tomcat, this valve is used to read the information from the HTTP headers and
                 * insert it into the request.<p>
                 * <b>Note: Ensure that the headers are always set by httpd for all requests to
                 * prevent a client spoofing SSL information by sending fake headers. </b><p>
                 * In httpd.conf add the following:
                 * <pre>
                 * &lt;IfModule ssl_module&gt;
                 * RequestHeader set SSL_CLIENT_CERT "%{SSL_CLIENT_CERT}s"
                 * RequestHeader set SSL_CIPHER "%{SSL_CIPHER}s"
                 * RequestHeader set SSL_SESSION_ID "%{SSL_SESSION_ID}s"
                 * RequestHeader set SSL_CIPHER_USEKEYSIZE "%{SSL_CIPHER_USEKEYSIZE}s"
                 * &lt;/IfModule&gt;
                 * </pre>
                 * In server.xml, configure this valve under the Engine element in server.xml:
                 * <pre>
                 * &lt;Engine ...&gt;
                 * &lt;Valve className="org.apache.catalina.valves.SSLValve" /&gt;
                 * &lt;Host ... /&gt;
                 * &lt;/Engine&gt;
                 * </pre>
                 */
                // @ts-ignore
                class SSLValve extends org.apache.catalina.valves.ValveBase {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public getSslClientCertHeader(): string
                    // @ts-ignore
                    public setSslClientCertHeader(sslClientCertHeader: java.lang.String | string): void
                    // @ts-ignore
                    public getSslCipherHeader(): string
                    // @ts-ignore
                    public setSslCipherHeader(sslCipherHeader: java.lang.String | string): void
                    // @ts-ignore
                    public getSslSessionIdHeader(): string
                    // @ts-ignore
                    public setSslSessionIdHeader(sslSessionIdHeader: java.lang.String | string): void
                    // @ts-ignore
                    public getSslCipherUserKeySizeHeader(): string
                    // @ts-ignore
                    public setSslCipherUserKeySizeHeader(sslCipherUserKeySizeHeader: java.lang.String | string): void
                    // @ts-ignore
                    public mygetHeader(request: org.apache.catalina.connector.Request, header: java.lang.String | string): string
                    // @ts-ignore
                    public invoke(request: org.apache.catalina.connector.Request, response: org.apache.catalina.connector.Response): void
                }
            }
        }
    }
}
