declare namespace org {
    namespace bukkit {
        namespace inventory {
            /**
             * Interface to the inventory of a Lectern.
             */
            // @ts-ignore
            interface LecternInventory extends org.bukkit.inventory.Inventory {
                // @ts-ignore
                getHolder(): org.bukkit.block.Lectern
            }
        }
    }
}
