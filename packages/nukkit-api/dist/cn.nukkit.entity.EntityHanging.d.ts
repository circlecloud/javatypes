declare namespace cn {
    namespace nukkit {
        namespace entity {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            abstract class EntityHanging extends cn.nukkit.entity.Entity {
                // @ts-ignore
                constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                // @ts-ignore
                direction: number /*int*/
                // @ts-ignore
                initEntity(): void
                // @ts-ignore
                public saveNBT(): void
                // @ts-ignore
                public getDirection(): cn.nukkit.math.BlockFace
                // @ts-ignore
                public onUpdate(currentTick: number /*int*/): boolean
                // @ts-ignore
                isSurfaceValid(): boolean
            }
        }
    }
}
