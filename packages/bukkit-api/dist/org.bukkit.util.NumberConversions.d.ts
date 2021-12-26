declare namespace org {
    namespace bukkit {
        namespace util {
            /**
             * Utils for casting number types to other number types
             */
            // @ts-ignore
            class NumberConversions extends java.lang.Object {
                // @ts-ignore
                public static floor(num: number /*double*/): number /*int*/
                // @ts-ignore
                public static ceil(num: number /*double*/): number /*int*/
                // @ts-ignore
                public static round(num: number /*double*/): number /*int*/
                // @ts-ignore
                public static square(num: number /*double*/): number /*double*/
                // @ts-ignore
                public static toInt(object: java.lang.Object | any): number /*int*/
                // @ts-ignore
                public static toFloat(object: java.lang.Object | any): number /*float*/
                // @ts-ignore
                public static toDouble(object: java.lang.Object | any): number /*double*/
                // @ts-ignore
                public static toLong(object: java.lang.Object | any): number /*long*/
                // @ts-ignore
                public static toShort(object: java.lang.Object | any): number /*short*/
                // @ts-ignore
                public static toByte(object: java.lang.Object | any): number /*byte*/
                // @ts-ignore
                public static isFinite(d: number /*double*/): boolean
                // @ts-ignore
                public static isFinite(f: number /*float*/): boolean
                // @ts-ignore
                public static checkFinite(d: number /*double*/, message: java.lang.String | string): void
                // @ts-ignore
                public static checkFinite(d: number /*float*/, message: java.lang.String | string): void
            }
        }
    }
}
