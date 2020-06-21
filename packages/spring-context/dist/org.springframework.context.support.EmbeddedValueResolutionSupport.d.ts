declare namespace org {
    namespace springframework {
        namespace context {
            namespace support {
                /**
                 * Convenient base class for components with a need for embedded value resolution
                 * (i.e. {@link org.springframework.context.EmbeddedValueResolverAware} consumers).
                 * @author Juergen Hoeller
                 * @since 4.1
                 */
                // @ts-ignore
                class EmbeddedValueResolutionSupport extends java.lang.Object implements org.springframework.context.EmbeddedValueResolverAware {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public setEmbeddedValueResolver(resolver: StringValueResolver): void
                    /**
                     * Resolve the given embedded value through this instance's {@link StringValueResolver}.
                     * @param value the value to resolve
                     * @return the resolved value, or always the original value if no resolver is available
                     * @see #setEmbeddedValueResolver
                     */
                    // @ts-ignore
                    resolveEmbeddedValue(value: java.lang.String | string): string
                }
            }
        }
    }
}
