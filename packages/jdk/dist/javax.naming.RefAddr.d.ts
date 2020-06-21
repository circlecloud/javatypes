declare namespace javax {
    namespace naming {
        /**
         * This class represents the address of a communications end-point.
         * It consists of a type that describes the communication mechanism
         * and an address contents determined by an RefAddr subclass.
         * <p>
         * For example, an address type could be "BSD Printer Address",
         * which specifies that it is an address to be used with the BSD printing
         * protocol. Its contents could be the machine name identifying the
         * location of the printer server that understands this protocol.
         * <p>
         * A RefAddr is contained within a Reference.
         * <p>
         * RefAddr is an abstract class. Concrete implementations of it
         * determine its synchronization properties.
         * @author Rosanna Lee
         * @author Scott Seligman
         * @see Reference
         * @see LinkRef
         * @see StringRefAddr
         * @see BinaryRefAddr
         * @since 1.3
         */
        // @ts-ignore
        abstract class RefAddr extends java.lang.Object implements java.io.Serializable {
            /**
             * Constructs a new instance of RefAddr using its address type.
             * @param addrType A non-null string describing the type of the address.
             */
            // @ts-ignore
            constructor(addrType: java.lang.String | string)
            /**
             * Contains the type of this address.
             * @serial 
             */
            // @ts-ignore
            addrType: java.lang.String | string
            /**
             * Retrieves the address type of this address.
             * @return The non-null address type of this address.
             */
            // @ts-ignore
            public getType(): string
            /**
             * Retrieves the contents of this address.
             * @return The possibly null address contents.
             */
            // @ts-ignore
            public abstract getContent(): any
            /**
             * Determines whether obj is equal to this RefAddr.
             * <p>
             * obj is equal to this RefAddr all of these conditions are true
             * <ul>
             * <li> non-null
             * <li> instance of RefAddr
             * <li> obj has the same address type as this RefAddr (using String.compareTo())
             * <li> both obj and this RefAddr's contents are null or they are equal
             * (using the equals() test).
             * </ul>
             * @param obj possibly null obj to check.
             * @return true if obj is equal to this refaddr; false otherwise.
             * @see #getContent
             * @see #getType
             */
            // @ts-ignore
            public equals(obj: java.lang.Object | any): boolean
            /**
             * Computes the hash code of this address using its address type and contents.
             * The hash code is the sum of the hash code of the address type and
             * the hash code of the address contents.
             * @return The hash code of this address as an int.
             * @see java.lang.Object#hashCode
             */
            // @ts-ignore
            public hashCode(): number /*int*/
            /**
             * Generates the string representation of this address.
             * The string consists of the address's type and contents with labels.
             * This representation is intended for display only and not to be parsed.
             * @return The non-null string representation of this address.
             */
            // @ts-ignore
            public toString(): string
        }
    }
}
