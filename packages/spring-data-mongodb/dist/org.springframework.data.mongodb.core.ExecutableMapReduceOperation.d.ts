declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * {@link ExecutableMapReduceOperation} allows creation and execution of MongoDB mapReduce operations in a fluent API
                     * style. The starting {@literal domainType} is used for mapping an optional {@link Query} provided via {@code matching}
                     * into the MongoDB specific representation. By default, the originating {@literal domainType} is also used for mapping
                     * back the results from the {@link org.bson.Document}. However, it is possible to define an different
                     * {@literal returnType} via {@code as} to mapping the result.<br />
                     * The collection to operate on is by default derived from the initial {@literal domainType} and can be defined there
                     * via {@link org.springframework.data.mongodb.core.mapping.Document}. Using {@code inCollection} allows to override the
                     * collection name for the execution.
                     * <pre>
                     * <code>
                     * mapReduce(Human.class)
                     * .map("function() { emit(this.id, this.firstname) }")
                     * .reduce("function(id, name) { return sum(id, name); }")
                     * .inCollection("star-wars")
                     * .as(Jedi.class)
                     * .matching(query(where("lastname").is("skywalker")))
                     * .all();
                     * </code>
                     * </pre>
                     * @author Christoph Strobl
                     * @since 2.1
                     */
                    // @ts-ignore
                    interface ExecutableMapReduceOperation {
                        /**
                         * Start creating a mapReduce operation for the given {@literal domainType}.
                         * @param domainType must not be {#literal null}.
                         * @return new instance of {#link ExecutableFind}.
                         * @throws IllegalArgumentException if domainType is {#literal null}.
                         */
                        // @ts-ignore
                        mapReduce<T>(domainType: java.lang.Class<T>): org.springframework.data.mongodb.core.ExecutableMapReduceOperation.MapReduceWithMapFunction<T>
                    }
                }
            }
        }
    }
}
