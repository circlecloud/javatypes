declare namespace cn {
    namespace nukkit {
        namespace nbt {
            /**
             * A Named Binary Tag library for Nukkit Project
             */
            // @ts-ignore
            class NBTIO extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static putItemHelper(item: cn.nukkit.item.Item): cn.nukkit.nbt.tag.CompoundTag
                // @ts-ignore
                public static putItemHelper(item: cn.nukkit.item.Item, slot: java.lang.Integer | number): cn.nukkit.nbt.tag.CompoundTag
                // @ts-ignore
                public static getItemHelper(tag: cn.nukkit.nbt.tag.CompoundTag): cn.nukkit.item.Item
                // @ts-ignore
                public static read(file: java.io.File): cn.nukkit.nbt.tag.CompoundTag
                // @ts-ignore
                public static read(file: java.io.File, endianness: java.nio.ByteOrder): cn.nukkit.nbt.tag.CompoundTag
                // @ts-ignore
                public static read(inputStream: java.io.InputStream): cn.nukkit.nbt.tag.CompoundTag
                // @ts-ignore
                public static read(inputStream: java.io.InputStream, endianness: java.nio.ByteOrder): cn.nukkit.nbt.tag.CompoundTag
                // @ts-ignore
                public static read(inputStream: java.io.InputStream, endianness: java.nio.ByteOrder, network: boolean): cn.nukkit.nbt.tag.CompoundTag
                // @ts-ignore
                public static readTag(inputStream: java.io.InputStream, endianness: java.nio.ByteOrder, network: boolean): cn.nukkit.nbt.tag.Tag
                // @ts-ignore
                public static read(data: number /*byte*/[]): cn.nukkit.nbt.tag.CompoundTag
                // @ts-ignore
                public static read(data: number /*byte*/[], endianness: java.nio.ByteOrder): cn.nukkit.nbt.tag.CompoundTag
                // @ts-ignore
                public static read(data: number /*byte*/[], endianness: java.nio.ByteOrder, network: boolean): cn.nukkit.nbt.tag.CompoundTag
                // @ts-ignore
                public static readCompressed(inputStream: java.io.InputStream): cn.nukkit.nbt.tag.CompoundTag
                // @ts-ignore
                public static readCompressed(inputStream: java.io.InputStream, endianness: java.nio.ByteOrder): cn.nukkit.nbt.tag.CompoundTag
                // @ts-ignore
                public static readCompressed(data: number /*byte*/[]): cn.nukkit.nbt.tag.CompoundTag
                // @ts-ignore
                public static readCompressed(data: number /*byte*/[], endianness: java.nio.ByteOrder): cn.nukkit.nbt.tag.CompoundTag
                // @ts-ignore
                public static readNetworkCompressed(inputStream: java.io.InputStream): cn.nukkit.nbt.tag.CompoundTag
                // @ts-ignore
                public static readNetworkCompressed(inputStream: java.io.InputStream, endianness: java.nio.ByteOrder): cn.nukkit.nbt.tag.CompoundTag
                // @ts-ignore
                public static readNetworkCompressed(data: number /*byte*/[]): cn.nukkit.nbt.tag.CompoundTag
                // @ts-ignore
                public static readNetworkCompressed(data: number /*byte*/[], endianness: java.nio.ByteOrder): cn.nukkit.nbt.tag.CompoundTag
                // @ts-ignore
                public static write(tag: cn.nukkit.nbt.tag.CompoundTag): number /*byte*/[]
                // @ts-ignore
                public static write(tag: cn.nukkit.nbt.tag.CompoundTag, endianness: java.nio.ByteOrder): number /*byte*/[]
                // @ts-ignore
                public static write(tag: cn.nukkit.nbt.tag.CompoundTag, endianness: java.nio.ByteOrder, network: boolean): number /*byte*/[]
                // @ts-ignore
                public static write(tag: cn.nukkit.nbt.tag.Tag, endianness: java.nio.ByteOrder, network: boolean): number /*byte*/[]
                // @ts-ignore
                public static write(tags: java.util.Collection<cn.nukkit.nbt.tag.CompoundTag> | Array<cn.nukkit.nbt.tag.CompoundTag>): number /*byte*/[]
                // @ts-ignore
                public static write(tags: java.util.Collection<cn.nukkit.nbt.tag.CompoundTag> | Array<cn.nukkit.nbt.tag.CompoundTag>, endianness: java.nio.ByteOrder): number /*byte*/[]
                // @ts-ignore
                public static write(tags: java.util.Collection<cn.nukkit.nbt.tag.CompoundTag> | Array<cn.nukkit.nbt.tag.CompoundTag>, endianness: java.nio.ByteOrder, network: boolean): number /*byte*/[]
                // @ts-ignore
                public static write(tag: cn.nukkit.nbt.tag.CompoundTag, file: java.io.File): void
                // @ts-ignore
                public static write(tag: cn.nukkit.nbt.tag.CompoundTag, file: java.io.File, endianness: java.nio.ByteOrder): void
                // @ts-ignore
                public static write(tag: cn.nukkit.nbt.tag.CompoundTag, outputStream: java.io.OutputStream): void
                // @ts-ignore
                public static write(tag: cn.nukkit.nbt.tag.CompoundTag, outputStream: java.io.OutputStream, endianness: java.nio.ByteOrder): void
                // @ts-ignore
                public static write(tag: cn.nukkit.nbt.tag.CompoundTag, outputStream: java.io.OutputStream, endianness: java.nio.ByteOrder, network: boolean): void
                // @ts-ignore
                public static writeNetwork(tag: cn.nukkit.nbt.tag.Tag): number /*byte*/[]
                // @ts-ignore
                public static writeGZIPCompressed(tag: cn.nukkit.nbt.tag.CompoundTag): number /*byte*/[]
                // @ts-ignore
                public static writeGZIPCompressed(tag: cn.nukkit.nbt.tag.CompoundTag, endianness: java.nio.ByteOrder): number /*byte*/[]
                // @ts-ignore
                public static writeGZIPCompressed(tag: cn.nukkit.nbt.tag.CompoundTag, outputStream: java.io.OutputStream): void
                // @ts-ignore
                public static writeGZIPCompressed(tag: cn.nukkit.nbt.tag.CompoundTag, outputStream: java.io.OutputStream, endianness: java.nio.ByteOrder): void
                // @ts-ignore
                public static writeNetworkGZIPCompressed(tag: cn.nukkit.nbt.tag.CompoundTag): number /*byte*/[]
                // @ts-ignore
                public static writeNetworkGZIPCompressed(tag: cn.nukkit.nbt.tag.CompoundTag, endianness: java.nio.ByteOrder): number /*byte*/[]
                // @ts-ignore
                public static writeNetworkGZIPCompressed(tag: cn.nukkit.nbt.tag.CompoundTag, outputStream: java.io.OutputStream): void
                // @ts-ignore
                public static writeNetworkGZIPCompressed(tag: cn.nukkit.nbt.tag.CompoundTag, outputStream: java.io.OutputStream, endianness: java.nio.ByteOrder): void
                // @ts-ignore
                public static writeZLIBCompressed(tag: cn.nukkit.nbt.tag.CompoundTag, outputStream: java.io.OutputStream): void
                // @ts-ignore
                public static writeZLIBCompressed(tag: cn.nukkit.nbt.tag.CompoundTag, outputStream: java.io.OutputStream, endianness: java.nio.ByteOrder): void
                // @ts-ignore
                public static writeZLIBCompressed(tag: cn.nukkit.nbt.tag.CompoundTag, outputStream: java.io.OutputStream, level: number /*int*/): void
                // @ts-ignore
                public static writeZLIBCompressed(tag: cn.nukkit.nbt.tag.CompoundTag, outputStream: java.io.OutputStream, level: number /*int*/, endianness: java.nio.ByteOrder): void
                // @ts-ignore
                public static safeWrite(tag: cn.nukkit.nbt.tag.CompoundTag, file: java.io.File): void
            }
        }
    }
}
