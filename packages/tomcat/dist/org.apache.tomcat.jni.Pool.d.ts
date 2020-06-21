declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace jni {
                /**
                 * Pool
                 * @author Mladen Turk
                 */
                // @ts-ignore
                class Pool extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new pool.
                     * @param parent The parent pool.  If this is 0, the new pool is a root
                     *  pool.  If it is non-zero, the new pool will inherit all
                     *  of its parent pool's attributes, except the apr_pool_t will
                     *  be a sub-pool.
                     * @return The pool we have just created.
                     */
                    // @ts-ignore
                    public static create(parent: number /*long*/): number /*long*/
                    /**
                     * Clear all memory in the pool and run all the cleanups. This also destroys all
                     * subpools.
                     * @param pool The pool to clear
                     *  This does not actually free the memory, it just allows the pool
                     *          to re-use this memory for the next allocation.
                     */
                    // @ts-ignore
                    public static clear(pool: number /*long*/): void
                    /**
                     * Destroy the pool. This takes similar action as apr_pool_clear() and then
                     * frees all the memory.
                     * This will actually free the memory
                     * @param pool The pool to destroy
                     */
                    // @ts-ignore
                    public static destroy(pool: number /*long*/): void
                    /**
                     * Get the parent pool of the specified pool.
                     * @param pool The pool for retrieving the parent pool.
                     * @return The parent of the given pool.
                     */
                    // @ts-ignore
                    public static parentGet(pool: number /*long*/): number /*long*/
                    /**
                     * Determine if pool a is an ancestor of pool b
                     * @param a The pool to search
                     * @param b The pool to search for
                     * @return True if a is an ancestor of b, NULL is considered an ancestor
                     *  of all pools.
                     */
                    // @ts-ignore
                    public static isAncestor(a: number /*long*/, b: number /*long*/): boolean
                    /**
                     * Register a function to be called when a pool is cleared or destroyed
                     * @param pool The pool register the cleanup with
                     * @param o The object to call when the pool is cleared
                     *                       or destroyed
                     * @return The cleanup handler.
                     */
                    // @ts-ignore
                    public static cleanupRegister(pool: number /*long*/, o: java.lang.Object | any): number /*long*/
                    /**
                     * Remove a previously registered cleanup function
                     * @param pool The pool remove the cleanup from
                     * @param data The cleanup handler to remove from cleanup
                     */
                    // @ts-ignore
                    public static cleanupKill(pool: number /*long*/, data: number /*long*/): void
                    /**
                     * Register a process to be killed when a pool dies.
                     * @param a The pool to use to define the processes lifetime
                     * @param proc The process to register
                     * @param how How to kill the process, one of:
                     *  <PRE>
                     *  APR_KILL_NEVER         -- process is never sent any signals
                     *  APR_KILL_ALWAYS        -- process is sent SIGKILL on apr_pool_t cleanup
                     *  APR_KILL_AFTER_TIMEOUT -- SIGTERM, wait 3 seconds, SIGKILL
                     *  APR_JUST_WAIT          -- wait forever for the process to complete
                     *  APR_KILL_ONLY_ONCE     -- send SIGTERM and then wait
                     *  </PRE>
                     */
                    // @ts-ignore
                    public static noteSubprocess(a: number /*long*/, proc: number /*long*/, how: number /*int*/): void
                    /**
                     * Allocate a block of memory from a pool
                     * @param p The pool to allocate from
                     * @param size The amount of memory to allocate
                     * @return The ByteBuffer with allocated memory
                     */
                    // @ts-ignore
                    public static alloc(p: number /*long*/, size: number /*int*/): java.nio.ByteBuffer
                    /**
                     * Allocate a block of memory from a pool and set all of the memory to 0
                     * @param p The pool to allocate from
                     * @param size The amount of memory to allocate
                     * @return The ByteBuffer with allocated memory
                     */
                    // @ts-ignore
                    public static calloc(p: number /*long*/, size: number /*int*/): java.nio.ByteBuffer
                    /**
                     * Set the data associated with the current pool
                     * @param data The user data associated with the pool.
                     * @param key The key to use for association
                     * @param pool The current pool
                     *  <br><b>Warning :</b>
                     *  The data to be attached to the pool should have a life span
                     *  at least as long as the pool it is being attached to.
                     *  Object attached to the pool will be globally referenced
                     *  until the pool is cleared or dataSet is called with the null data.
                     * @return APR Status code.
                     */
                    // @ts-ignore
                    public static dataSet(pool: number /*long*/, key: java.lang.String | string, data: java.lang.Object | any): number /*int*/
                    /**
                     * Return the data associated with the current pool.
                     * @param key The key for the data to retrieve
                     * @param pool The current pool.
                     * @return the data
                     */
                    // @ts-ignore
                    public static dataGet(pool: number /*long*/, key: java.lang.String | string): any
                    /**
                     * Run all of the child_cleanups, so that any unnecessary files are
                     * closed because we are about to exec a new program
                     */
                    // @ts-ignore
                    public static cleanupForExec(): void
                }
            }
        }
    }
}
