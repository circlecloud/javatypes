declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace repository {
                    namespace support {
                        /**
                         * {@code QuerydslAnyEmbeddedBuilder} is a builder for constraints on embedded objects.
                         * <p>
                         * Original implementation source {@link com.querydsl.mongodb.AnyEmbeddedBuilder} by {@literal The Querydsl Team}
                         * (<a href="https://www.querydsl.com/team">https://www.querydsl.com/team</a>) licensed under the Apache License, Version
                         * 2.0.
                         * </p>
                         * Modified for usage with {@link QuerydslAbstractMongodbQuery}.
                         * @param <Q> query type
                         * @author tiwe
                         * @author Mark Paluch
                         * @author Christoph Strobl
                         * @since 2.1
                         */
                        // @ts-ignore
                        class QuerydslAnyEmbeddedBuilder<Q extends org.springframework.data.mongodb.repository.support.QuerydslAbstractMongodbQuery<K, Q>, K> extends java.lang.Object {
                            /**
                             * Add the given where conditions.
                             * @param conditions must not be {#literal null}.
                             * @return the target {#link QueryMixin}.
                             * @see QueryMixin#where(Predicate)
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
