declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace websocket {
                // @ts-ignore
                class WsRemoteEndpointAsync extends org.apache.tomcat.websocket.WsRemoteEndpointBase {
                    // @ts-ignore
                    public getSendTimeout(): number /*long*/
                    // @ts-ignore
                    public setSendTimeout(timeout: number /*long*/): void
                    // @ts-ignore
                    public sendText(text: java.lang.String | string, completion: SendHandler): void
                    // @ts-ignore
                    public sendText(text: java.lang.String | string): java.util.concurrent.Future<java.lang.Void>
                    // @ts-ignore
                    public sendBinary(data: java.nio.ByteBuffer): java.util.concurrent.Future<java.lang.Void>
                    // @ts-ignore
                    public sendBinary(data: java.nio.ByteBuffer, completion: SendHandler): void
                    // @ts-ignore
                    public sendObject(obj: java.lang.Object | any): java.util.concurrent.Future<java.lang.Void>
                    // @ts-ignore
                    public sendObject(obj: java.lang.Object | any, completion: SendHandler): void
                }
            }
        }
    }
}
