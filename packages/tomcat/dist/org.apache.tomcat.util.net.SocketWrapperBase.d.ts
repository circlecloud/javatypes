declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    // @ts-ignore
                    abstract class SocketWrapperBase<E> extends java.lang.Object {
                        // @ts-ignore
                        constructor(socket: E, endpoint: org.apache.tomcat.util.net.AbstractEndpoint<E, any>)
                        // @ts-ignore
                        static readonly sm: org.apache.tomcat.util.res.StringManager
                        // @ts-ignore
                        localAddr: java.lang.String | string
                        // @ts-ignore
                        localName: java.lang.String | string
                        // @ts-ignore
                        localPort: number /*int*/
                        // @ts-ignore
                        remoteAddr: java.lang.String | string
                        // @ts-ignore
                        remoteHost: java.lang.String | string
                        // @ts-ignore
                        remotePort: number /*int*/
                        /**
                         * The buffers used for communicating with the socket.
                         */
                        // @ts-ignore
                        socketBufferHandler: org.apache.tomcat.util.net.SocketBufferHandler
                        /**
                         * The max size of the individual buffered write buffers
                         */
                        // @ts-ignore
                        bufferedWriteSize: number /*int*/
                        /**
                         * Additional buffer used for non-blocking writes. Non-blocking writes need
                         * to return immediately even if the data cannot be written immediately but
                         * the socket buffer may not be big enough to hold all of the unwritten
                         * data. This structure provides an additional buffer to hold the data until
                         * it can be written.
                         * Not that while the Servlet API only allows one non-blocking write at a
                         * time, due to buffering and the possible need to write HTTP headers, this
                         * layer may see multiple writes.
                         */
                        // @ts-ignore
                        readonly nonBlockingWriteBuffer: org.apache.tomcat.util.net.WriteBuffer
                        /**
                         * This utility CompletionCheck will cause the write to fully write
                         * all remaining data. If the operation completes inline, the
                         * completion handler will not be called.
                         */
                        // @ts-ignore
                        public static readonly COMPLETE_WRITE: org.apache.tomcat.util.net.SocketWrapperBase.CompletionCheck
                        /**
                         * This utility CompletionCheck will cause the write to fully write
                         * all remaining data. The completion handler will then be called.
                         */
                        // @ts-ignore
                        public static readonly COMPLETE_WRITE_WITH_COMPLETION: org.apache.tomcat.util.net.SocketWrapperBase.CompletionCheck
                        /**
                         * This utility CompletionCheck will cause the completion handler
                         * to be called once some data has been read. If the operation
                         * completes inline, the completion handler will not be called.
                         */
                        // @ts-ignore
                        public static readonly READ_DATA: org.apache.tomcat.util.net.SocketWrapperBase.CompletionCheck
                        // @ts-ignore
                        public getSocket(): E
                        // @ts-ignore
                        getEndpoint(): org.apache.tomcat.util.net.AbstractEndpoint<E, any>
                        /**
                         * Transfers processing to a container thread.
                         * @param runnable The actions to process on a container thread
                         * @throws RejectedExecutionException If the runnable cannot be executed
                         */
                        // @ts-ignore
                        public execute(runnable: java.lang.Runnable): void
                        // @ts-ignore
                        public getError(): java.io.IOException
                        // @ts-ignore
                        public setError(error: java.io.IOException): void
                        // @ts-ignore
                        public checkError(): void
                        // @ts-ignore
                        public isUpgraded(): boolean
                        // @ts-ignore
                        public setUpgraded(upgraded: boolean): void
                        // @ts-ignore
                        public isSecure(): boolean
                        // @ts-ignore
                        public setSecure(secure: boolean): void
                        // @ts-ignore
                        public getNegotiatedProtocol(): string
                        // @ts-ignore
                        public setNegotiatedProtocol(negotiatedProtocol: java.lang.String | string): void
                        /**
                         * Set the timeout for reading. Values of zero or less will be changed to
                         * -1.
                         * @param readTimeout The timeout in milliseconds. A value of -1 indicates
                         *                     an infinite timeout.
                         */
                        // @ts-ignore
                        public setReadTimeout(readTimeout: number /*long*/): void
                        // @ts-ignore
                        public getReadTimeout(): number /*long*/
                        /**
                         * Set the timeout for writing. Values of zero or less will be changed to
                         * -1.
                         * @param writeTimeout The timeout in milliseconds. A value of zero or less
                         *                     indicates an infinite timeout.
                         */
                        // @ts-ignore
                        public setWriteTimeout(writeTimeout: number /*long*/): void
                        // @ts-ignore
                        public getWriteTimeout(): number /*long*/
                        // @ts-ignore
                        public setKeepAliveLeft(keepAliveLeft: number /*int*/): void
                        // @ts-ignore
                        public decrementKeepAlive(): number /*int*/
                        // @ts-ignore
                        public getRemoteHost(): string
                        // @ts-ignore
                        abstract populateRemoteHost(): void
                        // @ts-ignore
                        public getRemoteAddr(): string
                        // @ts-ignore
                        abstract populateRemoteAddr(): void
                        // @ts-ignore
                        public getRemotePort(): number /*int*/
                        // @ts-ignore
                        abstract populateRemotePort(): void
                        // @ts-ignore
                        public getLocalName(): string
                        // @ts-ignore
                        abstract populateLocalName(): void
                        // @ts-ignore
                        public getLocalAddr(): string
                        // @ts-ignore
                        abstract populateLocalAddr(): void
                        // @ts-ignore
                        public getLocalPort(): number /*int*/
                        // @ts-ignore
                        abstract populateLocalPort(): void
                        // @ts-ignore
                        public getBlockingStatus(): boolean
                        // @ts-ignore
                        public setBlockingStatus(blockingStatus: boolean): void
                        // @ts-ignore
                        public getBlockingStatusReadLock(): java.util.concurrent.locks.Lock
                        // @ts-ignore
                        public getBlockingStatusWriteLock(): java.util.concurrent.locks.ReentrantReadWriteLock.WriteLock
                        // @ts-ignore
                        public getSocketBufferHandler(): org.apache.tomcat.util.net.SocketBufferHandler
                        // @ts-ignore
                        public hasDataToWrite(): boolean
                        /**
                         * Checks to see if there are any writes pending and if there are calls
                         * {@link #registerWriteInterest()} to trigger a callback once the pending
                         * writes have completed.
                         * <p>
                         * Note: Once this method has returned <code>false</code> it <b>MUST NOT</b>
                         * be called again until the pending write has completed and the
                         * callback has been fired.
                         * TODO: Modify {@link #registerWriteInterest()} so the above
                         * restriction is enforced there rather than relying on the caller.
                         * @return <code>true</code> if no writes are pending and data can be
                         *          written otherwise <code>false</code>
                         */
                        // @ts-ignore
                        public isReadyForWrite(): boolean
                        // @ts-ignore
                        public canWrite(): boolean
                        /**
                         * Overridden for debug purposes. No guarantees are made about the format of
                         * this message which may vary significantly between point releases.
                         * <p>
                         * {@inheritDoc}
                         */
                        // @ts-ignore
                        public toString(): string
                        // @ts-ignore
                        public abstract read(block: boolean, b: number /*byte*/[], off: number /*int*/, len: number /*int*/): number /*int*/
                        // @ts-ignore
                        public abstract read(block: boolean, to: java.nio.ByteBuffer): number /*int*/
                        // @ts-ignore
                        public abstract isReadyForRead(): boolean
                        // @ts-ignore
                        public abstract setAppReadBufHandler(handler: org.apache.tomcat.util.net.ApplicationBufferHandler): void
                        // @ts-ignore
                        populateReadBuffer(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): number /*int*/
                        // @ts-ignore
                        populateReadBuffer(to: java.nio.ByteBuffer): number /*int*/
                        /**
                         * Return input that has been read to the input buffer for re-reading by the
                         * correct component. There are times when a component may read more data
                         * than it needs before it passes control to another component. One example
                         * of this is during HTTP upgrade. If an (arguably misbehaving client) sends
                         * data associated with the upgraded protocol before the HTTP upgrade
                         * completes, the HTTP handler may read it. This method provides a way for
                         * that data to be returned so it can be processed by the correct component.
                         * @param returnedInput The input to return to the input buffer.
                         */
                        // @ts-ignore
                        public unRead(returnedInput: java.nio.ByteBuffer): void
                        // @ts-ignore
                        public abstract close(): void
                        // @ts-ignore
                        public abstract isClosed(): boolean
                        /**
                         * Writes the provided data to the socket write buffer. If the socket write
                         * buffer fills during the write, the content of the socket write buffer is
                         * written to the network and this method starts to fill the socket write
                         * buffer again. Depending on the size of the data to write, there may be
                         * multiple writes to the network.
                         * <p>
                         * Non-blocking writes must return immediately and the byte array holding
                         * the data to be written must be immediately available for re-use. It may
                         * not be possible to write sufficient data to the network to allow this to
                         * happen. In this case data that cannot be written to the network and
                         * cannot be held by the socket buffer is stored in the non-blocking write
                         * buffer.
                         * <p>
                         * Note: There is an implementation assumption that, before switching from
                         * non-blocking writes to blocking writes, any data remaining in the
                         * non-blocking write buffer will have been written to the network.
                         * @param block <code>true</code> if a blocking write should be used,
                         *                   otherwise a non-blocking write will be used
                         * @param buf   The byte array containing the data to be written
                         * @param off   The offset within the byte array of the data to be written
                         * @param len   The length of the data to be written
                         * @throws IOException If an IO error occurs during the write
                         */
                        // @ts-ignore
                        public write(block: boolean, buf: number /*byte*/[], off: number /*int*/, len: number /*int*/): void
                        /**
                         * Writes the provided data to the socket write buffer. If the socket write
                         * buffer fills during the write, the content of the socket write buffer is
                         * written to the network and this method starts to fill the socket write
                         * buffer again. Depending on the size of the data to write, there may be
                         * multiple writes to the network.
                         * <p>
                         * Non-blocking writes must return immediately and the ByteBuffer holding
                         * the data to be written must be immediately available for re-use. It may
                         * not be possible to write sufficient data to the network to allow this to
                         * happen. In this case data that cannot be written to the network and
                         * cannot be held by the socket buffer is stored in the non-blocking write
                         * buffer.
                         * <p>
                         * Note: There is an implementation assumption that, before switching from
                         * non-blocking writes to blocking writes, any data remaining in the
                         * non-blocking write buffer will have been written to the network.
                         * @param block  <code>true</code> if a blocking write should be used,
                         *                otherwise a non-blocking write will be used
                         * @param from   The ByteBuffer containing the data to be written
                         * @throws IOException If an IO error occurs during the write
                         */
                        // @ts-ignore
                        public write(block: boolean, from: java.nio.ByteBuffer): void
                        /**
                         * Writes the provided data to the socket write buffer. If the socket write
                         * buffer fills during the write, the content of the socket write buffer is
                         * written to the network using a blocking write. Once that blocking write
                         * is complete, this method starts to fill the socket write buffer again.
                         * Depending on the size of the data to write, there may be multiple writes
                         * to the network. On completion of this method there will always be space
                         * remaining in the socket write buffer.
                         * @param buf   The byte array containing the data to be written
                         * @param off   The offset within the byte array of the data to be written
                         * @param len   The length of the data to be written
                         * @throws IOException If an IO error occurs during the write
                         */
                        // @ts-ignore
                        writeBlocking(buf: number /*byte*/[], off: number /*int*/, len: number /*int*/): void
                        /**
                         * Writes the provided data to the socket write buffer. If the socket write
                         * buffer fills during the write, the content of the socket write buffer is
                         * written to the network using a blocking write. Once that blocking write
                         * is complete, this method starts to fill the socket write buffer again.
                         * Depending on the size of the data to write, there may be multiple writes
                         * to the network. On completion of this method there will always be space
                         * remaining in the socket write buffer.
                         * @param from The ByteBuffer containing the data to be written
                         * @throws IOException If an IO error occurs during the write
                         */
                        // @ts-ignore
                        writeBlocking(from: java.nio.ByteBuffer): void
                        /**
                         * Writes directly to the network, bypassing the socket write buffer.
                         * @param from The ByteBuffer containing the data to be written
                         * @throws IOException If an IO error occurs during the write
                         */
                        // @ts-ignore
                        writeBlockingDirect(from: java.nio.ByteBuffer): void
                        /**
                         * Transfers the data to the socket write buffer (writing that data to the
                         * socket if the buffer fills up using a non-blocking write) until either
                         * all the data has been transferred and space remains in the socket write
                         * buffer or a non-blocking write leaves data in the socket write buffer.
                         * After an incomplete write, any data remaining to be transferred to the
                         * socket write buffer will be copied to the socket write buffer. If the
                         * remaining data is too big for the socket write buffer, the socket write
                         * buffer will be filled and the additional data written to the non-blocking
                         * write buffer.
                         * @param buf   The byte array containing the data to be written
                         * @param off   The offset within the byte array of the data to be written
                         * @param len   The length of the data to be written
                         * @throws IOException If an IO error occurs during the write
                         */
                        // @ts-ignore
                        writeNonBlocking(buf: number /*byte*/[], off: number /*int*/, len: number /*int*/): void
                        /**
                         * Transfers the data to the socket write buffer (writing that data to the
                         * socket if the buffer fills up using a non-blocking write) until either
                         * all the data has been transferred and space remains in the socket write
                         * buffer or a non-blocking write leaves data in the socket write buffer.
                         * After an incomplete write, any data remaining to be transferred to the
                         * socket write buffer will be copied to the socket write buffer. If the
                         * remaining data is too big for the socket write buffer, the socket write
                         * buffer will be filled and the additional data written to the non-blocking
                         * write buffer.
                         * @param from The ByteBuffer containing the data to be written
                         * @throws IOException If an IO error occurs during the write
                         */
                        // @ts-ignore
                        writeNonBlocking(from: java.nio.ByteBuffer): void
                        /**
                         * Separate method so it can be re-used by the socket write buffer to write
                         * data to the network
                         * @param from The ByteBuffer containing the data to be written
                         * @throws IOException If an IO error occurs during the write
                         */
                        // @ts-ignore
                        writeNonBlockingInternal(from: java.nio.ByteBuffer): void
                        // @ts-ignore
                        writeNonBlockingDirect(from: java.nio.ByteBuffer): void
                        /**
                         * Writes as much data as possible from any that remains in the buffers.
                         * @param block <code>true</code> if a blocking write should be used,
                         *                   otherwise a non-blocking write will be used
                         * @return <code>true</code> if data remains to be flushed after this method
                         *          completes, otherwise <code>false</code>. In blocking mode
                         *          therefore, the return value should always be <code>false</code>
                         * @throws IOException If an IO error occurs during the write
                         */
                        // @ts-ignore
                        public flush(block: boolean): boolean
                        // @ts-ignore
                        flushBlocking(): void
                        // @ts-ignore
                        flushNonBlocking(): boolean
                        /**
                         * Write the contents of the socketWriteBuffer to the socket. For blocking
                         * writes either then entire contents of the buffer will be written or an
                         * IOException will be thrown. Partial blocking writes will not occur.
                         * @param block Should the write be blocking or not?
                         * @throws IOException If an I/O error such as a timeout occurs during the
                         *                      write
                         */
                        // @ts-ignore
                        doWrite(block: boolean): void
                        /**
                         * Write the contents of the ByteBuffer to the socket. For blocking writes
                         * either then entire contents of the buffer will be written or an
                         * IOException will be thrown. Partial blocking writes will not occur.
                         * @param block Should the write be blocking or not?
                         * @param from the ByteBuffer containing the data to be written
                         * @throws IOException If an I/O error such as a timeout occurs during the
                         *                      write
                         */
                        // @ts-ignore
                        abstract doWrite(block: boolean, from: java.nio.ByteBuffer): void
                        // @ts-ignore
                        public processSocket(socketStatus: org.apache.tomcat.util.net.SocketEvent, dispatch: boolean): void
                        // @ts-ignore
                        public abstract registerReadInterest(): void
                        // @ts-ignore
                        public abstract registerWriteInterest(): void
                        // @ts-ignore
                        public abstract createSendfileData(filename: java.lang.String | string, pos: number /*long*/, length: number /*long*/): org.apache.tomcat.util.net.SendfileDataBase
                        /**
                         * Starts the sendfile process. It is expected that if the sendfile process
                         * does not complete during this call and does not report an error, that the
                         * caller <b>will not</b> add the socket to the poller (or equivalent). That
                         * is the responsibility of this method.
                         * @param sendfileData Data representing the file to send
                         * @return The state of the sendfile process after the first write.
                         */
                        // @ts-ignore
                        public abstract processSendfile(sendfileData: org.apache.tomcat.util.net.SendfileDataBase): org.apache.tomcat.util.net.SendfileState
                        /**
                         * Require the client to perform CLIENT-CERT authentication if it hasn't
                         * already done so.
                         * @param sslSupport The SSL/TLS support instance currently being used by
                         *                    the connection that may need updating after the client
                         *                    authentication
                         * @throws IOException If authentication is required then there will be I/O
                         *                      with the client and this exception will be thrown if
                         *                      that goes wrong
                         */
                        // @ts-ignore
                        public abstract doClientAuth(sslSupport: org.apache.tomcat.util.net.SSLSupport): void
                        // @ts-ignore
                        public abstract getSslSupport(clientCertProvider: java.lang.String | string): org.apache.tomcat.util.net.SSLSupport
                        /**
                         * Allows using NIO2 style read/write only for connectors that can
                         * efficiently support it.
                         * @return This default implementation always returns {#code false}
                         */
                        // @ts-ignore
                        public hasAsyncIO(): boolean
                        /**
                         * Allows checking if an asynchronous read operation is currently pending.
                         * @return <code>true</code> if the endpoint supports asynchronous IO and
                         *   a read operation is being processed asynchronously
                         */
                        // @ts-ignore
                        public isReadPending(): boolean
                        /**
                         * Allows checking if an asynchronous write operation is currently pending.
                         * @return <code>true</code> if the endpoint supports asynchronous IO and
                         *   a write operation is being processed asynchronously
                         */
                        // @ts-ignore
                        public isWritePending(): boolean
                        /**
                         * If an asynchronous read operation is pending, this method will block
                         * until the operation completes, or the specified amount of time
                         * has passed.
                         * @param timeout The maximum amount of time to wait
                         * @param unit The unit for the timeout
                         * @return <code>true</code> if the read operation is complete,
                         *   <code>false</code> if the operation is still pending and
                         *   the specified timeout has passed
                         */
                        // @ts-ignore
                        public awaitReadComplete(timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): boolean
                        /**
                         * If an asynchronous write operation is pending, this method will block
                         * until the operation completes, or the specified amount of time
                         * has passed.
                         * @param timeout The maximum amount of time to wait
                         * @param unit The unit for the timeout
                         * @return <code>true</code> if the read operation is complete,
                         *   <code>false</code> if the operation is still pending and
                         *   the specified timeout has passed
                         */
                        // @ts-ignore
                        public awaitWriteComplete(timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): boolean
                        /**
                         * Scatter read. The completion handler will be called once some
                         * data has been read or an error occurred. If a CompletionCheck
                         * object has been provided, the completion handler will only be
                         * called if the callHandler method returned true. If no
                         * CompletionCheck object has been provided, the default NIO2
                         * behavior is used: the completion handler will be called as soon
                         * as some data has been read, even if the read has completed inline.
                         * @param block is the blocking mode that will be used for this operation
                         * @param timeout timeout duration for the read
                         * @param unit units for the timeout duration
                         * @param attachment an object to attach to the I/O operation that will be
                         *         used when calling the completion handler
                         * @param check for the IO operation completion
                         * @param handler to call when the IO is complete
                         * @param dsts buffers
                         * @param <A> The attachment type
                         * @return the completion state (done, done inline, or still pending)
                         */
                        // @ts-ignore
                        public read<A>(block: org.apache.tomcat.util.net.SocketWrapperBase.BlockingMode, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit, attachment: A, check: org.apache.tomcat.util.net.SocketWrapperBase.CompletionCheck, handler: java.nio.channels.CompletionHandler<java.lang.Long | number, any>, ...dsts: java.nio.ByteBuffer[]): org.apache.tomcat.util.net.SocketWrapperBase.CompletionState
                        /**
                         * Scatter read. The completion handler will be called once some
                         * data has been read or an error occurred. If a CompletionCheck
                         * object has been provided, the completion handler will only be
                         * called if the callHandler method returned true. If no
                         * CompletionCheck object has been provided, the default NIO2
                         * behavior is used: the completion handler will be called as soon
                         * as some data has been read, even if the read has completed inline.
                         * @param dsts buffers
                         * @param offset in the buffer array
                         * @param length in the buffer array
                         * @param block is the blocking mode that will be used for this operation
                         * @param timeout timeout duration for the read
                         * @param unit units for the timeout duration
                         * @param attachment an object to attach to the I/O operation that will be
                         *         used when calling the completion handler
                         * @param check for the IO operation completion
                         * @param handler to call when the IO is complete
                         * @param <A> The attachment type
                         * @return the completion state (done, done inline, or still pending)
                         */
                        // @ts-ignore
                        public read<A>(dsts: java.nio.ByteBuffer[], offset: number /*int*/, length: number /*int*/, block: org.apache.tomcat.util.net.SocketWrapperBase.BlockingMode, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit, attachment: A, check: org.apache.tomcat.util.net.SocketWrapperBase.CompletionCheck, handler: java.nio.channels.CompletionHandler<java.lang.Long | number, any>): org.apache.tomcat.util.net.SocketWrapperBase.CompletionState
                        /**
                         * Gather write. The completion handler will be called once some
                         * data has been written or an error occurred. If a CompletionCheck
                         * object has been provided, the completion handler will only be
                         * called if the callHandler method returned true. If no
                         * CompletionCheck object has been provided, the default NIO2
                         * behavior is used: the completion handler will be called, even
                         * if the write is incomplete and data remains in the buffers, or
                         * if the write completed inline.
                         * @param block is the blocking mode that will be used for this operation
                         * @param timeout timeout duration for the write
                         * @param unit units for the timeout duration
                         * @param attachment an object to attach to the I/O operation that will be
                         *         used when calling the completion handler
                         * @param check for the IO operation completion
                         * @param handler to call when the IO is complete
                         * @param srcs buffers
                         * @param <A> The attachment type
                         * @return the completion state (done, done inline, or still pending)
                         */
                        // @ts-ignore
                        public write<A>(block: org.apache.tomcat.util.net.SocketWrapperBase.BlockingMode, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit, attachment: A, check: org.apache.tomcat.util.net.SocketWrapperBase.CompletionCheck, handler: java.nio.channels.CompletionHandler<java.lang.Long | number, any>, ...srcs: java.nio.ByteBuffer[]): org.apache.tomcat.util.net.SocketWrapperBase.CompletionState
                        /**
                         * Gather write. The completion handler will be called once some
                         * data has been written or an error occurred. If a CompletionCheck
                         * object has been provided, the completion handler will only be
                         * called if the callHandler method returned true. If no
                         * CompletionCheck object has been provided, the default NIO2
                         * behavior is used: the completion handler will be called, even
                         * if the write is incomplete and data remains in the buffers, or
                         * if the write completed inline.
                         * @param srcs buffers
                         * @param offset in the buffer array
                         * @param length in the buffer array
                         * @param block is the blocking mode that will be used for this operation
                         * @param timeout timeout duration for the write
                         * @param unit units for the timeout duration
                         * @param attachment an object to attach to the I/O operation that will be
                         *         used when calling the completion handler
                         * @param check for the IO operation completion
                         * @param handler to call when the IO is complete
                         * @param <A> The attachment type
                         * @return the completion state (done, done inline, or still pending)
                         */
                        // @ts-ignore
                        public write<A>(srcs: java.nio.ByteBuffer[], offset: number /*int*/, length: number /*int*/, block: org.apache.tomcat.util.net.SocketWrapperBase.BlockingMode, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit, attachment: A, check: org.apache.tomcat.util.net.SocketWrapperBase.CompletionCheck, handler: java.nio.channels.CompletionHandler<java.lang.Long | number, any>): org.apache.tomcat.util.net.SocketWrapperBase.CompletionState
                        // @ts-ignore
                        static transfer(from: number /*byte*/[], offset: number /*int*/, length: number /*int*/, to: java.nio.ByteBuffer): number /*int*/
                        // @ts-ignore
                        static transfer(from: java.nio.ByteBuffer, to: java.nio.ByteBuffer): number /*int*/
                    }
                }
            }
        }
    }
}
