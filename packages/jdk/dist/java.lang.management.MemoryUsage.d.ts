declare namespace java {
    namespace lang {
        namespace management {
            /**
             * Represents the memory usage of either a memory pool or the heap and non-heap
             * memory areas of the virtual machine.
             * @since 1.5
             */
            // @ts-ignore
            class MemoryUsage extends java.lang.Object {
                /**
                 * Constructs a new <code>MemoryUsage</code> instance.
                 * @param init
                 *             if defined, the initial amount of memory that can be allocated
                 *             by the virtual machine in bytes. If not defined, then
                 *             <code>-1</code>.
                 * @param used
                 *             the number of bytes currently used for memory.
                 * @param committed
                 *             the number of bytes of committed memory.
                 * @param max
                 *             if defined, the maximum number of bytes that can be used for
                 *             memory management purposes. If not defined, <code>-1</code>.
                 * @throws IllegalArgumentException
                 *              if any of the following conditions applies:
                 *              <ul>
                 *              <li><code>init</code> &lt; <code>-1</code>
                 *              <li><code>max</code> &lt; <code>-1</code>
                 *              <li><code>used</code> &lt; <code>0</code>
                 *              <li><code>committed</code> &lt; <code>0</code>
                 *              <li><code>used</code> &gt; <code>committed</code>
                 *              <li><code>committed</code> &gt; <code>max</code> if
                 *              <code>max</code> is not <code>-1</code>.
                 *              </ul>
                 */
                // @ts-ignore
                constructor(init: number /*long*/, used: number /*long*/, committed: number /*long*/, max: number /*long*/)
                /**
                 * Returns the amount of memory that has been pledged by the operating
                 * system for the virtual machine to use. This value is in bytes.
                 * @return the number of bytes committed to memory.
                 */
                // @ts-ignore
                getCommitted(): long
                /**
                 * Returns the initial amount of memory requested from the underlying
                 * operating system when the virtual machine started up. The value is given
                 * in bytes.
                 * <p>
                 * if the initial memory size was not defined, this method will return a
                 * value of <code>-1</code>.
                 * </p>
                 * @return the initial amount of memory requested at virtual machine start
                 *          up. <code>-1</code> if not defined.
                 */
                // @ts-ignore
                getInit(): long
                /**
                 * Returns the maximum amount of memory that is available to the virtual
                 * machine which may change over the lifecycle of the virtual machine. The
                 * value is in bytes.
                 * @return if defined, the maximum memory size in bytes. If not defined,
                 *          <code>-1</code>.
                 */
                // @ts-ignore
                getMax(): long
                /**
                 * Returns the number of bytes currently used for memory management
                 * purposes.
                 * @return the current number of bytes used for memory.
                 */
                // @ts-ignore
                getUsed(): long
                /**
                 * Returns a text description of this memory usage.
                 * @return a text description of this memory usage.
                 */
                // @ts-ignore
                toString(): java.lang.String
                /**
                 * Receives a {@link CompositeData} representing a <code>MemoryUsage</code>
                 * object and attempts to return the root <code>MemoryUsage</code>
                 * instance.
                 * @param cd
                 *             a <code>CompositeDate</code> that represents a
                 *             <code>MemoryUsage</code>.
                 * @return if <code>cd</code> is non- <code>null</code>, returns a new
                 *          instance of <code>MemoryUsage</code>. If <code>cd</code> is
                 *          <code>null</code>, returns <code>null</code>.
                 * @throws IllegalArgumentException
                 *              if argument <code>cd</code> does not correspond to a
                 *              <code>MemoryUsage</code> with the following attributes all
                 *              of type <code>java.long.Long</code>:
                 *              <ul>
                 *              <li><code>committed</code>
                 *              <li><code>init</code>
                 *              <li><code>max</code>
                 *              <li><code>used</code>
                 *              </ul>
                 */
                // @ts-ignore
                from(cd: javax.management.openmbean.CompositeData): java.lang.management.MemoryUsage
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                equals(obj: any): boolean
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                hashCode(): int
            }
        }
    }
}
