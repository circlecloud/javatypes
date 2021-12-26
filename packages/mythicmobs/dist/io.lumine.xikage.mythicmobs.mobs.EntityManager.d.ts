declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace mobs {
                    // @ts-ignore
                    class EntityManager extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public refreshCaches(): void
                        // @ts-ignore
                        public getLivingEntities(world: io.lumine.xikage.mythicmobs.adapters.AbstractWorld): Array<io.lumine.xikage.mythicmobs.adapters.AbstractEntity>
                        // @ts-ignore
                        public getPlayers(): Array<io.lumine.xikage.mythicmobs.adapters.AbstractPlayer>
                        // @ts-ignore
                        public getPlayers(world: io.lumine.xikage.mythicmobs.adapters.AbstractWorld): Array<io.lumine.xikage.mythicmobs.adapters.AbstractPlayer>
                        // @ts-ignore
                        public registerMob(world: io.lumine.xikage.mythicmobs.adapters.AbstractWorld, entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): void
                        // @ts-ignore
                        public getPlayersInRangeSq(location: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, rangeSq: number /*int*/): Array<io.lumine.xikage.mythicmobs.adapters.AbstractPlayer>
                        // @ts-ignore
                        public getOnlinePlayers(): Array<Player>
                    }
                }
            }
        }
    }
}
