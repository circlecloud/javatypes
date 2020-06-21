declare namespace org {
    namespace apache {
        namespace coyote {
            namespace ajp {
                /**
                 * This the NIO based protocol handler implementation for AJP.
                 */
                // @ts-ignore
                class AjpNioProtocol extends org.apache.coyote.ajp.AbstractAjpProtocol<org.apache.tomcat.util.net.NioChannel> {
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
