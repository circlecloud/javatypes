declare namespace cn {
    namespace nukkit {
        namespace blockentity {
            /**
             * Created by Pub4Game on 03.07.2016.
             */
            // @ts-ignore
            class BlockEntityItemFrame extends cn.nukkit.blockentity.BlockEntitySpawnable {
                // @ts-ignore
                constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                // @ts-ignore
                initBlockEntity(): void
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public isBlockEntityValid(): boolean
                // @ts-ignore
                public getItemRotation(): number /*int*/
                // @ts-ignore
                public setItemRotation(itemRotation: number /*int*/): void
                // @ts-ignore
                public getItem(): cn.nukkit.item.Item
                // @ts-ignore
                public setItem(item: cn.nukkit.item.Item): void
                // @ts-ignore
                public setItem(item: cn.nukkit.item.Item, setChanged: boolean): void
                // @ts-ignore
                public getItemDropChance(): number /*float*/
                // @ts-ignore
                public setItemDropChance(chance: number /*float*/): void
                // @ts-ignore
                public setDirty(): void
                // @ts-ignore
                public getSpawnCompound(): cn.nukkit.nbt.tag.CompoundTag
                // @ts-ignore
                public getAnalogOutput(): number /*int*/
            }
        }
    }
}
