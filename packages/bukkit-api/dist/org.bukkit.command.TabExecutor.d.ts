declare namespace org {
    namespace bukkit {
        namespace command {
            /**
             * This class is provided as a convenience to implement both TabCompleter and
             * CommandExecutor.
             */
            // @ts-ignore
            interface TabExecutor extends org.bukkit.command.TabCompleter, org.bukkit.command.CommandExecutor {
            }
        }
    }
}
