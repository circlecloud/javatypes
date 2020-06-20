declare namespace org {
    namespace bukkit {
        namespace util {
            /**
             * Utils for casting number types to other number types
             */
            // @ts-ignore
            class NumberConversions extends java.lang.Object {
                // @ts-ignore
                floor(num: number /*double*/): int
                // @ts-ignore
                ceil(num: number /*double*/): int
                // @ts-ignore
                round(num: number /*double*/): int
                // @ts-ignore
                square(num: number /*double*/): double
                // @ts-ignore
                toInt(object: any): int
                // @ts-ignore
                toFloat(object: any): float
                // @ts-ignore
                toDouble(object: any): double
                // @ts-ignore
                toLong(object: any): long
                // @ts-ignore
                toShort(object: any): short
                // @ts-ignore
                toByte(object: any): byte
                // @ts-ignore
                isFinite(d: number /*double*/): boolean
                // @ts-ignore
                isFinite(f: number /*float*/): boolean
                // @ts-ignore
                checkFinite(d: number /*double*/, message: string): void
                // @ts-ignore
                checkFinite(d: number /*float*/, message: string): void
            }
        }
    }
}
