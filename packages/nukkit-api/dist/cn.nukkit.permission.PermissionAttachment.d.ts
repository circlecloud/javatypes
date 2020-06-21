declare namespace cn {
    namespace nukkit {
        namespace permission {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class PermissionAttachment extends java.lang.Object {
                // @ts-ignore
                constructor(plugin: cn.nukkit.plugin.Plugin, permissible: cn.nukkit.permission.Permissible)
                // @ts-ignore
                public getPlugin(): cn.nukkit.plugin.Plugin
                // @ts-ignore
                public setRemovalCallback(executor: cn.nukkit.permission.PermissionRemovedExecutor): void
                // @ts-ignore
                public getRemovalCallback(): cn.nukkit.permission.PermissionRemovedExecutor
                // @ts-ignore
                public getPermissions(): java.util.Map<java.lang.String | string, java.lang.Boolean>
                // @ts-ignore
                public clearPermissions(): void
                // @ts-ignore
                public setPermissions(permissions: java.util.Map<java.lang.String | string, java.lang.Boolean>): void
                // @ts-ignore
                public unsetPermissions(permissions: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): void
                // @ts-ignore
                public setPermission(permission: cn.nukkit.permission.Permission, value: boolean): void
                // @ts-ignore
                public setPermission(name: java.lang.String | string, value: boolean): void
                // @ts-ignore
                public unsetPermission(permission: cn.nukkit.permission.Permission, value: boolean): void
                // @ts-ignore
                public unsetPermission(name: java.lang.String | string, value: boolean): void
                // @ts-ignore
                public remove(): void
            }
        }
    }
}
