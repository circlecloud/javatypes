declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace convert {
                        /**
                         * Mapper from {@link Example} to a query {@link Document}.
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @author Jens Schauder
                         * @since 1.8
                         * @see Example
                         * @see org.springframework.data.domain.ExampleMatcher
                         * @see UntypedExampleMatcher
                         */
                        // @ts-ignore
                        class MongoExampleMapper extends java.lang.Object {
                            /**
                             * Create a new {@link MongoTypeMapper} given {@link MongoConverter}.
                             * @param converter must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(converter: org.springframework.data.mongodb.core.convert.MongoConverter)
                            /**
                             * Returns the given {@link Example} as {@link Document} holding matching values extracted from
                             * {@link Example#getProbe()}.
                             * @param example must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public getMappedExample(example: object): Document
                            /**
                             * Returns the given {@link Example} as {@link Document} holding matching values extracted from
                             * {@link Example#getProbe()}.
                             * @param example must not be {#literal null}.
                             * @param entity must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public getMappedExample(example: object, entity: org.springframework.data.mongodb.core.mapping.MongoPersistentEntity<any>): Document
                        }
                    }
                }
            }
        }
    }
}
