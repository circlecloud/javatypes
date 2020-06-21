declare namespace org {
    namespace apache {
        namespace catalina {
            namespace ssi {
                /**
                 * Filter to process SSI requests within a webpage. Mapped to a content types
                 * from within web.xml.
                 * @author David Becker
                 * @see org.apache.catalina.ssi.SSIServlet
                 */
                // @ts-ignore
                class SSIFilter extends javax.servlet.GenericFilter {
                    // @ts-ignore
                    constructor()
                    /**
                     * Debug level for this servlet.
                     */
                    // @ts-ignore
                    debug: number /*int*/
                    /**
                     * Expiration time in seconds for the doc.
                     */
                    // @ts-ignore
                    expires: java.lang.Long | number
                    /**
                     * virtual path can be webapp-relative
                     */
                    // @ts-ignore
                    isVirtualWebappRelative: boolean
                    /**
                     * regex pattern to match when evaluating content types
                     */
                    // @ts-ignore
                    contentTypeRegEx: java.util.regex.Pattern
                    /**
                     * default pattern for ssi filter content type matching
                     */
                    // @ts-ignore
                    readonly shtmlRegEx: java.util.regex.Pattern
                    /**
                     * Allow exec (normally blocked for security)
                     */
                    // @ts-ignore
                    allowExec: boolean
                    // @ts-ignore
                    public init(): void
                    // @ts-ignore
                    public doFilter(request: javax.servlet.ServletRequest, response: javax.servlet.ServletResponse, chain: javax.servlet.FilterChain): void
                }
            }
        }
    }
}
