declare namespace cn {
    namespace nukkit {
        namespace level {
            // @ts-ignore
            class GameRules extends java.lang.Object {
                // @ts-ignore
                public static getDefault(): cn.nukkit.level.GameRules
                // @ts-ignore
                public getGameRules(): java.util.Map<cn.nukkit.level.GameRule, cn.nukkit.level.GameRules.Value<any>>
                // @ts-ignore
                public isStale(): boolean
                // @ts-ignore
                public refresh(): void
                // @ts-ignore
                public setGameRule(gameRule: cn.nukkit.level.GameRule, value: boolean): void
                // @ts-ignore
                public setGameRule(gameRule: cn.nukkit.level.GameRule, value: number /*int*/): void
                // @ts-ignore
                public setGameRule(gameRule: cn.nukkit.level.GameRule, value: number /*float*/): void
                // @ts-ignore
                public setGameRules(gameRule: cn.nukkit.level.GameRule, value: java.lang.String | string): void
                // @ts-ignore
                public getBoolean(gameRule: cn.nukkit.level.GameRule): boolean
                // @ts-ignore
                public getInteger(gameRule: cn.nukkit.level.GameRule): number /*int*/
                // @ts-ignore
                public getFloat(gameRule: cn.nukkit.level.GameRule): number /*float*/
                // @ts-ignore
                public getString(gameRule: cn.nukkit.level.GameRule): string
                // @ts-ignore
                public getGameRuleType(gameRule: cn.nukkit.level.GameRule): cn.nukkit.level.GameRules.Type
                // @ts-ignore
                public hasRule(gameRule: cn.nukkit.level.GameRule): boolean
                // @ts-ignore
                public getRules(): cn.nukkit.level.GameRule[]
                // @ts-ignore
                public writeNBT(): cn.nukkit.nbt.tag.CompoundTag
                // @ts-ignore
                public readNBT(nbt: cn.nukkit.nbt.tag.CompoundTag): void
            }
        }
    }
}
