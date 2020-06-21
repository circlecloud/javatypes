declare namespace java {
    namespace util {
        namespace concurrent {
            /**
             * A {@linkplain BlockingQueue blocking queue} in which each insert
             * operation must wait for a corresponding remove operation by another
             * thread, and vice versa.  A synchronous queue does not have any
             * internal capacity, not even a capacity of one.  You cannot
             * {@code peek} at a synchronous queue because an element is only
             * present when you try to remove it; you cannot insert an element
             * (using any method) unless another thread is trying to remove it;
             * you cannot iterate as there is nothing to iterate.  The
             * <em>head</em> of the queue is the element that the first queued
             * inserting thread is trying to add to the queue; if there is no such
             * queued thread then no element is available for removal and
             * {@code poll()} will return {@code null}.  For purposes of other
             * {@code Collection} methods (for example {@code contains}), a
             * {@code SynchronousQueue} acts as an empty collection.  This queue
             * does not permit {@code null} elements.
             * <p>Synchronous queues are similar to rendezvous channels used in
             * CSP and Ada. They are well suited for handoff designs, in which an
             * object running in one thread must sync up with an object running
             * in another thread in order to hand it some information, event, or
             * task.
             * <p>This class supports an optional fairness policy for ordering
             * waiting producer and consumer threads.  By default, this ordering
             * is not guaranteed. However, a queue constructed with fairness set
             * to {@code true} grants threads access in FIFO order.
             * <p>This class and its iterator implement all of the
             * <em>optional</em> methods of the {@link Collection} and {@link
             * Iterator} interfaces.
             * <p>This class is a member of the
             * <a href="{@docRoot}/../technotes/guides/collections/index.html">
             * Java Collections Framework</a>.
             * @since 1.5
             * @author Doug Lea and Bill Scherer and Michael Scott
             * @param <E> the type of elements held in this collection
             */
            // @ts-ignore
            class SynchronousQueue<E> extends java.util.AbstractQueue<E> implements java.util.concurrent.BlockingQueue<E>, java.io.Serializable {
                /**
                 * Creates a {@code SynchronousQueue} with nonfair access policy.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates a {@code SynchronousQueue} with the specified fairness policy.
                 * @param fair if true, waiting threads contend in FIFO order for
                 *         access; otherwise the order is unspecified.
                 */
                // @ts-ignore
                constructor(fair: boolean)
                /**
                 * Adds the specified element to this queue, waiting if necessary for
                 * another thread to receive it.
                 * @throws InterruptedException {#inheritDoc}
                 * @throws NullPointerException {#inheritDoc}
                 */
                // @ts-ignore
                public put(e: E): void
                /**
                 * Inserts the specified element into this queue, waiting if necessary
                 * up to the specified wait time for another thread to receive it.
                 * @return {#code true} if successful, or {@code false} if the
                 *          specified waiting time elapses before a consumer appears
                 * @throws InterruptedException {#inheritDoc}
                 * @throws NullPointerException {#inheritDoc}
                 */
                // @ts-ignore
                public offer(e: E, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): boolean
                /**
                 * Inserts the specified element into this queue, if another thread is
                 * waiting to receive it.
                 * @param e the element to add
                 * @return {#code true} if the element was added to this queue, else
                 *          {@code false}
                 * @throws NullPointerException if the specified element is null
                 */
                // @ts-ignore
                public offer(e: E): boolean
                /**
                 * Retrieves and removes the head of this queue, waiting if necessary
                 * for another thread to insert it.
                 * @return the head of this queue
                 * @throws InterruptedException {#inheritDoc}
                 */
                // @ts-ignore
                public take(): E
                /**
                 * Retrieves and removes the head of this queue, waiting
                 * if necessary up to the specified wait time, for another thread
                 * to insert it.
                 * @return the head of this queue, or {#code null} if the
                 *          specified waiting time elapses before an element is present
                 * @throws InterruptedException {#inheritDoc}
                 */
                // @ts-ignore
                public poll(timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): E
                /**
                 * Retrieves and removes the head of this queue, if another thread
                 * is currently making an element available.
                 * @return the head of this queue, or {#code null} if no
                 *          element is available
                 */
                // @ts-ignore
                public poll(): E
                /**
                 * Always returns {@code true}.
                 * A {@code SynchronousQueue} has no internal capacity.
                 * @return {#code true}
                 */
                // @ts-ignore
                public isEmpty(): boolean
                /**
                 * Always returns zero.
                 * A {@code SynchronousQueue} has no internal capacity.
                 * @return zero
                 */
                // @ts-ignore
                public size(): number /*int*/
                /**
                 * Always returns zero.
                 * A {@code SynchronousQueue} has no internal capacity.
                 * @return zero
                 */
                // @ts-ignore
                public remainingCapacity(): number /*int*/
                /**
                 * Does nothing.
                 * A {@code SynchronousQueue} has no internal capacity.
                 */
                // @ts-ignore
                public clear(): void
                /**
                 * Always returns {@code false}.
                 * A {@code SynchronousQueue} has no internal capacity.
                 * @param o the element
                 * @return {#code false}
                 */
                // @ts-ignore
                public contains(o: java.lang.Object | any): boolean
                /**
                 * Always returns {@code false}.
                 * A {@code SynchronousQueue} has no internal capacity.
                 * @param o the element to remove
                 * @return {#code false}
                 */
                // @ts-ignore
                public remove(o: java.lang.Object | any): boolean
                /**
                 * Returns {@code false} unless the given collection is empty.
                 * A {@code SynchronousQueue} has no internal capacity.
                 * @param c the collection
                 * @return {#code false} unless given collection is empty
                 */
                // @ts-ignore
                public containsAll(c: java.util.Collection<any> | Array<any>): boolean
                /**
                 * Always returns {@code false}.
                 * A {@code SynchronousQueue} has no internal capacity.
                 * @param c the collection
                 * @return {#code false}
                 */
                // @ts-ignore
                public removeAll(c: java.util.Collection<any> | Array<any>): boolean
                /**
                 * Always returns {@code false}.
                 * A {@code SynchronousQueue} has no internal capacity.
                 * @param c the collection
                 * @return {#code false}
                 */
                // @ts-ignore
                public retainAll(c: java.util.Collection<any> | Array<any>): boolean
                /**
                 * Always returns {@code null}.
                 * A {@code SynchronousQueue} does not return elements
                 * unless actively waited on.
                 * @return {#code null}
                 */
                // @ts-ignore
                public peek(): E
                /**
                 * Returns an empty iterator in which {@code hasNext} always returns
                 * {@code false}.
                 * @return an empty iterator
                 */
                // @ts-ignore
                public iterator(): java.util.Iterator<E>
                /**
                 * Returns an empty spliterator in which calls to
                 * {@link java.util.Spliterator#trySplit()} always return {@code null}.
                 * @return an empty spliterator
                 * @since 1.8
                 */
                // @ts-ignore
                public spliterator(): java.util.Spliterator<E>
                /**
                 * Returns a zero-length array.
                 * @return a zero-length array
                 */
                // @ts-ignore
                public toArray(): any[]
                /**
                 * Sets the zeroeth element of the specified array to {@code null}
                 * (if the array has non-zero length) and returns it.
                 * @param a the array
                 * @return the specified array
                 * @throws NullPointerException if the specified array is null
                 */
                // @ts-ignore
                public toArray<T>(a: T[]): T
                /**
                 * @throws UnsupportedOperationException {#inheritDoc}
                 * @throws ClassCastException            {#inheritDoc}
                 * @throws NullPointerException          {#inheritDoc}
                 * @throws IllegalArgumentException      {#inheritDoc}
                 */
                // @ts-ignore
                public drainTo(c: java.util.Collection<any> | Array<any>): number /*int*/
                /**
                 * @throws UnsupportedOperationException {#inheritDoc}
                 * @throws ClassCastException            {#inheritDoc}
                 * @throws NullPointerException          {#inheritDoc}
                 * @throws IllegalArgumentException      {#inheritDoc}
                 */
                // @ts-ignore
                public drainTo(c: java.util.Collection<any> | Array<any>, maxElements: number /*int*/): number /*int*/
            }
        }
    }
}
