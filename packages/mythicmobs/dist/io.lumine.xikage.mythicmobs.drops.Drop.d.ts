declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace drops {
                    // @ts-ignore
                    abstract class Drop extends io.lumine.utils.collections.AWeightedItem implements java.lang.Cloneable {
                        // @ts-ignore
                        constructor(line: java.lang.String | string, config: io.lumine.xikage.mythicmobs.io.MythicLineConfig)
                        // @ts-ignore
                        constructor(line: java.lang.String | string, config: io.lumine.xikage.mythicmobs.io.MythicLineConfig, amount: number /*double*/)
                        // @ts-ignore
                        constructor(line: java.lang.String | string, config: io.lumine.xikage.mythicmobs.io.MythicLineConfig, amount: io.lumine.xikage.mythicmobs.util.types.RandomDouble)
                        // @ts-ignore
                        dropVar: java.lang.String | string
                        // @ts-ignore
                        public rollChance(): boolean
                        // @ts-ignore
                        public rollAmount(data: io.lumine.xikage.mythicmobs.drops.DropMetadata): void
                        // @ts-ignore
                        public hashCode(): number /*int*/
                        // @ts-ignore
                        public equals(o: java.lang.Object | any): boolean
                        // @ts-ignore
                        public addAmount(other: io.lumine.xikage.mythicmobs.drops.Drop): io.lumine.xikage.mythicmobs.drops.Drop
                        // @ts-ignore
                        public static getDrop(fileName: java.lang.String | string, drop: java.lang.String | string): io.lumine.xikage.mythicmobs.drops.Drop
                        // @ts-ignore
                        public clone(): io.lumine.xikage.mythicmobs.drops.Drop
                        // @ts-ignore
                        public getLine(): string
                        // @ts-ignore
                        public getConfig(): io.lumine.xikage.mythicmobs.io.GenericConfig
                        // @ts-ignore
                        public getDropVar(): string
                        // @ts-ignore
                        public getAmount(): number /*double*/
                        // @ts-ignore
                        public setAmount(amount: number /*double*/): void
                    }
                }
            }
        }
    }
}
