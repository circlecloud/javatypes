declare namespace cn {
    namespace nukkit {
        namespace blockentity {
            // @ts-ignore
            class BlockEntityBanner extends cn.nukkit.blockentity.BlockEntitySpawnable {
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
                public getName(): string
                // @ts-ignore
                public getBaseColor(): number /*int*/
                // @ts-ignore
                public setBaseColor(color: cn.nukkit.utils.DyeColor): void
                // @ts-ignore
                public getType(): number /*int*/
                // @ts-ignore
                public setType(type: number /*int*/): void
                // @ts-ignore
                public addPattern(pattern: cn.nukkit.utils.BannerPattern): void
                // @ts-ignore
                public getPattern(index: number /*int*/): cn.nukkit.utils.BannerPattern
                // @ts-ignore
                public removePattern(index: number /*int*/): void
                // @ts-ignore
                public getPatternsSize(): number /*int*/
                // @ts-ignore
                public getSpawnCompound(): cn.nukkit.nbt.tag.CompoundTag
                // @ts-ignore
                public getDyeColor(): cn.nukkit.utils.DyeColor
            }
        }
    }
}
