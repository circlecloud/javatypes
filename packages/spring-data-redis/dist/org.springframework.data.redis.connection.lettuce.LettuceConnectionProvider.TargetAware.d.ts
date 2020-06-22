declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace lettuce {
                        namespace LettuceConnectionProvider {
                            /**
                             * Extension to {@link LettuceConnectionProvider} for providers that allow connection creation to specific nodes.
                             */
                            // @ts-ignore
                            interface TargetAware {
                                /**
                                 * Request a connection given {@code connectionType} for a specific {@link RedisURI}. Providing a connection type
                                 * allows specialization to provide a more specific connection type.
                                 * @param connectionType must not be {#literal null}.
                                 * @param redisURI must not be {#literal null}.
                                 * @return the requested connection.
                                 */
                                // @ts-ignore
                                getConnection<T extends java.lang.Object>(connectionType: java.lang.Class<T>, redisURI: RedisURI): T
                            }
                        }
                    }
                }
            }
        }
    }
}
