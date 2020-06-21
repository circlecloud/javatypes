declare namespace cn {
    namespace nukkit {
        namespace permission {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class PermissibleBase extends java.lang.Object implements cn.nukkit.permission.Permissible {
                // @ts-ignore
                constructor(opable: cn.nukkit.permission.ServerOperator)
                // @ts-ignore
                public isOp(): boolean
                // @ts-ignore
                public setOp(value: boolean): void
                // @ts-ignore
                public isPermissionSet(name: java.lang.String | string): boolean
                // @ts-ignore
                public isPermissionSet(permission: cn.nukkit.permission.Permission): boolean
                // @ts-ignore
                public hasPermission(name: java.lang.String | string): boolean
                // @ts-ignore
                public hasPermission(permission: cn.nukkit.permission.Permission): boolean
                // @ts-ignore
                public addAttachment(plugin: cn.nukkit.plugin.Plugin): cn.nukkit.permission.PermissionAttachment
                // @ts-ignore
                public addAttachment(plugin: cn.nukkit.plugin.Plugin, name: java.lang.String | string): cn.nukkit.permission.PermissionAttachment
                // @ts-ignore
                public addAttachment(plugin: cn.nukkit.plugin.Plugin, name: java.lang.String | string, value: java.lang.Boolean): cn.nukkit.permission.PermissionAttachment
                // @ts-ignore
                public removeAttachment(attachment: cn.nukkit.permission.PermissionAttachment): void
                // @ts-ignore
                public recalculatePermissions(): void
                // @ts-ignore
                public clearPermissions(): void
                // @ts-ignore
                public getEffectivePermissions(): java.util.Map<java.lang.String | string, cn.nukkit.permission.PermissionAttachmentInfo>
            }
        }
    }
}
