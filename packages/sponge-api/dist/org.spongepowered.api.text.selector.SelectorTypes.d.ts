declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace selector {
                    /**
                     * SelectorTypes is a list of the default selector types that are available in
                     * Vanilla Minecraft.
                     */
                    // @ts-ignore
                    class SelectorTypes extends java.lang.Object {
                        /**
                         * The all entities selector type.
                         */
                        // @ts-ignore
                        readonly ALL_ENTITIES: org.spongepowered.api.text.selector.SelectorType
                        /**
                         * The all players selector type.
                         */
                        // @ts-ignore
                        readonly ALL_PLAYERS: org.spongepowered.api.text.selector.SelectorType
                        /**
                         * The nearest player selector type.
                         */
                        // @ts-ignore
                        readonly NEAREST_PLAYER: org.spongepowered.api.text.selector.SelectorType
                        /**
                         * The random selector type. This targets only players by default, but may
                         * be used with entities if {@link ArgumentTypes#ENTITY_TYPE} is present in
                         * a selector.
                         */
                        // @ts-ignore
                        readonly RANDOM: org.spongepowered.api.text.selector.SelectorType
                        /**
                         * The self selector type. This only targets players, if the command sender
                         * is a command block or the console, this selector will return nothing.
                         */
                        // @ts-ignore
                        readonly SOURCE: org.spongepowered.api.text.selector.SelectorType
                    }
                }
            }
        }
    }
}
