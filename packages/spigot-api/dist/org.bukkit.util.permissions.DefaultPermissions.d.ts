declare namespace org {
    namespace bukkit {
        namespace util {
            namespace permissions {
                // @ts-ignore
                class DefaultPermissions extends java.lang.Object {
                    // @ts-ignore
                    public static registerPermission(perm: org.bukkit.permissions.Permission): org.bukkit.permissions.Permission
                    // @ts-ignore
                    public static registerPermission(perm: org.bukkit.permissions.Permission, withLegacy: boolean): org.bukkit.permissions.Permission
                    // @ts-ignore
                    public static registerPermission(perm: org.bukkit.permissions.Permission, parent: org.bukkit.permissions.Permission): org.bukkit.permissions.Permission
                    // @ts-ignore
                    public static registerPermission(name: java.lang.String | string, desc: java.lang.String | string): org.bukkit.permissions.Permission
                    // @ts-ignore
                    public static registerPermission(name: java.lang.String | string, desc: java.lang.String | string, parent: org.bukkit.permissions.Permission): org.bukkit.permissions.Permission
                    // @ts-ignore
                    public static registerPermission(name: java.lang.String | string, desc: java.lang.String | string, def: org.bukkit.permissions.PermissionDefault): org.bukkit.permissions.Permission
                    // @ts-ignore
                    public static registerPermission(name: java.lang.String | string, desc: java.lang.String | string, def: org.bukkit.permissions.PermissionDefault, parent: org.bukkit.permissions.Permission): org.bukkit.permissions.Permission
                    // @ts-ignore
                    public static registerPermission(name: java.lang.String | string, desc: java.lang.String | string, def: org.bukkit.permissions.PermissionDefault, children: java.util.Map<java.lang.String | string, java.lang.Boolean>): org.bukkit.permissions.Permission
                    // @ts-ignore
                    public static registerPermission(name: java.lang.String | string, desc: java.lang.String | string, def: org.bukkit.permissions.PermissionDefault, children: java.util.Map<java.lang.String | string, java.lang.Boolean>, parent: org.bukkit.permissions.Permission): org.bukkit.permissions.Permission
                    // @ts-ignore
                    public static registerCorePermissions(): void
                }
            }
        }
    }
}
