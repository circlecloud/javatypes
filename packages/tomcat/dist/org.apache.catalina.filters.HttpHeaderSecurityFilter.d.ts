declare namespace org {
    namespace apache {
        namespace catalina {
            namespace filters {
                /**
                 * Provides a single configuration point for security measures that required the
                 * addition of one or more HTTP headers to the response.
                 */
                // @ts-ignore
                class HttpHeaderSecurityFilter extends org.apache.catalina.filters.FilterBase {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public init(filterConfig: javax.servlet.FilterConfig): void
                    // @ts-ignore
                    public doFilter(request: javax.servlet.ServletRequest, response: javax.servlet.ServletResponse, chain: javax.servlet.FilterChain): void
                    // @ts-ignore
                    getLogger(): org.apache.juli.logging.Log
                    // @ts-ignore
                    isConfigProblemFatal(): boolean
                    // @ts-ignore
                    public isHstsEnabled(): boolean
                    // @ts-ignore
                    public setHstsEnabled(hstsEnabled: boolean): void
                    // @ts-ignore
                    public getHstsMaxAgeSeconds(): number /*int*/
                    // @ts-ignore
                    public setHstsMaxAgeSeconds(hstsMaxAgeSeconds: number /*int*/): void
                    // @ts-ignore
                    public isHstsIncludeSubDomains(): boolean
                    // @ts-ignore
                    public setHstsIncludeSubDomains(hstsIncludeSubDomains: boolean): void
                    // @ts-ignore
                    public isHstsPreload(): boolean
                    // @ts-ignore
                    public setHstsPreload(hstsPreload: boolean): void
                    // @ts-ignore
                    public isAntiClickJackingEnabled(): boolean
                    // @ts-ignore
                    public setAntiClickJackingEnabled(antiClickJackingEnabled: boolean): void
                    // @ts-ignore
                    public getAntiClickJackingOption(): string
                    // @ts-ignore
                    public setAntiClickJackingOption(antiClickJackingOption: java.lang.String | string): void
                    // @ts-ignore
                    public getAntiClickJackingUri(): string
                    // @ts-ignore
                    public isBlockContentTypeSniffingEnabled(): boolean
                    // @ts-ignore
                    public setBlockContentTypeSniffingEnabled(blockContentTypeSniffingEnabled: boolean): void
                    // @ts-ignore
                    public setAntiClickJackingUri(antiClickJackingUri: java.lang.String | string): void
                    // @ts-ignore
                    public isXssProtectionEnabled(): boolean
                    // @ts-ignore
                    public setXssProtectionEnabled(xssProtectionEnabled: boolean): void
                }
            }
        }
    }
}
