declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace drops {
                    // @ts-ignore
                    class LootBag extends java.lang.Object {
                        // @ts-ignore
                        constructor(meta: io.lumine.xikage.mythicmobs.drops.DropMetadata)
                        // @ts-ignore
                        public getDrops(): Array<io.lumine.xikage.mythicmobs.drops.Drop>
                        // @ts-ignore
                        public add(type: io.lumine.xikage.mythicmobs.drops.Drop): io.lumine.xikage.mythicmobs.drops.LootBag
                        // @ts-ignore
                        public add(data: io.lumine.xikage.mythicmobs.drops.DropMetadata, type: io.lumine.xikage.mythicmobs.drops.Drop): io.lumine.xikage.mythicmobs.drops.LootBag
                        // @ts-ignore
                        public add(data: io.lumine.xikage.mythicmobs.drops.DropMetadata, other: io.lumine.xikage.mythicmobs.drops.LootBag): io.lumine.xikage.mythicmobs.drops.LootBag
                        // @ts-ignore
                        public drop(target: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): void
                        // @ts-ignore
                        public dropOrGive(location: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, target: io.lumine.xikage.mythicmobs.adapters.AbstractPlayer): void
                        // @ts-ignore
                        public give(player: io.lumine.xikage.mythicmobs.adapters.AbstractPlayer): void
                        // @ts-ignore
                        public give(player: io.lumine.xikage.mythicmobs.adapters.AbstractPlayer, sendMessages: boolean): void
                        // @ts-ignore
                        public equip(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): void
                        // @ts-ignore
                        public size(): number /*int*/
                        // @ts-ignore
                        public getMetadata(): io.lumine.xikage.mythicmobs.drops.DropMetadata
                        // @ts-ignore
                        public getLootTable(): Array<io.lumine.xikage.mythicmobs.drops.Drop>
                        // @ts-ignore
                        public getLootTableIntangible(): java.util.Map<java.lang.Class<any>, io.lumine.xikage.mythicmobs.drops.Drop>
                        // @ts-ignore
                        public setLootTable(lootTable: java.util.List<io.lumine.xikage.mythicmobs.drops.Drop> | Array<io.lumine.xikage.mythicmobs.drops.Drop>): void
                        // @ts-ignore
                        public setLootTableIntangible(lootTableIntangible: java.util.Map<java.lang.Class<any>, io.lumine.xikage.mythicmobs.drops.Drop>): void
                        // @ts-ignore
                        public equals(o: java.lang.Object | any): boolean
                        // @ts-ignore
                        canEqual(other: java.lang.Object | any): boolean
                        // @ts-ignore
                        public hashCode(): number /*int*/
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
