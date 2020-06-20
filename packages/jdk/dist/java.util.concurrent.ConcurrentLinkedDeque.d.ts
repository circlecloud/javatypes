declare namespace java {
    namespace util {
        namespace concurrent {
            /**
             * An unbounded concurrent {@linkplain Deque deque} based on linked nodes.
             * Concurrent insertion, removal, and access operations execute safely
             * across multiple threads.
             * A {@code ConcurrentLinkedDeque} is an appropriate choice when
             * many threads will share access to a common collection.
             * Like most other concurrent collection implementations, this class
             * does not permit the use of {@code null} elements.
             * <p>Iterators and spliterators are
             * <a href="package-summary.html#Weakly"><i>weakly consistent</i></a>.
             * <p>Beware that, unlike in most collections, the {@code size} method
             * is <em>NOT</em> a constant-time operation. Because of the
             * asynchronous nature of these deques, determining the current number
             * of elements requires a traversal of the elements, and so may report
             * inaccurate results if this collection is modified during traversal.
             * Additionally, the bulk operations {@code addAll},
             * {@code removeAll}, {@code retainAll}, {@code containsAll},
             * {@code equals}, and {@code toArray} are <em>not</em> guaranteed
             * to be performed atomically. For example, an iterator operating
             * concurrently with an {@code addAll} operation might view only some
             * of the added elements.
             * <p>This class and its iterator implement all of the <em>optional</em>
             * methods of the {@link Deque} and {@link Iterator} interfaces.
             * <p>Memory consistency effects: As with other concurrent collections,
             * actions in a thread prior to placing an object into a
             * {@code ConcurrentLinkedDeque}
             * <a href="package-summary.html#MemoryVisibility"><i>happen-before</i></a>
             * actions subsequent to the access or removal of that element from
             * the {@code ConcurrentLinkedDeque} in another thread.
             * <p>This class is a member of the
             * <a href="{@docRoot}/../technotes/guides/collections/index.html">
             * Java Collections Framework</a>.
             * @since 1.7
             * @author Doug Lea
             * @author Martin Buchholz
             * @param <E> the type of elements held in this collection
             */
            // @ts-ignore
            class ConcurrentLinkedDeque<E> extends java.util.AbstractCollection<E> implements java.util.Deque<E>, java.io.Serializable {
                /**
                 * Constructs an empty deque.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a deque initially containing the elements of
                 * the given collection, added in traversal order of the
                 * collection's iterator.
                 * @param c the collection of elements to initially contain
                 * @throws NullPointerException if the specified collection or any
                 *          of its elements are null
                 */
                // @ts-ignore
                constructor(c: Array<E>)
                /**
                 * Inserts the specified element at the front of this deque.
                 * As the deque is unbounded, this method will never throw
                 * {@link IllegalStateException}.
                 * @throws NullPointerException if the specified element is null
                 */
                // @ts-ignore
                addFirst(e: E): void
                /**
                 * Inserts the specified element at the end of this deque.
                 * As the deque is unbounded, this method will never throw
                 * {@link IllegalStateException}.
                 * <p>This method is equivalent to {@link #add}.
                 * @throws NullPointerException if the specified element is null
                 */
                // @ts-ignore
                addLast(e: E): void
                /**
                 * Inserts the specified element at the front of this deque.
                 * As the deque is unbounded, this method will never return {@code false}.
                 * @return {#code true} (as specified by {@link Deque#offerFirst})
                 * @throws NullPointerException if the specified element is null
                 */
                // @ts-ignore
                offerFirst(e: E): boolean
                /**
                 * Inserts the specified element at the end of this deque.
                 * As the deque is unbounded, this method will never return {@code false}.
                 * <p>This method is equivalent to {@link #add}.
                 * @return {#code true} (as specified by {@link Deque#offerLast})
                 * @throws NullPointerException if the specified element is null
                 */
                // @ts-ignore
                offerLast(e: E): boolean
                // @ts-ignore
                peekFirst(): E
                // @ts-ignore
                peekLast(): E
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
                pollFirst(): E
                // @ts-ignore
                pollLast(): E
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
                /**
                 * Inserts the specified element at the tail of this deque.
                 * As the deque is unbounded, this method will never return {@code false}.
                 * @return {#code true} (as specified by {@link Queue#offer})
                 * @throws NullPointerException if the specified element is null
                 */
                // @ts-ignore
                offer(e: E): boolean
                /**
                 * Inserts the specified element at the tail of this deque.
                 * As the deque is unbounded, this method will never throw
                 * {@link IllegalStateException} or return {@code false}.
                 * @return {#code true} (as specified by {@link Collection#add})
                 * @throws NullPointerException if the specified element is null
                 */
                // @ts-ignore
                add(e: E): boolean
                // @ts-ignore
                poll(): E
                // @ts-ignore
                peek(): E
                /**
                 * @throws NoSuchElementException {#inheritDoc}
                 */
                // @ts-ignore
                remove(): E
                /**
                 * @throws NoSuchElementException {#inheritDoc}
                 */
                // @ts-ignore
                pop(): E
                /**
                 * @throws NoSuchElementException {#inheritDoc}
                 */
                // @ts-ignore
                element(): E
                /**
                 * @throws NullPointerException {#inheritDoc}
                 */
                // @ts-ignore
                push(e: E): void
                /**
                 * Removes the first element {@code e} such that
                 * {@code o.equals(e)}, if such an element exists in this deque.
                 * If the deque does not contain the element, it is unchanged.
                 * @param o element to be removed from this deque, if present
                 * @return {#code true} if the deque contained the specified element
                 * @throws NullPointerException if the specified element is null
                 */
                // @ts-ignore
                removeFirstOccurrence(o: any): boolean
                /**
                 * Removes the last element {@code e} such that
                 * {@code o.equals(e)}, if such an element exists in this deque.
                 * If the deque does not contain the element, it is unchanged.
                 * @param o element to be removed from this deque, if present
                 * @return {#code true} if the deque contained the specified element
                 * @throws NullPointerException if the specified element is null
                 */
                // @ts-ignore
                removeLastOccurrence(o: any): boolean
                /**
                 * Returns {@code true} if this deque contains at least one
                 * element {@code e} such that {@code o.equals(e)}.
                 * @param o element whose presence in this deque is to be tested
                 * @return {#code true} if this deque contains the specified element
                 */
                // @ts-ignore
                contains(o: any): boolean
                /**
                 * Returns {@code true} if this collection contains no elements.
                 * @return {#code true} if this collection contains no elements
                 */
                // @ts-ignore
                isEmpty(): boolean
                /**
                 * Returns the number of elements in this deque.  If this deque
                 * contains more than {@code Integer.MAX_VALUE} elements, it
                 * returns {@code Integer.MAX_VALUE}.
                 * <p>Beware that, unlike in most collections, this method is
                 * <em>NOT</em> a constant-time operation. Because of the
                 * asynchronous nature of these deques, determining the current
                 * number of elements requires traversing them all to count them.
                 * Additionally, it is possible for the size to change during
                 * execution of this method, in which case the returned result
                 * will be inaccurate. Thus, this method is typically not very
                 * useful in concurrent applications.
                 * @return the number of elements in this deque
                 */
                // @ts-ignore
                size(): int
                /**
                 * Removes the first element {@code e} such that
                 * {@code o.equals(e)}, if such an element exists in this deque.
                 * If the deque does not contain the element, it is unchanged.
                 * @param o element to be removed from this deque, if present
                 * @return {#code true} if the deque contained the specified element
                 * @throws NullPointerException if the specified element is null
                 */
                // @ts-ignore
                remove(o: any): boolean
                /**
                 * Appends all of the elements in the specified collection to the end of
                 * this deque, in the order that they are returned by the specified
                 * collection's iterator.  Attempts to {@code addAll} of a deque to
                 * itself result in {@code IllegalArgumentException}.
                 * @param c the elements to be inserted into this deque
                 * @return {#code true} if this deque changed as a result of the call
                 * @throws NullPointerException if the specified collection or any
                 *          of its elements are null
                 * @throws IllegalArgumentException if the collection is this deque
                 */
                // @ts-ignore
                addAll(c: Array<E>): boolean
                /**
                 * Removes all of the elements from this deque.
                 */
                // @ts-ignore
                clear(): void
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
                 * Returns an array containing all of the elements in this deque,
                 * in proper sequence (from first to last element); the runtime
                 * type of the returned array is that of the specified array.  If
                 * the deque fits in the specified array, it is returned therein.
                 * Otherwise, a new array is allocated with the runtime type of
                 * the specified array and the size of this deque.
                 * <p>If this deque fits in the specified array with room to spare
                 * (i.e., the array has more elements than this deque), the element in
                 * the array immediately following the end of the deque is set to
                 * {@code null}.
                 * <p>Like the {@link #toArray()} method, this method acts as
                 * bridge between array-based and collection-based APIs.  Further,
                 * this method allows precise control over the runtime type of the
                 * output array, and may, under certain circumstances, be used to
                 * save allocation costs.
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
