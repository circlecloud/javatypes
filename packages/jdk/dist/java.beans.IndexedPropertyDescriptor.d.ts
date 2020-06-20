declare namespace java {
    namespace beans {
        /**
         * An IndexedPropertyDescriptor describes a property that acts like an
         * array and has an indexed read and/or indexed write method to access
         * specific elements of the array.
         * <p>
         * An indexed property may also provide simple non-indexed read and write
         * methods.  If these are present, they read and write arrays of the type
         * returned by the indexed read method.
         */
        // @ts-ignore
        class IndexedPropertyDescriptor extends java.beans.PropertyDescriptor {
            /**
             * This constructor constructs an IndexedPropertyDescriptor for a property
             * that follows the standard Java conventions by having getFoo and setFoo
             * accessor methods, for both indexed access and array access.
             * <p>
             * Thus if the argument name is "fred", it will assume that there
             * is an indexed reader method "getFred", a non-indexed (array) reader
             * method also called "getFred", an indexed writer method "setFred",
             * and finally a non-indexed writer method "setFred".
             * @param propertyName The programmatic name of the property.
             * @param beanClass The Class object for the target bean.
             * @exception IntrospectionException if an exception occurs during
             *               introspection.
             */
            // @ts-ignore
            constructor(propertyName: string, beanClass: java.lang.Class<any>)
            /**
             * This constructor takes the name of a simple property, and method
             * names for reading and writing the property, both indexed
             * and non-indexed.
             * @param propertyName The programmatic name of the property.
             * @param beanClass  The Class object for the target bean.
             * @param readMethodName The name of the method used for reading the property
             *            values as an array.  May be null if the property is write-only
             *            or must be indexed.
             * @param writeMethodName The name of the method used for writing the property
             *            values as an array.  May be null if the property is read-only
             *            or must be indexed.
             * @param indexedReadMethodName The name of the method used for reading
             *           an indexed property value.
             *           May be null if the property is write-only.
             * @param indexedWriteMethodName The name of the method used for writing
             *           an indexed property value.
             *           May be null if the property is read-only.
             * @exception IntrospectionException if an exception occurs during
             *               introspection.
             */
            // @ts-ignore
            constructor(propertyName: string, beanClass: java.lang.Class<any>, readMethodName: string, writeMethodName: string, indexedReadMethodName: string, indexedWriteMethodName: string)
            /**
             * This constructor takes the name of a simple property, and Method
             * objects for reading and writing the property.
             * @param propertyName The programmatic name of the property.
             * @param readMethod The method used for reading the property values as an array.
             *           May be null if the property is write-only or must be indexed.
             * @param writeMethod The method used for writing the property values as an array.
             *           May be null if the property is read-only or must be indexed.
             * @param indexedReadMethod The method used for reading an indexed property value.
             *           May be null if the property is write-only.
             * @param indexedWriteMethod The method used for writing an indexed property value.
             *           May be null if the property is read-only.
             * @exception IntrospectionException if an exception occurs during
             *               introspection.
             */
            // @ts-ignore
            constructor(propertyName: string, readMethod: java.lang.reflect.Method, writeMethod: java.lang.reflect.Method, indexedReadMethod: java.lang.reflect.Method, indexedWriteMethod: java.lang.reflect.Method)
            /**
             * Gets the method that should be used to read an indexed
             * property value.
             * @return The method that should be used to read an indexed
             *  property value.
             *  May return null if the property isn't indexed or is write-only.
             */
            // @ts-ignore
            getIndexedReadMethod(): java.lang.reflect.Method
            /**
             * Sets the method that should be used to read an indexed property value.
             * @param readMethod The new indexed read method.
             * @throws IntrospectionException if an exception occurs during
             *  introspection.
             */
            // @ts-ignore
            setIndexedReadMethod(readMethod: java.lang.reflect.Method): void
            /**
             * Gets the method that should be used to write an indexed property value.
             * @return The method that should be used to write an indexed
             *  property value.
             *  May return null if the property isn't indexed or is read-only.
             */
            // @ts-ignore
            getIndexedWriteMethod(): java.lang.reflect.Method
            /**
             * Sets the method that should be used to write an indexed property value.
             * @param writeMethod The new indexed write method.
             * @throws IntrospectionException if an exception occurs during
             *  introspection.
             */
            // @ts-ignore
            setIndexedWriteMethod(writeMethod: java.lang.reflect.Method): void
            /**
             * Returns the Java type info for the indexed property.
             * Note that the {@code Class} object may describe
             * primitive Java types such as {@code int}.
             * This type is returned by the indexed read method
             * or is used as the parameter type of the indexed write method.
             * @return the {#code Class} object that represents the Java type info,
             *          or {@code null} if the type cannot be determined
             */
            // @ts-ignore
            getIndexedPropertyType(): java.lang.Class<?>
            /**
             * Compares this <code>PropertyDescriptor</code> against the specified object.
             * Returns true if the objects are the same. Two <code>PropertyDescriptor</code>s
             * are the same if the read, write, property types, property editor and
             * flags  are equivalent.
             * @since 1.4
             */
            // @ts-ignore
            equals(obj: any): boolean
            /**
             * Returns a hash code value for the object.
             * See {@link java.lang.Object#hashCode} for a complete description.
             * @return a hash code value for this object.
             * @since 1.5
             */
            // @ts-ignore
            hashCode(): int
        }
    }
}
