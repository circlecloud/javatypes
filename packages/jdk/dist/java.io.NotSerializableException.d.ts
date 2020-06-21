declare namespace java {
    namespace io {
        /**
         * Thrown when an instance is required to have a Serializable interface.
         * The serialization runtime or the class of the instance can throw
         * this exception. The argument should be the name of the class.
         * @author unascribed
         * @since JDK1.1
         */
        // @ts-ignore
        class NotSerializableException extends java.io.ObjectStreamException {
            /**
             * Constructs a NotSerializableException object with message string.
             * @param classname Class of the instance being serialized/deserialized.
             */
            // @ts-ignore
            constructor(classname: java.lang.String | string)
            /**
             * Constructs a NotSerializableException object.
             */
            // @ts-ignore
            constructor()
        }
    }
}
