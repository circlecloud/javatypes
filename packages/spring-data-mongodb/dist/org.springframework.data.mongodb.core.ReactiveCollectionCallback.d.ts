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
                    interface ReactiveCollectionCallback<T> {
                        // @ts-ignore
                        doInCollection(collection: object): object
                    }
                }
            }
        }
    }
}
