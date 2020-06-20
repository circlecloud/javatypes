declare namespace java {
    namespace util {
        namespace Spliterators {
            /**
             * An abstract {@code Spliterator.OfLong} that implements {@code trySplit}
             * to permit limited parallelism.
             * <p>To implement a spliterator an extending class need only
             * implement {@link #tryAdvance(java.util.function.LongConsumer)}
             * tryAdvance}.  The extending class should override
             * {@link #forEachRemaining(java.util.function.LongConsumer)} forEach} if it
             * can provide a more performant implementation.
             * @apiNote This class is a useful aid for creating a spliterator when it is not
             *  possible or difficult to efficiently partition elements in a manner
             *  allowing balanced parallel computation.
             * 
             *  <p>An alternative to using this class, that also permits limited
             *  parallelism, is to create a spliterator from an iterator
             *  (see {#link #spliterator(java.util.PrimitiveIterator.OfLong, long, int)}.
             *  Depending on the circumstances using an iterator may be easier or more
             *  convenient than extending this class. For example, if there is already an
             *  iterator available to use then there is no need to extend this class.
             * @see #spliterator(java.util.PrimitiveIterator.OfLong, long, int)
             * @since 1.8
             */
            // @ts-ignore
            class AbstractLongSpliterator extends java.lang.Object implements java.util.Spliterator.OfLong {
                /**
                 * Creates a spliterator reporting the given estimated size and
                 * characteristics.
                 * @param est the estimated size of this spliterator if known, otherwise
                 *         {#code Long.MAX_VALUE}.
                 * @param additionalCharacteristics properties of this spliterator's
                 *         source or elements.  If {#code SIZED} is reported then this
                 *         spliterator will additionally report {@code SUBSIZED}.
                 */
                // @ts-ignore
                constructor(est: number /*long*/, additionalCharacteristics: number /*int*/)
                /**
                 * {@inheritDoc}
                 * This implementation permits limited parallelism.
                 */
                // @ts-ignore
                trySplit(): java.util.Spliterator.OfLong
                /**
                 * {@inheritDoc}
                 * @implSpec This implementation returns the estimated size as reported when
                 *  created and, if the estimate size is known, decreases in size when
                 *  split.
                 */
                // @ts-ignore
                estimateSize(): long
                /**
                 * {@inheritDoc}
                 * @implSpec This implementation returns the characteristics as reported when
                 *  created.
                 */
                // @ts-ignore
                characteristics(): int
            }
        }
    }
}
