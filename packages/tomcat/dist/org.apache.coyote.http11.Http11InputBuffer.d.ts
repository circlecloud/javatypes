declare namespace org {
    namespace apache {
        namespace coyote {
            namespace http11 {
                /**
                 * InputBuffer for HTTP that provides request header parsing as well as transfer
                 * encoding.
                 */
                // @ts-ignore
                class Http11InputBuffer extends java.lang.Object implements org.apache.coyote.InputBuffer, org.apache.tomcat.util.net.ApplicationBufferHandler {
                    // @ts-ignore
                    constructor(request: org.apache.coyote.Request, headerBufferSize: number /*int*/, rejectIllegalHeaderName: boolean, httpParser: org.apache.tomcat.util.http.parser.HttpParser)
                    // @ts-ignore
                    public doRead(handler: org.apache.tomcat.util.net.ApplicationBufferHandler): number /*int*/
                    // @ts-ignore
                    public setByteBuffer(buffer: java.nio.ByteBuffer): void
                    // @ts-ignore
                    public getByteBuffer(): java.nio.ByteBuffer
                    // @ts-ignore
                    public expand(size: number /*int*/): void
                }
            }
        }
    }
}
