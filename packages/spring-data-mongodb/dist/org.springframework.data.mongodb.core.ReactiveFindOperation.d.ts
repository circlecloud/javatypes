declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * {@link ReactiveFindOperation} allows creation and execution of reactive MongoDB find operations in a fluent API
                     * style. <br />
                     * The starting {@literal domainType} is used for mapping the {@link Query} provided via {@code matching} into the
                     * MongoDB specific representation. By default, the originating {@literal domainType} is also used for mapping back the
                     * result from the {@link org.bson.Document}. However, it is possible to define an different {@literal returnType} via
                     * {@code as} to mapping the result.<br />
                     * The collection to operate on is by default derived from the initial {@literal domainType} and can be defined there
                     * via {@link org.springframework.data.mongodb.core.mapping.Document}. Using {@code inCollection} allows to override the
                     * collection name for the execution.
                     * <pre>
                     * <code>
                     * query(Human.class)
                     * .inCollection("star-wars")
                     * .as(Jedi.class)
                     * .matching(query(where("firstname").is("luke")))
                     * .all();
                     * </code>
                     * </pre>
                     * @author Mark Paluch
                     * @author Christoph Strobl
                     * @since 2.0
                     */
                    // @ts-ignore
                    interface ReactiveFindOperation {
                        /**
                         * Start creating a find operation for the given {@literal domainType}.
                         * @param domainType must not be {#literal null}.
                         * @return new instance of {#link ReactiveFind}. Never {@literal null}.
                         * @throws IllegalArgumentException if domainType is {#literal null}.
                         */
                        // @ts-ignore
                        query<T>(domainType: java.lang.Class<T>): org.springframework.data.mongodb.core.ReactiveFindOperation.ReactiveFind<T>
                    }
                }
            }
        }
    }
}
