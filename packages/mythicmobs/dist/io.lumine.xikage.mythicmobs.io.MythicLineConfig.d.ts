declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace io {
                    // @ts-ignore
                    class MythicLineConfig extends java.lang.Object implements io.lumine.xikage.mythicmobs.io.GenericConfig {
                        // @ts-ignore
                        constructor(fileName: java.lang.String | string, line: java.lang.String | string)
                        // @ts-ignore
                        constructor(file: java.io.File, line: java.lang.String | string)
                        // @ts-ignore
                        constructor(s: java.lang.String | string)
                        // @ts-ignore
                        public getLine(): string
                        // @ts-ignore
                        public size(): number /*int*/
                        // @ts-ignore
                        public entrySet(): Array<java.util.Map.Entry<java.lang.String | string, java.lang.String | string>>
                        // @ts-ignore
                        public static getKey(s: java.lang.String | string): string
                        // @ts-ignore
                        public getBoolean(key: java.lang.String | string): boolean
                        // @ts-ignore
                        public getBoolean(key: java.lang.String | string, def: boolean): boolean
                        // @ts-ignore
                        public getBoolean(key: java.lang.String[] | string[], def: boolean): boolean
                        // @ts-ignore
                        public getString(key: java.lang.String | string): string
                        // @ts-ignore
                        public getString(key: java.lang.String[] | string[]): string
                        // @ts-ignore
                        public getString(key: java.lang.String | string, def: java.lang.String | string): string
                        // @ts-ignore
                        public getString(key: java.lang.String[] | string[], def: java.lang.String | string, ...args: java.lang.String[] | string[]): string
                        // @ts-ignore
                        public getPlaceholderString(key: java.lang.String | string, def: java.lang.String | string): io.lumine.xikage.mythicmobs.skills.placeholders.parsers.PlaceholderString
                        // @ts-ignore
                        public getPlaceholderString(key: java.lang.String[] | string[], def: java.lang.String | string, ...args: java.lang.String[] | string[]): io.lumine.xikage.mythicmobs.skills.placeholders.parsers.PlaceholderString
                        // @ts-ignore
                        public getInteger(key: java.lang.String | string): number /*int*/
                        // @ts-ignore
                        public getInteger(key: java.lang.String[] | string[]): number /*int*/
                        // @ts-ignore
                        public getInteger(key: java.lang.String | string, def: number /*int*/): number /*int*/
                        // @ts-ignore
                        public getInteger(key: java.lang.String[] | string[], def: number /*int*/): number /*int*/
                        // @ts-ignore
                        public getPlaceholderInteger(key: java.lang.String | string, def: java.lang.String | string): io.lumine.xikage.mythicmobs.skills.placeholders.parsers.PlaceholderInt
                        // @ts-ignore
                        public getPlaceholderInteger(key: java.lang.String[] | string[], def: java.lang.String | string, ...args: java.lang.String[] | string[]): io.lumine.xikage.mythicmobs.skills.placeholders.parsers.PlaceholderInt
                        // @ts-ignore
                        public getPlaceholderInteger(key: java.lang.String | string, def: number /*int*/): io.lumine.xikage.mythicmobs.skills.placeholders.parsers.PlaceholderInt
                        // @ts-ignore
                        public getPlaceholderInteger(key: java.lang.String[] | string[], def: number /*int*/, ...args: java.lang.String[] | string[]): io.lumine.xikage.mythicmobs.skills.placeholders.parsers.PlaceholderInt
                        // @ts-ignore
                        public getDouble(key: java.lang.String | string): number /*double*/
                        // @ts-ignore
                        public getDouble(key: java.lang.String[] | string[]): number /*double*/
                        // @ts-ignore
                        public getDouble(key: java.lang.String | string, def: number /*double*/): number /*double*/
                        // @ts-ignore
                        public getDouble(key: java.lang.String[] | string[], def: number /*double*/): number /*double*/
                        // @ts-ignore
                        public getPlaceholderDouble(key: java.lang.String | string, def: java.lang.String | string): io.lumine.xikage.mythicmobs.skills.placeholders.parsers.PlaceholderDouble
                        // @ts-ignore
                        public getPlaceholderDouble(key: java.lang.String[] | string[], def: java.lang.String | string, ...args: java.lang.String[] | string[]): io.lumine.xikage.mythicmobs.skills.placeholders.parsers.PlaceholderDouble
                        // @ts-ignore
                        public getPlaceholderDouble(key: java.lang.String | string, def: number /*double*/): io.lumine.xikage.mythicmobs.skills.placeholders.parsers.PlaceholderDouble
                        // @ts-ignore
                        public getPlaceholderDouble(key: java.lang.String[] | string[], def: number /*double*/, ...args: java.lang.String[] | string[]): io.lumine.xikage.mythicmobs.skills.placeholders.parsers.PlaceholderDouble
                        // @ts-ignore
                        public getFloat(key: java.lang.String | string): number /*float*/
                        // @ts-ignore
                        public getFloat(key: java.lang.String[] | string[]): number /*float*/
                        // @ts-ignore
                        public getFloat(key: java.lang.String | string, def: number /*float*/): number /*float*/
                        // @ts-ignore
                        public getFloat(key: java.lang.String[] | string[], def: number /*float*/): number /*float*/
                        // @ts-ignore
                        public getPlaceholderFloat(key: java.lang.String | string, def: java.lang.String | string): io.lumine.xikage.mythicmobs.skills.placeholders.parsers.PlaceholderFloat
                        // @ts-ignore
                        public getPlaceholderFloat(key: java.lang.String[] | string[], def: java.lang.String | string, ...args: java.lang.String[] | string[]): io.lumine.xikage.mythicmobs.skills.placeholders.parsers.PlaceholderFloat
                        // @ts-ignore
                        public getPlaceholderFloat(key: java.lang.String | string, def: number /*float*/): io.lumine.xikage.mythicmobs.skills.placeholders.parsers.PlaceholderFloat
                        // @ts-ignore
                        public getPlaceholderFloat(key: java.lang.String[] | string[], def: number /*float*/, ...args: java.lang.String[] | string[]): io.lumine.xikage.mythicmobs.skills.placeholders.parsers.PlaceholderFloat
                        // @ts-ignore
                        public getLong(key: java.lang.String | string): number /*long*/
                        // @ts-ignore
                        public getLong(key: java.lang.String[] | string[]): number /*long*/
                        // @ts-ignore
                        public getLong(key: java.lang.String | string, def: number /*long*/): number /*long*/
                        // @ts-ignore
                        public getLong(key: java.lang.String[] | string[], def: number /*long*/): number /*long*/
                        // @ts-ignore
                        public getColor(key: java.lang.String[] | string[], def: java.lang.String | string): java.awt.Color
                        // @ts-ignore
                        public getColor(key: java.lang.String | string, def: java.lang.String | string): java.awt.Color
                        // @ts-ignore
                        public static unparseBlock(s: java.lang.String | string): string
                        // @ts-ignore
                        public static parseBlock(s: java.lang.String | string): string
                        // @ts-ignore
                        public getFileName(): string
                    }
                }
            }
        }
    }
}
