declare namespace cn {
    namespace nukkit {
        namespace blockentity {
            /**
             * author: Rover656
             */
            // @ts-ignore
            class BlockEntityBeacon extends cn.nukkit.blockentity.BlockEntitySpawnable {
                // @ts-ignore
                constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                // @ts-ignore
                initBlockEntity(): void
                // @ts-ignore
                public isBlockEntityValid(): boolean
                // @ts-ignore
                public getSpawnCompound(): cn.nukkit.nbt.tag.CompoundTag
                // @ts-ignore
                public onUpdate(): boolean
                // @ts-ignore
                public getPowerLevel(): number /*int*/
                // @ts-ignore
                public setPowerLevel(level: number /*int*/): void
                // @ts-ignore
                public getPrimaryPower(): number /*int*/
                // @ts-ignore
                public setPrimaryPower(power: number /*int*/): void
                // @ts-ignore
                public getSecondaryPower(): number /*int*/
                // @ts-ignore
                public setSecondaryPower(power: number /*int*/): void
                // @ts-ignore
                public updateCompoundTag(nbt: cn.nukkit.nbt.tag.CompoundTag, player: cn.nukkit.Player): boolean
            }
        }
    }
}
