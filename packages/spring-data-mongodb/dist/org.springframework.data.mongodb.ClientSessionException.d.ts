declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                /**
                 * {@link NonTransientDataAccessException} specific to MongoDB {@link com.mongodb.session.ClientSession} related data
                 * access failures such as reading data using an already closed session.
                 * @author Christoph Strobl
                 * @since 2.1
                 */
                // @ts-ignore
                class ClientSessionException extends NonTransientDataAccessException {
                    /**
                     * Constructor for {@link ClientSessionException}.
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
