declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace item {
                /**
                 * @author MagicDroidX
                 */
                // @ts-ignore
                class EntityItem extends cn.nukkit.entity.Entity {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*int*/
                    // @ts-ignore
                    public static readonly DATA_SOURCE_ID: number /*int*/
                    // @ts-ignore
                    owner: java.lang.String | string
                    // @ts-ignore
                    thrower: java.lang.String | string
                    // @ts-ignore
                    item: cn.nukkit.item.Item
                    // @ts-ignore
                    pickupDelay: number /*int*/
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
                    getBaseOffset(): number /*float*/
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
                    public getName(): string
                    // @ts-ignore
                    public getItem(): cn.nukkit.item.Item
                    // @ts-ignore
                    public canCollideWith(entity: cn.nukkit.entity.Entity): boolean
                    // @ts-ignore
                    public getPickupDelay(): number /*int*/
                    // @ts-ignore
                    public setPickupDelay(pickupDelay: number /*int*/): void
                    // @ts-ignore
                    public getOwner(): string
                    // @ts-ignore
                    public setOwner(owner: java.lang.String | string): void
                    // @ts-ignore
                    public getThrower(): string
                    // @ts-ignore
                    public setThrower(thrower: java.lang.String | string): void
                    // @ts-ignore
                    public createAddEntityPacket(): cn.nukkit.network.protocol.DataPacket
                    // @ts-ignore
                    public doesTriggerPressurePlate(): boolean
                }
            }
        }
    }
}
