declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Exception thrown when there are issues with a resource pool
                     * @author Jennifer Hickey
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     */
                    // @ts-ignore
                    class PoolException extends NestedRuntimeException {
                        /**
                         * Constructs a new <code>PoolException</code> instance.
                         * @param msg the detail message.
                         */
                        // @ts-ignore
                        constructor(msg: java.lang.String | string)
                        /**
                         * Constructs a new <code>PoolException</code> instance.
                         * @param msg the detail message.
                         * @param cause the nested exception.
                         */
                        // @ts-ignore
                        constructor(msg: java.lang.String | string, cause: java.lang.Throwable | Error)
                    }
                }
            }
        }
    }
}
