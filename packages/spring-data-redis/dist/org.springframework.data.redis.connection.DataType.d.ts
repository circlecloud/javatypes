declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Enumeration of the Redis data types.
                     * @author Costin Leau
                     */
                    // @ts-ignore
                    class DataType extends java.lang.Enum<org.springframework.data.redis.connection.DataType> {
                        // @ts-ignore
                        readonly NONE: org.springframework.data.redis.connection.DataType
                        // @ts-ignore
                        readonly STRING: org.springframework.data.redis.connection.DataType
                        // @ts-ignore
                        readonly LIST: org.springframework.data.redis.connection.DataType
                        // @ts-ignore
                        readonly SET: org.springframework.data.redis.connection.DataType
                        // @ts-ignore
                        readonly ZSET: org.springframework.data.redis.connection.DataType
                        // @ts-ignore
                        readonly HASH: org.springframework.data.redis.connection.DataType
                        // @ts-ignore
                        values(): org.springframework.data.redis.connection.DataType[]
                        // @ts-ignore
                        valueOf(name: java.lang.String | string): org.springframework.data.redis.connection.DataType
                        /**
                         * Returns the code associated with the current enum.
                         * @return code of this enum
                         */
                        // @ts-ignore
                        code(): string
                        /**
                         * Utility method for converting an enum code to an actual enum.
                         * @param code enum code
                         * @return actual enum corresponding to the given code
                         */
                        // @ts-ignore
                        fromCode(code: java.lang.String | string): org.springframework.data.redis.connection.DataType
                    }
                }
            }
        }
    }
}
