declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace spawning {
                    namespace random {
                        // @ts-ignore
                        abstract class RandomSpawnGenerator extends java.lang.Object implements java.lang.Runnable {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public run(): void
                            // @ts-ignore
                            public stop(): void
                            // @ts-ignore
                            public abstract generateSpawnPoints(): void
                            // @ts-ignore
                            public abstract findPointNearPlayer(p0: io.lumine.xikage.mythicmobs.adapters.AbstractPlayer, p1: boolean): io.lumine.xikage.mythicmobs.spawning.random.RandomSpawnPoint
                        }
                    }
                }
            }
        }
    }
}
