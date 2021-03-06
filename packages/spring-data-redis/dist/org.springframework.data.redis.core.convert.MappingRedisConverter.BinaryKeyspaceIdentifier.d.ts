declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace convert {
                        namespace MappingRedisConverter {
                            /**
                             * Value object representing a binary Redis Hash/Object identifier composed from keyspace and object id in the form of
                             * {@literal keyspace:id}.
                             * @author Mark Paluch
                             * @since 1.8.10
                             */
                            // @ts-ignore
                            class BinaryKeyspaceIdentifier extends java.lang.Object {
                                // @ts-ignore
                                constructor()
                                // @ts-ignore
                                public static readonly PHANTOM: number /*byte*/[]
                                // @ts-ignore
                                public static readonly DELIMITTER: number /*byte*/
                                // @ts-ignore
                                public static readonly PHANTOM_SUFFIX: number /*byte*/[]
                                /**
                                 * Parse a binary {@code key} into {@link BinaryKeyspaceIdentifier}.
                                 * @param key the binary key representation.
                                 * @return {#link BinaryKeyspaceIdentifier} for binary key.
                                 */
                                // @ts-ignore
                                public static of(key: number /*byte*/[]): org.springframework.data.redis.core.convert.MappingRedisConverter.BinaryKeyspaceIdentifier
                                /**
                                 * Check whether the {@code key} is valid, in particular whether the key contains a keyspace and an id part in the
                                 * form of {@literal keyspace:id}.
                                 * @param key the key.
                                 * @return {#literal true} if the key is valid.
                                 */
                                // @ts-ignore
                                public static isValid(key: number /*byte*/[]): boolean
                            }
                        }
                    }
                }
            }
        }
    }
}
