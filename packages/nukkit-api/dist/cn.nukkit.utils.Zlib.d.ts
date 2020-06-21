declare namespace cn {
    namespace nukkit {
        namespace utils {
            // @ts-ignore
            abstract class Zlib extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static setProvider(providerIndex: number /*int*/): void
                // @ts-ignore
                public static deflate(data: number /*byte*/[]): number /*byte*/[]
                // @ts-ignore
                public static deflate(data: number /*byte*/[], level: number /*int*/): number /*byte*/[]
                // @ts-ignore
                public static deflate(data: number /*byte*/[][], level: number /*int*/): number /*byte*/[]
                // @ts-ignore
                public static inflate(stream: java.io.InputStream): number /*byte*/[]
                // @ts-ignore
                public static inflate(data: number /*byte*/[]): number /*byte*/[]
                // @ts-ignore
                public static inflate(data: number /*byte*/[], maxSize: number /*int*/): number /*byte*/[]
            }
        }
    }
}
