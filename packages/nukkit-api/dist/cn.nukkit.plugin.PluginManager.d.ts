declare namespace cn {
    namespace nukkit {
        namespace plugin {
            /**
             * @author MagicDroidX
             */
            // @ts-ignore
            class PluginManager extends java.lang.Object {
                // @ts-ignore
                constructor(server: cn.nukkit.Server, commandMap: cn.nukkit.command.SimpleCommandMap)
                // @ts-ignore
                readonly plugins: java.util.Map<java.lang.String | string, cn.nukkit.plugin.Plugin>
                // @ts-ignore
                readonly permissions: java.util.Map<java.lang.String | string, cn.nukkit.permission.Permission>
                // @ts-ignore
                readonly defaultPerms: java.util.Map<java.lang.String | string, cn.nukkit.permission.Permission>
                // @ts-ignore
                readonly defaultPermsOp: java.util.Map<java.lang.String | string, cn.nukkit.permission.Permission>
                // @ts-ignore
                readonly permSubs: java.util.Map<java.lang.String | string, java.util.Set<cn.nukkit.permission.Permissible> | Array<cn.nukkit.permission.Permissible>>
                // @ts-ignore
                readonly defSubs: java.util.Set<cn.nukkit.permission.Permissible> | Array<cn.nukkit.permission.Permissible>
                // @ts-ignore
                readonly defSubsOp: java.util.Set<cn.nukkit.permission.Permissible> | Array<cn.nukkit.permission.Permissible>
                // @ts-ignore
                readonly fileAssociations: java.util.Map<java.lang.String | string, cn.nukkit.plugin.PluginLoader>
                // @ts-ignore
                public getPlugin(name: java.lang.String | string): cn.nukkit.plugin.Plugin
                // @ts-ignore
                public registerInterface(loaderClass: java.lang.Class<any>): boolean
                // @ts-ignore
                public getPlugins(): java.util.Map<java.lang.String | string, cn.nukkit.plugin.Plugin>
                // @ts-ignore
                public loadPlugin(path: java.lang.String | string): cn.nukkit.plugin.Plugin
                // @ts-ignore
                public loadPlugin(file: java.io.File): cn.nukkit.plugin.Plugin
                // @ts-ignore
                public loadPlugin(path: java.lang.String | string, loaders: java.util.Map<java.lang.String | string, cn.nukkit.plugin.PluginLoader>): cn.nukkit.plugin.Plugin
                // @ts-ignore
                public loadPlugin(file: java.io.File, loaders: java.util.Map<java.lang.String | string, cn.nukkit.plugin.PluginLoader>): cn.nukkit.plugin.Plugin
                // @ts-ignore
                public loadPlugins(dictionary: java.lang.String | string): java.util.Map<java.lang.String | string, cn.nukkit.plugin.Plugin>
                // @ts-ignore
                public loadPlugins(dictionary: java.io.File): java.util.Map<java.lang.String | string, cn.nukkit.plugin.Plugin>
                // @ts-ignore
                public loadPlugins(dictionary: java.lang.String | string, newLoaders: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): java.util.Map<java.lang.String | string, cn.nukkit.plugin.Plugin>
                // @ts-ignore
                public loadPlugins(dictionary: java.io.File, newLoaders: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): java.util.Map<java.lang.String | string, cn.nukkit.plugin.Plugin>
                // @ts-ignore
                public loadPlugins(dictionary: java.io.File, newLoaders: java.util.List<java.lang.String | string> | Array<java.lang.String | string>, includeDir: boolean): java.util.Map<java.lang.String | string, cn.nukkit.plugin.Plugin>
                // @ts-ignore
                public getPermission(name: java.lang.String | string): cn.nukkit.permission.Permission
                // @ts-ignore
                public addPermission(permission: cn.nukkit.permission.Permission): boolean
                // @ts-ignore
                public removePermission(name: java.lang.String | string): void
                // @ts-ignore
                public removePermission(permission: cn.nukkit.permission.Permission): void
                // @ts-ignore
                public getDefaultPermissions(op: boolean): java.util.Map<java.lang.String | string, cn.nukkit.permission.Permission>
                // @ts-ignore
                public recalculatePermissionDefaults(permission: cn.nukkit.permission.Permission): void
                // @ts-ignore
                public subscribeToPermission(permission: java.lang.String | string, permissible: cn.nukkit.permission.Permissible): void
                // @ts-ignore
                public unsubscribeFromPermission(permission: java.lang.String | string, permissible: cn.nukkit.permission.Permissible): void
                // @ts-ignore
                public getPermissionSubscriptions(permission: java.lang.String | string): Array<cn.nukkit.permission.Permissible>
                // @ts-ignore
                public subscribeToDefaultPerms(op: boolean, permissible: cn.nukkit.permission.Permissible): void
                // @ts-ignore
                public unsubscribeFromDefaultPerms(op: boolean, permissible: cn.nukkit.permission.Permissible): void
                // @ts-ignore
                public getDefaultPermSubscriptions(op: boolean): Array<cn.nukkit.permission.Permissible>
                // @ts-ignore
                public getPermissions(): java.util.Map<java.lang.String | string, cn.nukkit.permission.Permission>
                // @ts-ignore
                public isPluginEnabled(plugin: cn.nukkit.plugin.Plugin): boolean
                // @ts-ignore
                public enablePlugin(plugin: cn.nukkit.plugin.Plugin): void
                // @ts-ignore
                parseYamlCommands(plugin: cn.nukkit.plugin.Plugin): Array<cn.nukkit.command.PluginCommand<any>>
                // @ts-ignore
                public disablePlugins(): void
                // @ts-ignore
                public disablePlugin(plugin: cn.nukkit.plugin.Plugin): void
                // @ts-ignore
                public clearPlugins(): void
                // @ts-ignore
                public callEvent(event: cn.nukkit.event.Event): void
                // @ts-ignore
                public registerEvents(listener: cn.nukkit.event.Listener, plugin: cn.nukkit.plugin.Plugin): void
                // @ts-ignore
                public registerEvent(event: java.lang.Class<any>, listener: cn.nukkit.event.Listener, priority: cn.nukkit.event.EventPriority, executor: cn.nukkit.plugin.EventExecutor, plugin: cn.nukkit.plugin.Plugin): void
                // @ts-ignore
                public registerEvent(event: java.lang.Class<any>, listener: cn.nukkit.event.Listener, priority: cn.nukkit.event.EventPriority, executor: cn.nukkit.plugin.EventExecutor, plugin: cn.nukkit.plugin.Plugin, ignoreCancelled: boolean): void
            }
        }
    }
}
