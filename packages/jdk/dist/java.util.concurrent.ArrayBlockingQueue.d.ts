declare namespace java {
    namespace util {
        namespace concurrent {
            /**
             * A bounded {@linkplain BlockingQueue blocking queue} backed by an
             * array.  This queue orders elements FIFO (first-in-first-out).  The
             * <em>head</em> of the queue is that element that has been on the
             * queue the longest time.  The <em>tail</em> of the queue is that
             * element that has been on the queue the shortest time. New elements
             * are inserted at the tail of the queue, and the queue retrieval
             * operations obtain elements at the head of the queue.
             * <p>This is a classic &quot;bounded buffer&quot;, in which a
             * fixed-sized array holds elements inserted by producers and
             * extracted by consumers.  Once created, the capacity cannot be
             * changed.  Attempts to {@code put} an element into a full queue
             * will result in the operation blocking; attempts to {@code take} an
             * element from an empty queue will similarly block.
             * <p>This class supports an optional fairness policy for ordering
             * waiting producer and consumer threads.  By default, this ordering
             * is not guaranteed. However, a queue constructed with fairness set
             * to {@code true} grants threads access in FIFO order. Fairness
             * generally decreases throughput but reduces variability and avoids
             * starvation.
             * <p>This class and its iterator implement all of the
             * <em>optional</em> methods of the {@link Collection} and {@link
             * Iterator} interfaces.
             * <p>This class is a member of the
             * <a href="{@docRoot}/../technotes/guides/collections/index.html">
             * Java Collections Framework</a>.
             * @since 1.5
             * @author Doug Lea
             * @param <E> the type of elements held in this collection
             */
            // @ts-ignore
            class ArrayBlockingQueue<E> extends java.util.AbstractQueue<E> implements java.util.concurrent.BlockingQueue<E>, java.io.Serializable {
                /**
                 * Creates an {@code ArrayBlockingQueue} with the given (fixed)
                 * capacity and default access policy.
                 * @param capacity the capacity of this queue
                 * @throws IllegalArgumentException if {#code capacity < 1}
                 */
                // @ts-ignore
                constructor(capacity: number /*int*/)
                /**
                 * Creates an {@code ArrayBlockingQueue} with the given (fixed)
                 * capacity and the specified access policy.
                 * @param capacity the capacity of this queue
                 * @param fair if {#code true} then queue accesses for threads blocked
                 *         on insertion or removal, are processed in FIFO order;
                 *         if {@code false} the access order is unspecified.
                 * @throws IllegalArgumentException if {#code capacity < 1}
                 */
                // @ts-ignore
                constructor(capacity: number /*int*/, fair: boolean)
                /**
                 * Creates an {@code ArrayBlockingQueue} with the given (fixed)
                 * capacity, the specified access policy and initially containing the
                 * elements of the given collection,
                 * added in traversal order of the collection's iterator.
                 * @param capacity the capacity of this queue
                 * @param fair if {#code true} then queue accesses for threads blocked
                 *         on insertion or removal, are processed in FIFO order;
                 *         if {@code false} the access order is unspecified.
                 * @param c the collection of elements to initially contain
                 * @throws IllegalArgumentException if {#code capacity} is less than
                 *          {@code c.size()}, or less than 1.
                 * @throws NullPointerException if the specified collection or any
                 *          of its elements are null
                 */
                // @ts-ignore
                constructor(capacity: number /*int*/, fair: boolean, c: Array<E>)
                /**
                 * Inserts the specified element at the tail of this queue if it is
                 * possible to do so immediately without exceeding the queue's capacity,
                 * returning {@code true} upon success and throwing an
                 * {@code IllegalStateException} if this queue is full.
                 * @param e the element to add
                 * @return {#code true} (as specified by {@link Collection#add})
                 * @throws IllegalStateException if this queue is full
                 * @throws NullPointerException if the specified element is null
                 */
                // @ts-ignore
                add(e: E): boolean
                /**
                 * Inserts the specified element at the tail of this queue if it is
                 * possible to do so immediately without exceeding the queue's capacity,
                 * returning {@code true} upon success and {@code false} if this queue
                 * is full.  This method is generally preferable to method {@link #add},
                 * which can fail to insert an element only by throwing an exception.
                 * @throws NullPointerException if the specified element is null
                 */
                // @ts-ignore
                offer(e: E): boolean
                /**
                 * Inserts the specified element at the tail of this queue, waiting
                 * for space to become available if the queue is full.
                 * @throws InterruptedException {#inheritDoc}
                 * @throws NullPointerException {#inheritDoc}
                 */
                // @ts-ignore
                put(e: E): void
                /**
                 * Inserts the specified element at the tail of this queue, waiting
                 * up to the specified wait time for space to become available if
                 * the queue is full.
                 * @throws InterruptedException {#inheritDoc}
                 * @throws NullPointerException {#inheritDoc}
                 */
                // @ts-ignore
                offer(e: E, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): boolean
                // @ts-ignore
                poll(): E
                // @ts-ignore
                take(): E
                // @ts-ignore
                poll(timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): E
                // @ts-ignore
                peek(): E
                /**
                 * Returns the number of elements in this queue.
                 * @return the number of elements in this queue
                 */
                // @ts-ignore
                size(): int
                /**
                 * Returns the number of additional elements that this queue can ideally
                 * (in the absence of memory or resource constraints) accept without
                 * blocking. This is always equal to the initial capacity of this queue
                 * less the current {@code size} of this queue.
                 * <p>Note that you <em>cannot</em> always tell if an attempt to insert
                 * an element will succeed by inspecting {@code remainingCapacity}
                 * because it may be the case that another thread is about to
                 * insert or remove an element.
                 */
                // @ts-ignore
                remainingCapacity(): int
                /**
                 * Removes a single instance of the specified element from this queue,
                 * if it is present.  More formally, removes an element {@code e} such
                 * that {@code o.equals(e)}, if this queue contains one or more such
                 * elements.
                 * Returns {@code true} if this queue contained the specified element
                 * (or equivalently, if this queue changed as a result of the call).
                 * <p>Removal of interior elements in circular array based queues
                 * is an intrinsically slow and disruptive operation, so should
                 * be undertaken only in exceptional circumstances, ideally
                 * only when the queue is known not to be accessible by other
                 * threads.
                 * @param o element to be removed from this queue, if present
                 * @return {#code true} if this queue changed as a result of the call
                 */
                // @ts-ignore
                remove(o: any): boolean
                /**
                 * Returns {@code true} if this queue contains the specified element.
                 * More formally, returns {@code true} if and only if this queue contains
                 * at least one element {@code e} such that {@code o.equals(e)}.
                 * @param o object to be checked for containment in this queue
                 * @return {#code true} if this queue contains the specified element
                 */
                // @ts-ignore
                contains(o: any): boolean
                /**
                 * Returns an array containing all of the elements in this queue, in
                 * proper sequence.
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
                 * Returns an array containing all of the elements in this queue, in
                 * proper sequence; the runtime type of the returned array is that of
                 * the specified array.  If the queue fits in the specified array, it
                 * is returned therein.  Otherwise, a new array is allocated with the
                 * runtime type of the specified array and the size of this queue.
                 * <p>If this queue fits in the specified array with room to spare
                 * (i.e., the array has more elements than this queue), the element in
                 * the array immediately following the end of the queue is set to
                 * {@code null}.
                 * <p>Like the {@link #toArray()} method, this method acts as bridge between
                 * array-based and collection-based APIs.  Further, this method allows
                 * precise control over the runtime type of the output array, and may,
                 * under certain circumstances, be used to save allocation costs.
                 * <p>Suppose {@code x} is a queue known to contain only strings.
                 * The following code can be used to dump the queue into a newly
                 * allocated array of {@code String}:
                 * <pre> {@code String[] y = x.toArray(new String[0]);}</pre>
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
                // @ts-ignore
                toString(): java.lang.String
                /**
                 * Atomically removes all of the elements from this queue.
                 * The queue will be empty after this call returns.
                 */
                // @ts-ignore
                clear(): void
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
                 * Returns an iterator over the elements in this queue in proper sequence.
                 * The elements will be returned in order from first (head) to last (tail).
                 * <p>The returned iterator is
                 * <a href="package-summary.html#Weakly"><i>weakly consistent</i></a>.
                 * @return an iterator over the elements in this queue in proper sequence
                 */
                // @ts-ignore
                iterator(): java.util.Iterator<E>
                /**
                 * Returns a {@link Spliterator} over the elements in this queue.
                 * <p>The returned spliterator is
                 * <a href="package-summary.html#Weakly"><i>weakly consistent</i></a>.
                 * <p>The {@code Spliterator} reports {@link Spliterator#CONCURRENT},
                 * {@link Spliterator#ORDERED}, and {@link Spliterator#NONNULL}.
                 * @implNote The {#code Spliterator} implements {@code trySplit} to permit limited
                 *  parallelism.
                 * @return a {#code Spliterator} over the elements in this queue
                 * @since 1.8
                 */
                // @ts-ignore
                spliterator(): java.util.Spliterator<E>
            }
        }
    }
}
