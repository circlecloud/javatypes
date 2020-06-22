declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace convert {
                        /**
                         * {@link IndexedData} implementation indicating storage of data within a Redis Set.
                         * @author Christoph Strobl
                         * @author Rob Winch
                         * @since 1.7
                         */
                        // @ts-ignore
                        class SimpleIndexedPropertyValue extends java.lang.Object implements org.springframework.data.redis.core.convert.IndexedData {
                            /**
                             * Creates new {@link SimpleIndexedPropertyValue}.
                             * @param keyspace must not be {#literal null}.
                             * @param indexName must not be {#literal null}.
                             * @param value can be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(keyspace: java.lang.String | string, indexName: java.lang.String | string, value: java.lang.Object | any)
                            /**
                             * Get the value to index.
                             * @return can be {#literal null}.
                             */
                            // @ts-ignore
                            public getValue(): any
                            // @ts-ignore
                            public getIndexName(): string
                            // @ts-ignore
                            public getKeyspace(): string
                        }
                    }
                }
            }
        }
    }
}
