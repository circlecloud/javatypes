declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace selector {
                    /**
                     * Represents the default {@link ArgumentType}s available in Vanilla Minecraft.
                     */
                    // @ts-ignore
                    class ArgumentTypes extends java.lang.Object {
                        /**
                         * The argument types representing the position of the selector.
                         * <p>In Vanilla, this is represented by the {@code x}, {@code y} and
                         * {@code z} selector keys.</p>
                         */
                        // @ts-ignore
                        public static readonly POSITION: org.spongepowered.api.text.selector.ArgumentHolder.Vector3<Vector3i, java.lang.Integer | number>
                        /**
                         * The argument types representing the radius of the selector.
                         * <p>In Vanilla, this is represented by the {@code r} (for minimum) and
                         * {@code rm} (for maximum) selector keys.</p>
                         */
                        // @ts-ignore
                        public static readonly RADIUS: org.spongepowered.api.text.selector.ArgumentHolder.Limit<org.spongepowered.api.text.selector.ArgumentType<java.lang.Integer | number>>
                        /**
                         * The argument type filtering based on the {@link GameMode} of a player.
                         * <p>In Vanilla, this is represented by the {@code m} selector key.</p>
                         * <p>Note that this element is of type {@link ArgumentType.Invertible}.</p>
                         */
                        // @ts-ignore
                        public static readonly GAME_MODE: org.spongepowered.api.text.selector.ArgumentType<org.spongepowered.api.entity.living.player.gamemode.GameMode>
                        /**
                         * The argument type limiting the number of results of a {@link Selector}.
                         * Negative values will reverse the order of targets - for example the
                         * farthest targets will be returned first.
                         * <p>The default count for the {@link SelectorTypes#RANDOM} and
                         * {@link SelectorTypes#NEAREST_PLAYER} is {@code 1}, therefore a higher
                         * number will increase the count instead of limiting it.</p>
                         * <p>In Vanilla, this is represented by the {@code c} selector key.</p>
                         */
                        // @ts-ignore
                        public static readonly COUNT: org.spongepowered.api.text.selector.ArgumentType<java.lang.Integer | number>
                        /**
                         * The argument types filtering based on the number of experience levels of
                         * the target.
                         * <p>In Vanilla, this is represented by the {@code l} (for maximum) and
                         * {@code lm} (for minimum) selector keys.</p>
                         */
                        // @ts-ignore
                        public static readonly LEVEL: org.spongepowered.api.text.selector.ArgumentHolder.Limit<org.spongepowered.api.text.selector.ArgumentType<java.lang.Integer | number>>
                        /**
                         * The argument type filtering based on the {@link Team} of the target.
                         * Inverting this argument type will search for all targets not on the
                         * specified team instead.
                         * <p>In Vanilla, this is represented by the {@code team} selector key with
                         * the {@code !} prefix for inverted values.</p>
                         */
                        // @ts-ignore
                        public static readonly TEAM: org.spongepowered.api.text.selector.ArgumentType.Invertible<java.lang.String | string>
                        /**
                         * The argument type filtering based on the name of the target. Inverting
                         * this argument type will search for all targets without the specified name
                         * instead.
                         * <p>In Vanilla, this is represented by the {@code name} selector key with
                         * the {@code !} prefix for inverted values.</p>
                         */
                        // @ts-ignore
                        public static readonly NAME: org.spongepowered.api.text.selector.ArgumentType.Invertible<java.lang.String | string>
                        /**
                         * The argument type filtering targets which aren't in the specified volume.
                         * <p>In Vanilla, this is represented by the {@code dx}, {@code dy} and
                         * {@code dz} selector keys.</p>
                         */
                        // @ts-ignore
                        public static readonly DIMENSION: org.spongepowered.api.text.selector.ArgumentHolder.Vector3<Vector3i, java.lang.Integer | number>
                        /**
                         * The argument type filtering targets within a specific rotation range.
                         * <p>In Vanilla, the {@link Double}s will be floored to {@link Integer}s
                         * and the third float is completely ignored. It is represented by the
                         * {@code rx}/{@code ry} (for minimum) and {@code rxm}/{@code rym} selector
                         * keys.</p>
                         */
                        // @ts-ignore
                        public static readonly ROTATION: org.spongepowered.api.text.selector.ArgumentHolder.Limit<org.spongepowered.api.text.selector.ArgumentHolder.Vector3<Vector3d, java.lang.Double | number>>
                        /**
                         * The argument type filtering targets based on the {@link EntityType}.
                         * <p>In Vanilla, this is represented by the {@code type} selector key.</p>
                         */
                        // @ts-ignore
                        public static readonly ENTITY_TYPE: org.spongepowered.api.text.selector.ArgumentType.Invertible<org.spongepowered.api.entity.EntityType>
                        /**
                         * Creates a minimum and maximum {@link ArgumentType} filtering depending on
                         * the score of the specified objective.
                         * @param name The objective name to use
                         * @return The created argument type
                         */
                        // @ts-ignore
                        public static score(name: java.lang.String | string): org.spongepowered.api.text.selector.ArgumentHolder.Limit<org.spongepowered.api.text.selector.ArgumentType<java.lang.Integer | number>>
                        /**
                         * Gets the {@link ArgumentType} with the provided name.
                         * @param name The name of the argument type
                         * @return The {#link ArgumentType} with the given name or Optional.empty()
                         *          if not found
                         */
                        // @ts-ignore
                        public static valueOf(name: java.lang.String | string): java.util.Optional<org.spongepowered.api.text.selector.ArgumentType<any>>
                        /**
                         * Gets a {@link Collection} of all possible {@link ArgumentType}s.
                         * @return The list of all available {#link ArgumentType}s
                         */
                        // @ts-ignore
                        public static values(): Array<org.spongepowered.api.text.selector.ArgumentType<any>>
                        /**
                         * Creates a custom {@link ArgumentType} with the specified key.
                         * @param key The key to use for the argument
                         * @return The created argument type
                         */
                        // @ts-ignore
                        public static create(key: java.lang.String | string): org.spongepowered.api.text.selector.ArgumentType<java.lang.String | string>
                        /**
                         * Creates a custom {@link ArgumentType} with the specified key and value.
                         * @param key The key to use for the argument
                         * @param type The class of the argument's value type
                         * @param <T> The argument's value type
                         * @return The created argument type
                         */
                        // @ts-ignore
                        public static create<T>(key: java.lang.String | string, type: java.lang.Class<T>): org.spongepowered.api.text.selector.ArgumentType<T>
                    }
                }
            }
        }
    }
}
