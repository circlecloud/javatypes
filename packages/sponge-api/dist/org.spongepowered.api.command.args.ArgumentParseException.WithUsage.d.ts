declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                namespace args {
                    namespace ArgumentParseException {
                        /**
                         * An {@link ArgumentParseException} where the usage is already specified.
                         */
                        // @ts-ignore
                        class WithUsage extends org.spongepowered.api.command.args.ArgumentParseException {
                            // @ts-ignore
                            constructor(wrapped: org.spongepowered.api.command.args.ArgumentParseException, usage: org.spongepowered.api.text.Text)
                            /**
                             * Gets the usage associated with this exception.
                             * @return The usage
                             */
                            // @ts-ignore
                            getUsage(): org.spongepowered.api.text.Text
                        }
                    }
                }
            }
        }
    }
}
