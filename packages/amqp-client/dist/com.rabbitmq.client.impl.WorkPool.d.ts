declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                /**
                 * <p>This is a generic implementation of the channels specification
                 * in <i>Channeling Work</i>, Nov 2010 (<tt>channels.pdf</tt>).
                 * Objects of type <b>K</b> must be registered, with <code><b>registerKey(K)</b></code>,
                 * and then they become <i>clients</i> and a queue of
                 * items (type <b>W</b>) is stored for each client.
                 * </p>
                 * Each client has a <i>state</i> which is exactly one of <i>dormant</i>,
                 * <i>in progress</i> or <i>ready</i>. Immediately after registration a client is <i>dormant</i>.
                 * Items may be (singly) added to (the end of) a client's queue with {@link WorkPool#addWorkItem(Object, Object)}.
                 * If the client is <i>dormant</i> it becomes <i>ready</i> thereby. All other states remain unchanged.
                 * The next <i>ready</i> client, together with a collection of its items,
                 * may be retrieved with <code><b>nextWorkBlock(collection,max)</b></code>
                 * (making that client <i>in progress</i>).
                 * An <i>in progress</i> client can finish (processing a batch of items) with <code><b>finishWorkBlock(K)</b></code>.
                 * It then becomes either <i>dormant</i> or <i>ready</i>, depending if its queue of work items is empty or no.
                 * If a client has items queued, it is either <i>in progress</i> or <i>ready</i> but cannot be both.
                 * When work is finished it may be marked <i>ready</i> if there is further work,
                 * or <i>dormant</i> if there is not.
                 * There is never any work for a <i>dormant</i> client.
                 * A client may be unregistered, with <code><b>unregisterKey(K)</b></code>, which removes the client from
                 * all parts of the state, and any queue of items stored with it.
                 * All clients may be unregistered with <code><b>unregisterAllKeys()</b></code>.
                 * <h2>Concurrent Semantics</h2>
                 * This implementation is thread-safe.
                 * @param <K> Key -- type of client
                 * @param <W> Work -- type of work item
                 */
                // @ts-ignore
                class WorkPool<K, W> extends java.lang.Object {
                    // @ts-ignore
                    constructor(queueingTimeout: number /*int*/)
                    /**
                     * Add client <code><b>key</b></code> to pool of item queues, with an empty queue.
                     * A client is initially <i>dormant</i>.
                     * No-op if <code><b>key</b></code> already present.
                     * @param key client to add to pool
                     */
                    // @ts-ignore
                    public registerKey(key: K): void
                    // @ts-ignore
                    public limit(key: K): void
                    // @ts-ignore
                    public unlimit(key: K): void
                    /**
                     * Remove client from pool and from any other state. Has no effect if client already absent.
                     * @param key of client to unregister
                     */
                    // @ts-ignore
                    public unregisterKey(key: K): void
                    /**
                     * Remove all clients from pool and from any other state.
                     */
                    // @ts-ignore
                    public unregisterAllKeys(): void
                    /**
                     * Return the next <i>ready</i> client,
                     * and transfer a collection of that client's items to process.
                     * Mark client <i>in progress</i>.
                     * If there is no <i>ready</i> client, return <code><b>null</b></code>.
                     * @param to collection object in which to transfer items
                     * @param size max number of items to transfer
                     * @return key of client to whom items belong, or <code><b>null</b></code> if there is none.
                     */
                    // @ts-ignore
                    public nextWorkBlock(to: java.util.Collection<W> | Array<W>, size: number /*int*/): K
                    /**
                     * Add (enqueue) an item for a specific client.
                     * No change and returns <code><b>false</b></code> if client not registered.
                     * If <i>dormant</i>, the client will be marked <i>ready</i>.
                     * @param key the client to add to the work item to
                     * @param item the work item to add to the client queue
                     * @return <code><b>true</b></code> if and only if the client is marked <i>ready</i>
                     *  &mdash; <i>as a result of this work item</i>
                     */
                    // @ts-ignore
                    public addWorkItem(key: K, item: W): boolean
                    /**
                     * Set client no longer <i>in progress</i>.
                     * Ignore unknown clients (and return <code><b>false</b></code>).
                     * @param key client that has finished work
                     * @return <code><b>true</b></code> if and only if client becomes <i>ready</i>
                     * @throws IllegalStateException if registered client not <i>in progress</i>
                     */
                    // @ts-ignore
                    public finishWorkBlock(key: K): boolean
                }
            }
        }
    }
}
