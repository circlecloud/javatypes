declare namespace io {
    namespace lumine {
        namespace utils {
            namespace collections {
                // @ts-ignore
                class WeightedEntry<T> extends io.lumine.utils.collections.AWeightedItem {
                    // @ts-ignore
                    constructor(value: T, weight: number /*double*/)
                    // @ts-ignore
                    constructor(value: T)
                    // @ts-ignore
                    public getValue(): T
                    // @ts-ignore
                    public setValue(value: T): void
                }
            }
        }
    }
}
