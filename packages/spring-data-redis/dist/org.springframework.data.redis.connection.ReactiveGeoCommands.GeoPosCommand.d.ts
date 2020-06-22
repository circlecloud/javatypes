declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveGeoCommands {
                        /**
                         * {@code GEOPOS} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/geopos">Redis Documentation: GEOPOS</a>
                         */
                        // @ts-ignore
                        class GeoPosCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link GeoPosCommand} given a {@literal member}.
                             * @param member must not be {#literal null}.
                             * @return a new {#link GeoPosCommand} for a {@literal member}.
                             */
                            // @ts-ignore
                            public static member(member: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveGeoCommands.GeoPosCommand
                            /**
                             * Creates a new {@link GeoPosCommand} given a {@link Collection} of values.
                             * @param members must not be {#literal null}.
                             * @return a new {#link GeoPosCommand} for a {@link Collection} of values.
                             */
                            // @ts-ignore
                            public static members(members: java.util.Collection<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>): org.springframework.data.redis.connection.ReactiveGeoCommands.GeoPosCommand
                            /**
                             * Applies the Geo set {@literal key}. Constructs a new command instance with all previously configured properties.
                             * @param key must not be {#literal null}.
                             * @return a new {#link GeoPosCommand} with {@literal key} applied.
                             */
                            // @ts-ignore
                            public of(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveGeoCommands.GeoPosCommand
                            /**
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public getMembers(): Array<java.nio.ByteBuffer>
                        }
                    }
                }
            }
        }
    }
}
