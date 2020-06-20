declare namespace org {
    namespace bukkit {
        namespace permissions {
            /**
             * Base Permissible for use in any Permissible object via proxy or extension
             */
            // @ts-ignore
            class PermissibleBase extends java.lang.Object implements org.bukkit.permissions.Permissible {
                // @ts-ignore
                constructor(opable: org.bukkit.permissions.ServerOperator)
                // @ts-ignore
                isOp(): boolean
                // @ts-ignore
                setOp(value: boolean): void
                // @ts-ignore
                isPermissionSet(name: string): boolean
                // @ts-ignore
                isPermissionSet(perm: org.bukkit.permissions.Permission): boolean
                // @ts-ignore
                hasPermission(inName: string): boolean
                // @ts-ignore
                hasPermission(perm: org.bukkit.permissions.Permission): boolean
                // @ts-ignore
                addAttachment(plugin: org.bukkit.plugin.Plugin, name: string, value: boolean): org.bukkit.permissions.PermissionAttachment
                // @ts-ignore
                addAttachment(plugin: org.bukkit.plugin.Plugin): org.bukkit.permissions.PermissionAttachment
                // @ts-ignore
                removeAttachment(attachment: org.bukkit.permissions.PermissionAttachment): void
                // @ts-ignore
                recalculatePermissions(): void
                // @ts-ignore
                clearPermissions(): void
                // @ts-ignore
                addAttachment(plugin: org.bukkit.plugin.Plugin, name: string, value: boolean, ticks: number /*int*/): org.bukkit.permissions.PermissionAttachment
                // @ts-ignore
                addAttachment(plugin: org.bukkit.plugin.Plugin, ticks: number /*int*/): org.bukkit.permissions.PermissionAttachment
                // @ts-ignore
                getEffectivePermissions(): java.util.Set<org.bukkit.permissions.PermissionAttachmentInfo>
            }
        }
    }
}
