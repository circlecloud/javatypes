declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace item {
                /**
                 * Created by PetteriM1
                 */
                // @ts-ignore
                class EntityFishingHook extends cn.nukkit.entity.projectile.EntityProjectile {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag, shootingEntity: cn.nukkit.entity.Entity)
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*int*/
                    // @ts-ignore
                    public static readonly WAIT_CHANCE: number /*int*/
                    // @ts-ignore
                    public static readonly CHANCE: number /*int*/
                    // @ts-ignore
                    public chance: boolean
                    // @ts-ignore
                    public waitChance: number /*int*/
                    // @ts-ignore
                    public attracted: boolean
                    // @ts-ignore
                    public attractTimer: number /*int*/
                    // @ts-ignore
                    public caught: boolean
                    // @ts-ignore
                    public coughtTimer: number /*int*/
                    // @ts-ignore
                    public fish: cn.nukkit.math.Vector3
                    // @ts-ignore
                    public rod: cn.nukkit.item.Item
                    // @ts-ignore
                    public getNetworkId(): number /*int*/
                    // @ts-ignore
                    public getWidth(): number /*float*/
                    // @ts-ignore
                    public getLength(): number /*float*/
                    // @ts-ignore
                    public getHeight(): number /*float*/
                    // @ts-ignore
                    public getGravity(): number /*float*/
                    // @ts-ignore
                    public getDrag(): number /*float*/
                    // @ts-ignore
                    public onUpdate(currentTick: number /*int*/): boolean
                    // @ts-ignore
                    public getWaterHeight(): number /*int*/
                    // @ts-ignore
                    public fishBites(): void
                    // @ts-ignore
                    public spawnFish(): void
                    // @ts-ignore
                    public attractFish(): boolean
                    // @ts-ignore
                    public reelLine(): void
                    // @ts-ignore
                    public spawnTo(player: cn.nukkit.Player): void
                    // @ts-ignore
                    public onCollideWithEntity(entity: cn.nukkit.entity.Entity): void
                }
            }
        }
    }
}
