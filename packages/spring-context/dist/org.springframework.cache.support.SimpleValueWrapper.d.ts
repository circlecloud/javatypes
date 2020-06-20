declare namespace org {
    namespace springframework {
        namespace cache {
            namespace support {
                /**
                 * Straightforward implementation of {@link org.springframework.cache.Cache.ValueWrapper},
                 * simply holding the value as given at construction and returning it from {@link #get()}.
                 * @author Costin Leau
                 * @since 3.1
                 */
                // @ts-ignore
                class SimpleValueWrapper extends java.lang.Object implements org.springframework.cache.Cache.ValueWrapper {
                    /**
                     * Create a new SimpleValueWrapper instance for exposing the given value.
                     * @param value the value to expose (may be {#code null})
                     */
                    // @ts-ignore
                    constructor(value: any)
                    /**
                     * Simply returns the value as given at construction time.
                     */
                    // @ts-ignore
                    get(): java.lang.Object
                }
            }
        }
    }
}
