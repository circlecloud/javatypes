declare namespace org {
    namespace springframework {
        namespace util {
            /**
             * Static utilities for serialization and deserialization.
             * @author Dave Syer
             * @since 3.0.5
             */
            // @ts-ignore
            class SerializationUtils extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Serialize the given object to a byte array.
                 * @param object the object to serialize
                 * @return an array of bytes representing the object in a portable fashion
                 */
                // @ts-ignore
                serialize(object: any): byte[]
                /**
                 * Deserialize the byte array into an object.
                 * @param bytes a serialized object
                 * @return the result of deserializing the bytes
                 */
                // @ts-ignore
                deserialize(bytes: number /*byte*/[]): java.lang.Object
            }
        }
    }
}
