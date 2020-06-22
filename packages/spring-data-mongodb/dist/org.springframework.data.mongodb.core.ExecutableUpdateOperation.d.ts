declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * {@link ExecutableUpdateOperation} allows creation and execution of MongoDB update / findAndModify / findAndReplace
                     * operations in a fluent API style. <br />
                     * The starting {@literal domainType} is used for mapping the {@link Query} provided via {@code matching}, as well as
                     * the {@link Update} via {@code apply} into the MongoDB specific representations. The collection to operate on is by
                     * default derived from the initial {@literal domainType} and can be defined there via
                     * {@link org.springframework.data.mongodb.core.mapping.Document}. Using {@code inCollection} allows to override the
                     * collection name for the execution.
                     * <pre>
                     * <code>
                     * update(Jedi.class)
                     * .inCollection("star-wars")
                     * .matching(query(where("firstname").is("luke")))
                     * .apply(new Update().set("lastname", "skywalker"))
                     * .upsert();
                     * </code>
                     * </pre>
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 2.0
                     */
                    // @ts-ignore
                    interface ExecutableUpdateOperation {
                        /**
                         * Start creating an update operation for the given {@literal domainType}.
                         * @param domainType must not be {#literal null}.
                         * @return new instance of {#link ExecutableUpdate}.
                         * @throws IllegalArgumentException if domainType is {#literal null}.
                         */
                        // @ts-ignore
                        update<T>(domainType: java.lang.Class<T>): org.springframework.data.mongodb.core.ExecutableUpdateOperation.ExecutableUpdate<T>
                    }
                }
            }
        }
    }
}
