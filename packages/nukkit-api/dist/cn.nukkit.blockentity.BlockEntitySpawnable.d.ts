declare namespace cn {
    namespace nukkit {
        namespace blockentity {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            abstract class BlockEntitySpawnable extends cn.nukkit.blockentity.BlockEntity {
                // @ts-ignore
                constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                // @ts-ignore
                initBlockEntity(): void
                // @ts-ignore
                public abstract getSpawnCompound(): cn.nukkit.nbt.tag.CompoundTag
                // @ts-ignore
                public spawnTo(player: cn.nukkit.Player): void
                // @ts-ignore
                public spawnToAll(): void
                /**
                 * Called when a player updates a block entity's NBT data
                 * for example when writing on a sign.
                 * @param nbt tag
                 * @param player player
                 * @return bool indication of success, will respawn the tile to the player if false.
                 */
                // @ts-ignore
                public updateCompoundTag(nbt: cn.nukkit.nbt.tag.CompoundTag, player: cn.nukkit.Player): boolean
            }
        }
    }
}
