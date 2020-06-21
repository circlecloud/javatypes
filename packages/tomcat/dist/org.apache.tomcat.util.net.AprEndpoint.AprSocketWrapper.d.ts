declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    namespace AprEndpoint {
                        // @ts-ignore
                        class AprSocketWrapper extends org.apache.tomcat.util.net.SocketWrapperBase<java.lang.Long | number> {
                            // @ts-ignore
                            constructor(socket: java.lang.Long | number, endpoint: org.apache.tomcat.util.net.AprEndpoint)
                            // @ts-ignore
                            public read(block: boolean, b: number /*byte*/[], off: number /*int*/, len: number /*int*/): number /*int*/
                            // @ts-ignore
                            public read(block: boolean, to: java.nio.ByteBuffer): number /*int*/
                            // @ts-ignore
                            public isReadyForRead(): boolean
                            // @ts-ignore
                            public close(): void
                            // @ts-ignore
                            public isClosed(): boolean
                            // @ts-ignore
                            writeBlockingDirect(from: java.nio.ByteBuffer): void
                            // @ts-ignore
                            writeNonBlockingDirect(from: java.nio.ByteBuffer): void
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
