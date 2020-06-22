declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace convert {
                        /**
                         * An {@link IndexResolver} that resolves {@link IndexedData} using a {@link SpelExpressionParser}.
                         * @author Rob Winch
                         * @author Christoph Strobl
                         * @since 1.7
                         */
                        // @ts-ignore
                        class SpelIndexResolver extends java.lang.Object implements org.springframework.data.redis.core.convert.IndexResolver {
                            /**
                             * Creates a new instance using a default {@link SpelExpressionParser}.
                             * @param mappingContext the {#link RedisMappingContext} to use. Cannot be null.
                             */
                            // @ts-ignore
                            constructor(mappingContext: org.springframework.data.redis.core.mapping.RedisMappingContext)
                            /**
                             * Creates a new instance
                             * @param mappingContext the {#link RedisMappingContext} to use. Cannot be null.
                             * @param parser the {#link SpelExpressionParser} to use. Cannot be null.
                             */
                            // @ts-ignore
                            constructor(mappingContext: org.springframework.data.redis.core.mapping.RedisMappingContext, parser: SpelExpressionParser)
                            // @ts-ignore
                            public resolveIndexesFor(typeInformation: object, value: java.lang.Object | any): Array<org.springframework.data.redis.core.convert.IndexedData>
                            // @ts-ignore
                            public resolveIndexesFor(keyspace: java.lang.String | string, path: java.lang.String | string, typeInformation: object, value: java.lang.Object | any): Array<org.springframework.data.redis.core.convert.IndexedData>
                            /**
                             * Allows setting the BeanResolver
                             * @param beanResolver can be {#literal null}.
                             * @see BeanFactoryResolver
                             */
                            // @ts-ignore
                            public setBeanResolver(beanResolver: BeanResolver): void
                        }
                    }
                }
            }
        }
    }
}
