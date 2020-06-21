declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace player {
                /**
                 * Created by Snake1999 on 2016/1/14.
                 * Package cn.nukkit.event.player in project nukkit.
                 */
                // @ts-ignore
                class PlayerEatFoodEvent extends cn.nukkit.event.player.PlayerEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, food: cn.nukkit.item.food.Food)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList
                    // @ts-ignore
                    public getFood(): cn.nukkit.item.food.Food
                    // @ts-ignore
                    public setFood(food: cn.nukkit.item.food.Food): void
                }
            }
        }
    }
}
