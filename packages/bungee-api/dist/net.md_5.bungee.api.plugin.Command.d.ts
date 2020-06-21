declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace plugin {
                    /**
                     * A command that can be executed by a {@link CommandSender}.
                     */
                    // @ts-ignore
                    abstract class Command extends java.lang.Object {
                        /**
                         * Construct a new command with no permissions or aliases.
                         * @param name the name of this command
                         */
                        // @ts-ignore
                        constructor(name: java.lang.String | string)
                        /**
                         * Construct a new command.
                         * @param name primary name of this command
                         * @param permission the permission node required to execute this command,
                         *  null or empty string allows it to be executed by everyone
                         * @param aliases aliases which map back to this command
                         */
                        // @ts-ignore
                        constructor(name: java.lang.String | string, permission: java.lang.String | string, ...aliases: java.lang.String[] | string[])
                        /**
                         * Execute this command with the specified sender and arguments.
                         * @param sender the executor of this command
                         * @param args arguments used to invoke this command
                         */
                        // @ts-ignore
                        public abstract execute(sender: net.md_5.bungee.api.CommandSender, args: java.lang.String[] | string[]): void
                        /**
                         * Check if this command can be executed by the given sender.
                         * @param sender the sender to check
                         * @return whether the sender can execute this
                         */
                        // @ts-ignore
                        public hasPermission(sender: net.md_5.bungee.api.CommandSender): boolean
                        // @ts-ignore
                        public getName(): string
                        // @ts-ignore
                        public getPermission(): string
                        // @ts-ignore
                        public getAliases(): string[]
                        // @ts-ignore
                        public equals(o: java.lang.Object | any): boolean
                        // @ts-ignore
                        canEqual(other: java.lang.Object | any): boolean
                        // @ts-ignore
                        public hashCode(): number /*int*/
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
