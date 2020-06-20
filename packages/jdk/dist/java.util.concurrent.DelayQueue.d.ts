declare namespace java {
    namespace util {
        namespace concurrent {
            /**
             * An unbounded {@linkplain BlockingQueue blocking queue} of
             * {@code Delayed} elements, in which an element can only be taken
             * when its delay has expired.  The <em>head</em> of the queue is that
             * {@code Delayed} element whose delay expired furthest in the
             * past.  If no delay has expired there is no head and {@code poll}
             * will return {@code null}. Expiration occurs when an element's
             * {@code getDelay(TimeUnit.NANOSECONDS)} method returns a value less
             * than or equal to zero.  Even though unexpired elements cannot be
             * removed using {@code take} or {@code poll}, they are otherwise
             * treated as normal elements. For example, the {@code size} method
             * returns the count of both expired and unexpired elements.
             * This queue does not permit null elements.
             * <p>This class and its iterator implement all of the
             * <em>optional</em> methods of the {@link Collection} and {@link
             * Iterator} interfaces.  The Iterator provided in method {@link
             * #iterator()} is <em>not</em> guaranteed to traverse the elements of
             * the DelayQueue in any particular order.
             * <p>This class is a member of the
             * <a href="{@docRoot}/../technotes/guides/collections/index.html">
             * Java Collections Framework</a>.
             * @since 1.5
             * @author Doug Lea
             * @param <E> the type of elements held in this collection
             */
            // @ts-ignore
            class DelayQueue<E extends java.util.concurrent.Delayed> extends java.util.AbstractQueue<E> implements java.util.concurrent.BlockingQueue<E> {
                /**
                 * Creates a new {@code DelayQueue} that is initially empty.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates a {@code DelayQueue} initially containing the elements of the
                 * given collection of {@link Delayed} instances.
                 * @param c the collection of elements to initially contain
                 * @throws NullPointerException if the specified collection or any
                 *          of its elements are null
                 */
                // @ts-ignore
                constructor(c: Array<E>)
                /**
                 * Inserts the specified element into this delay queue.
                 * @param e the element to add
                 * @return {#code true} (as specified by {@link Collection#add})
                 * @throws NullPointerException if the specified element is null
                 */
                // @ts-ignore
                add(e: E extends java.util.concurrent.Delayed): boolean
                /**
                 * Inserts the specified element into this delay queue.
                 * @param e the element to add
                 * @return {#code true}
                 * @throws NullPointerException if the specified element is null
                 */
                // @ts-ignore
                offer(e: E extends java.util.concurrent.Delayed): boolean
                /**
                 * Inserts the specified element into this delay queue. As the queue is
                 * unbounded this method will never block.
                 * @param e the element to add
                 * @throws NullPointerException {#inheritDoc}
                 */
                // @ts-ignore
                put(e: E extends java.util.concurrent.Delayed): void
                /**
                 * Inserts the specified element into this delay queue. As the queue is
                 * unbounded this method will never block.
                 * @param e the element to add
                 * @param timeout This parameter is ignored as the method never blocks
                 * @param unit This parameter is ignored as the method never blocks
                 * @return {#code true}
                 * @throws NullPointerException {#inheritDoc}
                 */
                // @ts-ignore
                offer(e: E extends java.util.concurrent.Delayed, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): boolean
                /**
                 * Retrieves and removes the head of this queue, or returns {@code null}
                 * if this queue has no elements with an expired delay.
                 * @return the head of this queue, or {#code null} if this
                 *          queue has no elements with an expired delay
                 */
                // @ts-ignore
                poll(): E
                /**
                 * Retrieves and removes the head of this queue, waiting if necessary
                 * until an element with an expired delay is available on this queue.
                 * @return the head of this queue
                 * @throws InterruptedException {#inheritDoc}
                 */
                // @ts-ignore
                take(): E
                /**
                 * Retrieves and removes the head of this queue, waiting if necessary
                 * until an element with an expired delay is available on this queue,
                 * or the specified wait time expires.
                 * @return the head of this queue, or {#code null} if the
                 *          specified waiting time elapses before an element with
                 *          an expired delay becomes available
                 * @throws InterruptedException {#inheritDoc}
                 */
                // @ts-ignore
                poll(timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): E
                /**
                 * Retrieves, but does not remove, the head of this queue, or
                 * returns {@code null} if this queue is empty.  Unlike
                 * {@code poll}, if no expired elements are available in the queue,
                 * this method returns the element that will expire next,
                 * if one exists.
                 * @return the head of this queue, or {#code null} if this
                 *          queue is empty
                 */
                // @ts-ignore
                peek(): E
                // @ts-ignore
                size(): int
                /**
                 * @throws UnsupportedOperationException {#inheritDoc}
                 * @throws ClassCastException            {#inheritDoc}
                 * @throws NullPointerException          {#inheritDoc}
                 * @throws IllegalArgumentException      {#inheritDoc}
                 */
                // @ts-ignore
                drainTo(c: Array<any super E>): int
                /**
                 * @throws UnsupportedOperationException {#inheritDoc}
                 * @throws ClassCastException            {#inheritDoc}
                 * @throws NullPointerException          {#inheritDoc}
                 * @throws IllegalArgumentException      {#inheritDoc}
                 */
                // @ts-ignore
                drainTo(c: Array<any super E>, maxElements: number /*int*/): int
                /**
                 * Atomically removes all of the elements from this delay queue.
                 * The queue will be empty after this call returns.
                 * Elements with an unexpired delay are not waited for; they are
                 * simply discarded from the queue.
                 */
                // @ts-ignore
                clear(): void
                /**
                 * Always returns {@code Integer.MAX_VALUE} because
                 * a {@code DelayQueue} is not capacity constrained.
                 * @return {#code Integer.MAX_VALUE}
                 */
                // @ts-ignore
                remainingCapacity(): int
                /**
                 * Returns an array containing all of the elements in this queue.
                 * The returned array elements are in no particular order.
                 * <p>The returned array will be "safe" in that no references to it are
                 * maintained by this queue.  (In other words, this method must allocate
                 * a new array).  The caller is thus free to modify the returned array.
                 * <p>This method acts as bridge between array-based and collection-based
                 * APIs.
                 * @return an array containing all of the elements in this queue
                 */
                // @ts-ignore
                toArray(): java.lang.Object[]
                /**
                 * Returns an array containing all of the elements in this queue; the
                 * runtime type of the returned array is that of the specified array.
                 * The returned array elements are in no particular order.
                 * If the queue fits in the specified array, it is returned therein.
                 * Otherwise, a new array is allocated with the runtime type of the
                 * specified array and the size of this queue.
                 * <p>If this queue fits in the specified array with room to spare
                 * (i.e., the array has more elements than this queue), the element in
                 * the array immediately following the end of the queue is set to
                 * {@code null}.
                 * <p>Like the {@link #toArray()} method, this method acts as bridge between
                 * array-based and collection-based APIs.  Further, this method allows
                 * precise control over the runtime type of the output array, and may,
                 * under certain circumstances, be used to save allocation costs.
                 * <p>The following code can be used to dump a delay queue into a newly
                 * allocated array of {@code Delayed}:
                 * <pre> {@code Delayed[] a = q.toArray(new Delayed[0]);}</pre>
                 * Note that {@code toArray(new Object[0])} is identical in function to
                 * {@code toArray()}.
                 * @param a the array into which the elements of the queue are to
                 *           be stored, if it is big enough; otherwise, a new array of the
                 *           same runtime type is allocated for this purpose
                 * @return an array containing all of the elements in this queue
                 * @throws ArrayStoreException if the runtime type of the specified array
                 *          is not a supertype of the runtime type of every element in
                 *          this queue
                 * @throws NullPointerException if the specified array is null
                 */
                // @ts-ignore
                toArray<T>(a: T[]): T
                /**
                 * Removes a single instance of the specified element from this
                 * queue, if it is present, whether or not it has expired.
                 */
                // @ts-ignore
                remove(o: any): boolean
                /**
                 * Returns an iterator over all the elements (both expired and
                 * unexpired) in this queue. The iterator does not return the
                 * elements in any particular order.
                 * <p>The returned iterator is
                 * <a href="package-summary.html#Weakly"><i>weakly consistent</i></a>.
                 * @return an iterator over the elements in this queue
                 */
                // @ts-ignore
                iterator(): java.util.Iterator<E>
            }
        }
    }
}
