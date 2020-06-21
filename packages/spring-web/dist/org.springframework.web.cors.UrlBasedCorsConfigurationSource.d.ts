declare namespace org {
    namespace springframework {
        namespace web {
            namespace cors {
                /**
                 * Provide a per request {@link CorsConfiguration} instance based on a
                 * collection of {@link CorsConfiguration} mapped on path patterns.
                 * <p>Exact path mapping URIs (such as {@code "/admin"}) are supported
                 * as well as Ant-style path patterns (such as {@code "/admin/**"}).
                 * @author Sebastien Deleuze
                 * @since 4.2
                 */
                // @ts-ignore
                class UrlBasedCorsConfigurationSource extends java.lang.Object implements org.springframework.web.cors.CorsConfigurationSource {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set the PathMatcher implementation to use for matching URL paths
                     * against registered URL patterns. Default is AntPathMatcher.
                     * @see org.springframework.util.AntPathMatcher
                     */
                    // @ts-ignore
                    public setPathMatcher(pathMatcher: PathMatcher): void
                    /**
                     * Shortcut to same property on underlying {@link #setUrlPathHelper UrlPathHelper}.
                     * @see org.springframework.web.util.UrlPathHelper#setAlwaysUseFullPath
                     */
                    // @ts-ignore
                    public setAlwaysUseFullPath(alwaysUseFullPath: boolean): void
                    /**
                     * Shortcut to same property on underlying {@link #setUrlPathHelper UrlPathHelper}.
                     * @see org.springframework.web.util.UrlPathHelper#setUrlDecode
                     */
                    // @ts-ignore
                    public setUrlDecode(urlDecode: boolean): void
                    /**
                     * Optionally configure the name of the attribute that caches the lookupPath.
                     * This is used to make the call to
                     * {@link UrlPathHelper#getLookupPathForRequest(HttpServletRequest, String)}
                     * @param lookupPathAttributeName the request attribute to check
                     * @since 5.2
                     */
                    // @ts-ignore
                    public setLookupPathAttributeName(lookupPathAttributeName: java.lang.String | string): void
                    /**
                     * Shortcut to same property on underlying {@link #setUrlPathHelper UrlPathHelper}.
                     * @see org.springframework.web.util.UrlPathHelper#setRemoveSemicolonContent(boolean)
                     */
                    // @ts-ignore
                    public setRemoveSemicolonContent(removeSemicolonContent: boolean): void
                    /**
                     * Set the UrlPathHelper to use for resolution of lookup paths.
                     * <p>Use this to override the default UrlPathHelper with a custom subclass.
                     */
                    // @ts-ignore
                    public setUrlPathHelper(urlPathHelper: org.springframework.web.util.UrlPathHelper): void
                    /**
                     * Set CORS configuration based on URL patterns.
                     */
                    // @ts-ignore
                    public setCorsConfigurations(corsConfigurations: java.util.Map<java.lang.String | string, org.springframework.web.cors.CorsConfiguration>): void
                    /**
                     * Get the CORS configuration.
                     */
                    // @ts-ignore
                    public getCorsConfigurations(): java.util.Map<java.lang.String | string, org.springframework.web.cors.CorsConfiguration>
                    /**
                     * Register a {@link CorsConfiguration} for the specified path pattern.
                     */
                    // @ts-ignore
                    public registerCorsConfiguration(path: java.lang.String | string, config: org.springframework.web.cors.CorsConfiguration): void
                    // @ts-ignore
                    public getCorsConfiguration(request: HttpServletRequest): org.springframework.web.cors.CorsConfiguration
                }
            }
        }
    }
}
