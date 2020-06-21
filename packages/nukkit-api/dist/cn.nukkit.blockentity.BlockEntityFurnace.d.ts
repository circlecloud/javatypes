declare namespace cn {
    namespace nukkit {
        namespace blockentity {
            /**
             * @author MagicDroidX
             */
            // @ts-ignore
            class BlockEntityFurnace extends cn.nukkit.blockentity.BlockEntitySpawnable implements cn.nukkit.inventory.InventoryHolder, cn.nukkit.blockentity.BlockEntityContainer, cn.nukkit.blockentity.BlockEntityNameable {
                // @ts-ignore
                constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                // @ts-ignore
                inventory: cn.nukkit.inventory.FurnaceInventory
                // @ts-ignore
                burnTime: number /*int*/
                // @ts-ignore
                burnDuration: number /*int*/
                // @ts-ignore
                cookTime: number /*int*/
                // @ts-ignore
                maxTime: number /*int*/
                // @ts-ignore
                initBlockEntity(): void
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public hasName(): boolean
                // @ts-ignore
                public setName(name: java.lang.String | string): void
                // @ts-ignore
                public close(): void
                // @ts-ignore
                public onBreak(): void
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
                public getInventory(): cn.nukkit.inventory.FurnaceInventory
                // @ts-ignore
                checkFuel(fuel: cn.nukkit.item.Item): void
                // @ts-ignore
                public onUpdate(): boolean
                // @ts-ignore
                public getSpawnCompound(): cn.nukkit.nbt.tag.CompoundTag
                // @ts-ignore
                public getBurnTime(): number /*int*/
                // @ts-ignore
                public setBurnTime(burnTime: number /*int*/): void
                // @ts-ignore
                public getBurnDuration(): number /*int*/
                // @ts-ignore
                public setBurnDuration(burnDuration: number /*int*/): void
                // @ts-ignore
                public getCookTime(): number /*int*/
                // @ts-ignore
                public setCookTime(cookTime: number /*int*/): void
                // @ts-ignore
                public getMaxTime(): number /*int*/
                // @ts-ignore
                public setMaxTime(maxTime: number /*int*/): void
            }
        }
    }
}
