declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace item {
                /**
                 * Created on 2015/12/26 by xtypr.
                 * Package cn.nukkit.entity in project Nukkit .
                 */
                // @ts-ignore
                class EntityXPOrb extends cn.nukkit.entity.Entity {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*int*/
                    /**
                     * Split sizes used for dropping experience orbs.
                     */
                    // @ts-ignore
                    public static readonly ORB_SPLIT_SIZES: number /*int*/[]
                    // @ts-ignore
                    public closestPlayer: cn.nukkit.Player
                    // @ts-ignore
                    public getNetworkId(): number /*int*/
                    // @ts-ignore
                    public getWidth(): number /*float*/
                    // @ts-ignore
                    public getLength(): number /*float*/
                    // @ts-ignore
                    public getHeight(): number /*float*/
                    // @ts-ignore
                    getGravity(): number /*float*/
                    // @ts-ignore
                    getDrag(): number /*float*/
                    // @ts-ignore
                    public canCollide(): boolean
                    // @ts-ignore
                    initEntity(): void
                    // @ts-ignore
                    public attack(source: cn.nukkit.event.entity.EntityDamageEvent): boolean
                    // @ts-ignore
                    public onUpdate(currentTick: number /*int*/): boolean
                    // @ts-ignore
                    public saveNBT(): void
                    // @ts-ignore
                    public getExp(): number /*int*/
                    // @ts-ignore
                    public setExp(exp: number /*int*/): void
                    // @ts-ignore
                    public canCollideWith(entity: cn.nukkit.entity.Entity): boolean
                    // @ts-ignore
                    public getPickupDelay(): number /*int*/
                    // @ts-ignore
                    public setPickupDelay(pickupDelay: number /*int*/): void
                    /**
                     * Returns the largest size of normal XP orb that will be spawned for the specified amount of XP. Used to split XP
                     * up into multiple orbs when an amount of XP is dropped.
                     */
                    // @ts-ignore
                    public static getMaxOrbSize(amount: number /*int*/): number /*int*/
                    /**
                     * Splits the specified amount of XP into an array of acceptable XP orb sizes.
                     */
                    // @ts-ignore
                    public static splitIntoOrbSizes(amount: number /*int*/): Array<java.lang.Integer | number>
                }
            }
        }
    }
}
