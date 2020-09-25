declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * @author Christoph Strobl
                     * @author Thomas Darimont
                     * @author Ninad Divadkar
                     * @author Mark Paluch
                     * @author Oscar Cai
                     * @author Sébastien Volle
                     * @since 1.3
                     * @link <a href=
                     *        "https://github.com/antirez/redis/blob/843de8b786562d8d77c78d83a971060adc61f77a/src/server.c#L180">Redis
                     *        command list</a>
                     */
                    // @ts-ignore
                    class RedisCommand extends java.lang.Enum<org.springframework.data.redis.core.RedisCommand> {
                        // @ts-ignore
                        public static readonly APPEND: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly AUTH: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly BGREWRITEAOF: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly BGSAVE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly BITCOUNT: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly BITOP: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly BITPOS: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly BLPOP: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly BRPOP: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly BRPOPLPUSH: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly CLIENT_KILL: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly CLIENT_LIST: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly CLIENT_GETNAME: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly CLIENT_PAUSE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly CLIENT_SETNAME: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly CONFIG_GET: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly CONFIG_REWRITE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly CONFIG_SET: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly CONFIG_RESETSTAT: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly DBSIZE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly DECR: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly DECRBY: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly DEL: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly DISCARD: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly DUMP: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly ECHO: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly EVAL: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly EVALSHA: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly EXEC: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly EXISTS: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly EXPIRE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly EXPIREAT: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly FLUSHALL: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly FLUSHDB: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly GET: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly GETBIT: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly GETRANGE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly GETSET: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly GEOADD: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly GEODIST: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly GEOHASH: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly GEOPOS: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly GEORADIUS: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly GEORADIUSBYMEMBER: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly HDEL: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly HEXISTS: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly HGET: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly HGETALL: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly HINCRBY: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly HINCBYFLOAT: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly HKEYS: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly HLEN: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly HMGET: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly HMSET: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly HSET: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly HSETNX: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly HVALS: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly INCR: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly INCRBYFLOAT: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly INFO: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly KEYS: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly LASTSAVE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly LINDEX: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly LINSERT: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly LLEN: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly LPOP: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly LPUSH: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly LPUSHX: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly LRANGE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly LREM: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly LSET: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly LTRIM: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly MGET: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly MIGRATE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly MONITOR: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly MOVE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly MSET: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly MSETNX: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly MULTI: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly PERSIST: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly PEXPIRE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly PEXPIREAT: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly PING: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly PSETEX: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly PSUBSCRIBE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly PTTL: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly QUIT: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly RANDOMKEY: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly RANAME: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly RENAMENX: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly RESTORE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly RPOP: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly RPOPLPUSH: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly RPUSH: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly RPUSHX: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly SADD: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly SAVE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly SCARD: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly SCRIPT_EXISTS: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly SCRIPT_FLUSH: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly SCRIPT_KILL: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly SCRIPT_LOAD: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly SDIFF: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly SDIFFSTORE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly SELECT: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly SET: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly SETBIT: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly SETEX: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly SETNX: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly SETRANGE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly SHUTDOWN: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly SINTER: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly SINTERSTORE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly SISMEMBER: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly SLAVEOF: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly SLOWLOG: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly SMEMBERS: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly SMOVE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly SORT: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly SPOP: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly SRANDMEMBER: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly SREM: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly STRLEN: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly SUBSCRIBE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly SUNION: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly SUNIONSTORE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly SYNC: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly TIME: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly TTL: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly TYPE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly UNSUBSCRIBE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly UNWATCH: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly WATCH: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly ZADD: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly ZCARD: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly ZCOUNT: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly ZINCRBY: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly ZINTERSTORE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly ZRANGE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly ZRANGEBYSCORE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly ZRANK: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly ZREM: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly ZREMRANGEBYRANK: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly ZREMRANGEBYSCORE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly ZREVRANGE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly ZREVRANGEBYSCORE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly ZREVRANK: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly ZSCORE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly ZUNIONSTORE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly SCAN: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly SSCAN: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly HSCAN: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly ZSCAN: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static readonly UNKNOWN: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        public static values(): org.springframework.data.redis.core.RedisCommand[]
                        // @ts-ignore
                        public static valueOf(name: java.lang.String | string): org.springframework.data.redis.core.RedisCommand
                        /**
                         * @return {#literal true} if the command requires arguments
                         */
                        // @ts-ignore
                        public requiresArguments(): boolean
                        /**
                         * @return {#literal true} if an exact number of arguments is expected.
                         */
                        // @ts-ignore
                        public requiresExactNumberOfArguments(): boolean
                        /**
                         * @return {#literal true} if the command triggers a read operation
                         */
                        // @ts-ignore
                        public isRead(): boolean
                        /**
                         * @return {#literal true} if the command triggers a write operation
                         */
                        // @ts-ignore
                        public isWrite(): boolean
                        /**
                         * @return {#literal true} if values are read but not written
                         */
                        // @ts-ignore
                        public isReadonly(): boolean
                        /**
                         * {@link String#equalsIgnoreCase(String)} compare the given string representation of {@literal command} against the
                         * {@link #toString()} representation of the command as well as its given {@link #alias}.
                         * @param command
                         * @return true if positive match.
                         */
                        // @ts-ignore
                        public isRepresentedBy(command: java.lang.String | string): boolean
                        /**
                         * Validates given argument count against expected ones.
                         * @param nrArguments
                         * @exception IllegalArgumentException in case argument count does not match expected.
                         */
                        // @ts-ignore
                        public validateArgumentCount(nrArguments: number /*int*/): void
                        /**
                         * Returns the command represented by the given {@code key}. Returns {@link #UNKNOWN} if no matching command could be
                         * found.
                         * @param key
                         * @return 
                         */
                        // @ts-ignore
                        public static failsafeCommandLookup(key: java.lang.String | string): org.springframework.data.redis.core.RedisCommand
                    }
                }
            }
        }
    }
}
