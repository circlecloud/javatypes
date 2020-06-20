declare namespace org {
    namespace springframework {
        namespace http {
            namespace server {
                /**
                 * Represents a server-side HTTP request.
                 * @author Arjen Poutsma
                 * @author Rossen Stoyanchev
                 * @since 3.0
                 */
                // @ts-ignore
                interface ServerHttpRequest extends org.springframework.http.HttpRequest, org.springframework.http.HttpInputMessage {
                    /**
                     * Return a {@link java.security.Principal} instance containing the name of the
                     * authenticated user.
                     * <p>If the user has not been authenticated, the method returns <code>null</code>.
                     */
                    // @ts-ignore
                    getPrincipal(): java.security.Principal
                    /**
                     * Return the address on which the request was received.
                     */
                    // @ts-ignore
                    getLocalAddress(): java.net.InetSocketAddress
                    /**
                     * Return the address of the remote client.
                     */
                    // @ts-ignore
                    getRemoteAddress(): java.net.InetSocketAddress
                    /**
                     * Return a control that allows putting the request in asynchronous mode so the
                     * response remains open until closed explicitly from the current or another thread.
                     */
                    // @ts-ignore
                    getAsyncRequestControl(response: org.springframework.http.server.ServerHttpResponse): org.springframework.http.server.ServerHttpAsyncRequestControl
                }
            }
        }
    }
}
