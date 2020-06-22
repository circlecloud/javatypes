declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * {@link ExecutableRemoveOperation} allows creation and execution of MongoDB remove / findAndRemove operations in a
                     * fluent API style. <br />
                     * The starting {@literal domainType} is used for mapping the {@link Query} provided via {@code matching} into the
                     * MongoDB specific representation. The collection to operate on is by default derived from the initial
                     * {@literal domainType} and can be defined there via {@link org.springframework.data.mongodb.core.mapping.Document}.
                     * Using {@code inCollection} allows to override the collection name for the execution.
                     * <pre>
                     * <code>
                     * remove(Jedi.class)
                     * .inCollection("star-wars")
                     * .matching(query(where("firstname").is("luke")))
                     * .all();
                     * </code>
                     * </pre>
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 2.0
                     */
                    // @ts-ignore
                    interface ExecutableRemoveOperation {
                        /**
                         * Start creating a remove operation for the given {@literal domainType}.
                         * @param domainType must not be {#literal null}.
                         * @return new instance of {#link ExecutableRemove}.
                         * @throws IllegalArgumentException if domainType is {#literal null}.
                         */
                        // @ts-ignore
                        remove<T>(domainType: java.lang.Class<T>): org.springframework.data.mongodb.core.ExecutableRemoveOperation.ExecutableRemove<T>
                    }
                }
            }
        }
    }
}
