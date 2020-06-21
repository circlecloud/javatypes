declare namespace javax {
    namespace xml {
        namespace ws {
            namespace http {
                /**
                 * The <code>HTTPException</code> exception represents a
                 * XML/HTTP fault.
                 * <p>Since there is no standard format for faults or exceptions
                 * in XML/HTTP messaging, only the HTTP status code is captured.
                 * @since JAX-WS 2.0
                 */
                // @ts-ignore
                class HTTPException extends javax.xml.ws.ProtocolException {
                    /**
                     * Constructor for the HTTPException
                     * @param statusCode   <code>int</code> for the HTTP status code
                     */
                    // @ts-ignore
                    constructor(statusCode: number /*int*/)
                    /**
                     * Gets the HTTP status code.
                     * @return HTTP status code
                     */
                    // @ts-ignore
                    getStatusCode(): number /*int*/
                }
            }
        }
    }
}
