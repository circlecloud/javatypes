declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace jni {
                /**
                 * Stdlib
                 * @author Mladen Turk
                 */
                // @ts-ignore
                class Stdlib extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Read from plain memory
                     * @param dst Destination byte array
                     * @param src Source memory address
                     * @param sz Number of bytes to copy.
                     * @return <code>true</code> if the operation was successful
                     */
                    // @ts-ignore
                    public static memread(dst: number /*byte*/[], src: number /*long*/, sz: number /*int*/): boolean
                    /**
                     * Write to plain memory
                     * @param dst Destination memory address
                     * @param src Source byte array
                     * @param sz Number of bytes to copy.
                     * @return <code>true</code> if the operation was successful
                     */
                    // @ts-ignore
                    public static memwrite(dst: number /*long*/, src: number /*byte*/[], sz: number /*int*/): boolean
                    /**
                     * Sets buffers to a specified character
                     * @param dst Destination memory address
                     * @param c Character to set.
                     * @param sz Number of characters.
                     * @return <code>true</code> if the operation was successful
                     */
                    // @ts-ignore
                    public static memset(dst: number /*long*/, c: number /*int*/, sz: number /*int*/): boolean
                    /**
                     * Allocates memory blocks.
                     * @param sz Bytes to allocate.
                     * @return a pointer
                     */
                    // @ts-ignore
                    public static malloc(sz: number /*int*/): number /*long*/
                    /**
                     * Reallocate memory blocks.
                     * @param mem Pointer to previously allocated memory block.
                     * @param sz New size in bytes.
                     * @return a pointer
                     */
                    // @ts-ignore
                    public static realloc(mem: number /*long*/, sz: number /*int*/): number /*long*/
                    /**
                     * Allocates an array in memory with elements initialized to 0.
                     * @param num Number of elements.
                     * @param sz Length in bytes of each element.
                     * @return a pointer
                     */
                    // @ts-ignore
                    public static calloc(num: number /*int*/, sz: number /*int*/): number /*long*/
                    /**
                     * Deallocates or frees a memory block.
                     * @param mem Previously allocated memory block to be freed.
                     */
                    // @ts-ignore
                    public static free(mem: number /*long*/): void
                    /**
                     * Get current process pid.
                     * @return current pid or &lt; 1 in case of error.
                     */
                    // @ts-ignore
                    public static getpid(): number /*int*/
                    /**
                     * Get current process parent pid.
                     * @return parent pid or &lt; 1 in case of error.
                     */
                    // @ts-ignore
                    public static getppid(): number /*int*/
                }
            }
        }
    }
}
