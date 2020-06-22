declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                /**
                 * Helper class for managing a {@link MongoDatabase} instances via {@link MongoDbFactory}. Used for obtaining
                 * {@link ClientSession session bound} resources, such as {@link MongoDatabase} and
                 * {@link com.mongodb.client.MongoCollection} suitable for transactional usage.
                 * <p />
                 * <strong>Note:</strong> Intended for internal usage only.
                 * @author Christoph Strobl
                 * @author Mark Paluch
                 * @currentRead Shadow's Edge - Brent Weeks
                 * @since 2.1
                 */
                // @ts-ignore
                class MongoDatabaseUtils extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Obtain the default {@link MongoDatabase database} form the given {@link MongoDbFactory factory} using
                     * {@link SessionSynchronization#ON_ACTUAL_TRANSACTION native session synchronization}.
                     * <p />
                     * Registers a {@link MongoSessionSynchronization MongoDB specific transaction synchronization} within the current
                     * {@link Thread} if {@link TransactionSynchronizationManager#isSynchronizationActive() synchronization is active}.
                     * @param factory the {#link MongoDbFactory} to get the {@link MongoDatabase} from.
                     * @return the {#link MongoDatabase} that is potentially associated with a transactional {@link ClientSession}.
                     */
                    // @ts-ignore
                    public static getDatabase(factory: org.springframework.data.mongodb.MongoDbFactory): MongoDatabase
                    /**
                     * Obtain the default {@link MongoDatabase database} form the given {@link MongoDbFactory factory}.
                     * <p />
                     * Registers a {@link MongoSessionSynchronization MongoDB specific transaction synchronization} within the current
                     * {@link Thread} if {@link TransactionSynchronizationManager#isSynchronizationActive() synchronization is active}.
                     * @param factory the {#link MongoDbFactory} to get the {@link MongoDatabase} from.
                     * @param sessionSynchronization the synchronization to use. Must not be {#literal null}.
                     * @return the {#link MongoDatabase} that is potentially associated with a transactional {@link ClientSession}.
                     */
                    // @ts-ignore
                    public static getDatabase(factory: org.springframework.data.mongodb.MongoDbFactory, sessionSynchronization: org.springframework.data.mongodb.SessionSynchronization): MongoDatabase
                    /**
                     * Obtain the {@link MongoDatabase database} with given name form the given {@link MongoDbFactory factory} using
                     * {@link SessionSynchronization#ON_ACTUAL_TRANSACTION native session synchronization}.
                     * <p />
                     * Registers a {@link MongoSessionSynchronization MongoDB specific transaction synchronization} within the current
                     * {@link Thread} if {@link TransactionSynchronizationManager#isSynchronizationActive() synchronization is active}.
                     * @param dbName the name of the {#link MongoDatabase} to get.
                     * @param factory the {#link MongoDbFactory} to get the {@link MongoDatabase} from.
                     * @return the {#link MongoDatabase} that is potentially associated with a transactional {@link ClientSession}.
                     */
                    // @ts-ignore
                    public static getDatabase(dbName: java.lang.String | string, factory: org.springframework.data.mongodb.MongoDbFactory): MongoDatabase
                    /**
                     * Obtain the {@link MongoDatabase database} with given name form the given {@link MongoDbFactory factory}.
                     * <p />
                     * Registers a {@link MongoSessionSynchronization MongoDB specific transaction synchronization} within the current
                     * {@link Thread} if {@link TransactionSynchronizationManager#isSynchronizationActive() synchronization is active}.
                     * @param dbName the name of the {#link MongoDatabase} to get.
                     * @param factory the {#link MongoDbFactory} to get the {@link MongoDatabase} from.
                     * @param sessionSynchronization the synchronization to use. Must not be {#literal null}.
                     * @return the {#link MongoDatabase} that is potentially associated with a transactional {@link ClientSession}.
                     */
                    // @ts-ignore
                    public static getDatabase(dbName: java.lang.String | string, factory: org.springframework.data.mongodb.MongoDbFactory, sessionSynchronization: org.springframework.data.mongodb.SessionSynchronization): MongoDatabase
                    /**
                     * Check if the {@link MongoDbFactory} is actually bound to a {@link ClientSession} that has an active transaction, or
                     * if a {@link TransactionSynchronization} has been registered for the {@link MongoDbFactory resource} and if the
                     * associated {@link ClientSession} has an {@link ClientSession#hasActiveTransaction() active transaction}.
                     * @param dbFactory the resource to check transactions for. Must not be {#literal null}.
                     * @return {#literal true} if the factory has an ongoing transaction.
                     * @since 2.1.3
                     */
                    // @ts-ignore
                    public static isTransactionActive(dbFactory: org.springframework.data.mongodb.MongoDbFactory): boolean
                }
            }
        }
    }
}
