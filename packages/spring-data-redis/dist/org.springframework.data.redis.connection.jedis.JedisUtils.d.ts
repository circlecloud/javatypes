declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace jedis {
                        /**
                         * Helper class featuring methods for Jedis connection handling, providing support for exception translation. Deprecated
                         * in favor of {@link JedisConverters}
                         * @author Costin Leau
                         * @author Jennifer Hickey
                         */
                        // @ts-ignore
                        abstract class JedisUtils extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            /**
                             * Converts the given, native Jedis exception to Spring's DAO hierarchy.
                             * @param ex Jedis exception
                             * @return converted exception
                             */
                            // @ts-ignore
                            public static convertJedisAccessException(ex: JedisException): DataAccessException
                            /**
                             * Converts the given, native, runtime Jedis exception to Spring's DAO hierarchy.
                             * @param ex Jedis runtime/unchecked exception
                             * @return converted exception
                             */
                            // @ts-ignore
                            public static convertJedisAccessException(ex: java.lang.RuntimeException): DataAccessException
                        }
                    }
                }
            }
        }
    }
}
