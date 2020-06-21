declare namespace cn {
    namespace nukkit {
        namespace blockentity {
            /**
             * @author MagicDroidX
             */
            // @ts-ignore
            abstract class BlockEntity extends cn.nukkit.level.Position {
                // @ts-ignore
                constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                // @ts-ignore
                public static readonly CHEST: java.lang.String | string
                // @ts-ignore
                public static readonly ENDER_CHEST: java.lang.String | string
                // @ts-ignore
                public static readonly FURNACE: java.lang.String | string
                // @ts-ignore
                public static readonly SIGN: java.lang.String | string
                // @ts-ignore
                public static readonly MOB_SPAWNER: java.lang.String | string
                // @ts-ignore
                public static readonly ENCHANT_TABLE: java.lang.String | string
                // @ts-ignore
                public static readonly SKULL: java.lang.String | string
                // @ts-ignore
                public static readonly FLOWER_POT: java.lang.String | string
                // @ts-ignore
                public static readonly BREWING_STAND: java.lang.String | string
                // @ts-ignore
                public static readonly DAYLIGHT_DETECTOR: java.lang.String | string
                // @ts-ignore
                public static readonly MUSIC: java.lang.String | string
                // @ts-ignore
                public static readonly ITEM_FRAME: java.lang.String | string
                // @ts-ignore
                public static readonly CAULDRON: java.lang.String | string
                // @ts-ignore
                public static readonly BEACON: java.lang.String | string
                // @ts-ignore
                public static readonly PISTON_ARM: java.lang.String | string
                // @ts-ignore
                public static readonly MOVING_BLOCK: java.lang.String | string
                // @ts-ignore
                public static readonly COMPARATOR: java.lang.String | string
                // @ts-ignore
                public static readonly HOPPER: java.lang.String | string
                // @ts-ignore
                public static readonly BED: java.lang.String | string
                // @ts-ignore
                public static readonly JUKEBOX: java.lang.String | string
                // @ts-ignore
                public static readonly SHULKER_BOX: java.lang.String | string
                // @ts-ignore
                public static readonly BANNER: java.lang.String | string
                // @ts-ignore
                public static count: number /*long*/
                // @ts-ignore
                public chunk: cn.nukkit.level.format.FullChunk
                // @ts-ignore
                public name: java.lang.String | string
                // @ts-ignore
                public id: number /*long*/
                // @ts-ignore
                public movable: boolean
                // @ts-ignore
                public closed: boolean
                // @ts-ignore
                public namedTag: cn.nukkit.nbt.tag.CompoundTag
                // @ts-ignore
                lastUpdate: number /*long*/
                // @ts-ignore
                server: cn.nukkit.Server
                // @ts-ignore
                timing: co.aikar.timings.Timing
                // @ts-ignore
                initBlockEntity(): void
                // @ts-ignore
                public static createBlockEntity(type: java.lang.String | string, chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag, ...args: java.lang.Object[] | any[]): cn.nukkit.blockentity.BlockEntity
                // @ts-ignore
                public static registerBlockEntity(name: java.lang.String | string, c: java.lang.Class<any>): boolean
                // @ts-ignore
                public getSaveId(): string
                // @ts-ignore
                public getId(): number /*long*/
                // @ts-ignore
                public saveNBT(): void
                // @ts-ignore
                public getCleanedNBT(): cn.nukkit.nbt.tag.CompoundTag
                // @ts-ignore
                public getBlock(): cn.nukkit.block.Block
                // @ts-ignore
                public abstract isBlockEntityValid(): boolean
                // @ts-ignore
                public onUpdate(): boolean
                // @ts-ignore
                public scheduleUpdate(): void
                // @ts-ignore
                public close(): void
                // @ts-ignore
                public onBreak(): void
                // @ts-ignore
                public setDirty(): void
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public isMovable(): boolean
                // @ts-ignore
                public static getDefaultCompound(pos: cn.nukkit.math.Vector3, id: java.lang.String | string): cn.nukkit.nbt.tag.CompoundTag
            }
        }
    }
}
