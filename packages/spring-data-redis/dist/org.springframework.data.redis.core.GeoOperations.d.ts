declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * Redis operations for geo commands.
                     * @author Ninad Divadkar
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @see <a href="https://redis.io/commands#geo">Redis Documentation: Geo Commands</a>
                     * @since 1.8
                     */
                    // @ts-ignore
                    interface GeoOperations<K, M> {
                        /**
                         * Add {@link Point} with given member {@literal name} to {@literal key}.
                         * @param key must not be {#literal null}.
                         * @param point must not be {#literal null}.
                         * @param member must not be {#literal null}.
                         * @return Number of elements added. {#literal null} when used in pipeline / transaction.
                         * @since 2.0
                         * @see <a href="https://redis.io/commands/geoadd">Redis Documentation: GEOADD</a>
                         */
                        // @ts-ignore
                        add(key: K, point: Point, member: M): number
                        /**
                         * Add {@link Point} with given member {@literal name} to {@literal key}.
                         * @param key must not be {#literal null}.
                         * @param point must not be {#literal null}.
                         * @param member must not be {#literal null}.
                         * @return Number of elements added. {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/geoadd">Redis Documentation: GEOADD</a>
                         * @deprecated since 2.0, use {#link #add(Object, Point, Object)}.
                         */
                        // @ts-ignore
                        geoAdd(key: K, point: Point, member: M): number
                        /**
                         * Add {@link GeoLocation} to {@literal key}.
                         * @param key must not be {#literal null}.
                         * @param location must not be {#literal null}.
                         * @return Number of elements added. {#literal null} when used in pipeline / transaction.
                         * @since 2.0
                         * @see <a href="https://redis.io/commands/geoadd">Redis Documentation: GEOADD</a>
                         */
                        // @ts-ignore
                        add(key: K, location: org.springframework.data.redis.connection.RedisGeoCommands.GeoLocation<M>): number
                        /**
                         * Add {@link GeoLocation} to {@literal key}.
                         * @param key must not be {#literal null}.
                         * @param location must not be {#literal null}.
                         * @return Number of elements added. {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/geoadd">Redis Documentation: GEOADD</a>
                         * @deprecated since 2.0, use {#link #add(Object, GeoLocation)}.
                         */
                        // @ts-ignore
                        geoAdd(key: K, location: org.springframework.data.redis.connection.RedisGeoCommands.GeoLocation<M>): number
                        /**
                         * Add {@link Map} of member / {@link Point} pairs to {@literal key}.
                         * @param key must not be {#literal null}.
                         * @param memberCoordinateMap must not be {#literal null}.
                         * @return Number of elements added. {#literal null} when used in pipeline / transaction.
                         * @since 2.0
                         * @see <a href="https://redis.io/commands/geoadd">Redis Documentation: GEOADD</a>
                         */
                        // @ts-ignore
                        add(key: K, memberCoordinateMap: java.util.Map<M, Point>): number
                        /**
                         * Add {@link Map} of member / {@link Point} pairs to {@literal key}.
                         * @param key must not be {#literal null}.
                         * @param memberCoordinateMap must not be {#literal null}.
                         * @return Number of elements added. {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/geoadd">Redis Documentation: GEOADD</a>
                         * @deprecated since 2.0, use {#link #add(Object, Map)}.
                         */
                        // @ts-ignore
                        geoAdd(key: K, memberCoordinateMap: java.util.Map<M, Point>): number
                        /**
                         * Add {@link GeoLocation}s to {@literal key}
                         * @param key must not be {#literal null}.
                         * @param locations must not be {#literal null}.
                         * @return Number of elements added. {#literal null} when used in pipeline / transaction.
                         * @since 2.0
                         * @see <a href="https://redis.io/commands/geoadd">Redis Documentation: GEOADD</a>
                         */
                        // @ts-ignore
                        add(key: K, locations: java.lang.Iterable<org.springframework.data.redis.connection.RedisGeoCommands.GeoLocation<M>>): number
                        /**
                         * Add {@link GeoLocation}s to {@literal key}
                         * @param key must not be {#literal null}.
                         * @param locations must not be {#literal null}.
                         * @return Number of elements added. {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/geoadd">Redis Documentation: GEOADD</a>
                         * @deprecated since 2.0, use {#link #add(Object, Iterable)}.
                         */
                        // @ts-ignore
                        geoAdd(key: K, locations: java.lang.Iterable<org.springframework.data.redis.connection.RedisGeoCommands.GeoLocation<M>>): number
                        /**
                         * Get the {@link Distance} between {@literal member1} and {@literal member2}.
                         * @param key must not be {#literal null}.
                         * @param member1 must not be {#literal null}.
                         * @param member2 must not be {#literal null}.
                         * @return can be {#literal null}.
                         * @since 2.0
                         * @see <a href="https://redis.io/commands/geodist">Redis Documentation: GEODIST</a>
                         */
                        // @ts-ignore
                        distance(key: K, member1: M, member2: M): Distance
                        /**
                         * Get the {@link Distance} between {@literal member1} and {@literal member2}.
                         * @param key must not be {#literal null}.
                         * @param member1 must not be {#literal null}.
                         * @param member2 must not be {#literal null}.
                         * @return can be {#literal null}.
                         * @see <a href="https://redis.io/commands/geodist">Redis Documentation: GEODIST</a>
                         * @deprecated since 2.0, use {#link #distance(Object, Object, Object)}.
                         */
                        // @ts-ignore
                        geoDist(key: K, member1: M, member2: M): Distance
                        /**
                         * Get the {@link Distance} between {@literal member1} and {@literal member2} in the given {@link Metric}.
                         * @param key must not be {#literal null}.
                         * @param member1 must not be {#literal null}.
                         * @param member2 must not be {#literal null}.
                         * @param metric must not be {#literal null}.
                         * @return can be {#literal null}.
                         * @since 2.0
                         * @see <a href="https://redis.io/commands/geodist">Redis Documentation: GEODIST</a>
                         */
                        // @ts-ignore
                        distance(key: K, member1: M, member2: M, metric: Metric): Distance
                        /**
                         * Get the {@link Distance} between {@literal member1} and {@literal member2} in the given {@link Metric}.
                         * @param key must not be {#literal null}.
                         * @param member1 must not be {#literal null}.
                         * @param member2 must not be {#literal null}.
                         * @param metric must not be {#literal null}.
                         * @return can be {#literal null}.
                         * @see <a href="https://redis.io/commands/geodist">Redis Documentation: GEODIST</a>
                         * @deprecated since 2.0, use {#link #distance(Object, Object, Object, Metric)}.
                         */
                        // @ts-ignore
                        geoDist(key: K, member1: M, member2: M, metric: Metric): Distance
                        /**
                         * Get Geohash representation of the position for one or more {@literal member}s.
                         * @param key must not be {#literal null}.
                         * @param members must not be {#literal null}.
                         * @return never {#literal null} unless used in pipeline / transaction.
                         * @since 2.0
                         * @see <a href="https://redis.io/commands/geohash">Redis Documentation: GEOHASH</a>
                         */
                        // @ts-ignore
                        hash(key: K, ...members: M[]): Array<java.lang.String | string>
                        /**
                         * Get Geohash representation of the position for one or more {@literal member}s.
                         * @param key must not be {#literal null}.
                         * @param members must not be {#literal null}.
                         * @return never {#literal null} unless used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/geohash">Redis Documentation: GEOHASH</a>
                         * @deprecated since 2.0, use {#link #hash(Object, Object[])}.
                         */
                        // @ts-ignore
                        geoHash(key: K, ...members: M[]): Array<java.lang.String | string>
                        /**
                         * Get the {@link Point} representation of positions for one or more {@literal member}s.
                         * @param key must not be {#literal null}.
                         * @param members must not be {#literal null}.
                         * @return never {#literal null} unless used in pipeline / transaction.
                         * @since 2.0
                         * @see <a href="https://redis.io/commands/geopos">Redis Documentation: GEOPOS</a>
                         */
                        // @ts-ignore
                        position(key: K, ...members: M[]): Array<Point>
                        /**
                         * Get the {@link Point} representation of positions for one or more {@literal member}s.
                         * @param key must not be {#literal null}.
                         * @param members must not be {#literal null}.
                         * @return never {#literal null} unless used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/geopos">Redis Documentation: GEOPOS</a>
                         * @deprecated since 2.0, use {#link #position(Object, Object[])}.
                         */
                        // @ts-ignore
                        geoPos(key: K, ...members: M[]): Array<Point>
                        /**
                         * Get the {@literal member}s within the boundaries of a given {@link Circle}.
                         * @param key must not be {#literal null}.
                         * @param within must not be {#literal null}.
                         * @return never {#literal null} unless used in pipeline / transaction.
                         * @since 2.0
                         * @see <a href="https://redis.io/commands/georadius">Redis Documentation: GEORADIUS</a>
                         */
                        // @ts-ignore
                        radius(key: K, within: Circle): object
                        /**
                         * Get the {@literal member}s within the boundaries of a given {@link Circle}.
                         * @param key must not be {#literal null}.
                         * @param within must not be {#literal null}.
                         * @return never {#literal null} unless used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/georadius">Redis Documentation: GEORADIUS</a>
                         * @deprecated since 2.0, use {#link #radius(Object, Circle)}.
                         */
                        // @ts-ignore
                        geoRadius(key: K, within: Circle): object
                        /**
                         * Get the {@literal member}s within the boundaries of a given {@link Circle} applying {@link GeoRadiusCommandArgs}.
                         * @param key must not be {#literal null}.
                         * @param within must not be {#literal null}.
                         * @param args must not be {#literal null}.
                         * @return never {#literal null} unless used in pipeline / transaction.
                         * @since 2.0
                         * @see <a href="https://redis.io/commands/georadius">Redis Documentation: GEORADIUS</a>
                         */
                        // @ts-ignore
                        radius(key: K, within: Circle, args: org.springframework.data.redis.connection.RedisGeoCommands.GeoRadiusCommandArgs): object
                        /**
                         * Get the {@literal member}s within the boundaries of a given {@link Circle} applying {@link GeoRadiusCommandArgs}.
                         * @param key must not be {#literal null}.
                         * @param within must not be {#literal null}.
                         * @param args must not be {#literal null}.
                         * @return never {#literal null} unless used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/georadius">Redis Documentation: GEORADIUS</a>
                         * @deprecated since 2.0, use {#link #radius(Object, Circle, GeoRadiusCommandArgs)}.
                         */
                        // @ts-ignore
                        geoRadius(key: K, within: Circle, args: org.springframework.data.redis.connection.RedisGeoCommands.GeoRadiusCommandArgs): object
                        /**
                         * Get the {@literal member}s within the circle defined by the {@literal members} coordinates and given
                         * {@literal radius}.
                         * @param key must not be {#literal null}.
                         * @param member must not be {#literal null}.
                         * @param radius
                         * @return never {#literal null} unless used in pipeline / transaction.
                         * @since 2.0
                         * @see <a href="https://redis.io/commands/georadiusbymember">Redis Documentation: GEORADIUSBYMEMBER</a>
                         */
                        // @ts-ignore
                        radius(key: K, member: M, radius: number /*double*/): object
                        /**
                         * Get the {@literal member}s within the circle defined by the {@literal members} coordinates and given
                         * {@literal radius}.
                         * @param key must not be {#literal null}.
                         * @param member must not be {#literal null}.
                         * @param radius
                         * @return never {#literal null} unless used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/georadiusbymember">Redis Documentation: GEORADIUSBYMEMBER</a>
                         * @deprecated since 2.0, use {#link #radius(Object, Object, double)}.
                         */
                        // @ts-ignore
                        geoRadiusByMember(key: K, member: M, radius: number /*double*/): object
                        /**
                         * Get the {@literal member}s within the circle defined by the {@literal members} coordinates and given
                         * {@literal radius} applying {@link Metric}.
                         * @param key must not be {#literal null}.
                         * @param member must not be {#literal null}.
                         * @param distance must not be {#literal null}.
                         * @return never {#literal null} unless used in pipeline / transaction.
                         * @since 2.0
                         * @see <a href="https://redis.io/commands/georadiusbymember">Redis Documentation: GEORADIUSBYMEMBER</a>
                         */
                        // @ts-ignore
                        radius(key: K, member: M, distance: Distance): object
                        /**
                         * Get the {@literal member}s within the circle defined by the {@literal members} coordinates and given
                         * {@literal radius} applying {@link Metric}.
                         * @param key must not be {#literal null}.
                         * @param member must not be {#literal null}.
                         * @param distance must not be {#literal null}.
                         * @return never {#literal null} unless used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/georadiusbymember">Redis Documentation: GEORADIUSBYMEMBER</a>
                         * @deprecated since 2.0, use {#link #radius(Object, Object, Distance)}.
                         */
                        // @ts-ignore
                        geoRadiusByMember(key: K, member: M, distance: Distance): object
                        /**
                         * Get the {@literal member}s within the circle defined by the {@literal members} coordinates and given
                         * {@literal radius} applying {@link Metric} and {@link GeoRadiusCommandArgs}.
                         * @param key must not be {#literal null}.
                         * @param member must not be {#literal null}.
                         * @param distance must not be {#literal null}.
                         * @param args must not be {#literal null}.
                         * @return never {#literal null} unless used in pipeline / transaction.
                         * @since 2.0
                         * @see <a href="https://redis.io/commands/georadiusbymember">Redis Documentation: GEORADIUSBYMEMBER</a>
                         */
                        // @ts-ignore
                        radius(key: K, member: M, distance: Distance, args: org.springframework.data.redis.connection.RedisGeoCommands.GeoRadiusCommandArgs): object
                        /**
                         * Get the {@literal member}s within the circle defined by the {@literal members} coordinates and given
                         * {@literal radius} applying {@link Metric} and {@link GeoRadiusCommandArgs}.
                         * @param key must not be {#literal null}.
                         * @param member must not be {#literal null}.
                         * @param distance must not be {#literal null}.
                         * @param args must not be {#literal null}.
                         * @return never {#literal null} unless used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/georadiusbymember">Redis Documentation: GEORADIUSBYMEMBER</a>
                         * @deprecated since 2.0, use {#link #radius(Object, Object, Distance, GeoRadiusCommandArgs)}.
                         */
                        // @ts-ignore
                        geoRadiusByMember(key: K, member: M, distance: Distance, args: org.springframework.data.redis.connection.RedisGeoCommands.GeoRadiusCommandArgs): object
                        /**
                         * Remove the {@literal member}s.
                         * @param key must not be {#literal null}.
                         * @param members must not be {#literal null}.
                         * @return Number of elements removed. {#literal null} when used in pipeline / transaction.
                         * @since 2.0
                         */
                        // @ts-ignore
                        remove(key: K, ...members: M[]): number
                        /**
                         * Remove the {@literal member}s.
                         * @param key must not be {#literal null}.
                         * @param members must not be {#literal null}.
                         * @return Number of elements removed. {#literal null} when used in pipeline / transaction.
                         * @deprecated since 2.0, use {#link #remove(Object, Object[])}.
                         */
                        // @ts-ignore
                        geoRemove(key: K, ...members: M[]): number
                    }
                }
            }
        }
    }
}
