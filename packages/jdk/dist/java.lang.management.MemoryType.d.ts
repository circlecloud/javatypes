declare namespace java {
    namespace lang {
        namespace management {
            /**
             * @since 1.5
             */
            // @ts-ignore
            class MemoryType extends java.lang.Enum<java.lang.management.MemoryType> {
                /**
                 * Memory on the heap. The heap is the runtime area in the virtual machine,
                 * created upon the start-up of the virtual machine, from which memory for
                 * instances of types and arrays is allocated. The heap is shared among all
                 * threads in the virtual machine.
                 */
                // @ts-ignore
                readonly HEAP: java.lang.management.MemoryType
                /**
                 * Memory that is not on the heap. This encompasses all other storage used
                 * by the virtual machine at runtime.
                 */
                // @ts-ignore
                readonly NON_HEAP: java.lang.management.MemoryType
                // @ts-ignore
                values(): java.lang.management.MemoryType[]
                // @ts-ignore
                valueOf(name: java.lang.String | string): java.lang.management.MemoryType
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                toString(): string
            }
        }
    }
}
