declare namespace java {
    namespace util {
        namespace concurrent {
            /**
             * An unbounded thread-safe {@linkplain Queue queue} based on linked nodes.
             * This queue orders elements FIFO (first-in-first-out).
             * The <em>head</em> of the queue is that element that has been on the
             * queue the longest time.
             * The <em>tail</em> of the queue is that element that has been on the
             * queue the shortest time. New elements
             * are inserted at the tail of the queue, and the queue retrieval
             * operations obtain elements at the head of the queue.
             * A {@code ConcurrentLinkedQueue} is an appropriate choice when
             * many threads will share access to a common collection.
             * Like most other concurrent collection implementations, this class
             * does not permit the use of {@code null} elements.
             * <p>This implementation employs an efficient <em>non-blocking</em>
             * algorithm based on one described in <a
             * href="http://www.cs.rochester.edu/u/michael/PODC96.html"> Simple,
             * Fast, and Practical Non-Blocking and Blocking Concurrent Queue
             * Algorithms</a> by Maged M. Michael and Michael L. Scott.
             * <p>Iterators are <i>weakly consistent</i>, returning elements
             * reflecting the state of the queue at some point at or since the
             * creation of the iterator.  They do <em>not</em> throw {@link
             * java.util.ConcurrentModificationException}, and may proceed concurrently
             * with other operations.  Elements contained in the queue since the creation
             * of the iterator will be returned exactly once.
             * <p>Beware that, unlike in most collections, the {@code size} method
             * is <em>NOT</em> a constant-time operation. Because of the
             * asynchronous nature of these queues, determining the current number
             * of elements requires a traversal of the elements, and so may report
             * inaccurate results if this collection is modified during traversal.
             * Additionally, the bulk operations {@code addAll},
             * {@code removeAll}, {@code retainAll}, {@code containsAll},
             * {@code equals}, and {@code toArray} are <em>not</em> guaranteed
             * to be performed atomically. For example, an iterator operating
             * concurrently with an {@code addAll} operation might view only some
             * of the added elements.
             * <p>This class and its iterator implement all of the <em>optional</em>
             * methods of the {@link Queue} and {@link Iterator} interfaces.
             * <p>Memory consistency effects: As with other concurrent
             * collections, actions in a thread prior to placing an object into a
             * {@code ConcurrentLinkedQueue}
             * <a href="package-summary.html#MemoryVisibility"><i>happen-before</i></a>
             * actions subsequent to the access or removal of that element from
             * the {@code ConcurrentLinkedQueue} in another thread.
             * <p>This class is a member of the
             * <a href="{@docRoot}/../technotes/guides/collections/index.html">
             * Java Collections Framework</a>.
             * @since 1.5
             * @author Doug Lea
             * @param <E> the type of elements held in this collection
             */
            // @ts-ignore
            class ConcurrentLinkedQueue<E> extends java.util.AbstractQueue<E> implements java.util.Queue<E>, java.io.Serializable {
                /**
                 * Creates a {@code ConcurrentLinkedQueue} that is initially empty.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates a {@code ConcurrentLinkedQueue}
                 * initially containing the elements of the given collection,
                 * added in traversal order of the collection's iterator.
                 * @param c the collection of elements to initially contain
                 * @throws NullPointerException if the specified collection or any
                 *          of its elements are null
                 */
                // @ts-ignore
                constructor(c: Array<E>)
                /**
                 * Inserts the specified element at the tail of this queue.
                 * As the queue is unbounded, this method will never throw
                 * {@link IllegalStateException} or return {@code false}.
                 * @return {#code true} (as specified by {@link Collection#add})
                 * @throws NullPointerException if the specified element is null
                 */
                // @ts-ignore
                add(e: E): boolean
                /**
                 * Inserts the specified element at the tail of this queue.
                 * As the queue is unbounded, this method will never return {@code false}.
                 * @return {#code true} (as specified by {@link Queue#offer})
                 * @throws NullPointerException if the specified element is null
                 */
                // @ts-ignore
                offer(e: E): boolean
                // @ts-ignore
                poll(): E
                // @ts-ignore
                peek(): E
                /**
                 * Returns {@code true} if this queue contains no elements.
                 * @return {#code true} if this queue contains no elements
                 */
                // @ts-ignore
                isEmpty(): boolean
                /**
                 * Returns the number of elements in this queue.  If this queue
                 * contains more than {@code Integer.MAX_VALUE} elements, returns
                 * {@code Integer.MAX_VALUE}.
                 * <p>Beware that, unlike in most collections, this method is
                 * <em>NOT</em> a constant-time operation. Because of the
                 * asynchronous nature of these queues, determining the current
                 * number of elements requires an O(n) traversal.
                 * Additionally, if elements are added or removed during execution
                 * of this method, the returned result may be inaccurate.  Thus,
                 * this method is typically not very useful in concurrent
                 * applications.
                 * @return the number of elements in this queue
                 */
                // @ts-ignore
                size(): int
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
                 * Removes a single instance of the specified element from this queue,
                 * if it is present.  More formally, removes an element {@code e} such
                 * that {@code o.equals(e)}, if this queue contains one or more such
                 * elements.
                 * Returns {@code true} if this queue contained the specified element
                 * (or equivalently, if this queue changed as a result of the call).
                 * @param o element to be removed from this queue, if present
                 * @return {#code true} if this queue changed as a result of the call
                 */
                // @ts-ignore
                remove(o: any): boolean
                /**
                 * Appends all of the elements in the specified collection to the end of
                 * this queue, in the order that they are returned by the specified
                 * collection's iterator.  Attempts to {@code addAll} of a queue to
                 * itself result in {@code IllegalArgumentException}.
                 * @param c the elements to be inserted into this queue
                 * @return {#code true} if this queue changed as a result of the call
                 * @throws NullPointerException if the specified collection or any
                 *          of its elements are null
                 * @throws IllegalArgumentException if the collection is this queue
                 */
                // @ts-ignore
                addAll(c: Array<E>): boolean
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
