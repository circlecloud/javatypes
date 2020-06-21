declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace jni {
                /**
                 * Lock
                 * @author Mladen Turk
                 */
                // @ts-ignore
                class Lock extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Enumerated potential types for APR process locking methods
                     * <br><b>Warning :</b> Check APR_HAS_foo_SERIALIZE defines to see if the platform supports
                     * APR_LOCK_foo.  Only APR_LOCK_DEFAULT is portable.
                     */
                    // @ts-ignore
                    public static readonly APR_LOCK_FCNTL: number /*int*/
                    /**
                     * fcntl()
                     */
                    // @ts-ignore
                    public static readonly APR_LOCK_FLOCK: number /*int*/
                    /**
                     * flock()
                     */
                    // @ts-ignore
                    public static readonly APR_LOCK_SYSVSEM: number /*int*/
                    /**
                     * System V Semaphores
                     */
                    // @ts-ignore
                    public static readonly APR_LOCK_PROC_PTHREAD: number /*int*/
                    /**
                     * POSIX pthread process-based locking
                     */
                    // @ts-ignore
                    public static readonly APR_LOCK_POSIXSEM: number /*int*/
                    /**
                     * POSIX semaphore process-based locking
                     */
                    // @ts-ignore
                    public static readonly APR_LOCK_DEFAULT: number /*int*/
                    /**
                     * Create and initialize a mutex that can be used to synchronize processes.
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
                     * @throws Error An error occurred
                     */
                    // @ts-ignore
                    public static create(fname: java.lang.String | string, mech: number /*int*/, pool: number /*long*/): number /*long*/
                    /**
                     * Re-open a mutex in a child process.
                     * This function must be called to maintain portability, even
                     * if the underlying lock mechanism does not require it.
                     * @param fname A file name to use if the mutex mechanism requires one.  This
                     *               argument should always be provided.  The mutex code itself will
                     *               determine if it should be used.  This filename should be the
                     *               same one that was passed to apr_proc_mutex_create().
                     * @param pool The pool to operate on.
                     * @return Newly opened mutex.
                     * @throws Error An error occurred
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
                    /**
                     * Return the name of the lockfile for the mutex, or NULL
                     * if the mutex doesn't use a lock file
                     * @param mutex the name of the mutex
                     * @return the name of the lock file
                     */
                    // @ts-ignore
                    public static lockfile(mutex: number /*long*/): string
                    /**
                     * Display the name of the mutex, as it relates to the actual method used.
                     * This matches the valid options for Apache's AcceptMutex directive
                     * @param mutex the name of the mutex
                     * @return the name of the mutex
                     */
                    // @ts-ignore
                    public static name(mutex: number /*long*/): string
                    /**
                     * Display the name of the default mutex: APR_LOCK_DEFAULT
                     * @return the default name
                     */
                    // @ts-ignore
                    public static defname(): string
                }
            }
        }
    }
}
