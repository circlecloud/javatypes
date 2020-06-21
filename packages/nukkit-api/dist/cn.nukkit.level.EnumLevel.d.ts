declare namespace cn {
    namespace nukkit {
        namespace level {
            // @ts-ignore
            class EnumLevel extends java.lang.Enum<cn.nukkit.level.EnumLevel> {
                // @ts-ignore
                readonly OVERWORLD: cn.nukkit.level.EnumLevel
                // @ts-ignore
                readonly NETHER: cn.nukkit.level.EnumLevel
                // @ts-ignore
                values(): cn.nukkit.level.EnumLevel[]
                // @ts-ignore
                valueOf(name: java.lang.String | string): cn.nukkit.level.EnumLevel
                // @ts-ignore
                getLevel(): cn.nukkit.level.Level
                // @ts-ignore
                initLevels(): void
                // @ts-ignore
                getOtherNetherPair(current: cn.nukkit.level.Level): cn.nukkit.level.Level
                // @ts-ignore
                moveToNether(current: cn.nukkit.level.Position): cn.nukkit.level.Position
            }
        }
    }
}
