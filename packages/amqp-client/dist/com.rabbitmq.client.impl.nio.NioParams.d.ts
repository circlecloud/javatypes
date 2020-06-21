declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace nio {
                    /**
                     * Parameters used to configure the NIO mode of a {@link com.rabbitmq.client.ConnectionFactory}.
                     * @since 4.0.0
                     */
                    // @ts-ignore
                    class NioParams extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(nioParams: com.rabbitmq.client.impl.nio.NioParams)
                        /**
                         * Enable server hostname verification for TLS connections.
                         * @return this {#link NioParams} instance
                         * @see NioParams#setSslEngineConfigurator(SslEngineConfigurator)
                         * @see com.rabbitmq.client.SslEngineConfigurators#ENABLE_HOSTNAME_VERIFICATION
                         */
                        // @ts-ignore
                        public enableHostnameVerification(): com.rabbitmq.client.impl.nio.NioParams
                        // @ts-ignore
                        public getReadByteBufferSize(): number /*int*/
                        /**
                         * Sets the size in byte of the read {@link java.nio.ByteBuffer} used in the NIO loop.
                         * Default is 32768.
                         * <p>
                         * This parameter isn't used when using SSL/TLS, where {@link java.nio.ByteBuffer}
                         * size is set up according to the {@link javax.net.ssl.SSLSession} packet size.
                         * @param readByteBufferSize size of the {#link java.nio.ByteBuffer} for inbound data
                         * @return this {#link NioParams} instance
                         */
                        // @ts-ignore
                        public setReadByteBufferSize(readByteBufferSize: number /*int*/): com.rabbitmq.client.impl.nio.NioParams
                        // @ts-ignore
                        public getWriteByteBufferSize(): number /*int*/
                        /**
                         * Sets the size in byte of the write {@link java.nio.ByteBuffer} used in the NIO loop.
                         * Default is 32768.
                         * <p>
                         * This parameter isn't used when using SSL/TLS, where {@link java.nio.ByteBuffer}
                         * size is set up according to the {@link javax.net.ssl.SSLSession} packet size.
                         * @param writeByteBufferSize size of the {#link java.nio.ByteBuffer} used for outbound data
                         * @return this {#link NioParams} instance
                         */
                        // @ts-ignore
                        public setWriteByteBufferSize(writeByteBufferSize: number /*int*/): com.rabbitmq.client.impl.nio.NioParams
                        // @ts-ignore
                        public getNbIoThreads(): number /*int*/
                        /**
                         * Sets the max number of threads/tasks used for NIO. Default is 1.
                         * Set this number according to the number of simultaneous connections
                         * and their activity.
                         * Threads/tasks are created as necessary (e.g. with 10 threads, when
                         * 10 connections have been created).
                         * Once a connection is created, it's assigned to a thread/task and
                         * all its IO activity is handled by this thread/task.
                         * <p>
                         * When idle for a few seconds (i.e. without any connection to perform IO for),
                         * a thread/task stops and is recreated if necessary.
                         * @param nbIoThreads
                         * @return this {#link NioParams} instance
                         */
                        // @ts-ignore
                        public setNbIoThreads(nbIoThreads: number /*int*/): com.rabbitmq.client.impl.nio.NioParams
                        // @ts-ignore
                        public getWriteEnqueuingTimeoutInMs(): number /*int*/
                        /**
                         * Sets the timeout for queuing outbound frames. Default is 10,000 ms.
                         * Every requests to the server is divided into frames
                         * that are then queued in a {@link java.util.concurrent.BlockingQueue} before
                         * being sent on the network by a IO thread.
                         * <p>
                         * If the IO thread cannot cope with the frames dispatch, the
                         * {@link java.util.concurrent.BlockingQueue} gets filled up and blocks
                         * (blocking the calling thread by the same occasion). This timeout is the
                         * time the {@link java.util.concurrent.BlockingQueue} will wait before
                         * rejecting the outbound frame. The calling thread will then received
                         * an exception.
                         * <p>
                         * The appropriate value depends on the application scenarios:
                         * rate of outbound data (published messages, acknowledgment, etc), network speed...
                         * @param writeEnqueuingTimeoutInMs
                         * @return this {#link NioParams} instance
                         * @see NioParams#setWriteQueueCapacity(int)
                         */
                        // @ts-ignore
                        public setWriteEnqueuingTimeoutInMs(writeEnqueuingTimeoutInMs: number /*int*/): com.rabbitmq.client.impl.nio.NioParams
                        // @ts-ignore
                        public getNioExecutor(): java.util.concurrent.ExecutorService
                        /**
                         * Sets the {@link ExecutorService} to use for NIO threads/tasks.
                         * Default is to use the thread factory.
                         * <p>
                         * The {@link ExecutorService} should be able to run the
                         * number of requested IO threads, plus a few more, as it's also
                         * used to dispatch the shutdown of connections.
                         * <p>
                         * Connection shutdown can also be handled by a dedicated {@link ExecutorService},
                         * see {@link #setConnectionShutdownExecutor(ExecutorService)}.
                         * <p>
                         * It's developer's responsibility to shut down the executor
                         * when it is no longer needed.
                         * <p>
                         * The thread factory isn't used if an executor service is set up.
                         * @param nioExecutor {#link ExecutorService} used for IO threads and connection shutdown
                         * @return this {#link NioParams} instance
                         * @see NioParams#setNbIoThreads(int)
                         * @see NioParams#setThreadFactory(ThreadFactory)
                         * @see NioParams#setConnectionShutdownExecutor(ExecutorService)
                         */
                        // @ts-ignore
                        public setNioExecutor(nioExecutor: java.util.concurrent.ExecutorService): com.rabbitmq.client.impl.nio.NioParams
                        // @ts-ignore
                        public getThreadFactory(): java.util.concurrent.ThreadFactory
                        /**
                         * Sets the {@link ThreadFactory} to use for NIO threads/tasks.
                         * Default is to use the {@link com.rabbitmq.client.ConnectionFactory}'s
                         * {@link ThreadFactory}.
                         * <p>
                         * The {@link ThreadFactory} is used to spawn the IO threads
                         * and dispatch the shutdown of connections.
                         * @param threadFactory {#link ThreadFactory} used for IO threads and connection shutdown
                         * @return this {#link NioParams} instance
                         * @see NioParams#setNbIoThreads(int)
                         * @see NioParams#setNioExecutor(ExecutorService)
                         */
                        // @ts-ignore
                        public setThreadFactory(threadFactory: java.util.concurrent.ThreadFactory): com.rabbitmq.client.impl.nio.NioParams
                        // @ts-ignore
                        public getWriteQueueCapacity(): number /*int*/
                        /**
                         * Set the capacity of the queue used for outbound frames.
                         * Default capacity is 10,000.
                         * @param writeQueueCapacity
                         * @return this {#link NioParams} instance
                         * @see NioParams#setWriteEnqueuingTimeoutInMs(int)
                         */
                        // @ts-ignore
                        public setWriteQueueCapacity(writeQueueCapacity: number /*int*/): com.rabbitmq.client.impl.nio.NioParams
                        // @ts-ignore
                        public getSocketChannelConfigurator(): com.rabbitmq.client.SocketChannelConfigurator
                        /**
                         * Set the {@link java.nio.channels.SocketChannel} configurator.
                         * This gets a chance to "configure" a socket channel
                         * before it has been opened. The default implementation disables
                         * Nagle's algorithm.
                         * @param configurator the configurator to use
                         */
                        // @ts-ignore
                        public setSocketChannelConfigurator(configurator: com.rabbitmq.client.SocketChannelConfigurator): void
                        // @ts-ignore
                        public getSslEngineConfigurator(): com.rabbitmq.client.SslEngineConfigurator
                        /**
                         * Set the {@link SSLEngine} configurator.
                         * This gets a change to "configure" the SSL engine
                         * before the connection has been opened. This can be
                         * used e.g. to set {@link javax.net.ssl.SSLParameters}.
                         * The default implementation doesn't do anything.
                         * @param configurator the configurator to use
                         */
                        // @ts-ignore
                        public setSslEngineConfigurator(configurator: com.rabbitmq.client.SslEngineConfigurator): void
                        // @ts-ignore
                        public getConnectionShutdownExecutor(): java.util.concurrent.ExecutorService
                        /**
                         * Set the {@link ExecutorService} used for connection shutdown.
                         * If not set, falls back to the NIO executor and then the thread factory.
                         * This executor service is useful when strict control of the number of threads
                         * is necessary, the application can experience the closing of several connections
                         * at once, and automatic recovery is enabled. In such cases, the connection recovery
                         * can take place in the same pool of threads as the NIO operations, which can
                         * create deadlocks (all the threads of the pool are busy recovering, and there's no
                         * thread left for NIO, so connections never recover).
                         * <p>
                         * Note it's developer's responsibility to shut down the executor
                         * when it is no longer needed.
                         * <p>
                         * Using the thread factory for such scenarios avoid the deadlocks, at the price
                         * of potentially creating many short-lived threads in case of massive connection lost.
                         * <p>
                         * With both the NIO and connection shutdown executor services set and configured
                         * accordingly, the application can control reliably the number of threads used.
                         * @param connectionShutdownExecutor the executor service to use
                         * @return this {#link NioParams} instance
                         * @see NioParams#setNioExecutor(ExecutorService)
                         * @since 5.4.0
                         */
                        // @ts-ignore
                        public setConnectionShutdownExecutor(connectionShutdownExecutor: java.util.concurrent.ExecutorService): com.rabbitmq.client.impl.nio.NioParams
                        /**
                         * Set the factory to create {@link java.nio.ByteBuffer}s.
                         * <p>
                         * The default implementation creates heap-based {@link java.nio.ByteBuffer}s.
                         * @param byteBufferFactory the factory to use
                         * @return this {#link NioParams} instance
                         * @see ByteBufferFactory
                         * @see DefaultByteBufferFactory
                         * @since 5.5.0
                         */
                        // @ts-ignore
                        public setByteBufferFactory(byteBufferFactory: com.rabbitmq.client.impl.nio.ByteBufferFactory): com.rabbitmq.client.impl.nio.NioParams
                        // @ts-ignore
                        public getByteBufferFactory(): com.rabbitmq.client.impl.nio.ByteBufferFactory
                        /**
                         * Set the factory to create {@link NioQueue}s.
                         * <p>
                         * The default uses a {@link ArrayBlockingQueue}.
                         * @param writeQueueFactory the factory to use
                         * @return this {#link NioParams} instance
                         * @see NioQueue
                         * @since 5.5.0
                         */
                        // @ts-ignore
                        public setWriteQueueFactory(writeQueueFactory: java.util.function$.Function<com.rabbitmq.client.impl.nio.NioContext, com.rabbitmq.client.impl.nio.NioQueue>): com.rabbitmq.client.impl.nio.NioParams
                        // @ts-ignore
                        public getWriteQueueFactory(): java.util.function$.Function<com.rabbitmq.client.impl.nio.NioContext, com.rabbitmq.client.impl.nio.NioQueue>
                    }
                }
            }
        }
    }
}
