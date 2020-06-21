declare namespace javax {
    namespace smartcardio {
        /**
         * A Smart Card's answer-to-reset bytes. A Card's ATR object can be obtained
         * by calling {@linkplain Card#getATR}.
         * This class does not attempt to verify that the ATR encodes a semantically
         * valid structure.
         * <p>Instances of this class are immutable. Where data is passed in or out
         * via byte arrays, defensive cloning is performed.
         * @see Card#getATR
         * @since 1.6
         * @author Andreas Sterbenz
         * @author JSR 268 Expert Group
         */
        // @ts-ignore
        class ATR extends java.lang.Object implements java.io.Serializable {
            /**
             * Constructs an ATR from a byte array.
             * @param atr the byte array containing the answer-to-reset bytes
             * @throws NullPointerException if <code>atr</code> is null
             */
            // @ts-ignore
            constructor(atr: number /*byte*/[])
            /**
             * Returns a copy of the bytes in this ATR.
             * @return a copy of the bytes in this ATR.
             */
            // @ts-ignore
            public getBytes(): number /*byte*/[]
            /**
             * Returns a copy of the historical bytes in this ATR.
             * If this ATR does not contain historical bytes, an array of length
             * zero is returned.
             * @return a copy of the historical bytes in this ATR.
             */
            // @ts-ignore
            public getHistoricalBytes(): number /*byte*/[]
            /**
             * Returns a string representation of this ATR.
             * @return a String representation of this ATR.
             */
            // @ts-ignore
            public toString(): string
            /**
             * Compares the specified object with this ATR for equality.
             * Returns true if the given object is also an ATR and its bytes are
             * identical to the bytes in this ATR.
             * @param obj the object to be compared for equality with this ATR
             * @return true if the specified object is equal to this ATR
             */
            // @ts-ignore
            public equals(obj: java.lang.Object | any): boolean
            /**
             * Returns the hash code value for this ATR.
             * @return the hash code value for this ATR.
             */
            // @ts-ignore
            public hashCode(): number /*int*/
        }
    }
}
