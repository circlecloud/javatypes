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
                        readonly APPEND: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly AUTH: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly BGREWRITEAOF: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly BGSAVE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly BITCOUNT: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly BITOP: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly BITPOS: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly BLPOP: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly BRPOP: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly BRPOPLPUSH: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly CLIENT_KILL: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly CLIENT_LIST: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly CLIENT_GETNAME: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly CLIENT_PAUSE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly CLIENT_SETNAME: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly CONFIG_GET: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly CONFIG_REWRITE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly CONFIG_SET: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly CONFIG_RESETSTAT: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly DBSIZE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly DECR: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly DECRBY: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly DEL: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly DISCARD: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly DUMP: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly ECHO: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly EVAL: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly EVALSHA: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly EXEC: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly EXISTS: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly EXPIRE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly EXPIREAT: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly FLUSHALL: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly FLUSHDB: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly GET: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly GETBIT: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly GETRANGE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly GETSET: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly GEOADD: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly GEODIST: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly GEOHASH: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly GEOPOS: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly GEORADIUS: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly GEORADIUSBYMEMBER: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly HDEL: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly HEXISTS: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly HGET: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly HGETALL: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly HINCRBY: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly HINCBYFLOAT: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly HKEYS: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly HLEN: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly HMGET: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly HMSET: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly HSET: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly HSETNX: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly HVALS: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly INCR: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly INCRBYFLOAT: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly INFO: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly KEYS: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly LASTSAVE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly LINDEX: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly LINSERT: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly LLEN: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly LPOP: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly LPUSH: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly LPUSHX: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly LRANGE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly LREM: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly LSET: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly LTRIM: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly MGET: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly MIGRATE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly MONITOR: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly MOVE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly MSET: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly MSETNX: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly MULTI: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly PERSIST: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly PEXPIRE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly PEXPIREAT: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly PING: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly PSETEX: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly PSUBSCRIBE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly PTTL: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly QUIT: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly RANDOMKEY: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly RANAME: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly RENAMENX: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly RESTORE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly RPOP: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly RPOPLPUSH: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly RPUSH: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly RPUSHX: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly SADD: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly SAVE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly SCARD: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly SCRIPT_EXISTS: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly SCRIPT_FLUSH: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly SCRIPT_KILL: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly SCRIPT_LOAD: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly SDIFF: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly SDIFFSTORE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly SELECT: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly SET: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly SETBIT: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly SETEX: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly SETNX: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly SETRANGE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly SHUTDOWN: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly SINTER: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly SINTERSTORE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly SISMEMBER: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly SLAVEOF: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly SLOWLOG: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly SMEMBERS: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly SMOVE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly SORT: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly SPOP: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly SRANDMEMBER: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly SREM: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly STRLEN: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly SUBSCRIBE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly SUNION: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly SUNIONSTORE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly SYNC: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly TIME: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly TTL: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly TYPE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly UNSUBSCRIBE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly UNWATCH: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly WATCH: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly ZADD: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly ZCARD: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly ZCOUNT: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly ZINCRBY: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly ZINTERSTORE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly ZRANGE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly ZRANGEBYSCORE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly ZRANK: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly ZREM: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly ZREMRANGEBYRANK: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly ZREMRANGEBYSCORE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly ZREVRANGE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly ZREVRANGEBYSCORE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly ZREVRANK: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly ZSCORE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly ZUNIONSTORE: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly SCAN: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly SSCAN: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly HSCAN: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly ZSCAN: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        readonly UNKNOWN: org.springframework.data.redis.core.RedisCommand
                        // @ts-ignore
                        values(): org.springframework.data.redis.core.RedisCommand[]
                        // @ts-ignore
                        valueOf(name: java.lang.String | string): org.springframework.data.redis.core.RedisCommand
                        /**
                         * @return {#literal true} if the command requires arguments
                         */
                        // @ts-ignore
                        requiresArguments(): boolean
                        /**
                         * @return {#literal true} if an exact number of arguments is expected.
                         */
                        // @ts-ignore
                        requiresExactNumberOfArguments(): boolean
                        /**
                         * @return {#literal true} if the command triggers a read operation
                         */
                        // @ts-ignore
                        isRead(): boolean
                        /**
                         * @return {#literal true} if the command triggers a write operation
                         */
                        // @ts-ignore
                        isWrite(): boolean
                        /**
                         * @return {#literal true} if values are read but not written
                         */
                        // @ts-ignore
                        isReadonly(): boolean
                        /**
                         * {@link String#equalsIgnoreCase(String)} compare the given string representation of {@literal command} against the
                         * {@link #toString()} representation of the command as well as its given {@link #alias}.
                         * @param command
                         * @return true if positive match.
                         */
                        // @ts-ignore
                        isRepresentedBy(command: java.lang.String | string): boolean
                        /**
                         * Validates given argument count against expected ones.
                         * @param nrArguments
                         * @exception IllegalArgumentException in case argument count does not match expected.
                         */
                        // @ts-ignore
                        validateArgumentCount(nrArguments: number /*int*/): void
                        /**
                         * Returns the command represented by the given {@code key}. Returns {@link #UNKNOWN} if no matching command could be
                         * found.
                         * @param key
                         * @return 
                         */
                        // @ts-ignore
                        failsafeCommandLookup(key: java.lang.String | string): org.springframework.data.redis.core.RedisCommand
                    }
                }
            }
        }
    }
}
