declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Represents a data type returned from Redis, currently used to denote the expected return type of Redis scripting
                     * commands
                     * @author Jennifer Hickey
                     * @author Christoph Strobl
                     */
                    // @ts-ignore
                    class ReturnType extends java.lang.Enum<org.springframework.data.redis.connection.ReturnType> {
                        /**
                         * Returned as Boolean
                         */
                        // @ts-ignore
                        public static readonly BOOLEAN: org.springframework.data.redis.connection.ReturnType
                        /**
                         * Returned as {@link Long}
                         */
                        // @ts-ignore
                        public static readonly INTEGER: org.springframework.data.redis.connection.ReturnType
                        /**
                         * Returned as {@link List<Object>}
                         */
                        // @ts-ignore
                        public static readonly MULTI: org.springframework.data.redis.connection.ReturnType
                        /**
                         * Returned as {@literal byte[]}
                         */
                        // @ts-ignore
                        public static readonly STATUS: org.springframework.data.redis.connection.ReturnType
                        /**
                         * Returned as {@literal byte[]}
                         */
                        // @ts-ignore
                        public static readonly VALUE: org.springframework.data.redis.connection.ReturnType
                        // @ts-ignore
                        public static values(): org.springframework.data.redis.connection.ReturnType[]
                        // @ts-ignore
                        public static valueOf(name: java.lang.String | string): org.springframework.data.redis.connection.ReturnType
                        /**
                         * @param javaType can be {#literal null} which translates to {@link ReturnType#STATUS}.
                         * @return never {#literal null}.
                         */
                        // @ts-ignore
                        public static fromJavaType(javaType: java.lang.Class<any>): org.springframework.data.redis.connection.ReturnType
                    }
                }
            }
        }
    }
}
