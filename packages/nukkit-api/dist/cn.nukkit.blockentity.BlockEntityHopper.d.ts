declare namespace cn {
    namespace nukkit {
        namespace blockentity {
            /**
             * Created by CreeperFace on 8.5.2017.
             */
            // @ts-ignore
            class BlockEntityHopper extends cn.nukkit.blockentity.BlockEntitySpawnable implements cn.nukkit.inventory.InventoryHolder, cn.nukkit.blockentity.BlockEntityContainer, cn.nukkit.blockentity.BlockEntityNameable {
                // @ts-ignore
                constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                // @ts-ignore
                inventory: cn.nukkit.inventory.HopperInventory
                // @ts-ignore
                public transferCooldown: number /*int*/
                // @ts-ignore
                initBlockEntity(): void
                // @ts-ignore
                public isBlockEntityValid(): boolean
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public hasName(): boolean
                // @ts-ignore
                public setName(name: java.lang.String | string): void
                // @ts-ignore
                public isOnTransferCooldown(): boolean
                // @ts-ignore
                public setTransferCooldown(transferCooldown: number /*int*/): void
                // @ts-ignore
                public getSize(): number /*int*/
                // @ts-ignore
                getSlotIndex(index: number /*int*/): number /*int*/
                // @ts-ignore
                public getItem(index: number /*int*/): cn.nukkit.item.Item
                // @ts-ignore
                public setItem(index: number /*int*/, item: cn.nukkit.item.Item): void
                // @ts-ignore
                public saveNBT(): void
                // @ts-ignore
                public getInventory(): cn.nukkit.inventory.HopperInventory
                // @ts-ignore
                public onUpdate(): boolean
                // @ts-ignore
                public pullItems(): boolean
                // @ts-ignore
                public pickupItems(): boolean
                // @ts-ignore
                public close(): void
                // @ts-ignore
                public onBreak(): void
                // @ts-ignore
                public pushItems(): boolean
                // @ts-ignore
                public getSpawnCompound(): cn.nukkit.nbt.tag.CompoundTag
            }
        }
    }
}
