declare namespace cn {
    namespace nukkit {
        namespace blockentity {
            // @ts-ignore
            class BlockEntityBrewingStand extends cn.nukkit.blockentity.BlockEntitySpawnable implements cn.nukkit.inventory.InventoryHolder, cn.nukkit.blockentity.BlockEntityContainer, cn.nukkit.blockentity.BlockEntityNameable {
                // @ts-ignore
                constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                // @ts-ignore
                inventory: cn.nukkit.inventory.BrewingInventory
                // @ts-ignore
                public static readonly MAX_BREW_TIME: number /*int*/
                // @ts-ignore
                public brewTime: number /*int*/
                // @ts-ignore
                public fuelTotal: number /*int*/
                // @ts-ignore
                public fuelAmount: number /*int*/
                // @ts-ignore
                public static readonly ingredients: java.util.List<java.lang.Integer | number> | Array<java.lang.Integer | number>
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
                public getInventory(): cn.nukkit.inventory.BrewingInventory
                // @ts-ignore
                checkIngredient(ingredient: cn.nukkit.item.Item): boolean
                // @ts-ignore
                public onUpdate(): boolean
                // @ts-ignore
                sendFuel(): void
                // @ts-ignore
                sendBrewTime(): void
                // @ts-ignore
                public updateBlock(): void
                // @ts-ignore
                public getFuel(): number /*int*/
                // @ts-ignore
                public setFuel(fuel: number /*int*/): void
                // @ts-ignore
                public getSpawnCompound(): cn.nukkit.nbt.tag.CompoundTag
            }
        }
    }
}
