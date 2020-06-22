declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * @author Mark Paluch
                     * @param <T>
                     * @since 2.0
                     */
                    // @ts-ignore
                    interface ReactiveDatabaseCallback<T> {
                        // @ts-ignore
                        doInDB(db: MongoDatabase): object
                    }
                }
            }
        }
    }
}
