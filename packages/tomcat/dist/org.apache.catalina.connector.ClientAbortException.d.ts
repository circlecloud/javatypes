declare namespace org {
    namespace apache {
        namespace catalina {
            namespace connector {
                /**
                 * Wrap an IOException identifying it as being caused by an abort
                 * of a request by a remote client.
                 * @author Glenn L. Nielsen
                 */
                // @ts-ignore
                class ClientAbortException extends java.io.IOException {
                    /**
                     * Construct a new ClientAbortException with no other information.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Construct a new ClientAbortException for the specified message.
                     * @param message Message describing this exception
                     */
                    // @ts-ignore
                    constructor(message: java.lang.String | string)
                    /**
                     * Construct a new ClientAbortException for the specified throwable.
                     * @param throwable Throwable that caused this exception
                     */
                    // @ts-ignore
                    constructor(throwable: java.lang.Throwable | Error)
                    /**
                     * Construct a new ClientAbortException for the specified message
                     * and throwable.
                     * @param message Message describing this exception
                     * @param throwable Throwable that caused this exception
                     */
                    // @ts-ignore
                    constructor(message: java.lang.String | string, throwable: java.lang.Throwable | Error)
                }
            }
        }
    }
}
