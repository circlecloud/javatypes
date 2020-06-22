declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace convert {
                        /**
                         * {@link IndexResolver} extracts secondary index structures to be applied on a given path, {@link PersistentProperty}
                         * and value.
                         * @author Christoph Strobl
                         * @since 1.7
                         */
                        // @ts-ignore
                        interface IndexResolver {
                            /**
                             * Resolves all indexes for given type information / value combination.
                             * @param typeInformation must not be {#literal null}.
                             * @param value the actual value. Can be {#literal null}.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            resolveIndexesFor(typeInformation: object, value: java.lang.Object | any): Array<org.springframework.data.redis.core.convert.IndexedData>
                            /**
                             * Resolves all indexes for given type information / value combination.
                             * @param keyspace must not be {#literal null}.
                             * @param path must not be {#literal null}.
                             * @param typeInformation must not be {#literal null}.
                             * @param value the actual value. Can be {#literal null}.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            resolveIndexesFor(keyspace: java.lang.String | string, path: java.lang.String | string, typeInformation: object, value: java.lang.Object | any): Array<org.springframework.data.redis.core.convert.IndexedData>
                        }
                    }
                }
            }
        }
    }
}
