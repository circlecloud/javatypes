declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * ZSet(SortedSet)-specific commands supported by Redis.
                     * @author Costin Leau
                     * @author Christoph Strobl
                     * @author Thomas Darimont
                     * @author David Liu
                     * @author Mark Paluch
                     */
                    // @ts-ignore
                    interface RedisZSetCommands {
                        /**
                         * Add {@code value} to a sorted set at {@code key}, or update its {@code score} if it already exists.
                         * @param key must not be {#literal null}.
                         * @param score the score.
                         * @param value the value.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zadd">Redis Documentation: ZADD</a>
                         */
                        // @ts-ignore
                        zAdd(key: number /*byte*/[], score: number /*double*/, value: number /*byte*/[]): java.lang.Boolean
                        /**
                         * Add {@code tuples} to a sorted set at {@code key}, or update its {@code score} if it already exists.
                         * @param key must not be {#literal null}.
                         * @param tuples must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zadd">Redis Documentation: ZADD</a>
                         */
                        // @ts-ignore
                        zAdd(key: number /*byte*/[], tuples: java.util.Set<org.springframework.data.redis.connection.RedisZSetCommands.Tuple> | Array<org.springframework.data.redis.connection.RedisZSetCommands.Tuple>): number
                        /**
                         * Remove {@code values} from sorted set. Return number of removed elements.
                         * @param key must not be {#literal null}.
                         * @param values must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zrem">Redis Documentation: ZREM</a>
                         */
                        // @ts-ignore
                        zRem(key: number /*byte*/[], ...values: number /*byte*/[][]): number
                        /**
                         * Increment the score of element with {@code value} in sorted set by {@code increment}.
                         * @param key must not be {#literal null}.
                         * @param increment
                         * @param value the value.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zincrby">Redis Documentation: ZINCRBY</a>
                         */
                        // @ts-ignore
                        zIncrBy(key: number /*byte*/[], increment: number /*double*/, value: number /*byte*/[]): number
                        /**
                         * Determine the index of element with {@code value} in a sorted set.
                         * @param key must not be {#literal null}.
                         * @param value the value. Must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zrank">Redis Documentation: ZRANK</a>
                         */
                        // @ts-ignore
                        zRank(key: number /*byte*/[], value: number /*byte*/[]): number
                        /**
                         * Determine the index of element with {@code value} in a sorted set when scored high to low.
                         * @param key must not be {#literal null}.
                         * @param value the value.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zrevrank">Redis Documentation: ZREVRANK</a>
                         */
                        // @ts-ignore
                        zRevRank(key: number /*byte*/[], value: number /*byte*/[]): number
                        /**
                         * Get elements between {@code start} and {@code end} from sorted set.
                         * @param key must not be {#literal null}.
                         * @param start
                         * @param end
                         * @return empty {#link Set} when key does not exists or no members in range. {@literal null} when used in pipeline /
                         *          transaction.
                         * @see <a href="https://redis.io/commands/zrange">Redis Documentation: ZRANGE</a>
                         */
                        // @ts-ignore
                        zRange(key: number /*byte*/[], start: number /*long*/, end: number /*long*/): Array<number /*byte*/[]>
                        /**
                         * Get set of {@link Tuple}s between {@code start} and {@code end} from sorted set.
                         * @param key must not be {#literal null}.
                         * @param start
                         * @param end
                         * @return empty {#link Set} when key does not exists or no members in range. {@literal null} when used in pipeline /
                         *          transaction.
                         * @see <a href="https://redis.io/commands/zrange">Redis Documentation: ZRANGE</a>
                         */
                        // @ts-ignore
                        zRangeWithScores(key: number /*byte*/[], start: number /*long*/, end: number /*long*/): Array<org.springframework.data.redis.connection.RedisZSetCommands.Tuple>
                        /**
                         * Get elements where score is between {@code min} and {@code max} from sorted set.
                         * @param key must not be {#literal null}.
                         * @param min
                         * @param max
                         * @return empty {#link Set} when key does not exists or no members in range. {@literal null} when used in pipeline /
                         *          transaction.
                         * @see <a href="https://redis.io/commands/zrangebyscore">Redis Documentation: ZRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        zRangeByScore(key: number /*byte*/[], min: number /*double*/, max: number /*double*/): Array<number /*byte*/[]>
                        /**
                         * Get set of {@link Tuple}s where score is between {@code Range#min} and {@code Range#max} from sorted set.
                         * @param key must not be {#literal null}.
                         * @param range must not be {#literal null}.
                         * @return empty {#link Set} when key does not exists or no members in range. {@literal null} when used in pipeline /
                         *          transaction.
                         * @since 1.6
                         * @see <a href="https://redis.io/commands/zrangebyscore">Redis Documentation: ZRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        zRangeByScoreWithScores(key: number /*byte*/[], range: org.springframework.data.redis.connection.RedisZSetCommands.Range): Array<org.springframework.data.redis.connection.RedisZSetCommands.Tuple>
                        /**
                         * Get set of {@link Tuple}s where score is between {@code min} and {@code max} from sorted set.
                         * @param key must not be {#literal null}.
                         * @param min
                         * @param max
                         * @return empty {#link Set} when key does not exists or no members in range. {@literal null} when used in pipeline /
                         *          transaction.
                         * @see <a href="https://redis.io/commands/zrangebyscore">Redis Documentation: ZRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        zRangeByScoreWithScores(key: number /*byte*/[], min: number /*double*/, max: number /*double*/): Array<org.springframework.data.redis.connection.RedisZSetCommands.Tuple>
                        /**
                         * Get elements in range from {@code start} to {@code end} where score is between {@code min} and {@code max} from
                         * sorted set.
                         * @param key must not be {#literal null}.
                         * @param min
                         * @param max
                         * @param offset
                         * @param count
                         * @return empty {#link Set} when key does not exists or no members in range. {@literal null} when used in pipeline /
                         *          transaction.
                         * @see <a href="https://redis.io/commands/zrangebyscore">Redis Documentation: ZRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        zRangeByScore(key: number /*byte*/[], min: number /*double*/, max: number /*double*/, offset: number /*long*/, count: number /*long*/): Array<number /*byte*/[]>
                        /**
                         * Get set of {@link Tuple}s in range from {@code start} to {@code end} where score is between {@code min} and
                         * {@code max} from sorted set.
                         * @param key must not be {#literal null}.
                         * @param min
                         * @param max
                         * @param offset
                         * @param count
                         * @return empty {#link Set} when key does not exists or no members in range. {@literal null} when used in pipeline /
                         *          transaction.
                         * @see <a href="https://redis.io/commands/zrangebyscore">Redis Documentation: ZRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        zRangeByScoreWithScores(key: number /*byte*/[], min: number /*double*/, max: number /*double*/, offset: number /*long*/, count: number /*long*/): Array<org.springframework.data.redis.connection.RedisZSetCommands.Tuple>
                        /**
                         * Get set of {@link Tuple}s in range from {@code Limit#offset} to {@code Limit#offset + Limit#count} where score is
                         * between {@code Range#min} and {@code Range#max} from sorted set.
                         * @param key must not be {#literal null}.
                         * @param range must not be {#literal null}.
                         * @param limit must not be {#literal null}.
                         * @return empty {#link Set} when key does not exists or no members in range. {@literal null} when used in pipeline /
                         *          transaction.
                         * @since 1.6
                         * @see <a href="https://redis.io/commands/zrangebyscore">Redis Documentation: ZRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        zRangeByScoreWithScores(key: number /*byte*/[], range: org.springframework.data.redis.connection.RedisZSetCommands.Range, limit: org.springframework.data.redis.connection.RedisZSetCommands.Limit): Array<org.springframework.data.redis.connection.RedisZSetCommands.Tuple>
                        /**
                         * Get elements in range from {@code start} to {@code end} from sorted set ordered from high to low.
                         * @param key must not be {#literal null}.
                         * @param start
                         * @param end
                         * @return empty {#link Set} when key does not exists or no members in range. {@literal null} when used in pipeline /
                         *          transaction.
                         * @see <a href="https://redis.io/commands/zrevrange">Redis Documentation: ZREVRANGE</a>
                         */
                        // @ts-ignore
                        zRevRange(key: number /*byte*/[], start: number /*long*/, end: number /*long*/): Array<number /*byte*/[]>
                        /**
                         * Get set of {@link Tuple}s in range from {@code start} to {@code end} from sorted set ordered from high to low.
                         * @param key must not be {#literal null}.
                         * @param start
                         * @param end
                         * @return empty {#link Set} when key does not exists or no members in range. {@literal null} when used in pipeline /
                         *          transaction.
                         * @see <a href="https://redis.io/commands/zrevrange">Redis Documentation: ZREVRANGE</a>
                         */
                        // @ts-ignore
                        zRevRangeWithScores(key: number /*byte*/[], start: number /*long*/, end: number /*long*/): Array<org.springframework.data.redis.connection.RedisZSetCommands.Tuple>
                        /**
                         * Get elements where score is between {@code min} and {@code max} from sorted set ordered from high to low.
                         * @param key must not be {#literal null}.
                         * @param min
                         * @param max
                         * @return empty {#link Set} when key does not exists or no members in range. {@literal null} when used in pipeline /
                         *          transaction.
                         * @see <a href="https://redis.io/commands/zrevrange">Redis Documentation: ZREVRANGE</a>
                         */
                        // @ts-ignore
                        zRevRangeByScore(key: number /*byte*/[], min: number /*double*/, max: number /*double*/): Array<number /*byte*/[]>
                        /**
                         * Get elements where score is between {@code Range#min} and {@code Range#max} from sorted set ordered from high to
                         * low.
                         * @param key must not be {#literal null}.
                         * @param range must not be {#literal null}.
                         * @return empty {#link Set} when key does not exists or no members in range. {@literal null} when used in pipeline /
                         *          transaction.
                         * @since 1.6
                         * @see <a href="https://redis.io/commands/zrevrangebyscore">Redis Documentation: ZREVRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        zRevRangeByScore(key: number /*byte*/[], range: org.springframework.data.redis.connection.RedisZSetCommands.Range): Array<number /*byte*/[]>
                        /**
                         * Get set of {@link Tuple} where score is between {@code min} and {@code max} from sorted set ordered from high to
                         * low.
                         * @param key must not be {#literal null}.
                         * @param min
                         * @param max
                         * @return empty {#link Set} when key does not exists or no members in range. {@literal null} when used in pipeline /
                         *          transaction.
                         * @see <a href="https://redis.io/commands/zrevrangebyscore">Redis Documentation: ZREVRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        zRevRangeByScoreWithScores(key: number /*byte*/[], min: number /*double*/, max: number /*double*/): Array<org.springframework.data.redis.connection.RedisZSetCommands.Tuple>
                        /**
                         * Get elements in range from {@code start} to {@code end} where score is between {@code min} and {@code max} from
                         * sorted set ordered high -> low.
                         * @param key must not be {#literal null}.
                         * @param min
                         * @param max
                         * @param offset
                         * @param count
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zrevrangebyscore">Redis Documentation: ZREVRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        zRevRangeByScore(key: number /*byte*/[], min: number /*double*/, max: number /*double*/, offset: number /*long*/, count: number /*long*/): Array<number /*byte*/[]>
                        /**
                         * Get elements in range from {@code Limit#offset} to {@code Limit#offset + Limit#count} where score is between
                         * {@code Range#min} and {@code Range#max} from sorted set ordered high -> low.
                         * @param key must not be {#literal null}.
                         * @param range must not be {#literal null}.
                         * @param limit must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 1.6
                         * @see <a href="https://redis.io/commands/zrevrangebyscore">Redis Documentation: ZREVRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        zRevRangeByScore(key: number /*byte*/[], range: org.springframework.data.redis.connection.RedisZSetCommands.Range, limit: org.springframework.data.redis.connection.RedisZSetCommands.Limit): Array<number /*byte*/[]>
                        /**
                         * Get set of {@link Tuple} in range from {@code start} to {@code end} where score is between {@code min} and
                         * {@code max} from sorted set ordered high -> low.
                         * @param key must not be {#literal null}.
                         * @param min
                         * @param max
                         * @param offset
                         * @param count
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zrevrangebyscore">Redis Documentation: ZREVRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        zRevRangeByScoreWithScores(key: number /*byte*/[], min: number /*double*/, max: number /*double*/, offset: number /*long*/, count: number /*long*/): Array<org.springframework.data.redis.connection.RedisZSetCommands.Tuple>
                        /**
                         * Get set of {@link Tuple} where score is between {@code Range#min} and {@code Range#max} from sorted set ordered
                         * from high to low.
                         * @param key must not be {#literal null}.
                         * @param range must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 1.6
                         * @see <a href="https://redis.io/commands/zrevrangebyscore">Redis Documentation: ZREVRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        zRevRangeByScoreWithScores(key: number /*byte*/[], range: org.springframework.data.redis.connection.RedisZSetCommands.Range): Array<org.springframework.data.redis.connection.RedisZSetCommands.Tuple>
                        /**
                         * Get set of {@link Tuple} in range from {@code Limit#offset} to {@code Limit#count} where score is between
                         * {@code Range#min} and {@code Range#max} from sorted set ordered high -> low.
                         * @param key must not be {#literal null}.
                         * @param range must not be {#literal null}.
                         * @param limit must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 1.6
                         * @see <a href="https://redis.io/commands/zrevrangebyscore">Redis Documentation: ZREVRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        zRevRangeByScoreWithScores(key: number /*byte*/[], range: org.springframework.data.redis.connection.RedisZSetCommands.Range, limit: org.springframework.data.redis.connection.RedisZSetCommands.Limit): Array<org.springframework.data.redis.connection.RedisZSetCommands.Tuple>
                        /**
                         * Count number of elements within sorted set with scores between {@code min} and {@code max}.
                         * @param key must not be {#literal null}.
                         * @param min
                         * @param max
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zcount">Redis Documentation: ZCOUNT</a>
                         */
                        // @ts-ignore
                        zCount(key: number /*byte*/[], min: number /*double*/, max: number /*double*/): number
                        /**
                         * Count number of elements within sorted set with scores between {@code Range#min} and {@code Range#max}.
                         * @param key must not be {#literal null}.
                         * @param range must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 1.6
                         * @see <a href="https://redis.io/commands/zcount">Redis Documentation: ZCOUNT</a>
                         */
                        // @ts-ignore
                        zCount(key: number /*byte*/[], range: org.springframework.data.redis.connection.RedisZSetCommands.Range): number
                        /**
                         * Get the size of sorted set with {@code key}.
                         * @param key must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zcard">Redis Documentation: ZCARD</a>
                         */
                        // @ts-ignore
                        zCard(key: number /*byte*/[]): number
                        /**
                         * Get the score of element with {@code value} from sorted set with key {@code key}.
                         * @param key must not be {#literal null}.
                         * @param value the value.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zscore">Redis Documentation: ZSCORE</a>
                         */
                        // @ts-ignore
                        zScore(key: number /*byte*/[], value: number /*byte*/[]): number
                        /**
                         * Remove elements in range between {@code start} and {@code end} from sorted set with {@code key}.
                         * @param key must not be {#literal null}.
                         * @param start
                         * @param end
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zremrangebyrank">Redis Documentation: ZREMRANGEBYRANK</a>
                         */
                        // @ts-ignore
                        zRemRange(key: number /*byte*/[], start: number /*long*/, end: number /*long*/): number
                        /**
                         * Remove elements with scores between {@code min} and {@code max} from sorted set with {@code key}.
                         * @param key must not be {#literal null}.
                         * @param min
                         * @param max
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zremrangebyscore">Redis Documentation: ZREMRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        zRemRangeByScore(key: number /*byte*/[], min: number /*double*/, max: number /*double*/): number
                        /**
                         * Remove elements with scores between {@code Range#min} and {@code Range#max} from sorted set with {@code key}.
                         * @param key must not be {#literal null}.
                         * @param range must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 1.6
                         * @see <a href="https://redis.io/commands/zremrangebyscore">Redis Documentation: ZREMRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        zRemRangeByScore(key: number /*byte*/[], range: org.springframework.data.redis.connection.RedisZSetCommands.Range): number
                        /**
                         * Union sorted {@code sets} and store result in destination {@code key}.
                         * @param destKey must not be {#literal null}.
                         * @param sets must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zunionstore">Redis Documentation: ZUNIONSTORE</a>
                         */
                        // @ts-ignore
                        zUnionStore(destKey: number /*byte*/[], ...sets: number /*byte*/[][]): number
                        /**
                         * Union sorted {@code sets} and store result in destination {@code key}.
                         * @param destKey must not be {#literal null}.
                         * @param aggregate must not be {#literal null}.
                         * @param weights must not be {#literal null}.
                         * @param sets must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zunionstore">Redis Documentation: ZUNIONSTORE</a>
                         */
                        // @ts-ignore
                        zUnionStore(destKey: number /*byte*/[], aggregate: org.springframework.data.redis.connection.RedisZSetCommands.Aggregate, weights: number /*int*/[], ...sets: number /*byte*/[][]): number
                        /**
                         * Union sorted {@code sets} and store result in destination {@code key}.
                         * @param destKey must not be {#literal null}.
                         * @param aggregate must not be {#literal null}.
                         * @param weights must not be {#literal null}.
                         * @param sets must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 2.1
                         * @see <a href="https://redis.io/commands/zunionstore">Redis Documentation: ZUNIONSTORE</a>
                         */
                        // @ts-ignore
                        zUnionStore(destKey: number /*byte*/[], aggregate: org.springframework.data.redis.connection.RedisZSetCommands.Aggregate, weights: org.springframework.data.redis.connection.RedisZSetCommands.Weights, ...sets: number /*byte*/[][]): number
                        /**
                         * Intersect sorted {@code sets} and store result in destination {@code key}.
                         * @param destKey must not be {#literal null}.
                         * @param sets must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/zinterstore">Redis Documentation: ZINTERSTORE</a>
                         */
                        // @ts-ignore
                        zInterStore(destKey: number /*byte*/[], ...sets: number /*byte*/[][]): number
                        /**
                         * Intersect sorted {@code sets} and store result in destination {@code key}.
                         * @param destKey must not be {#literal null}.
                         * @param aggregate must not be {#literal null}.
                         * @param weights
                         * @param sets must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/zinterstore">Redis Documentation: ZINTERSTORE</a>
                         */
                        // @ts-ignore
                        zInterStore(destKey: number /*byte*/[], aggregate: org.springframework.data.redis.connection.RedisZSetCommands.Aggregate, weights: number /*int*/[], ...sets: number /*byte*/[][]): number
                        /**
                         * Intersect sorted {@code sets} and store result in destination {@code key}.
                         * @param destKey must not be {#literal null}.
                         * @param aggregate must not be {#literal null}.
                         * @param weights must not be {#literal null}.
                         * @param sets must not be {#literal null}.
                         * @return 
                         * @since 2.1
                         * @see <a href="https://redis.io/commands/zinterstore">Redis Documentation: ZINTERSTORE</a>
                         */
                        // @ts-ignore
                        zInterStore(destKey: number /*byte*/[], aggregate: org.springframework.data.redis.connection.RedisZSetCommands.Aggregate, weights: org.springframework.data.redis.connection.RedisZSetCommands.Weights, ...sets: number /*byte*/[][]): number
                        /**
                         * Use a {@link Cursor} to iterate over elements in sorted set at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param options must not be {#literal null}.
                         * @return 
                         * @since 1.4
                         * @see <a href="https://redis.io/commands/zscan">Redis Documentation: ZSCAN</a>
                         */
                        // @ts-ignore
                        zScan(key: number /*byte*/[], options: org.springframework.data.redis.core.ScanOptions): org.springframework.data.redis.core.Cursor<org.springframework.data.redis.connection.RedisZSetCommands.Tuple>
                        /**
                         * Get elements where score is between {@code min} and {@code max} from sorted set.
                         * @param key must not be {#literal null}.
                         * @param min
                         * @param max
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 1.5
                         * @see <a href="https://redis.io/commands/zrangebyscore">Redis Documentation: ZRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        zRangeByScore(key: number /*byte*/[], min: java.lang.String | string, max: java.lang.String | string): Array<number /*byte*/[]>
                        /**
                         * Get elements where score is between {@code Range#min} and {@code Range#max} from sorted set.
                         * @param key must not be {#literal null}.
                         * @param range must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 1.6
                         * @see <a href="https://redis.io/commands/zrangebyscore">Redis Documentation: ZRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        zRangeByScore(key: number /*byte*/[], range: org.springframework.data.redis.connection.RedisZSetCommands.Range): Array<number /*byte*/[]>
                        /**
                         * Get elements in range from {@code start} to {@code end} where score is between {@code min} and {@code max} from
                         * sorted set.
                         * @param key must not be {#literal null}.
                         * @param min must not be {#literal null}.
                         * @param max must not be {#literal null}.
                         * @param offset
                         * @param count
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 1.5
                         * @see <a href="https://redis.io/commands/zrangebyscore">Redis Documentation: ZRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        zRangeByScore(key: number /*byte*/[], min: java.lang.String | string, max: java.lang.String | string, offset: number /*long*/, count: number /*long*/): Array<number /*byte*/[]>
                        /**
                         * Get elements in range from {@code Limit#count} to {@code Limit#offset} where score is between {@code Range#min} and
                         * {@code Range#max} from sorted set.
                         * @param key must not be {#literal null}.
                         * @param range must not be {#literal null}.
                         * @param limit must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 1.6
                         * @see <a href="https://redis.io/commands/zrangebyscore">Redis Documentation: ZRANGEBYSCORE</a>
                         */
                        // @ts-ignore
                        zRangeByScore(key: number /*byte*/[], range: org.springframework.data.redis.connection.RedisZSetCommands.Range, limit: org.springframework.data.redis.connection.RedisZSetCommands.Limit): Array<number /*byte*/[]>
                        /**
                         * Get all the elements in the sorted set at {@literal key} in lexicographical ordering.
                         * @param key must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 1.6
                         * @see <a href="https://redis.io/commands/zrangebylex">Redis Documentation: ZRANGEBYLEX</a>
                         */
                        // @ts-ignore
                        zRangeByLex(key: number /*byte*/[]): Array<number /*byte*/[]>
                        /**
                         * Get all the elements in {@link Range} from the sorted set at {@literal key} in lexicographical ordering.
                         * @param key must not be {#literal null}.
                         * @param range must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 1.6
                         * @see <a href="https://redis.io/commands/zrangebylex">Redis Documentation: ZRANGEBYLEX</a>
                         */
                        // @ts-ignore
                        zRangeByLex(key: number /*byte*/[], range: org.springframework.data.redis.connection.RedisZSetCommands.Range): Array<number /*byte*/[]>
                        /**
                         * Get all the elements in {@link Range} from the sorted set at {@literal key} in lexicographical ordering. Result is
                         * limited via {@link Limit}.
                         * @param key must not be {#literal null}.
                         * @param range must not be {#literal null}.
                         * @param limit must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @since 1.6
                         * @see <a href="https://redis.io/commands/zrangebylex">Redis Documentation: ZRANGEBYLEX</a>
                         */
                        // @ts-ignore
                        zRangeByLex(key: number /*byte*/[], range: org.springframework.data.redis.connection.RedisZSetCommands.Range, limit: org.springframework.data.redis.connection.RedisZSetCommands.Limit): Array<number /*byte*/[]>
                    }
                }
            }
        }
    }
}
