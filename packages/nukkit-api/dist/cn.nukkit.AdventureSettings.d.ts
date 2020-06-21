declare namespace cn {
    namespace nukkit {
        /**
         * Nukkit Project
         * Author: MagicDroidX
         */
        // @ts-ignore
        class AdventureSettings extends java.lang.Object implements java.lang.Cloneable {
            // @ts-ignore
            constructor(player: cn.nukkit.Player)
            // @ts-ignore
            public static readonly PERMISSION_NORMAL: number /*int*/
            // @ts-ignore
            public static readonly PERMISSION_OPERATOR: number /*int*/
            // @ts-ignore
            public static readonly PERMISSION_HOST: number /*int*/
            // @ts-ignore
            public static readonly PERMISSION_AUTOMATION: number /*int*/
            // @ts-ignore
            public static readonly PERMISSION_ADMIN: number /*int*/
            // @ts-ignore
            public clone(newPlayer: cn.nukkit.Player): cn.nukkit.AdventureSettings
            // @ts-ignore
            public set(type: cn.nukkit.AdventureSettings.Type, value: boolean): cn.nukkit.AdventureSettings
            // @ts-ignore
            public get(type: cn.nukkit.AdventureSettings.Type): boolean
            // @ts-ignore
            public update(): void
        }
    }
}
