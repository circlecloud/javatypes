declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    namespace Nio2Endpoint {
                        // @ts-ignore
                        class Nio2Acceptor extends org.apache.tomcat.util.net.Acceptor<java.nio.channels.AsynchronousSocketChannel> implements java.nio.channels.CompletionHandler<java.nio.channels.AsynchronousSocketChannel, java.lang.Void> {
                            // @ts-ignore
                            constructor(endpoint: org.apache.tomcat.util.net.AbstractEndpoint<any, java.nio.channels.AsynchronousSocketChannel>)
                            // @ts-ignore
                            errorDelay: number /*int*/
                            // @ts-ignore
                            public run(): void
                            // @ts-ignore
                            public completed(socket: java.nio.channels.AsynchronousSocketChannel, attachment: java.lang.Void): void
                            // @ts-ignore
                            public failed(t: java.lang.Throwable | Error, attachment: java.lang.Void): void
                        }
                    }
                }
            }
        }
    }
}
