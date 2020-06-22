declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace convert {
                        /**
                         * {@link IndexResolver} implementation considering properties annotated with {@link Indexed} or paths set up in
                         * {@link IndexConfiguration}.
                         * @author Christoph Strobl
                         * @author Greg Turnquist
                         * @since 1.7
                         */
                        // @ts-ignore
                        class PathIndexResolver extends java.lang.Object implements org.springframework.data.redis.core.convert.IndexResolver {
                            /**
                             * Creates new {@link PathIndexResolver} with empty {@link IndexConfiguration}.
                             */
                            // @ts-ignore
                            constructor()
                            /**
                             * Creates new {@link PathIndexResolver} with given {@link IndexConfiguration}.
                             * @param mappingContext must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(mappingContext: org.springframework.data.redis.core.mapping.RedisMappingContext)
                            // @ts-ignore
                            public resolveIndexesFor(typeInformation: object, value: java.lang.Object | any): Array<org.springframework.data.redis.core.convert.IndexedData>
                            // @ts-ignore
                            public resolveIndexesFor(keyspace: java.lang.String | string, path: java.lang.String | string, typeInformation: object, value: java.lang.Object | any): Array<org.springframework.data.redis.core.convert.IndexedData>
                            // @ts-ignore
                            resolveIndex(keyspace: java.lang.String | string, propertyPath: java.lang.String | string, property: object, value: java.lang.Object | any): Array<org.springframework.data.redis.core.convert.IndexedData>
                        }
                    }
                }
            }
        }
    }
}
