declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace world {
                    /**
                     * An event for when a {@link WorldProperties} has been created. Often paired with a
                     * {@link LoadWorldEvent}, but that is not guaranteed.
                     */
                    // @ts-ignore
                    interface ConstructWorldPropertiesEvent extends org.spongepowered.api.event.Event {
                        /**
                         * Gets the properties of the newly created world.
                         * @return The properties
                         */
                        // @ts-ignore
                        getWorldProperties(): org.spongepowered.api.world.storage.WorldProperties
                        /**
                         * Gets the {@link WorldArchetype} used to create the world.
                         * @return The archetype
                         */
                        // @ts-ignore
                        getWorldArchetype(): org.spongepowered.api.world.WorldArchetype
                    }
                }
            }
        }
    }
}
