declare namespace org {
    namespace springframework {
        namespace cache {
            namespace support {
                /**
                 * Simple serializable class that serves as a {@code null} replacement
                 * for cache stores which otherwise do not support {@code null} values.
                 * @author Juergen Hoeller
                 * @since 4.2.2
                 * @see AbstractValueAdaptingCache
                 */
                // @ts-ignore
                class NullValue extends java.lang.Object implements java.io.Serializable {
                    /**
                     * The canonical representation of a {@code null} replacement, as used by the
                     * default implementation of {@link AbstractValueAdaptingCache#toStoreValue}/
                     * {@link AbstractValueAdaptingCache#fromStoreValue}.
                     * @since 4.3.10
                     */
                    // @ts-ignore
                    readonly INSTANCE: any
                    // @ts-ignore
                    equals(obj: any): boolean
                    // @ts-ignore
                    hashCode(): int
                    // @ts-ignore
                    toString(): java.lang.String
                }
            }
        }
    }
}
