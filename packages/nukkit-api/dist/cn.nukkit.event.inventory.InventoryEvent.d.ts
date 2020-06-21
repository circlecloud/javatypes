declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace inventory {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                abstract class InventoryEvent extends cn.nukkit.event.Event {
                    // @ts-ignore
                    constructor(inventory: cn.nukkit.inventory.Inventory)
                    // @ts-ignore
                    readonly inventory: cn.nukkit.inventory.Inventory
                    // @ts-ignore
                    public getInventory(): cn.nukkit.inventory.Inventory
                    // @ts-ignore
                    public getViewers(): cn.nukkit.Player[]
                }
            }
        }
    }
}
