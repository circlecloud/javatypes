declare namespace io {
    namespace lumine {
        namespace utils {
            namespace collections {
                // @ts-ignore
                interface ISelector<T extends io.lumine.utils.collections.AWeightedItem> {
                    // @ts-ignore
                    get(items: io.lumine.utils.collections.WeightedCollection<T>): T
                    // @ts-ignore
                    get(items: io.lumine.utils.collections.WeightedCollection<T>, offset: number /*double*/): T
                    // @ts-ignore
                    get(items: io.lumine.utils.collections.WeightedCollection<T>, count: number /*int*/): Array<T>
                    // @ts-ignore
                    get(items: io.lumine.utils.collections.WeightedCollection<T>, count: number /*int*/, offset: number /*double*/): Array<T>
                    // @ts-ignore
                    getNonRepeating(items: io.lumine.utils.collections.WeightedCollection<T>, count: number /*int*/): Array<T>
                    // @ts-ignore
                    getNonRepeating(items: io.lumine.utils.collections.WeightedCollection<T>, count: number /*int*/, offset: number /*double*/): Array<T>
                }
            }
        }
    }
}
