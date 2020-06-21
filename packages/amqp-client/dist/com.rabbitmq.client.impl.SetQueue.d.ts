declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                /**
                 * <p>A generic queue-like implementation (supporting operations <code>addIfNotPresent</code>,
                 * <code>poll</code>, <code>contains</code>, and <code>isEmpty</code>)
                 * which restricts a queue element to appear at most once.
                 * If the element is already present {@link #addIfNotPresent} returns <code><b>false</b></code>.
                 * </p>
                 * Elements must not be <code><b>null</b></code>.
                 * <h2>Concurrent Semantics</h2>
                 * This implementation is <i>not</i> thread-safe.
                 * @param <T> type of elements in the queue
                 */
                // @ts-ignore
                class SetQueue<T> extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Add an element to the back of the queue and return <code><b>true</b></code>, or else return <code><b>false</b></code>.
                     * @param item to add
                     * @return <b><code>true</code></b> if the element was added, <b><code>false</code></b> if it is already present.
                     */
                    // @ts-ignore
                    public addIfNotPresent(item: T): boolean
                    /**
                     * Remove the head of the queue and return it.
                     * @return head element of the queue, or <b><code>null</code></b> if the queue is empty.
                     */
                    // @ts-ignore
                    public poll(): T
                    /**
                     * @param item to look for in queue
                     * @return <code><b>true</b></code> if and only if <b>item</b> is in the queue.
                     */
                    // @ts-ignore
                    public contains(item: T): boolean
                    /**
                     * @return <code><b>true</b></code> if and only if the queue is empty.
                     */
                    // @ts-ignore
                    public isEmpty(): boolean
                    /**
                     * Remove item from queue, if present.
                     * @param item to remove
                     * @return <code><b>true</b></code> if and only if item was initially present and was removed.
                     */
                    // @ts-ignore
                    public remove(item: T): boolean
                    /**
                     * Remove all items from the queue.
                     */
                    // @ts-ignore
                    public clear(): void
                }
            }
        }
    }
}
