declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveGeoCommands {
                        /**
                         * {@code GEOHASH} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/geohash">Redis Documentation: GEOHASH</a>
                         */
                        // @ts-ignore
                        class GeoHashCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link GeoHashCommand} given a {@literal member}.
                             * @param member must not be {#literal null}.
                             * @return a new {#link GeoHashCommand} for a {@literal member}.
                             */
                            // @ts-ignore
                            public static member(member: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveGeoCommands.GeoHashCommand
                            /**
                             * Creates a new {@link GeoHashCommand} given a {@link Collection} of values.
                             * @param members must not be {#literal null}.
                             * @return a new {#link GeoHashCommand} for a {@link Collection} of values.
                             */
                            // @ts-ignore
                            public static members(members: java.util.Collection<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>): org.springframework.data.redis.connection.ReactiveGeoCommands.GeoHashCommand
                            /**
                             * Applies the Geo set {@literal key}. Constructs a new command instance with all previously configured properties.
                             * @param key must not be {#literal null}.
                             * @return a new {#link GeoHashCommand} with {@literal key} applied.
                             */
                            // @ts-ignore
                            public of(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveGeoCommands.GeoHashCommand
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
