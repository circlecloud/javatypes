declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    namespace NioEndpoint {
                        /**
                         * PollerEvent, cacheable object for poller events to avoid GC
                         */
                        // @ts-ignore
                        class PollerEvent extends java.lang.Object implements java.lang.Runnable {
                            // @ts-ignore
                            constructor(ch: org.apache.tomcat.util.net.NioChannel, w: org.apache.tomcat.util.net.NioEndpoint.NioSocketWrapper, intOps: number /*int*/)
                            // @ts-ignore
                            public reset(ch: org.apache.tomcat.util.net.NioChannel, w: org.apache.tomcat.util.net.NioEndpoint.NioSocketWrapper, intOps: number /*int*/): void
                            // @ts-ignore
                            public reset(): void
                            // @ts-ignore
                            public run(): void
                            // @ts-ignore
                            public toString(): string
                        }
                    }
                }
            }
        }
    }
}
