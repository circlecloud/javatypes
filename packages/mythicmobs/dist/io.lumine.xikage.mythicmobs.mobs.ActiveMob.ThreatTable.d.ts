declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace mobs {
                    namespace ActiveMob {
                        // @ts-ignore
                        class ThreatTable extends java.lang.Object implements java.lang.Cloneable {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public setParent(am: io.lumine.xikage.mythicmobs.mobs.ActiveMob): void
                            // @ts-ignore
                            public tickThreat(): void
                            // @ts-ignore
                            public inCombat(): boolean
                            // @ts-ignore
                            public targetEvent(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): boolean
                            // @ts-ignore
                            public Taunt(target: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): boolean
                            // @ts-ignore
                            public dropCombat(): void
                            // @ts-ignore
                            public observeDeath(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): void
                            // @ts-ignore
                            public observeChangeWorld(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): void
                            // @ts-ignore
                            public targetThreateningEntity(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): boolean
                            // @ts-ignore
                            public targetHighestThreat(): void
                            // @ts-ignore
                            public clearTarget(): void
                            // @ts-ignore
                            public targetDeath(): void
                            // @ts-ignore
                            public threatSet(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, amount: number /*double*/): void
                            // @ts-ignore
                            public threatGain(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, amount: number /*double*/): void
                            // @ts-ignore
                            public threatLoss(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, amount: number /*double*/): void
                            // @ts-ignore
                            public decayTargetThreat(): void
                            // @ts-ignore
                            public getTopThreatHolder(): io.lumine.xikage.mythicmobs.adapters.AbstractEntity
                            // @ts-ignore
                            public getTopTargetThreat(): number /*double*/
                            // @ts-ignore
                            public getThreat(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): number /*double*/
                            // @ts-ignore
                            public getTotalThreat(): number /*double*/
                            // @ts-ignore
                            public getAllThreatTargets(): Array<io.lumine.xikage.mythicmobs.adapters.AbstractEntity>
                            // @ts-ignore
                            public size(): number /*int*/
                            // @ts-ignore
                            public asMap(): object
                            // @ts-ignore
                            public clone(): io.lumine.xikage.mythicmobs.mobs.ActiveMob.ThreatTable
                        }
                    }
                }
            }
        }
    }
}
