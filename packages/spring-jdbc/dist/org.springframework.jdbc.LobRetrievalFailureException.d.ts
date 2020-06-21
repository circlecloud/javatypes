declare namespace org {
    namespace springframework {
        namespace jdbc {
            /**
             * Exception to be thrown when a LOB could not be retrieved.
             * @author Juergen Hoeller
             * @since 1.0.2
             */
            // @ts-ignore
            class LobRetrievalFailureException extends DataRetrievalFailureException {
                /**
                 * Constructor for LobRetrievalFailureException.
                 * @param msg the detail message
                 */
                // @ts-ignore
                constructor(msg: java.lang.String | string)
                /**
                 * Constructor for LobRetrievalFailureException.
                 * @param msg the detail message
                 * @param ex the root cause IOException
                 */
                // @ts-ignore
                constructor(msg: java.lang.String | string, ex: java.io.IOException)
            }
        }
    }
}
