declare namespace org {
    namespace bukkit {
        namespace block {
            /**
             * Represents a captured state of a lectern.
             */
            // @ts-ignore
            interface Lectern extends org.bukkit.block.TileState, org.bukkit.inventory.BlockInventoryHolder {
                /**
                 * Get the current lectern page.
                 * @return current page
                 */
                // @ts-ignore
                getPage(): int
                /**
                 * Set the current lectern page.
                 * If the page is greater than the number of pages of the book currently in
                 * the inventory, then behavior is undefined.
                 * @param page new page
                 */
                // @ts-ignore
                setPage(page: number /*int*/): void
                /**
                 * @see Container#getInventory()
                 * @return inventory
                 */
                // @ts-ignore
                getInventory(): org.bukkit.inventory.Inventory
                /**
                 * @see Container#getSnapshotInventory()
                 * @return snapshot inventory
                 */
                // @ts-ignore
                getSnapshotInventory(): org.bukkit.inventory.Inventory
            }
        }
    }
}
