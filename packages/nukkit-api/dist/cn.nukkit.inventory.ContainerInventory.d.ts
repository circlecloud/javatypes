declare namespace cn {
    namespace nukkit {
        namespace inventory {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            abstract class ContainerInventory extends cn.nukkit.inventory.BaseInventory {
                // @ts-ignore
                constructor(holder: cn.nukkit.inventory.InventoryHolder, type: cn.nukkit.inventory.InventoryType)
                // @ts-ignore
                constructor(holder: cn.nukkit.inventory.InventoryHolder, type: cn.nukkit.inventory.InventoryType, items: java.util.Map<java.lang.Integer | number, cn.nukkit.item.Item>)
                // @ts-ignore
                constructor(holder: cn.nukkit.inventory.InventoryHolder, type: cn.nukkit.inventory.InventoryType, items: java.util.Map<java.lang.Integer | number, cn.nukkit.item.Item>, overrideSize: java.lang.Integer | number)
                // @ts-ignore
                constructor(holder: cn.nukkit.inventory.InventoryHolder, type: cn.nukkit.inventory.InventoryType, items: java.util.Map<java.lang.Integer | number, cn.nukkit.item.Item>, overrideSize: java.lang.Integer | number, overrideTitle: java.lang.String | string)
                // @ts-ignore
                public onOpen(who: cn.nukkit.Player): void
                // @ts-ignore
                public onClose(who: cn.nukkit.Player): void
                // @ts-ignore
                public static calculateRedstone(inv: cn.nukkit.inventory.Inventory): number /*int*/
            }
        }
    }
}
