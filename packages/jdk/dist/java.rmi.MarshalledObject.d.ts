declare namespace java {
    namespace rmi {
        /**
         * A <code>MarshalledObject</code> contains a byte stream with the serialized
         * representation of an object given to its constructor.  The <code>get</code>
         * method returns a new copy of the original object, as deserialized from
         * the contained byte stream.  The contained object is serialized and
         * deserialized with the same serialization semantics used for marshaling
         * and unmarshaling parameters and return values of RMI calls:  When the
         * serialized form is created:
         * <ul>
         * <li> classes are annotated with a codebase URL from where the class
         * can be loaded (if available), and
         * <li> any remote object in the <code>MarshalledObject</code> is
         * represented by a serialized instance of its stub.
         * </ul>
         * <p>When copy of the object is retrieved (via the <code>get</code> method),
         * if the class is not available locally, it will be loaded from the
         * appropriate location (specified the URL annotated with the class descriptor
         * when the class was serialized.
         * <p><code>MarshalledObject</code> facilitates passing objects in RMI calls
         * that are not automatically deserialized immediately by the remote peer.
         * @param <T> the type of the object contained in this
         *  <code>MarshalledObject</code>
         * @author Ann Wollrath
         * @author Peter Jones
         * @since 1.2
         */
        // @ts-ignore
        class MarshalledObject<T> extends java.lang.Object implements java.io.Serializable {
            /**
             * Creates a new <code>MarshalledObject</code> that contains the
             * serialized representation of the current state of the supplied object.
             * The object is serialized with the semantics used for marshaling
             * parameters for RMI calls.
             * @param obj the object to be serialized (must be serializable)
             * @exception IOException if an <code>IOException</code> occurs; an
             *  <code>IOException</code> may occur if <code>obj</code> is not
             *  serializable.
             * @since 1.2
             */
            // @ts-ignore
            constructor(obj: T)
            /**
             * Returns a new copy of the contained marshalledobject.  The internal
             * representation is deserialized with the semantics used for
             * unmarshaling parameters for RMI calls.
             * @return a copy of the contained object
             * @exception IOException if an <code>IOException</code> occurs while
             *  deserializing the object from its internal representation.
             * @exception ClassNotFoundException if a
             *  <code>ClassNotFoundException</code> occurs while deserializing the
             *  object from its internal representation.
             *  could not be found
             * @since 1.2
             */
            // @ts-ignore
            get(): T
            /**
             * Return a hash code for this <code>MarshalledObject</code>.
             * @return a hash code
             */
            // @ts-ignore
            hashCode(): int
            /**
             * Compares this <code>MarshalledObject</code> to another object.
             * Returns true if and only if the argument refers to a
             * <code>MarshalledObject</code> that contains exactly the same
             * serialized representation of an object as this one does. The
             * comparison ignores any class codebase annotation, meaning that
             * two objects are equivalent if they have the same serialized
             * representation <i>except</i> for the codebase of each class
             * in the serialized representation.
             * @param obj the object to compare with this <code>MarshalledObject</code>
             * @return <code>true</code> if the argument contains an equivalent
             *  serialized object; <code>false</code> otherwise
             * @since 1.2
             */
            // @ts-ignore
            equals(obj: any): boolean
        }
    }
}
