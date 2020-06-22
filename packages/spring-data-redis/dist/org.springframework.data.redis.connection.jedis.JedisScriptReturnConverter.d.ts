declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace jedis {
                        /**
                         * Converts the value returned by Jedis script eval to the expected {@link ReturnType}
                         * @author Jennifer Hickey
                         */
                        // @ts-ignore
                        class JedisScriptReturnConverter extends java.lang.Object {
                            // @ts-ignore
                            constructor(returnType: org.springframework.data.redis.connection.ReturnType)
                            // @ts-ignore
                            public convert(result: java.lang.Object | any): any
                        }
                    }
                }
            }
        }
    }
}
