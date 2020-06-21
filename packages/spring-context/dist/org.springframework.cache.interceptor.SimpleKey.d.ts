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
                    constructor(...elements: java.lang.Object[] | any[])
                    /**
                     * An empty key.
                     */
                    // @ts-ignore
                    public static readonly EMPTY: org.springframework.cache.interceptor.SimpleKey
                    // @ts-ignore
                    public equals(other: java.lang.Object | any): boolean
                    // @ts-ignore
                    public hashCode(): number /*int*/
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
