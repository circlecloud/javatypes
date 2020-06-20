declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                namespace args {
                    /**
                     * Class containing factory methods for common command elements.
                     */
                    // @ts-ignore
                    class GenericArguments extends java.lang.Object {
                        /**
                         * Expects no arguments, returns no values.
                         * @return An expectation of no arguments
                         */
                        // @ts-ignore
                        none(): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Expects no arguments. Adds 'true' to the context when parsed.
                         * <p>This will return only one value.</p>
                         * @param key the key to store 'true' under
                         * @return the argument
                         */
                        // @ts-ignore
                        markTrue(key: org.spongepowered.api.text.Text): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Expect an argument to represent online players, or if nothing matches
                         * and the source is a {@link Player}, give the player. If nothing matches
                         * and the source is not a player, throw an exception.
                         * <p>Gives values of type {@link Player}.</p>
                         * <p>This argument accepts the following inputs:</p>
                         * <ul>
                         * <li>A player's name</li>
                         * <li>A regex that matches the beginning of one or more player's names
                         * </li>
                         * <li>A selector</li>
                         * </ul>
                         * <p>This may return multiple players. If you must only return one, wrap
                         * this element in an {@link #onlyOne(CommandElement)} call.</p>
                         * @param key The key to store under
                         * @return the argument
                         */
                        // @ts-ignore
                        playerOrSource(key: org.spongepowered.api.text.Text): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Expect an argument to represent online players. Returns values of type
                         * {@link Player}.
                         * <p>This argument accepts the following inputs:</p>
                         * <ul>
                         * <li>A player's name</li>
                         * <li>A regex that matches the beginning of one or more player's names
                         * </li>
                         * <li>A selector</li>
                         * </ul>
                         * <p>This may return multiple players. If you must only return one, wrap
                         * this element in an {@link #onlyOne(CommandElement)} call.</p>
                         * @param key The key to store under
                         * @return the argument
                         */
                        // @ts-ignore
                        player(key: org.spongepowered.api.text.Text): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Expect an argument to represent players who have been online at some
                         * point, as a {@link User}.
                         * <p>This argument accepts the following inputs:</p>
                         * <ul>
                         * <li>A player's name (offline or online)</li>
                         * <li>A regex that matches the beginning of one or more player's names
                         * </li>
                         * <li>A selector</li>
                         * </ul>
                         * <p>This may return multiple {@link User}s. If you must only return one,
                         * wrap this element in an {@link #onlyOne(CommandElement)} call.</p>
                         * <p>This may not return the {@link Player} object for an online user. If
                         * you wish to operate on an associated {@link Player} object if the user is
                         * online, use {@link User#getPlayer()}.</p>
                         * @param key The key to store under
                         * @return the argument
                         */
                        // @ts-ignore
                        user(key: org.spongepowered.api.text.Text): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Expect an argument to represent players who have been online at some
                         * point, as a {@link User}, or if nothing matches and the source is a
                         * {@link User}, give the user. If nothing matches and the source is not
                         * a {@link User}, throw an exception.
                         * <p>This argument accepts the following inputs:</p>
                         * <ul>
                         * <li>A player's name (offline or online)</li>
                         * <li>A regex that matches the beginning of one or more player's names
                         * </li>
                         * <li>A selector</li>
                         * </ul>
                         * <p>This may return multiple {@link User}s. If you must only return one,
                         * wrap this element in an {@link #onlyOne(CommandElement)} call.</p>
                         * <p>This may not return the {@link Player} object for an online user. If
                         * you wish to operate on an associated {@link Player} object if the user is
                         * online, use {@link User#getPlayer()}.</p>
                         * @param key The key to store under
                         * @return the argument
                         */
                        // @ts-ignore
                        userOrSource(key: org.spongepowered.api.text.Text): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Expect an argument to represent a world. This returns
                         * {@link WorldProperties} objects rather than an actual {@link World} in
                         * order to include unloaded worlds.
                         * <p>This argument accepts the following inputs:</p>
                         * <ul>
                         * <li>A world's name</li>
                         * <li>A regex that matches the beginning of one or more world's names
                         * </li>
                         * </ul>
                         * <p>This may return multiple {@link WorldProperties}s. If you must only
                         * return one, wrap this element in an {@link #onlyOne(CommandElement)}
                         * call.</p>
                         * @param key The key to store under
                         * @return the argument
                         */
                        // @ts-ignore
                        world(key: org.spongepowered.api.text.Text): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Expect an argument to represent a dimension. Returns values of type
                         * {@link DimensionType}.
                         * <p>This argument accepts the following inputs:</p>
                         * <ul>
                         * <li>A dimension's id</li>
                         * <li>A regex that matches the beginning of one or more dimension id
                         * </li>
                         * </ul>
                         * <p>This may return multiple {@link DimensionType}s. If you must only
                         * return one, wrap this element in an {@link #onlyOne(CommandElement)}
                         * call.</p>
                         * @param key The key to store under
                         * @return the argument
                         */
                        // @ts-ignore
                        dimension(key: org.spongepowered.api.text.Text): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Expect an argument to represent a {@link Vector3d}.
                         * <p>This will return one value.</p>
                         * @param key The key to store under
                         * @return the argument
                         */
                        // @ts-ignore
                        vector3d(key: org.spongepowered.api.text.Text): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Expect an argument to represent a {@link Location}.
                         * <p>This will return one value.</p>
                         * @param key The key to store under
                         * @return the argument
                         */
                        // @ts-ignore
                        location(key: org.spongepowered.api.text.Text): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Expect an argument that is a member of the specified {@link CatalogType}
                         * T.
                         * <p>This argument accepts the following inputs:</p>
                         * <ul>
                         * <li>The value's {@link CatalogType#getId()}</li>
                         * <li>A regex that matches the beginning of one or more ids</li>
                         * </ul>
                         * <p>This may return multiple instances of T. If you must only return one,
                         * wrap this element in an {@link #onlyOne(CommandElement)} call.</p>
                         * @param key The key to store the resolved value under
                         * @param catalogType The expected {#link CatalogType}
                         * @param <T> The type to return
                         * @return the argument
                         */
                        // @ts-ignore
                        catalogedElement<T extends org.spongepowered.api.CatalogType>(key: org.spongepowered.api.text.Text, catalogType: java.lang.Class<T>): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Expect an argument to represent a {@link PluginContainer}'s id.
                         * <p>This argument accepts the following inputs:</p>
                         * <ul>
                         * <li>The specified {@link PluginContainer}'s id</li>
                         * <li>A regex that matches the beginning of one or more plugin id</li>
                         * </ul>
                         * <p>This may return multiple {@link PluginContainer}s. If you must only
                         * return one, wrap this element in an {@link #onlyOne(CommandElement)}
                         * call.</p>
                         * @param key The key to store under
                         * @return the argument
                         */
                        // @ts-ignore
                        plugin(key: org.spongepowered.api.text.Text): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Gets a builder to create a command element that parses flags.
                         * <p>There should only be ONE of these in a command element sequence if you
                         * wish to use flags. A {@link CommandFlags.Builder} can handle multiple
                         * flags that have different behaviors. Using multiple builders in the same
                         * sequence may cause unexpected behavior.</p>
                         * <p>Any command elements that are not associated with flags should be
                         * placed into the {@link CommandFlags.Builder#buildWith(CommandElement)}
                         * parameter, allowing the flags to be used throughout the argument string.
                         * </p>
                         * @return the newly created builder
                         */
                        // @ts-ignore
                        flags(): org.spongepowered.api.command.args.CommandFlags.Builder
                        /**
                         * Consumes a series of arguments. Usage is the elements concatenated
                         * @param elements The series of arguments to expect
                         * @return the element to match the input
                         */
                        // @ts-ignore
                        seq(...elements: org.spongepowered.api.command.args.CommandElement[]): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Return an argument that allows selecting from a limited set of values.
                         * <p>If there are 5 or fewer choices available, the choices will be shown
                         * in the command usage. Otherwise, the usage will only display only the
                         * key.</p>
                         * <p>Choices are <strong>case sensitive</strong>. If you do not require
                         * case sensitivity, see {@link #choicesInsensitive(Text, Map)}.</p>
                         * <p>To override this behavior, see
                         * {@link #choices(Text, Map, boolean, boolean)}.</p>
                         * <p>When parsing, only one choice may be selected, returning its
                         * associated value.</p>
                         * @param key The key to store the resulting value under
                         * @param choices The choices users can choose from
                         * @return the element to match the input
                         */
                        // @ts-ignore
                        choices(key: org.spongepowered.api.text.Text, choices: java.util.Map<java.lang.String, any>): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Return an argument that allows selecting from a limited set of values.
                         * <p>If there are 5 or fewer choices available, the choices will be shown
                         * in the command usage. Otherwise, the usage will only display only the
                         * key.</p>
                         * <p>Choices are <strong>not case sensitive</strong>. If you require
                         * case sensitivity, see {@link #choices(Text, Map)}</p>
                         * <p>To override this behavior, see
                         * {@link #choices(Text, Map, boolean, boolean)}.</p>
                         * <p>When parsing, only one choice may be selected, returning its
                         * associated value.</p>
                         * @param key The key to store the resulting value under
                         * @param choices The choices users can choose from
                         * @return the element to match the input
                         */
                        // @ts-ignore
                        choicesInsensitive(key: org.spongepowered.api.text.Text, choices: java.util.Map<java.lang.String, any>): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Return an argument that allows selecting from a limited set of values.
                         * <p>Unless {@code choicesInUsage} is true, general command usage will only
                         * display the provided key.</p>
                         * <p>Choices are <strong>case sensitive</strong>. If you do not require
                         * case sensitivity, see {@link #choices(Text, Map, boolean, boolean)}</p>
                         * <p>When parsing, only one choice may be selected, returning its
                         * associated value.</p>
                         * @param key The key to store the resulting value under
                         * @param choices The choices users can choose from
                         * @param choicesInUsage Whether to display the available choices, or simply
                         *       the provided key, as part of usage
                         * @return the element to match the input
                         */
                        // @ts-ignore
                        choices(key: org.spongepowered.api.text.Text, choices: java.util.Map<java.lang.String, any>, choicesInUsage: boolean): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Return an argument that allows selecting from a limited set of values.
                         * <p>Unless {@code choicesInUsage} is true, general command usage will only
                         * display the provided key.</p>
                         * <p>When parsing, only one choice may be selected, returning its
                         * associated value.</p>
                         * @param key The key to store the resulting value under
                         * @param choices The choices users can choose from
                         * @param choicesInUsage Whether to display the available choices, or simply
                         *       the provided key, as part of usage
                         * @param caseSensitive Whether the matches should be case sensitive
                         * @return the element to match the input
                         */
                        // @ts-ignore
                        choices(key: org.spongepowered.api.text.Text, choices: java.util.Map<java.lang.String, any>, choicesInUsage: boolean, caseSensitive: boolean): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Return an argument that allows selecting from a limited set of values.
                         * <p>If there are 5 or fewer choices available, the choices will be shown
                         * in the command usage. Otherwise, the usage will only display only the
                         * key.</p>
                         * <p>To override this behavior, see {@link #choices(Text, Map, boolean)}.
                         * </p>
                         * <p>Only one choice may be selected, returning its associated value.</p>
                         * @param key The key to store the resulting value under
                         * @param keys The function that will supply available keys
                         * @param values The function that maps an element of {#code key} to a value
                         *       and any other key to {@code null}
                         * @return the element to match the input
                         */
                        // @ts-ignore
                        choices(key: org.spongepowered.api.text.Text, keys: java.util.function.Supplier<java.util.Collection<java.lang.String>> | java.util.function$.Supplier<java.util.Collection<java.lang.String>>, values: java.util.function.Function<java.lang.String, any> | java.util.function$.Function<java.lang.String, ?>): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Return an argument that allows selecting from a limited set of values.
                         * Unless {@code choicesInUsage} is true, general command usage will only
                         * display the provided key.
                         * <p>Only one choice may be selected, returning its associated value.</p>
                         * @param key The key to store the resulting value under
                         * @param keys The function that will supply available keys
                         * @param values The function that maps an element of {#code key} to a value
                         *       and any other key to {@code null}
                         * @param choicesInUsage Whether to display the available choices, or simply
                         *       the provided key, as part of usage
                         * @return the element to match the input
                         */
                        // @ts-ignore
                        choices(key: org.spongepowered.api.text.Text, keys: java.util.function.Supplier<java.util.Collection<java.lang.String>> | java.util.function$.Supplier<java.util.Collection<java.lang.String>>, values: java.util.function.Function<java.lang.String, any> | java.util.function$.Function<java.lang.String, ?>, choicesInUsage: boolean): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Returns a command element that matches the first of the provided elements
                         * that parses tab completion matches from all options.
                         * @param elements The elements to check against
                         * @return The command element matching the first passing of the elements
                         *       provided
                         */
                        // @ts-ignore
                        firstParsing(...elements: org.spongepowered.api.command.args.CommandElement[]): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Make the provided command element optional.
                         * <p>This means the command element is not required. However, if the
                         * element is provided with invalid format and there are no more args
                         * specified, any errors will still be passed on.</p>
                         * @param element The element to optionally require
                         * @return the element to match the input
                         */
                        // @ts-ignore
                        optional(element: org.spongepowered.api.command.args.CommandElement): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Make the provided command element optional.
                         * <p>This means the command element is not required. However, if the
                         * element is provided with invalid format and there are no more args
                         * specified, any errors will still be passed on. If the given element's key
                         * and {@code value} are not null and this element is not provided the
                         * element's key will be set to the given value.</p>
                         * @param element The element to optionally require
                         * @param value The default value to set
                         * @return the element to match the input
                         */
                        // @ts-ignore
                        optional(element: org.spongepowered.api.command.args.CommandElement, value: any): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Make the provided command element optional
                         * This means the command element is not required.
                         * If the argument is provided but of invalid format, it will be skipped.
                         * @param element The element to optionally require
                         * @return the element to match the input
                         */
                        // @ts-ignore
                        optionalWeak(element: org.spongepowered.api.command.args.CommandElement): org.spongepowered.api.command.args.CommandElement
                        /**
                         * <p>Make the provided command element optional.</p>
                         * <p>This means the command element is not required.</p>
                         * <ul>
                         * <li>If the argument is provided but of invalid format, it will be
                         * skipped.</li>
                         * <li>If the given element's key and {@code value} are not null and
                         * this element is not provided the element's key will be set to the
                         * given value.</li>
                         * </ul>
                         * @param element The element to optionally require
                         * @param value The default value to set
                         * @return the element to match the input
                         */
                        // @ts-ignore
                        optionalWeak(element: org.spongepowered.api.command.args.CommandElement, value: any): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Require a given command element to be provided a certain number of times.
                         * <p>Command values will be stored under their provided keys in the
                         * <tt>CommandContext</tt>.</p>
                         * @param element The element to repeat
                         * @param times The number of times to repeat the element.
                         * @return the element to match the input
                         */
                        // @ts-ignore
                        repeated(element: org.spongepowered.api.command.args.CommandElement, times: number /*int*/): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Require all remaining args to match as many instances of
                         * {@link CommandElement} as will fit. Command element values will be stored
                         * under their provided keys in the CommandContext.
                         * @param element The element to repeat
                         * @return the element to match the input
                         */
                        // @ts-ignore
                        allOf(element: org.spongepowered.api.command.args.CommandElement): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Require an argument to be a string. Any provided argument will fit in
                         * under this argument.
                         * <p>Gives values of type {@link String}. This will return only one value.
                         * </p>
                         * @param key The key to store the parsed argument under
                         * @return the element to match the input
                         */
                        // @ts-ignore
                        string(key: org.spongepowered.api.text.Text): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Require an argument to be an integer (base 10).
                         * <p>Gives values of type {@link Integer}. This will return only one value.
                         * </p>
                         * @param key The key to store the parsed argument under
                         * @return the element to match the input
                         */
                        // @ts-ignore
                        integer(key: org.spongepowered.api.text.Text): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Require an argument to be a long (base 10).
                         * <p>Gives values of type {@link Long}. This will return only one value.
                         * </p>
                         * @param key The key to store the parsed argument under
                         * @return the element to match the input
                         */
                        // @ts-ignore
                        longNum(key: org.spongepowered.api.text.Text): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Require an argument to be an double-precision floating point number.
                         * <p>Gives values of type {@link Double}. This will return only one value.
                         * </p>
                         * @param key The key to store the parsed argument under
                         * @return the element to match the input
                         */
                        // @ts-ignore
                        doubleNum(key: org.spongepowered.api.text.Text): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Require an argument to be a boolean.
                         * <p>The recognized true values are:</p>
                         * <ul>
                         * <li>true</li>
                         * <li>t</li>
                         * <li>yes</li>
                         * <li>y</li>
                         * <li>verymuchso</li>
                         * </ul>
                         * <p>The recognized false values are:</p>
                         * <ul>
                         * <li>false</li>
                         * <li>f</li>
                         * <li>no</li>
                         * <li>n</li>
                         * <li>notatall</li>
                         * </ul>
                         * <p>Gives values of type {@link Boolean}. This will return only one value.
                         * </p>
                         * @param key The key to store the parsed argument under
                         * @return the element to match the input
                         */
                        // @ts-ignore
                        bool(key: org.spongepowered.api.text.Text): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Require the argument to be a key under the provided enum.
                         * <p>Gives values of type <tt>T</tt>. This will return only one value.</p>
                         * @param key The key to store the matched enum value under
                         * @param type The enum class to get enum constants from
                         * @param <T> The type of enum
                         * @return the element to match the input
                         */
                        // @ts-ignore
                        enumValue<T extends java.lang.Enum<T>>(key: org.spongepowered.api.text.Text, type: java.lang.Class<T>): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Require one or more strings, which are combined into a single,
                         * space-separated string.
                         * <p>Gives values of type {@link String}. This will return only one value.
                         * </p>
                         * @param key The key to store the parsed argument under
                         * @return the element to match the input
                         */
                        // @ts-ignore
                        remainingJoinedStrings(key: org.spongepowered.api.text.Text): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Require one or more strings, without any processing, which are combined
                         * into a single, space-separated string.
                         * <p>Gives values of type {@link String}. This will return only one value.
                         * </p>
                         * @param key The key to store the parsed argument under
                         * @return the element to match the input
                         */
                        // @ts-ignore
                        remainingRawJoinedStrings(key: org.spongepowered.api.text.Text): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Expect a literal sequence of arguments. This element matches the input
                         * against a predefined array of arguments expected to be present,
                         * case-insensitively.
                         * <p>This will return only one value.</p>
                         * @param key The key to add to the context. Will be set to a value of true
                         *       if this element matches
                         * @param expectedArgs The sequence of arguments expected
                         * @return the appropriate command element
                         */
                        // @ts-ignore
                        literal(key: org.spongepowered.api.text.Text, ...expectedArgs: string[]): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Expect a literal sequence of arguments. This element matches the input
                         * against a predefined array of arguments expected to be present,
                         * case-insensitively.
                         * <p>This will return only one value.</p>
                         * @param key The key to store this argument as
                         * @param putValue The value to put at key if this argument matches. May be
                         *       <tt>null</tt>
                         * @param expectedArgs The sequence of arguments expected
                         * @return the appropriate command element
                         */
                        // @ts-ignore
                        literal(key: org.spongepowered.api.text.Text, putValue: any, ...expectedArgs: string[]): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Restricts the given command element to only insert one value into the
                         * context at the provided key.
                         * <p>If more than one value is returned by an element, or the target key
                         * already contains a value, this will throw an
                         * {@link ArgumentParseException}</p>
                         * @param element The element to restrict
                         * @return the restricted element
                         */
                        // @ts-ignore
                        onlyOne(element: org.spongepowered.api.command.args.CommandElement): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Checks a permission for a given command argument to be used.
                         * <p>If the element attempts to parse an argument and the user does not
                         * have the permission, a {@link ArgumentParseException} will be thrown.</p>
                         * @param element The element to wrap
                         * @param permission The permission to check
                         * @return the element
                         */
                        // @ts-ignore
                        requiringPermission(element: org.spongepowered.api.command.args.CommandElement, permission: string): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Expect an argument to represent an {@link Entity}.
                         * <p>This argument accepts the following inputs:</p>
                         * <ul>
                         * <li>A player's name</li>
                         * <li>An entity's {@link UUID}</li>
                         * <li>A regex that matches the beginning of one or more player's names
                         * or entities UUIDs.
                         * </li>
                         * <li>A selector</li>
                         * </ul>
                         * @param key The key to store under
                         * @return the argument
                         */
                        // @ts-ignore
                        entity(key: org.spongepowered.api.text.Text): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Expect an argument to represent an {@link Entity} of the specified type.
                         * <p>This argument accepts the following inputs:</p>
                         * <ul>
                         * <li>A player's name (if appropriate)</li>
                         * <li>An entity's {@link UUID}</li>
                         * <li>A regex that matches the beginning of one or more player's names
                         * or entities UUIDs.
                         * </li>
                         * <li>A selector</li>
                         * </ul>
                         * @param key The key to store under
                         * @param clazz The type which the entity must subclass
                         * @return the argument
                         */
                        // @ts-ignore
                        entity(key: org.spongepowered.api.text.Text, clazz: java.lang.Class<org.spongepowered.api.entity.Entity>): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Expect an argument to represent an {@link Entity} of the specified
                         * {@link EntityType}.
                         * <p>This argument accepts the following inputs:</p>
                         * <ul>
                         * <li>A player's name (if appropriate)</li>
                         * <li>An entity's {@link UUID}</li>
                         * <li>A regex that matches the beginning of one or more player's names
                         * or entities UUIDs.
                         * </li>
                         * <li>A selector</li>
                         * </ul>
                         * @param key The key to store under
                         * @param type The type which the entity must be
                         * @return the argument
                         */
                        // @ts-ignore
                        entity(key: org.spongepowered.api.text.Text, type: org.spongepowered.api.entity.EntityType): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Expect an argument to represent an {@link Entity}, or if the argument is
                         * not present and the {@link CommandSource} is an entity, return the
                         * source.
                         * <p>This argument accepts the following inputs:</p>
                         * <ul>
                         * <li>A player's name</li>
                         * <li>An entity's {@link UUID}</li>
                         * <li>A regex that matches the beginning of one or more player's names
                         * or entities UUIDs.
                         * </li>
                         * <li>A selector</li>
                         * </ul>
                         * @param key The key to store under
                         * @return the argument
                         */
                        // @ts-ignore
                        entityOrSource(key: org.spongepowered.api.text.Text): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Expect an argument to represent an {@link Entity}, or if the argument is
                         * not present and the {@link CommandSource} is looking at an entity,
                         * return that entity.
                         * <p>This argument accepts the following inputs:</p>
                         * <ul>
                         * <li>A player's name</li>
                         * <li>An entity's {@link UUID}</li>
                         * <li>A regex that matches the beginning of one or more player's names
                         * or entities UUIDs.
                         * </li>
                         * <li>A selector</li>
                         * </ul>
                         * @param key The key to store under
                         * @return the argument
                         */
                        // @ts-ignore
                        entityOrTarget(key: org.spongepowered.api.text.Text): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Expect an argument to represent an {@link Entity} of the specified type,
                         * or if the argument is not present and the {@link CommandSource} is
                         * looking at an applicable entity, return that entity.
                         * <p>This argument accepts the following inputs:</p>
                         * <ul>
                         * <li>A player's name (if appropriate)</li>
                         * <li>An entity's {@link UUID}</li>
                         * <li>A regex that matches the beginning of one or more player's names
                         * or entities UUIDs.
                         * </li>
                         * <li>A selector</li>
                         * </ul>
                         * @param key The key to store under
                         * @param clazz The type which the entity must subclass
                         * @return the argument
                         */
                        // @ts-ignore
                        entityOrTarget(key: org.spongepowered.api.text.Text, clazz: java.lang.Class<org.spongepowered.api.entity.Entity>): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Expect an argument to represent an {@link Entity} of the specified
                         * {@link EntityType}, or if the argument is not present and the
                         * {@link CommandSource} is looking at an applicable entity, return that
                         * entity.
                         * <p>This argument accepts the following inputs:</p>
                         * <ul>
                         * <li>A player's name (if appropriate)</li>
                         * <li>An entity's {@link UUID}</li>
                         * <li>A regex that matches the beginning of one or more player's names
                         * or entities UUIDs.
                         * </li>
                         * <li>A selector</li>
                         * </ul>
                         * @param key The key to store under
                         * @param type The type which the entity must be
                         * @return the argument
                         */
                        // @ts-ignore
                        entityOrTarget(key: org.spongepowered.api.text.Text, type: org.spongepowered.api.entity.EntityType): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Expect an argument to represent a {@link URL}.
                         * <p>This will return only one value.</p>
                         * @param key The key to store under
                         * @return the argument
                         */
                        // @ts-ignore
                        url(key: org.spongepowered.api.text.Text): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Expect an argument to return an IP address, in the form of an
                         * {@link InetAddress}.
                         * <p>This will return only one value.</p>
                         * @param key The key to store under
                         * @return the argument
                         */
                        // @ts-ignore
                        ip(key: org.spongepowered.api.text.Text): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Expect an argument to return an IP address, in the form of an
                         * {@link InetAddress}, or if nothing matches and the source is a
                         * {@link RemoteSource}, return the source's address.
                         * <p>This will return only one value.</p>
                         * @param key The key to store under
                         * @return the argument
                         */
                        // @ts-ignore
                        ipOrSource(key: org.spongepowered.api.text.Text): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Expect an argument to return a {@link BigDecimal}.
                         * @param key The key to store under
                         * @return the argument
                         */
                        // @ts-ignore
                        bigDecimal(key: org.spongepowered.api.text.Text): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Expect an argument to return a {@link BigInteger}.
                         * <p>This will return only one value.</p>
                         * @param key The key to store under
                         * @return the argument
                         */
                        // @ts-ignore
                        bigInteger(key: org.spongepowered.api.text.Text): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Expect an argument to be a valid {@link DataContainer}.
                         * <p>This will return only one value.</p>
                         * @param key The key to store under
                         * @return the argument
                         */
                        // @ts-ignore
                        dataContainer(key: org.spongepowered.api.text.Text): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Expect an argument to be a {@link UUID}.
                         * <p>This will return only one value.</p>
                         * @param key The key to store under
                         * @return the argument
                         */
                        // @ts-ignore
                        uuid(key: org.spongepowered.api.text.Text): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Expect an argument to be valid {@link Text}.
                         * <p>This will return only one value.</p>
                         * @param key The key to store under
                         * @param serializer The serializer to parse the text with
                         * @param allRemaining If true, consumes all remaining arguments; if false,
                         *                      uses a single argument
                         * @return the argument
                         */
                        // @ts-ignore
                        text(key: org.spongepowered.api.text.Text, serializer: org.spongepowered.api.text.serializer.TextSerializer, allRemaining: boolean): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Expect an argument to be a date-time, in the form of a
                         * {@link LocalDateTime}. If no date is specified, {@link LocalDate#now()}
                         * is used; if no time is specified, {@link LocalTime#MIDNIGHT} is used.
                         * <p>Date-times are expected in the ISO-8601 format.</p>
                         * <p>This will return only one value.</p>
                         * @param key The key to store under
                         * @return the argument
                         * @see <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a>
                         */
                        // @ts-ignore
                        dateTime(key: org.spongepowered.api.text.Text): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Expect an argument to be a date-time, in the form of a
                         * {@link LocalDateTime}. If no date is specified, {@link LocalDate#now()}
                         * is used; if no time is specified, {@link LocalTime#MIDNIGHT} is used.
                         * <p>If no argument at all is specified, defaults to
                         * {@link LocalDateTime#now()}.</p>
                         * <p>Date-times are expected in the ISO-8601 format.</p>
                         * <p>This will return only one value.</p>
                         * @param key The key to store under
                         * @return the argument
                         */
                        // @ts-ignore
                        dateTimeOrNow(key: org.spongepowered.api.text.Text): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Expect an argument to be a {@link Duration}.
                         * <p>Durations are expected in the following format: {@code #D#H#M#S}.
                         * This is not case sensitive.</p>
                         * <p>This will return only one value.</p>
                         * @param key The key to store under
                         * @return the argument
                         */
                        // @ts-ignore
                        duration(key: org.spongepowered.api.text.Text): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Uses a custom set of suggestions for an argument. The provided
                         * suggestions will replace the regular ones.
                         * @param argument The element to replace the suggestions of
                         * @param suggestions The suggestions to use
                         * @return the argument
                         */
                        // @ts-ignore
                        withSuggestions(argument: org.spongepowered.api.command.args.CommandElement, suggestions: java.lang.Iterable<java.lang.String>): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Uses a custom set of suggestions for an argument. The provided
                         * suggestions will replace the regular ones.
                         * <p>If {@code requireBegin} is false, then the already typed argument
                         * will not be used to filter the provided suggestions.</p>
                         * @param argument The element to replace the suggestions of
                         * @param suggestions The suggestions to use
                         * @param requireBegin Whether or not to require the current argument to
                         *                      begin provided arguments
                         * @return the argument
                         */
                        // @ts-ignore
                        withSuggestions(argument: org.spongepowered.api.command.args.CommandElement, suggestions: java.lang.Iterable<java.lang.String>, requireBegin: boolean): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Uses a custom set of suggestions for an argument. The provided
                         * suggestions will replace the regular ones.
                         * @param argument The element to replace the suggestions of
                         * @param suggestions A function to return the suggestions to use
                         * @return the argument
                         */
                        // @ts-ignore
                        withSuggestions(argument: org.spongepowered.api.command.args.CommandElement, suggestions: java.util.function.Function<org.spongepowered.api.command.CommandSource, java.lang.Iterable<java.lang.String>> | java.util.function$.Function<org.spongepowered.api.command.CommandSource, java.lang.Iterable<java.lang.String>>): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Uses a custom set of suggestions for an argument. The provided
                         * suggestions will replace the regular ones.
                         * <p>If {@code requireBegin} is false, then the already typed argument
                         * will not be used to filter the provided suggestions.</p>
                         * @param argument The element to replace the suggestions of
                         * @param suggestions A function to return the suggestions to use
                         * @param requireBegin Whether or not to require the current argument to
                         *                      begin provided arguments
                         * @return the argument
                         */
                        // @ts-ignore
                        withSuggestions(argument: org.spongepowered.api.command.args.CommandElement, suggestions: java.util.function.Function<org.spongepowered.api.command.CommandSource, java.lang.Iterable<java.lang.String>> | java.util.function$.Function<org.spongepowered.api.command.CommandSource, java.lang.Iterable<java.lang.String>>, requireBegin: boolean): org.spongepowered.api.command.args.CommandElement
                        /**
                         * Filters an argument's suggestions. A suggestion will only be used if it
                         * matches the predicate.
                         * @param argument The element to filter the suggestions of
                         * @param predicate The predicate to test suggestions against
                         * @return the argument
                         */
                        // @ts-ignore
                        withConstrainedSuggestions(argument: org.spongepowered.api.command.args.CommandElement, predicate: java.util.function.Predicate<java.lang.String> | java.util.function$.Predicate<java.lang.String>): org.spongepowered.api.command.args.CommandElement
                    }
                }
            }
        }
    }
}
