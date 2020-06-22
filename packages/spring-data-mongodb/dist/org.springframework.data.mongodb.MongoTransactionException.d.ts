declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                /**
                 * A specific {@link ClientSessionException} related to issues with a transaction such as aborted or non existing
                 * transactions.
                 * @author Christoph Strobl
                 * @since 2.1
                 */
                // @ts-ignore
                class MongoTransactionException extends org.springframework.data.mongodb.ClientSessionException {
                    /**
                     * Constructor for {@link MongoTransactionException}.
                     * @param msg the detail message. Must not be {#literal null}.
                     */
                    // @ts-ignore
                    constructor(msg: java.lang.String | string)
                    /**
                     * Constructor for {@link ClientSessionException}.
                     * @param msg the detail message. Can be {#literal null}.
                     * @param cause the root cause. Can be {#literal null}.
                     */
                    // @ts-ignore
                    constructor(msg: java.lang.String | string, cause: java.lang.Throwable | Error)
                }
            }
        }
    }
}
