declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace utils {
                /**
                 * A {@code Builder} pattern implementation for a {@link Map}.
                 * @param <B> the builder type.
                 * @param <K> the key type.
                 * @param <V> the value type.
                 * @author Artem Bilan
                 * @author Gary Russell
                 * @since 2.0
                 */
                // @ts-ignore
                class MapBuilder<B extends org.springframework.amqp.utils.MapBuilder<B, K, V>, K, V> extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    put(key: K, value: V): B
                    // @ts-ignore
                    get(): java.util.Map<K, V>
                    // @ts-ignore
                    _this(): B
                }
            }
        }
    }
}
