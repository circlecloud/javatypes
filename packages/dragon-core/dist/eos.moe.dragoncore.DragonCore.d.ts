declare namespace eos {
    namespace moe {
        namespace dragoncore {
            // @ts-ignore
            class DragonCore extends JavaPlugin {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static version: number /*float*/
                // @ts-ignore
                public static getInstance(): eos.moe.dragoncore.DragonCore
                // @ts-ignore
                public onEnable(): void
                // @ts-ignore
                public onDisable(): void
                // @ts-ignore
                public registerListener(listener: Listener): void
                // @ts-ignore
                public getLog(): Logger
                // @ts-ignore
                public getMiscManager(): eos.moe.dragoncore.listener.misc.MiscManager
                // @ts-ignore
                public getDB(): eos.moe.dragoncore.database.IDataBase
            }
        }
    }
}
