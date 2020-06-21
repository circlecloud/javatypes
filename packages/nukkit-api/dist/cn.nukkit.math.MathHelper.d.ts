declare namespace cn {
    namespace nukkit {
        namespace math {
            // @ts-ignore
            class MathHelper extends java.lang.Object {
                // @ts-ignore
                public static sqrt(paramFloat: number /*float*/): number /*float*/
                // @ts-ignore
                public static sin(paramFloat: number /*float*/): number /*float*/
                // @ts-ignore
                public static cos(paramFloat: number /*float*/): number /*float*/
                // @ts-ignore
                public static sin(paramFloat: number /*double*/): number /*float*/
                // @ts-ignore
                public static cos(paramFloat: number /*double*/): number /*float*/
                // @ts-ignore
                public static floor(d0: number /*double*/): number /*int*/
                // @ts-ignore
                public static floor_double_long(d: number /*double*/): number /*long*/
                // @ts-ignore
                public static floor_float_int(f: number /*float*/): number /*int*/
                // @ts-ignore
                public static abs(number: number /*int*/): number /*int*/
                // @ts-ignore
                public static log2(bits: number /*int*/): number /*int*/
                /**
                 * Returns a random number between min and max, inclusive.
                 * @param random The random number generator.
                 * @param min    The minimum value.
                 * @param max    The maximum value.
                 * @return A random number between min and max, inclusive.
                 */
                // @ts-ignore
                public static getRandomNumberInRange(random: java.util.Random, min: number /*int*/, max: number /*int*/): number /*int*/
                // @ts-ignore
                public static max(first: number /*double*/, second: number /*double*/, third: number /*double*/, fourth: number /*double*/): number /*double*/
                // @ts-ignore
                public static ceil(floatNumber: number /*float*/): number /*int*/
                // @ts-ignore
                public static clamp(check: number /*int*/, min: number /*int*/, max: number /*int*/): number /*int*/
                // @ts-ignore
                public static denormalizeClamp(lowerBnd: number /*double*/, upperBnd: number /*double*/, slide: number /*double*/): number /*double*/
                // @ts-ignore
                public static denormalizeClamp(lowerBnd: number /*float*/, upperBnd: number /*float*/, slide: number /*float*/): number /*float*/
            }
        }
    }
}
