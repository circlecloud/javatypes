declare namespace org {
    namespace springframework {
        namespace core {
            namespace io {
                namespace buffer {
                    /**
                     * Utility class for working with {@link DataBuffer DataBuffers}.
                     * @author Arjen Poutsma
                     * @author Brian Clozel
                     * @since 5.0
                     */
                    // @ts-ignore
                    abstract class DataBufferUtils extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Obtain a {@link InputStream} from the given supplier, and read it into a
                         * {@code Flux} of {@code DataBuffer}s. Closes the input stream when the
                         * Flux is terminated.
                         * @param inputStreamSupplier the supplier for the input stream to read from
                         * @param bufferFactory the factory to create data buffers with
                         * @param bufferSize the maximum size of the data buffers
                         * @return a Flux of data buffers read from the given channel
                         */
                        // @ts-ignore
                        public static readInputStream(inputStreamSupplier: java.util.concurrent.Callable<java.io.InputStream>, bufferFactory: org.springframework.core.io.buffer.DataBufferFactory, bufferSize: number /*int*/): object
                        /**
                         * Obtain a {@link ReadableByteChannel} from the given supplier, and read
                         * it into a {@code Flux} of {@code DataBuffer}s. Closes the channel when
                         * the Flux is terminated.
                         * @param channelSupplier the supplier for the channel to read from
                         * @param bufferFactory the factory to create data buffers with
                         * @param bufferSize the maximum size of the data buffers
                         * @return a Flux of data buffers read from the given channel
                         */
                        // @ts-ignore
                        public static readByteChannel(channelSupplier: java.util.concurrent.Callable<java.nio.channels.ReadableByteChannel>, bufferFactory: org.springframework.core.io.buffer.DataBufferFactory, bufferSize: number /*int*/): object
                        /**
                         * Obtain a {@code AsynchronousFileChannel} from the given supplier, and read
                         * it into a {@code Flux} of {@code DataBuffer}s. Closes the channel when
                         * the Flux is terminated.
                         * @param channelSupplier the supplier for the channel to read from
                         * @param bufferFactory the factory to create data buffers with
                         * @param bufferSize the maximum size of the data buffers
                         * @return a Flux of data buffers read from the given channel
                         */
                        // @ts-ignore
                        public static readAsynchronousFileChannel(channelSupplier: java.util.concurrent.Callable<java.nio.channels.AsynchronousFileChannel>, bufferFactory: org.springframework.core.io.buffer.DataBufferFactory, bufferSize: number /*int*/): object
                        /**
                         * Obtain a {@code AsynchronousFileChannel} from the given supplier, and
                         * read it into a {@code Flux} of {@code DataBuffer}s, starting at the given
                         * position. Closes the channel when the Flux is terminated.
                         * @param channelSupplier the supplier for the channel to read from
                         * @param position the position to start reading from
                         * @param bufferFactory the factory to create data buffers with
                         * @param bufferSize the maximum size of the data buffers
                         * @return a Flux of data buffers read from the given channel
                         */
                        // @ts-ignore
                        public static readAsynchronousFileChannel(channelSupplier: java.util.concurrent.Callable<java.nio.channels.AsynchronousFileChannel>, position: number /*long*/, bufferFactory: org.springframework.core.io.buffer.DataBufferFactory, bufferSize: number /*int*/): object
                        /**
                         * Read bytes from the given file {@code Path} into a {@code Flux} of {@code DataBuffer}s.
                         * The method ensures that the file is closed when the flux is terminated.
                         * @param path the path to read bytes from
                         * @param bufferFactory the factory to create data buffers with
                         * @param bufferSize the maximum size of the data buffers
                         * @return a Flux of data buffers read from the given channel
                         * @since 5.2
                         */
                        // @ts-ignore
                        public static read(path: java.nio.file.Path, bufferFactory: org.springframework.core.io.buffer.DataBufferFactory, bufferSize: number /*int*/, ...options: java.nio.file.OpenOption[]): object
                        /**
                         * Read the given {@code Resource} into a {@code Flux} of {@code DataBuffer}s.
                         * <p>If the resource is a file, it is read into an
                         * {@code AsynchronousFileChannel} and turned to {@code Flux} via
                         * {@link #readAsynchronousFileChannel(Callable, DataBufferFactory, int)} or else
                         * fall back to {@link #readByteChannel(Callable, DataBufferFactory, int)}.
                         * Closes the channel when the flux is terminated.
                         * @param resource the resource to read from
                         * @param bufferFactory the factory to create data buffers with
                         * @param bufferSize the maximum size of the data buffers
                         * @return a Flux of data buffers read from the given channel
                         */
                        // @ts-ignore
                        public static read(resource: org.springframework.core.io.Resource, bufferFactory: org.springframework.core.io.buffer.DataBufferFactory, bufferSize: number /*int*/): object
                        /**
                         * Read the given {@code Resource} into a {@code Flux} of {@code DataBuffer}s
                         * starting at the given position.
                         * <p>If the resource is a file, it is read into an
                         * {@code AsynchronousFileChannel} and turned to {@code Flux} via
                         * {@link #readAsynchronousFileChannel(Callable, DataBufferFactory, int)} or else
                         * fall back on {@link #readByteChannel(Callable, DataBufferFactory, int)}.
                         * Closes the channel when the flux is terminated.
                         * @param resource the resource to read from
                         * @param position the position to start reading from
                         * @param bufferFactory the factory to create data buffers with
                         * @param bufferSize the maximum size of the data buffers
                         * @return a Flux of data buffers read from the given channel
                         */
                        // @ts-ignore
                        public static read(resource: org.springframework.core.io.Resource, position: number /*long*/, bufferFactory: org.springframework.core.io.buffer.DataBufferFactory, bufferSize: number /*int*/): object
                        /**
                         * Write the given stream of {@link DataBuffer DataBuffers} to the given
                         * {@code OutputStream}. Does <strong>not</strong> close the output stream
                         * when the flux is terminated, and does <strong>not</strong>
                         * {@linkplain #release(DataBuffer) release} the data buffers in the source.
                         * If releasing is required, then subscribe to the returned {@code Flux}
                         * with a {@link #releaseConsumer()}.
                         * <p>Note that the writing process does not start until the returned
                         * {@code Flux} is subscribed to.
                         * @param source the stream of data buffers to be written
                         * @param outputStream the output stream to write to
                         * @return a Flux containing the same buffers as in {#code source}, that
                         *  starts the writing process when subscribed to, and that publishes any
                         *  writing errors and the completion signal
                         */
                        // @ts-ignore
                        public static write(source: object, outputStream: java.io.OutputStream): object
                        /**
                         * Write the given stream of {@link DataBuffer DataBuffers} to the given
                         * {@code WritableByteChannel}. Does <strong>not</strong> close the channel
                         * when the flux is terminated, and does <strong>not</strong>
                         * {@linkplain #release(DataBuffer) release} the data buffers in the source.
                         * If releasing is required, then subscribe to the returned {@code Flux}
                         * with a {@link #releaseConsumer()}.
                         * <p>Note that the writing process does not start until the returned
                         * {@code Flux} is subscribed to.
                         * @param source the stream of data buffers to be written
                         * @param channel the channel to write to
                         * @return a Flux containing the same buffers as in {#code source}, that
                         *  starts the writing process when subscribed to, and that publishes any
                         *  writing errors and the completion signal
                         */
                        // @ts-ignore
                        public static write(source: object, channel: java.nio.channels.WritableByteChannel): object
                        /**
                         * Write the given stream of {@link DataBuffer DataBuffers} to the given
                         * {@code AsynchronousFileChannel}. Does <strong>not</strong> close the
                         * channel when the flux is terminated, and does <strong>not</strong>
                         * {@linkplain #release(DataBuffer) release} the data buffers in the source.
                         * If releasing is required, then subscribe to the returned {@code Flux}
                         * with a {@link #releaseConsumer()}.
                         * <p>Note that the writing process does not start until the returned
                         * {@code Flux} is subscribed to.
                         * @param source the stream of data buffers to be written
                         * @param channel the channel to write to
                         * @return a Flux containing the same buffers as in {#code source}, that
                         *  starts the writing process when subscribed to, and that publishes any
                         *  writing errors and the completion signal
                         * @since 5.0.10
                         */
                        // @ts-ignore
                        public static write(source: object, channel: java.nio.channels.AsynchronousFileChannel): object
                        /**
                         * Write the given stream of {@link DataBuffer DataBuffers} to the given
                         * {@code AsynchronousFileChannel}. Does <strong>not</strong> close the channel
                         * when the flux is terminated, and does <strong>not</strong>
                         * {@linkplain #release(DataBuffer) release} the data buffers in the source.
                         * If releasing is required, then subscribe to the returned {@code Flux} with a
                         * {@link #releaseConsumer()}.
                         * <p>Note that the writing process does not start until the returned
                         * {@code Flux} is subscribed to.
                         * @param source the stream of data buffers to be written
                         * @param channel the channel to write to
                         * @param position the file position where writing is to begin; must be non-negative
                         * @return a flux containing the same buffers as in {#code source}, that
                         *  starts the writing process when subscribed to, and that publishes any
                         *  writing errors and the completion signal
                         */
                        // @ts-ignore
                        public static write(source: object, channel: java.nio.channels.AsynchronousFileChannel, position: number /*long*/): object
                        /**
                         * Write the given stream of {@link DataBuffer DataBuffers} to the given
                         * file {@link Path}. The optional {@code options} parameter specifies
                         * how the file is created or opened (defaults to
                         * {@link StandardOpenOption#CREATE CREATE},
                         * {@link StandardOpenOption#TRUNCATE_EXISTING TRUNCATE_EXISTING}, and
                         * {@link StandardOpenOption#WRITE WRITE}).
                         * @param source the stream of data buffers to be written
                         * @param destination the path to the file
                         * @param options the options specifying how the file is opened
                         * @return a {#link Mono} that indicates completion or error
                         * @since 5.2
                         */
                        // @ts-ignore
                        public static write(source: object, destination: java.nio.file.Path, ...options: java.nio.file.OpenOption[]): object
                        /**
                         * Relay buffers from the given {@link Publisher} until the total
                         * {@linkplain DataBuffer#readableByteCount() byte count} reaches
                         * the given maximum byte count, or until the publisher is complete.
                         * @param publisher the publisher to filter
                         * @param maxByteCount the maximum byte count
                         * @return a flux whose maximum byte count is {#code maxByteCount}
                         */
                        // @ts-ignore
                        public static takeUntilByteCount(publisher: object, maxByteCount: number /*long*/): object
                        /**
                         * Skip buffers from the given {@link Publisher} until the total
                         * {@linkplain DataBuffer#readableByteCount() byte count} reaches
                         * the given maximum byte count, or until the publisher is complete.
                         * @param publisher the publisher to filter
                         * @param maxByteCount the maximum byte count
                         * @return a flux with the remaining part of the given publisher
                         */
                        // @ts-ignore
                        public static skipUntilByteCount(publisher: object, maxByteCount: number /*long*/): object
                        /**
                         * Retain the given data buffer, if it is a {@link PooledDataBuffer}.
                         * @param dataBuffer the data buffer to retain
                         * @return the retained buffer
                         */
                        // @ts-ignore
                        public static retain<T extends org.springframework.core.io.buffer.DataBuffer>(dataBuffer: T): T
                        /**
                         * Release the given data buffer, if it is a {@link PooledDataBuffer} and
                         * has been {@linkplain PooledDataBuffer#isAllocated() allocated}.
                         * @param dataBuffer the data buffer to release
                         * @return {#code true} if the buffer was released; {@code false} otherwise.
                         */
                        // @ts-ignore
                        public static release(dataBuffer: org.springframework.core.io.buffer.DataBuffer): boolean
                        /**
                         * Return a consumer that calls {@link #release(DataBuffer)} on all
                         * passed data buffers.
                         */
                        // @ts-ignore
                        public static releaseConsumer(): java.util.function$.Consumer<org.springframework.core.io.buffer.DataBuffer>
                        /**
                         * Return a new {@code DataBuffer} composed from joining together the given
                         * {@code dataBuffers} elements. Depending on the {@link DataBuffer} type,
                         * the returned buffer may be a single buffer containing all data of the
                         * provided buffers, or it may be a zero-copy, composite with references to
                         * the given buffers.
                         * <p>If {@code dataBuffers} produces an error or if there is a cancel
                         * signal, then all accumulated buffers will be
                         * {@linkplain #release(DataBuffer) released}.
                         * <p>Note that the given data buffers do <strong>not</strong> have to be
                         * released. They will be released as part of the returned composite.
                         * @param dataBuffers the data buffers that are to be composed
                         * @return a buffer that is composed from the {#code dataBuffers} argument
                         * @since 5.0.3
                         */
                        // @ts-ignore
                        public static join(dataBuffers: object): object
                        /**
                         * Variant of {@link #join(Publisher)} that behaves the same way up until
                         * the specified max number of bytes to buffer. Once the limit is exceeded,
                         * {@link DataBufferLimitException} is raised.
                         * @param buffers the data buffers that are to be composed
                         * @param maxByteCount the max number of bytes to buffer, or -1 for unlimited
                         * @return a buffer with the aggregated content, possibly an empty Mono if
                         *  the max number of bytes to buffer is exceeded.
                         * @throws DataBufferLimitException if maxByteCount is exceeded
                         * @since 5.1.11
                         */
                        // @ts-ignore
                        public static join(buffers: object, maxByteCount: number /*int*/): object
                        /**
                         * Return a {@link Matcher} for the given delimiter.
                         * The matcher can be used to find the delimiters in data buffers.
                         * @param delimiter the delimiter bytes to find
                         * @return the matcher
                         * @since 5.2
                         */
                        // @ts-ignore
                        public static matcher(delimiter: number /*byte*/[]): org.springframework.core.io.buffer.DataBufferUtils.Matcher
                        /**
                         * Return a {@link Matcher} for the given delimiters.
                         * The matcher can be used to find the delimiters in data buffers.
                         * @param delimiters the delimiters bytes to find
                         * @return the matcher
                         * @since 5.2
                         */
                        // @ts-ignore
                        public static matcher(...delimiters: number /*byte*/[][]): org.springframework.core.io.buffer.DataBufferUtils.Matcher
                    }
                }
            }
        }
    }
}
