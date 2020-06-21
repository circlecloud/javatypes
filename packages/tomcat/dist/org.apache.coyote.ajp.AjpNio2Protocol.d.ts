declare namespace org {
    namespace apache {
        namespace coyote {
            namespace ajp {
                /**
                 * This the NIO2 based protocol handler implementation for AJP.
                 */
                // @ts-ignore
                class AjpNio2Protocol extends org.apache.coyote.ajp.AbstractAjpProtocol<org.apache.tomcat.util.net.Nio2Channel> {
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
