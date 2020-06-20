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
                    setPathMatcher(pathMatcher: PathMatcher): void
                    /**
                     * Shortcut to same property on underlying {@link #setUrlPathHelper UrlPathHelper}.
                     * @see org.springframework.web.util.UrlPathHelper#setAlwaysUseFullPath
                     */
                    // @ts-ignore
                    setAlwaysUseFullPath(alwaysUseFullPath: boolean): void
                    /**
                     * Shortcut to same property on underlying {@link #setUrlPathHelper UrlPathHelper}.
                     * @see org.springframework.web.util.UrlPathHelper#setUrlDecode
                     */
                    // @ts-ignore
                    setUrlDecode(urlDecode: boolean): void
                    /**
                     * Optionally configure the name of the attribute that caches the lookupPath.
                     * This is used to make the call to
                     * {@link UrlPathHelper#getLookupPathForRequest(HttpServletRequest, String)}
                     * @param lookupPathAttributeName the request attribute to check
                     * @since 5.2
                     */
                    // @ts-ignore
                    setLookupPathAttributeName(lookupPathAttributeName: string): void
                    /**
                     * Shortcut to same property on underlying {@link #setUrlPathHelper UrlPathHelper}.
                     * @see org.springframework.web.util.UrlPathHelper#setRemoveSemicolonContent(boolean)
                     */
                    // @ts-ignore
                    setRemoveSemicolonContent(removeSemicolonContent: boolean): void
                    /**
                     * Set the UrlPathHelper to use for resolution of lookup paths.
                     * <p>Use this to override the default UrlPathHelper with a custom subclass.
                     */
                    // @ts-ignore
                    setUrlPathHelper(urlPathHelper: org.springframework.web.util.UrlPathHelper): void
                    /**
                     * Set CORS configuration based on URL patterns.
                     */
                    // @ts-ignore
                    setCorsConfigurations(corsConfigurations: java.util.Map<java.lang.String, org.springframework.web.cors.CorsConfiguration>): void
                    /**
                     * Get the CORS configuration.
                     */
                    // @ts-ignore
                    getCorsConfigurations(): java.util.Map<java.lang.String, org.springframework.web.cors.CorsConfiguration>
                    /**
                     * Register a {@link CorsConfiguration} for the specified path pattern.
                     */
                    // @ts-ignore
                    registerCorsConfiguration(path: string, config: org.springframework.web.cors.CorsConfiguration): void
                    // @ts-ignore
                    getCorsConfiguration(request: HttpServletRequest): org.springframework.web.cors.CorsConfiguration
                }
            }
        }
    }
}
