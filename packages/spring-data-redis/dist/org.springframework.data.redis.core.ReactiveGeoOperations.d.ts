declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * Reactive Redis operations for geo commands.
                     * @author Mark Paluch
                     * @author Christoph Strobl
                     * @see <a href="https://redis.io/commands#geo">Redis Documentation: Geo Commands</a>
                     * @since 2.0
                     */
                    // @ts-ignore
                    interface ReactiveGeoOperations<K, M> {
                        /**
                         * Add {@link Point} with given member {@literal name} to {@literal key}.
                         * @param key must not be {#literal null}.
                         * @param point must not be {#literal null}.
                         * @param member must not be {#literal null}.
                         * @return Number of elements added.
                         * @see <a href="https://redis.io/commands/geoadd">Redis Documentation: GEOADD</a>
                         */
                        // @ts-ignore
                        add(key: K, point: Point, member: M): object
                        /**
                         * Add {@link GeoLocation} to {@literal key}.
                         * @param key must not be {#literal null}.
                         * @param location must not be {#literal null}.
                         * @return Number of elements added.
                         * @see <a href="https://redis.io/commands/geoadd">Redis Documentation: GEOADD</a>
                         */
                        // @ts-ignore
                        add(key: K, location: org.springframework.data.redis.connection.RedisGeoCommands.GeoLocation<M>): object
                        /**
                         * Add {@link Map} of member / {@link Point} pairs to {@literal key}.
                         * @param key must not be {#literal null}.
                         * @param memberCoordinateMap must not be {#literal null}.
                         * @return Number of elements added.
                         * @see <a href="https://redis.io/commands/geoadd">Redis Documentation: GEOADD</a>
                         */
                        // @ts-ignore
                        add(key: K, memberCoordinateMap: java.util.Map<M, Point>): object
                        /**
                         * Add {@link GeoLocation}s to {@literal key}
                         * @param key must not be {#literal null}.
                         * @param locations must not be {#literal null}.
                         * @return Number of elements added.
                         * @see <a href="https://redis.io/commands/geoadd">Redis Documentation: GEOADD</a>
                         */
                        // @ts-ignore
                        add(key: K, locations: java.lang.Iterable<org.springframework.data.redis.connection.RedisGeoCommands.GeoLocation<M>>): object
                        /**
                         * Add {@link GeoLocation}s to {@literal key}
                         * @param key must not be {#literal null}.
                         * @param locations must not be {#literal null}.
                         * @return Number of elements added.
                         * @see <a href="https://redis.io/commands/geoadd">Redis Documentation: GEOADD</a>
                         */
                        // @ts-ignore
                        add(key: K, locations: object): object
                        /**
                         * Get the {@link Distance} between {@literal member1} and {@literal member2}.
                         * @param key must not be {#literal null}.
                         * @param member1 must not be {#literal null}.
                         * @param member2 must not be {#literal null}.
                         * @return can be {#literal null}.
                         * @see <a href="https://redis.io/commands/geodist">Redis Documentation: GEODIST</a>
                         */
                        // @ts-ignore
                        distance(key: K, member1: M, member2: M): object
                        /**
                         * Get the {@link Distance} between {@literal member1} and {@literal member2} in the given {@link Metric}.
                         * @param key must not be {#literal null}.
                         * @param member1 must not be {#literal null}.
                         * @param member2 must not be {#literal null}.
                         * @param metric must not be {#literal null}.
                         * @return can be {#literal null}.
                         * @see <a href="https://redis.io/commands/geodist">Redis Documentation: GEODIST</a>
                         */
                        // @ts-ignore
                        distance(key: K, member1: M, member2: M, metric: Metric): object
                        /**
                         * Get Geohash representation of the position for one or more {@literal member}s.
                         * @param key must not be {#literal null}.
                         * @param member must not be {#literal null}.
                         * @return never {#literal null}.
                         * @see <a href="https://redis.io/commands/geohash">Redis Documentation: GEOHASH</a>
                         */
                        // @ts-ignore
                        hash(key: K, member: M): object
                        /**
                         * Get Geohash representation of the position for one or more {@literal member}s.
                         * @param key must not be {#literal null}.
                         * @param members must not be {#literal null}.
                         * @return never {#literal null}.
                         * @see <a href="https://redis.io/commands/geohash">Redis Documentation: GEOHASH</a>
                         */
                        // @ts-ignore
                        hash(key: K, ...members: M[]): object
                        /**
                         * Get the {@link Point} representation of positions for one or more {@literal member}s.
                         * @param key must not be {#literal null}.
                         * @param member must not be {#literal null}.
                         * @return never {#literal null}.
                         * @see <a href="https://redis.io/commands/geopos">Redis Documentation: GEOPOS</a>
                         */
                        // @ts-ignore
                        position(key: K, member: M): object
                        /**
                         * Get the {@link Point} representation of positions for one or more {@literal member}s.
                         * @param key must not be {#literal null}.
                         * @param members must not be {#literal null}.
                         * @return never {#literal null}.
                         * @see <a href="https://redis.io/commands/geopos">Redis Documentation: GEOPOS</a>
                         */
                        // @ts-ignore
                        position(key: K, ...members: M[]): object
                        /**
                         * Get the {@literal member}s within the boundaries of a given {@link Circle}.
                         * @param key must not be {#literal null}.
                         * @param within must not be {#literal null}.
                         * @return never {#literal null}.
                         * @see <a href="https://redis.io/commands/georadius">Redis Documentation: GEORADIUS</a>
                         */
                        // @ts-ignore
                        radius(key: K, within: Circle): object
                        /**
                         * Get the {@literal member}s within the boundaries of a given {@link Circle} applying {@link GeoRadiusCommandArgs}.
                         * @param key must not be {#literal null}.
                         * @param within must not be {#literal null}.
                         * @param args must not be {#literal null}.
                         * @return never {#literal null}.
                         * @see <a href="https://redis.io/commands/georadius">Redis Documentation: GEORADIUS</a>
                         */
                        // @ts-ignore
                        radius(key: K, within: Circle, args: org.springframework.data.redis.connection.RedisGeoCommands.GeoRadiusCommandArgs): object
                        /**
                         * Get the {@literal member}s within the circle defined by the {@literal members} coordinates and given
                         * {@literal radius}.
                         * @param key must not be {#literal null}.
                         * @param member must not be {#literal null}.
                         * @param radius
                         * @return never {#literal null}.
                         * @see <a href="https://redis.io/commands/georadiusbymember">Redis Documentation: GEORADIUSBYMEMBER</a>
                         */
                        // @ts-ignore
                        radius(key: K, member: M, radius: number /*double*/): object
                        /**
                         * Get the {@literal member}s within the circle defined by the {@literal members} coordinates and given
                         * {@literal radius} applying {@link Metric}.
                         * @param key must not be {#literal null}.
                         * @param member must not be {#literal null}.
                         * @param distance must not be {#literal null}.
                         * @return never {#literal null}.
                         * @see <a href="https://redis.io/commands/georadiusbymember">Redis Documentation: GEORADIUSBYMEMBER</a>
                         */
                        // @ts-ignore
                        radius(key: K, member: M, distance: Distance): object
                        /**
                         * Get the {@literal member}s within the circle defined by the {@literal members} coordinates and given
                         * {@literal radius} applying {@link Metric} and {@link GeoRadiusCommandArgs}.
                         * @param key must not be {#literal null}.
                         * @param member must not be {#literal null}.
                         * @param distance must not be {#literal null}.
                         * @param args must not be {#literal null}.
                         * @return never {#literal null}.
                         * @see <a href="https://redis.io/commands/georadiusbymember">Redis Documentation: GEORADIUSBYMEMBER</a>
                         */
                        // @ts-ignore
                        radius(key: K, member: M, distance: Distance, args: org.springframework.data.redis.connection.RedisGeoCommands.GeoRadiusCommandArgs): object
                        /**
                         * Remove the {@literal member}s.
                         * @param key must not be {#literal null}.
                         * @param members must not be {#literal null}.
                         * @return Number of elements removed.
                         */
                        // @ts-ignore
                        remove(key: K, ...members: M[]): object
                        /**
                         * Removes the given {@literal key}.
                         * @param key must not be {#literal null}.
                         */
                        // @ts-ignore
                        delete(key: K): object
                    }
                }
            }
        }
    }
}
