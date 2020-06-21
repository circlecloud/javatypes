declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace passive {
                /**
                 * Author: BeYkeRYkt
                 * Nukkit Project
                 */
                // @ts-ignore
                abstract class EntityTameable extends cn.nukkit.entity.passive.EntityAnimal implements cn.nukkit.entity.EntityOwnable {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                    // @ts-ignore
                    public static readonly DATA_TAMED_FLAG: number /*int*/
                    // @ts-ignore
                    public static readonly DATA_OWNER_NAME: number /*int*/
                    // @ts-ignore
                    initEntity(): void
                    // @ts-ignore
                    public saveNBT(): void
                    // @ts-ignore
                    public getOwnerName(): string
                    // @ts-ignore
                    public setOwnerName(playerName: java.lang.String | string): void
                    // @ts-ignore
                    public getOwner(): cn.nukkit.Player
                    // @ts-ignore
                    public getName(): string
                    // @ts-ignore
                    public isTamed(): boolean
                    // @ts-ignore
                    public setTamed(flag: boolean): void
                    // @ts-ignore
                    public isSitting(): boolean
                    // @ts-ignore
                    public setSitting(flag: boolean): void
                }
            }
        }
    }
}
