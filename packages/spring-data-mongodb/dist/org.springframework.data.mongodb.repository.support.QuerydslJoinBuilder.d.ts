declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace repository {
                    namespace support {
                        /**
                         * {@code QuerydslJoinBuilder} is a builder for join constraints.
                         * <p>
                         * Original implementation source {@link com.querydsl.mongodb.JoinBuilder} by {@literal The Querydsl Team}
                         * (<a href="https://www.querydsl.com/team">https://www.querydsl.com/team</a>) licensed under the Apache License, Version
                         * 2.0.
                         * </p>
                         * Modified for usage with {@link QuerydslAbstractMongodbQuery}.
                         * @param <Q>
                         * @param <T>
                         * @author tiwe
                         * @author Mark Paluch
                         * @author Christoph Strobl
                         * @since 2.1
                         */
                        // @ts-ignore
                        class QuerydslJoinBuilder<Q extends org.springframework.data.mongodb.repository.support.QuerydslAbstractMongodbQuery<K, Q>, K, T> extends java.lang.Object {
                            /**
                             * Add the given join conditions.
                             * @param conditions must not be {#literal null}.
                             * @return the target {#link QueryMixin}.
                             * @see QueryMixin#on(Predicate)
                             */
                            // @ts-ignore
                            public on(...conditions: Predicate[]): Q
                        }
                    }
                }
            }
        }
    }
}
