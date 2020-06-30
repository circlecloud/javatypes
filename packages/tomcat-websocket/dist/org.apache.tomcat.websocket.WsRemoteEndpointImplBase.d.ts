declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace websocket {
                // @ts-ignore
                abstract class WsRemoteEndpointImplBase extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    static readonly sm: StringManager
                    // @ts-ignore
                    static readonly SENDRESULT_OK: SendResult
                    // @ts-ignore
                    setTransformation(transformation: org.apache.tomcat.websocket.Transformation): void
                    // @ts-ignore
                    public getSendTimeout(): number /*long*/
                    // @ts-ignore
                    public setSendTimeout(timeout: number /*long*/): void
                    // @ts-ignore
                    public setBatchingAllowed(batchingAllowed: boolean): void
                    // @ts-ignore
                    public getBatchingAllowed(): boolean
                    // @ts-ignore
                    public flushBatch(): void
                    // @ts-ignore
                    public sendBytes(data: java.nio.ByteBuffer): void
                    // @ts-ignore
                    public sendBytesByFuture(data: java.nio.ByteBuffer): java.util.concurrent.Future<java.lang.Void>
                    // @ts-ignore
                    public sendBytesByCompletion(data: java.nio.ByteBuffer, handler: SendHandler): void
                    // @ts-ignore
                    public sendPartialBytes(partialByte: java.nio.ByteBuffer, last: boolean): void
                    // @ts-ignore
                    public sendPing(applicationData: java.nio.ByteBuffer): void
                    // @ts-ignore
                    public sendPong(applicationData: java.nio.ByteBuffer): void
                    // @ts-ignore
                    public sendString(text: java.lang.String | string): void
                    // @ts-ignore
                    public sendStringByFuture(text: java.lang.String | string): java.util.concurrent.Future<java.lang.Void>
                    // @ts-ignore
                    public sendStringByCompletion(text: java.lang.String | string, handler: SendHandler): void
                    // @ts-ignore
                    public sendPartialString(fragment: java.lang.String | string, isLast: boolean): void
                    // @ts-ignore
                    public getSendStream(): java.io.OutputStream
                    // @ts-ignore
                    public getSendWriter(): java.io.Writer
                    // @ts-ignore
                    public sendObject(obj: java.lang.Object | any): void
                    // @ts-ignore
                    public sendObjectByFuture(obj: java.lang.Object | any): java.util.concurrent.Future<java.lang.Void>
                    // @ts-ignore
                    public sendObjectByCompletion(obj: java.lang.Object | any, completion: SendHandler): void
                    // @ts-ignore
                    setSession(wsSession: org.apache.tomcat.websocket.WsSession): void
                    // @ts-ignore
                    setEncoders(endpointConfig: EndpointConfig): void
                    // @ts-ignore
                    public close(): void
                    // @ts-ignore
                    abstract doWrite(handler: SendHandler, blockingWriteTimeoutExpiry: number /*long*/, ...data: java.nio.ByteBuffer[]): void
                    // @ts-ignore
                    abstract isMasked(): boolean
                    // @ts-ignore
                    abstract doClose(): void
                }
            }
        }
    }
}
