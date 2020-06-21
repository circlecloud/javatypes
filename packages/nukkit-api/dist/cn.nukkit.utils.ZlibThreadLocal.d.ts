declare namespace cn {
    namespace nukkit {
        namespace utils {
            // @ts-ignore
            class ZlibThreadLocal extends java.lang.Object implements cn.nukkit.utils.ZlibProvider {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static readonly buf: cn.nukkit.utils.IterableThreadLocal<number /*byte*/[]>
                // @ts-ignore
                public static readonly def: cn.nukkit.utils.IterableThreadLocal<java.util.zip.Deflater>
                // @ts-ignore
                public deflate(datas: number /*byte*/[][], level: number /*int*/): number /*byte*/[]
                // @ts-ignore
                public deflate(data: number /*byte*/[], level: number /*int*/): number /*byte*/[]
                // @ts-ignore
                public inflate(stream: java.io.InputStream): number /*byte*/[]
            }
        }
    }
}
