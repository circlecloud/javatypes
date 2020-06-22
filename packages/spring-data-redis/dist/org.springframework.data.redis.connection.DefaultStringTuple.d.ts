declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Default implementation for {@link StringTuple} interface.
                     * @author Costin Leau
                     */
                    // @ts-ignore
                    class DefaultStringTuple extends org.springframework.data.redis.connection.DefaultTuple implements org.springframework.data.redis.connection.StringRedisConnection.StringTuple {
                        /**
                         * Constructs a new <code>DefaultStringTuple</code> instance.
                         * @param value
                         * @param score
                         */
                        // @ts-ignore
                        constructor(value: number /*byte*/[], valueAsString: java.lang.String | string, score: java.lang.Double | number)
                        /**
                         * Constructs a new <code>DefaultStringTuple</code> instance.
                         * @param tuple
                         * @param valueAsString
                         */
                        // @ts-ignore
                        constructor(tuple: org.springframework.data.redis.connection.RedisZSetCommands.Tuple, valueAsString: java.lang.String | string)
                        // @ts-ignore
                        public getValueAsString(): string
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
