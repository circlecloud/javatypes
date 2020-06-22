declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * Simple callback interface to allow customization of a {@link FindPublisher}.
                     * @author Mark Paluch
                     * @author Konstantin Volivach
                     */
                    // @ts-ignore
                    interface FindPublisherPreparer {
                        /**
                         * Prepare the given cursor (apply limits, skips and so on). Returns the prepared cursor.
                         * @param findPublisher must not be {#literal null}.
                         */
                        // @ts-ignore
                        prepare<T>(findPublisher: object): object
                    }
                }
            }
        }
    }
}
