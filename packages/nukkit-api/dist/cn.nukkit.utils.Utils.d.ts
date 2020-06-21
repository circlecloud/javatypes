declare namespace cn {
    namespace nukkit {
        namespace utils {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class Utils extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static writeFile(fileName: java.lang.String | string, content: java.lang.String | string): void
                // @ts-ignore
                public static writeFile(fileName: java.lang.String | string, content: java.io.InputStream): void
                // @ts-ignore
                public static writeFile(file: java.io.File, content: java.lang.String | string): void
                // @ts-ignore
                public static writeFile(file: java.io.File, content: java.io.InputStream): void
                // @ts-ignore
                public static readFile(file: java.io.File): string
                // @ts-ignore
                public static readFile(filename: java.lang.String | string): string
                // @ts-ignore
                public static readFile(inputStream: java.io.InputStream): string
                // @ts-ignore
                public static copyFile(from: java.io.File, to: java.io.File): void
                // @ts-ignore
                public static getAllThreadDumps(): string
                // @ts-ignore
                public static getExceptionMessage(e: java.lang.Throwable | Error): string
                // @ts-ignore
                public static dataToUUID(...params: java.lang.String[] | string[]): java.util.UUID
                // @ts-ignore
                public static dataToUUID(...params: number /*byte*/[][]): java.util.UUID
                // @ts-ignore
                public static rtrim(s: java.lang.String | string, character: string): string
                // @ts-ignore
                public static isByteArrayEmpty(array: number /*byte*/[]): boolean
                // @ts-ignore
                public static toRGB(r: number /*byte*/, g: number /*byte*/, b: number /*byte*/, a: number /*byte*/): number /*long*/
                // @ts-ignore
                public static toABGR(argb: number /*int*/): number /*long*/
                // @ts-ignore
                public static splitArray(arrayToSplit: java.lang.Object[] | any[], chunkSize: number /*int*/): any[][]
                // @ts-ignore
                public static reverseArray<T>(data: T[]): void
                // @ts-ignore
                public static reverseArray<T>(array: T[], copy: boolean): T
                // @ts-ignore
                public static clone2dArray<T>(array: T[][]): T
                // @ts-ignore
                public static getOrCreate<T, U, V>(map: java.util.Map<T, java.util.Map<U, V>>, key: T): java.util.Map<U, V>
                // @ts-ignore
                public static getOrCreate<T, U, V extends U>(map: java.util.Map<T, U>, clazz: java.lang.Class<V>, key: T): U
                // @ts-ignore
                public static toInt(number: java.lang.Object | any): number /*int*/
                // @ts-ignore
                public static parseHexBinary(s: java.lang.String | string): number /*byte*/[]
            }
        }
    }
}
