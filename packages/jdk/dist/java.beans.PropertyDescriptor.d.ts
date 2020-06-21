declare namespace java {
    namespace beans {
        /**
         * A PropertyDescriptor describes one property that a Java Bean
         * exports via a pair of accessor methods.
         */
        // @ts-ignore
        class PropertyDescriptor extends java.beans.FeatureDescriptor {
            /**
             * Constructs a PropertyDescriptor for a property that follows
             * the standard Java convention by having getFoo and setFoo
             * accessor methods.  Thus if the argument name is "fred", it will
             * assume that the writer method is "setFred" and the reader method
             * is "getFred" (or "isFred" for a boolean property).  Note that the
             * property name should start with a lower case character, which will
             * be capitalized in the method names.
             * @param propertyName The programmatic name of the property.
             * @param beanClass The Class object for the target bean.  For
             *           example sun.beans.OurButton.class.
             * @exception IntrospectionException if an exception occurs during
             *               introspection.
             */
            // @ts-ignore
            constructor(propertyName: java.lang.String | string, beanClass: java.lang.Class<any>)
            /**
             * This constructor takes the name of a simple property, and method
             * names for reading and writing the property.
             * @param propertyName The programmatic name of the property.
             * @param beanClass The Class object for the target bean.  For
             *           example sun.beans.OurButton.class.
             * @param readMethodName The name of the method used for reading the property
             *            value.  May be null if the property is write-only.
             * @param writeMethodName The name of the method used for writing the property
             *            value.  May be null if the property is read-only.
             * @exception IntrospectionException if an exception occurs during
             *               introspection.
             */
            // @ts-ignore
            constructor(propertyName: java.lang.String | string, beanClass: java.lang.Class<any>, readMethodName: java.lang.String | string, writeMethodName: java.lang.String | string)
            /**
             * This constructor takes the name of a simple property, and Method
             * objects for reading and writing the property.
             * @param propertyName The programmatic name of the property.
             * @param readMethod The method used for reading the property value.
             *           May be null if the property is write-only.
             * @param writeMethod The method used for writing the property value.
             *           May be null if the property is read-only.
             * @exception IntrospectionException if an exception occurs during
             *               introspection.
             */
            // @ts-ignore
            constructor(propertyName: java.lang.String | string, readMethod: java.lang.reflect.Method, writeMethod: java.lang.reflect.Method)
            /**
             * Returns the Java type info for the property.
             * Note that the {@code Class} object may describe
             * primitive Java types such as {@code int}.
             * This type is returned by the read method
             * or is used as the parameter type of the write method.
             * Returns {@code null} if the type is an indexed property
             * that does not support non-indexed access.
             * @return the {#code Class} object that represents the Java type info,
             *          or {@code null} if the type cannot be determined
             */
            // @ts-ignore
            public getPropertyType(): java.lang.Class<any>
            /**
             * Gets the method that should be used to read the property value.
             * @return The method that should be used to read the property value.
             *  May return null if the property can't be read.
             */
            // @ts-ignore
            public getReadMethod(): java.lang.reflect.Method
            /**
             * Sets the method that should be used to read the property value.
             * @param readMethod The new read method.
             * @throws IntrospectionException if the read method is invalid
             */
            // @ts-ignore
            public setReadMethod(readMethod: java.lang.reflect.Method): void
            /**
             * Gets the method that should be used to write the property value.
             * @return The method that should be used to write the property value.
             *  May return null if the property can't be written.
             */
            // @ts-ignore
            public getWriteMethod(): java.lang.reflect.Method
            /**
             * Sets the method that should be used to write the property value.
             * @param writeMethod The new write method.
             * @throws IntrospectionException if the write method is invalid
             */
            // @ts-ignore
            public setWriteMethod(writeMethod: java.lang.reflect.Method): void
            /**
             * Updates to "bound" properties will cause a "PropertyChange" event to
             * get fired when the property is changed.
             * @return True if this is a bound property.
             */
            // @ts-ignore
            public isBound(): boolean
            /**
             * Updates to "bound" properties will cause a "PropertyChange" event to
             * get fired when the property is changed.
             * @param bound True if this is a bound property.
             */
            // @ts-ignore
            public setBound(bound: boolean): void
            /**
             * Attempted updates to "Constrained" properties will cause a "VetoableChange"
             * event to get fired when the property is changed.
             * @return True if this is a constrained property.
             */
            // @ts-ignore
            public isConstrained(): boolean
            /**
             * Attempted updates to "Constrained" properties will cause a "VetoableChange"
             * event to get fired when the property is changed.
             * @param constrained True if this is a constrained property.
             */
            // @ts-ignore
            public setConstrained(constrained: boolean): void
            /**
             * Normally PropertyEditors will be found using the PropertyEditorManager.
             * However if for some reason you want to associate a particular
             * PropertyEditor with a given property, then you can do it with
             * this method.
             * @param propertyEditorClass  The Class for the desired PropertyEditor.
             */
            // @ts-ignore
            public setPropertyEditorClass(propertyEditorClass: java.lang.Class<any>): void
            /**
             * Gets any explicit PropertyEditor Class that has been registered
             * for this property.
             * @return Any explicit PropertyEditor Class that has been registered
             *           for this property.  Normally this will return "null",
             *           indicating that no special editor has been registered,
             *           so the PropertyEditorManager should be used to locate
             *           a suitable PropertyEditor.
             */
            // @ts-ignore
            public getPropertyEditorClass(): java.lang.Class<any>
            /**
             * Constructs an instance of a property editor using the current
             * property editor class.
             * <p>
             * If the property editor class has a public constructor that takes an
             * Object argument then it will be invoked using the bean parameter
             * as the argument. Otherwise, the default constructor will be invoked.
             * @param bean the source object
             * @return a property editor instance or null if a property editor has
             *          not been defined or cannot be created
             * @since 1.5
             */
            // @ts-ignore
            public createPropertyEditor(bean: java.lang.Object | any): java.beans.PropertyEditor
            /**
             * Compares this <code>PropertyDescriptor</code> against the specified object.
             * Returns true if the objects are the same. Two <code>PropertyDescriptor</code>s
             * are the same if the read, write, property types, property editor and
             * flags  are equivalent.
             * @since 1.4
             */
            // @ts-ignore
            public equals(obj: java.lang.Object | any): boolean
            /**
             * Returns a hash code value for the object.
             * See {@link java.lang.Object#hashCode} for a complete description.
             * @return a hash code value for this object.
             * @since 1.5
             */
            // @ts-ignore
            public hashCode(): number /*int*/
        }
    }
}
