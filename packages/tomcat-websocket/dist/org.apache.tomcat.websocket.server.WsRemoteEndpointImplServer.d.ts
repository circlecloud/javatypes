declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace websocket {
                namespace server {
                    /**
                     * This is the server side {@link javax.websocket.RemoteEndpoint} implementation
                     * - i.e. what the server uses to send data to the client.
                     */
                    // @ts-ignore
                    class WsRemoteEndpointImplServer extends org.apache.tomcat.websocket.WsRemoteEndpointImplBase {
                        // @ts-ignore
                        constructor(socketWrapper: object, serverContainer: org.apache.tomcat.websocket.server.WsServerContainer)
                        // @ts-ignore
                        isMasked(): boolean
                        // @ts-ignore
                        doWrite(handler: SendHandler, blockingWriteTimeoutExpiry: number /*long*/, ...buffers: java.nio.ByteBuffer[]): void
                        // @ts-ignore
                        public onWritePossible(useDispatch: boolean): void
                        // @ts-ignore
                        doClose(): void
                        // @ts-ignore
                        getTimeoutExpiry(): number /*long*/
                        // @ts-ignore
                        onTimeout(useDispatch: boolean): void
                        // @ts-ignore
                        setTransformation(transformation: org.apache.tomcat.websocket.Transformation): void
                    }
                }
            }
        }
    }
}
