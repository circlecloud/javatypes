declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace websocket {
                // @ts-ignore
                abstract class WsRemoteEndpointBase extends java.lang.Object {
                    // @ts-ignore
                    readonly base: org.apache.tomcat.websocket.WsRemoteEndpointImplBase
                    // @ts-ignore
                    public setBatchingAllowed(batchingAllowed: boolean): void
                    // @ts-ignore
                    public getBatchingAllowed(): boolean
                    // @ts-ignore
                    public flushBatch(): void
                    // @ts-ignore
                    public sendPing(applicationData: java.nio.ByteBuffer): void
                    // @ts-ignore
                    public sendPong(applicationData: java.nio.ByteBuffer): void
                }
            }
        }
    }
}
