declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace mobs {
                    // @ts-ignore
                    class MobRegistry extends java.lang.Object implements io.lumine.utils.terminable.Terminable {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public loadSaved(): void
                        // @ts-ignore
                        public terminate(): boolean
                        // @ts-ignore
                        public isActiveMob(uuid: java.util.UUID): boolean
                        // @ts-ignore
                        public getActiveMob(uuid: java.util.UUID): java.util.Optional<io.lumine.xikage.mythicmobs.mobs.ActiveMob>
                        // @ts-ignore
                        public values(): Array<io.lumine.xikage.mythicmobs.mobs.ActiveMob>
                        // @ts-ignore
                        public put(uuid: java.util.UUID, mob: io.lumine.xikage.mythicmobs.mobs.ActiveMob): void
                        // @ts-ignore
                        public setInactive(uuid: java.util.UUID): void
                        // @ts-ignore
                        public removeMob(uuid: java.util.UUID): void
                        // @ts-ignore
                        public get(uniqueId: java.util.UUID): io.lumine.xikage.mythicmobs.mobs.ActiveMob
                    }
                }
            }
        }
    }
}
