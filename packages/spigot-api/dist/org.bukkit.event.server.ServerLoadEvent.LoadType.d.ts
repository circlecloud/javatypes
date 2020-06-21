declare namespace org {
    namespace bukkit {
        namespace event {
            namespace server {
                namespace ServerLoadEvent {
                    /**
                     * Represents the context in which the enclosing event has been completed.
                     */
                    // @ts-ignore
                    class LoadType extends java.lang.Enum<org.bukkit.event.server.ServerLoadEvent.LoadType> {
                        // @ts-ignore
                        readonly STARTUP: org.bukkit.event.server.ServerLoadEvent.LoadType
                        // @ts-ignore
                        readonly RELOAD: org.bukkit.event.server.ServerLoadEvent.LoadType
                        // @ts-ignore
                        values(): org.bukkit.event.server.ServerLoadEvent.LoadType[]
                        // @ts-ignore
                        valueOf(name: java.lang.String | string): org.bukkit.event.server.ServerLoadEvent.LoadType
                    }
                }
            }
        }
    }
}
