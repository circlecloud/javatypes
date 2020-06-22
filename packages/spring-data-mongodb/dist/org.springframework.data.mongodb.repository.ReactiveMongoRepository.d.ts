declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace repository {
                    /**
                     * Mongo specific {@link org.springframework.data.repository.Repository} interface with reactive support.
                     * @author Mark Paluch
                     * @since 2.0
                     */
                    // @ts-ignore
                    interface ReactiveMongoRepository<T, ID> {
                        /**
                         * Inserts the given entity. Assumes the instance to be new to be able to apply insertion optimizations. Use the
                         * returned instance for further operations as the save operation might have changed the entity instance completely.
                         * Prefer using {@link #save(Object)} instead to avoid the usage of store-specific API.
                         * @param entity must not be {#literal null}.
                         * @return the saved entity
                         */
                        // @ts-ignore
                        insert<S extends T>(entity: S): object
                        /**
                         * Inserts the given entities. Assumes the instance to be new to be able to apply insertion optimizations. Use the
                         * returned instance for further operations as the save operation might have changed the entity instance completely.
                         * Prefer using {@link #save(Object)} instead to avoid the usage of store-specific API.
                         * @param entities must not be {#literal null}.
                         * @return the saved entity
                         */
                        // @ts-ignore
                        insert<S extends T>(entities: java.lang.Iterable<S>): object
                        /**
                         * Inserts the given entities. Assumes the instance to be new to be able to apply insertion optimizations. Use the
                         * returned instance for further operations as the save operation might have changed the entity instance completely.
                         * Prefer using {@link #save(Object)} instead to avoid the usage of store-specific API.
                         * @param entities must not be {#literal null}.
                         * @return the saved entity
                         */
                        // @ts-ignore
                        insert<S extends T>(entities: object): object
                        // @ts-ignore
                        findAll<S extends T>(example: object): object
                        // @ts-ignore
                        findAll<S extends T>(example: object, sort: Sort): object
                    }
                }
            }
        }
    }
}
