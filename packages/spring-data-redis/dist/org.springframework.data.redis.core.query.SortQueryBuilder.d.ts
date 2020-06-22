declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace query {
                        /**
                         * Simple builder class for constructing {@link SortQuery}.
                         * @author Costin Leau
                         */
                        // @ts-ignore
                        class SortQueryBuilder<K> extends org.springframework.data.redis.core.query.DefaultSortCriterion<K> {
                            // @ts-ignore
                            public static sort<K>(key: K): org.springframework.data.redis.core.query.SortQueryBuilder<K>
                            // @ts-ignore
                            public by(keyPattern: java.lang.String | string): org.springframework.data.redis.core.query.SortCriterion<K>
                            // @ts-ignore
                            public noSort(): org.springframework.data.redis.core.query.SortCriterion<K>
                        }
                    }
                }
            }
        }
    }
}
