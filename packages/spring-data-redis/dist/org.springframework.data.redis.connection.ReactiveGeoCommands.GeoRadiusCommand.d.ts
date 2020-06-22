declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveGeoCommands {
                        /**
                         * {@code GEORADIUS} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/georadius">Redis Documentation: GEORADIUS</a>
                         */
                        // @ts-ignore
                        class GeoRadiusCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link GeoRadiusCommand} given a {@link Distance}.
                             * @param distance must not be {#literal null}.
                             * @return a new {#link GeoRadiusCommand} for a {@link Distance}.
                             */
                            // @ts-ignore
                            public static within(distance: Distance): org.springframework.data.redis.connection.ReactiveGeoCommands.GeoRadiusCommand
                            /**
                             * Creates a new {@link GeoRadiusCommand} given a {@literal distance} in {@link DistanceUnit#METERS}.
                             * @param distance must not be {#literal null}.
                             * @return a new {#link GeoRadiusCommand} for a {@literal distance} in {@link DistanceUnit#METERS}.
                             */
                            // @ts-ignore
                            public static withinMeters(distance: number /*double*/): org.springframework.data.redis.connection.ReactiveGeoCommands.GeoRadiusCommand
                            /**
                             * Creates a new {@link GeoRadiusCommand} given a {@literal distance} in {@link DistanceUnit#KILOMETERS}.
                             * @param distance must not be {#literal null}.
                             * @return a new {#link GeoRadiusCommand} for a {@literal distance} in {@link DistanceUnit#KILOMETERS}.
                             */
                            // @ts-ignore
                            public static withinKilometers(distance: number /*double*/): org.springframework.data.redis.connection.ReactiveGeoCommands.GeoRadiusCommand
                            /**
                             * Creates a new {@link GeoRadiusCommand} given a {@literal distance} in {@link DistanceUnit#MILES}.
                             * @param distance must not be {#literal null}.
                             * @return a new {#link GeoRadiusCommand} for a {@literal distance} in {@link DistanceUnit#MILES}.
                             */
                            // @ts-ignore
                            public static withinMiles(distance: number /*double*/): org.springframework.data.redis.connection.ReactiveGeoCommands.GeoRadiusCommand
                            /**
                             * Creates a new {@link GeoRadiusCommand} given a {@literal distance} in {@link DistanceUnit#FEET}.
                             * @param distance must not be {#literal null}.
                             * @return a new {#link GeoRadiusCommand} for a {@literal distance} in {@link DistanceUnit#FEET}.
                             */
                            // @ts-ignore
                            public static withinFeet(distance: number /*double*/): org.springframework.data.redis.connection.ReactiveGeoCommands.GeoRadiusCommand
                            /**
                             * Creates a new {@link GeoRadiusCommand} given a {@link Circle}.
                             * @param circle must not be {#literal null}.
                             * @return a new {#link GeoRadiusCommand} for a {@link Circle}.
                             */
                            // @ts-ignore
                            public static within(circle: Circle): org.springframework.data.redis.connection.ReactiveGeoCommands.GeoRadiusCommand
                            /**
                             * Sets the {@literal center} {@link Point}. Constructs a new command instance with all previously configured
                             * properties.
                             * @param center must not be {#literal null}.
                             * @return a new {#link GeoRadiusCommand} with {@link Point} applied.
                             */
                            // @ts-ignore
                            public from(center: Point): org.springframework.data.redis.connection.ReactiveGeoCommands.GeoRadiusCommand
                            /**
                             * Applies command {@link Flag flags}. Constructs a new command instance with all previously configured properties.
                             * @param flag must not be {#literal null}.
                             * @return a new {#link GeoRadiusCommand} with {@link Flag} applied.
                             */
                            // @ts-ignore
                            public withFlag(flag: org.springframework.data.redis.connection.RedisGeoCommands.GeoRadiusCommandArgs.Flag): org.springframework.data.redis.connection.ReactiveGeoCommands.GeoRadiusCommand
                            /**
                             * Enables coordinate retrieval. Constructs a new command instance with all previously configured properties.
                             * @return a new {#link GeoRadiusCommand} with {@link Flag#WITHCOORD} applied.
                             */
                            // @ts-ignore
                            public withCoord(): org.springframework.data.redis.connection.ReactiveGeoCommands.GeoRadiusCommand
                            /**
                             * Enables distance retrieval. Constructs a new command instance with all previously configured properties.
                             * @return a new {#link GeoRadiusCommand} with {@link Flag#WITHDIST} applied.
                             */
                            // @ts-ignore
                            public withDist(): org.springframework.data.redis.connection.ReactiveGeoCommands.GeoRadiusCommand
                            /**
                             * Applies command {@link GeoRadiusCommandArgs}. Constructs a new command instance with all previously configured
                             * properties.
                             * @param args must not be {#literal null}.
                             * @return a new {#link GeoRadiusCommand} with {@link GeoRadiusCommandArgs} applied.
                             */
                            // @ts-ignore
                            public withArgs(args: org.springframework.data.redis.connection.RedisGeoCommands.GeoRadiusCommandArgs): org.springframework.data.redis.connection.ReactiveGeoCommands.GeoRadiusCommand
                            /**
                             * Applies the {@literal limit}. Constructs a new command instance with all previously configured properties.
                             * @param limit
                             * @return a new {#link GeoRadiusCommand} with {@literal limit} applied.
                             */
                            // @ts-ignore
                            public limitTo(limit: number /*long*/): org.springframework.data.redis.connection.ReactiveGeoCommands.GeoRadiusCommand
                            /**
                             * Applies the distance sort {@link Direction}. Constructs a new command instance with all previously configured
                             * properties.
                             * @param direction must not be {#literal null}.
                             * @return a new {#link GeoRadiusCommand} with sort {@link Direction} applied.
                             */
                            // @ts-ignore
                            public sort(direction: Direction): org.springframework.data.redis.connection.ReactiveGeoCommands.GeoRadiusCommand
                            /**
                             * Applies ascending sort by distance. Constructs a new command instance with all previously configured properties.
                             * @return a new {#link GeoRadiusCommand} with sort {@link Direction#ASC} applied.
                             */
                            // @ts-ignore
                            public orderByDistanceAsc(): org.springframework.data.redis.connection.ReactiveGeoCommands.GeoRadiusCommand
                            /**
                             * Applies descending sort by distance. Constructs a new command instance with all previously configured properties.
                             * @return a new {#link GeoRadiusCommand} with sort {@link Direction#DESC} applied.
                             */
                            // @ts-ignore
                            public orderByDistanceDesc(): org.springframework.data.redis.connection.ReactiveGeoCommands.GeoRadiusCommand
                            /**
                             * Applies the Geo set {@literal key}. Constructs a new command instance with all previously configured properties.
                             * @param key must not be {#literal null}.
                             * @return a new {#link GeoRadiusCommand} with {@literal key} applied.
                             */
                            // @ts-ignore
                            public forKey(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveGeoCommands.GeoRadiusCommand
                            /**
                             * <b>NOTE:</b> STORE option is not compatible with WITHDIST, WITHHASH and WITHCOORDS options.
                             * @param key must not be {#literal null}.
                             * @return new instance of {#link GeoRadiusCommand}.
                             */
                            // @ts-ignore
                            public storeAt(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveGeoCommands.GeoRadiusCommand
                            /**
                             * <b>NOTE:</b> STOREDIST option is not compatible with WITHDIST, WITHHASH and WITHCOORDS options.
                             * @param key must not be {#literal null}.
                             * @return new instance of {#link GeoRadiusCommand}.
                             */
                            // @ts-ignore
                            public storeDistAt(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveGeoCommands.GeoRadiusCommand
                            /**
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public getDirection(): java.util.Optional<Direction>
                            /**
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public getDistance(): Distance
                            /**
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public getFlags(): Array<org.springframework.data.redis.connection.RedisGeoCommands.GeoRadiusCommandArgs.Flag>
                            /**
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public getLimit(): java.util.Optional<java.lang.Long | number>
                            /**
                             * @return can be {#literal null}.
                             */
                            // @ts-ignore
                            public getPoint(): Point
                            /**
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public getStore(): java.util.Optional<java.nio.ByteBuffer>
                            /**
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public getStoreDist(): java.util.Optional<java.nio.ByteBuffer>
                            /**
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public getArgs(): java.util.Optional<org.springframework.data.redis.connection.RedisGeoCommands.GeoRadiusCommandArgs>
                        }
                    }
                }
            }
        }
    }
}
