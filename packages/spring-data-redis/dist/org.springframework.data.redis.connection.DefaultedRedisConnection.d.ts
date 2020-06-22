declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * {@link DefaultedRedisConnection} provides method delegates to {@code Redis*Command} interfaces accessible via
                     * {@link RedisConnection}. This allows us to maintain backwards compatibility while moving the actual implementation
                     * and stay in sync with {@link ReactiveRedisConnection}. Going forward the {@link RedisCommands} extension is likely to
                     * be removed from {@link RedisConnection}.
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 2.0
                     */
                    // @ts-ignore
                    interface DefaultedRedisConnection extends org.springframework.data.redis.connection.RedisConnection {
                        /**
                         * @deprecated in favor of {#link RedisConnection#keyCommands()}.
                         */
                        // @ts-ignore
                        exists(key: number /*byte*/[]): java.lang.Boolean
                        /**
                         * @deprecated in favor of {#link RedisConnection#keyCommands()}.
                         */
                        // @ts-ignore
                        exists(...keys: number /*byte*/[][]): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#keyCommands()}.
                         */
                        // @ts-ignore
                        del(...keys: number /*byte*/[][]): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#keyCommands()}.
                         */
                        // @ts-ignore
                        unlink(...keys: number /*byte*/[][]): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#keyCommands()}.
                         */
                        // @ts-ignore
                        type(pattern: number /*byte*/[]): org.springframework.data.redis.connection.DataType
                        /**
                         * @deprecated in favor of {#link RedisConnection#keyCommands()}.
                         */
                        // @ts-ignore
                        touch(...keys: number /*byte*/[][]): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#keyCommands()}.
                         */
                        // @ts-ignore
                        keys(pattern: number /*byte*/[]): Array<number /*byte*/[]>
                        /**
                         * @deprecated in favor of {#link RedisConnection#keyCommands()}.
                         */
                        // @ts-ignore
                        scan(options: org.springframework.data.redis.core.ScanOptions): org.springframework.data.redis.core.Cursor<number /*byte*/[]>
                        /**
                         * @deprecated in favor of {#link RedisConnection#keyCommands()}.
                         */
                        // @ts-ignore
                        randomKey(): number /*byte*/[]
                        /**
                         * @deprecated in favor of {#link RedisConnection#keyCommands()}.
                         */
                        // @ts-ignore
                        rename(sourceKey: number /*byte*/[], targetKey: number /*byte*/[]): void
                        /**
                         * @deprecated in favor of {#link RedisConnection#keyCommands()}.
                         */
                        // @ts-ignore
                        renameNX(sourceKey: number /*byte*/[], targetKey: number /*byte*/[]): java.lang.Boolean
                        /**
                         * @deprecated in favor of {#link RedisConnection#keyCommands()}.
                         */
                        // @ts-ignore
                        expire(key: number /*byte*/[], seconds: number /*long*/): java.lang.Boolean
                        /**
                         * @deprecated in favor of {#link RedisConnection#keyCommands()}.
                         */
                        // @ts-ignore
                        persist(key: number /*byte*/[]): java.lang.Boolean
                        /**
                         * @deprecated in favor of {#link RedisConnection#keyCommands()}.
                         */
                        // @ts-ignore
                        move(key: number /*byte*/[], dbIndex: number /*int*/): java.lang.Boolean
                        /**
                         * @deprecated in favor of {#link RedisConnection#keyCommands()}.
                         */
                        // @ts-ignore
                        restore(key: number /*byte*/[], ttlInMillis: number /*long*/, serializedValue: number /*byte*/[], replace: boolean): void
                        /**
                         * @deprecated in favor of {#link RedisConnection#keyCommands()}.
                         */
                        // @ts-ignore
                        pTtl(key: number /*byte*/[]): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#keyCommands()}.
                         */
                        // @ts-ignore
                        pTtl(key: number /*byte*/[], timeUnit: java.util.concurrent.TimeUnit): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#keyCommands()}.
                         */
                        // @ts-ignore
                        pExpire(key: number /*byte*/[], millis: number /*long*/): java.lang.Boolean
                        /**
                         * @deprecated in favor of {#link RedisConnection#keyCommands()}.
                         */
                        // @ts-ignore
                        pExpireAt(key: number /*byte*/[], unixTimeInMillis: number /*long*/): java.lang.Boolean
                        /**
                         * @deprecated in favor of {#link RedisConnection#keyCommands()}.
                         */
                        // @ts-ignore
                        expireAt(key: number /*byte*/[], unixTime: number /*long*/): java.lang.Boolean
                        /**
                         * @deprecated in favor of {#link RedisConnection#keyCommands()}.
                         */
                        // @ts-ignore
                        ttl(key: number /*byte*/[]): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#keyCommands()}.
                         */
                        // @ts-ignore
                        ttl(key: number /*byte*/[], timeUnit: java.util.concurrent.TimeUnit): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#keyCommands()}.
                         */
                        // @ts-ignore
                        dump(key: number /*byte*/[]): number /*byte*/[]
                        /**
                         * @deprecated in favor of {#link RedisConnection#keyCommands()}.
                         */
                        // @ts-ignore
                        sort(key: number /*byte*/[], params: org.springframework.data.redis.connection.SortParameters): Array<number /*byte*/[]>
                        /**
                         * @deprecated in favor of {#link RedisConnection#keyCommands()}.
                         */
                        // @ts-ignore
                        sort(key: number /*byte*/[], params: org.springframework.data.redis.connection.SortParameters, sortKey: number /*byte*/[]): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#keyCommands()}.
                         */
                        // @ts-ignore
                        encodingOf(key: number /*byte*/[]): org.springframework.data.redis.connection.ValueEncoding
                        /**
                         * @deprecated in favor of {#link RedisConnection#keyCommands()}.
                         */
                        // @ts-ignore
                        idletime(key: number /*byte*/[]): java.time.Duration
                        /**
                         * @deprecated in favor of {#link RedisConnection#keyCommands()}.
                         */
                        // @ts-ignore
                        refcount(key: number /*byte*/[]): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#stringCommands()}}.
                         */
                        // @ts-ignore
                        get(key: number /*byte*/[]): number /*byte*/[]
                        /**
                         * @deprecated in favor of {#link RedisConnection#stringCommands()}}.
                         */
                        // @ts-ignore
                        getSet(key: number /*byte*/[], value: number /*byte*/[]): number /*byte*/[]
                        /**
                         * @deprecated in favor of {#link RedisConnection#stringCommands()}}.
                         */
                        // @ts-ignore
                        mGet(...keys: number /*byte*/[][]): Array<number /*byte*/[]>
                        /**
                         * @deprecated in favor of {#link RedisConnection#stringCommands()}}.
                         */
                        // @ts-ignore
                        set(key: number /*byte*/[], value: number /*byte*/[]): java.lang.Boolean
                        /**
                         * @deprecated in favor of {#link RedisConnection#stringCommands()}}.
                         */
                        // @ts-ignore
                        set(key: number /*byte*/[], value: number /*byte*/[], expiration: org.springframework.data.redis.core.types.Expiration, option: org.springframework.data.redis.connection.RedisStringCommands.SetOption): java.lang.Boolean
                        /**
                         * @deprecated in favor of {#link RedisConnection#stringCommands()}}.
                         */
                        // @ts-ignore
                        setNX(key: number /*byte*/[], value: number /*byte*/[]): java.lang.Boolean
                        /**
                         * @deprecated in favor of {#link RedisConnection#stringCommands()}}.
                         */
                        // @ts-ignore
                        setEx(key: number /*byte*/[], seconds: number /*long*/, value: number /*byte*/[]): java.lang.Boolean
                        /**
                         * @deprecated in favor of {#link RedisConnection#stringCommands()}}.
                         */
                        // @ts-ignore
                        pSetEx(key: number /*byte*/[], milliseconds: number /*long*/, value: number /*byte*/[]): java.lang.Boolean
                        /**
                         * @deprecated in favor of {#link RedisConnection#stringCommands()}}.
                         */
                        // @ts-ignore
                        mSet(tuple: java.util.Map<number /*byte*/[], number /*byte*/[]>): java.lang.Boolean
                        /**
                         * @deprecated in favor of {#link RedisConnection#stringCommands()}}.
                         */
                        // @ts-ignore
                        mSetNX(tuple: java.util.Map<number /*byte*/[], number /*byte*/[]>): java.lang.Boolean
                        /**
                         * @deprecated in favor of {#link RedisConnection#stringCommands()}}.
                         */
                        // @ts-ignore
                        incr(key: number /*byte*/[]): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#stringCommands()}}.
                         */
                        // @ts-ignore
                        incrBy(key: number /*byte*/[], value: number /*double*/): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#stringCommands()}}.
                         */
                        // @ts-ignore
                        incrBy(key: number /*byte*/[], value: number /*long*/): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#stringCommands()}}.
                         */
                        // @ts-ignore
                        decr(key: number /*byte*/[]): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#stringCommands()}}.
                         */
                        // @ts-ignore
                        decrBy(key: number /*byte*/[], value: number /*long*/): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#stringCommands()}}.
                         */
                        // @ts-ignore
                        append(key: number /*byte*/[], value: number /*byte*/[]): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#stringCommands()}}.
                         */
                        // @ts-ignore
                        getRange(key: number /*byte*/[], start: number /*long*/, end: number /*long*/): number /*byte*/[]
                        /**
                         * @deprecated in favor of {#link RedisConnection#stringCommands()}}.
                         */
                        // @ts-ignore
                        setRange(key: number /*byte*/[], value: number /*byte*/[], offset: number /*long*/): void
                        /**
                         * @deprecated in favor of {#link RedisConnection#stringCommands()}}.
                         */
                        // @ts-ignore
                        getBit(key: number /*byte*/[], offset: number /*long*/): java.lang.Boolean
                        /**
                         * @deprecated in favor of {#link RedisConnection#stringCommands()}}.
                         */
                        // @ts-ignore
                        setBit(key: number /*byte*/[], offset: number /*long*/, value: boolean): java.lang.Boolean
                        /**
                         * @deprecated in favor of {#link RedisConnection#stringCommands()}}.
                         */
                        // @ts-ignore
                        bitCount(key: number /*byte*/[]): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#stringCommands()}}.
                         */
                        // @ts-ignore
                        bitCount(key: number /*byte*/[], start: number /*long*/, end: number /*long*/): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#stringCommands()}}.
                         */
                        // @ts-ignore
                        bitField(key: number /*byte*/[], subCommands: org.springframework.data.redis.connection.BitFieldSubCommands): Array<java.lang.Long | number>
                        /**
                         * @deprecated in favor of {#link RedisConnection#stringCommands()}}.
                         */
                        // @ts-ignore
                        bitOp(op: org.springframework.data.redis.connection.RedisStringCommands.BitOperation, destination: number /*byte*/[], ...keys: number /*byte*/[][]): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#stringCommands()}}.
                         */
                        // @ts-ignore
                        bitPos(key: number /*byte*/[], bit: boolean, range: object): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#stringCommands()}}.
                         */
                        // @ts-ignore
                        strLen(key: number /*byte*/[]): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#listCommands()}}.
                         */
                        // @ts-ignore
                        rPush(key: number /*byte*/[], ...values: number /*byte*/[][]): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#listCommands()}}.
                         */
                        // @ts-ignore
                        lPush(key: number /*byte*/[], ...values: number /*byte*/[][]): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#listCommands()}}.
                         */
                        // @ts-ignore
                        rPushX(key: number /*byte*/[], value: number /*byte*/[]): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#listCommands()}}.
                         */
                        // @ts-ignore
                        lPushX(key: number /*byte*/[], value: number /*byte*/[]): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#listCommands()}}.
                         */
                        // @ts-ignore
                        lLen(key: number /*byte*/[]): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#listCommands()}}.
                         */
                        // @ts-ignore
                        lRange(key: number /*byte*/[], start: number /*long*/, end: number /*long*/): Array<number /*byte*/[]>
                        /**
                         * @deprecated in favor of {#link RedisConnection#listCommands()}}.
                         */
                        // @ts-ignore
                        lTrim(key: number /*byte*/[], start: number /*long*/, end: number /*long*/): void
                        /**
                         * @deprecated in favor of {#link RedisConnection#listCommands()}}.
                         */
                        // @ts-ignore
                        lIndex(key: number /*byte*/[], index: number /*long*/): number /*byte*/[]
                        /**
                         * @deprecated in favor of {#link RedisConnection#listCommands()}}.
                         */
                        // @ts-ignore
                        lInsert(key: number /*byte*/[], where: org.springframework.data.redis.connection.RedisListCommands.Position, pivot: number /*byte*/[], value: number /*byte*/[]): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#listCommands()}}.
                         */
                        // @ts-ignore
                        lSet(key: number /*byte*/[], index: number /*long*/, value: number /*byte*/[]): void
                        /**
                         * @deprecated in favor of {#link RedisConnection#listCommands()}}.
                         */
                        // @ts-ignore
                        lRem(key: number /*byte*/[], count: number /*long*/, value: number /*byte*/[]): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#listCommands()}}.
                         */
                        // @ts-ignore
                        lPop(key: number /*byte*/[]): number /*byte*/[]
                        /**
                         * @deprecated in favor of {#link RedisConnection#listCommands()}}.
                         */
                        // @ts-ignore
                        rPop(key: number /*byte*/[]): number /*byte*/[]
                        /**
                         * @deprecated in favor of {#link RedisConnection#listCommands()}}.
                         */
                        // @ts-ignore
                        bLPop(timeout: number /*int*/, ...keys: number /*byte*/[][]): Array<number /*byte*/[]>
                        /**
                         * @deprecated in favor of {#link RedisConnection#listCommands()}}.
                         */
                        // @ts-ignore
                        bRPop(timeout: number /*int*/, ...keys: number /*byte*/[][]): Array<number /*byte*/[]>
                        /**
                         * @deprecated in favor of {#link RedisConnection#listCommands()}}.
                         */
                        // @ts-ignore
                        rPopLPush(srcKey: number /*byte*/[], dstKey: number /*byte*/[]): number /*byte*/[]
                        /**
                         * @deprecated in favor of {#link RedisConnection#listCommands()}}.
                         */
                        // @ts-ignore
                        bRPopLPush(timeout: number /*int*/, srcKey: number /*byte*/[], dstKey: number /*byte*/[]): number /*byte*/[]
                        /**
                         * @deprecated in favor of {#link RedisConnection#setCommands()}}.
                         */
                        // @ts-ignore
                        sAdd(key: number /*byte*/[], ...values: number /*byte*/[][]): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#setCommands()}}.
                         */
                        // @ts-ignore
                        sCard(key: number /*byte*/[]): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#setCommands()}}.
                         */
                        // @ts-ignore
                        sDiff(...keys: number /*byte*/[][]): Array<number /*byte*/[]>
                        /**
                         * @deprecated in favor of {#link RedisConnection#setCommands()}}.
                         */
                        // @ts-ignore
                        sDiffStore(destKey: number /*byte*/[], ...keys: number /*byte*/[][]): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#setCommands()}}.
                         */
                        // @ts-ignore
                        sInter(...keys: number /*byte*/[][]): Array<number /*byte*/[]>
                        /**
                         * @deprecated in favor of {#link RedisConnection#setCommands()}}.
                         */
                        // @ts-ignore
                        sInterStore(destKey: number /*byte*/[], ...keys: number /*byte*/[][]): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#setCommands()}}.
                         */
                        // @ts-ignore
                        sIsMember(key: number /*byte*/[], value: number /*byte*/[]): java.lang.Boolean
                        /**
                         * @deprecated in favor of {#link RedisConnection#setCommands()}}.
                         */
                        // @ts-ignore
                        sMembers(key: number /*byte*/[]): Array<number /*byte*/[]>
                        /**
                         * @deprecated in favor of {#link RedisConnection#setCommands()}}.
                         */
                        // @ts-ignore
                        sMove(srcKey: number /*byte*/[], destKey: number /*byte*/[], value: number /*byte*/[]): java.lang.Boolean
                        /**
                         * @deprecated in favor of {#link RedisConnection#setCommands()}}.
                         */
                        // @ts-ignore
                        sPop(key: number /*byte*/[]): number /*byte*/[]
                        /**
                         * @deprecated in favor of {#link RedisConnection#setCommands()}}.
                         */
                        // @ts-ignore
                        sPop(key: number /*byte*/[], count: number /*long*/): Array<number /*byte*/[]>
                        /**
                         * @deprecated in favor of {#link RedisConnection#setCommands()}}.
                         */
                        // @ts-ignore
                        sRandMember(key: number /*byte*/[]): number /*byte*/[]
                        /**
                         * @deprecated in favor of {#link RedisConnection#setCommands()}}.
                         */
                        // @ts-ignore
                        sRandMember(key: number /*byte*/[], count: number /*long*/): Array<number /*byte*/[]>
                        /**
                         * @deprecated in favor of {#link RedisConnection#setCommands()}}.
                         */
                        // @ts-ignore
                        sRem(key: number /*byte*/[], ...values: number /*byte*/[][]): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#setCommands()}}.
                         */
                        // @ts-ignore
                        sUnion(...keys: number /*byte*/[][]): Array<number /*byte*/[]>
                        /**
                         * @deprecated in favor of {#link RedisConnection#setCommands()}}.
                         */
                        // @ts-ignore
                        sUnionStore(destKey: number /*byte*/[], ...keys: number /*byte*/[][]): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#setCommands()}}.
                         */
                        // @ts-ignore
                        sScan(key: number /*byte*/[], options: org.springframework.data.redis.core.ScanOptions): org.springframework.data.redis.core.Cursor<number /*byte*/[]>
                        /**
                         * @deprecated in favor of {#link RedisConnection#zSetCommands()}}.
                         */
                        // @ts-ignore
                        zAdd(key: number /*byte*/[], score: number /*double*/, value: number /*byte*/[]): java.lang.Boolean
                        /**
                         * @deprecated in favor of {#link RedisConnection#zSetCommands()}}.
                         */
                        // @ts-ignore
                        zAdd(key: number /*byte*/[], tuples: java.util.Set<org.springframework.data.redis.connection.RedisZSetCommands.Tuple> | Array<org.springframework.data.redis.connection.RedisZSetCommands.Tuple>): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#zSetCommands()}}.
                         */
                        // @ts-ignore
                        zCard(key: number /*byte*/[]): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#zSetCommands()}}.
                         */
                        // @ts-ignore
                        zCount(key: number /*byte*/[], min: number /*double*/, max: number /*double*/): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#zSetCommands()}}.
                         */
                        // @ts-ignore
                        zCount(key: number /*byte*/[], range: org.springframework.data.redis.connection.RedisZSetCommands.Range): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#zSetCommands()}}.
                         */
                        // @ts-ignore
                        zIncrBy(key: number /*byte*/[], increment: number /*double*/, value: number /*byte*/[]): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#zSetCommands()}}.
                         */
                        // @ts-ignore
                        zInterStore(destKey: number /*byte*/[], aggregate: org.springframework.data.redis.connection.RedisZSetCommands.Aggregate, weights: number /*int*/[], ...sets: number /*byte*/[][]): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#zSetCommands()}}.
                         */
                        // @ts-ignore
                        zInterStore(destKey: number /*byte*/[], aggregate: org.springframework.data.redis.connection.RedisZSetCommands.Aggregate, weights: org.springframework.data.redis.connection.RedisZSetCommands.Weights, ...sets: number /*byte*/[][]): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#zSetCommands()}}.
                         */
                        // @ts-ignore
                        zInterStore(destKey: number /*byte*/[], ...sets: number /*byte*/[][]): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#zSetCommands()}}.
                         */
                        // @ts-ignore
                        zRange(key: number /*byte*/[], start: number /*long*/, end: number /*long*/): Array<number /*byte*/[]>
                        /**
                         * @deprecated in favor of {#link RedisConnection#zSetCommands()}}.
                         */
                        // @ts-ignore
                        zRangeWithScores(key: number /*byte*/[], start: number /*long*/, end: number /*long*/): Array<org.springframework.data.redis.connection.RedisZSetCommands.Tuple>
                        /**
                         * @deprecated in favor of {#link RedisConnection#zSetCommands()}}.
                         */
                        // @ts-ignore
                        zRangeByLex(key: number /*byte*/[], range: org.springframework.data.redis.connection.RedisZSetCommands.Range, limit: org.springframework.data.redis.connection.RedisZSetCommands.Limit): Array<number /*byte*/[]>
                        /**
                         * @deprecated in favor of {#link RedisConnection#zSetCommands()}}.
                         */
                        // @ts-ignore
                        zRangeByScore(key: number /*byte*/[], range: org.springframework.data.redis.connection.RedisZSetCommands.Range, limit: org.springframework.data.redis.connection.RedisZSetCommands.Limit): Array<number /*byte*/[]>
                        /**
                         * @deprecated in favor of {#link RedisConnection#zSetCommands()}}.
                         */
                        // @ts-ignore
                        zRangeByScoreWithScores(key: number /*byte*/[], range: org.springframework.data.redis.connection.RedisZSetCommands.Range, limit: org.springframework.data.redis.connection.RedisZSetCommands.Limit): Array<org.springframework.data.redis.connection.RedisZSetCommands.Tuple>
                        /**
                         * @deprecated in favor of {#link RedisConnection#zSetCommands()}}.
                         */
                        // @ts-ignore
                        zRevRangeWithScores(key: number /*byte*/[], start: number /*long*/, end: number /*long*/): Array<org.springframework.data.redis.connection.RedisZSetCommands.Tuple>
                        /**
                         * @deprecated in favor of {#link RedisConnection#zSetCommands()}}.
                         */
                        // @ts-ignore
                        zRevRangeByScore(key: number /*byte*/[], range: org.springframework.data.redis.connection.RedisZSetCommands.Range, limit: org.springframework.data.redis.connection.RedisZSetCommands.Limit): Array<number /*byte*/[]>
                        /**
                         * @deprecated in favor of {#link RedisConnection#zSetCommands()}}.
                         */
                        // @ts-ignore
                        zRevRangeByScoreWithScores(key: number /*byte*/[], range: org.springframework.data.redis.connection.RedisZSetCommands.Range, limit: org.springframework.data.redis.connection.RedisZSetCommands.Limit): Array<org.springframework.data.redis.connection.RedisZSetCommands.Tuple>
                        /**
                         * @deprecated in favor of {#link RedisConnection#zSetCommands()}}.
                         */
                        // @ts-ignore
                        zRank(key: number /*byte*/[], value: number /*byte*/[]): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#zSetCommands()}}.
                         */
                        // @ts-ignore
                        zRem(key: number /*byte*/[], ...values: number /*byte*/[][]): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#zSetCommands()}}.
                         */
                        // @ts-ignore
                        zRemRange(key: number /*byte*/[], start: number /*long*/, end: number /*long*/): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#zSetCommands()}}.
                         */
                        // @ts-ignore
                        zRemRangeByScore(key: number /*byte*/[], range: org.springframework.data.redis.connection.RedisZSetCommands.Range): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#zSetCommands()}}.
                         */
                        // @ts-ignore
                        zRemRangeByScore(key: number /*byte*/[], min: number /*double*/, max: number /*double*/): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#zSetCommands()}}.
                         */
                        // @ts-ignore
                        zRevRange(key: number /*byte*/[], start: number /*long*/, end: number /*long*/): Array<number /*byte*/[]>
                        /**
                         * @deprecated in favor of {#link RedisConnection#zSetCommands()}}.
                         */
                        // @ts-ignore
                        zRevRank(key: number /*byte*/[], value: number /*byte*/[]): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#zSetCommands()}}.
                         */
                        // @ts-ignore
                        zScore(key: number /*byte*/[], value: number /*byte*/[]): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#zSetCommands()}}.
                         */
                        // @ts-ignore
                        zUnionStore(destKey: number /*byte*/[], aggregate: org.springframework.data.redis.connection.RedisZSetCommands.Aggregate, weights: number /*int*/[], ...sets: number /*byte*/[][]): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#zSetCommands()}}.
                         */
                        // @ts-ignore
                        zUnionStore(destKey: number /*byte*/[], aggregate: org.springframework.data.redis.connection.RedisZSetCommands.Aggregate, weights: org.springframework.data.redis.connection.RedisZSetCommands.Weights, ...sets: number /*byte*/[][]): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#zSetCommands()}}.
                         */
                        // @ts-ignore
                        zUnionStore(destKey: number /*byte*/[], ...sets: number /*byte*/[][]): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#zSetCommands()}}.
                         */
                        // @ts-ignore
                        zScan(key: number /*byte*/[], options: org.springframework.data.redis.core.ScanOptions): org.springframework.data.redis.core.Cursor<org.springframework.data.redis.connection.RedisZSetCommands.Tuple>
                        /**
                         * @deprecated in favor of {#link RedisConnection#zSetCommands()}}.
                         */
                        // @ts-ignore
                        zRangeByScore(key: number /*byte*/[], min: java.lang.String | string, max: java.lang.String | string): Array<number /*byte*/[]>
                        /**
                         * @deprecated in favor of {#link RedisConnection#zSetCommands()}}.
                         */
                        // @ts-ignore
                        zRangeByScore(key: number /*byte*/[], min: java.lang.String | string, max: java.lang.String | string, offset: number /*long*/, count: number /*long*/): Array<number /*byte*/[]>
                        /**
                         * @deprecated in favor of {#link RedisConnection#hashCommands()}}.
                         */
                        // @ts-ignore
                        hSet(key: number /*byte*/[], field: number /*byte*/[], value: number /*byte*/[]): java.lang.Boolean
                        /**
                         * @deprecated in favor of {#link RedisConnection#hashCommands()}}.
                         */
                        // @ts-ignore
                        hSetNX(key: number /*byte*/[], field: number /*byte*/[], value: number /*byte*/[]): java.lang.Boolean
                        /**
                         * @deprecated in favor of {#link RedisConnection#hashCommands()}}.
                         */
                        // @ts-ignore
                        hDel(key: number /*byte*/[], ...fields: number /*byte*/[][]): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#hashCommands()}}.
                         */
                        // @ts-ignore
                        hExists(key: number /*byte*/[], field: number /*byte*/[]): java.lang.Boolean
                        /**
                         * @deprecated in favor of {#link RedisConnection#hashCommands()}}.
                         */
                        // @ts-ignore
                        hGet(key: number /*byte*/[], field: number /*byte*/[]): number /*byte*/[]
                        /**
                         * @deprecated in favor of {#link RedisConnection#hashCommands()}}.
                         */
                        // @ts-ignore
                        hGetAll(key: number /*byte*/[]): java.util.Map<number /*byte*/[], number /*byte*/[]>
                        /**
                         * @deprecated in favor of {#link RedisConnection#hashCommands()}}.
                         */
                        // @ts-ignore
                        hIncrBy(key: number /*byte*/[], field: number /*byte*/[], delta: number /*double*/): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#hashCommands()}}.
                         */
                        // @ts-ignore
                        hIncrBy(key: number /*byte*/[], field: number /*byte*/[], delta: number /*long*/): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#hashCommands()}}.
                         */
                        // @ts-ignore
                        hKeys(key: number /*byte*/[]): Array<number /*byte*/[]>
                        // @ts-ignore
                        hLen(key: number /*byte*/[]): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#hashCommands()}}.
                         */
                        // @ts-ignore
                        hMGet(key: number /*byte*/[], ...fields: number /*byte*/[][]): Array<number /*byte*/[]>
                        /**
                         * @deprecated in favor of {#link RedisConnection#hashCommands()}}.
                         */
                        // @ts-ignore
                        hMSet(key: number /*byte*/[], hashes: java.util.Map<number /*byte*/[], number /*byte*/[]>): void
                        /**
                         * @deprecated in favor of {#link RedisConnection#hashCommands()}}.
                         */
                        // @ts-ignore
                        hVals(key: number /*byte*/[]): Array<number /*byte*/[]>
                        /**
                         * @deprecated in favor of {#link RedisConnection#hashCommands()}}.
                         */
                        // @ts-ignore
                        hScan(key: number /*byte*/[], options: org.springframework.data.redis.core.ScanOptions): org.springframework.data.redis.core.Cursor<java.util.Map.Entry<number /*byte*/[], number /*byte*/[]>>
                        /**
                         * @deprecated in favor of {#link RedisConnection#hashCommands()}.
                         */
                        // @ts-ignore
                        hStrLen(key: number /*byte*/[], field: number /*byte*/[]): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#geoCommands()}}.
                         */
                        // @ts-ignore
                        geoAdd(key: number /*byte*/[], point: Point, member: number /*byte*/[]): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#geoCommands()}}.
                         */
                        // @ts-ignore
                        geoAdd(key: number /*byte*/[], memberCoordinateMap: java.util.Map<number /*byte*/[], Point>): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#geoCommands()}}.
                         */
                        // @ts-ignore
                        geoAdd(key: number /*byte*/[], locations: java.lang.Iterable<org.springframework.data.redis.connection.RedisGeoCommands.GeoLocation<number /*byte*/[]>>): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#geoCommands()}}.
                         */
                        // @ts-ignore
                        geoDist(key: number /*byte*/[], member1: number /*byte*/[], member2: number /*byte*/[]): Distance
                        /**
                         * @deprecated in favor of {#link RedisConnection#geoCommands()}}.
                         */
                        // @ts-ignore
                        geoDist(key: number /*byte*/[], member1: number /*byte*/[], member2: number /*byte*/[], metric: Metric): Distance
                        /**
                         * @deprecated in favor of {#link RedisConnection#geoCommands()}}.
                         */
                        // @ts-ignore
                        geoHash(key: number /*byte*/[], ...members: number /*byte*/[][]): Array<java.lang.String | string>
                        /**
                         * @deprecated in favor of {#link RedisConnection#geoCommands()}}.
                         */
                        // @ts-ignore
                        geoPos(key: number /*byte*/[], ...members: number /*byte*/[][]): Array<Point>
                        /**
                         * @deprecated in favor of {#link RedisConnection#geoCommands()}}.
                         */
                        // @ts-ignore
                        geoRadius(key: number /*byte*/[], within: Circle): object
                        /**
                         * @deprecated in favor of {#link RedisConnection#geoCommands()}}.
                         */
                        // @ts-ignore
                        geoRadius(key: number /*byte*/[], within: Circle, args: org.springframework.data.redis.connection.RedisGeoCommands.GeoRadiusCommandArgs): object
                        /**
                         * @deprecated in favor of {#link RedisConnection#geoCommands()}}.
                         */
                        // @ts-ignore
                        geoRadiusByMember(key: number /*byte*/[], member: number /*byte*/[], radius: Distance): object
                        /**
                         * @deprecated in favor of {#link RedisConnection#geoCommands()}}.
                         */
                        // @ts-ignore
                        geoRadiusByMember(key: number /*byte*/[], member: number /*byte*/[], radius: Distance, args: org.springframework.data.redis.connection.RedisGeoCommands.GeoRadiusCommandArgs): object
                        /**
                         * @deprecated in favor of {#link RedisConnection#geoCommands()}}.
                         */
                        // @ts-ignore
                        geoRemove(key: number /*byte*/[], ...members: number /*byte*/[][]): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#hyperLogLogCommands()}.
                         */
                        // @ts-ignore
                        pfAdd(key: number /*byte*/[], ...values: number /*byte*/[][]): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#hyperLogLogCommands()}.
                         */
                        // @ts-ignore
                        pfCount(...keys: number /*byte*/[][]): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#hyperLogLogCommands()}.
                         */
                        // @ts-ignore
                        pfMerge(destinationKey: number /*byte*/[], ...sourceKeys: number /*byte*/[][]): void
                        /**
                         * @deprecated in favor of {#link RedisConnection#serverCommands()}.
                         */
                        // @ts-ignore
                        bgWriteAof(): void
                        /**
                         * @deprecated in favor of {#link RedisConnection#serverCommands()}.
                         */
                        // @ts-ignore
                        bgReWriteAof(): void
                        /**
                         * @deprecated in favor of {#link RedisConnection#serverCommands()}.
                         */
                        // @ts-ignore
                        bgSave(): void
                        /**
                         * @deprecated in favor of {#link RedisConnection#serverCommands()}.
                         */
                        // @ts-ignore
                        lastSave(): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#serverCommands()}.
                         */
                        // @ts-ignore
                        save(): void
                        /**
                         * @deprecated in favor of {#link RedisConnection#serverCommands()}.
                         */
                        // @ts-ignore
                        dbSize(): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#serverCommands()}.
                         */
                        // @ts-ignore
                        flushDb(): void
                        /**
                         * @deprecated in favor of {#link RedisConnection#serverCommands()}.
                         */
                        // @ts-ignore
                        flushAll(): void
                        /**
                         * @deprecated in favor of {#link RedisConnection#serverCommands()}.
                         */
                        // @ts-ignore
                        info(): java.util.Properties
                        /**
                         * @deprecated in favor of {#link RedisConnection#serverCommands()}.
                         */
                        // @ts-ignore
                        info(section: java.lang.String | string): java.util.Properties
                        /**
                         * @deprecated in favor of {#link RedisConnection#serverCommands()}.
                         */
                        // @ts-ignore
                        shutdown(): void
                        /**
                         * @deprecated in favor of {#link RedisConnection#serverCommands()}.
                         */
                        // @ts-ignore
                        shutdown(option: org.springframework.data.redis.connection.RedisServerCommands.ShutdownOption): void
                        /**
                         * @deprecated in favor of {#link RedisConnection#serverCommands()}.
                         */
                        // @ts-ignore
                        getConfig(pattern: java.lang.String | string): java.util.Properties
                        /**
                         * @deprecated in favor of {#link RedisConnection#serverCommands()}.
                         */
                        // @ts-ignore
                        setConfig(param: java.lang.String | string, value: java.lang.String | string): void
                        /**
                         * @deprecated in favor of {#link RedisConnection#serverCommands()}.
                         */
                        // @ts-ignore
                        resetConfigStats(): void
                        /**
                         * @deprecated in favor of {#link RedisConnection#serverCommands()}.
                         */
                        // @ts-ignore
                        time(): number
                        /**
                         * @deprecated in favor of {#link RedisConnection#serverCommands()}.
                         */
                        // @ts-ignore
                        killClient(host: java.lang.String | string, port: number /*int*/): void
                        /**
                         * @deprecated in favor of {#link RedisConnection#serverCommands()}.
                         */
                        // @ts-ignore
                        setClientName(name: number /*byte*/[]): void
                        /**
                         * @deprecated in favor of {#link RedisConnection#serverCommands()}.
                         */
                        // @ts-ignore
                        getClientName(): string
                        /**
                         * @deprecated in favor of {#link RedisConnection#serverCommands()}.
                         */
                        // @ts-ignore
                        getClientList(): Array<org.springframework.data.redis.core.types.RedisClientInfo>
                        /**
                         * @deprecated in favor of {#link RedisConnection#serverCommands()}.
                         */
                        // @ts-ignore
                        slaveOf(host: java.lang.String | string, port: number /*int*/): void
                        /**
                         * @deprecated in favor of {#link RedisConnection#serverCommands()}.
                         */
                        // @ts-ignore
                        slaveOfNoOne(): void
                        /**
                         * @deprecated in favor of {#link RedisConnection#serverCommands()}.
                         */
                        // @ts-ignore
                        migrate(key: number /*byte*/[], target: org.springframework.data.redis.connection.RedisNode, dbIndex: number /*int*/, option: org.springframework.data.redis.connection.RedisServerCommands.MigrateOption): void
                        /**
                         * @deprecated in favor of {#link RedisConnection#serverCommands()}.
                         */
                        // @ts-ignore
                        migrate(key: number /*byte*/[], target: org.springframework.data.redis.connection.RedisNode, dbIndex: number /*int*/, option: org.springframework.data.redis.connection.RedisServerCommands.MigrateOption, timeout: number /*long*/): void
                        /**
                         * @deprecated in favor of {#link RedisConnection#scriptingCommands()}.
                         */
                        // @ts-ignore
                        scriptFlush(): void
                        /**
                         * @deprecated in favor of {#link RedisConnection#scriptingCommands()}.
                         */
                        // @ts-ignore
                        scriptKill(): void
                        /**
                         * @deprecated in favor of {#link RedisConnection#scriptingCommands()}.
                         */
                        // @ts-ignore
                        scriptLoad(script: number /*byte*/[]): string
                        /**
                         * @deprecated in favor of {#link RedisConnection#scriptingCommands()}.
                         */
                        // @ts-ignore
                        scriptExists(...scriptShas: java.lang.String[] | string[]): Array<java.lang.Boolean>
                        /**
                         * @deprecated in favor of {#link RedisConnection#scriptingCommands()}.
                         */
                        // @ts-ignore
                        eval<T>(script: number /*byte*/[], returnType: org.springframework.data.redis.connection.ReturnType, numKeys: number /*int*/, ...keysAndArgs: number /*byte*/[][]): T
                        /**
                         * @deprecated in favor of {#link RedisConnection#scriptingCommands()}.
                         */
                        // @ts-ignore
                        evalSha<T>(scriptSha: java.lang.String | string, returnType: org.springframework.data.redis.connection.ReturnType, numKeys: number /*int*/, ...keysAndArgs: number /*byte*/[][]): T
                        /**
                         * @deprecated in favor of {#link RedisConnection#scriptingCommands()}.
                         */
                        // @ts-ignore
                        evalSha<T>(scriptSha: number /*byte*/[], returnType: org.springframework.data.redis.connection.ReturnType, numKeys: number /*int*/, ...keysAndArgs: number /*byte*/[][]): T
                    }
                }
            }
        }
    }
}
