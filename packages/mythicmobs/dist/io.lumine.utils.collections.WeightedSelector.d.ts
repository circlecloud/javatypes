declare namespace io {
    namespace lumine {
        namespace utils {
            namespace collections {
                // @ts-ignore
                class WeightedSelector<T extends io.lumine.utils.collections.AWeightedItem> extends java.lang.Object implements io.lumine.utils.collections.ISelector<T> {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    constructor(seed: number /*long*/)
                    // @ts-ignore
                    constructor(random: java.util.Random)
                    // @ts-ignore
                    public get(items: io.lumine.utils.collections.WeightedCollection<T>): T
                    // @ts-ignore
                    public get(items: io.lumine.utils.collections.WeightedCollection<T>, count: number /*int*/): Array<T>
                    // @ts-ignore
                    public getNonRepeating(items: io.lumine.utils.collections.WeightedCollection<T>, count: number /*int*/): Array<T>
                }
            }
        }
    }
}
