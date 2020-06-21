declare namespace org {
    namespace apache {
        namespace catalina {
            /**
             * Intended for use by a {@link Valve} to indicate that the {@link Valve}
             * provides access logging. It is used by the Tomcat internals to identify a
             * Valve that logs access requests so requests that are rejected
             * earlier in the processing chain can still be added to the access log.
             * Implementations of this interface should be robust against the provided
             * {@link Request} and {@link Response} objects being null, having null
             * attributes or any other 'oddness' that may result from attempting to log
             * a request that was almost certainly rejected because it was mal-formed.
             */
            // @ts-ignore
            interface AccessLog {
                /**
                 * Name of request attribute used to override the remote address recorded by
                 * the AccessLog.
                 */
                // @ts-ignore
                readonly REMOTE_ADDR_ATTRIBUTE: java.lang.String | string
                /**
                 * Name of request attribute used to override remote host name recorded by
                 * the AccessLog.
                 */
                // @ts-ignore
                readonly REMOTE_HOST_ATTRIBUTE: java.lang.String | string
                /**
                 * Name of request attribute used to override the protocol recorded by the
                 * AccessLog.
                 */
                // @ts-ignore
                readonly PROTOCOL_ATTRIBUTE: java.lang.String | string
                /**
                 * Name of request attribute used to override the server port recorded by
                 * the AccessLog.
                 */
                // @ts-ignore
                readonly SERVER_PORT_ATTRIBUTE: java.lang.String | string
                /**
                 * Add the request/response to the access log using the specified processing
                 * time.
                 * @param request   Request (associated with the response) to log
                 * @param response  Response (associated with the request) to log
                 * @param time      Time taken to process the request/response in
                 *                   milliseconds (use 0 if not known)
                 */
                // @ts-ignore
                log(request: org.apache.catalina.connector.Request, response: org.apache.catalina.connector.Response, time: number /*long*/): void
                /**
                 * Should this valve set request attributes for IP address, hostname,
                 * protocol and port used for the request? This are typically used in
                 * conjunction with the {@link org.apache.catalina.valves.AccessLogValve}
                 * which will otherwise log the original values.
                 * The attributes set are:
                 * <ul>
                 * <li>org.apache.catalina.RemoteAddr</li>
                 * <li>org.apache.catalina.RemoteHost</li>
                 * <li>org.apache.catalina.Protocol</li>
                 * <li>org.apache.catalina.ServerPost</li>
                 * </ul>
                 * @param requestAttributesEnabled  <code>true</code> causes the attributes
                 *                                   to be set, <code>false</code> disables
                 *                                   the setting of the attributes.
                 */
                // @ts-ignore
                setRequestAttributesEnabled(requestAttributesEnabled: boolean): void
                /**
                 * @see #setRequestAttributesEnabled(boolean)
                 * @return <code>true</code> if the attributes will be logged, otherwise
                 *          <code>false</code>
                 */
                // @ts-ignore
                getRequestAttributesEnabled(): boolean
            }
        }
    }
}
