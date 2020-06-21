declare namespace org {
    namespace apache {
        namespace coyote {
            /**
             * Adapter. This represents the entry point in a coyote-based servlet container.
             * @author Remy Maucherat
             * @see ProtocolHandler
             */
            // @ts-ignore
            interface Adapter {
                /**
                 * Call the service method, and notify all listeners
                 * @param req The request object
                 * @param res The response object
                 * @exception Exception if an error happens during handling of
                 *    the request. Common errors are:
                 *    <ul><li>IOException if an input/output error occurs and we are
                 *    processing an included servlet (otherwise it is swallowed and
                 *    handled by the top level error handler mechanism)
                 *        <li>ServletException if a servlet throws an exception and
                 *   we are processing an included servlet (otherwise it is swallowed
                 *   and handled by the top level error handler mechanism)
                 *   </ul>
                 *   Tomcat should be able to handle and log any other exception ( including
                 *   runtime exceptions )
                 */
                // @ts-ignore
                service(req: org.apache.coyote.Request, res: org.apache.coyote.Response): void
                /**
                 * Prepare the given request/response for processing. This method requires
                 * that the request object has been populated with the information available
                 * from the HTTP headers.
                 * @param req The request object
                 * @param res The response object
                 * @return <code>true</code> if processing can continue, otherwise
                 *          <code>false</code> in which case an appropriate error will have
                 *          been set on the response
                 * @throws Exception If the processing fails unexpectedly
                 */
                // @ts-ignore
                prepare(req: org.apache.coyote.Request, res: org.apache.coyote.Response): boolean
                // @ts-ignore
                asyncDispatch(req: org.apache.coyote.Request, res: org.apache.coyote.Response, status: org.apache.tomcat.util.net.SocketEvent): boolean
                // @ts-ignore
                log(req: org.apache.coyote.Request, res: org.apache.coyote.Response, time: number /*long*/): void
                /**
                 * Assert that request and response have been recycled. If they have not
                 * then log a warning and force a recycle. This method is called as a safety
                 * check when a processor is being recycled and may be returned to a pool
                 * for reuse.
                 * @param req
                 *             Request
                 * @param res
                 *             Response
                 */
                // @ts-ignore
                checkRecycled(req: org.apache.coyote.Request, res: org.apache.coyote.Response): void
                /**
                 * Provide the name of the domain to use to register MBeans for components
                 * associated with the connector.
                 * @return The MBean domain name
                 */
                // @ts-ignore
                getDomain(): string
            }
        }
    }
}
