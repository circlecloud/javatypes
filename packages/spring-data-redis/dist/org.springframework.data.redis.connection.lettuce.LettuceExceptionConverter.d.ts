declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace lettuce {
                        /**
                         * Converts Lettuce Exceptions to {@link DataAccessException}s
                         * @author Jennifer Hickey
                         * @author Thomas Darimont
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        class LettuceExceptionConverter extends java.lang.Object {
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
