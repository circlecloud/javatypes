declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace websocket {
                namespace server {
                    /**
                     * Provides a per class loader (i.e. per web application) instance of a
                     * ServerContainer. Web application wide defaults may be configured by setting
                     * the following servlet context initialisation parameters to the desired
                     * values.
                     * <ul>
                     * <li>{@link Constants#BINARY_BUFFER_SIZE_SERVLET_CONTEXT_INIT_PARAM}</li>
                     * <li>{@link Constants#TEXT_BUFFER_SIZE_SERVLET_CONTEXT_INIT_PARAM}</li>
                     * </ul>
                     */
                    // @ts-ignore
                    class WsServerContainer extends org.apache.tomcat.websocket.WsWebSocketContainer {
                        /**
                         * Published the provided endpoint implementation at the specified path with
                         * the specified configuration. {@link #WsServerContainer(ServletContext)}
                         * must be called before calling this method.
                         * @param sec   The configuration to use when creating endpoint instances
                         * @throws DeploymentException if the endpoint cannot be published as
                         *          requested
                         */
                        // @ts-ignore
                        public addEndpoint(sec: ServerEndpointConfig): void
                        /**
                         * Until the WebSocket specification provides such a mechanism, this Tomcat
                         * proprietary method is provided to enable applications to programmatically
                         * determine whether or not to upgrade an individual request to WebSocket.
                         * <p>
                         * Note: This method is not used by Tomcat but is used directly by
                         * third-party code and must not be removed.
                         * @param request The request object to be upgraded
                         * @param response The response object to be populated with the result of
                         *                  the upgrade
                         * @param sec The server endpoint to use to process the upgrade request
                         * @param pathParams The path parameters associated with the upgrade request
                         * @throws ServletException If a configuration error prevents the upgrade
                         *          from taking place
                         * @throws IOException If an I/O error occurs during the upgrade process
                         */
                        // @ts-ignore
                        public doUpgrade(request: HttpServletRequest, response: HttpServletResponse, sec: ServerEndpointConfig, pathParams: java.util.Map<java.lang.String | string, java.lang.String | string>): void
                        // @ts-ignore
                        public findMapping(path: java.lang.String | string): org.apache.tomcat.websocket.server.WsMappingResult
                        // @ts-ignore
                        public isEnforceNoAddAfterHandshake(): boolean
                        // @ts-ignore
                        public setEnforceNoAddAfterHandshake(enforceNoAddAfterHandshake: boolean): void
                        // @ts-ignore
                        getTimeout(): org.apache.tomcat.websocket.server.WsWriteTimeout
                        /**
                         * {@inheritDoc}
                         * Overridden to make it visible to other classes in this package.
                         */
                        // @ts-ignore
                        registerSession(key: java.lang.Object | any, wsSession: org.apache.tomcat.websocket.WsSession): void
                        /**
                         * {@inheritDoc}
                         * Overridden to make it visible to other classes in this package.
                         */
                        // @ts-ignore
                        unregisterSession(key: java.lang.Object | any, wsSession: org.apache.tomcat.websocket.WsSession): void
                        // @ts-ignore
                        public closeAuthenticatedSession(httpSessionId: java.lang.String | string): void
                    }
                }
            }
        }
    }
}
