declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * Callback interface for executing actions against a {@link MongoCollection}.
                     * @author Mark Pollak
                     * @author Grame Rocher
                     * @author Oliver Gierke
                     * @author John Brisbin
                     * @auhtor Christoph Strobl
                     * @since 1.0
                     */
                    // @ts-ignore
                    interface CollectionCallback<T> {
                        /**
                         * @param collection never {#literal null}.
                         * @return can be {#literal null}.
                         * @throws MongoException
                         * @throws DataAccessException
                         */
                        // @ts-ignore
                        doInCollection(collection: object): T
                    }
                }
            }
        }
    }
}
