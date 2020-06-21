declare namespace cn {
    namespace nukkit {
        namespace item {
            namespace food {
                /**
                 * Created by Snake1999 on 2016/1/13.
                 * Package cn.nukkit.item.food in project nukkit.
                 */
                // @ts-ignore
                abstract class Food extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly apple: cn.nukkit.item.food.Food
                    // @ts-ignore
                    public static readonly apple_golden: cn.nukkit.item.food.Food
                    // @ts-ignore
                    public static readonly apple_golden_enchanted: cn.nukkit.item.food.Food
                    // @ts-ignore
                    public static readonly beef_raw: cn.nukkit.item.food.Food
                    // @ts-ignore
                    public static readonly beetroot: cn.nukkit.item.food.Food
                    // @ts-ignore
                    public static readonly beetroot_soup: cn.nukkit.item.food.Food
                    // @ts-ignore
                    public static readonly bread: cn.nukkit.item.food.Food
                    // @ts-ignore
                    public static readonly cake_slice: cn.nukkit.item.food.Food
                    // @ts-ignore
                    public static readonly carrot: cn.nukkit.item.food.Food
                    // @ts-ignore
                    public static readonly carrot_golden: cn.nukkit.item.food.Food
                    // @ts-ignore
                    public static readonly chicken_raw: cn.nukkit.item.food.Food
                    // @ts-ignore
                    public static readonly chicken_cooked: cn.nukkit.item.food.Food
                    // @ts-ignore
                    public static readonly chorus_fruit: cn.nukkit.item.food.Food
                    // @ts-ignore
                    public static readonly cookie: cn.nukkit.item.food.Food
                    // @ts-ignore
                    public static readonly melon_slice: cn.nukkit.item.food.Food
                    // @ts-ignore
                    public static readonly milk: cn.nukkit.item.food.Food
                    // @ts-ignore
                    public static readonly mushroom_stew: cn.nukkit.item.food.Food
                    // @ts-ignore
                    public static readonly mutton_cooked: cn.nukkit.item.food.Food
                    // @ts-ignore
                    public static readonly mutton_raw: cn.nukkit.item.food.Food
                    // @ts-ignore
                    public static readonly porkchop_cooked: cn.nukkit.item.food.Food
                    // @ts-ignore
                    public static readonly porkchop_raw: cn.nukkit.item.food.Food
                    // @ts-ignore
                    public static readonly potato_raw: cn.nukkit.item.food.Food
                    // @ts-ignore
                    public static readonly potato_baked: cn.nukkit.item.food.Food
                    // @ts-ignore
                    public static readonly potato_poisonous: cn.nukkit.item.food.Food
                    // @ts-ignore
                    public static readonly pumpkin_pie: cn.nukkit.item.food.Food
                    // @ts-ignore
                    public static readonly rabbit_cooked: cn.nukkit.item.food.Food
                    // @ts-ignore
                    public static readonly rabbit_raw: cn.nukkit.item.food.Food
                    // @ts-ignore
                    public static readonly rabbit_stew: cn.nukkit.item.food.Food
                    // @ts-ignore
                    public static readonly rotten_flesh: cn.nukkit.item.food.Food
                    // @ts-ignore
                    public static readonly spider_eye: cn.nukkit.item.food.Food
                    // @ts-ignore
                    public static readonly steak: cn.nukkit.item.food.Food
                    // @ts-ignore
                    public static readonly clownfish: cn.nukkit.item.food.Food
                    // @ts-ignore
                    public static readonly fish_cooked: cn.nukkit.item.food.Food
                    // @ts-ignore
                    public static readonly fish_raw: cn.nukkit.item.food.Food
                    // @ts-ignore
                    public static readonly salmon_cooked: cn.nukkit.item.food.Food
                    // @ts-ignore
                    public static readonly salmon_raw: cn.nukkit.item.food.Food
                    // @ts-ignore
                    public static readonly pufferfish: cn.nukkit.item.food.Food
                    // @ts-ignore
                    public static readonly dried_kelp: cn.nukkit.item.food.Food
                    // @ts-ignore
                    public static readonly sweet_berries: cn.nukkit.item.food.Food
                    // @ts-ignore
                    restoreFood: number /*int*/
                    // @ts-ignore
                    restoreSaturation: number /*float*/
                    // @ts-ignore
                    readonly relativeIDs: java.util.List<cn.nukkit.item.food.Food.NodeIDMeta> | Array<cn.nukkit.item.food.Food.NodeIDMeta>
                    // @ts-ignore
                    public static registerFood(food: cn.nukkit.item.food.Food, plugin: cn.nukkit.plugin.Plugin): cn.nukkit.item.food.Food
                    // @ts-ignore
                    public static getByRelative(item: cn.nukkit.item.Item): cn.nukkit.item.food.Food
                    // @ts-ignore
                    public static getByRelative(block: cn.nukkit.block.Block): cn.nukkit.item.food.Food
                    // @ts-ignore
                    public static getByRelative(relativeID: number /*int*/, meta: number /*int*/): cn.nukkit.item.food.Food
                    // @ts-ignore
                    public eatenBy(player: cn.nukkit.Player): boolean
                    // @ts-ignore
                    onEatenBy(player: cn.nukkit.Player): boolean
                    // @ts-ignore
                    public addRelative(relativeID: number /*int*/): cn.nukkit.item.food.Food
                    // @ts-ignore
                    public addRelative(relativeID: number /*int*/, meta: number /*int*/): cn.nukkit.item.food.Food
                    // @ts-ignore
                    public getRestoreFood(): number /*int*/
                    // @ts-ignore
                    public setRestoreFood(restoreFood: number /*int*/): cn.nukkit.item.food.Food
                    // @ts-ignore
                    public getRestoreSaturation(): number /*float*/
                    // @ts-ignore
                    public setRestoreSaturation(restoreSaturation: number /*float*/): cn.nukkit.item.food.Food
                }
            }
        }
    }
}
