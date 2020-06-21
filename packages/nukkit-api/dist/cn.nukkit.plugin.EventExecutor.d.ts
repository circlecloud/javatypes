declare namespace cn {
    namespace nukkit {
        namespace plugin {
            /**
             * author: iNevet
             * Nukkit Project
             */
            // @ts-ignore
            interface EventExecutor {
                // @ts-ignore
                execute(listener: cn.nukkit.event.Listener, event: cn.nukkit.event.Event): void
            }
        }
    }
}
