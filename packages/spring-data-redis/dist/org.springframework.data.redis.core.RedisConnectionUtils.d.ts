declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * Helper class featuring {@link RedisConnection} handling, allowing for reuse of instances within
                     * 'transactions'/scopes.
                     * @author Costin Leau
                     * @author Christoph Strobl
                     * @author Thomas Darimont
                     * @author Mark Paluch
                     */
                    // @ts-ignore
                    abstract class RedisConnectionUtils extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Binds a new Redis connection (from the given factory) to the current thread, if none is already bound.
                         * @param factory connection factory
                         * @return a new Redis connection without transaction support.
                         */
                        // @ts-ignore
                        public static bindConnection(factory: org.springframework.data.redis.connection.RedisConnectionFactory): org.springframework.data.redis.connection.RedisConnection
                        /**
                         * Binds a new Redis connection (from the given factory) to the current thread, if none is already bound and enables
                         * transaction support if {@code transactionSupport} is set to {@literal true}.
                         * @param factory connection factory.
                         * @param transactionSupport whether transaction support is enabled.
                         * @return a new Redis connection with transaction support if requested.
                         */
                        // @ts-ignore
                        public static bindConnection(factory: org.springframework.data.redis.connection.RedisConnectionFactory, transactionSupport: boolean): org.springframework.data.redis.connection.RedisConnection
                        /**
                         * Gets a Redis connection from the given factory. Is aware of and will return any existing corresponding connections
                         * bound to the current thread, for example when using a transaction manager. Will always create a new connection
                         * otherwise.
                         * @param factory connection factory for creating the connection.
                         * @return an active Redis connection without transaction management.
                         */
                        // @ts-ignore
                        public static getConnection(factory: org.springframework.data.redis.connection.RedisConnectionFactory): org.springframework.data.redis.connection.RedisConnection
                        /**
                         * Gets a Redis connection from the given factory. Is aware of and will return any existing corresponding connections
                         * bound to the current thread, for example when using a transaction manager. Will always create a new connection
                         * otherwise.
                         * @param factory connection factory for creating the connection.
                         * @param transactionSupport whether transaction support is enabled.
                         * @return an active Redis connection with transaction management if requested.
                         */
                        // @ts-ignore
                        public static getConnection(factory: org.springframework.data.redis.connection.RedisConnectionFactory, transactionSupport: boolean): org.springframework.data.redis.connection.RedisConnection
                        /**
                         * Gets a Redis connection. Is aware of and will return any existing corresponding connections bound to the current
                         * thread, for example when using a transaction manager. Will create a new Connection otherwise, if
                         * {@code allowCreate} is <tt>true</tt>.
                         * @param factory connection factory for creating the connection.
                         * @param allowCreate whether a new (unbound) connection should be created when no connection can be found for the
                         *           current thread.
                         * @param bind binds the connection to the thread, in case one was created-
                         * @param transactionSupport whether transaction support is enabled.
                         * @return an active Redis connection.
                         */
                        // @ts-ignore
                        public static doGetConnection(factory: org.springframework.data.redis.connection.RedisConnectionFactory, allowCreate: boolean, bind: boolean, transactionSupport: boolean): org.springframework.data.redis.connection.RedisConnection
                        /**
                         * Closes the given connection, created via the given factory if not managed externally (i.e. not bound to the
                         * thread).
                         * @param conn the Redis connection to close.
                         * @param factory the Redis factory that the connection was created with.
                         * @deprecated since 2.1.10, use {#link #releaseConnection(RedisConnection, RedisConnectionFactory, boolean)} instead.
                         */
                        // @ts-ignore
                        public static releaseConnection(conn: org.springframework.data.redis.connection.RedisConnection, factory: org.springframework.data.redis.connection.RedisConnectionFactory): void
                        /**
                         * Closes the given connection, created via the given factory if not managed externally (i.e. not bound to the
                         * thread).
                         * @param conn the Redis connection to close.
                         * @param factory the Redis factory that the connection was created with.
                         * @param transactionSupport whether transaction support is enabled.
                         * @since 2.1.9
                         */
                        // @ts-ignore
                        public static releaseConnection(conn: org.springframework.data.redis.connection.RedisConnection, factory: org.springframework.data.redis.connection.RedisConnectionFactory, transactionSupport: boolean): void
                        /**
                         * Unbinds and closes the connection (if any) associated with the given factory.
                         * @param factory Redis factory
                         */
                        // @ts-ignore
                        public static unbindConnection(factory: org.springframework.data.redis.connection.RedisConnectionFactory): void
                        /**
                         * Return whether the given Redis connection is transactional, that is, bound to the current thread by Spring's
                         * transaction facilities.
                         * @param conn Redis connection to check
                         * @param connFactory Redis connection factory that the connection was created with
                         * @return whether the connection is transactional or not
                         */
                        // @ts-ignore
                        public static isConnectionTransactional(conn: org.springframework.data.redis.connection.RedisConnection, connFactory: org.springframework.data.redis.connection.RedisConnectionFactory): boolean
                    }
                }
            }
        }
    }
}
