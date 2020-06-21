declare namespace javax {
    namespace smartcardio {
        /**
         * A response APDU as defined in ISO/IEC 7816-4. It consists of a conditional
         * body and a two byte trailer.
         * This class does not attempt to verify that the APDU encodes a semantically
         * valid response.
         * <p>Instances of this class are immutable. Where data is passed in or out
         * via byte arrays, defensive cloning is performed.
         * @see CommandAPDU
         * @see CardChannel#transmit CardChannel.transmit
         * @since 1.6
         * @author Andreas Sterbenz
         * @author JSR 268 Expert Group
         */
        // @ts-ignore
        class ResponseAPDU extends java.lang.Object implements java.io.Serializable {
            /**
             * Constructs a ResponseAPDU from a byte array containing the complete
             * APDU contents (conditional body and trailed).
             * <p>Note that the byte array is cloned to protect against subsequent
             * modification.
             * @param apdu the complete response APDU
             * @throws NullPointerException if apdu is null
             * @throws IllegalArgumentException if apdu.length is less than 2
             */
            // @ts-ignore
            constructor(apdu: number /*byte*/[])
            /**
             * Returns the number of data bytes in the response body (Nr) or 0 if this
             * APDU has no body. This call is equivalent to
             * <code>getData().length</code>.
             * @return the number of data bytes in the response body or 0 if this APDU
             *  has no body.
             */
            // @ts-ignore
            public getNr(): number /*int*/
            /**
             * Returns a copy of the data bytes in the response body. If this APDU as
             * no body, this method returns a byte array with a length of zero.
             * @return a copy of the data bytes in the response body or the empty
             *     byte array if this APDU has no body.
             */
            // @ts-ignore
            public getData(): number /*byte*/[]
            /**
             * Returns the value of the status byte SW1 as a value between 0 and 255.
             * @return the value of the status byte SW1 as a value between 0 and 255.
             */
            // @ts-ignore
            public getSW1(): number /*int*/
            /**
             * Returns the value of the status byte SW2 as a value between 0 and 255.
             * @return the value of the status byte SW2 as a value between 0 and 255.
             */
            // @ts-ignore
            public getSW2(): number /*int*/
            /**
             * Returns the value of the status bytes SW1 and SW2 as a single
             * status word SW.
             * It is defined as
             * {@code (getSW1() << 8) | getSW2()}
             * @return the value of the status word SW.
             */
            // @ts-ignore
            public getSW(): number /*int*/
            /**
             * Returns a copy of the bytes in this APDU.
             * @return a copy of the bytes in this APDU.
             */
            // @ts-ignore
            public getBytes(): number /*byte*/[]
            /**
             * Returns a string representation of this response APDU.
             * @return a String representation of this response APDU.
             */
            // @ts-ignore
            public toString(): string
            /**
             * Compares the specified object with this response APDU for equality.
             * Returns true if the given object is also a ResponseAPDU and its bytes are
             * identical to the bytes in this ResponseAPDU.
             * @param obj the object to be compared for equality with this response APDU
             * @return true if the specified object is equal to this response APDU
             */
            // @ts-ignore
            public equals(obj: java.lang.Object | any): boolean
            /**
             * Returns the hash code value for this response APDU.
             * @return the hash code value for this response APDU.
             */
            // @ts-ignore
            public hashCode(): number /*int*/
        }
    }
}
