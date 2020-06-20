declare namespace org {
    namespace springframework {
        namespace cache {
            namespace support {
                /**
                 * Common base class for {@link Cache} implementations that need to adapt
                 * {@code null} values (and potentially other such special values) before
                 * passing them on to the underlying store.
                 * <p>Transparently replaces given {@code null} user values with an internal
                 * {@link NullValue#INSTANCE}, if configured to support {@code null} values
                 * (as indicated by {@link #isAllowNullValues()}.
                 * @author Juergen Hoeller
                 * @since 4.2.2
                 */
                // @ts-ignore
                class AbstractValueAdaptingCache extends java.lang.Object implements org.springframework.cache.Cache {
                    /**
                     * Create an {@code AbstractValueAdaptingCache} with the given setting.
                     * @param allowNullValues whether to allow for {#code null} values
                     */
                    // @ts-ignore
                    constructor(allowNullValues: boolean)
                    /**
                     * Return whether {@code null} values are allowed in this cache.
                     */
                    // @ts-ignore
                    isAllowNullValues(): boolean
                    // @ts-ignore
                    get(key: any): org.springframework.cache.Cache.ValueWrapper
                    // @ts-ignore
                    get<T>(key: any, type: java.lang.Class<T>): T
                    /**
                     * Perform an actual lookup in the underlying store.
                     * @param key the key whose associated value is to be returned
                     * @return the raw store value for the key, or {#code null} if none
                     */
                    // @ts-ignore
                    abstract lookup(key: any): java.lang.Object
                    /**
                     * Convert the given value from the internal store to a user value
                     * returned from the get method (adapting {@code null}).
                     * @param storeValue the store value
                     * @return the value to return to the user
                     */
                    // @ts-ignore
                    fromStoreValue(storeValue: any): java.lang.Object
                    /**
                     * Convert the given user value, as passed into the put method,
                     * to a value in the internal store (adapting {@code null}).
                     * @param userValue the given user value
                     * @return the value to store
                     */
                    // @ts-ignore
                    toStoreValue(userValue: any): java.lang.Object
                    /**
                     * Wrap the given store value with a {@link SimpleValueWrapper}, also going
                     * through {@link #fromStoreValue} conversion. Useful for {@link #get(Object)}
                     * and {@link #putIfAbsent(Object, Object)} implementations.
                     * @param storeValue the original value
                     * @return the wrapped value
                     */
                    // @ts-ignore
                    toValueWrapper(storeValue: any): org.springframework.cache.Cache.ValueWrapper
                }
            }
        }
    }
}
