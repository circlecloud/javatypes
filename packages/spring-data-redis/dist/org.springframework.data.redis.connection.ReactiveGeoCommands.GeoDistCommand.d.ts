declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveGeoCommands {
                        /**
                         * {@code GEODIST} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/geodist">Redis Documentation: GEODIST</a>
                         */
                        // @ts-ignore
                        class GeoDistCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link GeoDistCommand} for {@link DistanceUnit#METERS}.
                             * @return a new {#link GeoDistCommand} for {@link DistanceUnit#METERS}.
                             */
                            // @ts-ignore
                            public static meters(): org.springframework.data.redis.connection.ReactiveGeoCommands.GeoDistCommand
                            /**
                             * Creates a new {@link GeoDistCommand} for {@link DistanceUnit#KILOMETERS}.
                             * @return a new {#link GeoDistCommand} for {@link DistanceUnit#KILOMETERS}.
                             */
                            // @ts-ignore
                            public static kilometers(): org.springframework.data.redis.connection.ReactiveGeoCommands.GeoDistCommand
                            /**
                             * Creates a new {@link GeoDistCommand} for {@link DistanceUnit#MILES}.
                             * @return a new {#link GeoDistCommand} for {@link DistanceUnit#MILES}.
                             */
                            // @ts-ignore
                            public static miles(): org.springframework.data.redis.connection.ReactiveGeoCommands.GeoDistCommand
                            /**
                             * Creates a new {@link GeoDistCommand} for {@link DistanceUnit#FEET}.
                             * @return a new {#link GeoDistCommand} for {@link DistanceUnit#FEET}.
                             */
                            // @ts-ignore
                            public static feet(): org.springframework.data.redis.connection.ReactiveGeoCommands.GeoDistCommand
                            /**
                             * Applies the {@literal from} member. Constructs a new command instance with all previously configured properties.
                             * @param from must not be {#literal null}.
                             * @return a new {#link GeoDistCommand} with {@literal from} applied.
                             */
                            // @ts-ignore
                            public between(from: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveGeoCommands.GeoDistCommand
                            /**
                             * Applies the {@literal to} member. Constructs a new command instance with all previously configured properties.
                             * @param to must not be {#literal null}.
                             * @return a new {#link GeoDistCommand} with {@literal to} applied.
                             */
                            // @ts-ignore
                            public and(to: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveGeoCommands.GeoDistCommand
                            /**
                             * Applies the Geo set {@literal key} member. Constructs a new command instance with all previously configured
                             * properties.
                             * @param key must not be {#literal null}.
                             * @return a new {#link GeoDistCommand} with {@literal key} applied.
                             */
                            // @ts-ignore
                            public forKey(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveGeoCommands.GeoDistCommand
                            /**
                             * @return can be {#literal null}.
                             */
                            // @ts-ignore
                            public getFrom(): java.nio.ByteBuffer
                            /**
                             * @return can be {#literal null}.
                             */
                            // @ts-ignore
                            public getTo(): java.nio.ByteBuffer
                            /**
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public getMetric(): java.util.Optional<Metric>
                        }
                    }
                }
            }
        }
    }
}
