declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Redis Geo commands executed using reactive infrastructure.
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 2.0
                     */
                    // @ts-ignore
                    interface ReactiveGeoCommands {
                        /**
                         * Add {@link Point} with given {@literal member} to {@literal key}.
                         * @param key must not be {#literal null}.
                         * @param point must not be {#literal null}.
                         * @param member must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/geoadd">Redis Documentation: GEOADD</a>
                         */
                        // @ts-ignore
                        geoAdd(key: java.nio.ByteBuffer, point: Point, member: java.nio.ByteBuffer): object
                        /**
                         * Add {@link GeoLocation} to {@literal key}.
                         * @param key must not be {#literal null}.
                         * @param location must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/geoadd">Redis Documentation: GEOADD</a>
                         */
                        // @ts-ignore
                        geoAdd(key: java.nio.ByteBuffer, location: org.springframework.data.redis.connection.RedisGeoCommands.GeoLocation<java.nio.ByteBuffer>): object
                        /**
                         * Add {@link GeoLocation} to {@literal key}.
                         * @param key must not be {#literal null}.
                         * @param locations must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/geoadd">Redis Documentation: GEOADD</a>
                         */
                        // @ts-ignore
                        geoAdd(key: java.nio.ByteBuffer, locations: java.util.Collection<org.springframework.data.redis.connection.RedisGeoCommands.GeoLocation<java.nio.ByteBuffer>> | Array<org.springframework.data.redis.connection.RedisGeoCommands.GeoLocation<java.nio.ByteBuffer>>): object
                        /**
                         * Add {@link GeoLocation}s to {@literal key}.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/geoadd">Redis Documentation: GEOADD</a>
                         */
                        // @ts-ignore
                        geoAdd(commands: object): object
                        /**
                         * Get the {@link Distance} between {@literal from} and {@literal to}.
                         * @param key must not be {#literal null}.
                         * @param from must not be {#literal null}.
                         * @param to must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/geodist">Redis Documentation: GEODIST</a>
                         */
                        // @ts-ignore
                        geoDist(key: java.nio.ByteBuffer, from: java.nio.ByteBuffer, to: java.nio.ByteBuffer): object
                        /**
                         * Get the {@link Distance} between {@literal from} and {@literal to}.
                         * @param key must not be {#literal null}.
                         * @param from must not be {#literal null}.
                         * @param to must not be {#literal null}.
                         * @param metric must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/geodist">Redis Documentation: GEODIST</a>
                         */
                        // @ts-ignore
                        geoDist(key: java.nio.ByteBuffer, from: java.nio.ByteBuffer, to: java.nio.ByteBuffer, metric: Metric): object
                        /**
                         * Get the {@link Distance} between {@literal from} and {@literal to}.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/geodist">Redis Documentation: GEODIST</a>
                         */
                        // @ts-ignore
                        geoDist(commands: object): object
                        /**
                         * Get geohash representation of the position for the one {@literal member}.
                         * @param key must not be {#literal null}.
                         * @param member must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/geohash">Redis Documentation: GEOHASH</a>
                         */
                        // @ts-ignore
                        geoHash(key: java.nio.ByteBuffer, member: java.nio.ByteBuffer): object
                        /**
                         * Get geohash representation of the position for one or more {@literal member}s.
                         * @param key must not be {#literal null}.
                         * @param members must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/geohash">Redis Documentation: GEOHASH</a>
                         */
                        // @ts-ignore
                        geoHash(key: java.nio.ByteBuffer, members: java.util.Collection<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>): object
                        /**
                         * Get geohash representation of the position for one or more {@literal member}s.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/geohash">Redis Documentation: GEOHASH</a>
                         */
                        // @ts-ignore
                        geoHash(commands: object): object
                        /**
                         * Get the {@link Point} representation of positions for the {@literal member}s.
                         * @param key must not be {#literal null}.
                         * @param member must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/geopos">Redis Documentation: GEOPOS</a>
                         */
                        // @ts-ignore
                        geoPos(key: java.nio.ByteBuffer, member: java.nio.ByteBuffer): object
                        /**
                         * Get the {@link Point} representation of positions for one or more {@literal member}s.
                         * @param key must not be {#literal null}.
                         * @param members must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/geopos">Redis Documentation: GEOPOS</a>
                         */
                        // @ts-ignore
                        geoPos(key: java.nio.ByteBuffer, members: java.util.Collection<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>): object
                        /**
                         * Get the {@link Point} representation of positions for one or more {@literal member}s.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/geopos">Redis Documentation: GEOPOS</a>
                         */
                        // @ts-ignore
                        geoPos(commands: object): object
                        /**
                         * Get the {@literal member}s within the boundaries of a given {@link Circle}.
                         * @param key must not be {#literal null}.
                         * @param circle must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/georadius">Redis Documentation: GEORADIUS</a>
                         */
                        // @ts-ignore
                        geoRadius(key: java.nio.ByteBuffer, circle: Circle): object
                        /**
                         * Get the {@literal member}s within the boundaries of a given {@link Circle} applying given parameters.
                         * @param key must not be {#literal null}.
                         * @param circle must not be {#literal null}.
                         * @param geoRadiusArgs must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/georadius">Redis Documentation: GEORADIUS</a>
                         */
                        // @ts-ignore
                        geoRadius(key: java.nio.ByteBuffer, circle: Circle, geoRadiusArgs: org.springframework.data.redis.connection.RedisGeoCommands.GeoRadiusCommandArgs): object
                        /**
                         * Get the {@literal member}s within the boundaries of a given {@link Circle} applying given parameters.
                         * @param commands
                         * @return 
                         * @see <a href="https://redis.io/commands/georadius">Redis Documentation: GEORADIUS</a>
                         */
                        // @ts-ignore
                        geoRadius(commands: object): object
                        /**
                         * Get the {@literal member}s within given {@link Distance} from {@literal member} applying given parameters.
                         * @param key must not be {#literal null}.
                         * @param member must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/georadiusbymember">Redis Documentation: GEORADIUSBYMEMBER</a>
                         */
                        // @ts-ignore
                        geoRadiusByMember(key: java.nio.ByteBuffer, member: java.nio.ByteBuffer, distance: Distance): object
                        /**
                         * Get the {@literal member}s within given {@link Distance} from {@literal member} applying given parameters.
                         * @param key must not be {#literal null}.
                         * @param member must not be {#literal null}.
                         * @param geoRadiusArgs must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/georadiusbymember">Redis Documentation: GEORADIUSBYMEMBER</a>
                         */
                        // @ts-ignore
                        geoRadiusByMember(key: java.nio.ByteBuffer, member: java.nio.ByteBuffer, distance: Distance, geoRadiusArgs: org.springframework.data.redis.connection.RedisGeoCommands.GeoRadiusCommandArgs): object
                        /**
                         * Get the {@literal member}s within given {@link Distance} from {@literal member} applying given parameters.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/georadiusbymember">Redis Documentation: GEORADIUSBYMEMBER</a>
                         */
                        // @ts-ignore
                        geoRadiusByMember(commands: object): object
                    }
                }
            }
        }
    }
}
