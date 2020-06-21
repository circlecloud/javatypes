declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace jni {
                /**
                 * Global
                 * @author Mladen Turk
                 */
                // @ts-ignore
                class Global extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Create and initialize a mutex that can be used to synchronize both
                     * processes and threads. Note: There is considerable overhead in using
                     * this API if only cross-process or cross-thread mutual exclusion is
                     * required. See apr_proc_mutex.h and apr_thread_mutex.h for more
                     * specialized lock routines.
                     * <br><b>Warning :</b> Check APR_HAS_foo_SERIALIZE defines to see if the platform supports
                     * APR_LOCK_foo.  Only APR_LOCK_DEFAULT is portable.
                     * @param fname A file name to use if the lock mechanism requires one.  This
                     *         argument should always be provided.  The lock code itself will
                     *         determine if it should be used.
                     * @param mech The mechanism to use for the interprocess lock, if any; one of
                     *  <PRE>
                     *             APR_LOCK_FCNTL
                     *             APR_LOCK_FLOCK
                     *             APR_LOCK_SYSVSEM
                     *             APR_LOCK_POSIXSEM
                     *             APR_LOCK_PROC_PTHREAD
                     *             APR_LOCK_DEFAULT     pick the default mechanism for the platform
                     *  </PRE>
                     * @param pool the pool from which to allocate the mutex.
                     * @return Newly created mutex.
                     * @throws Error If an error occurred
                     */
                    // @ts-ignore
                    public static create(fname: java.lang.String | string, mech: number /*int*/, pool: number /*long*/): number /*long*/
                    /**
                     * Re-open a mutex in a child process.
                     * @param fname A file name to use if the mutex mechanism requires one.  This
                     *               argument should always be provided.  The mutex code itself will
                     *               determine if it should be used.  This filename should be the
                     *               same one that was passed to apr_proc_mutex_create().
                     * @param pool The pool to operate on.
                     *  This function must be called to maintain portability, even
                     *          if the underlying lock mechanism does not require it.
                     * @return Newly opened mutex.
                     * @throws Error If an error occurred
                     */
                    // @ts-ignore
                    public static childInit(fname: java.lang.String | string, pool: number /*long*/): number /*long*/
                    /**
                     * Acquire the lock for the given mutex. If the mutex is already locked,
                     * the current thread will be put to sleep until the lock becomes available.
                     * @param mutex the mutex on which to acquire the lock.
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static lock(mutex: number /*long*/): number /*int*/
                    /**
                     * Attempt to acquire the lock for the given mutex. If the mutex has already
                     * been acquired, the call returns immediately with APR_EBUSY. Note: it
                     * is important that the APR_STATUS_IS_EBUSY(s) macro be used to determine
                     * if the return value was APR_EBUSY, for portability reasons.
                     * @param mutex the mutex on which to attempt the lock acquiring.
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static trylock(mutex: number /*long*/): number /*int*/
                    /**
                     * Release the lock for the given mutex.
                     * @param mutex the mutex from which to release the lock.
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static unlock(mutex: number /*long*/): number /*int*/
                    /**
                     * Destroy the mutex and free the memory associated with the lock.
                     * @param mutex the mutex to destroy.
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static destroy(mutex: number /*long*/): number /*int*/
                }
            }
        }
    }
}
