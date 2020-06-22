declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace query {
                        /**
                         * High-level abstraction over a Redis SORT (generified equivalent of {@link SortParameters}). To be used with
                         * {@link RedisTemplate} (just as {@link SortParameters} is used by {@link RedisConnection}).
                         * @author Costin Leau
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        interface SortQuery<K> {
                            /**
                             * Return the target key for sorting.
                             * @return the target key
                             */
                            // @ts-ignore
                            getKey(): K
                            /**
                             * Returns the sorting order. Can be null if nothing is specified.
                             * @return sorting order
                             */
                            // @ts-ignore
                            getOrder(): org.springframework.data.redis.connection.SortParameters.Order
                            /**
                             * Indicates if the sorting is numeric (default) or alphabetical (lexicographical). Can be null if nothing is
                             * specified.
                             * @return the type of sorting
                             */
                            // @ts-ignore
                            isAlphabetic(): java.lang.Boolean
                            /**
                             * Returns the sorting limit (range or pagination). Can be null if nothing is specified.
                             * @return sorting limit/range
                             */
                            // @ts-ignore
                            getLimit(): org.springframework.data.redis.connection.SortParameters.Range
                            /**
                             * Returns the pattern of the external key used for sorting.
                             * @return the external key pattern
                             */
                            // @ts-ignore
                            getBy(): string
                            /**
                             * Returns the external key(s) whose values are returned by the sort.
                             * @return the (list of) keys used for GET
                             */
                            // @ts-ignore
                            getGetPattern(): Array<java.lang.String | string>
                        }
                    }
                }
            }
        }
    }
}
