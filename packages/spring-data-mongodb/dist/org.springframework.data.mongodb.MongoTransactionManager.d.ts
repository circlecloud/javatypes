declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                /**
                 * A {@link org.springframework.transaction.PlatformTransactionManager} implementation that manages
                 * {@link ClientSession} based transactions for a single {@link MongoDbFactory}.
                 * <p />
                 * Binds a {@link ClientSession} from the specified {@link MongoDbFactory} to the thread.
                 * <p />
                 * {@link TransactionDefinition#isReadOnly() Readonly} transactions operate on a {@link ClientSession} and enable causal
                 * consistency, and also {@link ClientSession#startTransaction() start}, {@link ClientSession#commitTransaction()
                 * commit} or {@link ClientSession#abortTransaction() abort} a transaction.
                 * <p />
                 * Application code is required to retrieve the {@link com.mongodb.client.MongoDatabase} via
                 * {@link MongoDatabaseUtils#getDatabase(MongoDbFactory)} instead of a standard {@link MongoDbFactory#getDb()} call.
                 * Spring classes such as {@link org.springframework.data.mongodb.core.MongoTemplate} use this strategy implicitly.
                 * <p />
                 * By default failure of a {@literal commit} operation raises a {@link TransactionSystemException}. One may override
                 * {@link #doCommit(MongoTransactionObject)} to implement the
                 * <a href="https://docs.mongodb.com/manual/core/transactions/#retry-commit-operation">Retry Commit Operation</a>
                 * behavior as outlined in the MongoDB reference manual.
                 * @author Christoph Strobl
                 * @author Mark Paluch
                 * @currentRead Shadow's Edge - Brent Weeks
                 * @since 2.1
                 * @see <a href="https://www.mongodb.com/transactions">MongoDB Transaction Documentation</a>
                 * @see MongoDatabaseUtils#getDatabase(MongoDbFactory, SessionSynchronization)
                 */
                // @ts-ignore
                class MongoTransactionManager extends AbstractPlatformTransactionManager {
                    /**
                     * Create a new {@link MongoTransactionManager} for bean-style usage.
                     * <p />
                     * <strong>Note:</strong>The {@link MongoDbFactory db factory} has to be {@link #setDbFactory(MongoDbFactory) set}
                     * before using the instance. Use this constructor to prepare a {@link MongoTransactionManager} via a
                     * {@link org.springframework.beans.factory.BeanFactory}.
                     * <p />
                     * Optionally it is possible to set default {@link TransactionOptions transaction options} defining
                     * {@link com.mongodb.ReadConcern} and {@link com.mongodb.WriteConcern}.
                     * @see #setDbFactory(MongoDbFactory)
                     * @see #setTransactionSynchronization(int)
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new {@link MongoTransactionManager} obtaining sessions from the given {@link MongoDbFactory}.
                     * @param dbFactory must not be {#literal null}.
                     */
                    // @ts-ignore
                    constructor(dbFactory: org.springframework.data.mongodb.MongoDbFactory)
                    /**
                     * Create a new {@link MongoTransactionManager} obtaining sessions from the given {@link MongoDbFactory} applying the
                     * given {@link TransactionOptions options}, if present, when starting a new transaction.
                     * @param dbFactory must not be {#literal null}.
                     * @param options can be {#literal null}.
                     */
                    // @ts-ignore
                    constructor(dbFactory: org.springframework.data.mongodb.MongoDbFactory, options: TransactionOptions)
                    // @ts-ignore
                    doGetTransaction(): any
                    // @ts-ignore
                    isExistingTransaction(transaction: java.lang.Object | any): boolean
                    // @ts-ignore
                    doBegin(transaction: java.lang.Object | any, definition: TransactionDefinition): void
                    // @ts-ignore
                    doSuspend(transaction: java.lang.Object | any): any
                    // @ts-ignore
                    doResume(transaction: java.lang.Object | any, suspendedResources: java.lang.Object | any): void
                    // @ts-ignore
                    doCommit(status: DefaultTransactionStatus): void
                    // @ts-ignore
                    doRollback(status: DefaultTransactionStatus): void
                    // @ts-ignore
                    doSetRollbackOnly(status: DefaultTransactionStatus): void
                    // @ts-ignore
                    doCleanupAfterCompletion(transaction: java.lang.Object | any): void
                    /**
                     * Set the {@link MongoDbFactory} that this instance should manage transactions for.
                     * @param dbFactory must not be {#literal null}.
                     */
                    // @ts-ignore
                    public setDbFactory(dbFactory: org.springframework.data.mongodb.MongoDbFactory): void
                    /**
                     * Set the {@link TransactionOptions} to be applied when starting transactions.
                     * @param options can be {#literal null}.
                     */
                    // @ts-ignore
                    public setOptions(options: TransactionOptions): void
                    /**
                     * Get the {@link MongoDbFactory} that this instance manages transactions for.
                     * @return can be {#literal null}.
                     */
                    // @ts-ignore
                    public getDbFactory(): org.springframework.data.mongodb.MongoDbFactory
                    // @ts-ignore
                    public getResourceFactory(): org.springframework.data.mongodb.MongoDbFactory
                    // @ts-ignore
                    public afterPropertiesSet(): void
                }
            }
        }
    }
}
