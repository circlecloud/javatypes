declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * {@link ExecutableInsertOperation} allows creation and execution of MongoDB insert and bulk insert operations in a
                     * fluent API style. <br />
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
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 2.0
                     */
                    // @ts-ignore
                    interface ExecutableInsertOperation {
                        /**
                         * Start creating an insert operation for given {@literal domainType}.
                         * @param domainType must not be {#literal null}.
                         * @return new instance of {#link ExecutableInsert}.
                         * @throws IllegalArgumentException if domainType is {#literal null}.
                         */
                        // @ts-ignore
                        insert<T>(domainType: java.lang.Class<T>): org.springframework.data.mongodb.core.ExecutableInsertOperation.ExecutableInsert<T>
                    }
                }
            }
        }
    }
}
