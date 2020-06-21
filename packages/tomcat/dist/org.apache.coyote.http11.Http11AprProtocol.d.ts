declare namespace org {
    namespace apache {
        namespace coyote {
            namespace http11 {
                /**
                 * Abstract the protocol implementation, including threading, etc.
                 * Processor is single threaded and specific to stream-based protocols,
                 * will not fit Jk protocols like JNI.
                 * @author Remy Maucherat
                 * @author Costin Manolache
                 */
                // @ts-ignore
                class Http11AprProtocol extends org.apache.coyote.http11.AbstractHttp11Protocol<java.lang.Long | number> {
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
                    public getSendfileSize(): number /*int*/
                    // @ts-ignore
                    public setSendfileSize(sendfileSize: number /*int*/): void
                    // @ts-ignore
                    public getDeferAccept(): boolean
                    // @ts-ignore
                    public setDeferAccept(deferAccept: boolean): void
                    // @ts-ignore
                    getNamePrefix(): string
                }
            }
        }
    }
}
