declare namespace cn {
    namespace nukkit {
        namespace entity {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class EntityHuman extends cn.nukkit.entity.EntityHumanType {
                // @ts-ignore
                constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                // @ts-ignore
                public static readonly DATA_PLAYER_FLAG_SLEEP: number /*int*/
                // @ts-ignore
                public static readonly DATA_PLAYER_FLAG_DEAD: number /*int*/
                // @ts-ignore
                public static readonly DATA_PLAYER_FLAGS: number /*int*/
                // @ts-ignore
                public static readonly DATA_PLAYER_BED_POSITION: number /*int*/
                // @ts-ignore
                public static readonly DATA_PLAYER_BUTTON_TEXT: number /*int*/
                // @ts-ignore
                uuid: java.util.UUID
                // @ts-ignore
                rawUUID: number /*byte*/[]
                // @ts-ignore
                skin: cn.nukkit.entity.data.Skin
                // @ts-ignore
                public getWidth(): number /*float*/
                // @ts-ignore
                public getLength(): number /*float*/
                // @ts-ignore
                public getHeight(): number /*float*/
                // @ts-ignore
                public getEyeHeight(): number /*float*/
                // @ts-ignore
                getBaseOffset(): number /*float*/
                // @ts-ignore
                public getNetworkId(): number /*int*/
                // @ts-ignore
                public getSkin(): cn.nukkit.entity.data.Skin
                // @ts-ignore
                public getUniqueId(): java.util.UUID
                // @ts-ignore
                public getRawUniqueId(): number /*byte*/[]
                // @ts-ignore
                public setSkin(skin: cn.nukkit.entity.data.Skin): void
                // @ts-ignore
                initEntity(): void
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public saveNBT(): void
                // @ts-ignore
                public spawnTo(player: cn.nukkit.Player): void
                // @ts-ignore
                public despawnFrom(player: cn.nukkit.Player): void
                // @ts-ignore
                public close(): void
            }
        }
    }
}
