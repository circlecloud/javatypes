declare namespace cn {
    namespace nukkit {
        namespace blockentity {
            /**
             * Created by CreeperFace on 11.4.2017.
             */
            // @ts-ignore
            class BlockEntityMovingBlock extends cn.nukkit.blockentity.BlockEntitySpawnable {
                // @ts-ignore
                constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                // @ts-ignore
                public block: cn.nukkit.block.Block
                // @ts-ignore
                public piston: cn.nukkit.math.BlockVector3
                // @ts-ignore
                public progress: number /*int*/
                // @ts-ignore
                initBlockEntity(): void
                // @ts-ignore
                public getBlock(): cn.nukkit.block.Block
                // @ts-ignore
                public isBlockEntityValid(): boolean
                // @ts-ignore
                public getSpawnCompound(): cn.nukkit.nbt.tag.CompoundTag
            }
        }
    }
}
