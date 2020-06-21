declare namespace org {
    namespace apache {
        namespace catalina {
            namespace filters {
                /**
                 * Filter that attempts to force MS WebDAV clients connecting on port 80 to use
                 * a WebDAV client that actually works. Other workarounds that might help
                 * include:
                 * <ul>
                 * <li>Specifying the port, even if it is port 80, when trying to
                 * connect.</li>
                 * <li>Cancelling the first authentication dialog box and then trying to
                 * reconnect.</li>
                 * </ul>
                 * Generally each different version of the MS client has a different set of
                 * problems.
                 * <p>
                 * TODO: Update this filter to recognise specific MS clients and apply the
                 * appropriate workarounds for that particular client
                 * <p>
                 * As a filter, this is configured in web.xml like any other Filter. You usually
                 * want to map this filter to whatever your WebDAV servlet is mapped to.
                 * <p>
                 * In addition to the issues fixed by this Filter, the following issues have
                 * also been observed that cannot be fixed by this filter. Where possible the
                 * filter will add an message to the logs.
                 * <p>
                 * XP x64 SP2 (MiniRedir Version 3790)
                 * <ul>
                 * <li>Only connects to port 80</li>
                 * <li>Unknown issue means it doesn't work</li>
                 * </ul>
                 */
                // @ts-ignore
                class WebdavFixFilter extends javax.servlet.GenericFilter {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    /**
                     * Check for the broken MS WebDAV client and if detected issue a re-direct
                     * that hopefully will cause the non-broken client to be used.
                     */
                    // @ts-ignore
                    public doFilter(request: javax.servlet.ServletRequest, response: javax.servlet.ServletResponse, chain: javax.servlet.FilterChain): void
                }
            }
        }
    }
}
