declare namespace org {
    namespace bukkit {
        namespace block {
            /**
             * Represents a captured state of a jukebox.
             */
            // @ts-ignore
            interface Jukebox extends org.bukkit.block.TileState {
                /**
                 * Gets the record inserted into the jukebox.
                 * @return The record Material, or AIR if none is inserted
                 */
                // @ts-ignore
                getPlaying(): org.bukkit.Material
                /**
                 * Sets the record being played.
                 * @param record The record Material, or null/AIR to stop playing
                 */
                // @ts-ignore
                setPlaying(record: org.bukkit.Material): void
                /**
                 * Gets the record item inserted into the jukebox.
                 * @return a copy of the inserted record, or an air stack if none
                 */
                // @ts-ignore
                getRecord(): org.bukkit.inventory.ItemStack
                /**
                 * Sets the record being played.
                 * @param record the record to insert or null/AIR to empty
                 */
                // @ts-ignore
                setRecord(record: org.bukkit.inventory.ItemStack): void
                /**
                 * Checks if the jukebox is playing a record.
                 * @return True if there is a record playing
                 */
                // @ts-ignore
                isPlaying(): boolean
                /**
                 * Stops the jukebox playing without ejecting the record.
                 */
                // @ts-ignore
                stopPlaying(): void
                /**
                 * Stops the jukebox playing and ejects the current record.
                 * <p>
                 * If the block represented by this state is no longer a jukebox, this will
                 * do nothing and return false.
                 * @return True if a record was ejected; false if there was none playing
                 * @throws IllegalStateException if this block state is not placed
                 */
                // @ts-ignore
                eject(): boolean
            }
        }
    }
}
