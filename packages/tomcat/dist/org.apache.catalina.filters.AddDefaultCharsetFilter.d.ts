declare namespace org {
    namespace apache {
        namespace catalina {
            namespace filters {
                /**
                 * Filter that explicitly sets the default character set for media subtypes of
                 * the "text" type to ISO-8859-1, or another user defined character set. RFC2616
                 * explicitly states that browsers must use ISO-8859-1 if no character set is
                 * defined for media with subtype "text". However, browsers may attempt to
                 * auto-detect the character set. This may be exploited by an attacker to
                 * perform an XSS attack. Internet Explorer has this behaviour by default. Other
                 * browsers have an option to enable it.<br>
                 * This filter prevents the attack by explicitly setting a character set. Unless
                 * the provided character set is explicitly overridden by the user - in which
                 * case they deserve everything they get - the browser will adhere to an
                 * explicitly set character set, thus preventing the XSS attack.
                 */
                // @ts-ignore
                class AddDefaultCharsetFilter extends org.apache.catalina.filters.FilterBase {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public setEncoding(encoding: java.lang.String | string): void
                    // @ts-ignore
                    getLogger(): org.apache.juli.logging.Log
                    // @ts-ignore
                    public init(filterConfig: javax.servlet.FilterConfig): void
                    // @ts-ignore
                    public doFilter(request: javax.servlet.ServletRequest, response: javax.servlet.ServletResponse, chain: javax.servlet.FilterChain): void
                }
            }
        }
    }
}
