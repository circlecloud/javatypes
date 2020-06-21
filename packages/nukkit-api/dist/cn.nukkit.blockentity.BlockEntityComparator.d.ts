declare namespace cn {
    namespace nukkit {
        namespace blockentity {
            /**
             * @author CreeperFace
             */
            // @ts-ignore
            class BlockEntityComparator extends cn.nukkit.blockentity.BlockEntity {
                // @ts-ignore
                constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                // @ts-ignore
                public isBlockEntityValid(): boolean
                // @ts-ignore
                public getOutputSignal(): number /*int*/
                // @ts-ignore
                public setOutputSignal(outputSignal: number /*int*/): void
                // @ts-ignore
                public saveNBT(): void
            }
        }
    }
}
