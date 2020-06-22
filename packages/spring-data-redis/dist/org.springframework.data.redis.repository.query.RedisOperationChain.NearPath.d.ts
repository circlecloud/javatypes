declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace repository {
                    namespace query {
                        namespace RedisOperationChain {
                            /**
                             * @since 1.8
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class NearPath extends org.springframework.data.redis.repository.query.RedisOperationChain.PathAndValue {
                                // @ts-ignore
                                constructor(path: java.lang.String | string, point: Point, distance: Distance)
                                // @ts-ignore
                                public getPoint(): Point
                                // @ts-ignore
                                public getDistance(): Distance
                            }
                        }
                    }
                }
            }
        }
    }
}
