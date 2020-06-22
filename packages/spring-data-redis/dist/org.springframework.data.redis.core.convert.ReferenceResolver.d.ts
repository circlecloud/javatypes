declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace convert {
                        /**
                         * {@link ReferenceResolver} retrieves Objects marked with {@link Reference} from Redis.
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 1.7
                         */
                        // @ts-ignore
                        interface ReferenceResolver {
                            /**
                             * @param id must not be {#literal null}.
                             * @param keyspace must not be {#literal null}.
                             * @return {#literal null} if referenced object does not exist.
                             */
                            // @ts-ignore
                            resolveReference(id: java.lang.Object | any, keyspace: java.lang.String | string): java.util.Map<number /*byte*/[], number /*byte*/[]>
                        }
                    }
                }
            }
        }
    }
}
