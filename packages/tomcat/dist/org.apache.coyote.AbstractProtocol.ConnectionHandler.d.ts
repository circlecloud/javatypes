declare namespace org {
    namespace apache {
        namespace coyote {
            namespace AbstractProtocol {
                // @ts-ignore
                class ConnectionHandler<S> extends java.lang.Object implements org.apache.tomcat.util.net.AbstractEndpoint.Handler<S> {
                    // @ts-ignore
                    constructor(proto: org.apache.coyote.AbstractProtocol<S>)
                    // @ts-ignore
                    getProtocol(): org.apache.coyote.AbstractProtocol<S>
                    // @ts-ignore
                    getLog(): org.apache.juli.logging.Log
                    // @ts-ignore
                    public getGlobal(): any
                    // @ts-ignore
                    public recycle(): void
                    // @ts-ignore
                    public process(wrapper: org.apache.tomcat.util.net.SocketWrapperBase<S>, status: org.apache.tomcat.util.net.SocketEvent): org.apache.tomcat.util.net.AbstractEndpoint.Handler.SocketState
                    // @ts-ignore
                    longPoll(socket: org.apache.tomcat.util.net.SocketWrapperBase<any>, processor: org.apache.coyote.Processor): void
                    // @ts-ignore
                    public getOpenSockets(): Array<S>
                    /**
                     * Expected to be used by the Endpoint to release resources on socket
                     * close, errors etc.
                     */
                    // @ts-ignore
                    public release(socketWrapper: org.apache.tomcat.util.net.SocketWrapperBase<S>): void
                    // @ts-ignore
                    register(processor: org.apache.coyote.Processor): void
                    // @ts-ignore
                    unregister(processor: org.apache.coyote.Processor): void
                    // @ts-ignore
                    public pause(): void
                }
            }
        }
    }
}
