declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace connection {
                    /**
                     * Abstract {@link ConnectionFactory} implementation that routes {@link #createConnection()}
                     * calls to one of various target ConnectionFactories based on a lookup key. The latter is usually
                     * (but not necessarily) determined through some thread-bound context.
                     * @author Artem Bilan
                     * @author Josh Chappelle
                     * @author Gary Russell
                     * @since 1.3
                     */
                    // @ts-ignore
                    abstract class AbstractRoutingConnectionFactory extends java.lang.Object implements org.springframework.amqp.rabbit.connection.ConnectionFactory, org.springframework.amqp.rabbit.connection.RoutingConnectionFactory {
                        // @ts-ignore
                        constructor()
                        /**
                         * Specify the map of target ConnectionFactories, with the lookup key as key.
                         * <p>The key can be of arbitrary type; this class implements the
                         * generic lookup process only. The concrete key representation will
                         * be handled by {@link #determineCurrentLookupKey()}.
                         * @param targetConnectionFactories The target connection factories and lookup keys.
                         */
                        // @ts-ignore
                        public setTargetConnectionFactories(targetConnectionFactories: java.util.Map<java.lang.Object | any, org.springframework.amqp.rabbit.connection.ConnectionFactory>): void
                        /**
                         * Specify the default target {@link ConnectionFactory}, if any.
                         * <p>This {@link ConnectionFactory} will be used as target if none of the keyed
                         * {@link #targetConnectionFactories} match the
                         * {@link #determineCurrentLookupKey()} current lookup key.
                         * @param defaultTargetConnectionFactory The default target connection factory.
                         */
                        // @ts-ignore
                        public setDefaultTargetConnectionFactory(defaultTargetConnectionFactory: org.springframework.amqp.rabbit.connection.ConnectionFactory): void
                        /**
                         * Specify whether to apply a lenient fallback to the default {@link ConnectionFactory}
                         * if no specific {@link ConnectionFactory} could be found for the current lookup key.
                         * <p>Default is "true", accepting lookup keys without a corresponding entry
                         * in the {@link #targetConnectionFactories} - simply falling back to the default
                         * {@link ConnectionFactory} in that case.
                         * <p>Switch this flag to "false" if you would prefer the fallback to only apply
                         * if the lookup key was {@code null}. Lookup keys without a {@link ConnectionFactory}
                         * entry will then lead to an {@link IllegalStateException}.
                         * @param lenientFallback true to fall back to the default, if specified.
                         * @see #setTargetConnectionFactories
                         * @see #setDefaultTargetConnectionFactory
                         * @see #determineCurrentLookupKey()
                         */
                        // @ts-ignore
                        public setLenientFallback(lenientFallback: boolean): void
                        // @ts-ignore
                        public isLenientFallback(): boolean
                        // @ts-ignore
                        public createConnection(): org.springframework.amqp.rabbit.connection.Connection
                        /**
                         * Retrieve the current target {@link ConnectionFactory}. Determines the
                         * {@link #determineCurrentLookupKey() current lookup key}, performs
                         * a lookup in the {@link #targetConnectionFactories} map,
                         * falls back to the specified
                         * {@link #defaultTargetConnectionFactory} if necessary.
                         * @return The connection factory.
                         * @see #determineCurrentLookupKey()
                         */
                        // @ts-ignore
                        determineTargetConnectionFactory(): org.springframework.amqp.rabbit.connection.ConnectionFactory
                        // @ts-ignore
                        public addConnectionListener(listener: org.springframework.amqp.rabbit.connection.ConnectionListener): void
                        // @ts-ignore
                        public removeConnectionListener(listener: org.springframework.amqp.rabbit.connection.ConnectionListener): boolean
                        // @ts-ignore
                        public clearConnectionListeners(): void
                        // @ts-ignore
                        public getHost(): string
                        // @ts-ignore
                        public getPort(): number /*int*/
                        // @ts-ignore
                        public getVirtualHost(): string
                        // @ts-ignore
                        public getUsername(): string
                        // @ts-ignore
                        public getTargetConnectionFactory(key: java.lang.Object | any): org.springframework.amqp.rabbit.connection.ConnectionFactory
                        /**
                         * Adds the given {@link ConnectionFactory} and associates it with the given lookup key.
                         * @param key the lookup key.
                         * @param connectionFactory the {#link ConnectionFactory}.
                         */
                        // @ts-ignore
                        addTargetConnectionFactory(key: java.lang.Object | any, connectionFactory: org.springframework.amqp.rabbit.connection.ConnectionFactory): void
                        /**
                         * Removes the {@link ConnectionFactory} associated with the given lookup key and returns it.
                         * @param key the lookup key
                         * @return the {#link ConnectionFactory} that was removed
                         */
                        // @ts-ignore
                        removeTargetConnectionFactory(key: java.lang.Object | any): org.springframework.amqp.rabbit.connection.ConnectionFactory
                        /**
                         * Determine the current lookup key. This will typically be implemented to check a thread-bound context.
                         * @return The lookup key.
                         */
                        // @ts-ignore
                        abstract determineCurrentLookupKey(): any
                    }
                }
            }
        }
    }
}
