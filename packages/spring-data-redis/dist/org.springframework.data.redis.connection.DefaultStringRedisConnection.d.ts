declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Default implementation of {@link StringRedisConnection}.
                     * @author Costin Leau
                     * @author Jennifer Hickey
                     * @author Christoph Strobl
                     * @author Thomas Darimont
                     * @author Mark Paluch
                     * @author Ninad Divadkar
                     */
                    // @ts-ignore
                    class DefaultStringRedisConnection extends java.lang.Object implements org.springframework.data.redis.connection.StringRedisConnection, org.springframework.data.redis.connection.DecoratedRedisConnection {
                        /**
                         * Constructs a new <code>DefaultStringRedisConnection</code> instance. Uses {@link StringRedisSerializer} as
                         * underlying serializer.
                         * @param connection Redis connection
                         */
                        // @ts-ignore
                        constructor(connection: org.springframework.data.redis.connection.RedisConnection)
                        /**
                         * Constructs a new <code>DefaultStringRedisConnection</code> instance.
                         * @param connection Redis connection
                         * @param serializer String serializer
                         */
                        // @ts-ignore
                        constructor(connection: org.springframework.data.redis.connection.RedisConnection, serializer: org.springframework.data.redis.serializer.RedisSerializer<java.lang.String | string>)
                        // @ts-ignore
                        public append(key: number /*byte*/[], value: number /*byte*/[]): number
                        // @ts-ignore
                        public bgSave(): void
                        // @ts-ignore
                        public bgReWriteAof(): void
                        /**
                         * @deprecated As of 1.3, use {#link #bgReWriteAof}.
                         */
                        // @ts-ignore
                        public bgWriteAof(): void
                        // @ts-ignore
                        public bLPop(timeout: number /*int*/, ...keys: number /*byte*/[][]): Array<number /*byte*/[]>
                        // @ts-ignore
                        public bRPop(timeout: number /*int*/, ...keys: number /*byte*/[][]): Array<number /*byte*/[]>
                        // @ts-ignore
                        public bRPopLPush(timeout: number /*int*/, srcKey: number /*byte*/[], dstKey: number /*byte*/[]): number /*byte*/[]
                        // @ts-ignore
                        public close(): void
                        // @ts-ignore
                        public dbSize(): number
                        // @ts-ignore
                        public decr(key: number /*byte*/[]): number
                        // @ts-ignore
                        public decrBy(key: number /*byte*/[], value: number /*long*/): number
                        // @ts-ignore
                        public del(...keys: number /*byte*/[][]): number
                        // @ts-ignore
                        public unlink(...keys: number /*byte*/[][]): number
                        // @ts-ignore
                        public discard(): void
                        // @ts-ignore
                        public echo(message: number /*byte*/[]): number /*byte*/[]
                        // @ts-ignore
                        public exec(): Array<java.lang.Object | any>
                        // @ts-ignore
                        public exists(key: number /*byte*/[]): java.lang.Boolean
                        // @ts-ignore
                        public exists(...keys: java.lang.String[] | string[]): number
                        // @ts-ignore
                        public exists(...keys: number /*byte*/[][]): number
                        // @ts-ignore
                        public expire(key: number /*byte*/[], seconds: number /*long*/): java.lang.Boolean
                        // @ts-ignore
                        public expireAt(key: number /*byte*/[], unixTime: number /*long*/): java.lang.Boolean
                        // @ts-ignore
                        public flushAll(): void
                        // @ts-ignore
                        public flushDb(): void
                        // @ts-ignore
                        public get(key: number /*byte*/[]): number /*byte*/[]
                        // @ts-ignore
                        public getBit(key: number /*byte*/[], offset: number /*long*/): java.lang.Boolean
                        // @ts-ignore
                        public getConfig(pattern: java.lang.String | string): java.util.Properties
                        // @ts-ignore
                        public getNativeConnection(): any
                        // @ts-ignore
                        public getRange(key: number /*byte*/[], start: number /*long*/, end: number /*long*/): number /*byte*/[]
                        // @ts-ignore
                        public getSet(key: number /*byte*/[], value: number /*byte*/[]): number /*byte*/[]
                        // @ts-ignore
                        public getSubscription(): org.springframework.data.redis.connection.Subscription
                        // @ts-ignore
                        public hDel(key: number /*byte*/[], ...fields: number /*byte*/[][]): number
                        // @ts-ignore
                        public hExists(key: number /*byte*/[], field: number /*byte*/[]): java.lang.Boolean
                        // @ts-ignore
                        public hGet(key: number /*byte*/[], field: number /*byte*/[]): number /*byte*/[]
                        // @ts-ignore
                        public hGetAll(key: number /*byte*/[]): java.util.Map<number /*byte*/[], number /*byte*/[]>
                        // @ts-ignore
                        public hIncrBy(key: number /*byte*/[], field: number /*byte*/[], delta: number /*long*/): number
                        // @ts-ignore
                        public hIncrBy(key: number /*byte*/[], field: number /*byte*/[], delta: number /*double*/): number
                        // @ts-ignore
                        public hKeys(key: number /*byte*/[]): Array<number /*byte*/[]>
                        // @ts-ignore
                        public hLen(key: number /*byte*/[]): number
                        // @ts-ignore
                        public hMGet(key: number /*byte*/[], ...fields: number /*byte*/[][]): Array<number /*byte*/[]>
                        // @ts-ignore
                        public hMSet(key: number /*byte*/[], hashes: java.util.Map<number /*byte*/[], number /*byte*/[]>): void
                        // @ts-ignore
                        public hSet(key: number /*byte*/[], field: number /*byte*/[], value: number /*byte*/[]): java.lang.Boolean
                        // @ts-ignore
                        public hSetNX(key: number /*byte*/[], field: number /*byte*/[], value: number /*byte*/[]): java.lang.Boolean
                        // @ts-ignore
                        public hVals(key: number /*byte*/[]): Array<number /*byte*/[]>
                        // @ts-ignore
                        public incr(key: number /*byte*/[]): number
                        // @ts-ignore
                        public incrBy(key: number /*byte*/[], value: number /*long*/): number
                        // @ts-ignore
                        public incrBy(key: number /*byte*/[], value: number /*double*/): number
                        // @ts-ignore
                        public info(): java.util.Properties
                        // @ts-ignore
                        public info(section: java.lang.String | string): java.util.Properties
                        // @ts-ignore
                        public isClosed(): boolean
                        // @ts-ignore
                        public isQueueing(): boolean
                        // @ts-ignore
                        public isSubscribed(): boolean
                        // @ts-ignore
                        public keys(pattern: number /*byte*/[]): Array<number /*byte*/[]>
                        // @ts-ignore
                        public lastSave(): number
                        // @ts-ignore
                        public lIndex(key: number /*byte*/[], index: number /*long*/): number /*byte*/[]
                        // @ts-ignore
                        public lInsert(key: number /*byte*/[], where: org.springframework.data.redis.connection.RedisListCommands.Position, pivot: number /*byte*/[], value: number /*byte*/[]): number
                        // @ts-ignore
                        public lLen(key: number /*byte*/[]): number
                        // @ts-ignore
                        public lPop(key: number /*byte*/[]): number /*byte*/[]
                        // @ts-ignore
                        public lPush(key: number /*byte*/[], ...values: number /*byte*/[][]): number
                        // @ts-ignore
                        public lPushX(key: number /*byte*/[], value: number /*byte*/[]): number
                        // @ts-ignore
                        public lRange(key: number /*byte*/[], start: number /*long*/, end: number /*long*/): Array<number /*byte*/[]>
                        // @ts-ignore
                        public lRem(key: number /*byte*/[], count: number /*long*/, value: number /*byte*/[]): number
                        // @ts-ignore
                        public lSet(key: number /*byte*/[], index: number /*long*/, value: number /*byte*/[]): void
                        // @ts-ignore
                        public lTrim(key: number /*byte*/[], start: number /*long*/, end: number /*long*/): void
                        // @ts-ignore
                        public mGet(...keys: number /*byte*/[][]): Array<number /*byte*/[]>
                        // @ts-ignore
                        public mSet(tuple: java.util.Map<number /*byte*/[], number /*byte*/[]>): java.lang.Boolean
                        // @ts-ignore
                        public mSetNX(tuple: java.util.Map<number /*byte*/[], number /*byte*/[]>): java.lang.Boolean
                        // @ts-ignore
                        public multi(): void
                        // @ts-ignore
                        public persist(key: number /*byte*/[]): java.lang.Boolean
                        // @ts-ignore
                        public move(key: number /*byte*/[], dbIndex: number /*int*/): java.lang.Boolean
                        // @ts-ignore
                        public ping(): string
                        // @ts-ignore
                        public pSubscribe(listener: org.springframework.data.redis.connection.MessageListener, ...patterns: number /*byte*/[][]): void
                        // @ts-ignore
                        public publish(channel: number /*byte*/[], message: number /*byte*/[]): number
                        // @ts-ignore
                        public randomKey(): number /*byte*/[]
                        // @ts-ignore
                        public rename(sourceKey: number /*byte*/[], targetKey: number /*byte*/[]): void
                        // @ts-ignore
                        public renameNX(sourceKey: number /*byte*/[], targetKey: number /*byte*/[]): java.lang.Boolean
                        // @ts-ignore
                        public resetConfigStats(): void
                        // @ts-ignore
                        public rPop(key: number /*byte*/[]): number /*byte*/[]
                        // @ts-ignore
                        public rPopLPush(srcKey: number /*byte*/[], dstKey: number /*byte*/[]): number /*byte*/[]
                        // @ts-ignore
                        public rPush(key: number /*byte*/[], ...values: number /*byte*/[][]): number
                        // @ts-ignore
                        public rPushX(key: number /*byte*/[], value: number /*byte*/[]): number
                        // @ts-ignore
                        public sAdd(key: number /*byte*/[], ...values: number /*byte*/[][]): number
                        // @ts-ignore
                        public save(): void
                        // @ts-ignore
                        public sCard(key: number /*byte*/[]): number
                        // @ts-ignore
                        public sDiff(...keys: number /*byte*/[][]): Array<number /*byte*/[]>
                        // @ts-ignore
                        public sDiffStore(destKey: number /*byte*/[], ...keys: number /*byte*/[][]): number
                        // @ts-ignore
                        public select(dbIndex: number /*int*/): void
                        // @ts-ignore
                        public set(key: number /*byte*/[], value: number /*byte*/[]): java.lang.Boolean
                        // @ts-ignore
                        public set(key: number /*byte*/[], value: number /*byte*/[], expiration: org.springframework.data.redis.core.types.Expiration, option: org.springframework.data.redis.connection.RedisStringCommands.SetOption): java.lang.Boolean
                        // @ts-ignore
                        public setBit(key: number /*byte*/[], offset: number /*long*/, value: boolean): java.lang.Boolean
                        // @ts-ignore
                        public setConfig(param: java.lang.String | string, value: java.lang.String | string): void
                        // @ts-ignore
                        public setEx(key: number /*byte*/[], seconds: number /*long*/, value: number /*byte*/[]): java.lang.Boolean
                        // @ts-ignore
                        public pSetEx(key: number /*byte*/[], milliseconds: number /*long*/, value: number /*byte*/[]): java.lang.Boolean
                        // @ts-ignore
                        public setNX(key: number /*byte*/[], value: number /*byte*/[]): java.lang.Boolean
                        // @ts-ignore
                        public setRange(key: number /*byte*/[], value: number /*byte*/[], start: number /*long*/): void
                        // @ts-ignore
                        public shutdown(): void
                        // @ts-ignore
                        public shutdown(option: org.springframework.data.redis.connection.RedisServerCommands.ShutdownOption): void
                        // @ts-ignore
                        public sInter(...keys: number /*byte*/[][]): Array<number /*byte*/[]>
                        // @ts-ignore
                        public sInterStore(destKey: number /*byte*/[], ...keys: number /*byte*/[][]): number
                        // @ts-ignore
                        public sIsMember(key: number /*byte*/[], value: number /*byte*/[]): java.lang.Boolean
                        // @ts-ignore
                        public sMembers(key: number /*byte*/[]): Array<number /*byte*/[]>
                        // @ts-ignore
                        public sMove(srcKey: number /*byte*/[], destKey: number /*byte*/[], value: number /*byte*/[]): java.lang.Boolean
                        // @ts-ignore
                        public sort(key: number /*byte*/[], params: org.springframework.data.redis.connection.SortParameters, storeKey: number /*byte*/[]): number
                        // @ts-ignore
                        public sort(key: number /*byte*/[], params: org.springframework.data.redis.connection.SortParameters): Array<number /*byte*/[]>
                        // @ts-ignore
                        public encodingOf(key: number /*byte*/[]): org.springframework.data.redis.connection.ValueEncoding
                        // @ts-ignore
                        public idletime(key: number /*byte*/[]): java.time.Duration
                        // @ts-ignore
                        public refcount(key: number /*byte*/[]): number
                        // @ts-ignore
                        public sPop(key: number /*byte*/[]): number /*byte*/[]
                        // @ts-ignore
                        public sPop(key: number /*byte*/[], count: number /*long*/): Array<number /*byte*/[]>
                        // @ts-ignore
                        public sRandMember(key: number /*byte*/[]): number /*byte*/[]
                        // @ts-ignore
                        public sRandMember(key: number /*byte*/[], count: number /*long*/): Array<number /*byte*/[]>
                        // @ts-ignore
                        public sRem(key: number /*byte*/[], ...values: number /*byte*/[][]): number
                        // @ts-ignore
                        public strLen(key: number /*byte*/[]): number
                        // @ts-ignore
                        public bitCount(key: number /*byte*/[]): number
                        // @ts-ignore
                        public bitCount(key: number /*byte*/[], start: number /*long*/, end: number /*long*/): number
                        // @ts-ignore
                        public bitOp(op: org.springframework.data.redis.connection.RedisStringCommands.BitOperation, destination: number /*byte*/[], ...keys: number /*byte*/[][]): number
                        // @ts-ignore
                        public bitPos(key: number /*byte*/[], bit: boolean, range: object): number
                        // @ts-ignore
                        public subscribe(listener: org.springframework.data.redis.connection.MessageListener, ...channels: number /*byte*/[][]): void
                        // @ts-ignore
                        public sUnion(...keys: number /*byte*/[][]): Array<number /*byte*/[]>
                        // @ts-ignore
                        public sUnionStore(destKey: number /*byte*/[], ...keys: number /*byte*/[][]): number
                        // @ts-ignore
                        public ttl(key: number /*byte*/[]): number
                        // @ts-ignore
                        public ttl(key: number /*byte*/[], timeUnit: java.util.concurrent.TimeUnit): number
                        // @ts-ignore
                        public type(key: number /*byte*/[]): org.springframework.data.redis.connection.DataType
                        // @ts-ignore
                        public touch(...keys: number /*byte*/[][]): number
                        // @ts-ignore
                        public unwatch(): void
                        // @ts-ignore
                        public watch(...keys: number /*byte*/[][]): void
                        // @ts-ignore
                        public zAdd(key: number /*byte*/[], score: number /*double*/, value: number /*byte*/[]): java.lang.Boolean
                        // @ts-ignore
                        public zAdd(key: number /*byte*/[], tuples: java.util.Set<org.springframework.data.redis.connection.RedisZSetCommands.Tuple> | Array<org.springframework.data.redis.connection.RedisZSetCommands.Tuple>): number
                        // @ts-ignore
                        public zCard(key: number /*byte*/[]): number
                        // @ts-ignore
                        public zCount(key: number /*byte*/[], min: number /*double*/, max: number /*double*/): number
                        // @ts-ignore
                        public zCount(key: number /*byte*/[], range: org.springframework.data.redis.connection.RedisZSetCommands.Range): number
                        // @ts-ignore
                        public zIncrBy(key: number /*byte*/[], increment: number /*double*/, value: number /*byte*/[]): number
                        // @ts-ignore
                        public zInterStore(destKey: number /*byte*/[], aggregate: org.springframework.data.redis.connection.RedisZSetCommands.Aggregate, weights: org.springframework.data.redis.connection.RedisZSetCommands.Weights, ...sets: number /*byte*/[][]): number
                        // @ts-ignore
                        public zInterStore(destKey: number /*byte*/[], ...sets: number /*byte*/[][]): number
                        // @ts-ignore
                        public zRange(key: number /*byte*/[], start: number /*long*/, end: number /*long*/): Array<number /*byte*/[]>
                        // @ts-ignore
                        public zRangeByScore(key: number /*byte*/[], min: number /*double*/, max: number /*double*/, offset: number /*long*/, count: number /*long*/): Array<number /*byte*/[]>
                        // @ts-ignore
                        public zRangeByScore(key: number /*byte*/[], range: org.springframework.data.redis.connection.RedisZSetCommands.Range): Array<number /*byte*/[]>
                        // @ts-ignore
                        public zRangeByScore(key: number /*byte*/[], range: org.springframework.data.redis.connection.RedisZSetCommands.Range, limit: org.springframework.data.redis.connection.RedisZSetCommands.Limit): Array<number /*byte*/[]>
                        // @ts-ignore
                        public zRangeByScoreWithScores(key: number /*byte*/[], range: org.springframework.data.redis.connection.RedisZSetCommands.Range): Array<org.springframework.data.redis.connection.RedisZSetCommands.Tuple>
                        // @ts-ignore
                        public zRangeByScore(key: number /*byte*/[], min: number /*double*/, max: number /*double*/): Array<number /*byte*/[]>
                        // @ts-ignore
                        public zRangeByScoreWithScores(key: number /*byte*/[], min: number /*double*/, max: number /*double*/, offset: number /*long*/, count: number /*long*/): Array<org.springframework.data.redis.connection.RedisZSetCommands.Tuple>
                        // @ts-ignore
                        public zRangeByScoreWithScores(key: number /*byte*/[], range: org.springframework.data.redis.connection.RedisZSetCommands.Range, limit: org.springframework.data.redis.connection.RedisZSetCommands.Limit): Array<org.springframework.data.redis.connection.RedisZSetCommands.Tuple>
                        // @ts-ignore
                        public zRangeByScoreWithScores(key: number /*byte*/[], min: number /*double*/, max: number /*double*/): Array<org.springframework.data.redis.connection.RedisZSetCommands.Tuple>
                        // @ts-ignore
                        public zRangeWithScores(key: number /*byte*/[], start: number /*long*/, end: number /*long*/): Array<org.springframework.data.redis.connection.RedisZSetCommands.Tuple>
                        // @ts-ignore
                        public zRevRangeByScore(key: number /*byte*/[], min: number /*double*/, max: number /*double*/, offset: number /*long*/, count: number /*long*/): Array<number /*byte*/[]>
                        // @ts-ignore
                        public zRevRangeByScore(key: number /*byte*/[], range: org.springframework.data.redis.connection.RedisZSetCommands.Range): Array<number /*byte*/[]>
                        // @ts-ignore
                        public zRevRangeByScore(key: number /*byte*/[], min: number /*double*/, max: number /*double*/): Array<number /*byte*/[]>
                        // @ts-ignore
                        public zRevRangeByScore(key: number /*byte*/[], range: org.springframework.data.redis.connection.RedisZSetCommands.Range, limit: org.springframework.data.redis.connection.RedisZSetCommands.Limit): Array<number /*byte*/[]>
                        // @ts-ignore
                        public zRevRangeByScoreWithScores(key: number /*byte*/[], min: number /*double*/, max: number /*double*/, offset: number /*long*/, count: number /*long*/): Array<org.springframework.data.redis.connection.RedisZSetCommands.Tuple>
                        // @ts-ignore
                        public zRevRangeByScoreWithScores(key: number /*byte*/[], range: org.springframework.data.redis.connection.RedisZSetCommands.Range): Array<org.springframework.data.redis.connection.RedisZSetCommands.Tuple>
                        // @ts-ignore
                        public zRevRangeByScoreWithScores(key: number /*byte*/[], range: org.springframework.data.redis.connection.RedisZSetCommands.Range, limit: org.springframework.data.redis.connection.RedisZSetCommands.Limit): Array<org.springframework.data.redis.connection.RedisZSetCommands.Tuple>
                        // @ts-ignore
                        public zRevRangeByScoreWithScores(key: number /*byte*/[], min: number /*double*/, max: number /*double*/): Array<org.springframework.data.redis.connection.RedisZSetCommands.Tuple>
                        // @ts-ignore
                        public zRank(key: number /*byte*/[], value: number /*byte*/[]): number
                        // @ts-ignore
                        public zRem(key: number /*byte*/[], ...values: number /*byte*/[][]): number
                        // @ts-ignore
                        public zRemRange(key: number /*byte*/[], start: number /*long*/, end: number /*long*/): number
                        // @ts-ignore
                        public zRemRangeByScore(key: number /*byte*/[], min: number /*double*/, max: number /*double*/): number
                        // @ts-ignore
                        public zRemRangeByScore(key: number /*byte*/[], range: org.springframework.data.redis.connection.RedisZSetCommands.Range): number
                        // @ts-ignore
                        public zRevRange(key: number /*byte*/[], start: number /*long*/, end: number /*long*/): Array<number /*byte*/[]>
                        // @ts-ignore
                        public zRevRangeWithScores(key: number /*byte*/[], start: number /*long*/, end: number /*long*/): Array<org.springframework.data.redis.connection.RedisZSetCommands.Tuple>
                        // @ts-ignore
                        public zRevRank(key: number /*byte*/[], value: number /*byte*/[]): number
                        // @ts-ignore
                        public zScore(key: number /*byte*/[], value: number /*byte*/[]): number
                        // @ts-ignore
                        public zUnionStore(destKey: number /*byte*/[], aggregate: org.springframework.data.redis.connection.RedisZSetCommands.Aggregate, weights: org.springframework.data.redis.connection.RedisZSetCommands.Weights, ...sets: number /*byte*/[][]): number
                        // @ts-ignore
                        public zUnionStore(destKey: number /*byte*/[], ...sets: number /*byte*/[][]): number
                        // @ts-ignore
                        public pExpire(key: number /*byte*/[], millis: number /*long*/): java.lang.Boolean
                        // @ts-ignore
                        public pExpireAt(key: number /*byte*/[], unixTimeInMillis: number /*long*/): java.lang.Boolean
                        // @ts-ignore
                        public pTtl(key: number /*byte*/[]): number
                        // @ts-ignore
                        public pTtl(key: number /*byte*/[], timeUnit: java.util.concurrent.TimeUnit): number
                        // @ts-ignore
                        public dump(key: number /*byte*/[]): number /*byte*/[]
                        // @ts-ignore
                        public restore(key: number /*byte*/[], ttlInMillis: number /*long*/, serializedValue: number /*byte*/[], replace: boolean): void
                        // @ts-ignore
                        public scriptFlush(): void
                        // @ts-ignore
                        public scriptKill(): void
                        // @ts-ignore
                        public scriptLoad(script: number /*byte*/[]): string
                        // @ts-ignore
                        public scriptExists(...scriptSha1: java.lang.String[] | string[]): Array<java.lang.Boolean>
                        // @ts-ignore
                        public eval<T>(script: number /*byte*/[], returnType: org.springframework.data.redis.connection.ReturnType, numKeys: number /*int*/, ...keysAndArgs: number /*byte*/[][]): T
                        // @ts-ignore
                        public evalSha<T>(scriptSha1: java.lang.String | string, returnType: org.springframework.data.redis.connection.ReturnType, numKeys: number /*int*/, ...keysAndArgs: number /*byte*/[][]): T
                        // @ts-ignore
                        public evalSha<T>(scriptSha1: number /*byte*/[], returnType: org.springframework.data.redis.connection.ReturnType, numKeys: number /*int*/, ...keysAndArgs: number /*byte*/[][]): T
                        // @ts-ignore
                        public append(key: java.lang.String | string, value: java.lang.String | string): number
                        // @ts-ignore
                        public bLPop(timeout: number /*int*/, ...keys: java.lang.String[] | string[]): Array<java.lang.String | string>
                        // @ts-ignore
                        public bRPop(timeout: number /*int*/, ...keys: java.lang.String[] | string[]): Array<java.lang.String | string>
                        // @ts-ignore
                        public bRPopLPush(timeout: number /*int*/, srcKey: java.lang.String | string, dstKey: java.lang.String | string): string
                        // @ts-ignore
                        public decr(key: java.lang.String | string): number
                        // @ts-ignore
                        public decrBy(key: java.lang.String | string, value: number /*long*/): number
                        // @ts-ignore
                        public del(...keys: java.lang.String[] | string[]): number
                        // @ts-ignore
                        public unlink(...keys: java.lang.String[] | string[]): number
                        // @ts-ignore
                        public echo(message: java.lang.String | string): string
                        // @ts-ignore
                        public exists(key: java.lang.String | string): java.lang.Boolean
                        // @ts-ignore
                        public expire(key: java.lang.String | string, seconds: number /*long*/): java.lang.Boolean
                        // @ts-ignore
                        public expireAt(key: java.lang.String | string, unixTime: number /*long*/): java.lang.Boolean
                        // @ts-ignore
                        public get(key: java.lang.String | string): string
                        // @ts-ignore
                        public getBit(key: java.lang.String | string, offset: number /*long*/): java.lang.Boolean
                        // @ts-ignore
                        public getRange(key: java.lang.String | string, start: number /*long*/, end: number /*long*/): string
                        // @ts-ignore
                        public getSet(key: java.lang.String | string, value: java.lang.String | string): string
                        // @ts-ignore
                        public hDel(key: java.lang.String | string, ...fields: java.lang.String[] | string[]): number
                        // @ts-ignore
                        public hExists(key: java.lang.String | string, field: java.lang.String | string): java.lang.Boolean
                        // @ts-ignore
                        public hGet(key: java.lang.String | string, field: java.lang.String | string): string
                        // @ts-ignore
                        public hGetAll(key: java.lang.String | string): java.util.Map<java.lang.String | string, java.lang.String | string>
                        // @ts-ignore
                        public hIncrBy(key: java.lang.String | string, field: java.lang.String | string, delta: number /*long*/): number
                        // @ts-ignore
                        public hIncrBy(key: java.lang.String | string, field: java.lang.String | string, delta: number /*double*/): number
                        // @ts-ignore
                        public hKeys(key: java.lang.String | string): Array<java.lang.String | string>
                        // @ts-ignore
                        public hLen(key: java.lang.String | string): number
                        // @ts-ignore
                        public hMGet(key: java.lang.String | string, ...fields: java.lang.String[] | string[]): Array<java.lang.String | string>
                        // @ts-ignore
                        public hMSet(key: java.lang.String | string, hashes: java.util.Map<java.lang.String | string, java.lang.String | string>): void
                        // @ts-ignore
                        public hSet(key: java.lang.String | string, field: java.lang.String | string, value: java.lang.String | string): java.lang.Boolean
                        // @ts-ignore
                        public hSetNX(key: java.lang.String | string, field: java.lang.String | string, value: java.lang.String | string): java.lang.Boolean
                        // @ts-ignore
                        public hVals(key: java.lang.String | string): Array<java.lang.String | string>
                        // @ts-ignore
                        public incr(key: java.lang.String | string): number
                        // @ts-ignore
                        public incrBy(key: java.lang.String | string, value: number /*long*/): number
                        // @ts-ignore
                        public incrBy(key: java.lang.String | string, value: number /*double*/): number
                        // @ts-ignore
                        public keys(pattern: java.lang.String | string): Array<java.lang.String | string>
                        // @ts-ignore
                        public lIndex(key: java.lang.String | string, index: number /*long*/): string
                        // @ts-ignore
                        public lInsert(key: java.lang.String | string, where: org.springframework.data.redis.connection.RedisListCommands.Position, pivot: java.lang.String | string, value: java.lang.String | string): number
                        // @ts-ignore
                        public lLen(key: java.lang.String | string): number
                        // @ts-ignore
                        public lPop(key: java.lang.String | string): string
                        // @ts-ignore
                        public lPush(key: java.lang.String | string, ...values: java.lang.String[] | string[]): number
                        // @ts-ignore
                        public lPushX(key: java.lang.String | string, value: java.lang.String | string): number
                        // @ts-ignore
                        public lRange(key: java.lang.String | string, start: number /*long*/, end: number /*long*/): Array<java.lang.String | string>
                        // @ts-ignore
                        public lRem(key: java.lang.String | string, count: number /*long*/, value: java.lang.String | string): number
                        // @ts-ignore
                        public lSet(key: java.lang.String | string, index: number /*long*/, value: java.lang.String | string): void
                        // @ts-ignore
                        public lTrim(key: java.lang.String | string, start: number /*long*/, end: number /*long*/): void
                        // @ts-ignore
                        public mGet(...keys: java.lang.String[] | string[]): Array<java.lang.String | string>
                        // @ts-ignore
                        public mSetNXString(tuple: java.util.Map<java.lang.String | string, java.lang.String | string>): java.lang.Boolean
                        // @ts-ignore
                        public mSetString(tuple: java.util.Map<java.lang.String | string, java.lang.String | string>): java.lang.Boolean
                        // @ts-ignore
                        public persist(key: java.lang.String | string): java.lang.Boolean
                        // @ts-ignore
                        public move(key: java.lang.String | string, dbIndex: number /*int*/): java.lang.Boolean
                        // @ts-ignore
                        public pSubscribe(listener: org.springframework.data.redis.connection.MessageListener, ...patterns: java.lang.String[] | string[]): void
                        // @ts-ignore
                        public publish(channel: java.lang.String | string, message: java.lang.String | string): number
                        // @ts-ignore
                        public rename(oldName: java.lang.String | string, newName: java.lang.String | string): void
                        // @ts-ignore
                        public renameNX(oldName: java.lang.String | string, newName: java.lang.String | string): java.lang.Boolean
                        // @ts-ignore
                        public rPop(key: java.lang.String | string): string
                        // @ts-ignore
                        public rPopLPush(srcKey: java.lang.String | string, dstKey: java.lang.String | string): string
                        // @ts-ignore
                        public rPush(key: java.lang.String | string, ...values: java.lang.String[] | string[]): number
                        // @ts-ignore
                        public rPushX(key: java.lang.String | string, value: java.lang.String | string): number
                        // @ts-ignore
                        public sAdd(key: java.lang.String | string, ...values: java.lang.String[] | string[]): number
                        // @ts-ignore
                        public sCard(key: java.lang.String | string): number
                        // @ts-ignore
                        public sDiff(...keys: java.lang.String[] | string[]): Array<java.lang.String | string>
                        // @ts-ignore
                        public sDiffStore(destKey: java.lang.String | string, ...keys: java.lang.String[] | string[]): number
                        // @ts-ignore
                        public set(key: java.lang.String | string, value: java.lang.String | string): java.lang.Boolean
                        // @ts-ignore
                        public set(key: java.lang.String | string, value: java.lang.String | string, expiration: org.springframework.data.redis.core.types.Expiration, option: org.springframework.data.redis.connection.RedisStringCommands.SetOption): java.lang.Boolean
                        // @ts-ignore
                        public setBit(key: java.lang.String | string, offset: number /*long*/, value: boolean): java.lang.Boolean
                        // @ts-ignore
                        public setEx(key: java.lang.String | string, seconds: number /*long*/, value: java.lang.String | string): java.lang.Boolean
                        // @ts-ignore
                        public pSetEx(key: java.lang.String | string, seconds: number /*long*/, value: java.lang.String | string): java.lang.Boolean
                        // @ts-ignore
                        public setNX(key: java.lang.String | string, value: java.lang.String | string): java.lang.Boolean
                        // @ts-ignore
                        public setRange(key: java.lang.String | string, value: java.lang.String | string, start: number /*long*/): void
                        // @ts-ignore
                        public sInter(...keys: java.lang.String[] | string[]): Array<java.lang.String | string>
                        // @ts-ignore
                        public sInterStore(destKey: java.lang.String | string, ...keys: java.lang.String[] | string[]): number
                        // @ts-ignore
                        public sIsMember(key: java.lang.String | string, value: java.lang.String | string): java.lang.Boolean
                        // @ts-ignore
                        public sMembers(key: java.lang.String | string): Array<java.lang.String | string>
                        // @ts-ignore
                        public sMove(srcKey: java.lang.String | string, destKey: java.lang.String | string, value: java.lang.String | string): java.lang.Boolean
                        // @ts-ignore
                        public sort(key: java.lang.String | string, params: org.springframework.data.redis.connection.SortParameters, storeKey: java.lang.String | string): number
                        // @ts-ignore
                        public sort(key: java.lang.String | string, params: org.springframework.data.redis.connection.SortParameters): Array<java.lang.String | string>
                        // @ts-ignore
                        public encodingOf(key: java.lang.String | string): org.springframework.data.redis.connection.ValueEncoding
                        // @ts-ignore
                        public idletime(key: java.lang.String | string): java.time.Duration
                        // @ts-ignore
                        public refcount(key: java.lang.String | string): number
                        // @ts-ignore
                        public sPop(key: java.lang.String | string): string
                        // @ts-ignore
                        public sPop(key: java.lang.String | string, count: number /*long*/): Array<java.lang.String | string>
                        // @ts-ignore
                        public sRandMember(key: java.lang.String | string): string
                        // @ts-ignore
                        public sRandMember(key: java.lang.String | string, count: number /*long*/): Array<java.lang.String | string>
                        // @ts-ignore
                        public sRem(key: java.lang.String | string, ...values: java.lang.String[] | string[]): number
                        // @ts-ignore
                        public strLen(key: java.lang.String | string): number
                        // @ts-ignore
                        public bitCount(key: java.lang.String | string): number
                        // @ts-ignore
                        public bitCount(key: java.lang.String | string, start: number /*long*/, end: number /*long*/): number
                        // @ts-ignore
                        public bitOp(op: org.springframework.data.redis.connection.RedisStringCommands.BitOperation, destination: java.lang.String | string, ...keys: java.lang.String[] | string[]): number
                        // @ts-ignore
                        public bitPos(key: java.lang.String | string, bit: boolean, range: object): number
                        // @ts-ignore
                        public subscribe(listener: org.springframework.data.redis.connection.MessageListener, ...channels: java.lang.String[] | string[]): void
                        // @ts-ignore
                        public sUnion(...keys: java.lang.String[] | string[]): Array<java.lang.String | string>
                        // @ts-ignore
                        public sUnionStore(destKey: java.lang.String | string, ...keys: java.lang.String[] | string[]): number
                        // @ts-ignore
                        public ttl(key: java.lang.String | string): number
                        // @ts-ignore
                        public ttl(key: java.lang.String | string, timeUnit: java.util.concurrent.TimeUnit): number
                        // @ts-ignore
                        public type(key: java.lang.String | string): org.springframework.data.redis.connection.DataType
                        // @ts-ignore
                        public touch(...keys: java.lang.String[] | string[]): number
                        // @ts-ignore
                        public zAdd(key: java.lang.String | string, score: number /*double*/, value: java.lang.String | string): java.lang.Boolean
                        // @ts-ignore
                        public zAdd(key: java.lang.String | string, tuples: java.util.Set<org.springframework.data.redis.connection.StringRedisConnection.StringTuple> | Array<org.springframework.data.redis.connection.StringRedisConnection.StringTuple>): number
                        // @ts-ignore
                        public zCard(key: java.lang.String | string): number
                        // @ts-ignore
                        public zCount(key: java.lang.String | string, min: number /*double*/, max: number /*double*/): number
                        // @ts-ignore
                        public zIncrBy(key: java.lang.String | string, increment: number /*double*/, value: java.lang.String | string): number
                        // @ts-ignore
                        public zInterStore(destKey: java.lang.String | string, aggregate: org.springframework.data.redis.connection.RedisZSetCommands.Aggregate, weights: number /*int*/[], ...sets: java.lang.String[] | string[]): number
                        // @ts-ignore
                        public zInterStore(destKey: java.lang.String | string, ...sets: java.lang.String[] | string[]): number
                        // @ts-ignore
                        public zRange(key: java.lang.String | string, start: number /*long*/, end: number /*long*/): Array<java.lang.String | string>
                        // @ts-ignore
                        public zRangeByScore(key: java.lang.String | string, min: number /*double*/, max: number /*double*/, offset: number /*long*/, count: number /*long*/): Array<java.lang.String | string>
                        // @ts-ignore
                        public zRangeByScore(key: java.lang.String | string, min: number /*double*/, max: number /*double*/): Array<java.lang.String | string>
                        // @ts-ignore
                        public zRangeByScoreWithScores(key: java.lang.String | string, min: number /*double*/, max: number /*double*/, offset: number /*long*/, count: number /*long*/): Array<org.springframework.data.redis.connection.StringRedisConnection.StringTuple>
                        // @ts-ignore
                        public zRangeByScoreWithScores(key: java.lang.String | string, min: number /*double*/, max: number /*double*/): Array<org.springframework.data.redis.connection.StringRedisConnection.StringTuple>
                        // @ts-ignore
                        public zRangeWithScores(key: java.lang.String | string, start: number /*long*/, end: number /*long*/): Array<org.springframework.data.redis.connection.StringRedisConnection.StringTuple>
                        // @ts-ignore
                        public zRank(key: java.lang.String | string, value: java.lang.String | string): number
                        // @ts-ignore
                        public zRem(key: java.lang.String | string, ...values: java.lang.String[] | string[]): number
                        // @ts-ignore
                        public zRemRange(key: java.lang.String | string, start: number /*long*/, end: number /*long*/): number
                        // @ts-ignore
                        public zRemRangeByScore(key: java.lang.String | string, min: number /*double*/, max: number /*double*/): number
                        // @ts-ignore
                        public zRevRange(key: java.lang.String | string, start: number /*long*/, end: number /*long*/): Array<java.lang.String | string>
                        // @ts-ignore
                        public zRevRangeWithScores(key: java.lang.String | string, start: number /*long*/, end: number /*long*/): Array<org.springframework.data.redis.connection.StringRedisConnection.StringTuple>
                        // @ts-ignore
                        public zRevRangeByScore(key: java.lang.String | string, min: number /*double*/, max: number /*double*/): Array<java.lang.String | string>
                        // @ts-ignore
                        public zRevRangeByScoreWithScores(key: java.lang.String | string, min: number /*double*/, max: number /*double*/): Array<org.springframework.data.redis.connection.StringRedisConnection.StringTuple>
                        // @ts-ignore
                        public zRevRangeByScore(key: java.lang.String | string, min: number /*double*/, max: number /*double*/, offset: number /*long*/, count: number /*long*/): Array<java.lang.String | string>
                        // @ts-ignore
                        public zRevRangeByScoreWithScores(key: java.lang.String | string, min: number /*double*/, max: number /*double*/, offset: number /*long*/, count: number /*long*/): Array<org.springframework.data.redis.connection.StringRedisConnection.StringTuple>
                        // @ts-ignore
                        public zRevRank(key: java.lang.String | string, value: java.lang.String | string): number
                        // @ts-ignore
                        public zScore(key: java.lang.String | string, value: java.lang.String | string): number
                        // @ts-ignore
                        public zUnionStore(destKey: java.lang.String | string, aggregate: org.springframework.data.redis.connection.RedisZSetCommands.Aggregate, weights: number /*int*/[], ...sets: java.lang.String[] | string[]): number
                        // @ts-ignore
                        public zUnionStore(destKey: java.lang.String | string, ...sets: java.lang.String[] | string[]): number
                        // @ts-ignore
                        public geoAdd(key: number /*byte*/[], point: Point, member: number /*byte*/[]): number
                        // @ts-ignore
                        public geoAdd(key: number /*byte*/[], location: org.springframework.data.redis.connection.RedisGeoCommands.GeoLocation<number /*byte*/[]>): number
                        // @ts-ignore
                        public geoAdd(key: java.lang.String | string, point: Point, member: java.lang.String | string): number
                        // @ts-ignore
                        public geoAdd(key: java.lang.String | string, location: org.springframework.data.redis.connection.RedisGeoCommands.GeoLocation<java.lang.String | string>): number
                        // @ts-ignore
                        public geoAdd(key: number /*byte*/[], memberCoordinateMap: java.util.Map<number /*byte*/[], Point>): number
                        // @ts-ignore
                        public geoAdd(key: number /*byte*/[], locations: java.lang.Iterable<org.springframework.data.redis.connection.RedisGeoCommands.GeoLocation<number /*byte*/[]>>): number
                        // @ts-ignore
                        public geoAdd(key: java.lang.String | string, memberCoordinateMap: java.util.Map<java.lang.String | string, Point>): number
                        // @ts-ignore
                        public geoAdd(key: java.lang.String | string, locations: java.lang.Iterable<org.springframework.data.redis.connection.RedisGeoCommands.GeoLocation<java.lang.String | string>>): number
                        // @ts-ignore
                        public geoDist(key: number /*byte*/[], member1: number /*byte*/[], member2: number /*byte*/[]): Distance
                        // @ts-ignore
                        public geoDist(key: java.lang.String | string, member1: java.lang.String | string, member2: java.lang.String | string): Distance
                        // @ts-ignore
                        public geoDist(key: number /*byte*/[], member1: number /*byte*/[], member2: number /*byte*/[], metric: Metric): Distance
                        // @ts-ignore
                        public geoDist(key: java.lang.String | string, member1: java.lang.String | string, member2: java.lang.String | string, metric: Metric): Distance
                        // @ts-ignore
                        public geoHash(key: number /*byte*/[], ...members: number /*byte*/[][]): Array<java.lang.String | string>
                        // @ts-ignore
                        public geoHash(key: java.lang.String | string, ...members: java.lang.String[] | string[]): Array<java.lang.String | string>
                        // @ts-ignore
                        public geoPos(key: number /*byte*/[], ...members: number /*byte*/[][]): Array<Point>
                        // @ts-ignore
                        public geoPos(key: java.lang.String | string, ...members: java.lang.String[] | string[]): Array<Point>
                        // @ts-ignore
                        public geoRadius(key: java.lang.String | string, within: Circle): object
                        // @ts-ignore
                        public geoRadius(key: java.lang.String | string, within: Circle, args: org.springframework.data.redis.connection.RedisGeoCommands.GeoRadiusCommandArgs): object
                        // @ts-ignore
                        public geoRadiusByMember(key: java.lang.String | string, member: java.lang.String | string, radius: number /*double*/): object
                        // @ts-ignore
                        public geoRadiusByMember(key: java.lang.String | string, member: java.lang.String | string, radius: Distance): object
                        // @ts-ignore
                        public geoRadiusByMember(key: java.lang.String | string, member: java.lang.String | string, radius: Distance, args: org.springframework.data.redis.connection.RedisGeoCommands.GeoRadiusCommandArgs): object
                        // @ts-ignore
                        public geoRadius(key: number /*byte*/[], within: Circle): object
                        // @ts-ignore
                        public geoRadius(key: number /*byte*/[], within: Circle, args: org.springframework.data.redis.connection.RedisGeoCommands.GeoRadiusCommandArgs): object
                        // @ts-ignore
                        public geoRadiusByMember(key: number /*byte*/[], member: number /*byte*/[], radius: number /*double*/): object
                        // @ts-ignore
                        public geoRadiusByMember(key: number /*byte*/[], member: number /*byte*/[], radius: Distance): object
                        // @ts-ignore
                        public geoRadiusByMember(key: number /*byte*/[], member: number /*byte*/[], radius: Distance, args: org.springframework.data.redis.connection.RedisGeoCommands.GeoRadiusCommandArgs): object
                        // @ts-ignore
                        public geoRemove(key: number /*byte*/[], ...members: number /*byte*/[][]): number
                        // @ts-ignore
                        public geoRemove(key: java.lang.String | string, ...members: java.lang.String[] | string[]): number
                        // @ts-ignore
                        public closePipeline(): Array<java.lang.Object | any>
                        // @ts-ignore
                        public isPipelined(): boolean
                        // @ts-ignore
                        public openPipeline(): void
                        // @ts-ignore
                        public execute(command: java.lang.String | string): any
                        // @ts-ignore
                        public execute(command: java.lang.String | string, ...args: number /*byte*/[][]): any
                        // @ts-ignore
                        public execute(command: java.lang.String | string, ...args: java.lang.String[] | string[]): any
                        // @ts-ignore
                        public pExpire(key: java.lang.String | string, millis: number /*long*/): java.lang.Boolean
                        // @ts-ignore
                        public pExpireAt(key: java.lang.String | string, unixTimeInMillis: number /*long*/): java.lang.Boolean
                        // @ts-ignore
                        public pTtl(key: java.lang.String | string): number
                        // @ts-ignore
                        public pTtl(key: java.lang.String | string, timeUnit: java.util.concurrent.TimeUnit): number
                        // @ts-ignore
                        public scriptLoad(script: java.lang.String | string): string
                        /**
                         * NOTE: This method will not deserialize Strings returned by Lua scripts, as they may not be encoded with the same
                         * serializer used here. They will be returned as byte[]s
                         */
                        // @ts-ignore
                        public eval<T>(script: java.lang.String | string, returnType: org.springframework.data.redis.connection.ReturnType, numKeys: number /*int*/, ...keysAndArgs: java.lang.String[] | string[]): T
                        /**
                         * NOTE: This method will not deserialize Strings returned by Lua scripts, as they may not be encoded with the same
                         * serializer used here. They will be returned as byte[]s
                         */
                        // @ts-ignore
                        public evalSha<T>(scriptSha1: java.lang.String | string, returnType: org.springframework.data.redis.connection.ReturnType, numKeys: number /*int*/, ...keysAndArgs: java.lang.String[] | string[]): T
                        // @ts-ignore
                        public time(): number
                        // @ts-ignore
                        public getClientList(): Array<org.springframework.data.redis.core.types.RedisClientInfo>
                        // @ts-ignore
                        public slaveOf(host: java.lang.String | string, port: number /*int*/): void
                        // @ts-ignore
                        public slaveOfNoOne(): void
                        // @ts-ignore
                        public scan(options: org.springframework.data.redis.core.ScanOptions): org.springframework.data.redis.core.Cursor<number /*byte*/[]>
                        // @ts-ignore
                        public zScan(key: number /*byte*/[], options: org.springframework.data.redis.core.ScanOptions): org.springframework.data.redis.core.Cursor<org.springframework.data.redis.connection.RedisZSetCommands.Tuple>
                        // @ts-ignore
                        public sScan(key: number /*byte*/[], options: org.springframework.data.redis.core.ScanOptions): org.springframework.data.redis.core.Cursor<number /*byte*/[]>
                        // @ts-ignore
                        public hScan(key: number /*byte*/[], options: org.springframework.data.redis.core.ScanOptions): org.springframework.data.redis.core.Cursor<java.util.Map.Entry<number /*byte*/[], number /*byte*/[]>>
                        // @ts-ignore
                        public hStrLen(key: number /*byte*/[], field: number /*byte*/[]): number
                        // @ts-ignore
                        public setClientName(name: number /*byte*/[]): void
                        // @ts-ignore
                        public setClientName(name: java.lang.String | string): void
                        // @ts-ignore
                        public killClient(host: java.lang.String | string, port: number /*int*/): void
                        // @ts-ignore
                        public getClientName(): string
                        // @ts-ignore
                        public hScan(key: java.lang.String | string, options: org.springframework.data.redis.core.ScanOptions): org.springframework.data.redis.core.Cursor<java.util.Map.Entry<java.lang.String | string, java.lang.String | string>>
                        // @ts-ignore
                        public hStrLen(key: java.lang.String | string, field: java.lang.String | string): number
                        // @ts-ignore
                        public sScan(key: java.lang.String | string, options: org.springframework.data.redis.core.ScanOptions): org.springframework.data.redis.core.Cursor<java.lang.String | string>
                        // @ts-ignore
                        public zScan(key: java.lang.String | string, options: org.springframework.data.redis.core.ScanOptions): org.springframework.data.redis.core.Cursor<org.springframework.data.redis.connection.StringRedisConnection.StringTuple>
                        // @ts-ignore
                        public getSentinelConnection(): org.springframework.data.redis.connection.RedisSentinelConnection
                        // @ts-ignore
                        public zRangeByScore(key: java.lang.String | string, min: java.lang.String | string, max: java.lang.String | string): Array<java.lang.String | string>
                        // @ts-ignore
                        public zRangeByScore(key: java.lang.String | string, min: java.lang.String | string, max: java.lang.String | string, offset: number /*long*/, count: number /*long*/): Array<java.lang.String | string>
                        // @ts-ignore
                        public zRangeByScore(key: number /*byte*/[], min: java.lang.String | string, max: java.lang.String | string): Array<number /*byte*/[]>
                        // @ts-ignore
                        public zRangeByScore(key: number /*byte*/[], min: java.lang.String | string, max: java.lang.String | string, offset: number /*long*/, count: number /*long*/): Array<number /*byte*/[]>
                        // @ts-ignore
                        public pfAdd(key: number /*byte*/[], ...values: number /*byte*/[][]): number
                        // @ts-ignore
                        public pfAdd(key: java.lang.String | string, ...values: java.lang.String[] | string[]): number
                        // @ts-ignore
                        public pfCount(...keys: number /*byte*/[][]): number
                        // @ts-ignore
                        public pfCount(...keys: java.lang.String[] | string[]): number
                        // @ts-ignore
                        public pfMerge(destinationKey: number /*byte*/[], ...sourceKeys: number /*byte*/[][]): void
                        // @ts-ignore
                        public pfMerge(destinationKey: java.lang.String | string, ...sourceKeys: java.lang.String[] | string[]): void
                        // @ts-ignore
                        public zRangeByLex(key: number /*byte*/[]): Array<number /*byte*/[]>
                        // @ts-ignore
                        public zRangeByLex(key: number /*byte*/[], range: org.springframework.data.redis.connection.RedisZSetCommands.Range): Array<number /*byte*/[]>
                        // @ts-ignore
                        public zRangeByLex(key: number /*byte*/[], range: org.springframework.data.redis.connection.RedisZSetCommands.Range, limit: org.springframework.data.redis.connection.RedisZSetCommands.Limit): Array<number /*byte*/[]>
                        // @ts-ignore
                        public zRangeByLex(key: java.lang.String | string): Array<java.lang.String | string>
                        // @ts-ignore
                        public zRangeByLex(key: java.lang.String | string, range: org.springframework.data.redis.connection.RedisZSetCommands.Range): Array<java.lang.String | string>
                        // @ts-ignore
                        public zRangeByLex(key: java.lang.String | string, range: org.springframework.data.redis.connection.RedisZSetCommands.Range, limit: org.springframework.data.redis.connection.RedisZSetCommands.Limit): Array<java.lang.String | string>
                        // @ts-ignore
                        public migrate(key: number /*byte*/[], target: org.springframework.data.redis.connection.RedisNode, dbIndex: number /*int*/, option: org.springframework.data.redis.connection.RedisServerCommands.MigrateOption): void
                        // @ts-ignore
                        public migrate(key: number /*byte*/[], target: org.springframework.data.redis.connection.RedisNode, dbIndex: number /*int*/, option: org.springframework.data.redis.connection.RedisServerCommands.MigrateOption, timeout: number /*long*/): void
                        /**
                         * Specifies if pipelined and tx results should be deserialized to Strings. If false, results of
                         * {@link #closePipeline()} and {@link #exec()} will be of the type returned by the underlying connection
                         * @param deserializePipelineAndTxResults Whether or not to deserialize pipeline and tx results
                         */
                        // @ts-ignore
                        public setDeserializePipelineAndTxResults(deserializePipelineAndTxResults: boolean): void
                        // @ts-ignore
                        public bitField(key: number /*byte*/[], subCommands: org.springframework.data.redis.connection.BitFieldSubCommands): Array<java.lang.Long | number>
                        // @ts-ignore
                        public bitfield(key: java.lang.String | string, operation: org.springframework.data.redis.connection.BitFieldSubCommands): Array<java.lang.Long | number>
                        // @ts-ignore
                        public getDelegate(): org.springframework.data.redis.connection.RedisConnection
                    }
                }
            }
        }
    }
}
