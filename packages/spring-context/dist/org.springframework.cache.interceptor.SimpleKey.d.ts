declare namespace org {
    namespace springframework {
        namespace cache {
            namespace interceptor {
                /**
                 * A simple key as returned from the {@link SimpleKeyGenerator}.
                 * @author Phillip Webb
                 * @author Juergen Hoeller
                 * @since 4.0
                 * @see SimpleKeyGenerator
                 */
                // @ts-ignore
                class SimpleKey extends java.lang.Object implements java.io.Serializable {
                    /**
                     * Create a new {@link SimpleKey} instance.
                     * @param elements the elements of the key
                     */
                    // @ts-ignore
                    constructor(...elements: any[])
                    /**
                     * An empty key.
                     */
                    // @ts-ignore
                    readonly EMPTY: org.springframework.cache.interceptor.SimpleKey
                    // @ts-ignore
                    equals(other: any): boolean
                    // @ts-ignore
                    hashCode(): int
                    // @ts-ignore
                    toString(): java.lang.String
                }
            }
        }
    }
}
