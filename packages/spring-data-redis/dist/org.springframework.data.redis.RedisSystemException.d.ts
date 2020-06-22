declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                /**
                 * Exception thrown when we can't classify a Redis exception into one of Spring generic data access exceptions.
                 * @author Costin Leau
                 */
                // @ts-ignore
                class RedisSystemException extends UncategorizedDataAccessException {
                    /**
                     * @param msg the detail message.
                     * @param cause the root cause from the data access API in use.
                     */
                    // @ts-ignore
                    constructor(msg: java.lang.String | string, cause: java.lang.Throwable | Error)
                }
            }
        }
    }
}
