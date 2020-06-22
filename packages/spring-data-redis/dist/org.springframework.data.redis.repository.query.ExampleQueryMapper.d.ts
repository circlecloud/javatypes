declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace repository {
                    namespace query {
                        /**
                         * Mapper for Query-by-Example examples to an actual query.
                         * <p/>
                         * This mapper creates a {@link RedisOperationChain} for a given {@link Example} considering exact matches,
                         * {@link PropertyValueTransformer value transformations} and {@link MatchMode} for indexed simple and nested type
                         * properties. {@link java.util.Map} and {@link java.util.Collection} properties are not considered.
                         * <p/>
                         * Example matching is limited to case-sensitive and exact matches only.
                         * @author Mark Paluch
                         * @since 2.1
                         */
                        // @ts-ignore
                        class ExampleQueryMapper extends java.lang.Object {
                            /**
                             * Creates a new {@link ExampleQueryMapper} given {@link MappingContext} and {@link IndexResolver}.
                             * @param mappingContext must not be {#literal null}.
                             * @param indexResolver must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(mappingContext: object, indexResolver: org.springframework.data.redis.core.convert.IndexResolver)
                            /**
                             * Retrieve a mapped {@link RedisOperationChain} to query secondary indexes given {@link Example}.
                             * @param example must not be {#literal null}.
                             * @return the mapped {#link RedisOperationChain}.
                             */
                            // @ts-ignore
                            public getMappedExample(example: object): org.springframework.data.redis.repository.query.RedisOperationChain
                        }
                    }
                }
            }
        }
    }
}
