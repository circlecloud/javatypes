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
                            readonly METERS: org.springframework.data.redis.connection.RedisGeoCommands.DistanceUnit
                            // @ts-ignore
                            readonly KILOMETERS: org.springframework.data.redis.connection.RedisGeoCommands.DistanceUnit
                            // @ts-ignore
                            readonly MILES: org.springframework.data.redis.connection.RedisGeoCommands.DistanceUnit
                            // @ts-ignore
                            readonly FEET: org.springframework.data.redis.connection.RedisGeoCommands.DistanceUnit
                            // @ts-ignore
                            values(): org.springframework.data.redis.connection.RedisGeoCommands.DistanceUnit[]
                            // @ts-ignore
                            valueOf(name: java.lang.String | string): org.springframework.data.redis.connection.RedisGeoCommands.DistanceUnit
                            // @ts-ignore
                            getMultiplier(): number /*double*/
                            // @ts-ignore
                            getAbbreviation(): string
                        }
                    }
                }
            }
        }
    }
}
