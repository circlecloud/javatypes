declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                namespace args {
                    namespace CommandFlags {
                        /**
                         * Indicates to the flag parser how it should treat an argument that looks
                         * like a flag that it does not recognise.
                         */
                        // @ts-ignore
                        class UnknownFlagBehavior extends java.lang.Enum<org.spongepowered.api.command.args.CommandFlags.UnknownFlagBehavior> {
                            /**
                             * Throw an {@link ArgumentParseException} when an unknown flag is
                             * encountered.
                             */
                            // @ts-ignore
                            public static readonly ERROR: org.spongepowered.api.command.args.CommandFlags.UnknownFlagBehavior
                            /**
                             * Mark the flag as a non-value flag.
                             */
                            // @ts-ignore
                            public static readonly ACCEPT_NONVALUE: org.spongepowered.api.command.args.CommandFlags.UnknownFlagBehavior
                            /**
                             * Mark the flag as a string-valued flag.
                             */
                            // @ts-ignore
                            public static readonly ACCEPT_VALUE: org.spongepowered.api.command.args.CommandFlags.UnknownFlagBehavior
                            /**
                             * Act as if the unknown flag is an ordinary argument, allowing the
                             * parsers specified in {@link Builder#buildWith(CommandElement)} to
                             * attempt to parse the element instead.
                             */
                            // @ts-ignore
                            public static readonly IGNORE: org.spongepowered.api.command.args.CommandFlags.UnknownFlagBehavior
                            // @ts-ignore
                            public static values(): org.spongepowered.api.command.args.CommandFlags.UnknownFlagBehavior[]
                            // @ts-ignore
                            public static valueOf(name: java.lang.String | string): org.spongepowered.api.command.args.CommandFlags.UnknownFlagBehavior
                        }
                    }
                }
            }
        }
    }
}
