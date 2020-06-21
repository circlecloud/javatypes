declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace player {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                class PlayerCreationEvent extends cn.nukkit.event.Event {
                    // @ts-ignore
                    constructor(interfaz: cn.nukkit.network.SourceInterface, baseClass: java.lang.Class<any>, playerClass: java.lang.Class<any>, clientId: java.lang.Long | number, address: java.lang.String | string, port: number /*int*/)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList
                    // @ts-ignore
                    public getInterface(): cn.nukkit.network.SourceInterface
                    // @ts-ignore
                    public getAddress(): string
                    // @ts-ignore
                    public getPort(): number /*int*/
                    // @ts-ignore
                    public getClientId(): number
                    // @ts-ignore
                    public getBaseClass(): java.lang.Class<any>
                    // @ts-ignore
                    public setBaseClass(baseClass: java.lang.Class<any>): void
                    // @ts-ignore
                    public getPlayerClass(): java.lang.Class<any>
                    // @ts-ignore
                    public setPlayerClass(playerClass: java.lang.Class<any>): void
                }
            }
        }
    }
}
