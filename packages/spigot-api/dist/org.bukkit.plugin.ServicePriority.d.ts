declare namespace org {
    namespace bukkit {
        namespace plugin {
            /**
             * Represents various priorities of a provider.
             */
            // @ts-ignore
            class ServicePriority extends java.lang.Enum<org.bukkit.plugin.ServicePriority> {
                // @ts-ignore
                readonly Lowest: org.bukkit.plugin.ServicePriority
                // @ts-ignore
                readonly Low: org.bukkit.plugin.ServicePriority
                // @ts-ignore
                readonly Normal: org.bukkit.plugin.ServicePriority
                // @ts-ignore
                readonly High: org.bukkit.plugin.ServicePriority
                // @ts-ignore
                readonly Highest: org.bukkit.plugin.ServicePriority
                // @ts-ignore
                values(): org.bukkit.plugin.ServicePriority[]
                // @ts-ignore
                valueOf(name: java.lang.String | string): org.bukkit.plugin.ServicePriority
            }
        }
    }
}
