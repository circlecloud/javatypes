declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface AnimalTamer {
                /**
                 * This is the name of the specified AnimalTamer.
                 * @return The name to reference on tamed animals or null if a name cannot be obtained
                 */
                // @ts-ignore
                getName(): java.lang.String
                /**
                 * This is the UUID of the specified AnimalTamer.
                 * @return The UUID to reference on tamed animals
                 */
                // @ts-ignore
                getUniqueId(): java.util.UUID
            }
        }
    }
}
