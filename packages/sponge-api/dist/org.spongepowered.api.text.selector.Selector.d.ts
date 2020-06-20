declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace selector {
                    /**
                     * Represents an immutable selector of targets, as used in commands.
                     * <p>
                     * In Vanilla, selectors are mostly represented as plain text, starting with an
                     * {@code @} symbol and followed by a single character signifying the type, and
                     * finally the (optional) arguments in brackets.
                     * </p>
                     * <p>
                     * As an example, the all player selector is {@code @a}, and with a radius of
                     * 20 it would be {@code @a[r=20]}.
                     * </p>
                     * </p>
                     * @see <a href="http://minecraft.gamepedia.com/Selector#Target_selectors">
                     *       Target selectors on the Minecraft Wiki</a>
                     */
                    // @ts-ignore
                    interface Selector {
                        /**
                         * Creates a {@link Selector.Builder}.
                         * @return A new selector builder with the specified type
                         */
                        // @ts-ignore
                        builder(): org.spongepowered.api.text.selector.Selector.Builder
                        /**
                         * Parses a {@link Selector} from the given selector string.
                         * @param selector The raw selector string
                         * @return A new selector containing the given selector data
                         */
                        // @ts-ignore
                        parse(selector: string): org.spongepowered.api.text.selector.Selector
                        /**
                         * Fetch completions for a selector command argument.
                         * @param selector The partial selector
                         * @return Tab completions for the next part of the selector
                         */
                        // @ts-ignore
                        complete(selector: string): java.util.List<java.lang.String>
                        /**
                         * Returns the type of this {@link Selector}.
                         * @return The type of this selector
                         */
                        // @ts-ignore
                        getType(): org.spongepowered.api.text.selector.SelectorType
                        /**
                         * Returns the argument value for the specified {@link ArgumentType} in this
                         * {@link Selector}. May be used for {@link ArgumentType.Invertible}, but
                         * the inverted state must be checked with
                         * {@link #isInverted(ArgumentType.Invertible)}.
                         * @param type The argument type
                         * @param <T> The type of the value
                         * @return The value of the argument, if available
                         */
                        // @ts-ignore
                        get<T>(type: org.spongepowered.api.text.selector.ArgumentType<T>): java.util.Optional<T>
                        /**
                         * Returns the {@link Argument} for the specified {@link ArgumentType} in
                         * this {@link Selector}.
                         * @param type The argument type
                         * @param <T> The type of the argument value
                         * @return The argument, if available
                         */
                        // @ts-ignore
                        getArgument<T>(type: org.spongepowered.api.text.selector.ArgumentType<T>): java.util.Optional<org.spongepowered.api.text.selector.Argument<T>>
                        /**
                         * Returns the {@link Argument.Invertible} for the specified
                         * {@link ArgumentType.Invertible} in this {@link Selector}.
                         * @param type The argument type
                         * @param <T> The type of the argument value
                         * @return The argument, if available
                         */
                        // @ts-ignore
                        getArgument<T>(type: org.spongepowered.api.text.selector.ArgumentType.Invertible<T>): java.util.Optional<org.spongepowered.api.text.selector.Argument.Invertible<T>>
                        /**
                         * Returns the arguments for this {@link Selector}.
                         * @return The arguments for this {#link Selector}
                         */
                        // @ts-ignore
                        getArguments(): java.util.List<org.spongepowered.api.text.selector.Argument<?>>
                        /**
                         * Checks for the presence of {@code type} in this {@link Selector}.
                         * @param type - The {#link ArgumentType} to check for
                         * @return {#code true} if the given type is present in this
                         *          {@link Selector}, otherwise {@code false}
                         */
                        // @ts-ignore
                        has(type: org.spongepowered.api.text.selector.ArgumentType<any>): boolean
                        /**
                         * Checks for the inversion state of {@code type} in this {@link Selector}.
                         * @param type - The invertible {#link ArgumentType} to check inversion
                         *         status on
                         * @return {#code true} if the given type is inverted in this
                         *          {@link Selector}, otherwise {@code false}
                         */
                        // @ts-ignore
                        isInverted(type: org.spongepowered.api.text.selector.ArgumentType.Invertible<any>): boolean
                        /**
                         * Resolves this {@link Selector} to a list of entities around the origin.
                         * <p>The returned set may be ordered based on distance from the origin
                         * (with the nearest first).</p>
                         * @param origin The source that should be considered the origin of this
                         *         selector
                         * @return The matched entities
                         */
                        // @ts-ignore
                        resolve(origin: org.spongepowered.api.command.CommandSource): java.util.Set<org.spongepowered.api.entity.Entity>
                        /**
                         * Resolves this {@link Selector} to a list of entities around (0|0|0) in
                         * the given {@link Extent Extent(s)}.
                         * <p>The returned set may be ordered based on distance from the origin
                         * (with the nearest first).</p>
                         * @param extent The extents to search for targets
                         * @return The matched entities
                         */
                        // @ts-ignore
                        resolve(...extent: org.spongepowered.api.world.extent.Extent[]): java.util.Set<org.spongepowered.api.entity.Entity>
                        /**
                         * Resolves this {@link Selector} to a list of entities around (0|0|0) in
                         * the given {@link Extent Extent(s)}.
                         * <p>The returned set may be ordered based on distance from the origin
                         * (with the nearest first).</p>
                         * @param extent The extents to search for targets
                         * @return The matched entities
                         */
                        // @ts-ignore
                        resolve(extent: Array<org.spongepowered.api.world.extent.Extent>): java.util.Set<org.spongepowered.api.entity.Entity>
                        /**
                         * Resolves this {@link Selector} to a list of entities around the given
                         * {@link Location}.
                         * <p>The returned set may be ordered based on distance from the origin
                         * (with the nearest first).</p>
                         * @param location The location to resolve the selector around
                         * @return The matched entities
                         */
                        // @ts-ignore
                        resolve(location: org.spongepowered.api.world.Location<org.spongepowered.api.world.World>): java.util.Set<org.spongepowered.api.entity.Entity>
                        /**
                         * Resolves this {@link Selector} to a list of entities around the origin.
                         * @param origin The source that should be considered the origin of this
                         *         selector
                         * @return The matched entities
                         * @deprecated Use {#link #resolve(CommandSource)}
                         */
                        // @ts-ignore
                        resolveForce(origin: org.spongepowered.api.command.CommandSource): java.util.Set<org.spongepowered.api.entity.Entity>
                        /**
                         * Resolves this {@link Selector} to a list of entities around (0|0|0) in
                         * the given {@link Extent Extent(s)}.
                         * @param extent The extents to search for targets
                         * @return The matched entities
                         * @deprecated Use {#link #resolve(Extent[])}
                         */
                        // @ts-ignore
                        resolveForce(...extent: org.spongepowered.api.world.extent.Extent[]): java.util.Set<org.spongepowered.api.entity.Entity>
                        /**
                         * Resolves this {@link Selector} to a list of entities around (0|0|0) in
                         * the given {@link Extent Extent(s)}.
                         * @param extent The extents to search for targets
                         * @return The matched entities
                         * @deprecated Use {#link #resolve(Collection)}
                         */
                        // @ts-ignore
                        resolveForce(extent: Array<org.spongepowered.api.world.extent.Extent>): java.util.Set<org.spongepowered.api.entity.Entity>
                        /**
                         * Resolves this {@link Selector} to a list of entities around the given
                         * {@link Location}.
                         * @param location The location to resolve the selector around
                         * @return The matched entities
                         * @deprecated Use {#link #resolve(Location)}
                         */
                        // @ts-ignore
                        resolveForce(location: org.spongepowered.api.world.Location<org.spongepowered.api.world.World>): java.util.Set<org.spongepowered.api.entity.Entity>
                        /**
                         * Converts this {@link Selector} to a valid selector string.
                         * @return A valid {#link Selector} string that can be inserted into a
                         *          command
                         */
                        // @ts-ignore
                        toPlain(): java.lang.String
                        /**
                         * Returns a new {@link org.spongepowered.api.text.selector.Selector.Builder}
                         * with the content of this selector. This can be used to edit an immutable
                         * {@link Selector} instance.
                         * @return A new selector builder with the content of this selector
                         */
                        // @ts-ignore
                        toBuilder(): org.spongepowered.api.text.selector.Selector.Builder
                    }
                }
            }
        }
    }
}
