declare namespace org {
    namespace apache {
        namespace coyote {
            namespace AbstractProtocol {
                // @ts-ignore
                class RecycledProcessors extends org.apache.tomcat.util.collections.SynchronizedStack<org.apache.coyote.Processor> {
                    // @ts-ignore
                    constructor(handler: org.apache.coyote.AbstractProtocol.ConnectionHandler<any>)
                    // @ts-ignore
                    readonly size: java.util.concurrent.atomic.AtomicInteger
                    // @ts-ignore
                    public push(processor: org.apache.coyote.Processor): boolean
                    // @ts-ignore
                    public pop(): org.apache.coyote.Processor
                    // @ts-ignore
                    public clear(): void
                }
            }
        }
    }
}
