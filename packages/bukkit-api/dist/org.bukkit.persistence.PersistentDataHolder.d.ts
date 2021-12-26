declare namespace org {
    namespace bukkit {
        namespace persistence {
            /**
             * The {@link PersistentDataHolder} interface defines an object that can store
             * custom persistent meta data on it.
             */
            // @ts-ignore
            interface PersistentDataHolder {
                /**
                 * Returns a custom tag container capable of storing tags on the object.
                 * Note that the tags stored on this container are all stored under their
                 * own custom namespace therefore modifying default tags using this
                 * {@link PersistentDataHolder} is impossible.
                 * @return the persistent metadata container
                 */
                // @ts-ignore
                getPersistentDataContainer(): org.bukkit.persistence.PersistentDataContainer
            }
        }
    }
}
