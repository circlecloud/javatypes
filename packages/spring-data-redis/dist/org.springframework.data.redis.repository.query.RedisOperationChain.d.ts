declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace repository {
                    namespace query {
                        /**
                         * Simple set of operations required to run queries against Redis.
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 1.7
                         */
                        // @ts-ignore
                        class RedisOperationChain extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public isEmpty(): boolean
                            // @ts-ignore
                            public sismember(path: java.lang.String | string, value: java.lang.Object | any): void
                            // @ts-ignore
                            public sismember(pathAndValue: org.springframework.data.redis.repository.query.RedisOperationChain.PathAndValue): void
                            // @ts-ignore
                            public getSismember(): Array<org.springframework.data.redis.repository.query.RedisOperationChain.PathAndValue>
                            // @ts-ignore
                            public orSismember(path: java.lang.String | string, value: java.lang.Object | any): void
                            // @ts-ignore
                            public orSismember(pathAndValue: org.springframework.data.redis.repository.query.RedisOperationChain.PathAndValue): void
                            // @ts-ignore
                            public orSismember(next: java.util.Collection<org.springframework.data.redis.repository.query.RedisOperationChain.PathAndValue> | Array<org.springframework.data.redis.repository.query.RedisOperationChain.PathAndValue>): void
                            // @ts-ignore
                            public getOrSismember(): Array<org.springframework.data.redis.repository.query.RedisOperationChain.PathAndValue>
                            // @ts-ignore
                            public near(near: org.springframework.data.redis.repository.query.RedisOperationChain.NearPath): void
                            // @ts-ignore
                            public getNear(): org.springframework.data.redis.repository.query.RedisOperationChain.NearPath
                        }
                    }
                }
            }
        }
    }
}
