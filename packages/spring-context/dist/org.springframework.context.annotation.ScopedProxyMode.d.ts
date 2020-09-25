declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                /**
                 * Enumerates the various scoped-proxy options.
                 * <p>For a more complete discussion of exactly what a scoped proxy is, see the
                 * section of the Spring reference documentation entitled '<em>Scoped beans as
                 * dependencies</em>'.
                 * @author Mark Fisher
                 * @since 2.5
                 * @see ScopeMetadata
                 */
                // @ts-ignore
                class ScopedProxyMode extends java.lang.Enum<org.springframework.context.annotation.ScopedProxyMode> {
                    /**
                     * Default typically equals {@link #NO}, unless a different default
                     * has been configured at the component-scan instruction level.
                     */
                    // @ts-ignore
                    public static readonly DEFAULT: org.springframework.context.annotation.ScopedProxyMode
                    /**
                     * Do not create a scoped proxy.
                     * <p>This proxy-mode is not typically useful when used with a
                     * non-singleton scoped instance, which should favor the use of the
                     * {@link #INTERFACES} or {@link #TARGET_CLASS} proxy-modes instead if it
                     * is to be used as a dependency.
                     */
                    // @ts-ignore
                    public static readonly NO: org.springframework.context.annotation.ScopedProxyMode
                    /**
                     * Create a JDK dynamic proxy implementing <i>all</i> interfaces exposed by
                     * the class of the target object.
                     */
                    // @ts-ignore
                    public static readonly INTERFACES: org.springframework.context.annotation.ScopedProxyMode
                    /**
                     * Create a class-based proxy (uses CGLIB).
                     */
                    // @ts-ignore
                    public static readonly TARGET_CLASS: org.springframework.context.annotation.ScopedProxyMode
                    // @ts-ignore
                    public static values(): org.springframework.context.annotation.ScopedProxyMode[]
                    // @ts-ignore
                    public static valueOf(name: java.lang.String | string): org.springframework.context.annotation.ScopedProxyMode
                }
            }
        }
    }
}
