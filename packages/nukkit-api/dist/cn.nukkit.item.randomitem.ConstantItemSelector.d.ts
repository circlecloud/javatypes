declare namespace cn {
    namespace nukkit {
        namespace item {
            namespace randomitem {
                /**
                 * Created by Snake1999 on 2016/1/15.
                 * Package cn.nukkit.item.randomitem in project nukkit.
                 */
                // @ts-ignore
                class ConstantItemSelector extends cn.nukkit.item.randomitem.Selector {
                    // @ts-ignore
                    constructor(id: number /*int*/, parent: cn.nukkit.item.randomitem.Selector)
                    // @ts-ignore
                    constructor(id: number /*int*/, meta: java.lang.Integer | number, parent: cn.nukkit.item.randomitem.Selector)
                    // @ts-ignore
                    constructor(id: number /*int*/, meta: java.lang.Integer | number, count: number /*int*/, parent: cn.nukkit.item.randomitem.Selector)
                    // @ts-ignore
                    constructor(item: cn.nukkit.item.Item, parent: cn.nukkit.item.randomitem.Selector)
                    // @ts-ignore
                    readonly item: cn.nukkit.item.Item
                    // @ts-ignore
                    public getItem(): cn.nukkit.item.Item
                    // @ts-ignore
                    public select(): any
                }
            }
        }
    }
}
