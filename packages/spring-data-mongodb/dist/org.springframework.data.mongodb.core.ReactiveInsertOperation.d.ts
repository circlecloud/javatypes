declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * {@link ReactiveInsertOperation} allows creation and execution of reactive MongoDB insert and bulk insert operations
                     * in a fluent API style. <br />
                     * The collection to operate on is by default derived from the initial {@literal domainType} and can be defined there
                     * via {@link org.springframework.data.mongodb.core.mapping.Document}. Using {@code inCollection} allows to override the
                     * collection name for the execution.
                     * <pre>
                     * <code>
                     * insert(Jedi.class)
                     * .inCollection("star-wars")
                     * .one(luke);
                     * </code>
                     * </pre>
                     * @author Mark Paluch
                     * @author Christoph Strobl
                     * @since 2.0
                     */
                    // @ts-ignore
                    interface ReactiveInsertOperation {
                        /**
                         * Start creating an insert operation for given {@literal domainType}.
                         * @param domainType must not be {#literal null}.
                         * @return new instance of {#link ReactiveInsert}. Never {@literal null}.
                         * @throws IllegalArgumentException if domainType is {#literal null}.
                         */
                        // @ts-ignore
                        insert<T>(domainType: java.lang.Class<T>): org.springframework.data.mongodb.core.ReactiveInsertOperation.ReactiveInsert<T>
                    }
                }
            }
        }
    }
}
