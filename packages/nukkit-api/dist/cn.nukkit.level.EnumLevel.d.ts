declare namespace cn {
    namespace nukkit {
        namespace level {
            // @ts-ignore
            class EnumLevel extends java.lang.Enum<cn.nukkit.level.EnumLevel> {
                // @ts-ignore
                public static readonly OVERWORLD: cn.nukkit.level.EnumLevel
                // @ts-ignore
                public static readonly NETHER: cn.nukkit.level.EnumLevel
                // @ts-ignore
                public static values(): cn.nukkit.level.EnumLevel[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): cn.nukkit.level.EnumLevel
                // @ts-ignore
                public getLevel(): cn.nukkit.level.Level
                // @ts-ignore
                public static initLevels(): void
                // @ts-ignore
                public static getOtherNetherPair(current: cn.nukkit.level.Level): cn.nukkit.level.Level
                // @ts-ignore
                public static moveToNether(current: cn.nukkit.level.Position): cn.nukkit.level.Position
            }
        }
    }
}
