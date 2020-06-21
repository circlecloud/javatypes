declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace network {
                /**
                 * A ChannelStream allows for plugins and the server to read and write Java
                 * primitive data and some higher level data to {@link DataView} if necessary.
                 */
                // @ts-ignore
                interface ChannelBuf {
                    /**
                     * Gets the number of bytes this buffer can contain.
                     * @return The number of bytes this buffer can contain
                     */
                    // @ts-ignore
                    getCapacity(): number /*int*/
                    /**
                     * Gets the number of bytes available between the reader and the writer.
                     * @return The number of available bytes
                     */
                    // @ts-ignore
                    available(): number /*int*/
                    /**
                     * Returns a buffer with the specified endianness which shares the whole
                     * region, indexes, and marks of this buffer. Modifying the content, the
                     * indexes, or the marks of the returned buffer or this buffer affects
                     * each other's content, indexes, and marks.
                     * <p>If the specified endianness is identical to this buffer's byte
                     * order, this method can return this.</p>
                     * <p>This method does not modify readerIndex or writerIndex of this
                     * buffer.</p>
                     * @param order The order
                     * @return The ChannelStream with the desired byte order
                     */
                    // @ts-ignore
                    order(order: java.nio.ByteOrder): org.spongepowered.api.network.ChannelBuf
                    /**
                     * Returns the endianness ({@link ByteOrder}) of this buffer.
                     * @return The current byte order of this buffer
                     */
                    // @ts-ignore
                    getByteOrder(): java.nio.ByteOrder
                    /**
                     * Gets the readerIndex of this buffer.
                     * @return The current read index
                     */
                    // @ts-ignore
                    readerIndex(): number /*int*/
                    /**
                     * Sets the readerIndex of this buffer.
                     * @param index The new index
                     * @return This stream for chaining
                     */
                    // @ts-ignore
                    setReadIndex(index: number /*int*/): org.spongepowered.api.network.ChannelBuf
                    /**
                     * Gets the writerIndex of this buffer.
                     * @return The current write index
                     */
                    // @ts-ignore
                    writerIndex(): number /*int*/
                    /**
                     * Sets the writerIndex of this buffer.
                     * @param index The new index
                     * @return This stream for chaining
                     */
                    // @ts-ignore
                    setWriteIndex(index: number /*int*/): org.spongepowered.api.network.ChannelBuf
                    /**
                     * Sets both the reader and writer indices.
                     * @param readIndex The reader index
                     * @param writeIndex The writer index
                     * @return This stream for chaining
                     */
                    // @ts-ignore
                    setIndex(readIndex: number /*int*/, writeIndex: number /*int*/): org.spongepowered.api.network.ChannelBuf
                    /**
                     * Sets the readerIndex and writerIndex of this buffer to 0.
                     * This method is identical to {@link #setIndex(int, int)}.
                     * @return This stream for chaining
                     */
                    // @ts-ignore
                    clear(): org.spongepowered.api.network.ChannelBuf
                    /**
                     * Marks the current readerIndex in this buffer. You can reposition
                     * the current readerIndex to the marked readerIndex by calling
                     * resetRead(). The initial value of the marked readerIndex is 0.
                     * @return This stream for chaining
                     */
                    // @ts-ignore
                    markRead(): org.spongepowered.api.network.ChannelBuf
                    /**
                     * Marks the current writerIndex in this buffer. You can reposition
                     * the current writerIndex to the marked writerIndex by calling
                     * resetWrite(). The initial value of the marked writerIndex is 0.
                     * @return This stream for chaining
                     */
                    // @ts-ignore
                    markWrite(): org.spongepowered.api.network.ChannelBuf
                    /**
                     * Resets the current readerIndex in this buffer to the marked reader
                     * index.
                     * @return This stream for chaining
                     */
                    // @ts-ignore
                    resetRead(): org.spongepowered.api.network.ChannelBuf
                    /**
                     * Resets the current writerIndex in this buffer to the marked writer
                     * index.
                     * @return This stream for chaining
                     */
                    // @ts-ignore
                    resetWrite(): org.spongepowered.api.network.ChannelBuf
                    /**
                     * Returns a slice of this buffer's readable bytes. Modifying the content
                     * of the returned buffer or this buffer affects each other's content
                     * while they maintain separate indexes and marks. This method is
                     * identical to buf.slice(buf.readerIndex(), buf.readableBytes()).
                     * This method does not modify readerIndex or writerIndex of this buffer.
                     * @return The sliced stream
                     */
                    // @ts-ignore
                    slice(): org.spongepowered.api.network.ChannelBuf
                    /**
                     * Returns a slice of this buffer's sub-region. Modifying the content of
                     * the returned buffer or this buffer affects each other's content while
                     * they maintain separate indexes and marks. This method does not modify
                     * readerIndex or writerIndex of this buffer.
                     * @param index The starter index
                     * @param length The ending index
                     * @return The sliced stream
                     */
                    // @ts-ignore
                    slice(index: number /*int*/, length: number /*int*/): org.spongepowered.api.network.ChannelBuf
                    /**
                     * Returns {@code true} if and only if this buffer has a backing byte array.
                     * <p>If this method returns true, you can safely call {@link #array()}.</p>
                     * @return {#code true} if this buffer has a backing byte array
                     */
                    // @ts-ignore
                    hasArray(): boolean
                    /**
                     * Gets the backing byte array of this stream.
                     * @return A copy of the backing byte array
                     * @throws UnsupportedOperationException if there is no backing byte array
                     */
                    // @ts-ignore
                    array(): number /*byte*/[]
                    /**
                     * Sets the specified boolean at the current writerIndex and increases
                     * the writerIndex by 1 in this buffer.
                     * @param data The boolean data
                     * @return This stream for chaining
                     */
                    // @ts-ignore
                    writeBoolean(data: boolean): org.spongepowered.api.network.ChannelBuf
                    /**
                     * Sets the boolean at the specified absolute index in this
                     * buffer. This method does not modify readerIndex or writerIndex
                     * of this buffer.
                     * @param index The index
                     * @param data The boolean data
                     * @return This stream for chaining
                     */
                    // @ts-ignore
                    setBoolean(index: number /*int*/, data: boolean): org.spongepowered.api.network.ChannelBuf
                    /**
                     * Gets a boolean at the current readerIndex and increases the
                     * readerIndex by 1 in this buffer.
                     * @return The boolean
                     */
                    // @ts-ignore
                    readBoolean(): boolean
                    /**
                     * Gets a boolean at the specified absolute index in this buffer.
                     * @param index The index
                     * @return The boolean
                     */
                    // @ts-ignore
                    getBoolean(index: number /*int*/): boolean
                    /**
                     * Sets the specified byte at the current writerIndex and increases
                     * the writerIndex by 1 in this buffer.
                     * @param data The byte data
                     * @return This stream for chaining
                     */
                    // @ts-ignore
                    writeByte(data: number /*byte*/): org.spongepowered.api.network.ChannelBuf
                    /**
                     * Sets the byte at the specified absolute index in this
                     * buffer. This method does not modify readerIndex or writerIndex
                     * of this buffer.
                     * @param index The index
                     * @param data The byte data
                     * @return This stream for chaining
                     */
                    // @ts-ignore
                    setByte(index: number /*int*/, data: number /*byte*/): org.spongepowered.api.network.ChannelBuf
                    /**
                     * Gets a byte at the current readerIndex and increases the
                     * readerIndex by 1 in this buffer.
                     * @return The byte
                     */
                    // @ts-ignore
                    readByte(): number /*byte*/
                    /**
                     * Gets a byte at the specified absolute index in this buffer.
                     * @param index The index
                     * @return The byte
                     */
                    // @ts-ignore
                    getByte(index: number /*int*/): number /*byte*/
                    /**
                     * Sets the specified byte array at the current writerIndex and increases
                     * the writerIndex by the number of bytes and the size of the length as a
                     * varint.
                     * <p>The length of the array is written preceding the data as a varint.</p>
                     * @param data The byte array data
                     * @return This stream for chaining
                     */
                    // @ts-ignore
                    writeByteArray(data: number /*byte*/[]): org.spongepowered.api.network.ChannelBuf
                    /**
                     * Sets the specified byte array at the current writerIndex and increases
                     * the writerIndex by the length specified and the size of the length as a
                     * varint.
                     * <p>The length of the array is written preceding the data as a varint.</p>
                     * @param data The byte array data
                     * @param start The starting index of the source array to start reading from
                     * @param length The length of bytes to read from the source array
                     * @return This stream for chaining
                     */
                    // @ts-ignore
                    writeByteArray(data: number /*byte*/[], start: number /*int*/, length: number /*int*/): org.spongepowered.api.network.ChannelBuf
                    /**
                     * Sets the specified byte array at the specified absolute index in this
                     * buffer. This method does not modify readerIndex or writerIndex
                     * of this buffer.
                     * <p>The length of the array is written preceding the data as a varint.</p>
                     * @param index The index
                     * @param data The byte array data
                     * @return This stream for chaining
                     */
                    // @ts-ignore
                    setByteArray(index: number /*int*/, data: number /*byte*/[]): org.spongepowered.api.network.ChannelBuf
                    /**
                     * Sets the specified byte array at the specified absolute index in this
                     * buffer. This method does not modify readerIndex or writerIndex
                     * of this buffer.
                     * <p>The length of the array is written preceding the data as a varint.</p>
                     * @param index The index
                     * @param data The byte array data
                     * @param start The starting index of the source array to start reading from
                     * @param length The length of bytes to read from the source array
                     * @return This stream for chaining
                     */
                    // @ts-ignore
                    setByteArray(index: number /*int*/, data: number /*byte*/[], start: number /*int*/, length: number /*int*/): org.spongepowered.api.network.ChannelBuf
                    /**
                     * Gets a byte array at the current readerIndex and increases the
                     * readerIndex by the length of the array and the length of the array size.
                     * <p>The length of the array is expected to be preceding the array as a
                     * varint.</p>
                     * @return The byte array
                     */
                    // @ts-ignore
                    readByteArray(): number /*byte*/[]
                    /**
                     * Gets a byte array at the specified absolute index in this buffer.
                     * <p>The length of the array is expected to be preceding the array as a
                     * varint.</p>
                     * @param index The index to read the byte array at
                     * @return The byte array
                     */
                    // @ts-ignore
                    readByteArray(index: number /*int*/): number /*byte*/[]
                    /**
                     * Sets the specified byte array at the current writerIndex and increases
                     * the writerIndex by the number of bytes.
                     * @param data The byte array data
                     * @return This stream for chaining
                     */
                    // @ts-ignore
                    writeBytes(data: number /*byte*/[]): org.spongepowered.api.network.ChannelBuf
                    /**
                     * Sets the specified byte array at the current writerIndex and increases
                     * the writerIndex by the length specified.
                     * @param data The byte array data
                     * @param start The starting index of the source array to start reading from
                     * @param length The length of bytes to read from the source array
                     * @return This stream for chaining
                     */
                    // @ts-ignore
                    writeBytes(data: number /*byte*/[], start: number /*int*/, length: number /*int*/): org.spongepowered.api.network.ChannelBuf
                    /**
                     * Sets the specified byte array at the specified absolute index in this
                     * buffer. This method does not modify readerIndex or writerIndex
                     * of this buffer.
                     * @param index The index
                     * @param data The byte array data
                     * @return This stream for chaining
                     */
                    // @ts-ignore
                    setBytes(index: number /*int*/, data: number /*byte*/[]): org.spongepowered.api.network.ChannelBuf
                    /**
                     * Sets the specified byte array at the specified absolute index in this
                     * buffer. This method does not modify readerIndex or writerIndex
                     * of this buffer.
                     * @param index The index
                     * @param data The byte array data
                     * @param start The starting index of the source array to start reading from
                     * @param length The length of bytes to read from the source array
                     * @return This stream for chaining
                     */
                    // @ts-ignore
                    setBytes(index: number /*int*/, data: number /*byte*/[], start: number /*int*/, length: number /*int*/): org.spongepowered.api.network.ChannelBuf
                    /**
                     * Gets a byte array at the current readerIndex and increases the
                     * readerIndex by the length of the array.
                     * @param length The length of the byte array to read from
                     * @return The byte array
                     */
                    // @ts-ignore
                    readBytes(length: number /*int*/): number /*byte*/[]
                    /**
                     * Gets a byte array at the specified absolute index in this buffer.
                     * @param index The index of this channel buff to read from
                     * @param length The length of the byte array
                     * @return The byte array
                     */
                    // @ts-ignore
                    readBytes(index: number /*int*/, length: number /*int*/): number /*byte*/[]
                    /**
                     * Sets the specified short integer at the current writerIndex and
                     * increases the writerIndex by 2 in this buffer.
                     * @param data The short data
                     * @return This stream for chaining
                     */
                    // @ts-ignore
                    writeShort(data: number /*short*/): org.spongepowered.api.network.ChannelBuf
                    /**
                     * Sets the short at the specified absolute index in this
                     * buffer. This method does not modify readerIndex or writerIndex
                     * of this buffer.
                     * @param index The index
                     * @param data The short data
                     * @return This stream for chaining
                     */
                    // @ts-ignore
                    setShort(index: number /*int*/, data: number /*short*/): org.spongepowered.api.network.ChannelBuf
                    /**
                     * Gets a short integer at the current readerIndex and increases the
                     * readerIndex by 2 in this buffer.
                     * @return The short integer
                     */
                    // @ts-ignore
                    readShort(): number /*short*/
                    /**
                     * Gets a short integer at the specified absolute index in this buffer.
                     * @param index The index
                     * @return The short integer
                     */
                    // @ts-ignore
                    getShort(index: number /*int*/): number /*short*/
                    /**
                     * Sets the specified character at the current writerIndex and
                     * increases the writerIndex by 2 in this buffer.
                     * @param data The char data
                     * @return This stream for chaining
                     */
                    // @ts-ignore
                    writeChar(data: string): org.spongepowered.api.network.ChannelBuf
                    /**
                     * Sets the char at the specified absolute index in this
                     * buffer. This method does not modify readerIndex or writerIndex
                     * of this buffer.
                     * @param index The index
                     * @param data The char data
                     * @return This stream for chaining
                     */
                    // @ts-ignore
                    setChar(index: number /*int*/, data: string): org.spongepowered.api.network.ChannelBuf
                    /**
                     * Gets a character at the current readerIndex and increases the
                     * readerIndex by 2 in this buffer.
                     * @return The character
                     */
                    // @ts-ignore
                    readChar(): string
                    /**
                     * Gets a character at the specified absolute index in this buffer.
                     * @param index The index
                     * @return The character
                     */
                    // @ts-ignore
                    getChar(index: number /*int*/): string
                    /**
                     * Sets the specified integer at the current writerIndex and increases
                     * the writerIndex by 4 in this buffer.
                     * @param data The integer data
                     * @return This stream for chaining
                     */
                    // @ts-ignore
                    writeInteger(data: number /*int*/): org.spongepowered.api.network.ChannelBuf
                    /**
                     * Sets the integer at the specified absolute index in this
                     * buffer. This method does not modify readerIndex or writerIndex
                     * of this buffer.
                     * @param index The index
                     * @param data The integer data
                     * @return This stream for chaining
                     */
                    // @ts-ignore
                    setInteger(index: number /*int*/, data: number /*int*/): org.spongepowered.api.network.ChannelBuf
                    /**
                     * Gets an integer at the current readerIndex and increases the
                     * readerIndex by 4 in this buffer.
                     * @return The integer
                     */
                    // @ts-ignore
                    readInteger(): number /*int*/
                    /**
                     * Gets an integer at the specified absolute index in this buffer.
                     * @param index The index
                     * @return The integer
                     */
                    // @ts-ignore
                    getInteger(index: number /*int*/): number /*int*/
                    /**
                     * Sets the specified long integer at the current writerIndex and
                     * increases the writerIndex by 8 in this buffer.
                     * @param data The long data
                     * @return This stream for chaining
                     */
                    // @ts-ignore
                    writeLong(data: number /*long*/): org.spongepowered.api.network.ChannelBuf
                    /**
                     * Sets the long integer at the specified absolute index in this
                     * buffer. This method does not modify readerIndex or writerIndex
                     * of this buffer.
                     * @param index The index
                     * @param data The long data
                     * @return This stream for chaining
                     */
                    // @ts-ignore
                    setLong(index: number /*int*/, data: number /*long*/): org.spongepowered.api.network.ChannelBuf
                    /**
                     * Gets a long integer at the current readerIndex and increases the
                     * readerIndex by 8 in this buffer.
                     * @return The long integer
                     */
                    // @ts-ignore
                    readLong(): number /*long*/
                    /**
                     * Gets a long integer at the specified absolute index in this buffer.
                     * @param index The index
                     * @return The long integer
                     */
                    // @ts-ignore
                    getLong(index: number /*int*/): number /*long*/
                    /**
                     * Sets the specified float at the current writerIndex and increases
                     * the writerIndex by 4 in this buffer.
                     * @param data The float data
                     * @return This stream for chaining
                     */
                    // @ts-ignore
                    writeFloat(data: number /*float*/): org.spongepowered.api.network.ChannelBuf
                    /**
                     * Sets the float at the specified absolute index in this
                     * buffer. This method does not modify readerIndex or writerIndex
                     * of this buffer.
                     * @param index The index
                     * @param data The float data
                     * @return This stream for chaining
                     */
                    // @ts-ignore
                    setFloat(index: number /*int*/, data: number /*float*/): org.spongepowered.api.network.ChannelBuf
                    /**
                     * Gets a float at the current readerIndex and increases the
                     * readerIndex by 4 in this buffer.
                     * @return The float
                     */
                    // @ts-ignore
                    readFloat(): number /*float*/
                    /**
                     * Gets a float at the specified absolute index in this buffer.
                     * @param index The index
                     * @return The string
                     */
                    // @ts-ignore
                    getFloat(index: number /*int*/): number /*float*/
                    /**
                     * Sets the specified double at the current writerIndex and increases
                     * the writerIndex by 8 in this buffer.
                     * @param data The double data
                     * @return This stream for chaining
                     */
                    // @ts-ignore
                    writeDouble(data: number /*double*/): org.spongepowered.api.network.ChannelBuf
                    /**
                     * Sets the double at the specified absolute index in this
                     * buffer. This method does not modify readerIndex or writerIndex
                     * of this buffer.
                     * @param index The index
                     * @param data The double data
                     * @return This stream for chaining
                     */
                    // @ts-ignore
                    setDouble(index: number /*int*/, data: number /*double*/): org.spongepowered.api.network.ChannelBuf
                    /**
                     * Gets a double at the current readerIndex and increases the
                     * readerIndex by 8 in this buffer.
                     * @return The double
                     */
                    // @ts-ignore
                    readDouble(): number /*double*/
                    /**
                     * Gets a double at the specified absolute index in this buffer.
                     * @param index The index
                     * @return The double
                     */
                    // @ts-ignore
                    getDouble(index: number /*int*/): number /*double*/
                    /**
                     * Sets the specified varint at the current writerIndex and increases the
                     * writerIndex by the number of bytes written.
                     * <p>The number of bytes written depends on the size of the value, see <a
                     * href=
                     * "https://developers.google.com/protocol-buffers/docs/encoding#varints">
                     * https://developers.google.com/protocol-buffers/docs/encoding#varints</a>
                     * for a full description.</p>
                     * @param data The varint data
                     * @return This stream for chaining
                     */
                    // @ts-ignore
                    writeVarInt(data: number /*int*/): org.spongepowered.api.network.ChannelBuf
                    /**
                     * Sets the specified varint at the specified absolute index in this buffer.
                     * This method does not modify readerIndex or writerIndex of this buffer.
                     * <p>The number of bytes written depends on the size of the value, see <a
                     * href=
                     * "https://developers.google.com/protocol-buffers/docs/encoding#varints">
                     * https://developers.google.com/protocol-buffers/docs/encoding#varints</a>
                     * for a full description.</p>
                     * @param index The index
                     * @param data The varint data
                     * @return This stream for chaining
                     */
                    // @ts-ignore
                    setVarInt(index: number /*int*/, data: number /*int*/): org.spongepowered.api.network.ChannelBuf
                    /**
                     * Gets a varint at the current readerIndex and increases the readerIndex by
                     * the number of bytes read.
                     * <p>The number of bytes read depends on the size of the value, see <a
                     * href=
                     * "https://developers.google.com/protocol-buffers/docs/encoding#varints">
                     * https://developers.google.com/protocol-buffers/docs/encoding#varints</a>
                     * for a full description.</p>
                     * @return The varint
                     */
                    // @ts-ignore
                    readVarInt(): number /*int*/
                    /**
                     * Gets a varint at the specified absolute index in this buffer.
                     * <p>The number of bytes read depends on the size of the value, see <a
                     * href=
                     * "https://developers.google.com/protocol-buffers/docs/encoding#varints">
                     * https://developers.google.com/protocol-buffers/docs/encoding#varints</a>
                     * for a full description.</p>
                     * @param index The index
                     * @return The double
                     */
                    // @ts-ignore
                    getVarInt(index: number /*int*/): number /*int*/
                    /**
                     * Sets the specified string at the current writerIndex and increases the
                     * writerIndex by the length of the string.
                     * <p>The string will be encoded as the utf length as a varint followed by
                     * the UTF-8 bytes of the string.</p>
                     * @param data The string data
                     * @return This stream for chaining
                     */
                    // @ts-ignore
                    writeString(data: java.lang.String | string): org.spongepowered.api.network.ChannelBuf
                    /**
                     * Sets the string at the specified absolute index in this
                     * buffer. This method does not modify readerIndex or writerIndex
                     * of this buffer.
                     * <p>The string will be encoded as the utf length as a varint followed by
                     * the UTF-8 bytes of the string.</p>
                     * @param index The index
                     * @param data The string data
                     * @return This stream for chaining
                     */
                    // @ts-ignore
                    setString(index: number /*int*/, data: java.lang.String | string): org.spongepowered.api.network.ChannelBuf
                    /**
                     * Gets a string at the current readerIndex and increases the readerIndex by
                     * the length of a varint followed by the utf-8 bytes of the string.
                     * <p>The string will be encoded as the utf length as a varint followed by
                     * the UTF-8 bytes of the string.</p>
                     * @return The string
                     */
                    // @ts-ignore
                    readString(): string
                    /**
                     * Gets a string at the specified absolute index in this buffer.
                     * <p>The string will be encoded as the utf length as a varint followed by
                     * the UTF-8 bytes of the string.</p>
                     * @param index The index
                     * @return The string
                     */
                    // @ts-ignore
                    getString(index: number /*int*/): string
                    /**
                     * Sets the specified string at the current writerIndex and increases the
                     * writerIndex by the length of the string.
                     * <p>The string will be encoded as the utf length as a short followed by
                     * the UTF-8 bytes of the string.</p>
                     * @param data The string data
                     * @return This stream for chaining
                     */
                    // @ts-ignore
                    writeUTF(data: java.lang.String | string): org.spongepowered.api.network.ChannelBuf
                    /**
                     * Sets the string at the specified absolute index in this
                     * buffer. This method does not modify readerIndex or writerIndex
                     * of this buffer.
                     * <p>The string will be encoded as the utf length as a short followed by
                     * the UTF-8 bytes of the string.</p>
                     * @param index The index
                     * @param data The string data
                     * @return This stream for chaining
                     */
                    // @ts-ignore
                    setUTF(index: number /*int*/, data: java.lang.String | string): org.spongepowered.api.network.ChannelBuf
                    /**
                     * Gets a string at the current readerIndex and increases the readerIndex by
                     * the length of a varint followed by the utf-8 bytes of the string.
                     * <p>The string will be encoded as the utf length as a short followed by
                     * the UTF-8 bytes of the string.</p>
                     * @return The string
                     */
                    // @ts-ignore
                    readUTF(): string
                    /**
                     * Gets a string at the specified absolute index in this buffer.
                     * <p>The string will be encoded as the utf length as a short followed by
                     * the UTF-8 bytes of the string.</p>
                     * @param index The index
                     * @return The string
                     */
                    // @ts-ignore
                    getUTF(index: number /*int*/): string
                    /**
                     * Sets the specified {@link UUID} at the current writerIndex and
                     * increases the writerIndex by 16 in this buffer.
                     * @param data The unique id data
                     * @return This stream for chaining
                     */
                    // @ts-ignore
                    writeUniqueId(data: java.util.UUID): org.spongepowered.api.network.ChannelBuf
                    /**
                     * Sets the {@link UUID} at the specified absolute index in this
                     * buffer. This method does not modify readerIndex or writerIndex
                     * of this buffer.
                     * @param index The index
                     * @param data The unique id data
                     * @return This stream for chaining
                     */
                    // @ts-ignore
                    setUniqueId(index: number /*int*/, data: java.util.UUID): org.spongepowered.api.network.ChannelBuf
                    /**
                     * Gets a UUID at the current readerIndex and increases the
                     * readerIndex by 16 in this buffer.
                     * @return This stream for chaining
                     */
                    // @ts-ignore
                    readUniqueId(): java.util.UUID
                    /**
                     * Gets a {@link UUID} at the specified absolute index in this buffer.
                     * @param index The index
                     * @return The uuid
                     */
                    // @ts-ignore
                    getUniqueId(index: number /*int*/): java.util.UUID
                    /**
                     * Sets the specified {@link DataView} at the current writerIndex and
                     * increases the writerIndex according to the length of the data view
                     * in this buffer.
                     * @param data The data view data
                     * @return This stream for chaining
                     */
                    // @ts-ignore
                    writeDataView(data: org.spongepowered.api.data.DataView): org.spongepowered.api.network.ChannelBuf
                    /**
                     * Sets the {@link DataView} at the specified absolute index in this
                     * buffer. This method does not modify readerIndex or writerIndex
                     * of this buffer.
                     * @param index The index
                     * @param data The data view data
                     * @return This stream for chaining
                     */
                    // @ts-ignore
                    setDataView(index: number /*int*/, data: org.spongepowered.api.data.DataView): org.spongepowered.api.network.ChannelBuf
                    /**
                     * Gets a {@link DataView} at the current readerIndex and increases the
                     * readerIndex according to the length of the data view in this buffer.
                     * @return The data view
                     */
                    // @ts-ignore
                    readDataView(): org.spongepowered.api.data.DataView
                    /**
                     * Gets a {@link DataView} at the specified absolute index in this buffer.
                     * @param index The index
                     * @return The data view
                     */
                    // @ts-ignore
                    getDataView(index: number /*int*/): org.spongepowered.api.data.DataView
                }
            }
        }
    }
}
