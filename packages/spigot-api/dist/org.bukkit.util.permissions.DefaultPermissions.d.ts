declare namespace org {
    namespace bukkit {
        namespace util {
            namespace permissions {
                // @ts-ignore
                class DefaultPermissions extends java.lang.Object {
                    // @ts-ignore
                    registerPermission(perm: org.bukkit.permissions.Permission): org.bukkit.permissions.Permission
                    // @ts-ignore
                    registerPermission(perm: org.bukkit.permissions.Permission, withLegacy: boolean): org.bukkit.permissions.Permission
                    // @ts-ignore
                    registerPermission(perm: org.bukkit.permissions.Permission, parent: org.bukkit.permissions.Permission): org.bukkit.permissions.Permission
                    // @ts-ignore
                    registerPermission(name: string, desc: string): org.bukkit.permissions.Permission
                    // @ts-ignore
                    registerPermission(name: string, desc: string, parent: org.bukkit.permissions.Permission): org.bukkit.permissions.Permission
                    // @ts-ignore
                    registerPermission(name: string, desc: string, def: org.bukkit.permissions.PermissionDefault): org.bukkit.permissions.Permission
                    // @ts-ignore
                    registerPermission(name: string, desc: string, def: org.bukkit.permissions.PermissionDefault, parent: org.bukkit.permissions.Permission): org.bukkit.permissions.Permission
                    // @ts-ignore
                    registerPermission(name: string, desc: string, def: org.bukkit.permissions.PermissionDefault, children: java.util.Map<java.lang.String, java.lang.Boolean>): org.bukkit.permissions.Permission
                    // @ts-ignore
                    registerPermission(name: string, desc: string, def: org.bukkit.permissions.PermissionDefault, children: java.util.Map<java.lang.String, java.lang.Boolean>, parent: org.bukkit.permissions.Permission): org.bukkit.permissions.Permission
                    // @ts-ignore
                    registerCorePermissions(): void
                }
            }
        }
    }
}
