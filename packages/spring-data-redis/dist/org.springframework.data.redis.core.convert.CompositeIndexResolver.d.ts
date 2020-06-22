declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace convert {
                        /**
                         * Composite {@link IndexResolver} implementation that iterates over a given collection of delegate
                         * {@link IndexResolver} instances. <br />
                         * <br />
                         * <strong>NOTE</strong> {@link IndexedData} created by an {@link IndexResolver} can be overwritten by subsequent
                         * {@link IndexResolver}.
                         * @author Christoph Strobl
                         * @since 1.7
                         */
                        // @ts-ignore
                        class CompositeIndexResolver extends java.lang.Object implements org.springframework.data.redis.core.convert.IndexResolver {
                            /**
                             * Create new {@link CompositeIndexResolver}.
                             * @param resolvers must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(resolvers: java.util.Collection<org.springframework.data.redis.core.convert.IndexResolver> | Array<org.springframework.data.redis.core.convert.IndexResolver>)
                            // @ts-ignore
                            public resolveIndexesFor(typeInformation: object, value: java.lang.Object | any): Array<org.springframework.data.redis.core.convert.IndexedData>
                            // @ts-ignore
                            public resolveIndexesFor(keyspace: java.lang.String | string, path: java.lang.String | string, typeInformation: object, value: java.lang.Object | any): Array<org.springframework.data.redis.core.convert.IndexedData>
                        }
                    }
                }
            }
        }
    }
}
