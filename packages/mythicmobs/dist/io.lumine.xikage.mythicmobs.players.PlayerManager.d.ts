declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace players {
                    // @ts-ignore
                    class PlayerManager extends io.lumine.utils.serialization.SerializingModule implements io.lumine.utils.terminable.Terminable {
                        // @ts-ignore
                        constructor(core: io.lumine.xikage.mythicmobs.MythicMobs)
                        // @ts-ignore
                        readonly core: io.lumine.xikage.mythicmobs.MythicMobs
                        // @ts-ignore
                        playerData: java.util.Map<java.util.UUID, io.lumine.utils.serialization.WrappedJsonFile<io.lumine.xikage.mythicmobs.players.PlayerData>>
                        // @ts-ignore
                        public terminate(): boolean
                        // @ts-ignore
                        public getPlayerData(player: io.lumine.xikage.mythicmobs.adapters.AbstractPlayer): io.lumine.xikage.mythicmobs.players.PlayerData
                        // @ts-ignore
                        public saveAll(): void
                    }
                }
            }
        }
    }
}
