declare namespace cn {
    namespace nukkit {
        namespace utils {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class Binary extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static signByte(value: number /*int*/): number /*int*/
                // @ts-ignore
                public static unsignByte(value: number /*int*/): number /*int*/
                // @ts-ignore
                public static signShort(value: number /*int*/): number /*int*/
                // @ts-ignore
                public unsignShort(value: number /*int*/): number /*int*/
                // @ts-ignore
                public static signInt(value: number /*int*/): number /*int*/
                // @ts-ignore
                public static unsignInt(value: number /*int*/): number /*int*/
                // @ts-ignore
                public static readTriad(bytes: number /*byte*/[]): number /*int*/
                // @ts-ignore
                public static writeTriad(value: number /*int*/): number /*byte*/[]
                // @ts-ignore
                public static readLTriad(bytes: number /*byte*/[]): number /*int*/
                // @ts-ignore
                public static writeLTriad(value: number /*int*/): number /*byte*/[]
                // @ts-ignore
                public static readUUID(bytes: number /*byte*/[]): java.util.UUID
                // @ts-ignore
                public static writeUUID(uuid: java.util.UUID): number /*byte*/[]
                // @ts-ignore
                public static writeMetadata(metadata: cn.nukkit.entity.data.EntityMetadata): number /*byte*/[]
                // @ts-ignore
                public static readMetadata(payload: number /*byte*/[]): cn.nukkit.entity.data.EntityMetadata
                // @ts-ignore
                public static readBool(b: number /*byte*/): boolean
                // @ts-ignore
                public static writeBool(b: boolean): number /*byte*/
                // @ts-ignore
                public static readSignedByte(b: number /*byte*/): number /*int*/
                // @ts-ignore
                public static writeByte(b: number /*byte*/): number /*byte*/
                // @ts-ignore
                public static readShort(bytes: number /*byte*/[]): number /*int*/
                // @ts-ignore
                public static readSignedShort(bytes: number /*byte*/[]): number /*short*/
                // @ts-ignore
                public static writeShort(s: number /*int*/): number /*byte*/[]
                // @ts-ignore
                public static readLShort(bytes: number /*byte*/[]): number /*int*/
                // @ts-ignore
                public static readSignedLShort(bytes: number /*byte*/[]): number /*short*/
                // @ts-ignore
                public static writeLShort(s: number /*int*/): number /*byte*/[]
                // @ts-ignore
                public static readInt(bytes: number /*byte*/[]): number /*int*/
                // @ts-ignore
                public static writeInt(i: number /*int*/): number /*byte*/[]
                // @ts-ignore
                public static readLInt(bytes: number /*byte*/[]): number /*int*/
                // @ts-ignore
                public static writeLInt(i: number /*int*/): number /*byte*/[]
                // @ts-ignore
                public static readFloat(bytes: number /*byte*/[]): number /*float*/
                // @ts-ignore
                public static readFloat(bytes: number /*byte*/[], accuracy: number /*int*/): number /*float*/
                // @ts-ignore
                public static writeFloat(f: number /*float*/): number /*byte*/[]
                // @ts-ignore
                public static readLFloat(bytes: number /*byte*/[]): number /*float*/
                // @ts-ignore
                public static readLFloat(bytes: number /*byte*/[], accuracy: number /*int*/): number /*float*/
                // @ts-ignore
                public static writeLFloat(f: number /*float*/): number /*byte*/[]
                // @ts-ignore
                public static readDouble(bytes: number /*byte*/[]): number /*double*/
                // @ts-ignore
                public static writeDouble(d: number /*double*/): number /*byte*/[]
                // @ts-ignore
                public static readLDouble(bytes: number /*byte*/[]): number /*double*/
                // @ts-ignore
                public static writeLDouble(d: number /*double*/): number /*byte*/[]
                // @ts-ignore
                public static readLong(bytes: number /*byte*/[]): number /*long*/
                // @ts-ignore
                public static writeLong(l: number /*long*/): number /*byte*/[]
                // @ts-ignore
                public static readLLong(bytes: number /*byte*/[]): number /*long*/
                // @ts-ignore
                public static writeLLong(l: number /*long*/): number /*byte*/[]
                // @ts-ignore
                public static writeVarInt(v: number /*int*/): number /*byte*/[]
                // @ts-ignore
                public static writeUnsignedVarInt(v: number /*long*/): number /*byte*/[]
                // @ts-ignore
                public static reserveBytes(bytes: number /*byte*/[]): number /*byte*/[]
                // @ts-ignore
                public static bytesToHexString(src: number /*byte*/[]): string
                // @ts-ignore
                public static bytesToHexString(src: number /*byte*/[], blank: boolean): string
                // @ts-ignore
                public static hexStringToBytes(hexString: java.lang.String | string): number /*byte*/[]
                // @ts-ignore
                public static subBytes(bytes: number /*byte*/[], start: number /*int*/, length: number /*int*/): number /*byte*/[]
                // @ts-ignore
                public static subBytes(bytes: number /*byte*/[], start: number /*int*/): number /*byte*/[]
                // @ts-ignore
                public static splitBytes(bytes: number /*byte*/[], chunkSize: number /*int*/): number /*byte*/[][]
                // @ts-ignore
                public static appendBytes(bytes: number /*byte*/[][]): number /*byte*/[]
                // @ts-ignore
                public static appendBytes(byte1: number /*byte*/, ...bytes2: number /*byte*/[][]): number /*byte*/[]
                // @ts-ignore
                public static appendBytes(bytes1: number /*byte*/[], ...bytes2: number /*byte*/[][]): number /*byte*/[]
            }
        }
    }
}
