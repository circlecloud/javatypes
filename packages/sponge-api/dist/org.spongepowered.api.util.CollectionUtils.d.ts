declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                // @ts-ignore
                class CollectionUtils extends java.lang.Object {
                    /**
                     * Attempts to use native {@link Object#clone()} methods on available map
                     * types. If a map cannot be properly cloned, a new {@link HashMap} is
                     * returned.
                     * @param map The map input
                     * @param <K> The key type
                     * @param <V> The value type
                     * @return A copied map
                     */
                    // @ts-ignore
                    copyMap<K, V>(map: java.util.Map<K, V>): java.util.Map<K, V>
                    /**
                     * Attempts to use native {@link Object#clone()} methods on available map
                     * types. If a list cannot be properly cloned, a new {@link ArrayList} is
                     * returned.
                     * @param list The list input
                     * @param <T> The value type
                     * @return A copied list
                     */
                    // @ts-ignore
                    copyList<T>(list: Array<T>): java.util.List<T>
                }
            }
        }
    }
}
