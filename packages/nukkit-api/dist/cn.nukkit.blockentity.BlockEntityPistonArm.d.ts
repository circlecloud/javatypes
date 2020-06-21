declare namespace cn {
    namespace nukkit {
        namespace blockentity {
            /**
             * @author CreeperFace
             */
            // @ts-ignore
            class BlockEntityPistonArm extends cn.nukkit.blockentity.BlockEntity {
                // @ts-ignore
                constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                // @ts-ignore
                public progress: number /*float*/
                // @ts-ignore
                public lastProgress: number /*float*/
                // @ts-ignore
                public facing: cn.nukkit.math.BlockFace
                // @ts-ignore
                public extending: boolean
                // @ts-ignore
                public sticky: boolean
                // @ts-ignore
                public state: number /*byte*/
                // @ts-ignore
                public newState: number /*byte*/
                // @ts-ignore
                public attachedBlock: cn.nukkit.math.Vector3
                // @ts-ignore
                public isMovable: boolean
                // @ts-ignore
                public powered: boolean
                // @ts-ignore
                initBlockEntity(): void
                // @ts-ignore
                public isBlockEntityValid(): boolean
                // @ts-ignore
                public saveNBT(): void
                // @ts-ignore
                public getSpawnCompound(): cn.nukkit.nbt.tag.CompoundTag
            }
        }
    }
}
