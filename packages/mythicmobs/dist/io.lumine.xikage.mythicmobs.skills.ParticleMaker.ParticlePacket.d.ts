declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace ParticleMaker {
                        // @ts-ignore
                        class ParticlePacket extends java.lang.Object {
                            // @ts-ignore
                            constructor(name: java.lang.String | string, color: java.awt.Color, speed: number /*float*/, amount: number /*int*/, longDistance: boolean)
                            // @ts-ignore
                            constructor(name: java.lang.String | string, vector: io.lumine.xikage.mythicmobs.adapters.AbstractVector, speed: number /*float*/, amount: number /*int*/, longDistance: boolean)
                            // @ts-ignore
                            constructor(name: java.lang.String | string, offsetX: number /*float*/, offsetY: number /*float*/, offsetZ: number /*float*/, speed: number /*float*/, amount: number /*int*/, longDistance: boolean)
                            // @ts-ignore
                            public static playerCache: java.util.List<Player> | Array<Player>
                            // @ts-ignore
                            public initialize(): void
                            // @ts-ignore
                            public isInitialized(): boolean
                            // @ts-ignore
                            public send(center: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, player: Player): void
                            // @ts-ignore
                            public send(center: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, players: java.util.List<Player> | Array<Player>): void
                            // @ts-ignore
                            public sendAsync(center: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, viewDistance: number /*int*/): void
                            // @ts-ignore
                            public sendAsync(ll: java.util.List<io.lumine.xikage.mythicmobs.adapters.AbstractLocation> | Array<io.lumine.xikage.mythicmobs.adapters.AbstractLocation>, viewDistance: number /*int*/): void
                        }
                    }
                }
            }
        }
    }
}
