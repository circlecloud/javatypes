declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace jni {
                /**
                 * Directory
                 * @author Mladen Turk
                 */
                // @ts-ignore
                class Directory extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new directory on the file system.
                     * @param path the path for the directory to be created. (use / on all systems)
                     * @param perm Permissions for the new directory.
                     * @param pool the pool to use.
                     * @return the operation result
                     */
                    // @ts-ignore
                    public static make(path: java.lang.String | string, perm: number /*int*/, pool: number /*long*/): number /*int*/
                    /**
                     * Creates a new directory on the file system, but behaves like
                     * 'mkdir -p'. Creates intermediate directories as required. No error
                     * will be reported if PATH already exists.
                     * @param path the path for the directory to be created. (use / on all systems)
                     * @param perm Permissions for the new directory.
                     * @param pool the pool to use.
                     * @return the operation result
                     */
                    // @ts-ignore
                    public static makeRecursive(path: java.lang.String | string, perm: number /*int*/, pool: number /*long*/): number /*int*/
                    /**
                     * Remove directory from the file system.
                     * @param path the path for the directory to be removed. (use / on all systems)
                     * @param pool the pool to use.
                     * @return the operation result
                     */
                    // @ts-ignore
                    public static remove(path: java.lang.String | string, pool: number /*long*/): number /*int*/
                    /**
                     * Find an existing directory suitable as a temporary storage location.
                     * @param pool The pool to use for any necessary allocations.
                     * @return The temp directory.
                     * 
                     *  This function uses an algorithm to search for a directory that an
                     *  an application can use for temporary storage.  Once such a
                     *  directory is found, that location is cached by the library.  Thus,
                     *  callers only pay the cost of this algorithm once if that one time
                     *  is successful.
                     */
                    // @ts-ignore
                    public static tempGet(pool: number /*long*/): string
                    /**
                     * Open the specified directory.
                     * @param dirname The full path to the directory (use / on all systems)
                     * @param pool The pool to use.
                     * @return The opened directory descriptor.
                     * @throws Error An error occurred
                     */
                    // @ts-ignore
                    public static open(dirname: java.lang.String | string, pool: number /*long*/): number /*long*/
                    /**
                     * close the specified directory.
                     * @param thedir the directory descriptor to close.
                     * @return the operation result
                     */
                    // @ts-ignore
                    public static close(thedir: number /*long*/): number /*int*/
                    /**
                     * Rewind the directory to the first entry.
                     * @param thedir the directory descriptor to rewind.
                     * @return the operation result
                     */
                    // @ts-ignore
                    public static rewind(thedir: number /*long*/): number /*int*/
                    /**
                     * Read the next entry from the specified directory.
                     * @param finfo the file info structure and filled in by apr_dir_read
                     * @param wanted The desired apr_finfo_t fields, as a bit flag of APR_FINFO_ values
                     * @param thedir the directory descriptor returned from apr_dir_open
                     *  No ordering is guaranteed for the entries read.
                     * @return the operation result
                     */
                    // @ts-ignore
                    public static read(finfo: org.apache.tomcat.jni.FileInfo, wanted: number /*int*/, thedir: number /*long*/): number /*int*/
                }
            }
        }
    }
}
