declare namespace cn {
    namespace nukkit {
        namespace permission {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class BanEntry extends java.lang.Object {
                // @ts-ignore
                constructor(name: java.lang.String | string)
                // @ts-ignore
                public static readonly format: java.lang.String | string
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public getCreationDate(): java.util.Date
                // @ts-ignore
                public setCreationDate(creationDate: java.util.Date): void
                // @ts-ignore
                public getSource(): string
                // @ts-ignore
                public setSource(source: java.lang.String | string): void
                // @ts-ignore
                public getExpirationDate(): java.util.Date
                // @ts-ignore
                public setExpirationDate(expirationDate: java.util.Date): void
                // @ts-ignore
                public hasExpired(): boolean
                // @ts-ignore
                public getReason(): string
                // @ts-ignore
                public setReason(reason: java.lang.String | string): void
                // @ts-ignore
                public getMap(): java.util.LinkedHashMap<java.lang.String | string, java.lang.String | string>
                // @ts-ignore
                public static fromMap(map: java.util.Map<java.lang.String | string, java.lang.String | string>): cn.nukkit.permission.BanEntry
                // @ts-ignore
                public getString(): string
                // @ts-ignore
                public static fromString(str: java.lang.String | string): cn.nukkit.permission.BanEntry
            }
        }
    }
}
