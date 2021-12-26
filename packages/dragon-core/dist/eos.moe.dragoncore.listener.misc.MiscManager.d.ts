declare namespace eos {
    namespace moe {
        namespace dragoncore {
            namespace listener {
                namespace misc {
                    // @ts-ignore
                    class MiscManager extends java.lang.Object {
                        // @ts-ignore
                        constructor(plugin: eos.moe.dragoncore.DragonCore)
                        // @ts-ignore
                        public onJoin(e: PlayerJoinEvent): void
                        // @ts-ignore
                        public onQuit(e: PlayerQuitEvent): void
                        // @ts-ignore
                        public putItem(player: Player, identifier: java.lang.String | string, itemStack: ItemStack): void
                        // @ts-ignore
                        public update(player: Player, callEvent: boolean): void
                        // @ts-ignore
                        public getCacheMap(): java.util.Map<java.util.UUID, java.util.Map<java.lang.String | string, ItemStack>>
                        // @ts-ignore
                        public getUpdateSet(): Array<eos.moe.dragoncore.listener.misc.Update>
                    }
                }
            }
        }
    }
}
