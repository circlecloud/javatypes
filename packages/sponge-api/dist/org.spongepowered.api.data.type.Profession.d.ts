declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace type {
                    /**
                     * Represents a Villager Profession. A profession defines the genre of
                     * trade offers a villager may offer to a player.
                     */
                    // @ts-ignore
                    interface Profession extends org.spongepowered.api.CatalogType {
                        /**
                         * Gets the collection of available {@link Career}s.
                         * @return The collection of available careers
                         */
                        // @ts-ignore
                        getCareers(): Array<org.spongepowered.api.data.type.Career>
                    }
                }
            }
        }
    }
}
