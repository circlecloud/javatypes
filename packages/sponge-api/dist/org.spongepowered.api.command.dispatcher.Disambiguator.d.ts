declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                namespace dispatcher {
                    // @ts-ignore
                    interface Disambiguator {
                        /**
                         * Disambiguate an alias in cases where there are multiple command mappings
                         * registered for a given alias.
                         * @param source The CommandSource executing the command, if any
                         * @param aliasUsed The alias input by the user
                         * @param availableOptions The commands registered to this alias
                         * @return The specific command to use
                         */
                        // @ts-ignore
                        disambiguate(source: org.spongepowered.api.command.CommandSource, aliasUsed: string, availableOptions: Array<org.spongepowered.api.command.CommandMapping>): java.util.Optional<org.spongepowered.api.command.CommandMapping>
                    }
                }
            }
        }
    }
}
