declare namespace cn {
    namespace nukkit {
        namespace blockentity {
            /**
             * author: CreeperFace
             * Nukkit Project
             */
            // @ts-ignore
            class BlockEntityCauldron extends cn.nukkit.blockentity.BlockEntitySpawnable {
                // @ts-ignore
                constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                // @ts-ignore
                initBlockEntity(): void
                // @ts-ignore
                public getPotionId(): number /*int*/
                // @ts-ignore
                public setPotionId(potionId: number /*int*/): void
                // @ts-ignore
                public hasPotion(): boolean
                // @ts-ignore
                public isSplashPotion(): boolean
                // @ts-ignore
                public setSplashPotion(value: boolean): void
                // @ts-ignore
                public getCustomColor(): cn.nukkit.utils.BlockColor
                // @ts-ignore
                public isCustomColor(): boolean
                // @ts-ignore
                public setCustomColor(color: cn.nukkit.utils.BlockColor): void
                // @ts-ignore
                public setCustomColor(r: number /*int*/, g: number /*int*/, b: number /*int*/): void
                // @ts-ignore
                public clearCustomColor(): void
                // @ts-ignore
                public isBlockEntityValid(): boolean
                // @ts-ignore
                public getSpawnCompound(): cn.nukkit.nbt.tag.CompoundTag
            }
        }
    }
}
