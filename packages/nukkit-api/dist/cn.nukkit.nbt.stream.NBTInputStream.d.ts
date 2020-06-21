declare namespace cn {
    namespace nukkit {
        namespace nbt {
            namespace stream {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                class NBTInputStream extends java.lang.Object implements java.io.DataInput, java.lang.AutoCloseable {
                    // @ts-ignore
                    constructor(stream: java.io.InputStream)
                    // @ts-ignore
                    constructor(stream: java.io.InputStream, endianness: java.nio.ByteOrder)
                    // @ts-ignore
                    constructor(stream: java.io.InputStream, endianness: java.nio.ByteOrder, network: boolean)
                    // @ts-ignore
                    public getEndianness(): java.nio.ByteOrder
                    // @ts-ignore
                    public isNetwork(): boolean
                    // @ts-ignore
                    public readFully(b: number /*byte*/[]): void
                    // @ts-ignore
                    public readFully(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): void
                    // @ts-ignore
                    public skipBytes(n: number /*int*/): number /*int*/
                    // @ts-ignore
                    public readBoolean(): boolean
                    // @ts-ignore
                    public readByte(): number /*byte*/
                    // @ts-ignore
                    public readUnsignedByte(): number /*int*/
                    // @ts-ignore
                    public readShort(): number /*short*/
                    // @ts-ignore
                    public readUnsignedShort(): number /*int*/
                    // @ts-ignore
                    public readChar(): string
                    // @ts-ignore
                    public readInt(): number /*int*/
                    // @ts-ignore
                    public readLong(): number /*long*/
                    // @ts-ignore
                    public readFloat(): number /*float*/
                    // @ts-ignore
                    public readDouble(): number /*double*/
                    // @ts-ignore
                    public readLine(): string
                    // @ts-ignore
                    public readUTF(): string
                    // @ts-ignore
                    public available(): number /*int*/
                    // @ts-ignore
                    public close(): void
                }
            }
        }
    }
}
