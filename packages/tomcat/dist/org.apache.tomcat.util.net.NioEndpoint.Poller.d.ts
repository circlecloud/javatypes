declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    namespace NioEndpoint {
                        /**
                         * Poller class.
                         */
                        // @ts-ignore
                        class Poller extends java.lang.Object implements java.lang.Runnable {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public getKeyCount(): number /*int*/
                            // @ts-ignore
                            public getSelector(): java.nio.channels.Selector
                            /**
                             * Destroy the poller.
                             */
                            // @ts-ignore
                            destroy(): void
                            /**
                             * Add specified socket and associated pool to the poller. The socket will
                             * be added to a temporary array, and polled first after a maximum amount
                             * of time equal to pollTime (in most cases, latency will be much lower,
                             * however).
                             * @param socket to add to the poller
                             * @param interestOps Operations for which to register this socket with
                             *                     the Poller
                             */
                            // @ts-ignore
                            public add(socket: org.apache.tomcat.util.net.NioChannel, interestOps: number /*int*/): void
                            /**
                             * Processes events in the event queue of the Poller.
                             * @return <code>true</code> if some events were processed,
                             *    <code>false</code> if queue was empty
                             */
                            // @ts-ignore
                            public events(): boolean
                            /**
                             * Registers a newly created socket with the poller.
                             * @param socket    The newly created socket
                             */
                            // @ts-ignore
                            public register(socket: org.apache.tomcat.util.net.NioChannel): void
                            // @ts-ignore
                            public cancelledKey(key: java.nio.channels.SelectionKey): org.apache.tomcat.util.net.NioEndpoint.NioSocketWrapper
                            /**
                             * The background thread that adds sockets to the Poller, checks the
                             * poller for triggered events and hands the associated socket off to an
                             * appropriate processor as events occur.
                             */
                            // @ts-ignore
                            public run(): void
                            // @ts-ignore
                            processKey(sk: java.nio.channels.SelectionKey, attachment: org.apache.tomcat.util.net.NioEndpoint.NioSocketWrapper): void
                            // @ts-ignore
                            public processSendfile(sk: java.nio.channels.SelectionKey, socketWrapper: org.apache.tomcat.util.net.NioEndpoint.NioSocketWrapper, calledByProcessor: boolean): org.apache.tomcat.util.net.SendfileState
                            // @ts-ignore
                            unreg(sk: java.nio.channels.SelectionKey, attachment: org.apache.tomcat.util.net.NioEndpoint.NioSocketWrapper, readyOps: number /*int*/): void
                            // @ts-ignore
                            reg(sk: java.nio.channels.SelectionKey, attachment: org.apache.tomcat.util.net.NioEndpoint.NioSocketWrapper, intops: number /*int*/): void
                            // @ts-ignore
                            timeout(keyCount: number /*int*/, hasEvents: boolean): void
                        }
                    }
                }
            }
        }
    }
}
