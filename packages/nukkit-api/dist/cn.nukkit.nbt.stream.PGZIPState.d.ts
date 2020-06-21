declare namespace cn {
    namespace nukkit {
        namespace nbt {
            namespace stream {
                // @ts-ignore
                class PGZIPState extends java.lang.Object {
                    // @ts-ignore
                    constructor(parent: cn.nukkit.nbt.stream.PGZIPOutputStream)
                    // @ts-ignore
                    readonly str: java.util.zip.DeflaterOutputStream
                    // @ts-ignore
                    readonly buf: java.io.ByteArrayOutputStream
                    // @ts-ignore
                    readonly def: java.util.zip.Deflater
                }
            }
        }
    }
}
