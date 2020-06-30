declare namespace javax {
    namespace websocket {
        // @ts-ignore
        interface Session extends java.io.Closeable {
            /**
             * Get the container that created this session.
             * @return the container that created this session.
             */
            // @ts-ignore
            getContainer(): javax.websocket.WebSocketContainer
            /**
             * Registers a {@link MessageHandler} for incoming messages. Only one
             * {@link MessageHandler} may be registered for each message type (text,
             * binary, pong). The message type will be derived at runtime from the
             * provided {@link MessageHandler} instance. It is not always possible to do
             * this so it is better to use
             * {@link #addMessageHandler(Class, javax.websocket.MessageHandler.Partial)}
             * or
             * {@link #addMessageHandler(Class, javax.websocket.MessageHandler.Whole)}.
             * @param handler   The message handler for a incoming message
             * @throws IllegalStateException  If a message handler has already been
             *                                 registered for the associated message type
             */
            // @ts-ignore
            addMessageHandler(handler: javax.websocket.MessageHandler): void
            // @ts-ignore
            getMessageHandlers(): Array<javax.websocket.MessageHandler>
            // @ts-ignore
            removeMessageHandler(listener: javax.websocket.MessageHandler): void
            // @ts-ignore
            getProtocolVersion(): string
            // @ts-ignore
            getNegotiatedSubprotocol(): string
            // @ts-ignore
            getNegotiatedExtensions(): Array<javax.websocket.Extension>
            // @ts-ignore
            isSecure(): boolean
            // @ts-ignore
            isOpen(): boolean
            /**
             * Get the idle timeout for this session.
             * @return The current idle timeout for this session in milliseconds. Zero
             *          or negative values indicate an infinite timeout.
             */
            // @ts-ignore
            getMaxIdleTimeout(): number /*long*/
            /**
             * Set the idle timeout for this session.
             * @param timeout The new idle timeout for this session in milliseconds.
             *                 Zero or negative values indicate an infinite timeout.
             */
            // @ts-ignore
            setMaxIdleTimeout(timeout: number /*long*/): void
            /**
             * Set the current maximum buffer size for binary messages.
             * @param max The new maximum buffer size in bytes
             */
            // @ts-ignore
            setMaxBinaryMessageBufferSize(max: number /*int*/): void
            /**
             * Get the current maximum buffer size for binary messages.
             * @return The current maximum buffer size in bytes
             */
            // @ts-ignore
            getMaxBinaryMessageBufferSize(): number /*int*/
            /**
             * Set the maximum buffer size for text messages.
             * @param max The new maximum buffer size in characters.
             */
            // @ts-ignore
            setMaxTextMessageBufferSize(max: number /*int*/): void
            /**
             * Get the maximum buffer size for text messages.
             * @return The maximum buffer size in characters.
             */
            // @ts-ignore
            getMaxTextMessageBufferSize(): number /*int*/
            // @ts-ignore
            getAsyncRemote(): javax.websocket.RemoteEndpoint.Async
            // @ts-ignore
            getBasicRemote(): javax.websocket.RemoteEndpoint.Basic
            /**
             * Provides a unique identifier for the session. This identifier should not
             * be relied upon to be generated from a secure random source.
             * @return A unique identifier for the session.
             */
            // @ts-ignore
            getId(): string
            /**
             * Close the connection to the remote end point using the code
             * {@link javax.websocket.CloseReason.CloseCodes#NORMAL_CLOSURE} and an
             * empty reason phrase.
             * @throws IOException if an I/O error occurs while the WebSocket session is
             *                      being closed.
             */
            // @ts-ignore
            close(): void
            /**
             * Close the connection to the remote end point using the specified code
             * and reason phrase.
             * @param closeReason The reason the WebSocket session is being closed.
             * @throws IOException if an I/O error occurs while the WebSocket session is
             *                      being closed.
             */
            // @ts-ignore
            close(closeReason: javax.websocket.CloseReason): void
            // @ts-ignore
            getRequestURI(): java.net.URI
            // @ts-ignore
            getRequestParameterMap(): java.util.Map<java.lang.String | string, java.util.List<java.lang.String | string> | Array<java.lang.String | string>>
            // @ts-ignore
            getQueryString(): string
            // @ts-ignore
            getPathParameters(): java.util.Map<java.lang.String | string, java.lang.String | string>
            // @ts-ignore
            getUserProperties(): java.util.Map<java.lang.String | string, java.lang.Object | any>
            // @ts-ignore
            getUserPrincipal(): java.security.Principal
            /**
             * Obtain the set of open sessions associated with the same local endpoint
             * as this session.
             * @return The set of currently open sessions for the local endpoint that
             *  this session is associated with.
             */
            // @ts-ignore
            getOpenSessions(): Array<javax.websocket.Session>
            /**
             * Registers a {@link MessageHandler} for partial incoming messages. Only
             * one {@link MessageHandler} may be registered for each message type (text
             * or binary, pong messages are never presented as partial messages).
             * @param <T>       The type of message that the given handler is intended
             *                   for
             * @param clazz     The Class that implements T
             * @param handler   The message handler for a incoming message
             * @throws IllegalStateException  If a message handler has already been
             *                                 registered for the associated message type
             * @since WebSocket 1.1
             */
            // @ts-ignore
            addMessageHandler<T>(clazz: java.lang.Class<T>, handler: javax.websocket.MessageHandler.Partial<T>): void
            /**
             * Registers a {@link MessageHandler} for whole incoming messages. Only
             * one {@link MessageHandler} may be registered for each message type (text,
             * binary, pong).
             * @param <T>       The type of message that the given handler is intended
             *                   for
             * @param clazz     The Class that implements T
             * @param handler   The message handler for a incoming message
             * @throws IllegalStateException  If a message handler has already been
             *                                 registered for the associated message type
             * @since WebSocket 1.1
             */
            // @ts-ignore
            addMessageHandler<T>(clazz: java.lang.Class<T>, handler: javax.websocket.MessageHandler.Whole<T>): void
        }
    }
}
