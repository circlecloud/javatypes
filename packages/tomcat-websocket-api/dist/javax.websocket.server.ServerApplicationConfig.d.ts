declare namespace javax {
    namespace websocket {
        namespace server {
            /**
             * Applications may provide an implementation of this interface to filter the
             * discovered WebSocket endpoints that are deployed. Implementations of this
             * class will be discovered via an ServletContainerInitializer scan.
             */
            // @ts-ignore
            interface ServerApplicationConfig {
                /**
                 * Enables applications to filter the discovered implementations of
                 * {@link ServerEndpointConfig}.
                 * @param scanned   The {#link Endpoint} implementations found in the
                 *                   application
                 * @return The set of configurations for the endpoint the application
                 *               wishes to deploy
                 */
                // @ts-ignore
                getEndpointConfigs(scanned: java.util.Set<java.lang.Class<any>> | Array<java.lang.Class<any>>): Array<javax.websocket.server.ServerEndpointConfig>
                /**
                 * Enables applications to filter the discovered classes annotated with
                 * {@link ServerEndpoint}.
                 * @param scanned   The POJOs annotated with {#link ServerEndpoint} found in
                 *                   the application
                 * @return The set of POJOs the application wishes to deploy
                 */
                // @ts-ignore
                getAnnotatedEndpointClasses(scanned: java.util.Set<java.lang.Class<any>> | Array<java.lang.Class<any>>): Array<java.lang.Class<any>>
            }
        }
    }
}
