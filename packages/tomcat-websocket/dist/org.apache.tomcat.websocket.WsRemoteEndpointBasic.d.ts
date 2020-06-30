declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace websocket {
                // @ts-ignore
                class WsRemoteEndpointBasic extends org.apache.tomcat.websocket.WsRemoteEndpointBase {
                    // @ts-ignore
                    public sendText(text: java.lang.String | string): void
                    // @ts-ignore
                    public sendBinary(data: java.nio.ByteBuffer): void
                    // @ts-ignore
                    public sendText(fragment: java.lang.String | string, isLast: boolean): void
                    // @ts-ignore
                    public sendBinary(partialByte: java.nio.ByteBuffer, isLast: boolean): void
                    // @ts-ignore
                    public getSendStream(): java.io.OutputStream
                    // @ts-ignore
                    public getSendWriter(): java.io.Writer
                    // @ts-ignore
                    public sendObject(o: java.lang.Object | any): void
                }
            }
        }
    }
}
