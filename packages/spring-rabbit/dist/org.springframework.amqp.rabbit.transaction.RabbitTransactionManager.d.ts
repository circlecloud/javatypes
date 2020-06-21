declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace transaction {
                    /**
                     * {@link org.springframework.transaction.PlatformTransactionManager} implementation for a single Rabbit
                     * {@link ConnectionFactory}. Binds a Rabbit Channel from the specified ConnectionFactory to the thread, potentially
                     * allowing for one thread-bound channel per ConnectionFactory.
                     * <p>
                     * This local strategy is an alternative to executing Rabbit operations within, and synchronized with, external
                     * transactions. This strategy is <i>not</i> able to provide XA transactions, for example in order to share transactions
                     * between messaging and database access.
                     * <p>
                     * Application code is required to retrieve the transactional Rabbit resources via
                     * {@link ConnectionFactoryUtils#getTransactionalResourceHolder(ConnectionFactory, boolean)} instead of a standard
                     * {@link org.springframework.amqp.rabbit.connection.Connection#createChannel(boolean)} call with subsequent
                     * Channel creation. Spring's
                     * {@link org.springframework.amqp.rabbit.core.RabbitTemplate} will
                     * autodetect a thread-bound Channel and automatically participate in it.
                     * <p>
                     * <b>The use of {@link org.springframework.amqp.rabbit.connection.CachingConnectionFactory}
                     * as a target for this transaction manager is strongly recommended.</b>
                     * CachingConnectionFactory uses a single Rabbit Connection for all Rabbit access in order to avoid the overhead of
                     * repeated Connection creation, as well as maintaining a cache of Channels. Each transaction will then share the same
                     * Rabbit Connection, while still using its own individual Rabbit Channel.
                     * <p>
                     * Transaction synchronization is turned off by default, as this manager might be used alongside a datastore-based
                     * Spring transaction manager such as the JDBC org.springframework.jdbc.datasource.DataSourceTransactionManager,
                     * which has stronger needs for synchronization.
                     * @author Dave Syer
                     */
                    // @ts-ignore
                    class RabbitTransactionManager extends AbstractPlatformTransactionManager {
                        /**
                         * Create a new RabbitTransactionManager for bean-style usage.
                         * <p>
                         * Note: The ConnectionFactory has to be set before using the instance. This constructor can be used to prepare a
                         * RabbitTemplate via a BeanFactory, typically setting the ConnectionFactory via setConnectionFactory.
                         * <p>
                         * Turns off transaction synchronization by default, as this manager might be used alongside a datastore-based
                         * Spring transaction manager like DataSourceTransactionManager, which has stronger needs for synchronization. Only
                         * one manager is allowed to drive synchronization at any point of time.
                         * @see #setConnectionFactory
                         * @see #setTransactionSynchronization
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a new RabbitTransactionManager, given a ConnectionFactory.
                         * @param connectionFactory the ConnectionFactory to use
                         */
                        // @ts-ignore
                        constructor(connectionFactory: org.springframework.amqp.rabbit.connection.ConnectionFactory)
                        /**
                         * @param connectionFactory the connectionFactory to set
                         */
                        // @ts-ignore
                        public setConnectionFactory(connectionFactory: org.springframework.amqp.rabbit.connection.ConnectionFactory): void
                        /**
                         * @return the connectionFactory
                         */
                        // @ts-ignore
                        public getConnectionFactory(): org.springframework.amqp.rabbit.connection.ConnectionFactory
                        /**
                         * Make sure the ConnectionFactory has been set.
                         */
                        // @ts-ignore
                        public afterPropertiesSet(): void
                        // @ts-ignore
                        public getResourceFactory(): any
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
                    }
                }
            }
        }
    }
}
