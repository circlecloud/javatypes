declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents a phantom.
             */
            // @ts-ignore
            interface Phantom extends org.bukkit.entity.Flying {
                /**
                 * @return The size of the phantom
                 */
                // @ts-ignore
                getSize(): int
                /**
                 * @param sz The new size of the phantom.
                 */
                // @ts-ignore
                setSize(sz: number /*int*/): void
            }
        }
    }
}
