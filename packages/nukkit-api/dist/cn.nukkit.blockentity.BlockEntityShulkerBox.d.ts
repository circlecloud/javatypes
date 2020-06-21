declare namespace cn {
    namespace nukkit {
        namespace blockentity {
            /**
             * Created by PetteriM1
             */
            // @ts-ignore
            class BlockEntityShulkerBox extends cn.nukkit.blockentity.BlockEntitySpawnable implements cn.nukkit.inventory.InventoryHolder, cn.nukkit.blockentity.BlockEntityContainer, cn.nukkit.blockentity.BlockEntityNameable {
                // @ts-ignore
                constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                // @ts-ignore
                inventory: cn.nukkit.inventory.ShulkerBoxInventory
                // @ts-ignore
                initBlockEntity(): void
                // @ts-ignore
                public close(): void
                // @ts-ignore
                public saveNBT(): void
                // @ts-ignore
                public isBlockEntityValid(): boolean
                // @ts-ignore
                public getSize(): number /*int*/
                // @ts-ignore
                getSlotIndex(index: number /*int*/): number /*int*/
                // @ts-ignore
                public getItem(index: number /*int*/): cn.nukkit.item.Item
                // @ts-ignore
                public setItem(index: number /*int*/, item: cn.nukkit.item.Item): void
                // @ts-ignore
                public getInventory(): cn.nukkit.inventory.BaseInventory
                // @ts-ignore
                public getRealInventory(): cn.nukkit.inventory.ShulkerBoxInventory
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public hasName(): boolean
                // @ts-ignore
                public setName(name: java.lang.String | string): void
                // @ts-ignore
                public getSpawnCompound(): cn.nukkit.nbt.tag.CompoundTag
            }
        }
    }
}
