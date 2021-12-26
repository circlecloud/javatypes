declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace compatibility {
                    // @ts-ignore
                    class LibsDisguisesSupport extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public enabled: boolean
                        // @ts-ignore
                        public ld: LibsDisguises
                        // @ts-ignore
                        public setDisguise(am: io.lumine.xikage.mythicmobs.mobs.ActiveMob, disguise: java.lang.String | string): void
                        // @ts-ignore
                        public setDisguise(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, mc: io.lumine.xikage.mythicmobs.io.MythicLineConfig): void
                        // @ts-ignore
                        public removeDisguise(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): void
                        // @ts-ignore
                        public getDisguise(disguise: java.lang.String | string, mc: io.lumine.xikage.mythicmobs.io.GenericConfig): Disguise
                    }
                }
            }
        }
    }
}
