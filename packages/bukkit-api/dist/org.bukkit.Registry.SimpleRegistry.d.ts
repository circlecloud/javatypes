declare namespace org {
    namespace bukkit {
        namespace Registry {
            // @ts-ignore
            class SimpleRegistry<T extends java.lang.Enum<T> & org.bukkit.Keyed> extends java.lang.Object implements org.bukkit.Registry<T> {
                // @ts-ignore
                constructor(type: java.lang.Class<T>)
                // @ts-ignore
                constructor(type: java.lang.Class<T>, predicate: java.util.function$.Predicate<T>)
                // @ts-ignore
                public get(key: org.bukkit.NamespacedKey): T
                // @ts-ignore
                public iterator(): java.util.Iterator<T>
            }
        }
    }
}
