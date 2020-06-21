declare namespace org {
    namespace apache {
        namespace catalina {
            namespace valves {
                /**
                 * Concrete implementation of <code>RequestFilterValve</code> that filters
                 * based on the remote client's host name optionally combined with the
                 * server connector port number.
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                class RemoteHostValve extends org.apache.catalina.valves.RequestFilterValve {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public invoke(request: org.apache.catalina.connector.Request, response: org.apache.catalina.connector.Response): void
                    // @ts-ignore
                    getLog(): org.apache.juli.logging.Log
                }
            }
        }
    }
}
