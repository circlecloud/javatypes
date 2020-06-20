declare namespace javax {
    namespace smartcardio {
        /**
         * A command APDU following the structure defined in ISO/IEC 7816-4.
         * It consists of a four byte header and a conditional body of variable length.
         * This class does not attempt to verify that the APDU encodes a semantically
         * valid command.
         * <p>Note that when the expected length of the response APDU is specified
         * in the {@linkplain #CommandAPDU(int,int,int,int,int) constructors},
         * the actual length (Ne) must be specified, not its
         * encoded form (Le). Similarly, {@linkplain #getNe} returns the actual
         * value Ne. In other words, a value of 0 means "no data in the response APDU"
         * rather than "maximum length."
         * <p>This class supports both the short and extended forms of length
         * encoding for Ne and Nc. However, note that not all terminals and Smart Cards
         * are capable of accepting APDUs that use the extended form.
         * <p>For the header bytes CLA, INS, P1, and P2 the Java type <code>int</code>
         * is used to represent the 8 bit unsigned values. In the constructors, only
         * the 8 lowest bits of the <code>int</code> value specified by the application
         * are significant. The accessor methods always return the byte as an unsigned
         * value between 0 and 255.
         * <p>Instances of this class are immutable. Where data is passed in or out
         * via byte arrays, defensive cloning is performed.
         * @see ResponseAPDU
         * @see CardChannel#transmit CardChannel.transmit
         * @since 1.6
         * @author Andreas Sterbenz
         * @author JSR 268 Expert Group
         */
        // @ts-ignore
        class CommandAPDU extends java.lang.Object implements java.io.Serializable {
            /**
             * Constructs a CommandAPDU from a byte array containing the complete
             * APDU contents (header and body).
             * <p>Note that the apdu bytes are copied to protect against
             * subsequent modification.
             * @param apdu the complete command APDU
             * @throws NullPointerException if apdu is null
             * @throws IllegalArgumentException if apdu does not contain a valid
             *    command APDU
             */
            // @ts-ignore
            constructor(apdu: number /*byte*/[])
            /**
             * Constructs a CommandAPDU from a byte array containing the complete
             * APDU contents (header and body). The APDU starts at the index
             * <code>apduOffset</code> in the byte array and is <code>apduLength</code>
             * bytes long.
             * <p>Note that the apdu bytes are copied to protect against
             * subsequent modification.
             * @param apdu the complete command APDU
             * @param apduOffset the offset in the byte array at which the apdu
             *    data begins
             * @param apduLength the length of the APDU
             * @throws NullPointerException if apdu is null
             * @throws IllegalArgumentException if apduOffset or apduLength are
             *    negative or if apduOffset + apduLength are greater than apdu.length,
             *    or if the specified bytes are not a valid APDU
             */
            // @ts-ignore
            constructor(apdu: number /*byte*/[], apduOffset: number /*int*/, apduLength: number /*int*/)
            /**
             * Creates a CommandAPDU from the ByteBuffer containing the complete APDU
             * contents (header and body).
             * The buffer's <code>position</code> must be set to the start of the APDU,
             * its <code>limit</code> to the end of the APDU. Upon return, the buffer's
             * <code>position</code> is equal to its limit; its limit remains unchanged.
             * <p>Note that the data in the ByteBuffer is copied to protect against
             * subsequent modification.
             * @param apdu the ByteBuffer containing the complete APDU
             * @throws NullPointerException if apdu is null
             * @throws IllegalArgumentException if apdu does not contain a valid
             *    command APDU
             */
            // @ts-ignore
            constructor(apdu: java.nio.ByteBuffer)
            /**
             * Constructs a CommandAPDU from the four header bytes. This is case 1
             * in ISO 7816, no command body.
             * @param cla the class byte CLA
             * @param ins the instruction byte INS
             * @param p1 the parameter byte P1
             * @param p2 the parameter byte P2
             */
            // @ts-ignore
            constructor(cla: number /*int*/, ins: number /*int*/, p1: number /*int*/, p2: number /*int*/)
            /**
             * Constructs a CommandAPDU from the four header bytes and the expected
             * response data length. This is case 2 in ISO 7816, empty command data
             * field with Ne specified. If Ne is 0, the APDU is encoded as ISO 7816
             * case 1.
             * @param cla the class byte CLA
             * @param ins the instruction byte INS
             * @param p1 the parameter byte P1
             * @param p2 the parameter byte P2
             * @param ne the maximum number of expected data bytes in a response APDU
             * @throws IllegalArgumentException if ne is negative or greater than
             *    65536
             */
            // @ts-ignore
            constructor(cla: number /*int*/, ins: number /*int*/, p1: number /*int*/, p2: number /*int*/, ne: number /*int*/)
            /**
             * Constructs a CommandAPDU from the four header bytes and command data.
             * This is case 3 in ISO 7816, command data present and Ne absent. The
             * value Nc is taken as data.length. If <code>data</code> is null or
             * its length is 0, the APDU is encoded as ISO 7816 case 1.
             * <p>Note that the data bytes are copied to protect against
             * subsequent modification.
             * @param cla the class byte CLA
             * @param ins the instruction byte INS
             * @param p1 the parameter byte P1
             * @param p2 the parameter byte P2
             * @param data the byte array containing the data bytes of the command body
             * @throws IllegalArgumentException if data.length is greater than 65535
             */
            // @ts-ignore
            constructor(cla: number /*int*/, ins: number /*int*/, p1: number /*int*/, p2: number /*int*/, data: number /*byte*/[])
            /**
             * Constructs a CommandAPDU from the four header bytes and command data.
             * This is case 3 in ISO 7816, command data present and Ne absent. The
             * value Nc is taken as dataLength. If <code>dataLength</code>
             * is 0, the APDU is encoded as ISO 7816 case 1.
             * <p>Note that the data bytes are copied to protect against
             * subsequent modification.
             * @param cla the class byte CLA
             * @param ins the instruction byte INS
             * @param p1 the parameter byte P1
             * @param p2 the parameter byte P2
             * @param data the byte array containing the data bytes of the command body
             * @param dataOffset the offset in the byte array at which the data
             *    bytes of the command body begin
             * @param dataLength the number of the data bytes in the command body
             * @throws NullPointerException if data is null and dataLength is not 0
             * @throws IllegalArgumentException if dataOffset or dataLength are
             *    negative or if dataOffset + dataLength are greater than data.length
             *    or if dataLength is greater than 65535
             */
            // @ts-ignore
            constructor(cla: number /*int*/, ins: number /*int*/, p1: number /*int*/, p2: number /*int*/, data: number /*byte*/[], dataOffset: number /*int*/, dataLength: number /*int*/)
            /**
             * Constructs a CommandAPDU from the four header bytes, command data,
             * and expected response data length. This is case 4 in ISO 7816,
             * command data and Ne present. The value Nc is taken as data.length
             * if <code>data</code> is non-null and as 0 otherwise. If Ne or Nc
             * are zero, the APDU is encoded as case 1, 2, or 3 per ISO 7816.
             * <p>Note that the data bytes are copied to protect against
             * subsequent modification.
             * @param cla the class byte CLA
             * @param ins the instruction byte INS
             * @param p1 the parameter byte P1
             * @param p2 the parameter byte P2
             * @param data the byte array containing the data bytes of the command body
             * @param ne the maximum number of expected data bytes in a response APDU
             * @throws IllegalArgumentException if data.length is greater than 65535
             *    or if ne is negative or greater than 65536
             */
            // @ts-ignore
            constructor(cla: number /*int*/, ins: number /*int*/, p1: number /*int*/, p2: number /*int*/, data: number /*byte*/[], ne: number /*int*/)
            /**
             * Constructs a CommandAPDU from the four header bytes, command data,
             * and expected response data length. This is case 4 in ISO 7816,
             * command data and Le present. The value Nc is taken as
             * <code>dataLength</code>.
             * If Ne or Nc
             * are zero, the APDU is encoded as case 1, 2, or 3 per ISO 7816.
             * <p>Note that the data bytes are copied to protect against
             * subsequent modification.
             * @param cla the class byte CLA
             * @param ins the instruction byte INS
             * @param p1 the parameter byte P1
             * @param p2 the parameter byte P2
             * @param data the byte array containing the data bytes of the command body
             * @param dataOffset the offset in the byte array at which the data
             *    bytes of the command body begin
             * @param dataLength the number of the data bytes in the command body
             * @param ne the maximum number of expected data bytes in a response APDU
             * @throws NullPointerException if data is null and dataLength is not 0
             * @throws IllegalArgumentException if dataOffset or dataLength are
             *    negative or if dataOffset + dataLength are greater than data.length,
             *    or if ne is negative or greater than 65536,
             *    or if dataLength is greater than 65535
             */
            // @ts-ignore
            constructor(cla: number /*int*/, ins: number /*int*/, p1: number /*int*/, p2: number /*int*/, data: number /*byte*/[], dataOffset: number /*int*/, dataLength: number /*int*/, ne: number /*int*/)
            /**
             * Returns the value of the class byte CLA.
             * @return the value of the class byte CLA.
             */
            // @ts-ignore
            getCLA(): int
            /**
             * Returns the value of the instruction byte INS.
             * @return the value of the instruction byte INS.
             */
            // @ts-ignore
            getINS(): int
            /**
             * Returns the value of the parameter byte P1.
             * @return the value of the parameter byte P1.
             */
            // @ts-ignore
            getP1(): int
            /**
             * Returns the value of the parameter byte P2.
             * @return the value of the parameter byte P2.
             */
            // @ts-ignore
            getP2(): int
            /**
             * Returns the number of data bytes in the command body (Nc) or 0 if this
             * APDU has no body. This call is equivalent to
             * <code>getData().length</code>.
             * @return the number of data bytes in the command body or 0 if this APDU
             *  has no body.
             */
            // @ts-ignore
            getNc(): int
            /**
             * Returns a copy of the data bytes in the command body. If this APDU as
             * no body, this method returns a byte array with length zero.
             * @return a copy of the data bytes in the command body or the empty
             *     byte array if this APDU has no body.
             */
            // @ts-ignore
            getData(): byte[]
            /**
             * Returns the maximum number of expected data bytes in a response
             * APDU (Ne).
             * @return the maximum number of expected data bytes in a response APDU.
             */
            // @ts-ignore
            getNe(): int
            /**
             * Returns a copy of the bytes in this APDU.
             * @return a copy of the bytes in this APDU.
             */
            // @ts-ignore
            getBytes(): byte[]
            /**
             * Returns a string representation of this command APDU.
             * @return a String representation of this command APDU.
             */
            // @ts-ignore
            toString(): java.lang.String
            /**
             * Compares the specified object with this command APDU for equality.
             * Returns true if the given object is also a CommandAPDU and its bytes are
             * identical to the bytes in this CommandAPDU.
             * @param obj the object to be compared for equality with this command APDU
             * @return true if the specified object is equal to this command APDU
             */
            // @ts-ignore
            equals(obj: any): boolean
            /**
             * Returns the hash code value for this command APDU.
             * @return the hash code value for this command APDU.
             */
            // @ts-ignore
            hashCode(): int
        }
    }
}
