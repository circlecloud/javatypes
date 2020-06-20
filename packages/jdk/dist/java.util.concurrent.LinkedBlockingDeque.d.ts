declare namespace java {
    namespace util {
        namespace concurrent {
            /**
             * An optionally-bounded {@linkplain BlockingDeque blocking deque} based on
             * linked nodes.
             * <p>The optional capacity bound constructor argument serves as a
             * way to prevent excessive expansion. The capacity, if unspecified,
             * is equal to {@link Integer#MAX_VALUE}.  Linked nodes are
             * dynamically created upon each insertion unless this would bring the
             * deque above capacity.
             * <p>Most operations run in constant time (ignoring time spent
             * blocking).  Exceptions include {@link #remove(Object) remove},
             * {@link #removeFirstOccurrence removeFirstOccurrence}, {@link
             * #removeLastOccurrence removeLastOccurrence}, {@link #contains
             * contains}, {@link #iterator iterator.remove()}, and the bulk
             * operations, all of which run in linear time.
             * <p>This class and its iterator implement all of the
             * <em>optional</em> methods of the {@link Collection} and {@link
             * Iterator} interfaces.
             * <p>This class is a member of the
             * <a href="{@docRoot}/../technotes/guides/collections/index.html">
             * Java Collections Framework</a>.
             * @since 1.6
             * @author Doug Lea
             * @param <E> the type of elements held in this collection
             */
            // @ts-ignore
            class LinkedBlockingDeque<E> extends java.util.AbstractQueue<E> implements java.util.concurrent.BlockingDeque<E>, java.io.Serializable {
                /**
                 * Creates a {@code LinkedBlockingDeque} with a capacity of
                 * {@link Integer#MAX_VALUE}.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates a {@code LinkedBlockingDeque} with the given (fixed) capacity.
                 * @param capacity the capacity of this deque
                 * @throws IllegalArgumentException if {#code capacity} is less than 1
                 */
                // @ts-ignore
                constructor(capacity: number /*int*/)
                /**
                 * Creates a {@code LinkedBlockingDeque} with a capacity of
                 * {@link Integer#MAX_VALUE}, initially containing the elements of
                 * the given collection, added in traversal order of the
                 * collection's iterator.
                 * @param c the collection of elements to initially contain
                 * @throws NullPointerException if the specified collection or any
                 *          of its elements are null
                 */
                // @ts-ignore
                constructor(c: Array<E>)
                /**
                 * @throws IllegalStateException if this deque is full
                 * @throws NullPointerException {#inheritDoc}
                 */
                // @ts-ignore
                addFirst(e: E): void
                /**
                 * @throws IllegalStateException if this deque is full
                 * @throws NullPointerException  {#inheritDoc}
                 */
                // @ts-ignore
                addLast(e: E): void
                /**
                 * @throws NullPointerException {#inheritDoc}
                 */
                // @ts-ignore
                offerFirst(e: E): boolean
                /**
                 * @throws NullPointerException {#inheritDoc}
                 */
                // @ts-ignore
                offerLast(e: E): boolean
                /**
                 * @throws NullPointerException {#inheritDoc}
                 * @throws InterruptedException {#inheritDoc}
                 */
                // @ts-ignore
                putFirst(e: E): void
                /**
                 * @throws NullPointerException {#inheritDoc}
                 * @throws InterruptedException {#inheritDoc}
                 */
                // @ts-ignore
                putLast(e: E): void
                /**
                 * @throws NullPointerException {#inheritDoc}
                 * @throws InterruptedException {#inheritDoc}
                 */
                // @ts-ignore
                offerFirst(e: E, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): boolean
                /**
                 * @throws NullPointerException {#inheritDoc}
                 * @throws InterruptedException {#inheritDoc}
                 */
                // @ts-ignore
                offerLast(e: E, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): boolean
                /**
                 * @throws NoSuchElementException {#inheritDoc}
                 */
                // @ts-ignore
                removeFirst(): E
                /**
                 * @throws NoSuchElementException {#inheritDoc}
                 */
                // @ts-ignore
                removeLast(): E
                // @ts-ignore
                pollFirst(): E
                // @ts-ignore
                pollLast(): E
                // @ts-ignore
                takeFirst(): E
                // @ts-ignore
                takeLast(): E
                // @ts-ignore
                pollFirst(timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): E
                // @ts-ignore
                pollLast(timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): E
                /**
                 * @throws NoSuchElementException {#inheritDoc}
                 */
                // @ts-ignore
                getFirst(): E
                /**
                 * @throws NoSuchElementException {#inheritDoc}
                 */
                // @ts-ignore
                getLast(): E
                // @ts-ignore
                peekFirst(): E
                // @ts-ignore
                peekLast(): E
                // @ts-ignore
                removeFirstOccurrence(o: any): boolean
                // @ts-ignore
                removeLastOccurrence(o: any): boolean
                /**
                 * Inserts the specified element at the end of this deque unless it would
                 * violate capacity restrictions.  When using a capacity-restricted deque,
                 * it is generally preferable to use method {@link #offer(Object) offer}.
                 * <p>This method is equivalent to {@link #addLast}.
                 * @throws IllegalStateException if this deque is full
                 * @throws NullPointerException if the specified element is null
                 */
                // @ts-ignore
                add(e: E): boolean
                /**
                 * @throws NullPointerException if the specified element is null
                 */
                // @ts-ignore
                offer(e: E): boolean
                /**
                 * @throws NullPointerException {#inheritDoc}
                 * @throws InterruptedException {#inheritDoc}
                 */
                // @ts-ignore
                put(e: E): void
                /**
                 * @throws NullPointerException {#inheritDoc}
                 * @throws InterruptedException {#inheritDoc}
                 */
                // @ts-ignore
                offer(e: E, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): boolean
                /**
                 * Retrieves and removes the head of the queue represented by this deque.
                 * This method differs from {@link #poll poll} only in that it throws an
                 * exception if this deque is empty.
                 * <p>This method is equivalent to {@link #removeFirst() removeFirst}.
                 * @return the head of the queue represented by this deque
                 * @throws NoSuchElementException if this deque is empty
                 */
                // @ts-ignore
                remove(): E
                // @ts-ignore
                poll(): E
                // @ts-ignore
                take(): E
                // @ts-ignore
                poll(timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): E
                /**
                 * Retrieves, but does not remove, the head of the queue represented by
                 * this deque.  This method differs from {@link #peek peek} only in that
                 * it throws an exception if this deque is empty.
                 * <p>This method is equivalent to {@link #getFirst() getFirst}.
                 * @return the head of the queue represented by this deque
                 * @throws NoSuchElementException if this deque is empty
                 */
                // @ts-ignore
                element(): E
                // @ts-ignore
                peek(): E
                /**
                 * Returns the number of additional elements that this deque can ideally
                 * (in the absence of memory or resource constraints) accept without
                 * blocking. This is always equal to the initial capacity of this deque
                 * less the current {@code size} of this deque.
                 * <p>Note that you <em>cannot</em> always tell if an attempt to insert
                 * an element will succeed by inspecting {@code remainingCapacity}
                 * because it may be the case that another thread is about to
                 * insert or remove an element.
                 */
                // @ts-ignore
                remainingCapacity(): int
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
                 * @throws IllegalStateException if this deque is full
                 * @throws NullPointerException {#inheritDoc}
                 */
                // @ts-ignore
                push(e: E): void
                /**
                 * @throws NoSuchElementException {#inheritDoc}
                 */
                // @ts-ignore
                pop(): E
                /**
                 * Removes the first occurrence of the specified element from this deque.
                 * If the deque does not contain the element, it is unchanged.
                 * More formally, removes the first element {@code e} such that
                 * {@code o.equals(e)} (if such an element exists).
                 * Returns {@code true} if this deque contained the specified element
                 * (or equivalently, if this deque changed as a result of the call).
                 * <p>This method is equivalent to
                 * {@link #removeFirstOccurrence(Object) removeFirstOccurrence}.
                 * @param o element to be removed from this deque, if present
                 * @return {#code true} if this deque changed as a result of the call
                 */
                // @ts-ignore
                remove(o: any): boolean
                /**
                 * Returns the number of elements in this deque.
                 * @return the number of elements in this deque
                 */
                // @ts-ignore
                size(): int
                /**
                 * Returns {@code true} if this deque contains the specified element.
                 * More formally, returns {@code true} if and only if this deque contains
                 * at least one element {@code e} such that {@code o.equals(e)}.
                 * @param o object to be checked for containment in this deque
                 * @return {#code true} if this deque contains the specified element
                 */
                // @ts-ignore
                contains(o: any): boolean
                /**
                 * Returns an array containing all of the elements in this deque, in
                 * proper sequence (from first to last element).
                 * <p>The returned array will be "safe" in that no references to it are
                 * maintained by this deque.  (In other words, this method must allocate
                 * a new array).  The caller is thus free to modify the returned array.
                 * <p>This method acts as bridge between array-based and collection-based
                 * APIs.
                 * @return an array containing all of the elements in this deque
                 */
                // @ts-ignore
                toArray(): java.lang.Object[]
                /**
                 * Returns an array containing all of the elements in this deque, in
                 * proper sequence; the runtime type of the returned array is that of
                 * the specified array.  If the deque fits in the specified array, it
                 * is returned therein.  Otherwise, a new array is allocated with the
                 * runtime type of the specified array and the size of this deque.
                 * <p>If this deque fits in the specified array with room to spare
                 * (i.e., the array has more elements than this deque), the element in
                 * the array immediately following the end of the deque is set to
                 * {@code null}.
                 * <p>Like the {@link #toArray()} method, this method acts as bridge between
                 * array-based and collection-based APIs.  Further, this method allows
                 * precise control over the runtime type of the output array, and may,
                 * under certain circumstances, be used to save allocation costs.
                 * <p>Suppose {@code x} is a deque known to contain only strings.
                 * The following code can be used to dump the deque into a newly
                 * allocated array of {@code String}:
                 * <pre> {@code String[] y = x.toArray(new String[0]);}</pre>
                 * Note that {@code toArray(new Object[0])} is identical in function to
                 * {@code toArray()}.
                 * @param a the array into which the elements of the deque are to
                 *           be stored, if it is big enough; otherwise, a new array of the
                 *           same runtime type is allocated for this purpose
                 * @return an array containing all of the elements in this deque
                 * @throws ArrayStoreException if the runtime type of the specified array
                 *          is not a supertype of the runtime type of every element in
                 *          this deque
                 * @throws NullPointerException if the specified array is null
                 */
                // @ts-ignore
                toArray<T>(a: T[]): T
                // @ts-ignore
                toString(): java.lang.String
                /**
                 * Atomically removes all of the elements from this deque.
                 * The deque will be empty after this call returns.
                 */
                // @ts-ignore
                clear(): void
                /**
                 * Returns an iterator over the elements in this deque in proper sequence.
                 * The elements will be returned in order from first (head) to last (tail).
                 * <p>The returned iterator is
                 * <a href="package-summary.html#Weakly"><i>weakly consistent</i></a>.
                 * @return an iterator over the elements in this deque in proper sequence
                 */
                // @ts-ignore
                iterator(): java.util.Iterator<E>
                /**
                 * Returns an iterator over the elements in this deque in reverse
                 * sequential order.  The elements will be returned in order from
                 * last (tail) to first (head).
                 * <p>The returned iterator is
                 * <a href="package-summary.html#Weakly"><i>weakly consistent</i></a>.
                 * @return an iterator over the elements in this deque in reverse order
                 */
                // @ts-ignore
                descendingIterator(): java.util.Iterator<E>
                /**
                 * Returns a {@link Spliterator} over the elements in this deque.
                 * <p>The returned spliterator is
                 * <a href="package-summary.html#Weakly"><i>weakly consistent</i></a>.
                 * <p>The {@code Spliterator} reports {@link Spliterator#CONCURRENT},
                 * {@link Spliterator#ORDERED}, and {@link Spliterator#NONNULL}.
                 * @implNote The {#code Spliterator} implements {@code trySplit} to permit limited
                 *  parallelism.
                 * @return a {#code Spliterator} over the elements in this deque
                 * @since 1.8
                 */
                // @ts-ignore
                spliterator(): java.util.Spliterator<E>
            }
        }
    }
}
