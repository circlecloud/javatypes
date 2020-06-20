declare namespace org {
    namespace bukkit {
        namespace persistence {
            /**
             * This interface represents the context in which the {@link PersistentDataType} can
             * serialize and deserialize the passed values.
             */
            // @ts-ignore
            interface PersistentDataAdapterContext {
                /**
                 * Creates a new and empty meta container instance.
                 * @return the fresh container instance
                 */
                // @ts-ignore
                newPersistentDataContainer(): org.bukkit.persistence.PersistentDataContainer
            }
        }
    }
}
