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
                class Http11NioProtocol extends org.apache.coyote.http11.AbstractHttp11JsseProtocol<org.apache.tomcat.util.net.NioChannel> {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    getLog(): org.apache.juli.logging.Log
                    // @ts-ignore
                    public setPollerThreadCount(count: number /*int*/): void
                    // @ts-ignore
                    public getPollerThreadCount(): number /*int*/
                    // @ts-ignore
                    public setSelectorTimeout(timeout: number /*long*/): void
                    // @ts-ignore
                    public getSelectorTimeout(): number /*long*/
                    // @ts-ignore
                    public setPollerThreadPriority(threadPriority: number /*int*/): void
                    // @ts-ignore
                    public getPollerThreadPriority(): number /*int*/
                    // @ts-ignore
                    getNamePrefix(): string
                }
            }
        }
    }
}
