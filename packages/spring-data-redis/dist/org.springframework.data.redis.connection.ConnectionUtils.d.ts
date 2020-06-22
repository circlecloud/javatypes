declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Utilities for examining a {@link RedisConnection}
                     * @author Jennifer Hickey
                     * @author Thomas Darimont
                     */
                    // @ts-ignore
                    abstract class ConnectionUtils extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public static isAsync(connectionFactory: org.springframework.data.redis.connection.RedisConnectionFactory): boolean
                        // @ts-ignore
                        public static isLettuce(connectionFactory: org.springframework.data.redis.connection.RedisConnectionFactory): boolean
                        // @ts-ignore
                        public static isJedis(connectionFactory: org.springframework.data.redis.connection.RedisConnectionFactory): boolean
                    }
                }
            }
        }
    }
}
