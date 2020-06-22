declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Interface for the commands supported by Redis.
                     * @author Costin Leau
                     * @author Christoph Strobl
                     */
                    // @ts-ignore
                    interface RedisCommands extends org.springframework.data.redis.connection.RedisKeyCommands, org.springframework.data.redis.connection.RedisStringCommands, org.springframework.data.redis.connection.RedisListCommands, org.springframework.data.redis.connection.RedisSetCommands, org.springframework.data.redis.connection.RedisZSetCommands, org.springframework.data.redis.connection.RedisHashCommands, org.springframework.data.redis.connection.RedisTxCommands, org.springframework.data.redis.connection.RedisPubSubCommands, org.springframework.data.redis.connection.RedisConnectionCommands, org.springframework.data.redis.connection.RedisServerCommands, org.springframework.data.redis.connection.RedisScriptingCommands, org.springframework.data.redis.connection.RedisGeoCommands, org.springframework.data.redis.connection.RedisHyperLogLogCommands {
                        /**
                         * 'Native' or 'raw' execution of the given command along-side the given arguments. The command is executed as is,
                         * with as little 'interpretation' as possible - it is up to the caller to take care of any processing of arguments or
                         * the result.
                         * @param command Command to execute. must not be {#literal null}.
                         * @param args Possible command arguments (may be empty).
                         * @return execution result. Can be {#literal null}.
                         */
                        // @ts-ignore
                        execute(command: java.lang.String | string, ...args: number /*byte*/[][]): any
                    }
                }
            }
        }
    }
}
