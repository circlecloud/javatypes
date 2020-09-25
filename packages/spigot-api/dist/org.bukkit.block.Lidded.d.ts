declare namespace org {
    namespace bukkit {
        namespace block {
            // @ts-ignore
            interface Lidded {
                /**
                 * Sets the block's animated state to open and prevents it from being closed
                 * until {@link #close()} is called.
                 */
                // @ts-ignore
                open(): void
                /**
                 * Sets the block's animated state to closed even if a player is currently
                 * viewing this block.
                 */
                // @ts-ignore
                close(): void
            }
        }
    }
}
