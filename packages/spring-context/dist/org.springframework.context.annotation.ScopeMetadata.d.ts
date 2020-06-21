declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                /**
                 * Describes scope characteristics for a Spring-managed bean including the scope
                 * name and the scoped-proxy behavior.
                 * <p>The default scope is "singleton", and the default is to <i>not</i> create
                 * scoped-proxies.
                 * @author Mark Fisher
                 * @author Juergen Hoeller
                 * @since 2.5
                 * @see ScopeMetadataResolver
                 * @see ScopedProxyMode
                 */
                // @ts-ignore
                class ScopeMetadata extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set the name of the scope.
                     */
                    // @ts-ignore
                    public setScopeName(scopeName: java.lang.String | string): void
                    /**
                     * Get the name of the scope.
                     */
                    // @ts-ignore
                    public getScopeName(): string
                    /**
                     * Set the proxy-mode to be applied to the scoped instance.
                     */
                    // @ts-ignore
                    public setScopedProxyMode(scopedProxyMode: org.springframework.context.annotation.ScopedProxyMode): void
                    /**
                     * Get the proxy-mode to be applied to the scoped instance.
                     */
                    // @ts-ignore
                    public getScopedProxyMode(): org.springframework.context.annotation.ScopedProxyMode
                }
            }
        }
    }
}
