declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * Callback interface for executing actions against a {@link MongoDatabase}.
                     * @author Mark Pollak
                     * @author Graeme Rocher
                     * @author Thomas Risberg
                     * @author Oliver Gierke
                     * @author John Brisbin
                     * @author Christoph Strobl
                     */
                    // @ts-ignore
                    interface DbCallback<T> {
                        /**
                         * @param db must not be {#literal null}.
                         * @return can be {#literal null}.
                         * @throws MongoException
                         * @throws DataAccessException
                         */
                        // @ts-ignore
                        doInDB(db: MongoDatabase): T
                    }
                }
            }
        }
    }
}
