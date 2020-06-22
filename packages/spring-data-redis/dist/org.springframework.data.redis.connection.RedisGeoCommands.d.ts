declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Geo-specific Redis commands.
                     * @author Ninad Divadkar
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 1.8
                     */
                    // @ts-ignore
                    interface RedisGeoCommands {
                        /**
                         * Add {@link Point} with given member {@literal name} to {@literal key}.
                         * @param key must not be {#literal null}.
                         * @param point must not be {#literal null}.
                         * @param member must not be {#literal null}.
                         * @return Number of elements added. {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/geoadd">Redis Documentation: GEOADD</a>
                         */
                        // @ts-ignore
                        geoAdd(key: number /*byte*/[], point: Point, member: number /*byte*/[]): number
                        /**
                         * Add {@link GeoLocation} to {@literal key}.
                         * @param key must not be {#literal null}.
                         * @param location must not be {#literal null}.
                         * @return Number of elements added. {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/geoadd">Redis Documentation: GEOADD</a>
                         */
                        // @ts-ignore
                        geoAdd(key: number /*byte*/[], location: org.springframework.data.redis.connection.RedisGeoCommands.GeoLocation<number /*byte*/[]>): number
                        /**
                         * Add {@link Map} of member / {@link Point} pairs to {@literal key}.
                         * @param key must not be {#literal null}.
                         * @param memberCoordinateMap must not be {#literal null}.
                         * @return Number of elements added. {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/geoadd">Redis Documentation: GEOADD</a>
                         */
                        // @ts-ignore
                        geoAdd(key: number /*byte*/[], memberCoordinateMap: java.util.Map<number /*byte*/[], Point>): number
                        /**
                         * Add {@link GeoLocation}s to {@literal key}
                         * @param key must not be {#literal null}.
                         * @param locations must not be {#literal null}.
                         * @return Number of elements added. {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/geoadd">Redis Documentation: GEOADD</a>
                         */
                        // @ts-ignore
                        geoAdd(key: number /*byte*/[], locations: java.lang.Iterable<org.springframework.data.redis.connection.RedisGeoCommands.GeoLocation<number /*byte*/[]>>): number
                        /**
                         * Get the {@link Distance} between {@literal member1} and {@literal member2}.
                         * @param key must not be {#literal null}.
                         * @param member1 must not be {#literal null}.
                         * @param member2 must not be {#literal null}.
                         * @return can be {#literal null}. {@literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/geodist">Redis Documentation: GEODIST</a>
                         */
                        // @ts-ignore
                        geoDist(key: number /*byte*/[], member1: number /*byte*/[], member2: number /*byte*/[]): Distance
                        /**
                         * Get the {@link Distance} between {@literal member1} and {@literal member2} in the given {@link Metric}.
                         * @param key must not be {#literal null}.
                         * @param member1 must not be {#literal null}.
                         * @param member2 must not be {#literal null}.
                         * @param metric must not be {#literal null}.
                         * @return can be {#literal null}. {@literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/geodist">Redis Documentation: GEODIST</a>
                         */
                        // @ts-ignore
                        geoDist(key: number /*byte*/[], member1: number /*byte*/[], member2: number /*byte*/[], metric: Metric): Distance
                        /**
                         * Get Geohash representation of the position for one or more {@literal member}s.
                         * @param key must not be {#literal null}.
                         * @param members must not be {#literal null}.
                         * @return empty list when key or members do not exists. {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/geohash">Redis Documentation: GEOHASH</a>
                         */
                        // @ts-ignore
                        geoHash(key: number /*byte*/[], ...members: number /*byte*/[][]): Array<java.lang.String | string>
                        /**
                         * Get the {@link Point} representation of positions for one or more {@literal member}s.
                         * @param key must not be {#literal null}.
                         * @param members must not be {#literal null}.
                         * @return empty {#link List} when key of members do not exist. {@literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/geopos">Redis Documentation: GEOPOS</a>
                         */
                        // @ts-ignore
                        geoPos(key: number /*byte*/[], ...members: number /*byte*/[][]): Array<Point>
                        /**
                         * Get the {@literal member}s within the boundaries of a given {@link Circle}.
                         * @param key must not be {#literal null}.
                         * @param within must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/georadius">Redis Documentation: GEORADIUS</a>
                         */
                        // @ts-ignore
                        geoRadius(key: number /*byte*/[], within: Circle): object
                        /**
                         * Get the {@literal member}s within the boundaries of a given {@link Circle} applying {@link GeoRadiusCommandArgs}.
                         * @param key must not be {#literal null}.
                         * @param within must not be {#literal null}.
                         * @param args must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/georadius">Redis Documentation: GEORADIUS</a>
                         */
                        // @ts-ignore
                        geoRadius(key: number /*byte*/[], within: Circle, args: org.springframework.data.redis.connection.RedisGeoCommands.GeoRadiusCommandArgs): object
                        /**
                         * Get the {@literal member}s within the circle defined by the {@literal members} coordinates and given
                         * {@literal radius}.
                         * @param key must not be {#literal null}.
                         * @param member must not be {#literal null}.
                         * @param radius
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/georadiusbymember">Redis Documentation: GEORADIUSBYMEMBER</a>
                         */
                        // @ts-ignore
                        geoRadiusByMember(key: number /*byte*/[], member: number /*byte*/[], radius: number /*double*/): object
                        /**
                         * Get the {@literal member}s within the circle defined by the {@literal members} coordinates and given
                         * {@link Distance}.
                         * @param key must not be {#literal null}.
                         * @param member must not be {#literal null}.
                         * @param radius must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction..
                         * @see <a href="https://redis.io/commands/georadiusbymember">Redis Documentation: GEORADIUSBYMEMBER</a>
                         */
                        // @ts-ignore
                        geoRadiusByMember(key: number /*byte*/[], member: number /*byte*/[], radius: Distance): object
                        /**
                         * Get the {@literal member}s within the circle defined by the {@literal members} coordinates, given {@link Distance}
                         * and {@link GeoRadiusCommandArgs}.
                         * @param key must not be {#literal null}.
                         * @param member must not be {#literal null}.
                         * @param radius must not be {#literal null}.
                         * @param args must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/georadiusbymember">Redis Documentation: GEORADIUSBYMEMBER</a>
                         */
                        // @ts-ignore
                        geoRadiusByMember(key: number /*byte*/[], member: number /*byte*/[], radius: Distance, args: org.springframework.data.redis.connection.RedisGeoCommands.GeoRadiusCommandArgs): object
                        /**
                         * Remove the {@literal member}s.
                         * @param key must not be {#literal null}.
                         * @param members must not be {#literal null}.
                         * @return Number of elements removed. {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zrem">Redis Documentation: ZREM</a>
                         */
                        // @ts-ignore
                        geoRemove(key: number /*byte*/[], ...members: number /*byte*/[][]): number
                    }
                }
            }
        }
    }
}
