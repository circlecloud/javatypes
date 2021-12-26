declare namespace io {
    namespace lumine {
        namespace utils {
            namespace plugin {
                // @ts-ignore
                abstract class LuminePlugin extends JavaPlugin {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public onDisable(): void
                    // @ts-ignore
                    registerCommand<T extends CommandExecutor>(cmd: java.lang.String | string, handler: T): void
                    // @ts-ignore
                    public registerListener<T extends Listener>(listener: T): void
                    // @ts-ignore
                    public getService<T>(service: java.lang.Class<T>): T
                    // @ts-ignore
                    public provideService<T>(clazz: java.lang.Class<T>, instance: T, priority: ServicePriority): T
                    // @ts-ignore
                    public provideService<T>(clazz: java.lang.Class<T>, instance: T): T
                    // @ts-ignore
                    public getPlugin<T>(name: java.lang.String | string, pluginClass: java.lang.Class<T>): T
                }
            }
        }
    }
}
