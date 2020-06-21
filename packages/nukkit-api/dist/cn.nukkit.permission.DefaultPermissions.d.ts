declare namespace cn {
    namespace nukkit {
        namespace permission {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            abstract class DefaultPermissions extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static readonly ROOT: java.lang.String | string
                // @ts-ignore
                public static registerPermission(perm: cn.nukkit.permission.Permission): cn.nukkit.permission.Permission
                // @ts-ignore
                public static registerPermission(perm: cn.nukkit.permission.Permission, parent: cn.nukkit.permission.Permission): cn.nukkit.permission.Permission
                // @ts-ignore
                public static registerCorePermissions(): void
            }
        }
    }
}
