declare namespace cn {
    namespace nukkit {
        namespace permission {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class BanList extends java.lang.Object {
                // @ts-ignore
                constructor(file: java.lang.String | string)
                // @ts-ignore
                public isEnable(): boolean
                // @ts-ignore
                public setEnable(enable: boolean): void
                // @ts-ignore
                public getEntires(): java.util.LinkedHashMap<java.lang.String | string, cn.nukkit.permission.BanEntry>
                // @ts-ignore
                public isBanned(name: java.lang.String | string): boolean
                // @ts-ignore
                public add(entry: cn.nukkit.permission.BanEntry): void
                // @ts-ignore
                public addBan(target: java.lang.String | string): cn.nukkit.permission.BanEntry
                // @ts-ignore
                public addBan(target: java.lang.String | string, reason: java.lang.String | string): cn.nukkit.permission.BanEntry
                // @ts-ignore
                public addBan(target: java.lang.String | string, reason: java.lang.String | string, expireDate: java.util.Date): cn.nukkit.permission.BanEntry
                // @ts-ignore
                public addBan(target: java.lang.String | string, reason: java.lang.String | string, expireDate: java.util.Date, source: java.lang.String | string): cn.nukkit.permission.BanEntry
                // @ts-ignore
                public remove(name: java.lang.String | string): void
                // @ts-ignore
                public removeExpired(): void
                // @ts-ignore
                public load(): void
                // @ts-ignore
                public save(): void
            }
        }
    }
}
