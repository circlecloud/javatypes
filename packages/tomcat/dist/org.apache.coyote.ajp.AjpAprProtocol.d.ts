declare namespace org {
    namespace apache {
        namespace coyote {
            namespace ajp {
                /**
                 * This the APR/native based protocol handler implementation for AJP.
                 */
                // @ts-ignore
                class AjpAprProtocol extends org.apache.coyote.ajp.AbstractAjpProtocol<java.lang.Long | number> {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    getLog(): org.apache.juli.logging.Log
                    // @ts-ignore
                    public isAprRequired(): boolean
                    // @ts-ignore
                    public getPollTime(): number /*int*/
                    // @ts-ignore
                    public setPollTime(pollTime: number /*int*/): void
                    // @ts-ignore
                    getNamePrefix(): string
                }
            }
        }
    }
}
