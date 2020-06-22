declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace convert {
                        namespace MappingRedisConverter {
                            /**
                             * Value object representing a Redis Hash/Object identifier composed from keyspace and object id in the form of
                             * {@literal keyspace:id}.
                             * @author Mark Paluch
                             * @since 1.8.10
                             */
                            // @ts-ignore
                            class KeyspaceIdentifier extends java.lang.Object {
                                // @ts-ignore
                                constructor()
                                // @ts-ignore
                                public static readonly PHANTOM: java.lang.String | string
                                // @ts-ignore
                                public static readonly DELIMITTER: java.lang.String | string
                                // @ts-ignore
                                public static readonly PHANTOM_SUFFIX: java.lang.String | string
                                /**
                                 * Parse a {@code key} into {@link KeyspaceIdentifier}.
                                 * @param key the key representation.
                                 * @return {#link BinaryKeyspaceIdentifier} for binary key.
                                 */
                                // @ts-ignore
                                public static of(key: java.lang.String | string): org.springframework.data.redis.core.convert.MappingRedisConverter.KeyspaceIdentifier
                                /**
                                 * Check whether the {@code key} is valid, in particular whether the key contains a keyspace and an id part in the
                                 * form of {@literal keyspace:id}.
                                 * @param key the key.
                                 * @return {#literal true} if the key is valid.
                                 */
                                // @ts-ignore
                                public static isValid(key: java.lang.String | string): boolean
                            }
                        }
                    }
                }
            }
        }
    }
}
