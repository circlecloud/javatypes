declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace websocket {
                // @ts-ignore
                class WsRemoteEndpointImplClient extends org.apache.tomcat.websocket.WsRemoteEndpointImplBase {
                    // @ts-ignore
                    constructor(channel: org.apache.tomcat.websocket.AsyncChannelWrapper)
                    // @ts-ignore
                    isMasked(): boolean
                    // @ts-ignore
                    doWrite(handler: SendHandler, blockingWriteTimeoutExpiry: number /*long*/, ...data: java.nio.ByteBuffer[]): void
                    // @ts-ignore
                    doClose(): void
                }
            }
        }
    }
}
