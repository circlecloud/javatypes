declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace type {
                    /**
                     * Represents a Villager Career. A career can define a more specified list
                     * of trade offers the villager can give to a player.
                     */
                    // @ts-ignore
                    interface Career extends org.spongepowered.api.CatalogType, org.spongepowered.api.text.translation.Translatable {
                        /**
                         * Gets the parent profession of this career. The profession is permanent
                         * and can not be changed.
                         * @return The profession this career belongs to
                         */
                        // @ts-ignore
                        getProfession(): org.spongepowered.api.data.type.Profession
                    }
                }
            }
        }
    }
}
