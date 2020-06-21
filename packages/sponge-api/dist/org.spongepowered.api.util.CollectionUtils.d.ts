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
                    public static copyMap<K, V>(map: java.util.Map<any, any>): java.util.Map<K, V>
                    /**
                     * Attempts to use native {@link Object#clone()} methods on available map
                     * types. If a list cannot be properly cloned, a new {@link ArrayList} is
                     * returned.
                     * @param list The list input
                     * @param <T> The value type
                     * @return A copied list
                     */
                    // @ts-ignore
                    public static copyList<T>(list: java.util.List<any> | Array<any>): Array<T>
                }
            }
        }
    }
}
