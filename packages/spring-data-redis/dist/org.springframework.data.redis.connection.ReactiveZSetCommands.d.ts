declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Redis Sorted Set commands executed using reactive infrastructure.
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 2.0
                     */
                    // @ts-ignore
                    interface ReactiveZSetCommands {
                        /**
                         * Add {@literal value} to a sorted set at {@literal key}, or update its {@literal score} if it already exists.
                         * @param key must not be {#literal null}.
                         * @param score must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zadd">Redis Documentation: ZADD</a>
                         */
                        // @ts-ignore
                        zAdd(key: java.nio.ByteBuffer, score: java.lang.Double | number, value: java.nio.ByteBuffer): object
                        /**
                         * Add a {@literal tuples} to a sorted set at {@literal key}, or update their score if it already exists.
                         * @param key must not be {#literal null}.
                         * @param tuples must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zadd">Redis Documentation: ZADD</a>
                         */
                        // @ts-ignore
                        zAdd(key: java.nio.ByteBuffer, tuples: java.util.Collection<any> | Array<any>): object
                        /**
                         * Add {@link ZAddCommand#getTuples()} to a sorted set at {@link ZAddCommand#getKey()}, or update its {@literal score}
                         * if it already exists.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zadd">Redis Documentation: ZADD</a>
                         */
                        // @ts-ignore
                        zAdd(commands: object): object
                        /**
                         * Remove {@literal value} from sorted set. Return number of removed elements.
                         * @param key must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zrem">Redis Documentation: ZREM</a>
                         */
                        // @ts-ignore
                        zRem(key: java.nio.ByteBuffer, value: java.nio.ByteBuffer): object
                        /**
                         * Remove {@literal values} from sorted set. Return number of removed elements.
                         * @param key must not be {#literal null}.
                         * @param values must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zrem">Redis Documentation: ZREM</a>
                         */
                        // @ts-ignore
                        zRem(key: java.nio.ByteBuffer, values: java.util.Collection<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>): object
                        /**
                         * Remove {@link ZRemCommand#getValues()} from sorted set. Return number of removed elements.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zrem">Redis Documentation: ZREM</a>
                         */
                        // @ts-ignore
                        zRem(commands: object): object
                        /**
                         * Increment the score of element with {@literal value} in sorted set by {@literal increment}.
                         * @param key must not be {#literal null}.
                         * @param increment must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zincrby">Redis Documentation: ZINCRBY</a>
                         */
                        // @ts-ignore
                        zIncrBy(key: java.nio.ByteBuffer, increment: java.lang.Number, value: java.nio.ByteBuffer): object
                        /**
                         * Increment the score of element with {@link ZIncrByCommand#getValue()} in sorted set by
                         * {@link ZIncrByCommand#getIncrement()}.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zincrby">Redis Documentation: ZINCRBY</a>
                         */
                        // @ts-ignore
                        zIncrBy(commands: object): object
                        /**
                         * Determine the index of element with {@literal value} in a sorted set.
                         * @param key must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zrank">Redis Documentation: ZRANK</a>
                         */
                        // @ts-ignore
                        zRank(key: java.nio.ByteBuffer, value: java.nio.ByteBuffer): object
                        /**
                         * Determine the index of element with {@literal value} in a sorted set when scored high to low.
                         * @param key must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zrevrank">Redis Documentation: ZREVRANK</a>
                         */
                        // @ts-ignore
                        zRevRank(key: java.nio.ByteBuffer, value: java.nio.ByteBuffer): object
                        /**
                         * Determine the index of element with {@literal value} in a sorted set when scored by
                         * {@link ZRankCommand#getDirection()}.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zrank">Redis Documentation: ZRANK</a>
                         * @see <a href="https://redis.io/commands/zrevrank">Redis Documentation: ZREVRANK</a>
                         */
                        // @ts-ignore
                        zRank(commands: object): object
                        /**
                         * Get elements in {@literal range} from sorted set.
                         * @param key must not be {#literal null}.
                         * @param range must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zrange">Redis Documentation: ZRANGE</a>
                         */
                        // @ts-ignore
                        zRange(key: java.nio.ByteBuffer, range: object): object
                        /**
                         * Get set of {@link Tuple}s in {@literal range} from sorted set.
                         * @param key must not be {#literal null}.
                         * @param range must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zrange">Redis Documentation: ZRANGE</a>
                         */
                        // @ts-ignore
                        zRangeWithScores(key: java.nio.ByteBuffer, range: object): object
                        /**
                         * Get elements in {@literal range} from sorted set in reverse {@literal score} ordering.
                         * @param key must not be {#literal null}.
                         * @param range must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zrevrange">Redis Documentation: ZREVRANGE</a>
                         */
                        // @ts-ignore
                        zRevRange(key: java.nio.ByteBuffer, range: object): object
                        /**
                         * Get set of {@link Tuple}s in {@literal range} from sorted set in reverse {@literal score} ordering.
                         * @param key must not be {#literal null}.
                         * @param range must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zrevrange">Redis Documentation: ZREVRANGE</a>
                         */
                        // @ts-ignore
                        zRevRangeWithScores(key: java.nio.ByteBuffer, range: object): object
                        /**
                         * Get set of {@link Tuple}s in {@literal range} from sorted set.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zrange">Redis Documentation: ZRANGE</a>
                         * @see <a href="https://redis.io/commands/zrevrange">Redis Documentation: ZREVRANGE</a>
                         */
                        // @ts-ignore
                        zRange(commands: object): object
                        /**
                         * Get elements in {@literal range} from sorted set.
                         * @param key must not be {#literal null}.
                         * @param range must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zrangebyscore">Redis Documentation: ZRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        zRangeByScore(key: java.nio.ByteBuffer, range: object): object
                        /**
                         * Get elements in {@literal range} from sorted set.
                         * @param key must not be {#literal null}.
                         * @param range must not be {#literal null}.
                         * @param limit must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zrangebyscore">Redis Documentation: ZRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        zRangeByScore(key: java.nio.ByteBuffer, range: object, limit: org.springframework.data.redis.connection.RedisZSetCommands.Limit): object
                        /**
                         * Get {@link Tuple}s in {@literal range} from sorted set.
                         * @param key must not be {#literal null}.
                         * @param range must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zrangebyscore">Redis Documentation: ZRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        zRangeByScoreWithScores(key: java.nio.ByteBuffer, range: object): object
                        /**
                         * Get {@link Tuple}s in {@literal range} from sorted set.
                         * @param key must not be {#literal null}.
                         * @param range must not be {#literal null}.
                         * @param limit must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zrangebyscore">Redis Documentation: ZRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        zRangeByScoreWithScores(key: java.nio.ByteBuffer, range: object, limit: org.springframework.data.redis.connection.RedisZSetCommands.Limit): object
                        /**
                         * Get elements in {@literal range} from sorted set in reverse {@literal score} ordering.
                         * @param key must not be {#literal null}.
                         * @param range must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zrevrangebyscore">Redis Documentation: ZREVRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        zRevRangeByScore(key: java.nio.ByteBuffer, range: object): object
                        /**
                         * Get elements in {@literal range} from sorted set in reverse {@literal score} ordering.
                         * @param key must not be {#literal null}.
                         * @param range must not be {#literal null}.
                         * @param limit must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zrevrangebyscore">Redis Documentation: ZREVRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        zRevRangeByScore(key: java.nio.ByteBuffer, range: object, limit: org.springframework.data.redis.connection.RedisZSetCommands.Limit): object
                        /**
                         * Get set of {@link Tuple}s in {@literal range} from sorted set in reverse {@literal score} ordering.
                         * @param key must not be {#literal null}.
                         * @param range must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zrevrangebyscore">Redis Documentation: ZREVRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        zRevRangeByScoreWithScores(key: java.nio.ByteBuffer, range: object): object
                        /**
                         * Get {@link Tuple}s in {@literal range} from sorted set in reverse {@literal score} ordering.
                         * @param key must not be {#literal null}.
                         * @param range must not be {#literal null}.
                         * @param limit must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zrevrangebyscore">Redis Documentation: ZREVRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        zRevRangeByScoreWithScores(key: java.nio.ByteBuffer, range: object, limit: org.springframework.data.redis.connection.RedisZSetCommands.Limit): object
                        /**
                         * Get {@link Tuple}s in {@literal range} from sorted set.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zrangebyscore">Redis Documentation: ZRANGEBYSCORE</a>
                         * @see <a href="https://redis.io/commands/zrevrangebyscore">Redis Documentation: ZREVRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        zRangeByScore(commands: object): object
                        /**
                         * Use a {@link Flux} to iterate over members in the sorted set at {@code key}. The resulting {@link Flux} acts as a
                         * cursor and issues {@code ZSCAN} commands itself as long as the subscriber signals demand.
                         * @param key must not be {#literal null}.
                         * @return the {#link Flux} emitting the raw {@link Tuple tuples} one by one.
                         * @throws IllegalArgumentException when key is {#literal null}.
                         * @see <a href="https://redis.io/commands/zscan">Redis Documentation: ZSCAN</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        zScan(key: java.nio.ByteBuffer): object
                        /**
                         * Use a {@link Flux} to iterate over members in the sorted set at {@code key} given {@link ScanOptions}. The
                         * resulting {@link Flux} acts as a cursor and issues {@code ZSCAN} commands itself as long as the subscriber signals.
                         * @param key must not be {#literal null}.
                         * @param options must not be {#literal null}. Use {@link ScanOptions#NONE} instead.
                         * @return the {#link Flux} emitting the raw {@link Tuple tuples} one by one.
                         * @throws IllegalArgumentException when one of the required arguments is {#literal null}.
                         * @see <a href="https://redis.io/commands/zscan">Redis Documentation: ZSCAN</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        zScan(key: java.nio.ByteBuffer, options: org.springframework.data.redis.core.ScanOptions): object
                        /**
                         * Use a {@link Flux} to iterate over members in the sorted set at {@code key}. The resulting {@link Flux} acts as a
                         * cursor and issues {@code ZSCAN} commands itself as long as the subscriber signals demand.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zscan">Redis Documentation: ZSCAN</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        zScan(commands: object): object
                        /**
                         * Count number of elements within sorted set with scores within {@link Range}. <br />
                         * <b>NOTE</b> please use {@link Double#NEGATIVE_INFINITY} for {@literal -inf} and {@link Double#POSITIVE_INFINITY}
                         * for {@literal +inf}.
                         * @param key must not be {#literal null}.
                         * @param range must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zcount">Redis Documentation: ZCOUNT</a>
                         */
                        // @ts-ignore
                        zCount(key: java.nio.ByteBuffer, range: object): object
                        /**
                         * Count number of elements within sorted set with scores within {@link Range}. <br />
                         * <b>NOTE</b> please use {@link Double#NEGATIVE_INFINITY} for {@literal -inf} and {@link Double#POSITIVE_INFINITY}
                         * for {@literal +inf}.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zcount">Redis Documentation: ZCOUNT</a>
                         */
                        // @ts-ignore
                        zCount(commands: object): object
                        /**
                         * Get the size of sorted set with {@literal key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zcard">Redis Documentation: ZCARD</a>
                         */
                        // @ts-ignore
                        zCard(key: java.nio.ByteBuffer): object
                        /**
                         * Get the size of sorted set with {@link KeyCommand#getKey()}.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zcard">Redis Documentation: ZCARD</a>
                         */
                        // @ts-ignore
                        zCard(commands: object): object
                        /**
                         * Get the score of element with {@literal value} from sorted set with key {@literal key}.
                         * @param key must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zscore">Redis Documentation: ZSCORE</a>
                         */
                        // @ts-ignore
                        zScore(key: java.nio.ByteBuffer, value: java.nio.ByteBuffer): object
                        /**
                         * Get the score of element with {@link ZScoreCommand#getValue()} from sorted set with key
                         * {@link ZScoreCommand#getKey()}
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zscore">Redis Documentation: ZSCORE</a>
                         */
                        // @ts-ignore
                        zScore(commands: object): object
                        /**
                         * Remove elements in {@link Range} from sorted set with {@literal key}.
                         * @param key must not be {#literal null}.
                         * @param range must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zremrangebyrank">Redis Documentation: ZREMRANGEBYRANK</a>
                         */
                        // @ts-ignore
                        zRemRangeByRank(key: java.nio.ByteBuffer, range: object): object
                        /**
                         * Remove elements in {@link Range} from sorted set with {@link ZRemRangeByRankCommand#getKey()}.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zremrangebyrank">Redis Documentation: ZREMRANGEBYRANK</a>
                         */
                        // @ts-ignore
                        zRemRangeByRank(commands: object): object
                        /**
                         * Remove elements in {@link Range} from sorted set with {@literal key}.
                         * @param key must not be {#literal null}.
                         * @param range must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zremrangebyscore">Redis Documentation: ZREMRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        zRemRangeByScore(key: java.nio.ByteBuffer, range: object): object
                        /**
                         * Remove elements in {@link Range} from sorted set with {@link ZRemRangeByRankCommand#getKey()}.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zremrangebyscore">Redis Documentation: ZREMRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        zRemRangeByScore(commands: object): object
                        /**
                         * Union sorted {@literal sets} and store result in destination {@literal destinationKey}.
                         * @param destinationKey must not be {#literal null}.
                         * @param sets must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zunionstore">Redis Documentation: ZUNIONSTORE</a>
                         */
                        // @ts-ignore
                        zUnionStore(destinationKey: java.nio.ByteBuffer, sets: java.util.List<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>): object
                        /**
                         * Union sorted {@literal sets} and store result in destination {@literal destinationKey} and apply weights to
                         * individual sets.
                         * @param destinationKey must not be {#literal null}.
                         * @param sets must not be {#literal null}.
                         * @param weights must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zunionstore">Redis Documentation: ZUNIONSTORE</a>
                         */
                        // @ts-ignore
                        zUnionStore(destinationKey: java.nio.ByteBuffer, sets: java.util.List<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>, weights: java.util.List<java.lang.Double | number> | Array<java.lang.Double | number>): object
                        /**
                         * Union sorted {@literal sets} and store result in destination {@literal destinationKey} and apply weights to
                         * individual sets.
                         * @param destinationKey must not be {#literal null}.
                         * @param sets must not be {#literal null}.
                         * @param weights must not be {#literal null}.
                         * @return 
                         * @since 2.1
                         * @see <a href="https://redis.io/commands/zunionstore">Redis Documentation: ZUNIONSTORE</a>
                         */
                        // @ts-ignore
                        zUnionStore(destinationKey: java.nio.ByteBuffer, sets: java.util.List<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>, weights: org.springframework.data.redis.connection.RedisZSetCommands.Weights): object
                        /**
                         * Union sorted {@literal sets} by applying {@literal aggregateFunction} and store result in destination
                         * {@literal destinationKey} and apply weights to individual sets.
                         * @param destinationKey must not be {#literal null}.
                         * @param sets must not be {#literal null}.
                         * @param weights can be {#literal null}.
                         * @param aggregateFunction can be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zunionstore">Redis Documentation: ZUNIONSTORE</a>
                         */
                        // @ts-ignore
                        zUnionStore(destinationKey: java.nio.ByteBuffer, sets: java.util.List<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>, weights: java.util.List<java.lang.Double | number> | Array<java.lang.Double | number>, aggregateFunction: org.springframework.data.redis.connection.RedisZSetCommands.Aggregate): object
                        /**
                         * Union sorted {@literal sets} by applying {@literal aggregateFunction} and store result in destination
                         * {@literal destinationKey} and apply weights to individual sets.
                         * @param destinationKey must not be {#literal null}.
                         * @param sets must not be {#literal null}.
                         * @param weights can be {#literal null}.
                         * @param aggregateFunction can be {#literal null}.
                         * @return 
                         * @since 2.1
                         * @see <a href="https://redis.io/commands/zunionstore">Redis Documentation: ZUNIONSTORE</a>
                         */
                        // @ts-ignore
                        zUnionStore(destinationKey: java.nio.ByteBuffer, sets: java.util.List<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>, weights: org.springframework.data.redis.connection.RedisZSetCommands.Weights, aggregateFunction: org.springframework.data.redis.connection.RedisZSetCommands.Aggregate): object
                        /**
                         * Union sorted {@literal sets} by applying {@literal aggregateFunction} and store result in destination
                         * {@literal destinationKey} and apply weights to individual sets.
                         * @param commands
                         * @return 
                         * @see <a href="https://redis.io/commands/zunionstore">Redis Documentation: ZUNIONSTORE</a>
                         */
                        // @ts-ignore
                        zUnionStore(commands: object): object
                        /**
                         * Intersect sorted {@literal sets} and store result in destination {@literal destinationKey}.
                         * @param destinationKey must not be {#literal null}.
                         * @param sets must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zinterstore">Redis Documentation: ZINTERSTORE</a>
                         */
                        // @ts-ignore
                        zInterStore(destinationKey: java.nio.ByteBuffer, sets: java.util.List<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>): object
                        /**
                         * Intersect sorted {@literal sets} and store result in destination {@literal destinationKey} and apply weights to
                         * individual sets.
                         * @param destinationKey must not be {#literal null}.
                         * @param sets must not be {#literal null}.
                         * @param weights must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zinterstore">Redis Documentation: ZINTERSTORE</a>
                         */
                        // @ts-ignore
                        zInterStore(destinationKey: java.nio.ByteBuffer, sets: java.util.List<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>, weights: java.util.List<java.lang.Double | number> | Array<java.lang.Double | number>): object
                        /**
                         * Intersect sorted {@literal sets} and store result in destination {@literal destinationKey} and apply weights to
                         * individual sets.
                         * @param destinationKey must not be {#literal null}.
                         * @param sets must not be {#literal null}.
                         * @param weights must not be {#literal null}.
                         * @return 
                         * @since 2.1
                         * @see <a href="https://redis.io/commands/zinterstore">Redis Documentation: ZINTERSTORE</a>
                         */
                        // @ts-ignore
                        zInterStore(destinationKey: java.nio.ByteBuffer, sets: java.util.List<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>, weights: org.springframework.data.redis.connection.RedisZSetCommands.Weights): object
                        /**
                         * Intersect sorted {@literal sets} by applying {@literal aggregateFunction} and store result in destination
                         * {@literal destinationKey} and apply weights to individual sets.
                         * @param destinationKey must not be {#literal null}.
                         * @param sets must not be {#literal null}.
                         * @param weights must not be {#literal null}.
                         * @param aggregateFunction can be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zinterstore">Redis Documentation: ZINTERSTORE</a>
                         */
                        // @ts-ignore
                        zInterStore(destinationKey: java.nio.ByteBuffer, sets: java.util.List<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>, weights: java.util.List<java.lang.Double | number> | Array<java.lang.Double | number>, aggregateFunction: org.springframework.data.redis.connection.RedisZSetCommands.Aggregate): object
                        /**
                         * Intersect sorted {@literal sets} by applying {@literal aggregateFunction} and store result in destination
                         * {@literal destinationKey} and apply weights to individual sets.
                         * @param destinationKey must not be {#literal null}.
                         * @param sets must not be {#literal null}.
                         * @param weights must not be {#literal null}.
                         * @param aggregateFunction can be {#literal null}.
                         * @return 
                         * @since 2.1
                         * @see <a href="https://redis.io/commands/zinterstore">Redis Documentation: ZINTERSTORE</a>
                         */
                        // @ts-ignore
                        zInterStore(destinationKey: java.nio.ByteBuffer, sets: java.util.List<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>, weights: org.springframework.data.redis.connection.RedisZSetCommands.Weights, aggregateFunction: org.springframework.data.redis.connection.RedisZSetCommands.Aggregate): object
                        /**
                         * Intersect sorted {@literal sets} by applying {@literal aggregateFunction} and store result in destination
                         * {@literal destinationKey} and apply weights to individual sets.
                         * @param commands
                         * @return 
                         * @see <a href="https://redis.io/commands/zinterstore">Redis Documentation: ZINTERSTORE</a>
                         */
                        // @ts-ignore
                        zInterStore(commands: object): object
                        /**
                         * Get all elements in {@link Range} from the sorted set at {@literal key} in lexicographical ordering.
                         * @param key must not be {#literal null}.
                         * @param range must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zrangebylex">Redis Documentation: ZRANGEBYLEX</a>
                         */
                        // @ts-ignore
                        zRangeByLex(key: java.nio.ByteBuffer, range: object): object
                        /**
                         * Get all elements in {@link Range} from the sorted set at {@literal key} in lexicographical ordering. Result is
                         * limited via {@link Limit}.
                         * @param key must not be {#literal null}.
                         * @param range must not be {#literal null}.
                         * @param limit can be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zrangebylex">Redis Documentation: ZRANGEBYLEX</a>
                         */
                        // @ts-ignore
                        zRangeByLex(key: java.nio.ByteBuffer, range: object, limit: org.springframework.data.redis.connection.RedisZSetCommands.Limit): object
                        /**
                         * Get all elements in {@link Range} from the sorted set at {@literal key} in lexicographical ordering.
                         * @param key must not be {#literal null}.
                         * @param range must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zrevrangebylex">Redis Documentation: ZREVRANGEBYLEX</a>
                         */
                        // @ts-ignore
                        zRevRangeByLex(key: java.nio.ByteBuffer, range: object): object
                        /**
                         * Get all elements in {@link Range} from the sorted set at {@literal key} in lexicographical ordering. Result is
                         * limited via {@link Limit}.
                         * @param key must not be {#literal null}.
                         * @param range must not be {#literal null}.
                         * @param limit must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zrevrangebylex">Redis Documentation: ZREVRANGEBYLEX</a>
                         */
                        // @ts-ignore
                        zRevRangeByLex(key: java.nio.ByteBuffer, range: object, limit: org.springframework.data.redis.connection.RedisZSetCommands.Limit): object
                        /**
                         * Get all elements in {@link Range} from the sorted set at {@literal key} in lexicographical ordering. Result is
                         * limited via {@link Limit} and sorted by {@link ZRangeByLexCommand#getDirection()}.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zrangebylex">Redis Documentation: ZRANGEBYLEX</a>
                         * @see <a href="https://redis.io/commands/zrevrangebylex">Redis Documentation: ZREVRANGEBYLEX</a>
                         */
                        // @ts-ignore
                        zRangeByLex(commands: object): object
                    }
                }
            }
        }
    }
}
