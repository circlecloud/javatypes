declare namespace java {
    namespace util {
        namespace zip {
            /**
             * This class is used to represent a ZIP file entry.
             * @author David Connelly
             */
            // @ts-ignore
            class ZipEntry extends java.lang.Object implements java.util.zip.ZipConstants, java.lang.Cloneable {
                /**
                 * Creates a new zip entry with the specified name.
                 * @param name
                 *          The entry name
                 * @throws NullPointerException if the entry name is null
                 * @throws IllegalArgumentException if the entry name is longer than
                 *          0xFFFF bytes
                 */
                // @ts-ignore
                constructor(name: string)
                /**
                 * Creates a new zip entry with fields taken from the specified
                 * zip entry.
                 * @param e
                 *          A zip Entry object
                 * @throws NullPointerException if the entry object is null
                 */
                // @ts-ignore
                constructor(e: java.util.zip.ZipEntry)
                /**
                 * Compression method for uncompressed entries.
                 */
                // @ts-ignore
                readonly STORED: number /*int*/
                /**
                 * Compression method for compressed (deflated) entries.
                 */
                // @ts-ignore
                readonly DEFLATED: number /*int*/
                /**
                 * Returns the name of the entry.
                 * @return the name of the entry
                 */
                // @ts-ignore
                getName(): java.lang.String
                /**
                 * Sets the last modification time of the entry.
                 * <p> If the entry is output to a ZIP file or ZIP file formatted
                 * output stream the last modification time set by this method will
                 * be stored into the {@code date and time fields} of the zip file
                 * entry and encoded in standard {@code MS-DOS date and time format}.
                 * The {@link java.util.TimeZone#getDefault() default TimeZone} is
                 * used to convert the epoch time to the MS-DOS data and time.
                 * @param time
                 *          The last modification time of the entry in milliseconds
                 *          since the epoch
                 * @see #getTime()
                 * @see #getLastModifiedTime()
                 */
                // @ts-ignore
                setTime(time: number /*long*/): void
                /**
                 * Returns the last modification time of the entry.
                 * <p> If the entry is read from a ZIP file or ZIP file formatted
                 * input stream, this is the last modification time from the {@code
                 * date and time fields} of the zip file entry. The
                 * {@link java.util.TimeZone#getDefault() default TimeZone} is used
                 * to convert the standard MS-DOS formatted date and time to the
                 * epoch time.
                 * @return The last modification time of the entry in milliseconds
                 *           since the epoch, or -1 if not specified
                 * @see #setTime(long)
                 * @see #setLastModifiedTime(FileTime)
                 */
                // @ts-ignore
                getTime(): long
                /**
                 * Sets the last modification time of the entry.
                 * <p> When output to a ZIP file or ZIP file formatted output stream
                 * the last modification time set by this method will be stored into
                 * zip file entry's {@code date and time fields} in {@code standard
                 * MS-DOS date and time format}), and the extended timestamp fields
                 * in {@code optional extra data} in UTC time.
                 * @param time
                 *          The last modification time of the entry
                 * @return This zip entry
                 * @throws NullPointerException if the {#code time} is null
                 * @see #getLastModifiedTime()
                 * @since 1.8
                 */
                // @ts-ignore
                setLastModifiedTime(time: java.nio.file.attribute.FileTime): java.util.zip.ZipEntry
                /**
                 * Returns the last modification time of the entry.
                 * <p> If the entry is read from a ZIP file or ZIP file formatted
                 * input stream, this is the last modification time from the zip
                 * file entry's {@code optional extra data} if the extended timestamp
                 * fields are present. Otherwise the last modification time is read
                 * from the entry's {@code date and time fields}, the {@link
                 * java.util.TimeZone#getDefault() default TimeZone} is used to convert
                 * the standard MS-DOS formatted date and time to the epoch time.
                 * @return The last modification time of the entry, null if not specified
                 * @see #setLastModifiedTime(FileTime)
                 * @since 1.8
                 */
                // @ts-ignore
                getLastModifiedTime(): java.nio.file.attribute.FileTime
                /**
                 * Sets the last access time of the entry.
                 * <p> If set, the last access time will be stored into the extended
                 * timestamp fields of entry's {@code optional extra data}, when output
                 * to a ZIP file or ZIP file formatted stream.
                 * @param time
                 *          The last access time of the entry
                 * @return This zip entry
                 * @throws NullPointerException if the {#code time} is null
                 * @see #getLastAccessTime()
                 * @since 1.8
                 */
                // @ts-ignore
                setLastAccessTime(time: java.nio.file.attribute.FileTime): java.util.zip.ZipEntry
                /**
                 * Returns the last access time of the entry.
                 * <p> The last access time is from the extended timestamp fields
                 * of entry's {@code optional extra data} when read from a ZIP file
                 * or ZIP file formatted stream.
                 * @return The last access time of the entry, null if not specified
                 * @see #setLastAccessTime(FileTime)
                 * @since 1.8
                 */
                // @ts-ignore
                getLastAccessTime(): java.nio.file.attribute.FileTime
                /**
                 * Sets the creation time of the entry.
                 * <p> If set, the creation time will be stored into the extended
                 * timestamp fields of entry's {@code optional extra data}, when
                 * output to a ZIP file or ZIP file formatted stream.
                 * @param time
                 *          The creation time of the entry
                 * @return This zip entry
                 * @throws NullPointerException if the {#code time} is null
                 * @see #getCreationTime()
                 * @since 1.8
                 */
                // @ts-ignore
                setCreationTime(time: java.nio.file.attribute.FileTime): java.util.zip.ZipEntry
                /**
                 * Returns the creation time of the entry.
                 * <p> The creation time is from the extended timestamp fields of
                 * entry's {@code optional extra data} when read from a ZIP file
                 * or ZIP file formatted stream.
                 * @return the creation time of the entry, null if not specified
                 * @see #setCreationTime(FileTime)
                 * @since 1.8
                 */
                // @ts-ignore
                getCreationTime(): java.nio.file.attribute.FileTime
                /**
                 * Sets the uncompressed size of the entry data.
                 * @param size the uncompressed size in bytes
                 * @throws IllegalArgumentException if the specified size is less
                 *          than 0, is greater than 0xFFFFFFFF when
                 *          <a href="package-summary.html#zip64">ZIP64 format</a> is not supported,
                 *          or is less than 0 when ZIP64 is supported
                 * @see #getSize()
                 */
                // @ts-ignore
                setSize(size: number /*long*/): void
                /**
                 * Returns the uncompressed size of the entry data.
                 * @return the uncompressed size of the entry data, or -1 if not known
                 * @see #setSize(long)
                 */
                // @ts-ignore
                getSize(): long
                /**
                 * Returns the size of the compressed entry data.
                 * <p> In the case of a stored entry, the compressed size will be the same
                 * as the uncompressed size of the entry.
                 * @return the size of the compressed entry data, or -1 if not known
                 * @see #setCompressedSize(long)
                 */
                // @ts-ignore
                getCompressedSize(): long
                /**
                 * Sets the size of the compressed entry data.
                 * @param csize the compressed size to set to
                 * @see #getCompressedSize()
                 */
                // @ts-ignore
                setCompressedSize(csize: number /*long*/): void
                /**
                 * Sets the CRC-32 checksum of the uncompressed entry data.
                 * @param crc the CRC-32 value
                 * @throws IllegalArgumentException if the specified CRC-32 value is
                 *          less than 0 or greater than 0xFFFFFFFF
                 * @see #getCrc()
                 */
                // @ts-ignore
                setCrc(crc: number /*long*/): void
                /**
                 * Returns the CRC-32 checksum of the uncompressed entry data.
                 * @return the CRC-32 checksum of the uncompressed entry data, or -1 if
                 *  not known
                 * @see #setCrc(long)
                 */
                // @ts-ignore
                getCrc(): long
                /**
                 * Sets the compression method for the entry.
                 * @param method the compression method, either STORED or DEFLATED
                 * @throws IllegalArgumentException if the specified compression
                 *           method is invalid
                 * @see #getMethod()
                 */
                // @ts-ignore
                setMethod(method: number /*int*/): void
                /**
                 * Returns the compression method of the entry.
                 * @return the compression method of the entry, or -1 if not specified
                 * @see #setMethod(int)
                 */
                // @ts-ignore
                getMethod(): int
                /**
                 * Sets the optional extra field data for the entry.
                 * <p> Invoking this method may change this entry's last modification
                 * time, last access time and creation time, if the {@code extra} field
                 * data includes the extensible timestamp fields, such as {@code NTFS tag
                 * 0x0001} or {@code Info-ZIP Extended Timestamp}, as specified in
                 * <a href="http://www.info-zip.org/doc/appnote-19970311-iz.zip">Info-ZIP
                 * Application Note 970311</a>.
                 * @param extra
                 *          The extra field data bytes
                 * @throws IllegalArgumentException if the length of the specified
                 *          extra field data is greater than 0xFFFF bytes
                 * @see #getExtra()
                 */
                // @ts-ignore
                setExtra(extra: number /*byte*/[]): void
                /**
                 * Returns the extra field data for the entry.
                 * @return the extra field data for the entry, or null if none
                 * @see #setExtra(byte[])
                 */
                // @ts-ignore
                getExtra(): byte[]
                /**
                 * Sets the optional comment string for the entry.
                 * <p>ZIP entry comments have maximum length of 0xffff. If the length of the
                 * specified comment string is greater than 0xFFFF bytes after encoding, only
                 * the first 0xFFFF bytes are output to the ZIP file entry.
                 * @param comment the comment string
                 * @see #getComment()
                 */
                // @ts-ignore
                setComment(comment: string): void
                /**
                 * Returns the comment string for the entry.
                 * @return the comment string for the entry, or null if none
                 * @see #setComment(String)
                 */
                // @ts-ignore
                getComment(): java.lang.String
                /**
                 * Returns true if this is a directory entry. A directory entry is
                 * defined to be one whose name ends with a '/'.
                 * @return true if this is a directory entry
                 */
                // @ts-ignore
                isDirectory(): boolean
                /**
                 * Returns a string representation of the ZIP entry.
                 */
                // @ts-ignore
                toString(): java.lang.String
                /**
                 * Returns the hash code value for this entry.
                 */
                // @ts-ignore
                hashCode(): int
                /**
                 * Returns a copy of this entry.
                 */
                // @ts-ignore
                clone(): java.lang.Object
            }
        }
    }
}
