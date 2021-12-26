declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace compatibility {
                    // @ts-ignore
                    class VaultSupport extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public enabled: boolean
                        // @ts-ignore
                        public economy: Economy
                        // @ts-ignore
                        public giveMoney(p: Player, amount: number /*double*/): void
                        // @ts-ignore
                        public takeMoney(player: io.lumine.xikage.mythicmobs.adapters.AbstractPlayer, amount: number /*double*/): void
                        // @ts-ignore
                        public hasMoney(player: io.lumine.xikage.mythicmobs.adapters.AbstractPlayer, amount: number /*double*/): boolean
                    }
                }
            }
        }
    }
}
