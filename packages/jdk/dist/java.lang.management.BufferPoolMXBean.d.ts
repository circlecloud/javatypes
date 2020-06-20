declare namespace java {
    namespace lang {
        namespace management {
            /**
             * The interface for the management buffer pool.
             */
            // @ts-ignore
            interface BufferPoolMXBean extends java.lang.management.PlatformManagedObject {
                /**
                 * Returns the name of the buffer pool.
                 * @return the name of the buffer pool.
                 */
                // @ts-ignore
                getName(): java.lang.String
                /**
                 * Returns the number of buffers of the pool.
                 * @return the number of buffers of the pool.
                 */
                // @ts-ignore
                getCount(): long
                /**
                 * Returns the total capacity of the buffers in this pool.
                 * @return the total capacity of the buffers in this pool.
                 */
                // @ts-ignore
                getTotalCapacity(): long
                /**
                 * Returns the count of used memory.
                 * @return the count of used memory.
                 */
                // @ts-ignore
                getMemoryUsed(): long
            }
        }
    }
}
