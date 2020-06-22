declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace query {
                        /**
                         * Internal interface part of the Sort DSL. Exposes generic operations.
                         * @author Costin Leau
                         */
                        // @ts-ignore
                        interface SortCriterion<K> {
                            // @ts-ignore
                            limit(offset: number /*long*/, count: number /*long*/): org.springframework.data.redis.core.query.SortCriterion<K>
                            // @ts-ignore
                            limit(range: org.springframework.data.redis.connection.SortParameters.Range): org.springframework.data.redis.core.query.SortCriterion<K>
                            // @ts-ignore
                            order(order: org.springframework.data.redis.connection.SortParameters.Order): org.springframework.data.redis.core.query.SortCriterion<K>
                            // @ts-ignore
                            alphabetical(alpha: boolean): org.springframework.data.redis.core.query.SortCriterion<K>
                            // @ts-ignore
                            get(pattern: java.lang.String | string): org.springframework.data.redis.core.query.SortCriterion<K>
                            // @ts-ignore
                            build(): org.springframework.data.redis.core.query.SortQuery<K>
                        }
                    }
                }
            }
        }
    }
}
