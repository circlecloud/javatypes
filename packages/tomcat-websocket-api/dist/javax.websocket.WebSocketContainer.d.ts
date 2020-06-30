declare namespace javax {
    namespace websocket {
        // @ts-ignore
        interface WebSocketContainer {
            /**
             * Get the default timeout for sending a message asynchronously.
             * @return The current default timeout in milliseconds. A non-positive value
             *          means an infinite timeout.
             */
            // @ts-ignore
            getDefaultAsyncSendTimeout(): number /*long*/
            /**
             * Set the default timeout for sending a message asynchronously.
             * @param timeout The new default timeout in milliseconds. A non-positive
             *                 value means an infinite timeout.
             */
            // @ts-ignore
            setAsyncSendTimeout(timeout: number /*long*/): void
            // @ts-ignore
            connectToServer(endpoint: java.lang.Object | any, path: java.net.URI): javax.websocket.Session
            // @ts-ignore
            connectToServer(annotatedEndpointClass: java.lang.Class<any>, path: java.net.URI): javax.websocket.Session
            /**
             * Creates a new connection to the WebSocket.
             * @param endpoint
             *             The endpoint instance that will handle responses from the
             *             server
             * @param clientEndpointConfiguration
             *             Used to configure the new connection
             * @param path
             *             The full URL of the WebSocket endpoint to connect to
             * @return The WebSocket session for the connection
             * @throws DeploymentException  If the connection cannot be established
             * @throws IOException If an I/O occurred while trying to establish the
             *                      connection
             */
            // @ts-ignore
            connectToServer(endpoint: javax.websocket.Endpoint, clientEndpointConfiguration: javax.websocket.ClientEndpointConfig, path: java.net.URI): javax.websocket.Session
            /**
             * Creates a new connection to the WebSocket.
             * @param endpoint
             *             An instance of this class will be created to handle responses
             *             from the server
             * @param clientEndpointConfiguration
             *             Used to configure the new connection
             * @param path
             *             The full URL of the WebSocket endpoint to connect to
             * @return The WebSocket session for the connection
             * @throws DeploymentException  If the connection cannot be established
             * @throws IOException If an I/O occurred while trying to establish the
             *                      connection
             */
            // @ts-ignore
            connectToServer(endpoint: java.lang.Class<any>, clientEndpointConfiguration: javax.websocket.ClientEndpointConfig, path: java.net.URI): javax.websocket.Session
            /**
             * Get the current default session idle timeout.
             * @return The current default session idle timeout in milliseconds. Zero or
             *          negative values indicate an infinite timeout.
             */
            // @ts-ignore
            getDefaultMaxSessionIdleTimeout(): number /*long*/
            /**
             * Set the default session idle timeout.
             * @param timeout The new default session idle timeout in milliseconds. Zero
             *                 or negative values indicate an infinite timeout.
             */
            // @ts-ignore
            setDefaultMaxSessionIdleTimeout(timeout: number /*long*/): void
            /**
             * Get the default maximum buffer size for binary messages.
             * @return The current default maximum buffer size in bytes
             */
            // @ts-ignore
            getDefaultMaxBinaryMessageBufferSize(): number /*int*/
            /**
             * Set the default maximum buffer size for binary messages.
             * @param max The new default maximum buffer size in bytes
             */
            // @ts-ignore
            setDefaultMaxBinaryMessageBufferSize(max: number /*int*/): void
            /**
             * Get the default maximum buffer size for text messages.
             * @return The current default maximum buffer size in characters
             */
            // @ts-ignore
            getDefaultMaxTextMessageBufferSize(): number /*int*/
            /**
             * Set the default maximum buffer size for text messages.
             * @param max The new default maximum buffer size in characters
             */
            // @ts-ignore
            setDefaultMaxTextMessageBufferSize(max: number /*int*/): void
            /**
             * Get the installed extensions.
             * @return The set of extensions that are supported by this WebSocket
             *          implementation.
             */
            // @ts-ignore
            getInstalledExtensions(): Array<javax.websocket.Extension>
        }
    }
}
