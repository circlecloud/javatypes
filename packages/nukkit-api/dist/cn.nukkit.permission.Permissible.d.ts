declare namespace cn {
    namespace nukkit {
        namespace permission {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            interface Permissible extends cn.nukkit.permission.ServerOperator {
                // @ts-ignore
                isPermissionSet(name: java.lang.String | string): boolean
                // @ts-ignore
                isPermissionSet(permission: cn.nukkit.permission.Permission): boolean
                // @ts-ignore
                hasPermission(name: java.lang.String | string): boolean
                // @ts-ignore
                hasPermission(permission: cn.nukkit.permission.Permission): boolean
                // @ts-ignore
                addAttachment(plugin: cn.nukkit.plugin.Plugin): cn.nukkit.permission.PermissionAttachment
                // @ts-ignore
                addAttachment(plugin: cn.nukkit.plugin.Plugin, name: java.lang.String | string): cn.nukkit.permission.PermissionAttachment
                // @ts-ignore
                addAttachment(plugin: cn.nukkit.plugin.Plugin, name: java.lang.String | string, value: java.lang.Boolean): cn.nukkit.permission.PermissionAttachment
                // @ts-ignore
                removeAttachment(attachment: cn.nukkit.permission.PermissionAttachment): void
                // @ts-ignore
                recalculatePermissions(): void
                // @ts-ignore
                getEffectivePermissions(): java.util.Map<java.lang.String | string, cn.nukkit.permission.PermissionAttachmentInfo>
            }
        }
    }
}
