declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    namespace AprEndpoint {
                        // @ts-ignore
                        class Sendfile extends java.lang.Object implements java.lang.Runnable {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            sendfilePollset: number /*long*/
                            // @ts-ignore
                            pool: number /*long*/
                            // @ts-ignore
                            desc: number /*long*/[]
                            // @ts-ignore
                            sendfileData: java.util.HashMap<java.lang.Long | number, org.apache.tomcat.util.net.AprEndpoint.SendfileData>
                            // @ts-ignore
                            sendfileCount: number /*int*/
                            // @ts-ignore
                            addS: java.util.ArrayList<org.apache.tomcat.util.net.AprEndpoint.SendfileData>
                            // @ts-ignore
                            public getSendfileCount(): number /*int*/
                            /**
                             * Create the sendfile poller. With some versions of APR, the maximum
                             * poller size will be 62 (recompiling APR is necessary to remove this
                             * limitation).
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
                             * Add the sendfile data to the sendfile poller. Note that in most cases,
                             * the initial non blocking calls to sendfile will return right away, and
                             * will be handled asynchronously inside the kernel. As a result,
                             * the poller will never be used.
                             * @param data containing the reference to the data which should be snet
                             * @return true if all the data has been sent right away, and false
                             *               otherwise
                             */
                            // @ts-ignore
                            public add(data: org.apache.tomcat.util.net.AprEndpoint.SendfileData): org.apache.tomcat.util.net.SendfileState
                            /**
                             * Remove socket from the poller.
                             * @param data the sendfile data which should be removed
                             */
                            // @ts-ignore
                            remove(data: org.apache.tomcat.util.net.AprEndpoint.SendfileData): void
                            /**
                             * The background thread that listens for incoming TCP/IP connections
                             * and hands them off to an appropriate processor.
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
