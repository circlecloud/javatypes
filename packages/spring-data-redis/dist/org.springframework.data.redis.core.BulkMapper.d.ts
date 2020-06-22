declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * Mapper translating Redis bulk value responses (typically returned by a sort query) to actual objects. Implementations
                     * of this interface do not have to worry about exception or connection handling.
                     * <p>
                     * Typically used by {@link RedisTemplate} <tt>sort</tt> methods.
                     * @author Costin Leau
                     */
                    // @ts-ignore
                    interface BulkMapper<T, V> {
                        // @ts-ignore
                        mapBulk(tuple: java.util.List<V> | Array<V>): T
                    }
                }
            }
        }
    }
}
