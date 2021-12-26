declare namespace eos {
    namespace moe {
        namespace dragoncore {
            namespace network {
                // @ts-ignore
                class PacketBuffer extends ByteBuf {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    constructor(wrapped: ByteBuf)
                    // @ts-ignore
                    public writeStringList(collection: java.util.Collection<java.lang.String | string> | Array<java.lang.String | string>): void
                    // @ts-ignore
                    public static getVarIntSize(input: number /*int*/): number /*int*/
                    // @ts-ignore
                    public writeByteArray(array: number /*byte*/[]): eos.moe.dragoncore.network.PacketBuffer
                    // @ts-ignore
                    public readByteArray(): number /*byte*/[]
                    // @ts-ignore
                    public readByteArray(maxLength: number /*int*/): number /*byte*/[]
                    // @ts-ignore
                    public writeVarIntArray(array: number /*int*/[]): eos.moe.dragoncore.network.PacketBuffer
                    // @ts-ignore
                    public readVarIntArray(): number /*int*/[]
                    // @ts-ignore
                    public readVarIntArray(maxLength: number /*int*/): number /*int*/[]
                    // @ts-ignore
                    public writeLongArray(array: number /*long*/[]): eos.moe.dragoncore.network.PacketBuffer
                    // @ts-ignore
                    public readLongArray(array: number /*long*/[]): number /*long*/[]
                    // @ts-ignore
                    public readLongArray(array: number /*long*/[], maxLength: number /*int*/): number /*long*/[]
                    // @ts-ignore
                    public readEnumValue<T extends java.lang.Enum<T>>(enumClass: java.lang.Class<T>): T
                    // @ts-ignore
                    public writeEnumValue(value: java.lang.Enum<any>): eos.moe.dragoncore.network.PacketBuffer
                    // @ts-ignore
                    public readVarInt(): number /*int*/
                    // @ts-ignore
                    public readVarLong(): number /*long*/
                    // @ts-ignore
                    public writeUniqueId(uuid: java.util.UUID): eos.moe.dragoncore.network.PacketBuffer
                    // @ts-ignore
                    public readUniqueId(): java.util.UUID
                    // @ts-ignore
                    public writeVarInt(input: number /*int*/): eos.moe.dragoncore.network.PacketBuffer
                    // @ts-ignore
                    public writeVarLong(value: number /*long*/): eos.moe.dragoncore.network.PacketBuffer
                    // @ts-ignore
                    public readStringArray(): string[]
                    // @ts-ignore
                    public readStringList(): Array<java.lang.String | string>
                    // @ts-ignore
                    public readStringSet(): Array<java.lang.String | string>
                    // @ts-ignore
                    public readString(): string
                    // @ts-ignore
                    public readString(maxLength: number /*int*/): string
                    // @ts-ignore
                    public writeString(string: java.lang.String | string): eos.moe.dragoncore.network.PacketBuffer
                    // @ts-ignore
                    public readTime(): java.util.Date
                    // @ts-ignore
                    public writeTime(time: java.util.Date): eos.moe.dragoncore.network.PacketBuffer
                    // @ts-ignore
                    public capacity(): number /*int*/
                    // @ts-ignore
                    public capacity(p_capacity_1_: number /*int*/): ByteBuf
                    // @ts-ignore
                    public maxCapacity(): number /*int*/
                    // @ts-ignore
                    public alloc(): ByteBufAllocator
                    // @ts-ignore
                    public order(): java.nio.ByteOrder
                    // @ts-ignore
                    public order(p_order_1_: java.nio.ByteOrder): ByteBuf
                    // @ts-ignore
                    public unwrap(): ByteBuf
                    // @ts-ignore
                    public isDirect(): boolean
                    // @ts-ignore
                    public isReadOnly(): boolean
                    // @ts-ignore
                    public asReadOnly(): ByteBuf
                    // @ts-ignore
                    public readerIndex(): number /*int*/
                    // @ts-ignore
                    public readerIndex(p_readerIndex_1_: number /*int*/): ByteBuf
                    // @ts-ignore
                    public writerIndex(): number /*int*/
                    // @ts-ignore
                    public writerIndex(p_writerIndex_1_: number /*int*/): ByteBuf
                    // @ts-ignore
                    public setIndex(p_setIndex_1_: number /*int*/, p_setIndex_2_: number /*int*/): ByteBuf
                    // @ts-ignore
                    public readableBytes(): number /*int*/
                    // @ts-ignore
                    public writableBytes(): number /*int*/
                    // @ts-ignore
                    public maxWritableBytes(): number /*int*/
                    // @ts-ignore
                    public isReadable(): boolean
                    // @ts-ignore
                    public isReadable(p_isReadable_1_: number /*int*/): boolean
                    // @ts-ignore
                    public isWritable(): boolean
                    // @ts-ignore
                    public isWritable(p_isWritable_1_: number /*int*/): boolean
                    // @ts-ignore
                    public clear(): ByteBuf
                    // @ts-ignore
                    public markReaderIndex(): ByteBuf
                    // @ts-ignore
                    public resetReaderIndex(): ByteBuf
                    // @ts-ignore
                    public markWriterIndex(): ByteBuf
                    // @ts-ignore
                    public resetWriterIndex(): ByteBuf
                    // @ts-ignore
                    public discardReadBytes(): ByteBuf
                    // @ts-ignore
                    public discardSomeReadBytes(): ByteBuf
                    // @ts-ignore
                    public ensureWritable(p_ensureWritable_1_: number /*int*/): ByteBuf
                    // @ts-ignore
                    public ensureWritable(p_ensureWritable_1_: number /*int*/, p_ensureWritable_2_: boolean): number /*int*/
                    // @ts-ignore
                    public getBoolean(p_getBoolean_1_: number /*int*/): boolean
                    // @ts-ignore
                    public getByte(p_getByte_1_: number /*int*/): number /*byte*/
                    // @ts-ignore
                    public getUnsignedByte(p_getUnsignedByte_1_: number /*int*/): number /*short*/
                    // @ts-ignore
                    public getShort(p_getShort_1_: number /*int*/): number /*short*/
                    // @ts-ignore
                    public getShortLE(p_getShortLE_1_: number /*int*/): number /*short*/
                    // @ts-ignore
                    public getUnsignedShort(p_getUnsignedShort_1_: number /*int*/): number /*int*/
                    // @ts-ignore
                    public getUnsignedShortLE(p_getUnsignedShortLE_1_: number /*int*/): number /*int*/
                    // @ts-ignore
                    public getMedium(p_getMedium_1_: number /*int*/): number /*int*/
                    // @ts-ignore
                    public getMediumLE(p_getMediumLE_1_: number /*int*/): number /*int*/
                    // @ts-ignore
                    public getUnsignedMedium(p_getUnsignedMedium_1_: number /*int*/): number /*int*/
                    // @ts-ignore
                    public getUnsignedMediumLE(p_getUnsignedMediumLE_1_: number /*int*/): number /*int*/
                    // @ts-ignore
                    public getInt(p_getInt_1_: number /*int*/): number /*int*/
                    // @ts-ignore
                    public getIntLE(p_getIntLE_1_: number /*int*/): number /*int*/
                    // @ts-ignore
                    public getUnsignedInt(p_getUnsignedInt_1_: number /*int*/): number /*long*/
                    // @ts-ignore
                    public getUnsignedIntLE(p_getUnsignedIntLE_1_: number /*int*/): number /*long*/
                    // @ts-ignore
                    public getLong(p_getLong_1_: number /*int*/): number /*long*/
                    // @ts-ignore
                    public getLongLE(p_getLongLE_1_: number /*int*/): number /*long*/
                    // @ts-ignore
                    public getChar(p_getChar_1_: number /*int*/): string
                    // @ts-ignore
                    public getFloat(p_getFloat_1_: number /*int*/): number /*float*/
                    // @ts-ignore
                    public getDouble(p_getDouble_1_: number /*int*/): number /*double*/
                    // @ts-ignore
                    public getBytes(p_getBytes_1_: number /*int*/, p_getBytes_2_: ByteBuf): ByteBuf
                    // @ts-ignore
                    public getBytes(p_getBytes_1_: number /*int*/, p_getBytes_2_: ByteBuf, p_getBytes_3_: number /*int*/): ByteBuf
                    // @ts-ignore
                    public getBytes(p_getBytes_1_: number /*int*/, p_getBytes_2_: ByteBuf, p_getBytes_3_: number /*int*/, p_getBytes_4_: number /*int*/): ByteBuf
                    // @ts-ignore
                    public getBytes(p_getBytes_1_: number /*int*/, p_getBytes_2_: number /*byte*/[]): ByteBuf
                    // @ts-ignore
                    public getBytes(p_getBytes_1_: number /*int*/, p_getBytes_2_: number /*byte*/[], p_getBytes_3_: number /*int*/, p_getBytes_4_: number /*int*/): ByteBuf
                    // @ts-ignore
                    public getBytes(p_getBytes_1_: number /*int*/, p_getBytes_2_: java.nio.ByteBuffer): ByteBuf
                    // @ts-ignore
                    public getBytes(p_getBytes_1_: number /*int*/, p_getBytes_2_: java.io.OutputStream, p_getBytes_3_: number /*int*/): ByteBuf
                    // @ts-ignore
                    public getBytes(p_getBytes_1_: number /*int*/, p_getBytes_2_: java.nio.channels.FileChannel, p_getBytes_3_: number /*long*/, p_getBytes_5_: number /*int*/): number /*int*/
                    // @ts-ignore
                    public getCharSequence(p_getCharSequence_1_: number /*int*/, p_getCharSequence_2_: number /*int*/, p_getCharSequence_3_: java.nio.charset.Charset): java.lang.CharSequence
                    // @ts-ignore
                    public setBoolean(p_setBoolean_1_: number /*int*/, p_setBoolean_2_: boolean): ByteBuf
                    // @ts-ignore
                    public setByte(p_setByte_1_: number /*int*/, p_setByte_2_: number /*int*/): ByteBuf
                    // @ts-ignore
                    public setShort(p_setShort_1_: number /*int*/, p_setShort_2_: number /*int*/): ByteBuf
                    // @ts-ignore
                    public setShortLE(p_setShortLE_1_: number /*int*/, p_setShortLE_2_: number /*int*/): ByteBuf
                    // @ts-ignore
                    public setMedium(p_setMedium_1_: number /*int*/, p_setMedium_2_: number /*int*/): ByteBuf
                    // @ts-ignore
                    public setMediumLE(p_setMediumLE_1_: number /*int*/, p_setMediumLE_2_: number /*int*/): ByteBuf
                    // @ts-ignore
                    public setInt(p_setInt_1_: number /*int*/, p_setInt_2_: number /*int*/): ByteBuf
                    // @ts-ignore
                    public setIntLE(p_setIntLE_1_: number /*int*/, p_setIntLE_2_: number /*int*/): ByteBuf
                    // @ts-ignore
                    public setLong(p_setLong_1_: number /*int*/, p_setLong_2_: number /*long*/): ByteBuf
                    // @ts-ignore
                    public setLongLE(p_setLongLE_1_: number /*int*/, p_setLongLE_2_: number /*long*/): ByteBuf
                    // @ts-ignore
                    public setChar(p_setChar_1_: number /*int*/, p_setChar_2_: number /*int*/): ByteBuf
                    // @ts-ignore
                    public setFloat(p_setFloat_1_: number /*int*/, p_setFloat_2_: number /*float*/): ByteBuf
                    // @ts-ignore
                    public setDouble(p_setDouble_1_: number /*int*/, p_setDouble_2_: number /*double*/): ByteBuf
                    // @ts-ignore
                    public setBytes(p_setBytes_1_: number /*int*/, p_setBytes_2_: ByteBuf): ByteBuf
                    // @ts-ignore
                    public setBytes(p_setBytes_1_: number /*int*/, p_setBytes_2_: ByteBuf, p_setBytes_3_: number /*int*/): ByteBuf
                    // @ts-ignore
                    public setBytes(p_setBytes_1_: number /*int*/, p_setBytes_2_: ByteBuf, p_setBytes_3_: number /*int*/, p_setBytes_4_: number /*int*/): ByteBuf
                    // @ts-ignore
                    public setBytes(p_setBytes_1_: number /*int*/, p_setBytes_2_: number /*byte*/[]): ByteBuf
                    // @ts-ignore
                    public setBytes(p_setBytes_1_: number /*int*/, p_setBytes_2_: number /*byte*/[], p_setBytes_3_: number /*int*/, p_setBytes_4_: number /*int*/): ByteBuf
                    // @ts-ignore
                    public setBytes(p_setBytes_1_: number /*int*/, p_setBytes_2_: java.nio.ByteBuffer): ByteBuf
                    // @ts-ignore
                    public setBytes(p_setBytes_1_: number /*int*/, p_setBytes_2_: java.nio.channels.FileChannel, p_setBytes_3_: number /*long*/, p_setBytes_5_: number /*int*/): number /*int*/
                    // @ts-ignore
                    public setZero(p_setZero_1_: number /*int*/, p_setZero_2_: number /*int*/): ByteBuf
                    // @ts-ignore
                    public setCharSequence(p_setCharSequence_1_: number /*int*/, p_setCharSequence_2_: java.lang.CharSequence, p_setCharSequence_3_: java.nio.charset.Charset): number /*int*/
                    // @ts-ignore
                    public readBoolean(): boolean
                    // @ts-ignore
                    public readByte(): number /*byte*/
                    // @ts-ignore
                    public readUnsignedByte(): number /*short*/
                    // @ts-ignore
                    public readShort(): number /*short*/
                    // @ts-ignore
                    public readShortLE(): number /*short*/
                    // @ts-ignore
                    public readUnsignedShort(): number /*int*/
                    // @ts-ignore
                    public readUnsignedShortLE(): number /*int*/
                    // @ts-ignore
                    public readMedium(): number /*int*/
                    // @ts-ignore
                    public readMediumLE(): number /*int*/
                    // @ts-ignore
                    public readUnsignedMedium(): number /*int*/
                    // @ts-ignore
                    public readUnsignedMediumLE(): number /*int*/
                    // @ts-ignore
                    public readInt(): number /*int*/
                    // @ts-ignore
                    public readIntLE(): number /*int*/
                    // @ts-ignore
                    public readUnsignedInt(): number /*long*/
                    // @ts-ignore
                    public readUnsignedIntLE(): number /*long*/
                    // @ts-ignore
                    public readLong(): number /*long*/
                    // @ts-ignore
                    public readLongLE(): number /*long*/
                    // @ts-ignore
                    public readChar(): string
                    // @ts-ignore
                    public readFloat(): number /*float*/
                    // @ts-ignore
                    public readDouble(): number /*double*/
                    // @ts-ignore
                    public readBytes(p_readBytes_1_: number /*int*/): ByteBuf
                    // @ts-ignore
                    public readSlice(p_readSlice_1_: number /*int*/): ByteBuf
                    // @ts-ignore
                    public readRetainedSlice(p_readRetainedSlice_1_: number /*int*/): ByteBuf
                    // @ts-ignore
                    public readBytes(p_readBytes_1_: ByteBuf): ByteBuf
                    // @ts-ignore
                    public readBytes(p_readBytes_1_: ByteBuf, p_readBytes_2_: number /*int*/): ByteBuf
                    // @ts-ignore
                    public readBytes(p_readBytes_1_: ByteBuf, p_readBytes_2_: number /*int*/, p_readBytes_3_: number /*int*/): ByteBuf
                    // @ts-ignore
                    public readBytes(p_readBytes_1_: number /*byte*/[]): ByteBuf
                    // @ts-ignore
                    public readBytes(p_readBytes_1_: number /*byte*/[], p_readBytes_2_: number /*int*/, p_readBytes_3_: number /*int*/): ByteBuf
                    // @ts-ignore
                    public readBytes(p_readBytes_1_: java.nio.ByteBuffer): ByteBuf
                    // @ts-ignore
                    public readBytes(p_readBytes_1_: java.io.OutputStream, p_readBytes_2_: number /*int*/): ByteBuf
                    // @ts-ignore
                    public readCharSequence(p_readCharSequence_1_: number /*int*/, p_readCharSequence_2_: java.nio.charset.Charset): java.lang.CharSequence
                    // @ts-ignore
                    public readBytes(p_readBytes_1_: java.nio.channels.FileChannel, p_readBytes_2_: number /*long*/, p_readBytes_4_: number /*int*/): number /*int*/
                    // @ts-ignore
                    public skipBytes(p_skipBytes_1_: number /*int*/): ByteBuf
                    // @ts-ignore
                    public writeBoolean(p_writeBoolean_1_: boolean): ByteBuf
                    // @ts-ignore
                    public writeByte(p_writeByte_1_: number /*int*/): ByteBuf
                    // @ts-ignore
                    public writeShort(p_writeShort_1_: number /*int*/): ByteBuf
                    // @ts-ignore
                    public writeShortLE(p_writeShortLE_1_: number /*int*/): ByteBuf
                    // @ts-ignore
                    public writeMedium(p_writeMedium_1_: number /*int*/): ByteBuf
                    // @ts-ignore
                    public writeMediumLE(p_writeMediumLE_1_: number /*int*/): ByteBuf
                    // @ts-ignore
                    public writeInt(p_writeInt_1_: number /*int*/): ByteBuf
                    // @ts-ignore
                    public writeIntLE(p_writeIntLE_1_: number /*int*/): ByteBuf
                    // @ts-ignore
                    public writeLong(p_writeLong_1_: number /*long*/): ByteBuf
                    // @ts-ignore
                    public writeLongLE(p_writeLongLE_1_: number /*long*/): ByteBuf
                    // @ts-ignore
                    public writeChar(p_writeChar_1_: number /*int*/): ByteBuf
                    // @ts-ignore
                    public writeFloat(p_writeFloat_1_: number /*float*/): ByteBuf
                    // @ts-ignore
                    public writeDouble(p_writeDouble_1_: number /*double*/): ByteBuf
                    // @ts-ignore
                    public writeBytes(p_writeBytes_1_: ByteBuf): ByteBuf
                    // @ts-ignore
                    public writeBytes(p_writeBytes_1_: ByteBuf, p_writeBytes_2_: number /*int*/): ByteBuf
                    // @ts-ignore
                    public writeBytes(p_writeBytes_1_: ByteBuf, p_writeBytes_2_: number /*int*/, p_writeBytes_3_: number /*int*/): ByteBuf
                    // @ts-ignore
                    public writeBytes(p_writeBytes_1_: number /*byte*/[]): ByteBuf
                    // @ts-ignore
                    public writeBytes(p_writeBytes_1_: number /*byte*/[], p_writeBytes_2_: number /*int*/, p_writeBytes_3_: number /*int*/): ByteBuf
                    // @ts-ignore
                    public writeBytes(p_writeBytes_1_: java.nio.ByteBuffer): ByteBuf
                    // @ts-ignore
                    public writeBytes(p_writeBytes_1_: java.nio.channels.FileChannel, p_writeBytes_2_: number /*long*/, p_writeBytes_4_: number /*int*/): number /*int*/
                    // @ts-ignore
                    public writeZero(p_writeZero_1_: number /*int*/): ByteBuf
                    // @ts-ignore
                    public writeCharSequence(p_writeCharSequence_1_: java.lang.CharSequence, p_writeCharSequence_2_: java.nio.charset.Charset): number /*int*/
                    // @ts-ignore
                    public indexOf(p_indexOf_1_: number /*int*/, p_indexOf_2_: number /*int*/, p_indexOf_3_: number /*byte*/): number /*int*/
                    // @ts-ignore
                    public bytesBefore(p_bytesBefore_1_: number /*byte*/): number /*int*/
                    // @ts-ignore
                    public bytesBefore(p_bytesBefore_1_: number /*int*/, p_bytesBefore_2_: number /*byte*/): number /*int*/
                    // @ts-ignore
                    public bytesBefore(p_bytesBefore_1_: number /*int*/, p_bytesBefore_2_: number /*int*/, p_bytesBefore_3_: number /*byte*/): number /*int*/
                    // @ts-ignore
                    public forEachByte(p_forEachByte_1_: ByteProcessor): number /*int*/
                    // @ts-ignore
                    public forEachByte(p_forEachByte_1_: number /*int*/, p_forEachByte_2_: number /*int*/, p_forEachByte_3_: ByteProcessor): number /*int*/
                    // @ts-ignore
                    public forEachByteDesc(p_forEachByteDesc_1_: ByteProcessor): number /*int*/
                    // @ts-ignore
                    public forEachByteDesc(p_forEachByteDesc_1_: number /*int*/, p_forEachByteDesc_2_: number /*int*/, p_forEachByteDesc_3_: ByteProcessor): number /*int*/
                    // @ts-ignore
                    public copy(): ByteBuf
                    // @ts-ignore
                    public copy(p_copy_1_: number /*int*/, p_copy_2_: number /*int*/): ByteBuf
                    // @ts-ignore
                    public slice(): ByteBuf
                    // @ts-ignore
                    public retainedSlice(): ByteBuf
                    // @ts-ignore
                    public slice(p_slice_1_: number /*int*/, p_slice_2_: number /*int*/): ByteBuf
                    // @ts-ignore
                    public retainedSlice(p_retainedSlice_1_: number /*int*/, p_retainedSlice_2_: number /*int*/): ByteBuf
                    // @ts-ignore
                    public duplicate(): ByteBuf
                    // @ts-ignore
                    public retainedDuplicate(): ByteBuf
                    // @ts-ignore
                    public nioBufferCount(): number /*int*/
                    // @ts-ignore
                    public nioBuffer(): java.nio.ByteBuffer
                    // @ts-ignore
                    public nioBuffer(p_nioBuffer_1_: number /*int*/, p_nioBuffer_2_: number /*int*/): java.nio.ByteBuffer
                    // @ts-ignore
                    public internalNioBuffer(p_internalNioBuffer_1_: number /*int*/, p_internalNioBuffer_2_: number /*int*/): java.nio.ByteBuffer
                    // @ts-ignore
                    public nioBuffers(): java.nio.ByteBuffer[]
                    // @ts-ignore
                    public nioBuffers(p_nioBuffers_1_: number /*int*/, p_nioBuffers_2_: number /*int*/): java.nio.ByteBuffer[]
                    // @ts-ignore
                    public hasArray(): boolean
                    // @ts-ignore
                    public array(): number /*byte*/[]
                    // @ts-ignore
                    public arrayOffset(): number /*int*/
                    // @ts-ignore
                    public hasMemoryAddress(): boolean
                    // @ts-ignore
                    public memoryAddress(): number /*long*/
                    // @ts-ignore
                    public toString(p_toString_1_: java.nio.charset.Charset): string
                    // @ts-ignore
                    public toString(p_toString_1_: number /*int*/, p_toString_2_: number /*int*/, p_toString_3_: java.nio.charset.Charset): string
                    // @ts-ignore
                    public hashCode(): number /*int*/
                    // @ts-ignore
                    public equals(p_equals_1_: java.lang.Object | any): boolean
                    // @ts-ignore
                    public compareTo(p_compareTo_1_: ByteBuf): number /*int*/
                    // @ts-ignore
                    public toString(): string
                    // @ts-ignore
                    public retain(p_retain_1_: number /*int*/): ByteBuf
                    // @ts-ignore
                    public retain(): ByteBuf
                    // @ts-ignore
                    public touch(): ByteBuf
                    // @ts-ignore
                    public touch(p_touch_1_: java.lang.Object | any): ByteBuf
                    // @ts-ignore
                    public refCnt(): number /*int*/
                    // @ts-ignore
                    public release(): boolean
                    // @ts-ignore
                    public release(p_release_1_: number /*int*/): boolean
                    // @ts-ignore
                    public writeItemStack(itemStack: ItemStack): void
                }
            }
        }
    }
}
