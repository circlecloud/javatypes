declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace jni {
                /**
                 * Buffer
                 * @author Mladen Turk
                 */
                // @ts-ignore
                class Buffer extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Allocate a new ByteBuffer from memory
                     * @param size The amount of memory to allocate
                     * @return The ByteBuffer with allocated memory
                     */
                    // @ts-ignore
                    public static malloc(size: number /*int*/): java.nio.ByteBuffer
                    /**
                     * Allocate a new ByteBuffer from memory and set all of the memory to 0
                     * @param num Number of elements.
                     * @param size Length in bytes of each element.
                     * @return The ByteBuffer with allocated memory
                     */
                    // @ts-ignore
                    public static calloc(num: number /*int*/, size: number /*int*/): java.nio.ByteBuffer
                    /**
                     * Allocate a new ByteBuffer from a pool
                     * @param p The pool to allocate from
                     * @param size The amount of memory to allocate
                     * @return The ByteBuffer with allocated memory
                     */
                    // @ts-ignore
                    public static palloc(p: number /*long*/, size: number /*int*/): java.nio.ByteBuffer
                    /**
                     * Allocate a new ByteBuffer from a pool and set all of the memory to 0
                     * @param p The pool to allocate from
                     * @param size The amount of memory to allocate
                     * @return The ByteBuffer with allocated memory
                     */
                    // @ts-ignore
                    public static pcalloc(p: number /*long*/, size: number /*int*/): java.nio.ByteBuffer
                    /**
                     * Allocate a new ByteBuffer from already allocated memory.
                     * <br>Allocated memory must be provided from call to the
                     * Stdlib.alloc or Stdlib.calloc methods.
                     * @param mem The memory to use
                     * @param size The amount of memory to use
                     * @return The ByteBuffer with attached memory
                     */
                    // @ts-ignore
                    public static create(mem: number /*long*/, size: number /*int*/): java.nio.ByteBuffer
                    /**
                     * Deallocates or frees a memory block used by ByteBuffer
                     * <br><b>Warning :</b> Call this method only on ByteBuffers
                     * that were created by calling Buffer.alloc or Buffer.calloc.
                     * @param buf Previously allocated ByteBuffer to be freed.
                     */
                    // @ts-ignore
                    public static free(buf: java.nio.ByteBuffer): void
                    /**
                     * Returns the memory address of the ByteBuffer.
                     * @param buf Previously allocated ByteBuffer.
                     * @return the memory address
                     */
                    // @ts-ignore
                    public static address(buf: java.nio.ByteBuffer): number /*long*/
                    /**
                     * Returns the allocated memory size of the ByteBuffer.
                     * @param buf Previously allocated ByteBuffer.
                     * @return the size
                     */
                    // @ts-ignore
                    public static size(buf: java.nio.ByteBuffer): number /*long*/
                }
            }
        }
    }
}
