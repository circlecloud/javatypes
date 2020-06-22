declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * {@link ReactiveUpdateOperation} allows creation and execution of reactive MongoDB update / findAndModify /
                     * findAndReplace operations in a fluent API style. <br />
                     * The starting {@literal domainType} is used for mapping the {@link Query} provided via {@code matching}, as well as
                     * the {@link org.springframework.data.mongodb.core.query.Update} via {@code apply} into the MongoDB specific
                     * representations. The collection to operate on is by default derived from the initial {@literal domainType} and can be
                     * defined there via {@link org.springframework.data.mongodb.core.mapping.Document}. Using {@code inCollection} allows
                     * to override the collection name for the execution.
                     * <pre>
                     * <code>
                     * update(Jedi.class)
                     * .inCollection("star-wars")
                     * .matching(query(where("firstname").is("luke")))
                     * .apply(new Update().set("lastname", "skywalker"))
                     * .upsert();
                     * </code>
                     * </pre>
                     * @author Mark Paluch
                     * @author Christoph Strobl
                     * @since 2.0
                     */
                    // @ts-ignore
                    interface ReactiveUpdateOperation {
                        /**
                         * Start creating an update operation for the given {@literal domainType}.
                         * @param domainType must not be {#literal null}.
                         * @return new instance of {#link ReactiveUpdate}. Never {@literal null}.
                         * @throws IllegalArgumentException if domainType is {#literal null}.
                         */
                        // @ts-ignore
                        update<T>(domainType: java.lang.Class<T>): org.springframework.data.mongodb.core.ReactiveUpdateOperation.ReactiveUpdate<T>
                    }
                }
            }
        }
    }
}
