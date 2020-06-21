declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                class PlayerFoodLevelChangeEvent extends cn.nukkit.event.player.PlayerEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, foodLevel: number /*int*/, foodSaturationLevel: number /*float*/)
                    // @ts-ignore
                    foodLevel: number /*int*/
                    // @ts-ignore
                    foodSaturationLevel: number /*float*/
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList
                    // @ts-ignore
                    public getFoodLevel(): number /*int*/
                    // @ts-ignore
                    public setFoodLevel(foodLevel: number /*int*/): void
                    // @ts-ignore
                    public getFoodSaturationLevel(): number /*float*/
                    // @ts-ignore
                    public setFoodSaturationLevel(foodSaturationLevel: number /*float*/): void
                }
            }
        }
    }
}
