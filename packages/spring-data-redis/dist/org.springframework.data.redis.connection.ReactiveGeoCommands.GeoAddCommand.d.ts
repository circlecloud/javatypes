declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveGeoCommands {
                        /**
                         * {@code GEOADD} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/geoadd">Redis Documentation: GEOADD</a>
                         */
                        // @ts-ignore
                        class GeoAddCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link GeoAddCommand} given {@link GeoLocation}.
                             * @param geoLocation must not be {#literal null}.
                             * @return a new {#link GeoAddCommand} for {@link GeoLocation}.
                             */
                            // @ts-ignore
                            public static location(geoLocation: org.springframework.data.redis.connection.RedisGeoCommands.GeoLocation<java.nio.ByteBuffer>): org.springframework.data.redis.connection.ReactiveGeoCommands.GeoAddCommand
                            /**
                             * Creates a new {@link GeoAddCommand} given an {@literal index}.
                             * @param geoLocations must not be {#literal null}.
                             * @return a new {#link GeoAddCommand} for {@literal index}.
                             */
                            // @ts-ignore
                            public static locations(geoLocations: java.util.Collection<org.springframework.data.redis.connection.RedisGeoCommands.GeoLocation<java.nio.ByteBuffer>> | Array<org.springframework.data.redis.connection.RedisGeoCommands.GeoLocation<java.nio.ByteBuffer>>): org.springframework.data.redis.connection.ReactiveGeoCommands.GeoAddCommand
                            /**
                             * Applies the Geo set {@literal key}. Constructs a new command instance with all previously configured properties.
                             * @param key must not be {#literal null}.
                             * @return a new {#link GeoAddCommand} with {@literal key} applied.
                             */
                            // @ts-ignore
                            public to(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveGeoCommands.GeoAddCommand
                            /**
                             * @return 
                             */
                            // @ts-ignore
                            public getGeoLocations(): Array<org.springframework.data.redis.connection.RedisGeoCommands.GeoLocation<java.nio.ByteBuffer>>
                        }
                    }
                }
            }
        }
    }
}
