declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                namespace args {
                    namespace CommandFlags {
                        // @ts-ignore
                        class Builder extends java.lang.Object {
                            /**
                             * Allow a flag with any of the provided specifications that has no
                             * value. This flag will be exposed in a {@link CommandContext} under
                             * the key equivalent to the first flag in the specification array.
                             * The specifications are handled as so for each element in the
                             * {@code specs} array:
                             * <ul>
                             * <li>If the element starts with -, the remainder of the element
                             * is interpreted as a long flag (so, "-flag" means "--flag" will
                             * be matched in an argument string)</li>
                             * <li>Otherwise, each code point of the element is interpreted
                             * as a short flag (meaning "flag" will cause "-f", "-l", "-a" and
                             * "-g" to be matched in an argument string, storing "true" under
                             * the key "f".)</li>
                             * </ul>
                             * @param specs The flag specifications
                             * @return this
                             */
                            // @ts-ignore
                            public flag(...specs: java.lang.String[] | string[]): org.spongepowered.api.command.args.CommandFlags.Builder
                            /**
                             * Allow a flag with any of the provided specifications that has no
                             * value but requires the source to have a specific permission to
                             * specify the command.
                             * @see #flag(String...) for details on the format
                             * @param flagPermission The required permission
                             * @param specs The flag specifications
                             * @return this
                             */
                            // @ts-ignore
                            public permissionFlag(flagPermission: java.lang.String | string, ...specs: java.lang.String[] | string[]): org.spongepowered.api.command.args.CommandFlags.Builder
                            /**
                             * Allow a flag with any of the provided specifications, with the given
                             * command element. The flag may be present multiple times, and may
                             * therefore have multiple values.
                             * @see #flag(String...) for information on how the flag specifications
                             *      are parsed
                             * @param value The command element used to parse any occurrences
                             * @param specs The flag specifications
                             * @return this
                             */
                            // @ts-ignore
                            public valueFlag(value: org.spongepowered.api.command.args.CommandElement, ...specs: java.lang.String[] | string[]): org.spongepowered.api.command.args.CommandFlags.Builder
                            /**
                             * If this is true, any long flag (--) will be accepted and added as a
                             * flag. If false, unknown long flags are considered errors.
                             * @param acceptsArbitraryLongFlags Whether any long flag is accepted
                             * @return this
                             * @deprecated in favor of
                             *          {#link #setUnknownLongFlagBehavior(UnknownFlagBehavior)}.
                             */
                            // @ts-ignore
                            public setAcceptsArbitraryLongFlags(acceptsArbitraryLongFlags: boolean): org.spongepowered.api.command.args.CommandFlags.Builder
                            /**
                             * Sets how long flags that are not registered should be handled when
                             * encountered.
                             * @param behavior The behavior to use
                             * @return this
                             */
                            // @ts-ignore
                            public setUnknownLongFlagBehavior(behavior: org.spongepowered.api.command.args.CommandFlags.UnknownFlagBehavior): org.spongepowered.api.command.args.CommandFlags.Builder
                            /**
                             * Sets how long flags that are not registered should be handled when
                             * encountered.
                             * <p>If a command that supports flags accepts negative numbers (or
                             * arguments that may begin with a dash), setting this to
                             * {@link UnknownFlagBehavior#IGNORE} will cause these elements to
                             * be ignored by the flag parser and will be parsed by the command's
                             * non-flag elements instead.</p>
                             * @param behavior The behavior to use
                             * @return this
                             */
                            // @ts-ignore
                            public setUnknownShortFlagBehavior(behavior: org.spongepowered.api.command.args.CommandFlags.UnknownFlagBehavior): org.spongepowered.api.command.args.CommandFlags.Builder
                            /**
                             * Whether flags should be anchored to the beginning of the text (so
                             * flags will only be picked up if they are at the beginning of the
                             * input).
                             * @param anchorFlags Whether flags are anchored
                             * @return this
                             */
                            // @ts-ignore
                            public setAnchorFlags(anchorFlags: boolean): org.spongepowered.api.command.args.CommandFlags.Builder
                            /**
                             * Build a flag command element using the given command element to
                             * handle all non-flag arguments.
                             * <p>If you wish to add multiple elements here, wrap them in
                             * {@link GenericArguments#seq(CommandElement...)}</p>
                             * @param wrapped The wrapped command element
                             * @return the new command element
                             */
                            // @ts-ignore
                            public buildWith(wrapped: org.spongepowered.api.command.args.CommandElement): org.spongepowered.api.command.args.CommandElement
                        }
                    }
                }
            }
        }
    }
}
