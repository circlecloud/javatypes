declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace repository {
                    namespace query {
                        /**
                         * Redis specific query creator.
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 1.7
                         */
                        // @ts-ignore
                        class RedisQueryCreator extends java.lang.Object {
                            // @ts-ignore
                            constructor(tree: PartTree, parameters: ParameterAccessor)
                            // @ts-ignore
                            create(part: Part, iterator: java.util.Iterator<java.lang.Object | any>): org.springframework.data.redis.repository.query.RedisOperationChain
                            // @ts-ignore
                            and(part: Part, base: org.springframework.data.redis.repository.query.RedisOperationChain, iterator: java.util.Iterator<java.lang.Object | any>): org.springframework.data.redis.repository.query.RedisOperationChain
                            // @ts-ignore
                            or(base: org.springframework.data.redis.repository.query.RedisOperationChain, criteria: org.springframework.data.redis.repository.query.RedisOperationChain): org.springframework.data.redis.repository.query.RedisOperationChain
                            // @ts-ignore
                            complete(criteria: org.springframework.data.redis.repository.query.RedisOperationChain, sort: Sort): object
                        }
                    }
                }
            }
        }
    }
}
