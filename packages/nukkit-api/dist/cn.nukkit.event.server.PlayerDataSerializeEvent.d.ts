declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace server {
                // @ts-ignore
                class PlayerDataSerializeEvent extends cn.nukkit.event.server.ServerEvent {
                    // @ts-ignore
                    constructor(name: java.lang.String | string, serializer: cn.nukkit.utils.PlayerDataSerializer)
                    // @ts-ignore
                    public getName(): java.util.Optional<java.lang.String | string>
                    // @ts-ignore
                    public getUuid(): java.util.Optional<java.util.UUID>
                    // @ts-ignore
                    public getSerializer(): cn.nukkit.utils.PlayerDataSerializer
                    // @ts-ignore
                    public setSerializer(serializer: cn.nukkit.utils.PlayerDataSerializer): void
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList
                }
            }
        }
    }
}
