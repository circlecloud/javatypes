declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace item {
                /**
                 * Created by PetteriM1
                 */
                // @ts-ignore
                class EntityEndCrystal extends cn.nukkit.entity.Entity implements cn.nukkit.entity.EntityExplosive {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*int*/
                    // @ts-ignore
                    public getNetworkId(): number /*int*/
                    // @ts-ignore
                    initEntity(): void
                    // @ts-ignore
                    public saveNBT(): void
                    // @ts-ignore
                    public getHeight(): number /*float*/
                    // @ts-ignore
                    public getWidth(): number /*float*/
                    // @ts-ignore
                    public attack(source: cn.nukkit.event.entity.EntityDamageEvent): boolean
                    // @ts-ignore
                    public explode(): void
                    // @ts-ignore
                    public canCollideWith(entity: cn.nukkit.entity.Entity): boolean
                    // @ts-ignore
                    public showBase(): boolean
                    // @ts-ignore
                    public setShowBase(value: boolean): void
                }
            }
        }
    }
}
