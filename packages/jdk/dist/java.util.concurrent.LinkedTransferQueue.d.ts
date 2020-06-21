declare namespace java {
    namespace util {
        namespace concurrent {
            /**
             * An unbounded {@link TransferQueue} based on linked nodes.
             * This queue orders elements FIFO (first-in-first-out) with respect
             * to any given producer.  The <em>head</em> of the queue is that
             * element that has been on the queue the longest time for some
             * producer.  The <em>tail</em> of the queue is that element that has
             * been on the queue the shortest time for some producer.
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
             * <p>This class and its iterator implement all of the
             * <em>optional</em> methods of the {@link Collection} and {@link
             * Iterator} interfaces.
             * <p>Memory consistency effects: As with other concurrent
             * collections, actions in a thread prior to placing an object into a
             * {@code LinkedTransferQueue}
             * <a href="package-summary.html#MemoryVisibility"><i>happen-before</i></a>
             * actions subsequent to the access or removal of that element from
             * the {@code LinkedTransferQueue} in another thread.
             * <p>This class is a member of the
             * <a href="{@docRoot}/../technotes/guides/collections/index.html">
             * Java Collections Framework</a>.
             * @since 1.7
             * @author Doug Lea
             * @param <E> the type of elements held in this collection
             */
            // @ts-ignore
            class LinkedTransferQueue<E> extends java.util.AbstractQueue<E> implements java.util.concurrent.TransferQueue<E>, java.io.Serializable {
                /**
                 * Creates an initially empty {@code LinkedTransferQueue}.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates a {@code LinkedTransferQueue}
                 * initially containing the elements of the given collection,
                 * added in traversal order of the collection's iterator.
                 * @param c the collection of elements to initially contain
                 * @throws NullPointerException if the specified collection or any
                 *          of its elements are null
                 */
                // @ts-ignore
                constructor(c: java.util.Collection<any> | Array<any>)
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
                public spliterator(): java.util.Spliterator<E>
                /**
                 * Inserts the specified element at the tail of this queue.
                 * As the queue is unbounded, this method will never block.
                 * @throws NullPointerException if the specified element is null
                 */
                // @ts-ignore
                public put(e: E): void
                /**
                 * Inserts the specified element at the tail of this queue.
                 * As the queue is unbounded, this method will never block or
                 * return {@code false}.
                 * @return {#code true} (as specified by
                 *   {@link java.util.concurrent.BlockingQueue#offer(Object,long,TimeUnit)
                 *   BlockingQueue.offer})
                 * @throws NullPointerException if the specified element is null
                 */
                // @ts-ignore
                public offer(e: E, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): boolean
                /**
                 * Inserts the specified element at the tail of this queue.
                 * As the queue is unbounded, this method will never return {@code false}.
                 * @return {#code true} (as specified by {@link Queue#offer})
                 * @throws NullPointerException if the specified element is null
                 */
                // @ts-ignore
                public offer(e: E): boolean
                /**
                 * Inserts the specified element at the tail of this queue.
                 * As the queue is unbounded, this method will never throw
                 * {@link IllegalStateException} or return {@code false}.
                 * @return {#code true} (as specified by {@link Collection#add})
                 * @throws NullPointerException if the specified element is null
                 */
                // @ts-ignore
                public add(e: E): boolean
                /**
                 * Transfers the element to a waiting consumer immediately, if possible.
                 * <p>More precisely, transfers the specified element immediately
                 * if there exists a consumer already waiting to receive it (in
                 * {@link #take} or timed {@link #poll(long,TimeUnit) poll}),
                 * otherwise returning {@code false} without enqueuing the element.
                 * @throws NullPointerException if the specified element is null
                 */
                // @ts-ignore
                public tryTransfer(e: E): boolean
                /**
                 * Transfers the element to a consumer, waiting if necessary to do so.
                 * <p>More precisely, transfers the specified element immediately
                 * if there exists a consumer already waiting to receive it (in
                 * {@link #take} or timed {@link #poll(long,TimeUnit) poll}),
                 * else inserts the specified element at the tail of this queue
                 * and waits until the element is received by a consumer.
                 * @throws NullPointerException if the specified element is null
                 */
                // @ts-ignore
                public transfer(e: E): void
                /**
                 * Transfers the element to a consumer if it is possible to do so
                 * before the timeout elapses.
                 * <p>More precisely, transfers the specified element immediately
                 * if there exists a consumer already waiting to receive it (in
                 * {@link #take} or timed {@link #poll(long,TimeUnit) poll}),
                 * else inserts the specified element at the tail of this queue
                 * and waits until the element is received by a consumer,
                 * returning {@code false} if the specified wait time elapses
                 * before the element can be transferred.
                 * @throws NullPointerException if the specified element is null
                 */
                // @ts-ignore
                public tryTransfer(e: E, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): boolean
                // @ts-ignore
                public take(): E
                // @ts-ignore
                public poll(timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): E
                // @ts-ignore
                public poll(): E
                /**
                 * @throws NullPointerException     {#inheritDoc}
                 * @throws IllegalArgumentException {#inheritDoc}
                 */
                // @ts-ignore
                public drainTo(c: java.util.Collection<any> | Array<any>): number /*int*/
                /**
                 * @throws NullPointerException     {#inheritDoc}
                 * @throws IllegalArgumentException {#inheritDoc}
                 */
                // @ts-ignore
                public drainTo(c: java.util.Collection<any> | Array<any>, maxElements: number /*int*/): number /*int*/
                /**
                 * Returns an iterator over the elements in this queue in proper sequence.
                 * The elements will be returned in order from first (head) to last (tail).
                 * <p>The returned iterator is
                 * <a href="package-summary.html#Weakly"><i>weakly consistent</i></a>.
                 * @return an iterator over the elements in this queue in proper sequence
                 */
                // @ts-ignore
                public iterator(): java.util.Iterator<E>
                // @ts-ignore
                public peek(): E
                /**
                 * Returns {@code true} if this queue contains no elements.
                 * @return {#code true} if this queue contains no elements
                 */
                // @ts-ignore
                public isEmpty(): boolean
                // @ts-ignore
                public hasWaitingConsumer(): boolean
                /**
                 * Returns the number of elements in this queue.  If this queue
                 * contains more than {@code Integer.MAX_VALUE} elements, returns
                 * {@code Integer.MAX_VALUE}.
                 * <p>Beware that, unlike in most collections, this method is
                 * <em>NOT</em> a constant-time operation. Because of the
                 * asynchronous nature of these queues, determining the current
                 * number of elements requires an O(n) traversal.
                 * @return the number of elements in this queue
                 */
                // @ts-ignore
                public size(): number /*int*/
                // @ts-ignore
                public getWaitingConsumerCount(): number /*int*/
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
                public remove(o: java.lang.Object | any): boolean
                /**
                 * Returns {@code true} if this queue contains the specified element.
                 * More formally, returns {@code true} if and only if this queue contains
                 * at least one element {@code e} such that {@code o.equals(e)}.
                 * @param o object to be checked for containment in this queue
                 * @return {#code true} if this queue contains the specified element
                 */
                // @ts-ignore
                public contains(o: java.lang.Object | any): boolean
                /**
                 * Always returns {@code Integer.MAX_VALUE} because a
                 * {@code LinkedTransferQueue} is not capacity constrained.
                 * @return {#code Integer.MAX_VALUE} (as specified by
                 *          {@link java.util.concurrent.BlockingQueue#remainingCapacity()
                 *          BlockingQueue.remainingCapacity})
                 */
                // @ts-ignore
                public remainingCapacity(): number /*int*/
            }
        }
    }
}
