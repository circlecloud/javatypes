declare namespace cn {
    namespace nukkit {
        namespace blockentity {
            /**
             * Created by Snake1999 on 2016/2/3.
             * Package cn.nukkit.blockentity in project Nukkit.
             */
            // @ts-ignore
            class BlockEntitySkull extends cn.nukkit.blockentity.BlockEntitySpawnable {
                // @ts-ignore
                constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                // @ts-ignore
                initBlockEntity(): void
                // @ts-ignore
                public saveNBT(): void
                // @ts-ignore
                public isBlockEntityValid(): boolean
                // @ts-ignore
                public getSpawnCompound(): cn.nukkit.nbt.tag.CompoundTag
            }
        }
    }
}
