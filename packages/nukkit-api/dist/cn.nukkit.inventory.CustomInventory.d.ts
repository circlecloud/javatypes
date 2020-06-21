declare namespace cn {
    namespace nukkit {
        namespace inventory {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            abstract class CustomInventory extends cn.nukkit.inventory.ContainerInventory {
                // @ts-ignore
                constructor(holder: cn.nukkit.inventory.InventoryHolder, type: cn.nukkit.inventory.InventoryType)
                // @ts-ignore
                constructor(holder: cn.nukkit.inventory.InventoryHolder, type: cn.nukkit.inventory.InventoryType, items: java.util.Map<java.lang.Integer | number, cn.nukkit.item.Item>)
                // @ts-ignore
                constructor(holder: cn.nukkit.inventory.InventoryHolder, type: cn.nukkit.inventory.InventoryType, items: java.util.Map<java.lang.Integer | number, cn.nukkit.item.Item>, overrideSize: java.lang.Integer | number)
                // @ts-ignore
                constructor(holder: cn.nukkit.inventory.InventoryHolder, type: cn.nukkit.inventory.InventoryType, items: java.util.Map<java.lang.Integer | number, cn.nukkit.item.Item>, overrideSize: java.lang.Integer | number, overrideTitle: java.lang.String | string)
            }
        }
    }
}
