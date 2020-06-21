declare namespace org {
    namespace bukkit {
        namespace plugin {
            /**
             * A registered service provider.
             * @param <T> Service
             */
            // @ts-ignore
            class RegisteredServiceProvider<T> extends java.lang.Object implements java.lang.Comparable<org.bukkit.plugin.RegisteredServiceProvider<any>> {
                // @ts-ignore
                constructor(service: java.lang.Class<T>, provider: T, priority: org.bukkit.plugin.ServicePriority, plugin: org.bukkit.plugin.Plugin)
                // @ts-ignore
                public getService(): java.lang.Class<T>
                // @ts-ignore
                public getPlugin(): org.bukkit.plugin.Plugin
                // @ts-ignore
                public getProvider(): T
                // @ts-ignore
                public getPriority(): org.bukkit.plugin.ServicePriority
                // @ts-ignore
                public compareTo(other: org.bukkit.plugin.RegisteredServiceProvider<any>): number /*int*/
            }
        }
    }
}
