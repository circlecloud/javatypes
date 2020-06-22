declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace jedis {
                        /**
                         * Converts Exceptions thrown from Jedis to {@link DataAccessException}s
                         * @author Jennifer Hickey
                         * @author Thomas Darimont
                         * @author Christoph Strobl
                         */
                        // @ts-ignore
                        class JedisExceptionConverter extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public convert(ex: java.lang.Exception): DataAccessException
                        }
                    }
                }
            }
        }
    }
}
