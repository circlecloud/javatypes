declare namespace io {
    namespace lumine {
        namespace utils {
            namespace commands {
                // @ts-ignore
                class CommandRegistrar extends java.lang.Object {
                    // @ts-ignore
                    public static registerCommand<T extends CommandExecutor>(plugin: Plugin, command: T, ...aliases: java.lang.String[] | string[]): T
                }
            }
        }
    }
}
