declare namespace io {
    namespace lumine {
        namespace utils {
            namespace collections {
                // @ts-ignore
                class WeightedCollection<T extends io.lumine.utils.collections.AWeightedItem> extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    constructor(source: io.lumine.utils.collections.WeightedCollection<T>)
                    // @ts-ignore
                    public getWeight(): number /*double*/
                    // @ts-ignore
                    public getMaxWeight(): number /*double*/
                    // @ts-ignore
                    public getMinWeight(): number /*double*/
                    // @ts-ignore
                    public size(): number /*int*/
                    // @ts-ignore
                    public add(item: T): boolean
                    // @ts-ignore
                    public addAll(items: java.util.Collection<any> | Array<any>): boolean
                    // @ts-ignore
                    public remove(item: T): boolean
                    // @ts-ignore
                    public removeAll(items: java.util.Collection<T> | Array<T>): boolean
                    // @ts-ignore
                    public clear(): void
                    // @ts-ignore
                    public getView(): Array<T>
                    // @ts-ignore
                    public getCopy(): Array<T>
                    // @ts-ignore
                    public copy(): io.lumine.utils.collections.WeightedCollection<T>
                    // @ts-ignore
                    public get(): T
                    // @ts-ignore
                    public get(offset: number /*double*/): T
                    // @ts-ignore
                    public get(count: number /*int*/): Array<T>
                    // @ts-ignore
                    public get(count: number /*int*/, offset: number /*double*/): Array<T>
                    // @ts-ignore
                    public getNonRepeating(count: number /*int*/): Array<T>
                    // @ts-ignore
                    public getNonRepeating(count: number /*int*/, offset: number /*double*/): Array<T>
                }
            }
        }
    }
}
