declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * {@link ValueEncoding} is used for the Redis internal data representation used in order to store the value associated
                     * with a key. <br />
                     * <dl>
                     * <dt>Strings</dt>
                     * <dd>{@link RedisValueEncoding#RAW} or {@link RedisValueEncoding#INT}</dd>
                     * <dt>Lists</dt>
                     * <dd>{@link RedisValueEncoding#ZIPLIST} or {@link RedisValueEncoding#LINKEDLIST}</dd>
                     * <dt>Sets</dt>
                     * <dd>{@link RedisValueEncoding#INTSET} or {@link RedisValueEncoding#HASHTABLE}</dd>
                     * <dt>Hashes</dt>
                     * <dd>{@link RedisValueEncoding#ZIPLIST} or {@link RedisValueEncoding#HASHTABLE}</dd>
                     * <dt>Sorted Sets</dt>
                     * <dd>{@link RedisValueEncoding#ZIPLIST} or {@link RedisValueEncoding#SKIPLIST}</dd>
                     * <dt>Absent keys</dt>
                     * <dd>{@link RedisValueEncoding#VACANT}</dd>
                     * </dl>
                     * @author Christoph Strobl
                     * @since 2.1
                     */
                    // @ts-ignore
                    interface ValueEncoding {
                        // @ts-ignore
                        raw(): string
                        /**
                         * Get the {@link ValueEncoding} for given {@code encoding}.
                         * @param encoding can be {#literal null}.
                         * @return never {#literal null}.
                         */
                        // @ts-ignore
                        of(encoding: java.lang.String | string): org.springframework.data.redis.connection.ValueEncoding
                    }
                }
            }
        }
    }
}
