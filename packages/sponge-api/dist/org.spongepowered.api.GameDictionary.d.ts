declare namespace org {
    namespace spongepowered {
        namespace api {
            /**
             * A GameDictionary is a store of {@link org.spongepowered.api.GameDictionary.Entry}s.
             * <p>Note that the GameDictionary's keys are different from Minecraft item ids.
             * Minecraft item IDs are namespaces, e.g. minecraft:carrot while ItemDictionary
             * keys are not, by design(e.g. carrot). This is mainly to keep supporting the
             * existing Forge 'ore dictionary'.</p>
             */
            // @ts-ignore
            interface GameDictionary {
                /**
                 * Registers an {@link org.spongepowered.api.GameDictionary.Entry}
                 * in the dictionary with a String key. The stack size is ignored.
                 * @param key The key of the item as a String
                 * @param entry The item to register
                 */
                // @ts-ignore
                register(key: string, entry: org.spongepowered.api.GameDictionary.Entry): void
                /**
                 * Retrieves the entries registered for the given key. The stack sizes are
                 * set to 1.
                 * @param key The key of the entries as a String
                 * @return The entries registered for the given key
                 */
                // @ts-ignore
                get(key: string): java.util.Set<org.spongepowered.api.GameDictionary.Entry>
                /**
                 * Retrieves all entries registered in this game dictionary, mapped by their
                 * key.
                 * @return A map of all entries registered
                 */
                // @ts-ignore
                getAll(): <any>
            }
        }
    }
}
