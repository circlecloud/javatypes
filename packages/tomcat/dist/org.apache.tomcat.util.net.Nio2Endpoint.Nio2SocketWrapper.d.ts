declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    namespace Nio2Endpoint {
                        // @ts-ignore
                        class Nio2SocketWrapper extends org.apache.tomcat.util.net.SocketWrapperBase<org.apache.tomcat.util.net.Nio2Channel> {
                            // @ts-ignore
                            constructor(channel: org.apache.tomcat.util.net.Nio2Channel, endpoint: org.apache.tomcat.util.net.Nio2Endpoint)
                            // @ts-ignore
                            public setSendfileData(sf: org.apache.tomcat.util.net.Nio2Endpoint.SendfileData): void
                            // @ts-ignore
                            public getSendfileData(): org.apache.tomcat.util.net.Nio2Endpoint.SendfileData
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
                            public isWritePending(): boolean
                            // @ts-ignore
                            public hasAsyncIO(): boolean
                            // @ts-ignore
                            public read<A>(dsts: java.nio.ByteBuffer[], offset: number /*int*/, length: number /*int*/, block: org.apache.tomcat.util.net.SocketWrapperBase.BlockingMode, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit, attachment: A, check: org.apache.tomcat.util.net.SocketWrapperBase.CompletionCheck, handler: java.nio.channels.CompletionHandler<java.lang.Long | number, any>): org.apache.tomcat.util.net.SocketWrapperBase.CompletionState
                            // @ts-ignore
                            public write<A>(srcs: java.nio.ByteBuffer[], offset: number /*int*/, length: number /*int*/, block: org.apache.tomcat.util.net.SocketWrapperBase.BlockingMode, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit, attachment: A, check: org.apache.tomcat.util.net.SocketWrapperBase.CompletionCheck, handler: java.nio.channels.CompletionHandler<java.lang.Long | number, any>): org.apache.tomcat.util.net.SocketWrapperBase.CompletionState
                            /**
                             * {@inheritDoc}
                             * <p>
                             * Overridden for NIO2 to enable a gathering write to be used to write
                             * all of the remaining data in a single additional write should a
                             * non-blocking write leave data in the buffer.
                             */
                            // @ts-ignore
                            writeNonBlocking(buf: number /*byte*/[], off: number /*int*/, len: number /*int*/): void
                            /**
                             * {@inheritDoc}
                             * <p>
                             * Overridden for NIO2 to enable a gathering write to be used to write
                             * all of the remaining data in a single additional write should a
                             * non-blocking write leave data in the buffer.
                             */
                            // @ts-ignore
                            writeNonBlocking(from: java.nio.ByteBuffer): void
                            /**
                             * {@inheritDoc}
                             * <p>
                             * Overridden for NIO2 to enable a gathering write to be used to write
                             * all of the remaining data in a single additional write should a
                             * non-blocking write leave data in the buffer.
                             */
                            // @ts-ignore
                            writeNonBlockingInternal(from: java.nio.ByteBuffer): void
                            /**
                             * @param block Ignored since this method is only called in the
                             *               blocking case
                             */
                            // @ts-ignore
                            doWrite(block: boolean, from: java.nio.ByteBuffer): void
                            // @ts-ignore
                            flushBlocking(): void
                            // @ts-ignore
                            flushNonBlocking(): boolean
                            // @ts-ignore
                            public hasDataToWrite(): boolean
                            // @ts-ignore
                            public isReadPending(): boolean
                            // @ts-ignore
                            public awaitReadComplete(timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): boolean
                            // @ts-ignore
                            public awaitWriteComplete(timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): boolean
                            // @ts-ignore
                            public registerReadInterest(): void
                            // @ts-ignore
                            public registerWriteInterest(): void
                            // @ts-ignore
                            public awaitBytes(): void
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
