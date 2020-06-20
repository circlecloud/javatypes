declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                // @ts-ignore
                class SerializationBehaviors extends java.lang.Object {
                    /**
                     * You should not be using this constructor, it will be made private in
                     * API 8.
                     * @deprecated Will be made private in API 8
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * A {@link SerializationBehavior} where data is saved automatically. This is considered the default across the game.
                     */
                    // @ts-ignore
                    readonly AUTOMATIC: org.spongepowered.api.world.SerializationBehavior
                    /**
                     * A {@link SerializationBehavior} where data is only saved when requested.
                     */
                    // @ts-ignore
                    readonly MANUAL: org.spongepowered.api.world.SerializationBehavior
                    /**
                     * A {@link SerializationBehavior} where data is not saved to disk.
                     */
                    // @ts-ignore
                    readonly NONE: org.spongepowered.api.world.SerializationBehavior
                }
            }
        }
    }
}
