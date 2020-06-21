declare namespace cn {
    namespace nukkit {
        namespace nbt {
            namespace stream {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                class NBTOutputStream extends java.lang.Object implements java.io.DataOutput, java.lang.AutoCloseable {
                    // @ts-ignore
                    constructor(stream: java.io.OutputStream)
                    // @ts-ignore
                    constructor(stream: java.io.OutputStream, endianness: java.nio.ByteOrder)
                    // @ts-ignore
                    constructor(stream: java.io.OutputStream, endianness: java.nio.ByteOrder, network: boolean)
                    // @ts-ignore
                    public getEndianness(): java.nio.ByteOrder
                    // @ts-ignore
                    public isNetwork(): boolean
                    // @ts-ignore
                    public write(bytes: number /*byte*/[]): void
                    // @ts-ignore
                    public write(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): void
                    // @ts-ignore
                    public write(b: number /*int*/): void
                    // @ts-ignore
                    public writeBoolean(v: boolean): void
                    // @ts-ignore
                    public writeByte(v: number /*int*/): void
                    // @ts-ignore
                    public writeShort(v: number /*int*/): void
                    // @ts-ignore
                    public writeChar(v: number /*int*/): void
                    // @ts-ignore
                    public writeInt(v: number /*int*/): void
                    // @ts-ignore
                    public writeLong(v: number /*long*/): void
                    // @ts-ignore
                    public writeFloat(v: number /*float*/): void
                    // @ts-ignore
                    public writeDouble(v: number /*double*/): void
                    // @ts-ignore
                    public writeBytes(s: java.lang.String | string): void
                    // @ts-ignore
                    public writeChars(s: java.lang.String | string): void
                    // @ts-ignore
                    public writeUTF(s: java.lang.String | string): void
                    // @ts-ignore
                    public close(): void
                }
            }
        }
    }
}
