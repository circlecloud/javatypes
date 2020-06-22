declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                /**
                 * Fatal exception thrown when the Redis connection fails completely.
                 * @author Mark Pollack
                 */
                // @ts-ignore
                class RedisConnectionFailureException extends DataAccessResourceFailureException {
                    /**
                     * @param msg the detail message.
                     */
                    // @ts-ignore
                    constructor(msg: java.lang.String | string)
                    /**
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
