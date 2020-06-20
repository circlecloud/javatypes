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
            
            /**
             * Version number that is written to the stream header.
             */
            // @ts-ignore
            
            /**
             * First tag value.
             */
            // @ts-ignore
            
            /**
             * Null object reference.
             */
            // @ts-ignore
            
            /**
             * Reference to an object already written into the stream.
             */
            // @ts-ignore
            
            /**
             * new Class Descriptor.
             */
            // @ts-ignore
            
            /**
             * new Object.
             */
            // @ts-ignore
            
            /**
             * new String.
             */
            // @ts-ignore
            
            /**
             * new Array.
             */
            // @ts-ignore
            
            /**
             * Reference to Class.
             */
            // @ts-ignore
            
            /**
             * Block of optional data. Byte following tag indicates number
             * of bytes in this block data.
             */
            // @ts-ignore
            
            /**
             * End of optional block data blocks for an object.
             */
            // @ts-ignore
            
            /**
             * Reset stream context. All handles written into stream are reset.
             */
            // @ts-ignore
            
            /**
             * long Block data. The long following the tag indicates the
             * number of bytes in this block data.
             */
            // @ts-ignore
            
            /**
             * Exception during write.
             */
            // @ts-ignore
            
            /**
             * Long string.
             */
            // @ts-ignore
            
            /**
             * new Proxy Class Descriptor.
             */
            // @ts-ignore
            
            /**
             * new Enum constant.
             * @since 1.5
             */
            // @ts-ignore
            
            /**
             * Last tag value.
             */
            // @ts-ignore
            
            /**
             * First wire handle to be assigned.
             */
            // @ts-ignore
            
            /**
             * Bit mask for ObjectStreamClass flag. Indicates a Serializable class
             * defines its own writeObject method.
             */
            // @ts-ignore
            
            /**
             * Bit mask for ObjectStreamClass flag. Indicates Externalizable data
             * written in Block Data mode.
             * Added for PROTOCOL_VERSION_2.
             * @see #PROTOCOL_VERSION_2
             * @since 1.2
             */
            // @ts-ignore
            
            /**
             * Bit mask for ObjectStreamClass flag. Indicates class is Serializable.
             */
            // @ts-ignore
            
            /**
             * Bit mask for ObjectStreamClass flag. Indicates class is Externalizable.
             */
            // @ts-ignore
            
            /**
             * Bit mask for ObjectStreamClass flag. Indicates class is an enum type.
             * @since 1.5
             */
            // @ts-ignore
            
            /**
             * Enable substitution of one object for another during
             * serialization/deserialization.
             * @see java.io.ObjectOutputStream#enableReplaceObject(boolean)
             * @see java.io.ObjectInputStream#enableResolveObject(boolean)
             * @since 1.2
             */
            // @ts-ignore
            
            /**
             * Enable overriding of readObject and writeObject.
             * @see java.io.ObjectOutputStream#writeObjectOverride(Object)
             * @see java.io.ObjectInputStream#readObjectOverride()
             * @since 1.2
             */
            // @ts-ignore
            
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
            
        }
    }
}
