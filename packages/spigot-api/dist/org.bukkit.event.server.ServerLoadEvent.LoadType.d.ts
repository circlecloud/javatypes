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
                        public static readonly STARTUP: org.bukkit.event.server.ServerLoadEvent.LoadType
                        // @ts-ignore
                        public static readonly RELOAD: org.bukkit.event.server.ServerLoadEvent.LoadType
                        // @ts-ignore
                        public static values(): org.bukkit.event.server.ServerLoadEvent.LoadType[]
                        // @ts-ignore
                        public static valueOf(name: java.lang.String | string): org.bukkit.event.server.ServerLoadEvent.LoadType
                    }
                }
            }
        }
    }
}
