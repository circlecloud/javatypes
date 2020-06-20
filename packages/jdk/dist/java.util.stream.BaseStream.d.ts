declare namespace java {
    namespace util {
        namespace stream {
            /**
             * Base interface for streams, which are sequences of elements supporting
             * sequential and parallel aggregate operations.  The following example
             * illustrates an aggregate operation using the stream types {@link Stream}
             * and {@link IntStream}, computing the sum of the weights of the red widgets:
             * <pre>{@code
             * int sum = widgets.stream()
             * .filter(w -> w.getColor() == RED)
             * .mapToInt(w -> w.getWeight())
             * .sum();
             * }</pre>
             * See the class documentation for {@link Stream} and the package documentation
             * for <a href="package-summary.html">java.util.stream</a> for additional
             * specification of streams, stream operations, stream pipelines, and
             * parallelism, which governs the behavior of all stream types.
             * @param <T> the type of the stream elements
             * @param <S> the type of of the stream implementing {#code BaseStream}
             * @since 1.8
             * @see Stream
             * @see IntStream
             * @see LongStream
             * @see DoubleStream
             * @see <a href="package-summary.html">java.util.stream</a>
             */
            // @ts-ignore
            interface BaseStream<T, S extends java.util.stream.BaseStream<T, S>> extends java.lang.AutoCloseable {
                /**
                 * Returns an iterator for the elements of this stream.
                 * <p>This is a <a href="package-summary.html#StreamOps">terminal
                 * operation</a>.
                 * @return the element iterator for this stream
                 */
                // @ts-ignore
                iterator(): java.util.Iterator<T>
                /**
                 * Returns a spliterator for the elements of this stream.
                 * <p>This is a <a href="package-summary.html#StreamOps">terminal
                 * operation</a>.
                 * @return the element spliterator for this stream
                 */
                // @ts-ignore
                spliterator(): java.util.Spliterator<T>
                /**
                 * Returns whether this stream, if a terminal operation were to be executed,
                 * would execute in parallel.  Calling this method after invoking an
                 * terminal stream operation method may yield unpredictable results.
                 * @return {#code true} if this stream would execute in parallel if executed
                 */
                // @ts-ignore
                isParallel(): boolean
                /**
                 * Returns an equivalent stream that is sequential.  May return
                 * itself, either because the stream was already sequential, or because
                 * the underlying stream state was modified to be sequential.
                 * <p>This is an <a href="package-summary.html#StreamOps">intermediate
                 * operation</a>.
                 * @return a sequential stream
                 */
                // @ts-ignore
                sequential(): S
                /**
                 * Returns an equivalent stream that is parallel.  May return
                 * itself, either because the stream was already parallel, or because
                 * the underlying stream state was modified to be parallel.
                 * <p>This is an <a href="package-summary.html#StreamOps">intermediate
                 * operation</a>.
                 * @return a parallel stream
                 */
                // @ts-ignore
                parallel(): S
                /**
                 * Returns an equivalent stream that is
                 * <a href="package-summary.html#Ordering">unordered</a>.  May return
                 * itself, either because the stream was already unordered, or because
                 * the underlying stream state was modified to be unordered.
                 * <p>This is an <a href="package-summary.html#StreamOps">intermediate
                 * operation</a>.
                 * @return an unordered stream
                 */
                // @ts-ignore
                unordered(): S
                /**
                 * Returns an equivalent stream with an additional close handler.  Close
                 * handlers are run when the {@link #close()} method
                 * is called on the stream, and are executed in the order they were
                 * added.  All close handlers are run, even if earlier close handlers throw
                 * exceptions.  If any close handler throws an exception, the first
                 * exception thrown will be relayed to the caller of {@code close()}, with
                 * any remaining exceptions added to that exception as suppressed exceptions
                 * (unless one of the remaining exceptions is the same exception as the
                 * first exception, since an exception cannot suppress itself.)  May
                 * return itself.
                 * <p>This is an <a href="package-summary.html#StreamOps">intermediate
                 * operation</a>.
                 * @param closeHandler A task to execute when the stream is closed
                 * @return a stream with a handler that is run if the stream is closed
                 */
                // @ts-ignore
                onClose(closeHandler: java.lang.Runnable): S
                /**
                 * Closes this stream, causing all close handlers for this stream pipeline
                 * to be called.
                 * @see AutoCloseable#close()
                 */
                // @ts-ignore
                close(): void
            }
        }
    }
}
