declare namespace com {
    namespace rabbitmq {
        namespace utility {
            /**
             * <p>
             * A class for allocating integers from a given range that uses a
             * {@link BitSet} representation of the free integers.
             * </p>
             * <h2>Concurrency Semantics:</h2>
             * This class is <b><i>not</i></b> thread safe.
             * <h2>Implementation notes:</h2>
             * <p>This was originally an ordered chain of non-overlapping Intervals,
             * together with a fixed size array cache for freed integers.
             * </p>
             * <p>
             * {@link #reserve(int)} was expensive in this scheme, whereas in the
             * present implementation it is O(1), as is {@link #free(int)}.
             * </p>
             * <p>Although {@link #allocate()} is slightly slower than O(1) and in the
             * worst case could be O(N), the use of a "<code>lastIndex</code>" field
             * for starting the next scan for free integers means this is negligible.
             * </p>
             * <p>The data representation overhead is O(N) where N is the size of the
             * allocation range. One <code>long</code> is used for every 64 integers in the
             * range.
             * </p>
             * <p>Very little Object creation and destruction occurs in use.</p>
             */
            // @ts-ignore
            class IntAllocator extends java.lang.Object {
                /**
                 * Creates an IntAllocator allocating integer IDs within the
                 * inclusive range [<code>bottom</code>, <code>top</code>].
                 * @param bottom lower end of range
                 * @param top upper end of range (inclusive)
                 */
                // @ts-ignore
                constructor(bottom: number /*int*/, top: number /*int*/)
                /**
                 * Allocate an unallocated integer from the range, or return -1 if no
                 * more integers are available.
                 * @return the allocated integer, or -1
                 */
                // @ts-ignore
                public allocate(): number /*int*/
                /**
                 * Make the provided integer available for allocation again. This operation
                 * runs in O(1) time.
                 * No error checking is performed, so if you double free or free an
                 * integer that was not originally allocated the results are undefined.
                 * @param reservation the previously allocated integer to free
                 */
                // @ts-ignore
                public free(reservation: number /*int*/): void
                /**
                 * Attempt to reserve the provided ID as if it had been allocated. Returns
                 * true if it is available, false otherwise.
                 * This operation runs in O(1) time.
                 * @param reservation the integer to be allocated, if possible
                 * @return <code><b>true</b></code> if allocated, <code><b>false</b></code>
                 *  if already allocated
                 */
                // @ts-ignore
                public reserve(reservation: number /*int*/): boolean
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
