declare namespace cn {
    namespace nukkit {
        namespace item {
            namespace food {
                /**
                 * Created by Snake1999 on 2016/1/13.
                 * Package cn.nukkit.item.food in project nukkit.
                 */
                // @ts-ignore
                class FoodEffective extends cn.nukkit.item.food.Food {
                    // @ts-ignore
                    constructor(restoreFood: number /*int*/, restoreSaturation: number /*float*/)
                    // @ts-ignore
                    readonly effects: java.util.Map<cn.nukkit.potion.Effect, java.lang.Float | number>
                    // @ts-ignore
                    public addEffect(effect: cn.nukkit.potion.Effect): cn.nukkit.item.food.FoodEffective
                    // @ts-ignore
                    public addChanceEffect(chance: number /*float*/, effect: cn.nukkit.potion.Effect): cn.nukkit.item.food.FoodEffective
                    // @ts-ignore
                    onEatenBy(player: cn.nukkit.Player): boolean
                }
            }
        }
    }
}
