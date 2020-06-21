declare namespace org {
    namespace apache {
        namespace catalina {
            namespace valves {
                /**
                 * Web crawlers can trigger the creation of many thousands of sessions as they
                 * crawl a site which may result in significant memory consumption. This Valve
                 * ensures that crawlers are associated with a single session - just like normal
                 * users - regardless of whether or not they provide a session token with their
                 * requests.
                 */
                // @ts-ignore
                class CrawlerSessionManagerValve extends org.apache.catalina.valves.ValveBase implements javax.servlet.http.HttpSessionBindingListener {
                    /**
                     * Specifies a default constructor so async support can be configured.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Specify the regular expression (using {@link Pattern}) that will be used
                     * to identify crawlers based in the User-Agent header provided. The default
                     * is ".*GoogleBot.*|.*bingbot.*|.*Yahoo! Slurp.*"
                     * @param crawlerUserAgents The regular expression using {#link Pattern}
                     */
                    // @ts-ignore
                    public setCrawlerUserAgents(crawlerUserAgents: java.lang.String | string): void
                    /**
                     * @see #setCrawlerUserAgents(String)
                     * @return The current regular expression being used to match user agents.
                     */
                    // @ts-ignore
                    public getCrawlerUserAgents(): string
                    /**
                     * Specify the regular expression (using {@link Pattern}) that will be used
                     * to identify crawlers based on their IP address. The default is no crawler
                     * IPs.
                     * @param crawlerIps The regular expression using {#link Pattern}
                     */
                    // @ts-ignore
                    public setCrawlerIps(crawlerIps: java.lang.String | string): void
                    /**
                     * @see #setCrawlerIps(String)
                     * @return The current regular expression being used to match IP addresses.
                     */
                    // @ts-ignore
                    public getCrawlerIps(): string
                    /**
                     * Specify the session timeout (in seconds) for a crawler's session. This is
                     * typically lower than that for a user session. The default is 60 seconds.
                     * @param sessionInactiveInterval   The new timeout for crawler sessions
                     */
                    // @ts-ignore
                    public setSessionInactiveInterval(sessionInactiveInterval: number /*int*/): void
                    /**
                     * @see #setSessionInactiveInterval(int)
                     * @return The current timeout in seconds
                     */
                    // @ts-ignore
                    public getSessionInactiveInterval(): number /*int*/
                    // @ts-ignore
                    public getClientIpSessionId(): java.util.Map<java.lang.String | string, java.lang.String | string>
                    // @ts-ignore
                    public isHostAware(): boolean
                    // @ts-ignore
                    public setHostAware(isHostAware: boolean): void
                    // @ts-ignore
                    public isContextAware(): boolean
                    // @ts-ignore
                    public setContextAware(isContextAware: boolean): void
                    // @ts-ignore
                    initInternal(): void
                    // @ts-ignore
                    public invoke(request: org.apache.catalina.connector.Request, response: org.apache.catalina.connector.Response): void
                    // @ts-ignore
                    public valueUnbound(event: javax.servlet.http.HttpSessionBindingEvent): void
                }
            }
        }
    }
}
