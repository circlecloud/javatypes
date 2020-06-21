declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace jni {
                /**
                 * Shm
                 * @author Mladen Turk
                 */
                // @ts-ignore
                class Shm extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Create and make accessible a shared memory segment.
                     * <br>
                     * A note about Anonymous vs. Named shared memory segments:<br>
                     * Not all platforms support anonymous shared memory segments, but in
                     * some cases it is preferred over other types of shared memory
                     * implementations. Passing a NULL 'file' parameter to this function
                     * will cause the subsystem to use anonymous shared memory segments.
                     * If such a system is not available, APR_ENOTIMPL is returned.
                     * <br>
                     * A note about allocation sizes:<br>
                     * On some platforms it is necessary to store some metainformation
                     * about the segment within the actual segment. In order to supply
                     * the caller with the requested size it may be necessary for the
                     * implementation to request a slightly greater segment length
                     * from the subsystem. In all cases, the apr_shm_baseaddr_get()
                     * function will return the first usable byte of memory.
                     * @param reqsize The desired size of the segment.
                     * @param filename The file to use for shared memory on platforms that
                     *         require it.
                     * @param pool the pool from which to allocate the shared memory
                     *         structure.
                     * @return The created shared memory structure.
                     * @throws Error An error occurred
                     */
                    // @ts-ignore
                    public static create(reqsize: number /*long*/, filename: java.lang.String | string, pool: number /*long*/): number /*long*/
                    /**
                     * Remove shared memory segment associated with a filename.
                     * <br>
                     * This function is only supported on platforms which support
                     * name-based shared memory segments, and will return APR_ENOTIMPL on
                     * platforms without such support.
                     * @param filename The filename associated with shared-memory segment which
                     *         needs to be removed
                     * @param pool The pool used for file operations
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static remove(filename: java.lang.String | string, pool: number /*long*/): number /*int*/
                    /**
                     * Destroy a shared memory segment and associated memory.
                     * @param m The shared memory segment structure to destroy.
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static destroy(m: number /*long*/): number /*int*/
                    /**
                     * Attach to a shared memory segment that was created
                     * by another process.
                     * @param filename The file used to create the original segment.
                     *         (This MUST match the original filename.)
                     * @param pool the pool from which to allocate the shared memory
                     *         structure for this process.
                     * @return The created shared memory structure.
                     * @throws Error An error occurred
                     */
                    // @ts-ignore
                    public static attach(filename: java.lang.String | string, pool: number /*long*/): number /*long*/
                    /**
                     * Detach from a shared memory segment without destroying it.
                     * @param m The shared memory structure representing the segment
                     *         to detach from.
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static detach(m: number /*long*/): number /*int*/
                    /**
                     * Retrieve the base address of the shared memory segment.
                     * NOTE: This address is only usable within the callers address
                     * space, since this API does not guarantee that other attaching
                     * processes will maintain the same address mapping.
                     * @param m The shared memory segment from which to retrieve
                     *         the base address.
                     * @return address, aligned by APR_ALIGN_DEFAULT.
                     */
                    // @ts-ignore
                    public static baseaddr(m: number /*long*/): number /*long*/
                    /**
                     * Retrieve the length of a shared memory segment in bytes.
                     * @param m The shared memory segment from which to retrieve
                     *         the segment length.
                     * @return the length of the segment
                     */
                    // @ts-ignore
                    public static size(m: number /*long*/): number /*long*/
                    /**
                     * Retrieve new ByteBuffer base address of the shared memory segment.
                     * NOTE: This address is only usable within the callers address
                     * space, since this API does not guarantee that other attaching
                     * processes will maintain the same address mapping.
                     * @param m The shared memory segment from which to retrieve
                     *         the base address.
                     * @return address, aligned by APR_ALIGN_DEFAULT.
                     */
                    // @ts-ignore
                    public static buffer(m: number /*long*/): java.nio.ByteBuffer
                }
            }
        }
    }
}
