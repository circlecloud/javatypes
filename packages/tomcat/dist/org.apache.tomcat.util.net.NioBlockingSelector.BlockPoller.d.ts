declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    namespace NioBlockingSelector {
                        // @ts-ignore
                        class BlockPoller extends java.lang.Thread {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            selector: java.nio.channels.Selector
                            // @ts-ignore
                            readonly wakeupCounter: java.util.concurrent.atomic.AtomicInteger
                            // @ts-ignore
                            public disable(): void
                            // @ts-ignore
                            public cancelKey(key: java.nio.channels.SelectionKey): void
                            // @ts-ignore
                            public wakeup(): void
                            // @ts-ignore
                            public cancel(sk: java.nio.channels.SelectionKey, key: org.apache.tomcat.util.net.NioEndpoint.NioSocketWrapper, ops: number /*int*/): void
                            // @ts-ignore
                            public add(key: org.apache.tomcat.util.net.NioEndpoint.NioSocketWrapper, ops: number /*int*/, ref: org.apache.tomcat.util.net.NioBlockingSelector.KeyReference): void
                            // @ts-ignore
                            public remove(key: org.apache.tomcat.util.net.NioEndpoint.NioSocketWrapper, ops: number /*int*/): void
                            // @ts-ignore
                            public events(): boolean
                            // @ts-ignore
                            public run(): void
                            // @ts-ignore
                            public countDown(latch: java.util.concurrent.CountDownLatch): void
                        }
                    }
                }
            }
        }
    }
}
