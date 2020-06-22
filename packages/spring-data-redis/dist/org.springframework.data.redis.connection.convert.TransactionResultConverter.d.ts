declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace convert {
                        /**
                         * Converts the results of transaction exec using a supplied Queue of {@link FutureResult}s. Converts any Exception
                         * objects returned in the list as well, using the supplied Exception {@link Converter}
                         * @author Jennifer Hickey
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @param <T> The type of {#link FutureResult} of the individual tx operations
                         */
                        // @ts-ignore
                        class TransactionResultConverter<T> extends java.lang.Object {
                            // @ts-ignore
                            constructor(txResults: java.util.Queue<org.springframework.data.redis.connection.FutureResult<T>>, exceptionConverter: object)
                            // @ts-ignore
                            public convert(execResults: java.util.List<java.lang.Object | any> | Array<java.lang.Object | any>): Array<java.lang.Object | any>
                        }
                    }
                }
            }
        }
    }
}
