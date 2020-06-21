declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                /**
                 * A clone of {@linkplain java.util.concurrent.LinkedBlockingQueue}
                 * with the addition of a {@link #setCapacity(int)} method, allowing us to
                 * change the capacity of the queue while it is in use.<p>
                 * The documentation for LinkedBlockingQueue follows...<p>
                 * An optionally-bounded {@linkplain BlockingQueue blocking queue} based on
                 * linked nodes.
                 * This queue orders elements FIFO (first-in-first-out).
                 * The <em>head</em> of the queue is that element that has been on the
                 * queue the longest time.
                 * The <em>tail</em> of the queue is that element that has been on the
                 * queue the shortest time. New elements
                 * are inserted at the tail of the queue, and the queue retrieval
                 * operations obtain elements at the head of the queue.
                 * Linked queues typically have higher throughput than array-based queues but
                 * less predictable performance in most concurrent applications.
                 * <p> The optional capacity bound constructor argument serves as a
                 * way to prevent excessive queue expansion. The capacity, if unspecified,
                 * is equal to {@link Integer#MAX_VALUE}.  Linked nodes are
                 * dynamically created upon each insertion unless this would bring the
                 * queue above capacity.
                 * <p>This class implements all of the <em>optional</em> methods
                 * of the {@link Collection} and {@link Iterator} interfaces.
                 * <p>This class is a member of the
                 * <a href="{@docRoot}/../guide/collections/index.html">
                 * Java Collections Framework</a>.
                 * @since 1.5
                 * @author Doug Lea
                 * @param <E> the type of elements held in this collection
                 */
                // @ts-ignore
                class VariableLinkedBlockingQueue<E> extends java.util.AbstractQueue<E> implements java.util.concurrent.BlockingQueue<E>, java.io.Serializable {
                    /**
                     * Creates a <tt>LinkedBlockingQueue</tt> with a capacity of
                     * {@link Integer#MAX_VALUE}.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Creates a <tt>LinkedBlockingQueue</tt> with the given (fixed) capacity.
                     * @param capacity the capacity of this queue.
                     * @throws IllegalArgumentException if <tt>capacity</tt> is not greater
                     *          than zero.
                     */
                    // @ts-ignore
                    constructor(capacity: number /*int*/)
                    /**
                     * Creates a <tt>LinkedBlockingQueue</tt> with a capacity of
                     * {@link Integer#MAX_VALUE}, initially containing the elements of the
                     * given collection,
                     * added in traversal order of the collection's iterator.
                     * @param c the collection of elements to initially contain
                     * @throws NullPointerException if <tt>c</tt> or any element within it
                     *  is <tt>null</tt>
                     */
                    // @ts-ignore
                    constructor(c: java.util.Collection<any> | Array<any>)
                    /**
                     * Returns the number of elements in this queue.
                     * @return the number of elements in this queue.
                     */
                    // @ts-ignore
                    public size(): number /*int*/
                    /**
                     * Set a new capacity for the queue. Increasing the capacity can
                     * cause any waiting {@link #put(Object)} invocations to succeed if the new
                     * capacity is larger than the queue.
                     * @param capacity the new capacity for the queue
                     */
                    // @ts-ignore
                    public setCapacity(capacity: number /*int*/): void
                    /**
                     * Returns the number of elements that this queue can ideally (in
                     * the absence of memory or resource constraints) accept without
                     * blocking. This is always equal to the initial capacity of this queue
                     * less the current <tt>size</tt> of this queue.
                     * <p>Note that you <em>cannot</em> always tell if
                     * an attempt to <tt>add</tt> an element will succeed by
                     * inspecting <tt>remainingCapacity</tt> because it may be the
                     * case that a waiting consumer is ready to <tt>take</tt> an
                     * element out of an otherwise full queue.
                     */
                    // @ts-ignore
                    public remainingCapacity(): number /*int*/
                    /**
                     * Adds the specified element to the tail of this queue, waiting if
                     * necessary for space to become available.
                     * @param o the element to add
                     * @throws InterruptedException if interrupted while waiting.
                     * @throws NullPointerException if the specified element is <tt>null</tt>.
                     */
                    // @ts-ignore
                    public put(o: E): void
                    /**
                     * Inserts the specified element at the tail of this queue, waiting if
                     * necessary up to the specified wait time for space to become available.
                     * @param o the element to add
                     * @param timeout how long to wait before giving up, in units of
                     *  <tt>unit</tt>
                     * @param unit a <tt>TimeUnit</tt> determining how to interpret the
                     *  <tt>timeout</tt> parameter
                     * @return <tt>true</tt> if successful, or <tt>false</tt> if
                     *  the specified waiting time elapses before space is available.
                     * @throws InterruptedException if interrupted while waiting.
                     * @throws NullPointerException if the specified element is <tt>null</tt>.
                     */
                    // @ts-ignore
                    public offer(o: E, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): boolean
                    /**
                     * Inserts the specified element at the tail of this queue if possible,
                     * returning immediately if this queue is full.
                     * @param o the element to add.
                     * @return <tt>true</tt> if it was possible to add the element to
                     *          this queue, else <tt>false</tt>
                     * @throws NullPointerException if the specified element is <tt>null</tt>
                     */
                    // @ts-ignore
                    public offer(o: E): boolean
                    // @ts-ignore
                    public take(): E
                    // @ts-ignore
                    public poll(timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): E
                    // @ts-ignore
                    public poll(): E
                    // @ts-ignore
                    public peek(): E
                    // @ts-ignore
                    public remove(o: java.lang.Object | any): boolean
                    // @ts-ignore
                    public toArray(): any[]
                    // @ts-ignore
                    public toArray<T>(a: T[]): T
                    // @ts-ignore
                    public toString(): string
                    // @ts-ignore
                    public clear(): void
                    // @ts-ignore
                    public drainTo(c: java.util.Collection<any> | Array<any>): number /*int*/
                    // @ts-ignore
                    public drainTo(c: java.util.Collection<any> | Array<any>, maxElements: number /*int*/): number /*int*/
                    /**
                     * Returns an iterator over the elements in this queue in proper sequence.
                     * The returned <tt>Iterator</tt> is a "weakly consistent" iterator that
                     * will never throw {@link java.util.ConcurrentModificationException},
                     * and guarantees to traverse elements as they existed upon
                     * construction of the iterator, and may (but is not guaranteed to)
                     * reflect any modifications subsequent to construction.
                     * @return an iterator over the elements in this queue in proper sequence.
                     */
                    // @ts-ignore
                    public iterator(): java.util.Iterator<E>
                }
            }
        }
    }
}
