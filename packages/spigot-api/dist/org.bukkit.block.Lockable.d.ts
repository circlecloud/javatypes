declare namespace org {
    namespace bukkit {
        namespace block {
            /**
             * Represents a block (usually a container) that may be locked. When a lock is
             * active an item with a name corresponding to the key will be required to open
             * this block.
             */
            // @ts-ignore
            interface Lockable {
                /**
                 * Checks if the container has a valid (non empty) key.
                 * @return true if the key is valid.
                 */
                // @ts-ignore
                isLocked(): boolean
                /**
                 * Gets the key needed to access the container.
                 * @return the key needed.
                 */
                // @ts-ignore
                getLock(): java.lang.String
                /**
                 * Sets the key required to access this container. Set to null (or empty
                 * string) to remove key.
                 * @param key the key required to access the container.
                 */
                // @ts-ignore
                setLock(key: string): void
            }
        }
    }
}
