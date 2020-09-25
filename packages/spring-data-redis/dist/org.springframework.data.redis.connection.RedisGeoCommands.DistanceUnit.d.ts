declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace RedisGeoCommands {
                        /**
                         * {@link Metric}s supported by Redis.
                         * @author Christoph Strobl
                         * @since 1.8
                         */
                        // @ts-ignore
                        class DistanceUnit extends java.lang.Enum<org.springframework.data.redis.connection.RedisGeoCommands.DistanceUnit> {
                            // @ts-ignore
                            public static readonly METERS: org.springframework.data.redis.connection.RedisGeoCommands.DistanceUnit
                            // @ts-ignore
                            public static readonly KILOMETERS: org.springframework.data.redis.connection.RedisGeoCommands.DistanceUnit
                            // @ts-ignore
                            public static readonly MILES: org.springframework.data.redis.connection.RedisGeoCommands.DistanceUnit
                            // @ts-ignore
                            public static readonly FEET: org.springframework.data.redis.connection.RedisGeoCommands.DistanceUnit
                            // @ts-ignore
                            public static values(): org.springframework.data.redis.connection.RedisGeoCommands.DistanceUnit[]
                            // @ts-ignore
                            public static valueOf(name: java.lang.String | string): org.springframework.data.redis.connection.RedisGeoCommands.DistanceUnit
                            // @ts-ignore
                            public getMultiplier(): number /*double*/
                            // @ts-ignore
                            public getAbbreviation(): string
                        }
                    }
                }
            }
        }
    }
}
