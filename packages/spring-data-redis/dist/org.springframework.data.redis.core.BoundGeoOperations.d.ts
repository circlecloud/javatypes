declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * {@link GeoOperations} bound to a certain key.
                     * @author Ninad Divadkar
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 1.8
                     */
                    // @ts-ignore
                    interface BoundGeoOperations<K, M> extends org.springframework.data.redis.core.BoundKeyOperations<K> {
                        /**
                         * Add {@link Point} with given member {@literal name} to {@literal key}.
                         * @param point must not be {#literal null}.
                         * @param member must not be {#literal null}.
                         * @return Number of elements added. {#literal null} when used in pipeline / transaction.
                         * @since 2.0
                         * @see <a href="https://redis.io/commands/geoadd">Redis Documentation: GEOADD</a>
                         */
                        // @ts-ignore
                        add(point: Point, member: M): number
                        /**
                         * Add {@link Point} with given member {@literal name} to {@literal key}.
                         * @param point must not be {#literal null}.
                         * @param member must not be {#literal null}.
                         * @return Number of elements added. {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/geoadd">Redis Documentation: GEOADD</a>
                         * @deprecated since 2.0, use {#link #add(Point, Object)}.
                         */
                        // @ts-ignore
                        geoAdd(point: Point, member: M): number
                        /**
                         * Add {@link GeoLocation} to {@literal key}.
                         * @param location must not be {#literal null}.
                         * @return Number of elements added. {#literal null} when used in pipeline / transaction.
                         * @since 2.0
                         * @see <a href="https://redis.io/commands/geoadd">Redis Documentation: GEOADD</a>
                         */
                        // @ts-ignore
                        add(location: org.springframework.data.redis.connection.RedisGeoCommands.GeoLocation<M>): number
                        /**
                         * Add {@link GeoLocation} to {@literal key}.
                         * @param location must not be {#literal null}.
                         * @return Number of elements added. {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/geoadd">Redis Documentation: GEOADD</a>
                         * @deprecated since 2.0, use {#link #add(GeoLocation)}.
                         */
                        // @ts-ignore
                        geoAdd(location: org.springframework.data.redis.connection.RedisGeoCommands.GeoLocation<M>): number
                        /**
                         * Add {@link Map} of member / {@link Point} pairs to {@literal key}.
                         * @param memberCoordinateMap must not be {#literal null}.
                         * @return Number of elements added. {#literal null} when used in pipeline / transaction.
                         * @since 2.0
                         * @see <a href="https://redis.io/commands/geoadd">Redis Documentation: GEOADD</a>
                         */
                        // @ts-ignore
                        add(memberCoordinateMap: java.util.Map<M, Point>): number
                        /**
                         * Add {@link Map} of member / {@link Point} pairs to {@literal key}.
                         * @param memberCoordinateMap must not be {#literal null}.
                         * @return Number of elements added. {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/geoadd">Redis Documentation: GEOADD</a>
                         * @deprecated since 2.0, use {#link #add(Map)}.
                         */
                        // @ts-ignore
                        geoAdd(memberCoordinateMap: java.util.Map<M, Point>): number
                        /**
                         * Add {@link GeoLocation}s to {@literal key}
                         * @param locations must not be {#literal null}.
                         * @return Number of elements added. {#literal null} when used in pipeline / transaction.
                         * @since 2.0
                         * @see <a href="https://redis.io/commands/geoadd">Redis Documentation: GEOADD</a>
                         */
                        // @ts-ignore
                        add(locations: java.lang.Iterable<org.springframework.data.redis.connection.RedisGeoCommands.GeoLocation<M>>): number
                        /**
                         * Add {@link GeoLocation}s to {@literal key}
                         * @param locations must not be {#literal null}.
                         * @return Number of elements added. {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/geoadd">Redis Documentation: GEOADD</a>
                         * @deprecated since 2.0, use {#link #add(Iterable)}.
                         */
                        // @ts-ignore
                        geoAdd(locations: java.lang.Iterable<org.springframework.data.redis.connection.RedisGeoCommands.GeoLocation<M>>): number
                        /**
                         * Get the {@link Distance} between {@literal member1} and {@literal member2}.
                         * @param member1 must not be {#literal null}.
                         * @param member2 must not be {#literal null}.
                         * @return can be {#literal null}.
                         * @since 2.0
                         * @see <a href="https://redis.io/commands/geodist">Redis Documentation: GEODIST</a>
                         */
                        // @ts-ignore
                        distance(member1: M, member2: M): Distance
                        /**
                         * Get the {@link Distance} between {@literal member1} and {@literal member2}.
                         * @param member1 must not be {#literal null}.
                         * @param member2 must not be {#literal null}.
                         * @return can be {#literal null}.
                         * @see <a href="https://redis.io/commands/geodist">Redis Documentation: GEODIST</a>
                         * @deprecated since 2.0, use {#link #distance(Object, Object)}.
                         */
                        // @ts-ignore
                        geoDist(member1: M, member2: M): Distance
                        /**
                         * Get the {@link Distance} between {@literal member1} and {@literal member2} in the given {@link Metric}.
                         * @param member1 must not be {#literal null}.
                         * @param member2 must not be {#literal null}.
                         * @param metric must not be {#literal null}.
                         * @return can be {#literal null}.
                         * @since 2.0
                         * @see <a href="https://redis.io/commands/geodist">Redis Documentation: GEODIST</a>
                         */
                        // @ts-ignore
                        distance(member1: M, member2: M, metric: Metric): Distance
                        /**
                         * Get the {@link Distance} between {@literal member1} and {@literal member2} in the given {@link Metric}.
                         * @param member1 must not be {#literal null}.
                         * @param member2 must not be {#literal null}.
                         * @param metric must not be {#literal null}.
                         * @return can be {#literal null}.
                         * @see <a href="https://redis.io/commands/geodist">Redis Documentation: GEODIST</a>
                         * @deprecated since 2.0, use {#link #distance(Object, Object, Metric)}.
                         */
                        // @ts-ignore
                        geoDist(member1: M, member2: M, metric: Metric): Distance
                        /**
                         * Get Geohash representation of the position for one or more {@literal member}s.
                         * @param members must not be {#literal null}.
                         * @return never {#literal null} unless used in pipeline / transaction.
                         * @since 2.0
                         * @see <a href="https://redis.io/commands/geohash">Redis Documentation: GEOHASH</a>
                         */
                        // @ts-ignore
                        hash(...members: M[]): Array<java.lang.String | string>
                        /**
                         * Get Geohash representation of the position for one or more {@literal member}s.
                         * @param members must not be {#literal null}.
                         * @return never {#literal null} unless used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/geohash">Redis Documentation: GEOHASH</a>
                         * @deprecated since 2.0, use {#link #hash(Object[])}.
                         */
                        // @ts-ignore
                        geoHash(...members: M[]): Array<java.lang.String | string>
                        /**
                         * Get the {@link Point} representation of positions for one or more {@literal member}s.
                         * @param members must not be {#literal null}.
                         * @return never {#literal null} unless used in pipeline / transaction.
                         * @since 2.0
                         * @see <a href="https://redis.io/commands/geopos">Redis Documentation: GEOPOS</a>
                         */
                        // @ts-ignore
                        position(...members: M[]): Array<Point>
                        /**
                         * Get the {@link Point} representation of positions for one or more {@literal member}s.
                         * @param members must not be {#literal null}.
                         * @return never {#literal null} unless used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/geopos">Redis Documentation: GEOPOS</a>
                         * @deprecated since 2.0, use {#link #position(Object[])}.
                         */
                        // @ts-ignore
                        geoPos(...members: M[]): Array<Point>
                        /**
                         * Get the {@literal member}s within the boundaries of a given {@link Circle}.
                         * @param within must not be {#literal null}.
                         * @return never {#literal null} unless used in pipeline / transaction.
                         * @since 2.0
                         * @see <a href="https://redis.io/commands/georadius">Redis Documentation: GEORADIUS</a>
                         */
                        // @ts-ignore
                        radius(within: Circle): object
                        /**
                         * Get the {@literal member}s within the boundaries of a given {@link Circle}.
                         * @param within must not be {#literal null}.
                         * @return never {#literal null} unless used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/georadius">Redis Documentation: GEORADIUS</a>
                         * @deprecated since 2.0, use {#link #radius(Circle)}.
                         */
                        // @ts-ignore
                        geoRadius(within: Circle): object
                        /**
                         * Get the {@literal member}s within the boundaries of a given {@link Circle} applying {@link GeoRadiusCommandArgs}.
                         * @param within must not be {#literal null}.
                         * @param args must not be {#literal null}.
                         * @return never {#literal null} unless used in pipeline / transaction.
                         * @since 2.0
                         * @see <a href="https://redis.io/commands/georadius">Redis Documentation: GEORADIUS</a>
                         */
                        // @ts-ignore
                        radius(within: Circle, args: org.springframework.data.redis.connection.RedisGeoCommands.GeoRadiusCommandArgs): object
                        /**
                         * Get the {@literal member}s within the boundaries of a given {@link Circle} applying {@link GeoRadiusCommandArgs}.
                         * @param within must not be {#literal null}.
                         * @param args must not be {#literal null}.
                         * @return never {#literal null} unless used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/georadius">Redis Documentation: GEORADIUS</a>
                         * @deprecated since 2.0, use {#link #radius(Circle, GeoRadiusCommandArgs)}.
                         */
                        // @ts-ignore
                        geoRadius(within: Circle, args: org.springframework.data.redis.connection.RedisGeoCommands.GeoRadiusCommandArgs): object
                        /**
                         * Get the {@literal member}s within the circle defined by the {@literal members} coordinates and given
                         * {@literal radius}.
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
                         * @param member must not be {#literal null}.
                         * @param distance must not be {#literal null}.
                         * @return never {#literal null} unless used in pipeline / transaction.
                         * @since 2.0
                         * @see <a href="https://redis.io/commands/georadiusbymember">Redis Documentation: GEORADIUSBYMEMBER</a>
                         */
                        // @ts-ignore
                        radius(member: M, distance: Distance): object
                        /**
                         * Get the {@literal member}s within the circle defined by the {@literal members} coordinates and given
                         * {@literal radius} applying {@link Metric}.
                         * @param member must not be {#literal null}.
                         * @param distance must not be {#literal null}.
                         * @return never {#literal null} unless used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/georadiusbymember">Redis Documentation: GEORADIUSBYMEMBER</a>
                         * @deprecated since 2.0, use {#link #radius(Object, Distance)}.
                         */
                        // @ts-ignore
                        geoRadiusByMember(member: M, distance: Distance): object
                        /**
                         * Get the {@literal member}s within the circle defined by the {@literal members} coordinates and given
                         * {@literal radius} applying {@link Metric} and {@link GeoRadiusCommandArgs}.
                         * @param member must not be {#literal null}.
                         * @param distance must not be {#literal null}.
                         * @param args must not be {#literal null}.
                         * @return never {#literal null} unless used in pipeline / transaction.
                         * @since 2.0
                         * @see <a href="https://redis.io/commands/georadiusbymember">Redis Documentation: GEORADIUSBYMEMBER</a>
                         */
                        // @ts-ignore
                        radius(member: M, distance: Distance, args: org.springframework.data.redis.connection.RedisGeoCommands.GeoRadiusCommandArgs): object
                        /**
                         * Get the {@literal member}s within the circle defined by the {@literal members} coordinates and given
                         * {@literal radius} applying {@link Metric} and {@link GeoRadiusCommandArgs}.
                         * @param member must not be {#literal null}.
                         * @param distance must not be {#literal null}.
                         * @param args must not be {#literal null}.
                         * @return never {#literal null} unless used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/georadiusbymember">Redis Documentation: GEORADIUSBYMEMBER</a>
                         * @deprecated since 2.0, use {#link #radius(Object, Distance, GeoRadiusCommandArgs)}.
                         */
                        // @ts-ignore
                        geoRadiusByMember(member: M, distance: Distance, args: org.springframework.data.redis.connection.RedisGeoCommands.GeoRadiusCommandArgs): object
                        /**
                         * Remove the {@literal member}s.
                         * @param members must not be {#literal null}.
                         * @return Number of elements removed. {#literal null} when used in pipeline / transaction.
                         * @since 2.0
                         */
                        // @ts-ignore
                        remove(...members: M[]): number
                        /**
                         * Remove the {@literal member}s.
                         * @param members must not be {#literal null}.
                         * @return Number of elements removed. {#literal null} when used in pipeline / transaction.
                         * @deprecated since 2.0, use {#link #remove(Object[])}.
                         */
                        // @ts-ignore
                        geoRemove(...members: M[]): number
                    }
                }
            }
        }
    }
}
