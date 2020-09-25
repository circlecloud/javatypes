declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                /**
                 * {@link SessionSynchronization} is used along with {@link org.springframework.data.mongodb.core.MongoTemplate} to
                 * define in which type of transactions to participate if any.
                 * @author Christoph Strobl
                 * @author Mark Paluch
                 * @since 2.1
                 */
                // @ts-ignore
                class SessionSynchronization extends java.lang.Enum<org.springframework.data.mongodb.SessionSynchronization> {
                    /**
                     * Synchronize with any transaction even with empty transactions and initiate a MongoDB transaction when doing so by
                     * registering a MongoDB specific {@link org.springframework.transaction.support.ResourceHolderSynchronization}.
                     */
                    // @ts-ignore
                    public static readonly ALWAYS: org.springframework.data.mongodb.SessionSynchronization
                    /**
                     * Synchronize with native MongoDB transactions initiated via {@link MongoTransactionManager}.
                     */
                    // @ts-ignore
                    public static readonly ON_ACTUAL_TRANSACTION: org.springframework.data.mongodb.SessionSynchronization
                    // @ts-ignore
                    public static values(): org.springframework.data.mongodb.SessionSynchronization[]
                    // @ts-ignore
                    public static valueOf(name: java.lang.String | string): org.springframework.data.mongodb.SessionSynchronization
                }
            }
        }
    }
}
