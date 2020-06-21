declare namespace cn {
    namespace nukkit {
        namespace blockentity {
            /**
             * Created by CreeperFace on 2.6.2017.
             */
            // @ts-ignore
            class BlockEntityBed extends cn.nukkit.blockentity.BlockEntitySpawnable {
                // @ts-ignore
                constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                // @ts-ignore
                public color: number /*int*/
                // @ts-ignore
                initBlockEntity(): void
                // @ts-ignore
                public isBlockEntityValid(): boolean
                // @ts-ignore
                public saveNBT(): void
                // @ts-ignore
                public getSpawnCompound(): cn.nukkit.nbt.tag.CompoundTag
                // @ts-ignore
                public getDyeColor(): cn.nukkit.utils.DyeColor
            }
        }
    }
}
