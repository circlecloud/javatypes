declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace lettuce {
                        /**
                         * Defines a provider for Lettuce connections.
                         * <p />
                         * This interface is typically used to encapsulate a native factory which returns a {@link StatefulConnection
                         * connection} of on each invocation.
                         * <p/>
                         * Connection providers may create a new connection on each invocation or return pooled instances. Each obtained
                         * connection must be released through its connection provider to allow disposal or release back to the pool.
                         * <p/>
                         * Connection providers are usually associated with a {@link io.lettuce.core.codec.RedisCodec} to create connections
                         * with an appropriate codec.
                         * @author Mark Paluch
                         * @author Christoph Strobl
                         * @since 2.0
                         * @see StatefulConnection
                         */
                        // @ts-ignore
                        interface LettuceConnectionProvider {
                            /**
                             * Request a connection given {@code connectionType}. Providing a connection type allows specialization to provide a
                             * more specific connection type.
                             * @param connectionType must not be {#literal null}.
                             * @return the requested connection. Must be {#link #release(StatefulConnection) released} if the connection is no
                             *          longer in use.
                             */
                            // @ts-ignore
                            getConnection<T extends java.lang.Object>(connectionType: java.lang.Class<T>): T
                            /**
                             * Release the {@link StatefulConnection connection}. Closes connection {@link StatefulConnection#close()} by default.
                             * Implementations may choose whether they override this method and return the connection to a pool.
                             * @param connection must not be {#literal null}.
                             */
                            // @ts-ignore
                            release(connection: object): void
                        }
                    }
                }
            }
        }
    }
}
