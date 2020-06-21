declare namespace cn {
    namespace nukkit {
        namespace item {
            /**
             * Created by fromgate on 27.03.2016.
             */
            // @ts-ignore
            abstract class ItemColorArmor extends cn.nukkit.item.ItemArmor {
                // @ts-ignore
                constructor(id: number /*int*/)
                // @ts-ignore
                constructor(id: number /*int*/, meta: java.lang.Integer | number)
                // @ts-ignore
                constructor(id: number /*int*/, meta: java.lang.Integer | number, count: number /*int*/)
                // @ts-ignore
                constructor(id: number /*int*/, meta: java.lang.Integer | number, count: number /*int*/, name: java.lang.String | string)
                /**
                 * Set leather armor color
                 * @param dyeColor - Dye color data value
                 * @return - Return colored item
                 */
                // @ts-ignore
                public setColor(dyeColor: number /*int*/): cn.nukkit.item.ItemColorArmor
                /**
                 * Set leather armor color
                 * @param dyeColor - DyeColor object
                 * @return - Return colored item
                 */
                // @ts-ignore
                public setColor(dyeColor: cn.nukkit.utils.DyeColor): cn.nukkit.item.ItemColorArmor
                /**
                 * Set leather armor color
                 * @param color - BlockColor object
                 * @return - Return colored item
                 */
                // @ts-ignore
                public setColor(color: cn.nukkit.utils.BlockColor): cn.nukkit.item.ItemColorArmor
                /**
                 * Set leather armor color
                 * @param r - red
                 * @param g - green
                 * @param b - blue
                 * @return - Return colored item
                 */
                // @ts-ignore
                public setColor(r: number /*int*/, g: number /*int*/, b: number /*int*/): cn.nukkit.item.ItemColorArmor
                /**
                 * Get color of Leather Item
                 * @return - BlockColor, or null if item has no color
                 */
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor
            }
        }
    }
}
