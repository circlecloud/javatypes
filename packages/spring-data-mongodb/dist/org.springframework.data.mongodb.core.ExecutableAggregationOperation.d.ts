declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * {@link ExecutableAggregationOperation} allows creation and execution of MongoDB aggregation operations in a fluent
                     * API style. <br />
                     * The starting {@literal domainType} is used for mapping the {@link Aggregation} provided via {@code by} into the
                     * MongoDB specific representation, as well as mapping back the resulting {@link org.bson.Document}. An alternative
                     * input type for mapping the {@link Aggregation} can be provided by using
                     * {@link org.springframework.data.mongodb.core.aggregation.TypedAggregation}.
                     * <pre>
                     * <code>
                     * aggregateAndReturn(Jedi.class)
                     * .by(newAggregation(Human.class, project("These are not the droids you are looking for")))
                     * .all();
                     * </code>
                     * </pre>
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 2.0
                     */
                    // @ts-ignore
                    interface ExecutableAggregationOperation {
                        /**
                         * Start creating an aggregation operation that returns results mapped to the given domain type. <br />
                         * Use {@link org.springframework.data.mongodb.core.aggregation.TypedAggregation} to specify a potentially different
                         * input type for he aggregation.
                         * @param domainType must not be {#literal null}.
                         * @return new instance of {#link ExecutableAggregation}.
                         * @throws IllegalArgumentException if domainType is {#literal null}.
                         */
                        // @ts-ignore
                        aggregateAndReturn<T>(domainType: java.lang.Class<T>): org.springframework.data.mongodb.core.ExecutableAggregationOperation.ExecutableAggregation<T>
                    }
                }
            }
        }
    }
}
