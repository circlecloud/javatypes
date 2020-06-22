declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace repository {
                    /**
                     * Mongo specific {@link org.springframework.data.repository.Repository} interface.
                     * @author Oliver Gierke
                     * @author Christoph Strobl
                     * @author Thomas Darimont
                     * @author Mark Paluch
                     * @author Khaled Baklouti
                     */
                    // @ts-ignore
                    interface MongoRepository<T, ID> {
                        // @ts-ignore
                        saveAll<S extends T>(entities: java.lang.Iterable<S>): Array<S>
                        // @ts-ignore
                        findAll(): Array<T>
                        // @ts-ignore
                        findAll(sort: Sort): Array<T>
                        /**
                         * Inserts the given entity. Assumes the instance to be new to be able to apply insertion optimizations. Use the
                         * returned instance for further operations as the save operation might have changed the entity instance completely.
                         * Prefer using {@link #save(Object)} instead to avoid the usage of store-specific API.
                         * @param entity must not be {#literal null}.
                         * @return the saved entity
                         * @since 1.7
                         */
                        // @ts-ignore
                        insert<S extends T>(entity: S): S
                        /**
                         * Inserts the given entities. Assumes the given entities to have not been persisted yet and thus will optimize the
                         * insert over a call to {@link #save(Iterable)}. Prefer using {@link #save(Iterable)} to avoid the usage of store
                         * specific API.
                         * @param entities must not be {#literal null}.
                         * @return the saved entities
                         * @since 1.7
                         */
                        // @ts-ignore
                        insert<S extends T>(entities: java.lang.Iterable<S>): Array<S>
                        // @ts-ignore
                        findAll<S extends T>(example: object): Array<S>
                        // @ts-ignore
                        findAll<S extends T>(example: object, sort: Sort): Array<S>
                    }
                }
            }
        }
    }
}
