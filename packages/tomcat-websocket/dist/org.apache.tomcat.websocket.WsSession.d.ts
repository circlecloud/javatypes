declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace websocket {
                // @ts-ignore
                class WsSession extends java.lang.Object {
                    /**
                     * Creates a new WebSocket session for communication between the two
                     * provided end points. The result of {@link Thread#getContextClassLoader()}
                     * at the time this constructor is called will be used when calling
                     * {@link Endpoint#onClose(Session, CloseReason)}.
                     * @param localEndpoint        The end point managed by this code
                     * @param wsRemoteEndpoint     The other / remote endpoint
                     * @param wsWebSocketContainer The container that created this session
                     * @param requestUri           The URI used to connect to this endpoint or
                     *                              <code>null</code> is this is a client session
                     * @param requestParameterMap  The parameters associated with the request
                     *                              that initiated this session or
                     *                              <code>null</code> if this is a client session
                     * @param queryString          The query string associated with the request
                     *                              that initiated this session or
                     *                              <code>null</code> if this is a client session
                     * @param userPrincipal        The principal associated with the request
                     *                              that initiated this session or
                     *                              <code>null</code> if this is a client session
                     * @param httpSessionId        The HTTP session ID associated with the
                     *                              request that initiated this session or
                     *                              <code>null</code> if this is a client session
                     * @param negotiatedExtensions The agreed extensions to use for this session
                     * @param subProtocol          The agreed subprotocol to use for this
                     *                              session
                     * @param pathParameters       The path parameters associated with the
                     *                              request that initiated this session or
                     *                              <code>null</code> if this is a client session
                     * @param secure               Was this session initiated over a secure
                     *                              connection?
                     * @param endpointConfig       The configuration information for the
                     *                              endpoint
                     * @throws DeploymentException if an invalid encode is specified
                     */
                    // @ts-ignore
                    constructor(localEndpoint: Endpoint, wsRemoteEndpoint: org.apache.tomcat.websocket.WsRemoteEndpointImplBase, wsWebSocketContainer: org.apache.tomcat.websocket.WsWebSocketContainer, requestUri: java.net.URI, requestParameterMap: java.util.Map<java.lang.String | string, java.util.List<java.lang.String | string> | Array<java.lang.String | string>>, queryString: java.lang.String | string, userPrincipal: java.security.Principal, httpSessionId: java.lang.String | string, negotiatedExtensions: java.util.List<Extension> | Array<Extension>, subProtocol: java.lang.String | string, pathParameters: java.util.Map<java.lang.String | string, java.lang.String | string>, secure: boolean, endpointConfig: EndpointConfig)
                    // @ts-ignore
                    public getContainer(): WebSocketContainer
                    // @ts-ignore
                    public addMessageHandler(listener: MessageHandler): void
                    // @ts-ignore
                    public addMessageHandler<T>(clazz: java.lang.Class<T>, handler: object): void
                    // @ts-ignore
                    public addMessageHandler<T>(clazz: java.lang.Class<T>, handler: object): void
                    // @ts-ignore
                    public getMessageHandlers(): Array<MessageHandler>
                    // @ts-ignore
                    public removeMessageHandler(listener: MessageHandler): void
                    // @ts-ignore
                    public getProtocolVersion(): string
                    // @ts-ignore
                    public getNegotiatedSubprotocol(): string
                    // @ts-ignore
                    public getNegotiatedExtensions(): Array<Extension>
                    // @ts-ignore
                    public isSecure(): boolean
                    // @ts-ignore
                    public isOpen(): boolean
                    // @ts-ignore
                    public getMaxIdleTimeout(): number /*long*/
                    // @ts-ignore
                    public setMaxIdleTimeout(timeout: number /*long*/): void
                    // @ts-ignore
                    public setMaxBinaryMessageBufferSize(max: number /*int*/): void
                    // @ts-ignore
                    public getMaxBinaryMessageBufferSize(): number /*int*/
                    // @ts-ignore
                    public setMaxTextMessageBufferSize(max: number /*int*/): void
                    // @ts-ignore
                    public getMaxTextMessageBufferSize(): number /*int*/
                    // @ts-ignore
                    public getOpenSessions(): Array<Session>
                    // @ts-ignore
                    public getAsyncRemote(): RemoteEndpoint.Async
                    // @ts-ignore
                    public getBasicRemote(): RemoteEndpoint.Basic
                    // @ts-ignore
                    public close(): void
                    // @ts-ignore
                    public close(closeReason: CloseReason): void
                    /**
                     * WebSocket 1.0. Section 2.1.5.
                     * Need internal close method as spec requires that the local endpoint
                     * receives a 1006 on timeout.
                     * @param closeReasonMessage The close reason to pass to the remote endpoint
                     * @param closeReasonLocal   The close reason to pass to the local endpoint
                     */
                    // @ts-ignore
                    public doClose(closeReasonMessage: CloseReason, closeReasonLocal: CloseReason): void
                    /**
                     * WebSocket 1.0. Section 2.1.5.
                     * Need internal close method as spec requires that the local endpoint
                     * receives a 1006 on timeout.
                     * @param closeReasonMessage The close reason to pass to the remote endpoint
                     * @param closeReasonLocal   The close reason to pass to the local endpoint
                     * @param closeSocket        Should the socket be closed immediately rather than waiting
                     *                            for the server to respond
                     */
                    // @ts-ignore
                    public doClose(closeReasonMessage: CloseReason, closeReasonLocal: CloseReason, closeSocket: boolean): void
                    /**
                     * Called when a close message is received. Should only ever happen once.
                     * Also called after a protocol error when the ProtocolHandler needs to
                     * force the closing of the connection.
                     * @param closeReason The reason contained within the received close
                     *                     message.
                     */
                    // @ts-ignore
                    public onClose(closeReason: CloseReason): void
                    /**
                     * Use protected so unit tests can access this method directly.
                     * @param msg The message
                     * @param reason The reason
                     */
                    // @ts-ignore
                    static appendCloseReasonWithTruncation(msg: java.nio.ByteBuffer, reason: java.lang.String | string): void
                    /**
                     * Make the session aware of a {@link FutureToSendHandler} that will need to
                     * be forcibly closed if the session closes before the
                     * {@link FutureToSendHandler} completes.
                     * @param f2sh The handler
                     */
                    // @ts-ignore
                    registerFuture(f2sh: org.apache.tomcat.websocket.FutureToSendHandler): void
                    /**
                     * Remove a {@link FutureToSendHandler} from the set of tracked instances.
                     * @param f2sh The handler
                     */
                    // @ts-ignore
                    unregisterFuture(f2sh: org.apache.tomcat.websocket.FutureToSendHandler): void
                    // @ts-ignore
                    public getRequestURI(): java.net.URI
                    // @ts-ignore
                    public getRequestParameterMap(): java.util.Map<java.lang.String | string, java.util.List<java.lang.String | string> | Array<java.lang.String | string>>
                    // @ts-ignore
                    public getQueryString(): string
                    // @ts-ignore
                    public getUserPrincipal(): java.security.Principal
                    // @ts-ignore
                    public getPathParameters(): java.util.Map<java.lang.String | string, java.lang.String | string>
                    // @ts-ignore
                    public getId(): string
                    // @ts-ignore
                    public getUserProperties(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    // @ts-ignore
                    public getLocal(): Endpoint
                    // @ts-ignore
                    public getHttpSessionId(): string
                    // @ts-ignore
                    getTextMessageHandler(): MessageHandler
                    // @ts-ignore
                    getBinaryMessageHandler(): MessageHandler
                    // @ts-ignore
                    getPongMessageHandler(): object
                    // @ts-ignore
                    updateLastActive(): void
                    // @ts-ignore
                    checkExpiration(): void
                    /**
                     * Suspends the reading of the incoming messages.
                     */
                    // @ts-ignore
                    public suspend(): void
                    /**
                     * Resumes the reading of the incoming messages.
                     */
                    // @ts-ignore
                    public resume(): void
                }
            }
        }
    }
}
