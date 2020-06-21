declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace jni {
                /**
                 * Mmap
                 * @author Mladen Turk
                 */
                // @ts-ignore
                class Mmap extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * MMap opened for reading
                     */
                    // @ts-ignore
                    public static readonly APR_MMAP_READ: number /*int*/
                    /**
                     * MMap opened for writing
                     */
                    // @ts-ignore
                    public static readonly APR_MMAP_WRITE: number /*int*/
                    /**
                     * Create a new mmap'ed file out of an existing APR file.
                     * @param file The file turn into an mmap.
                     * @param offset The offset into the file to start the data pointer at.
                     * @param size The size of the file
                     * @param flag bit-wise or of:
                     *  <PRE>
                     *  APR_MMAP_READ       MMap opened for reading
                     *  APR_MMAP_WRITE      MMap opened for writing
                     *  </PRE>
                     * @param pool The pool to use when creating the mmap.
                     * @return The newly created mmap'ed file.
                     * @throws Error Error creating memory mapping
                     */
                    // @ts-ignore
                    public static create(file: number /*long*/, offset: number /*long*/, size: number /*long*/, flag: number /*int*/, pool: number /*long*/): number /*long*/
                    /**
                     * Duplicate the specified MMAP.
                     * @param mmap The mmap to duplicate.
                     * @param pool The pool to use for new_mmap.
                     * @return Duplicated mmap'ed file.
                     * @throws Error Error duplicating memory mapping
                     */
                    // @ts-ignore
                    public static dup(mmap: number /*long*/, pool: number /*long*/): number /*long*/
                    /**
                     * Remove a mmap'ed.
                     * @param mm The mmap'ed file.
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static delete(mm: number /*long*/): number /*int*/
                    /**
                     * Move the pointer into the mmap'ed file to the specified offset.
                     * @param mm The mmap'ed file.
                     * @param offset The offset to move to.
                     * @return The pointer to the offset specified.
                     * @throws Error Error reading file
                     */
                    // @ts-ignore
                    public static offset(mm: number /*long*/, offset: number /*long*/): number /*long*/
                }
            }
        }
    }
}
