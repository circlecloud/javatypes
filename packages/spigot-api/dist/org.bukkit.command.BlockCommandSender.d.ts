declare namespace org {
    namespace bukkit {
        namespace command {
            // @ts-ignore
            interface BlockCommandSender extends org.bukkit.command.CommandSender {
                /**
                 * Returns the block this command sender belongs to
                 * @return Block for the command sender
                 */
                // @ts-ignore
                getBlock(): org.bukkit.block.Block
            }
        }
    }
}
