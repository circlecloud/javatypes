declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                /**
                 * A tuple of objects. This can be considered a {@link Pair}.
                 * @param <K> The key
                 * @param <V> The value
                 */
                // @ts-ignore
                class Tuple<K, V> extends java.lang.Object {
                    /**
                     * Creates a new {@link Tuple}.
                     * @param first The first object
                     * @param second The second object
                     */
                    // @ts-ignore
                    constructor(first: K, second: V)
                    /**
                     * Creates a new {@link Tuple} with the desired {@code first} and
                     * {@code second} objects.
                     * @param first The first object
                     * @param second The second object
                     * @param <K> The type of first object
                     * @param <V> The type of second object
                     * @return The new Tuple
                     */
                    // @ts-ignore
                    public static of<K, V>(first: K, second: V): org.spongepowered.api.util.Tuple<K, V>
                    /**
                     * Gets the first object, otherwise known as "key".
                     * @return The first object
                     */
                    // @ts-ignore
                    public getFirst(): K
                    /**
                     * Gets the second object, otherwise known as "value".
                     * @return The value
                     */
                    // @ts-ignore
                    public getSecond(): V
                    // @ts-ignore
                    public toString(): string
                    // @ts-ignore
                    public hashCode(): number /*int*/
                    // @ts-ignore
                    public equals(obj: java.lang.Object | any): boolean
                }
            }
        }
    }
}
