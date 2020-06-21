declare namespace cn {
    namespace nukkit {
        namespace utils {
            /**
             * Tool class for VarInt or VarLong operations.
             * <p>
             * Some code from http://wiki.vg/Protocol.
             * @author MagicDroidX
             * @author lmlstarqaq
             */
            // @ts-ignore
            class VarInt extends java.lang.Object {
                /**
                 * @param v Signed int
                 * @return Unsigned encoded int
                 */
                // @ts-ignore
                public static encodeZigZag32(v: number /*int*/): number /*long*/
                /**
                 * @param v Unsigned encoded int
                 * @return Signed decoded int
                 */
                // @ts-ignore
                public static decodeZigZag32(v: number /*long*/): number /*int*/
                /**
                 * @param v Signed long
                 * @return Unsigned encoded long
                 */
                // @ts-ignore
                public static encodeZigZag64(v: number /*long*/): number /*long*/
                /**
                 * @param v Signed encoded long
                 * @return Unsigned decoded long
                 */
                // @ts-ignore
                public static decodeZigZag64(v: number /*long*/): number /*long*/
                /**
                 * @param stream BinaryStream
                 * @return Signed int
                 */
                // @ts-ignore
                public static readVarInt(stream: cn.nukkit.utils.BinaryStream): number /*int*/
                /**
                 * @param stream InputStream
                 * @return Signed int
                 */
                // @ts-ignore
                public static readVarInt(stream: java.io.InputStream): number /*int*/
                /**
                 * @param stream BinaryStream
                 * @return Unsigned int
                 */
                // @ts-ignore
                public static readUnsignedVarInt(stream: cn.nukkit.utils.BinaryStream): number /*long*/
                /**
                 * @param stream InputStream
                 * @return Unsigned int
                 */
                // @ts-ignore
                public static readUnsignedVarInt(stream: java.io.InputStream): number /*long*/
                /**
                 * @param stream BinaryStream
                 * @return Signed long
                 */
                // @ts-ignore
                public static readVarLong(stream: cn.nukkit.utils.BinaryStream): number /*long*/
                /**
                 * @param stream InputStream
                 * @return Signed long
                 */
                // @ts-ignore
                public static readVarLong(stream: java.io.InputStream): number /*long*/
                /**
                 * @param stream BinaryStream
                 * @return Unsigned long
                 */
                // @ts-ignore
                public static readUnsignedVarLong(stream: cn.nukkit.utils.BinaryStream): number /*long*/
                /**
                 * @param stream InputStream
                 * @return Unsigned long
                 */
                // @ts-ignore
                public static readUnsignedVarLong(stream: java.io.InputStream): number /*long*/
                /**
                 * @param stream BinaryStream
                 * @param value  Signed int
                 */
                // @ts-ignore
                public static writeVarInt(stream: cn.nukkit.utils.BinaryStream, value: number /*int*/): void
                /**
                 * @param stream OutputStream
                 * @param value  Signed int
                 */
                // @ts-ignore
                public static writeVarInt(stream: java.io.OutputStream, value: number /*int*/): void
                /**
                 * @param stream BinaryStream
                 * @param value  Unsigned int
                 */
                // @ts-ignore
                public static writeUnsignedVarInt(stream: cn.nukkit.utils.BinaryStream, value: number /*long*/): void
                /**
                 * @param stream OutputStream
                 * @param value  Unsigned int
                 */
                // @ts-ignore
                public static writeUnsignedVarInt(stream: java.io.OutputStream, value: number /*long*/): void
                /**
                 * @param stream BinaryStream
                 * @param value  Signed long
                 */
                // @ts-ignore
                public static writeVarLong(stream: cn.nukkit.utils.BinaryStream, value: number /*long*/): void
                /**
                 * @param stream OutputStream
                 * @param value  Signed long
                 */
                // @ts-ignore
                public static writeVarLong(stream: java.io.OutputStream, value: number /*long*/): void
                /**
                 * @param stream BinaryStream
                 * @param value  Unsigned long
                 */
                // @ts-ignore
                public static writeUnsignedVarLong(stream: cn.nukkit.utils.BinaryStream, value: number /*long*/): void
                /**
                 * @param stream OutputStream
                 * @param value  Unsigned long
                 */
                // @ts-ignore
                public static writeUnsignedVarLong(stream: java.io.OutputStream, value: number /*long*/): void
            }
        }
    }
}
