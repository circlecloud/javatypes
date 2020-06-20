declare namespace org {
    namespace bukkit {
        namespace plugin {
            /**
             * A registered service provider.
             * @param <T> Service
             */
            // @ts-ignore
            class RegisteredServiceProvider<T> extends java.lang.Object implements java.lang.Comparable<org.bukkit.plugin.RegisteredServiceProvider<?>> {
                // @ts-ignore
                constructor(service: java.lang.Class<T>, provider: T, priority: org.bukkit.plugin.ServicePriority, plugin: org.bukkit.plugin.Plugin)
                // @ts-ignore
                getService(): java.lang.Class<T>
                // @ts-ignore
                getPlugin(): org.bukkit.plugin.Plugin
                // @ts-ignore
                getProvider(): T
                // @ts-ignore
                getPriority(): org.bukkit.plugin.ServicePriority
                // @ts-ignore
                compareTo(other: org.bukkit.plugin.RegisteredServiceProvider<any>): int
            }
        }
    }
}
