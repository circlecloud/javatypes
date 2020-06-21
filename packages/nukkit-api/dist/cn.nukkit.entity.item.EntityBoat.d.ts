declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace item {
                /**
                 * Created by yescallop on 2016/2/13.
                 */
                // @ts-ignore
                class EntityBoat extends cn.nukkit.entity.item.EntityVehicle {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*int*/
                    // @ts-ignore
                    public static readonly DATA_WOOD_ID: number /*int*/
                    // @ts-ignore
                    public static readonly RIDER_PLAYER_OFFSET: cn.nukkit.math.Vector3f
                    // @ts-ignore
                    public static readonly RIDER_OFFSET: cn.nukkit.math.Vector3f
                    // @ts-ignore
                    public static readonly PASSENGER_OFFSET: cn.nukkit.math.Vector3f
                    // @ts-ignore
                    public static readonly RIDER_PASSENGER_OFFSET: cn.nukkit.math.Vector3f
                    // @ts-ignore
                    public static readonly RIDER_INDEX: number /*int*/
                    // @ts-ignore
                    public static readonly PASSENGER_INDEX: number /*int*/
                    // @ts-ignore
                    public static readonly SINKING_DEPTH: number /*double*/
                    // @ts-ignore
                    public static readonly SINKING_SPEED: number /*double*/
                    // @ts-ignore
                    public static readonly SINKING_MAX_SPEED: number /*double*/
                    // @ts-ignore
                    sinking: boolean
                    // @ts-ignore
                    initEntity(): void
                    // @ts-ignore
                    public getHeight(): number /*float*/
                    // @ts-ignore
                    public getWidth(): number /*float*/
                    // @ts-ignore
                    getDrag(): number /*float*/
                    // @ts-ignore
                    getGravity(): number /*float*/
                    // @ts-ignore
                    public getBaseOffset(): number /*float*/
                    // @ts-ignore
                    public getNetworkId(): number /*int*/
                    // @ts-ignore
                    public attack(source: cn.nukkit.event.entity.EntityDamageEvent): boolean
                    // @ts-ignore
                    public close(): void
                    // @ts-ignore
                    public onUpdate(currentTick: number /*int*/): boolean
                    // @ts-ignore
                    public updatePassengers(): void
                    // @ts-ignore
                    public updatePassengers(sendLinks: boolean): void
                    // @ts-ignore
                    public getWaterLevel(): number /*double*/
                    // @ts-ignore
                    public mountEntity(entity: cn.nukkit.entity.Entity): boolean
                    // @ts-ignore
                    updatePassengerPosition(passenger: cn.nukkit.entity.Entity): void
                    // @ts-ignore
                    public dismountEntity(entity: cn.nukkit.entity.Entity): boolean
                    // @ts-ignore
                    public isControlling(entity: cn.nukkit.entity.Entity): boolean
                    // @ts-ignore
                    public onInteract(player: cn.nukkit.Player, item: cn.nukkit.item.Item, clickedPos: cn.nukkit.math.Vector3): boolean
                    // @ts-ignore
                    public getMountedOffset(entity: cn.nukkit.entity.Entity): cn.nukkit.math.Vector3f
                    // @ts-ignore
                    public onPaddle(animation: cn.nukkit.network.protocol.AnimatePacket.Action, value: number /*float*/): void
                    // @ts-ignore
                    public applyEntityCollision(entity: cn.nukkit.entity.Entity): void
                    // @ts-ignore
                    public canPassThrough(): boolean
                    // @ts-ignore
                    public kill(): void
                }
            }
        }
    }
}
