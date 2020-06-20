declare namespace org {
    namespace springframework {
        namespace core {
            namespace convert {
                /**
                 * Contextual descriptor about a type to convert from or to.
                 * Capable of representing arrays and generic collection types.
                 * @author Keith Donald
                 * @author Andy Clement
                 * @author Juergen Hoeller
                 * @author Phillip Webb
                 * @author Sam Brannen
                 * @author Stephane Nicoll
                 * @since 3.0
                 * @see ConversionService#canConvert(TypeDescriptor, TypeDescriptor)
                 * @see ConversionService#convert(Object, TypeDescriptor, TypeDescriptor)
                 */
                // @ts-ignore
                class TypeDescriptor extends java.lang.Object implements java.io.Serializable {
                    /**
                     * Create a new type descriptor from a {@link MethodParameter}.
                     * <p>Use this constructor when a source or target conversion point is a
                     * constructor parameter, method parameter, or method return value.
                     * @param methodParameter the method parameter
                     */
                    // @ts-ignore
                    constructor(methodParameter: org.springframework.core.MethodParameter)
                    /**
                     * Create a new type descriptor from a {@link Field}.
                     * <p>Use this constructor when a source or target conversion point is a field.
                     * @param field the field
                     */
                    // @ts-ignore
                    constructor(field: java.lang.reflect.Field)
                    /**
                     * Create a new type descriptor from a {@link Property}.
                     * <p>Use this constructor when a source or target conversion point is a
                     * property on a Java class.
                     * @param property the property
                     */
                    // @ts-ignore
                    constructor(property: org.springframework.core.convert.Property)
                    /**
                     * Create a new type descriptor from a {@link ResolvableType}.
                     * <p>This constructor is used internally and may also be used by subclasses
                     * that support non-Java languages with extended type systems. It is public
                     * as of 5.1.4 whereas it was protected before.
                     * @param resolvableType the resolvable type
                     * @param type the backing type (or {#code null} if it should get resolved)
                     * @param annotations the type annotations
                     * @since 4.0
                     */
                    // @ts-ignore
                    constructor(resolvableType: org.springframework.core.ResolvableType, type: java.lang.Class<any>, annotations: java.lang.annotation.Annotation[])
                    /**
                     * Variation of {@link #getType()} that accounts for a primitive type by
                     * returning its object wrapper type.
                     * <p>This is useful for conversion service implementations that wish to
                     * normalize to object-based types and not work with primitive types directly.
                     */
                    // @ts-ignore
                    getObjectType(): java.lang.Class<?>
                    /**
                     * The type of the backing class, method parameter, field, or property
                     * described by this TypeDescriptor.
                     * <p>Returns primitive types as-is. See {@link #getObjectType()} for a
                     * variation of this operation that resolves primitive types to their
                     * corresponding Object types if necessary.
                     * @see #getObjectType()
                     */
                    // @ts-ignore
                    getType(): java.lang.Class<?>
                    /**
                     * Return the underlying {@link ResolvableType}.
                     * @since 4.0
                     */
                    // @ts-ignore
                    getResolvableType(): org.springframework.core.ResolvableType
                    /**
                     * Return the underlying source of the descriptor. Will return a {@link Field},
                     * {@link MethodParameter} or {@link Type} depending on how the {@link TypeDescriptor}
                     * was constructed. This method is primarily to provide access to additional
                     * type information or meta-data that alternative JVM languages may provide.
                     * @since 4.0
                     */
                    // @ts-ignore
                    getSource(): java.lang.Object
                    /**
                     * Narrows this {@link TypeDescriptor} by setting its type to the class of the
                     * provided value.
                     * <p>If the value is {@code null}, no narrowing is performed and this TypeDescriptor
                     * is returned unchanged.
                     * <p>Designed to be called by binding frameworks when they read property, field,
                     * or method return values. Allows such frameworks to narrow a TypeDescriptor built
                     * from a declared property, field, or method return value type. For example, a field
                     * declared as {@code java.lang.Object} would be narrowed to {@code java.util.HashMap}
                     * if it was set to a {@code java.util.HashMap} value. The narrowed TypeDescriptor
                     * can then be used to convert the HashMap to some other type. Annotation and nested
                     * type context is preserved by the narrowed copy.
                     * @param value the value to use for narrowing this type descriptor
                     * @return this TypeDescriptor narrowed (returns a copy with its type updated to the
                     *  class of the provided value)
                     */
                    // @ts-ignore
                    narrow(value: any): org.springframework.core.convert.TypeDescriptor
                    /**
                     * Cast this {@link TypeDescriptor} to a superclass or implemented interface
                     * preserving annotations and nested type context.
                     * @param superType the super type to cast to (can be {#code null})
                     * @return a new TypeDescriptor for the up-cast type
                     * @throws IllegalArgumentException if this type is not assignable to the super-type
                     * @since 3.2
                     */
                    // @ts-ignore
                    upcast(superType: java.lang.Class<any>): org.springframework.core.convert.TypeDescriptor
                    /**
                     * Return the name of this type: the fully qualified class name.
                     */
                    // @ts-ignore
                    getName(): java.lang.String
                    /**
                     * Is this type a primitive type?
                     */
                    // @ts-ignore
                    isPrimitive(): boolean
                    /**
                     * Return the annotations associated with this type descriptor, if any.
                     * @return the annotations, or an empty array if none
                     */
                    // @ts-ignore
                    getAnnotations(): java.lang.annotation.Annotation[]
                    /**
                     * Determine if this type descriptor has the specified annotation.
                     * <p>As of Spring Framework 4.2, this method supports arbitrary levels
                     * of meta-annotations.
                     * @param annotationType the annotation type
                     * @return <tt>true</tt> if the annotation is present
                     */
                    // @ts-ignore
                    hasAnnotation(annotationType: java.lang.Class<java.lang.annotation.Annotation>): boolean
                    /**
                     * Obtain the annotation of the specified {@code annotationType} that is on this type descriptor.
                     * <p>As of Spring Framework 4.2, this method supports arbitrary levels of meta-annotations.
                     * @param annotationType the annotation type
                     * @return the annotation, or {#code null} if no such annotation exists on this type descriptor
                     */
                    // @ts-ignore
                    getAnnotation<T extends java.lang.annotation.Annotation>(annotationType: java.lang.Class<T>): T
                    /**
                     * Returns true if an object of this type descriptor can be assigned to the location
                     * described by the given type descriptor.
                     * <p>For example, {@code valueOf(String.class).isAssignableTo(valueOf(CharSequence.class))}
                     * returns {@code true} because a String value can be assigned to a CharSequence variable.
                     * On the other hand, {@code valueOf(Number.class).isAssignableTo(valueOf(Integer.class))}
                     * returns {@code false} because, while all Integers are Numbers, not all Numbers are Integers.
                     * <p>For arrays, collections, and maps, element and key/value types are checked if declared.
                     * For example, a List&lt;String&gt; field value is assignable to a Collection&lt;CharSequence&gt;
                     * field, but List&lt;Number&gt; is not assignable to List&lt;Integer&gt;.
                     * @return {#code true} if this type is assignable to the type represented by the provided
                     *  type descriptor
                     * @see #getObjectType()
                     */
                    // @ts-ignore
                    isAssignableTo(typeDescriptor: org.springframework.core.convert.TypeDescriptor): boolean
                    /**
                     * Is this type a {@link Collection} type?
                     */
                    // @ts-ignore
                    isCollection(): boolean
                    /**
                     * Is this type an array type?
                     */
                    // @ts-ignore
                    isArray(): boolean
                    /**
                     * If this type is an array, returns the array's component type.
                     * If this type is a {@code Stream}, returns the stream's component type.
                     * If this type is a {@link Collection} and it is parameterized, returns the Collection's element type.
                     * If the Collection is not parameterized, returns {@code null} indicating the element type is not declared.
                     * @return the array component type or Collection element type, or {#code null} if this type is not
                     *  an array type or a {@code java.util.Collection} or if its element type is not parameterized
                     * @see #elementTypeDescriptor(Object)
                     */
                    // @ts-ignore
                    getElementTypeDescriptor(): org.springframework.core.convert.TypeDescriptor
                    /**
                     * If this type is a {@link Collection} or an array, creates a element TypeDescriptor
                     * from the provided collection or array element.
                     * <p>Narrows the {@link #getElementTypeDescriptor() elementType} property to the class
                     * of the provided collection or array element. For example, if this describes a
                     * {@code java.util.List&lt;java.lang.Number&lt;} and the element argument is an
                     * {@code java.lang.Integer}, the returned TypeDescriptor will be {@code java.lang.Integer}.
                     * If this describes a {@code java.util.List&lt;?&gt;} and the element argument is an
                     * {@code java.lang.Integer}, the returned TypeDescriptor will be {@code java.lang.Integer}
                     * as well.
                     * <p>Annotation and nested type context will be preserved in the narrowed
                     * TypeDescriptor that is returned.
                     * @param element the collection or array element
                     * @return a element type descriptor, narrowed to the type of the provided element
                     * @see #getElementTypeDescriptor()
                     * @see #narrow(Object)
                     */
                    // @ts-ignore
                    elementTypeDescriptor(element: any): org.springframework.core.convert.TypeDescriptor
                    /**
                     * Is this type a {@link Map} type?
                     */
                    // @ts-ignore
                    isMap(): boolean
                    /**
                     * If this type is a {@link Map} and its key type is parameterized,
                     * returns the map's key type. If the Map's key type is not parameterized,
                     * returns {@code null} indicating the key type is not declared.
                     * @return the Map key type, or {#code null} if this type is a Map
                     *  but its key type is not parameterized
                     * @throws IllegalStateException if this type is not a {#code java.util.Map}
                     */
                    // @ts-ignore
                    getMapKeyTypeDescriptor(): org.springframework.core.convert.TypeDescriptor
                    /**
                     * If this type is a {@link Map}, creates a mapKey {@link TypeDescriptor}
                     * from the provided map key.
                     * <p>Narrows the {@link #getMapKeyTypeDescriptor() mapKeyType} property
                     * to the class of the provided map key. For example, if this describes a
                     * {@code java.util.Map&lt;java.lang.Number, java.lang.String&lt;} and the key
                     * argument is a {@code java.lang.Integer}, the returned TypeDescriptor will be
                     * {@code java.lang.Integer}. If this describes a {@code java.util.Map&lt;?, ?&gt;}
                     * and the key argument is a {@code java.lang.Integer}, the returned
                     * TypeDescriptor will be {@code java.lang.Integer} as well.
                     * <p>Annotation and nested type context will be preserved in the narrowed
                     * TypeDescriptor that is returned.
                     * @param mapKey the map key
                     * @return the map key type descriptor
                     * @throws IllegalStateException if this type is not a {#code java.util.Map}
                     * @see #narrow(Object)
                     */
                    // @ts-ignore
                    getMapKeyTypeDescriptor(mapKey: any): org.springframework.core.convert.TypeDescriptor
                    /**
                     * If this type is a {@link Map} and its value type is parameterized,
                     * returns the map's value type.
                     * <p>If the Map's value type is not parameterized, returns {@code null}
                     * indicating the value type is not declared.
                     * @return the Map value type, or {#code null} if this type is a Map
                     *  but its value type is not parameterized
                     * @throws IllegalStateException if this type is not a {#code java.util.Map}
                     */
                    // @ts-ignore
                    getMapValueTypeDescriptor(): org.springframework.core.convert.TypeDescriptor
                    /**
                     * If this type is a {@link Map}, creates a mapValue {@link TypeDescriptor}
                     * from the provided map value.
                     * <p>Narrows the {@link #getMapValueTypeDescriptor() mapValueType} property
                     * to the class of the provided map value. For example, if this describes a
                     * {@code java.util.Map&lt;java.lang.String, java.lang.Number&lt;} and the value
                     * argument is a {@code java.lang.Integer}, the returned TypeDescriptor will be
                     * {@code java.lang.Integer}. If this describes a {@code java.util.Map&lt;?, ?&gt;}
                     * and the value argument is a {@code java.lang.Integer}, the returned
                     * TypeDescriptor will be {@code java.lang.Integer} as well.
                     * <p>Annotation and nested type context will be preserved in the narrowed
                     * TypeDescriptor that is returned.
                     * @param mapValue the map value
                     * @return the map value type descriptor
                     * @throws IllegalStateException if this type is not a {#code java.util.Map}
                     * @see #narrow(Object)
                     */
                    // @ts-ignore
                    getMapValueTypeDescriptor(mapValue: any): org.springframework.core.convert.TypeDescriptor
                    // @ts-ignore
                    equals(other: any): boolean
                    // @ts-ignore
                    hashCode(): int
                    // @ts-ignore
                    toString(): java.lang.String
                    /**
                     * Create a new type descriptor for an object.
                     * <p>Use this factory method to introspect a source object before asking the
                     * conversion system to convert it to some another type.
                     * <p>If the provided object is {@code null}, returns {@code null}, else calls
                     * {@link #valueOf(Class)} to build a TypeDescriptor from the object's class.
                     * @param source the source object
                     * @return the type descriptor
                     */
                    // @ts-ignore
                    forObject(source: any): org.springframework.core.convert.TypeDescriptor
                    /**
                     * Create a new type descriptor from the given type.
                     * <p>Use this to instruct the conversion system to convert an object to a
                     * specific target type, when no type location such as a method parameter or
                     * field is available to provide additional conversion context.
                     * <p>Generally prefer use of {@link #forObject(Object)} for constructing type
                     * descriptors from source objects, as it handles the {@code null} object case.
                     * @param type the class (may be {#code null} to indicate {@code Object.class})
                     * @return the corresponding type descriptor
                     */
                    // @ts-ignore
                    valueOf(type: java.lang.Class<any>): org.springframework.core.convert.TypeDescriptor
                    /**
                     * Create a new type descriptor from a {@link java.util.Collection} type.
                     * <p>Useful for converting to typed Collections.
                     * <p>For example, a {@code List<String>} could be converted to a
                     * {@code List<EmailAddress>} by converting to a targetType built with this method.
                     * The method call to construct such a {@code TypeDescriptor} would look something
                     * like: {@code collection(List.class, TypeDescriptor.valueOf(EmailAddress.class));}
                     * @param collectionType the collection type, which must implement {#link Collection}.
                     * @param elementTypeDescriptor a descriptor for the collection's element type,
                     *  used to convert collection elements
                     * @return the collection type descriptor
                     */
                    // @ts-ignore
                    collection(collectionType: java.lang.Class<any>, elementTypeDescriptor: org.springframework.core.convert.TypeDescriptor): org.springframework.core.convert.TypeDescriptor
                    /**
                     * Create a new type descriptor from a {@link java.util.Map} type.
                     * <p>Useful for converting to typed Maps.
                     * <p>For example, a Map&lt;String, String&gt; could be converted to a Map&lt;Id, EmailAddress&gt;
                     * by converting to a targetType built with this method:
                     * The method call to construct such a TypeDescriptor would look something like:
                     * <pre class="code">
                     * map(Map.class, TypeDescriptor.valueOf(Id.class), TypeDescriptor.valueOf(EmailAddress.class));
                     * </pre>
                     * @param mapType the map type, which must implement {#link Map}
                     * @param keyTypeDescriptor a descriptor for the map's key type, used to convert map keys
                     * @param valueTypeDescriptor the map's value type, used to convert map values
                     * @return the map type descriptor
                     */
                    // @ts-ignore
                    map(mapType: java.lang.Class<any>, keyTypeDescriptor: org.springframework.core.convert.TypeDescriptor, valueTypeDescriptor: org.springframework.core.convert.TypeDescriptor): org.springframework.core.convert.TypeDescriptor
                    /**
                     * Create a new type descriptor as an array of the specified type.
                     * <p>For example to create a {@code Map<String,String>[]} use:
                     * <pre class="code">
                     * TypeDescriptor.array(TypeDescriptor.map(Map.class, TypeDescriptor.value(String.class), TypeDescriptor.value(String.class)));
                     * </pre>
                     * @param elementTypeDescriptor the {#link TypeDescriptor} of the array element or {@code null}
                     * @return an array {#link TypeDescriptor} or {@code null} if {@code elementTypeDescriptor} is {@code null}
                     * @since 3.2.1
                     */
                    // @ts-ignore
                    array(elementTypeDescriptor: org.springframework.core.convert.TypeDescriptor): org.springframework.core.convert.TypeDescriptor
                    /**
                     * Create a type descriptor for a nested type declared within the method parameter.
                     * <p>For example, if the methodParameter is a {@code List<String>} and the
                     * nesting level is 1, the nested type descriptor will be String.class.
                     * <p>If the methodParameter is a {@code List<List<String>>} and the nesting
                     * level is 2, the nested type descriptor will also be a String.class.
                     * <p>If the methodParameter is a {@code Map<Integer, String>} and the nesting
                     * level is 1, the nested type descriptor will be String, derived from the map value.
                     * <p>If the methodParameter is a {@code List<Map<Integer, String>>} and the
                     * nesting level is 2, the nested type descriptor will be String, derived from the map value.
                     * <p>Returns {@code null} if a nested type cannot be obtained because it was not declared.
                     * For example, if the method parameter is a {@code List<?>}, the nested type
                     * descriptor returned will be {@code null}.
                     * @param methodParameter the method parameter with a nestingLevel of 1
                     * @param nestingLevel the nesting level of the collection/array element or
                     *  map key/value declaration within the method parameter
                     * @return the nested type descriptor at the specified nesting level,
                     *  or {#code null} if it could not be obtained
                     * @throws IllegalArgumentException if the nesting level of the input
                     *  {#link MethodParameter} argument is not 1, or if the types up to the
                     *  specified nesting level are not of collection, array, or map types
                     */
                    // @ts-ignore
                    nested(methodParameter: org.springframework.core.MethodParameter, nestingLevel: number /*int*/): org.springframework.core.convert.TypeDescriptor
                    /**
                     * Create a type descriptor for a nested type declared within the field.
                     * <p>For example, if the field is a {@code List<String>} and the nesting
                     * level is 1, the nested type descriptor will be {@code String.class}.
                     * <p>If the field is a {@code List<List<String>>} and the nesting level is
                     * 2, the nested type descriptor will also be a {@code String.class}.
                     * <p>If the field is a {@code Map<Integer, String>} and the nesting level
                     * is 1, the nested type descriptor will be String, derived from the map value.
                     * <p>If the field is a {@code List<Map<Integer, String>>} and the nesting
                     * level is 2, the nested type descriptor will be String, derived from the map value.
                     * <p>Returns {@code null} if a nested type cannot be obtained because it was not
                     * declared. For example, if the field is a {@code List<?>}, the nested type
                     * descriptor returned will be {@code null}.
                     * @param field the field
                     * @param nestingLevel the nesting level of the collection/array element or
                     *  map key/value declaration within the field
                     * @return the nested type descriptor at the specified nesting level,
                     *  or {#code null} if it could not be obtained
                     * @throws IllegalArgumentException if the types up to the specified nesting
                     *  level are not of collection, array, or map types
                     */
                    // @ts-ignore
                    nested(field: java.lang.reflect.Field, nestingLevel: number /*int*/): org.springframework.core.convert.TypeDescriptor
                    /**
                     * Create a type descriptor for a nested type declared within the property.
                     * <p>For example, if the property is a {@code List<String>} and the nesting
                     * level is 1, the nested type descriptor will be {@code String.class}.
                     * <p>If the property is a {@code List<List<String>>} and the nesting level
                     * is 2, the nested type descriptor will also be a {@code String.class}.
                     * <p>If the property is a {@code Map<Integer, String>} and the nesting level
                     * is 1, the nested type descriptor will be String, derived from the map value.
                     * <p>If the property is a {@code List<Map<Integer, String>>} and the nesting
                     * level is 2, the nested type descriptor will be String, derived from the map value.
                     * <p>Returns {@code null} if a nested type cannot be obtained because it was not
                     * declared. For example, if the property is a {@code List<?>}, the nested type
                     * descriptor returned will be {@code null}.
                     * @param property the property
                     * @param nestingLevel the nesting level of the collection/array element or
                     *  map key/value declaration within the property
                     * @return the nested type descriptor at the specified nesting level, or
                     *  {#code null} if it could not be obtained
                     * @throws IllegalArgumentException if the types up to the specified nesting
                     *  level are not of collection, array, or map types
                     */
                    // @ts-ignore
                    nested(property: org.springframework.core.convert.Property, nestingLevel: number /*int*/): org.springframework.core.convert.TypeDescriptor
                }
            }
        }
    }
}
