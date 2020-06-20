declare namespace java {
    namespace util {
        namespace stream {
            namespace LongStream {
                /**
                 * A mutable builder for a {@code LongStream}.
                 * <p>A stream builder has a lifecycle, which starts in a building
                 * phase, during which elements can be added, and then transitions to a built
                 * phase, after which elements may not be added.  The built phase begins
                 * begins when the {@link #build()} method is called, which creates an
                 * ordered stream whose elements are the elements that were added to the
                 * stream builder, in the order they were added.
                 * @see LongStream#builder()
                 * @since 1.8
                 */
                // @ts-ignore
                interface Builder extends java.util.function.LongConsumer {
                    /**
                     * Adds an element to the stream being built.
                     * @throws IllegalStateException if the builder has already transitioned
                     *  to the built state
                     */
                    // @ts-ignore
                    accept(t: number /*long*/): void
                    /**
                     * Adds an element to the stream being built.
                     * @implSpec The default implementation behaves as if:
                     *  <pre>{#code
                     *      accept(t)
                     *      return this;
                     *  }</pre>
                     * @param t the element to add
                     * @return {#code this} builder
                     * @throws IllegalStateException if the builder has already transitioned
                     *  to the built state
                     */
                    // @ts-ignore
                    add(t: number /*long*/): java.util.stream.LongStream.Builder
                    /**
                     * Builds the stream, transitioning this builder to the built state.
                     * An {@code IllegalStateException} is thrown if there are further
                     * attempts to operate on the builder after it has entered the built
                     * state.
                     * @return the built stream
                     * @throws IllegalStateException if the builder has already transitioned
                     *  to the built state
                     */
                    // @ts-ignore
                    build(): java.util.stream.LongStream
                }
            }
        }
    }
}
