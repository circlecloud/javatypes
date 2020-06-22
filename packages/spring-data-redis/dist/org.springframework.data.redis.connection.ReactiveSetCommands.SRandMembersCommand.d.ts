declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveSetCommands {
                        /**
                         * {@code SRANDMEMBER} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/srandmember">Redis Documentation: SRANDMEMBER</a>
                         */
                        // @ts-ignore
                        class SRandMembersCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link SRandMembersCommand} given the number of values to retrieve.
                             * @param nrValuesToRetrieve
                             * @return a new {#link SRandMembersCommand} for a number of values to retrieve.
                             */
                            // @ts-ignore
                            public static valueCount(nrValuesToRetrieve: number /*long*/): org.springframework.data.redis.connection.ReactiveSetCommands.SRandMembersCommand
                            /**
                             * Creates a new {@link SRandMembersCommand} to retrieve one random member.
                             * @return a new {#link SRandMembersCommand} to retrieve one random member.
                             */
                            // @ts-ignore
                            public static singleValue(): org.springframework.data.redis.connection.ReactiveSetCommands.SRandMembersCommand
                            /**
                             * Applies the {@literal key}. Constructs a new command instance with all previously configured properties.
                             * @param key must not be {#literal null}.
                             * @return a new {#link SRandMembersCommand} with {@literal key} applied.
                             */
                            // @ts-ignore
                            public from(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveSetCommands.SRandMembersCommand
                            /**
                             * @return 
                             */
                            // @ts-ignore
                            public getCount(): java.util.Optional<java.lang.Long | number>
                        }
                    }
                }
            }
        }
    }
}
