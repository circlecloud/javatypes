declare namespace cn {
    namespace nukkit {
        namespace utils {
            // @ts-ignore
            class ThreadCache extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static readonly idArray: cn.nukkit.utils.IterableThreadLocal<number /*byte*/[][]>
                // @ts-ignore
                public static readonly dataArray: cn.nukkit.utils.IterableThreadLocal<number /*byte*/[][]>
                // @ts-ignore
                public static readonly byteCache6144: cn.nukkit.utils.IterableThreadLocal<number /*byte*/[]>
                // @ts-ignore
                public static readonly byteCache256: cn.nukkit.utils.IterableThreadLocal<number /*byte*/[]>
                // @ts-ignore
                public static readonly boolCache4096: cn.nukkit.utils.IterableThreadLocal<boolean[]>
                // @ts-ignore
                public static readonly charCache4096v2: cn.nukkit.utils.IterableThreadLocal<string[]>
                // @ts-ignore
                public static readonly charCache4096: cn.nukkit.utils.IterableThreadLocal<string[]>
                // @ts-ignore
                public static readonly intCache256: cn.nukkit.utils.IterableThreadLocal<number /*int*/[]>
                // @ts-ignore
                public static readonly fbaos: cn.nukkit.utils.IterableThreadLocal<cn.nukkit.nbt.stream.FastByteArrayOutputStream>
                // @ts-ignore
                public static readonly binaryStream: cn.nukkit.utils.IterableThreadLocal<cn.nukkit.utils.BinaryStream>
                // @ts-ignore
                public static clean(): void
            }
        }
    }
}
