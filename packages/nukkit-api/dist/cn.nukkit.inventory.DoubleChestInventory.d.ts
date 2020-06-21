declare namespace cn {
    namespace nukkit {
        namespace inventory {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class DoubleChestInventory extends cn.nukkit.inventory.ContainerInventory implements cn.nukkit.inventory.InventoryHolder {
                // @ts-ignore
                constructor(left: cn.nukkit.blockentity.BlockEntityChest, right: cn.nukkit.blockentity.BlockEntityChest)
                // @ts-ignore
                public getInventory(): cn.nukkit.inventory.Inventory
                // @ts-ignore
                public getHolder(): cn.nukkit.blockentity.BlockEntityChest
                // @ts-ignore
                public getItem(index: number /*int*/): cn.nukkit.item.Item
                // @ts-ignore
                public setItem(index: number /*int*/, item: cn.nukkit.item.Item, send: boolean): boolean
                // @ts-ignore
                public clear(index: number /*int*/): boolean
                // @ts-ignore
                public getContents(): java.util.Map<java.lang.Integer | number, cn.nukkit.item.Item>
                // @ts-ignore
                public setContents(items: java.util.Map<java.lang.Integer | number, cn.nukkit.item.Item>): void
                // @ts-ignore
                public onOpen(who: cn.nukkit.Player): void
                // @ts-ignore
                public onClose(who: cn.nukkit.Player): void
                // @ts-ignore
                public getLeftSide(): cn.nukkit.inventory.ChestInventory
                // @ts-ignore
                public getRightSide(): cn.nukkit.inventory.ChestInventory
                // @ts-ignore
                public sendSlot(inv: cn.nukkit.inventory.Inventory, index: number /*int*/, ...players: cn.nukkit.Player[]): void
            }
        }
    }
}
