declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    namespace NioEndpoint {
                        // @ts-ignore
                        class NioSocketWrapper extends org.apache.tomcat.util.net.SocketWrapperBase<org.apache.tomcat.util.net.NioChannel> {
                            // @ts-ignore
                            constructor(channel: org.apache.tomcat.util.net.NioChannel, endpoint: org.apache.tomcat.util.net.NioEndpoint)
                            // @ts-ignore
                            public getPoller(): org.apache.tomcat.util.net.NioEndpoint.Poller
                            // @ts-ignore
                            public setPoller(poller: org.apache.tomcat.util.net.NioEndpoint.Poller): void
                            // @ts-ignore
                            public interestOps(): number /*int*/
                            // @ts-ignore
                            public interestOps(ops: number /*int*/): number /*int*/
                            // @ts-ignore
                            public getReadLatch(): java.util.concurrent.CountDownLatch
                            // @ts-ignore
                            public getWriteLatch(): java.util.concurrent.CountDownLatch
                            // @ts-ignore
                            resetLatch(latch: java.util.concurrent.CountDownLatch): java.util.concurrent.CountDownLatch
                            // @ts-ignore
                            public resetReadLatch(): void
                            // @ts-ignore
                            public resetWriteLatch(): void
                            // @ts-ignore
                            startLatch(latch: java.util.concurrent.CountDownLatch, cnt: number /*int*/): java.util.concurrent.CountDownLatch
                            // @ts-ignore
                            public startReadLatch(cnt: number /*int*/): void
                            // @ts-ignore
                            public startWriteLatch(cnt: number /*int*/): void
                            // @ts-ignore
                            awaitLatch(latch: java.util.concurrent.CountDownLatch, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): void
                            // @ts-ignore
                            public awaitReadLatch(timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): void
                            // @ts-ignore
                            public awaitWriteLatch(timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): void
                            // @ts-ignore
                            public setSendfileData(sf: org.apache.tomcat.util.net.NioEndpoint.SendfileData): void
                            // @ts-ignore
                            public getSendfileData(): org.apache.tomcat.util.net.NioEndpoint.SendfileData
                            // @ts-ignore
                            public updateLastWrite(): void
                            // @ts-ignore
                            public getLastWrite(): number /*long*/
                            // @ts-ignore
                            public updateLastRead(): void
                            // @ts-ignore
                            public getLastRead(): number /*long*/
                            // @ts-ignore
                            public isReadyForRead(): boolean
                            // @ts-ignore
                            public read(block: boolean, b: number /*byte*/[], off: number /*int*/, len: number /*int*/): number /*int*/
                            // @ts-ignore
                            public read(block: boolean, to: java.nio.ByteBuffer): number /*int*/
                            // @ts-ignore
                            public close(): void
                            // @ts-ignore
                            public isClosed(): boolean
                            // @ts-ignore
                            doWrite(block: boolean, from: java.nio.ByteBuffer): void
                            // @ts-ignore
                            public registerReadInterest(): void
                            // @ts-ignore
                            public registerWriteInterest(): void
                            // @ts-ignore
                            public createSendfileData(filename: java.lang.String | string, pos: number /*long*/, length: number /*long*/): org.apache.tomcat.util.net.SendfileDataBase
                            // @ts-ignore
                            public processSendfile(sendfileData: org.apache.tomcat.util.net.SendfileDataBase): org.apache.tomcat.util.net.SendfileState
                            // @ts-ignore
                            populateRemoteAddr(): void
                            // @ts-ignore
                            populateRemoteHost(): void
                            // @ts-ignore
                            populateRemotePort(): void
                            // @ts-ignore
                            populateLocalName(): void
                            // @ts-ignore
                            populateLocalAddr(): void
                            // @ts-ignore
                            populateLocalPort(): void
                            /**
                             * {@inheritDoc}
                             * @param clientCertProvider Ignored for this implementation
                             */
                            // @ts-ignore
                            public getSslSupport(clientCertProvider: java.lang.String | string): org.apache.tomcat.util.net.SSLSupport
                            // @ts-ignore
                            public doClientAuth(sslSupport: org.apache.tomcat.util.net.SSLSupport): void
                            // @ts-ignore
                            public setAppReadBufHandler(handler: org.apache.tomcat.util.net.ApplicationBufferHandler): void
                        }
                    }
                }
            }
        }
    }
}
