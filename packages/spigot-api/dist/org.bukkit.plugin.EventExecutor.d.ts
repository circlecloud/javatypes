declare namespace org {
    namespace bukkit {
        namespace plugin {
            /**
             * Interface which defines the class for event call backs to plugins
             */
            // @ts-ignore
            interface EventExecutor {
                // @ts-ignore
                execute(listener: org.bukkit.event.Listener, event: org.bukkit.event.Event): void
            }
        }
    }
}
