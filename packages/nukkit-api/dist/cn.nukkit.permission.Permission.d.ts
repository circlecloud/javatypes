declare namespace cn {
    namespace nukkit {
        namespace permission {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class Permission extends java.lang.Object {
                // @ts-ignore
                constructor(name: java.lang.String | string)
                // @ts-ignore
                constructor(name: java.lang.String | string, description: java.lang.String | string)
                // @ts-ignore
                constructor(name: java.lang.String | string, description: java.lang.String | string, defualtValue: java.lang.String | string)
                // @ts-ignore
                constructor(name: java.lang.String | string, description: java.lang.String | string, defualtValue: java.lang.String | string, children: java.util.Map<java.lang.String | string, java.lang.Boolean>)
                // @ts-ignore
                public static readonly DEFAULT_OP: java.lang.String | string
                // @ts-ignore
                public static readonly DEFAULT_NOT_OP: java.lang.String | string
                // @ts-ignore
                public static readonly DEFAULT_TRUE: java.lang.String | string
                // @ts-ignore
                public static readonly DEFAULT_FALSE: java.lang.String | string
                // @ts-ignore
                public static readonly DEFAULT_PERMISSION: java.lang.String | string
                // @ts-ignore
                public static getByName(value: java.lang.String | string): string
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public getChildren(): java.util.Map<java.lang.String | string, java.lang.Boolean>
                // @ts-ignore
                public getDefault(): string
                // @ts-ignore
                public setDefault(value: java.lang.String | string): void
                // @ts-ignore
                public getDescription(): string
                // @ts-ignore
                public setDescription(description: java.lang.String | string): void
                // @ts-ignore
                public getPermissibles(): Array<cn.nukkit.permission.Permissible>
                // @ts-ignore
                public recalculatePermissibles(): void
                // @ts-ignore
                public addParent(permission: cn.nukkit.permission.Permission, value: boolean): void
                // @ts-ignore
                public addParent(name: java.lang.String | string, value: boolean): cn.nukkit.permission.Permission
                // @ts-ignore
                public static loadPermissions(data: java.util.Map<java.lang.String | string, java.lang.Object | any>): Array<cn.nukkit.permission.Permission>
                // @ts-ignore
                public static loadPermissions(data: java.util.Map<java.lang.String | string, java.lang.Object | any>, defaultValue: java.lang.String | string): Array<cn.nukkit.permission.Permission>
                // @ts-ignore
                public static loadPermission(name: java.lang.String | string, data: java.util.Map<java.lang.String | string, java.lang.Object | any>): cn.nukkit.permission.Permission
                // @ts-ignore
                public static loadPermission(name: java.lang.String | string, data: java.util.Map<java.lang.String | string, java.lang.Object | any>, defaultValue: java.lang.String | string): cn.nukkit.permission.Permission
                // @ts-ignore
                public static loadPermission(name: java.lang.String | string, data: java.util.Map<java.lang.String | string, java.lang.Object | any>, defaultValue: java.lang.String | string, output: java.util.List<cn.nukkit.permission.Permission> | Array<cn.nukkit.permission.Permission>): cn.nukkit.permission.Permission
            }
        }
    }
}
