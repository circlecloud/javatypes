declare namespace java {
    namespace io {
        /**
         * Constants written into the Object Serialization Stream.
         * @author unascribed
         * @since JDK 1.1
         */
        // @ts-ignore
        interface ObjectStreamConstants {
            /**
             * Magic number that is written to the stream header.
             */
            // @ts-ignore
            readonly STREAM_MAGIC: number /*short*/
            /**
             * Version number that is written to the stream header.
             */
            // @ts-ignore
            readonly STREAM_VERSION: number /*short*/
            /**
             * First tag value.
             */
            // @ts-ignore
            readonly TC_BASE: number /*byte*/
            /**
             * Null object reference.
             */
            // @ts-ignore
            readonly TC_NULL: number /*byte*/
            /**
             * Reference to an object already written into the stream.
             */
            // @ts-ignore
            readonly TC_REFERENCE: number /*byte*/
            /**
             * new Class Descriptor.
             */
            // @ts-ignore
            readonly TC_CLASSDESC: number /*byte*/
            /**
             * new Object.
             */
            // @ts-ignore
            readonly TC_OBJECT: number /*byte*/
            /**
             * new String.
             */
            // @ts-ignore
            readonly TC_STRING: number /*byte*/
            /**
             * new Array.
             */
            // @ts-ignore
            readonly TC_ARRAY: number /*byte*/
            /**
             * Reference to Class.
             */
            // @ts-ignore
            readonly TC_CLASS: number /*byte*/
            /**
             * Block of optional data. Byte following tag indicates number
             * of bytes in this block data.
             */
            // @ts-ignore
            readonly TC_BLOCKDATA: number /*byte*/
            /**
             * End of optional block data blocks for an object.
             */
            // @ts-ignore
            readonly TC_ENDBLOCKDATA: number /*byte*/
            /**
             * Reset stream context. All handles written into stream are reset.
             */
            // @ts-ignore
            readonly TC_RESET: number /*byte*/
            /**
             * long Block data. The long following the tag indicates the
             * number of bytes in this block data.
             */
            // @ts-ignore
            readonly TC_BLOCKDATALONG: number /*byte*/
            /**
             * Exception during write.
             */
            // @ts-ignore
            readonly TC_EXCEPTION: number /*byte*/
            /**
             * Long string.
             */
            // @ts-ignore
            readonly TC_LONGSTRING: number /*byte*/
            /**
             * new Proxy Class Descriptor.
             */
            // @ts-ignore
            readonly TC_PROXYCLASSDESC: number /*byte*/
            /**
             * new Enum constant.
             * @since 1.5
             */
            // @ts-ignore
            readonly TC_ENUM: number /*byte*/
            /**
             * Last tag value.
             */
            // @ts-ignore
            readonly TC_MAX: number /*byte*/
            /**
             * First wire handle to be assigned.
             */
            // @ts-ignore
            readonly baseWireHandle: number /*int*/
            /**
             * Bit mask for ObjectStreamClass flag. Indicates a Serializable class
             * defines its own writeObject method.
             */
            // @ts-ignore
            readonly SC_WRITE_METHOD: number /*byte*/
            /**
             * Bit mask for ObjectStreamClass flag. Indicates Externalizable data
             * written in Block Data mode.
             * Added for PROTOCOL_VERSION_2.
             * @see #PROTOCOL_VERSION_2
             * @since 1.2
             */
            // @ts-ignore
            readonly SC_BLOCK_DATA: number /*byte*/
            /**
             * Bit mask for ObjectStreamClass flag. Indicates class is Serializable.
             */
            // @ts-ignore
            readonly SC_SERIALIZABLE: number /*byte*/
            /**
             * Bit mask for ObjectStreamClass flag. Indicates class is Externalizable.
             */
            // @ts-ignore
            readonly SC_EXTERNALIZABLE: number /*byte*/
            /**
             * Bit mask for ObjectStreamClass flag. Indicates class is an enum type.
             * @since 1.5
             */
            // @ts-ignore
            readonly SC_ENUM: number /*byte*/
            /**
             * Enable substitution of one object for another during
             * serialization/deserialization.
             * @see java.io.ObjectOutputStream#enableReplaceObject(boolean)
             * @see java.io.ObjectInputStream#enableResolveObject(boolean)
             * @since 1.2
             */
            // @ts-ignore
            readonly SUBSTITUTION_PERMISSION: java.io.SerializablePermission
            /**
             * Enable overriding of readObject and writeObject.
             * @see java.io.ObjectOutputStream#writeObjectOverride(Object)
             * @see java.io.ObjectInputStream#readObjectOverride()
             * @since 1.2
             */
            // @ts-ignore
            readonly SUBCLASS_IMPLEMENTATION_PERMISSION: java.io.SerializablePermission
            /**
             * A Stream Protocol Version. <p>
             * All externalizable data is written in JDK 1.1 external data
             * format after calling this method. This version is needed to write
             * streams containing Externalizable data that can be read by
             * pre-JDK 1.1.6 JVMs.
             * @see java.io.ObjectOutputStream#useProtocolVersion(int)
             * @since 1.2
             */
            // @ts-ignore
            readonly PROTOCOL_VERSION_1: number /*int*/
            /**
             * A Stream Protocol Version. <p>
             * This protocol is written by JVM 1.2.
             * Externalizable data is written in block data mode and is
             * terminated with TC_ENDBLOCKDATA. Externalizable class descriptor
             * flags has SC_BLOCK_DATA enabled. JVM 1.1.6 and greater can
             * read this format change.
             * Enables writing a nonSerializable class descriptor into the
             * stream. The serialVersionUID of a nonSerializable class is
             * set to 0L.
             * @see java.io.ObjectOutputStream#useProtocolVersion(int)
             * @see #SC_BLOCK_DATA
             * @since 1.2
             */
            // @ts-ignore
            readonly PROTOCOL_VERSION_2: number /*int*/
        }
    }
}
