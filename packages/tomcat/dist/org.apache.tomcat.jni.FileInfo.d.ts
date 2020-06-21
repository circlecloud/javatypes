declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace jni {
                /**
                 * Fileinfo
                 * @author Mladen Turk
                 */
                // @ts-ignore
                class FileInfo extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Allocates memory and closes lingering handles in the specified pool
                     */
                    // @ts-ignore
                    public pool: number /*long*/
                    /**
                     * The bitmask describing valid fields of this apr_finfo_t structure
                     * including all available 'wanted' fields and potentially more
                     */
                    // @ts-ignore
                    public valid: number /*int*/
                    /**
                     * The access permissions of the file.  Mimics Unix access rights.
                     */
                    // @ts-ignore
                    public protection: number /*int*/
                    /**
                     * The type of file.  One of APR_REG, APR_DIR, APR_CHR, APR_BLK, APR_PIPE,
                     * APR_LNK or APR_SOCK.  If the type is undetermined, the value is APR_NOFILE.
                     * If the type cannot be determined, the value is APR_UNKFILE.
                     */
                    // @ts-ignore
                    public filetype: number /*int*/
                    /**
                     * The user id that owns the file
                     */
                    // @ts-ignore
                    public user: number /*int*/
                    /**
                     * The group id that owns the file
                     */
                    // @ts-ignore
                    public group: number /*int*/
                    /**
                     * The inode of the file.
                     */
                    // @ts-ignore
                    public inode: number /*int*/
                    /**
                     * The id of the device the file is on.
                     */
                    // @ts-ignore
                    public device: number /*int*/
                    /**
                     * The number of hard links to the file.
                     */
                    // @ts-ignore
                    public nlink: number /*int*/
                    /**
                     * The size of the file
                     */
                    // @ts-ignore
                    public size: number /*long*/
                    /**
                     * The storage size consumed by the file
                     */
                    // @ts-ignore
                    public csize: number /*long*/
                    /**
                     * The time the file was last accessed
                     */
                    // @ts-ignore
                    public atime: number /*long*/
                    /**
                     * The time the file was last modified
                     */
                    // @ts-ignore
                    public mtime: number /*long*/
                    /**
                     * The time the file was created, or the inode was last changed
                     */
                    // @ts-ignore
                    public ctime: number /*long*/
                    /**
                     * The pathname of the file (possibly unrooted)
                     */
                    // @ts-ignore
                    public fname: java.lang.String | string
                    /**
                     * The file's name (no path) in filesystem case
                     */
                    // @ts-ignore
                    public name: java.lang.String | string
                    /**
                     * The file's handle, if accessed (can be submitted to apr_duphandle)
                     */
                    // @ts-ignore
                    public filehand: number /*long*/
                }
            }
        }
    }
}
