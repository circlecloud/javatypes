declare namespace cn {
    namespace nukkit {
        namespace item {
            namespace food {
                /**
                 * Created by Snake1999 on 2016/1/14.
                 * Package cn.nukkit.item.food in project nukkit.
                 */
                // @ts-ignore
                class FoodInBowl extends cn.nukkit.item.food.Food {
                    // @ts-ignore
                    constructor(restoreFood: number /*int*/, restoreSaturation: number /*float*/)
                    // @ts-ignore
                    onEatenBy(player: cn.nukkit.Player): boolean
                }
            }
        }
    }
}
