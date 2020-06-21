declare namespace org {
    namespace apache {
        namespace coyote {
            namespace http11 {
                /**
                 * HTTP/1.1 protocol implementation using NIO2.
                 */
                // @ts-ignore
                class Http11Nio2Protocol extends org.apache.coyote.http11.AbstractHttp11JsseProtocol<org.apache.tomcat.util.net.Nio2Channel> {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    getLog(): org.apache.juli.logging.Log
                    // @ts-ignore
                    getNamePrefix(): string
                }
            }
        }
    }
}
