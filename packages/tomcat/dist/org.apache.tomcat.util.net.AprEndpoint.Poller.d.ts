declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    namespace AprEndpoint {
                        // @ts-ignore
                        class Poller extends java.lang.Object implements java.lang.Runnable {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public getConnectionCount(): number /*int*/
                            /**
                             * Create the poller. With some versions of APR, the maximum poller size
                             * will be 62 (recompiling APR is necessary to remove this limitation).
                             */
                            // @ts-ignore
                            init(): void
                            // @ts-ignore
                            start(): void
                            // @ts-ignore
                            stop(): void
                            /**
                             * Destroy the poller.
                             */
                            // @ts-ignore
                            destroy(): void
                            /**
                             * Displays the list of sockets in the pollers.
                             */
                            // @ts-ignore
                            public toString(): string
                            /**
                             * The background thread that adds sockets to the Poller, checks the
                             * poller for triggered events and hands the associated socket off to an
                             * appropriate processor as events occur.
                             */
                            // @ts-ignore
                            public run(): void
                        }
                    }
                }
            }
        }
    }
}
