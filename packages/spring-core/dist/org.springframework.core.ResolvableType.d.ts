declare namespace org {
    namespace springframework {
        namespace core {
            /**
             * Encapsulates a Java {@link java.lang.reflect.Type}, providing access to
             * {@link #getSuperType() supertypes}, {@link #getInterfaces() interfaces}, and
             * {@link #getGeneric(int...) generic parameters} along with the ability to ultimately
             * {@link #resolve() resolve} to a {@link java.lang.Class}.
             * <p>{@code ResolvableTypes} may be obtained from {@link #forField(Field) fields},
             * {@link #forMethodParameter(Method, int) method parameters},
             * {@link #forMethodReturnType(Method) method returns} or
             * {@link #forClass(Class) classes}. Most methods on this class will themselves return
             * {@link ResolvableType ResolvableTypes}, allowing easy navigation. For example:
             * <pre class="code">
             * private HashMap&lt;Integer, List&lt;String&gt;&gt; myMap;
             * public void example() {
             * ResolvableType t = ResolvableType.forField(getClass().getDeclaredField("myMap"));
             * t.getSuperType(); // AbstractMap&lt;Integer, List&lt;String&gt;&gt;
             * t.asMap(); // Map&lt;Integer, List&lt;String&gt;&gt;
             * t.getGeneric(0).resolve(); // Integer
             * t.getGeneric(1).resolve(); // List
             * t.getGeneric(1); // List&lt;String&gt;
             * t.resolveGeneric(1, 0); // String
             * }
             * </pre>
             * @author Phillip Webb
             * @author Juergen Hoeller
             * @author Stephane Nicoll
             * @since 4.0
             * @see #forField(Field)
             * @see #forMethodParameter(Method, int)
             * @see #forMethodReturnType(Method)
             * @see #forConstructorParameter(Constructor, int)
             * @see #forClass(Class)
             * @see #forType(Type)
             * @see #forInstance(Object)
             * @see ResolvableTypeProvider
             */
            // @ts-ignore
            class ResolvableType extends java.lang.Object implements java.io.Serializable {
                /**
                 * {@code ResolvableType} returned when no value is available. {@code NONE} is used
                 * in preference to {@code null} so that multiple method calls can be safely chained.
                 */
                // @ts-ignore
                public static readonly NONE: org.springframework.core.ResolvableType
                /**
                 * Return the underling Java {@link Type} being managed.
                 */
                // @ts-ignore
                public getType(): java.lang.reflect.Type
                /**
                 * Return the underlying Java {@link Class} being managed, if available;
                 * otherwise {@code null}.
                 */
                // @ts-ignore
                public getRawClass(): java.lang.Class<any>
                /**
                 * Return the underlying source of the resolvable type. Will return a {@link Field},
                 * {@link MethodParameter} or {@link Type} depending on how the {@link ResolvableType}
                 * was constructed. With the exception of the {@link #NONE} constant, this method will
                 * never return {@code null}. This method is primarily to provide access to additional
                 * type information or meta-data that alternative JVM languages may provide.
                 */
                // @ts-ignore
                public getSource(): any
                /**
                 * Return this type as a resolved {@code Class}, falling back to
                 * {@link java.lang.Object} if no specific class can be resolved.
                 * @return the resolved {#link Class} or the {@code Object} fallback
                 * @since 5.1
                 * @see #getRawClass()
                 * @see #resolve(Class)
                 */
                // @ts-ignore
                public toClass(): java.lang.Class<any>
                /**
                 * Determine whether the given object is an instance of this {@code ResolvableType}.
                 * @param obj the object to check
                 * @since 4.2
                 * @see #isAssignableFrom(Class)
                 */
                // @ts-ignore
                public isInstance(obj: java.lang.Object | any): boolean
                /**
                 * Determine whether this {@code ResolvableType} is assignable from the
                 * specified other type.
                 * @param other the type to be checked against (as a {#code Class})
                 * @since 4.2
                 * @see #isAssignableFrom(ResolvableType)
                 */
                // @ts-ignore
                public isAssignableFrom(other: java.lang.Class<any>): boolean
                /**
                 * Determine whether this {@code ResolvableType} is assignable from the
                 * specified other type.
                 * <p>Attempts to follow the same rules as the Java compiler, considering
                 * whether both the {@link #resolve() resolved} {@code Class} is
                 * {@link Class#isAssignableFrom(Class) assignable from} the given type
                 * as well as whether all {@link #getGenerics() generics} are assignable.
                 * @param other the type to be checked against (as a {#code ResolvableType})
                 * @return {#code true} if the specified other type can be assigned to this
                 *  {@code ResolvableType}; {@code false} otherwise
                 */
                // @ts-ignore
                public isAssignableFrom(other: org.springframework.core.ResolvableType): boolean
                /**
                 * Return {@code true} if this type resolves to a Class that represents an array.
                 * @see #getComponentType()
                 */
                // @ts-ignore
                public isArray(): boolean
                /**
                 * Return the ResolvableType representing the component type of the array or
                 * {@link #NONE} if this type does not represent an array.
                 * @see #isArray()
                 */
                // @ts-ignore
                public getComponentType(): org.springframework.core.ResolvableType
                /**
                 * Convenience method to return this type as a resolvable {@link Collection} type.
                 * Returns {@link #NONE} if this type does not implement or extend
                 * {@link Collection}.
                 * @see #as(Class)
                 * @see #asMap()
                 */
                // @ts-ignore
                public asCollection(): org.springframework.core.ResolvableType
                /**
                 * Convenience method to return this type as a resolvable {@link Map} type.
                 * Returns {@link #NONE} if this type does not implement or extend
                 * {@link Map}.
                 * @see #as(Class)
                 * @see #asCollection()
                 */
                // @ts-ignore
                public asMap(): org.springframework.core.ResolvableType
                /**
                 * Return this type as a {@link ResolvableType} of the specified class. Searches
                 * {@link #getSuperType() supertype} and {@link #getInterfaces() interface}
                 * hierarchies to find a match, returning {@link #NONE} if this type does not
                 * implement or extend the specified class.
                 * @param type the required type (typically narrowed)
                 * @return a {#link ResolvableType} representing this object as the specified
                 *  type, or {@link #NONE} if not resolvable as that type
                 * @see #asCollection()
                 * @see #asMap()
                 * @see #getSuperType()
                 * @see #getInterfaces()
                 */
                // @ts-ignore
                public as(type: java.lang.Class<any>): org.springframework.core.ResolvableType
                /**
                 * Return a {@link ResolvableType} representing the direct supertype of this type.
                 * If no supertype is available this method returns {@link #NONE}.
                 * <p>Note: The resulting {@link ResolvableType} instance may not be {@link Serializable}.
                 * @see #getInterfaces()
                 */
                // @ts-ignore
                public getSuperType(): org.springframework.core.ResolvableType
                /**
                 * Return a {@link ResolvableType} array representing the direct interfaces
                 * implemented by this type. If this type does not implement any interfaces an
                 * empty array is returned.
                 * <p>Note: The resulting {@link ResolvableType} instances may not be {@link Serializable}.
                 * @see #getSuperType()
                 */
                // @ts-ignore
                public getInterfaces(): org.springframework.core.ResolvableType[]
                /**
                 * Return {@code true} if this type contains generic parameters.
                 * @see #getGeneric(int...)
                 * @see #getGenerics()
                 */
                // @ts-ignore
                public hasGenerics(): boolean
                /**
                 * Determine whether the underlying type has any unresolvable generics:
                 * either through an unresolvable type variable on the type itself
                 * or through implementing a generic interface in a raw fashion,
                 * i.e. without substituting that interface's type variables.
                 * The result will be {@code true} only in those two scenarios.
                 */
                // @ts-ignore
                public hasUnresolvableGenerics(): boolean
                /**
                 * Return a {@link ResolvableType} for the specified nesting level.
                 * See {@link #getNested(int, Map)} for details.
                 * @param nestingLevel the nesting level
                 * @return the {#link ResolvableType} type, or {@code #NONE}
                 */
                // @ts-ignore
                public getNested(nestingLevel: number /*int*/): org.springframework.core.ResolvableType
                /**
                 * Return a {@link ResolvableType} for the specified nesting level.
                 * <p>The nesting level refers to the specific generic parameter that should be returned.
                 * A nesting level of 1 indicates this type; 2 indicates the first nested generic;
                 * 3 the second; and so on. For example, given {@code List<Set<Integer>>} level 1 refers
                 * to the {@code List}, level 2 the {@code Set}, and level 3 the {@code Integer}.
                 * <p>The {@code typeIndexesPerLevel} map can be used to reference a specific generic
                 * for the given level. For example, an index of 0 would refer to a {@code Map} key;
                 * whereas, 1 would refer to the value. If the map does not contain a value for a
                 * specific level the last generic will be used (e.g. a {@code Map} value).
                 * <p>Nesting levels may also apply to array types; for example given
                 * {@code String[]}, a nesting level of 2 refers to {@code String}.
                 * <p>If a type does not {@link #hasGenerics() contain} generics the
                 * {@link #getSuperType() supertype} hierarchy will be considered.
                 * @param nestingLevel the required nesting level, indexed from 1 for the
                 *  current type, 2 for the first nested generic, 3 for the second and so on
                 * @param typeIndexesPerLevel a map containing the generic index for a given
                 *  nesting level (may be {#code null})
                 * @return a {#link ResolvableType} for the nested level, or {@link #NONE}
                 */
                // @ts-ignore
                public getNested(nestingLevel: number /*int*/, typeIndexesPerLevel: java.util.Map<java.lang.Integer | number, java.lang.Integer | number>): org.springframework.core.ResolvableType
                /**
                 * Return a {@link ResolvableType} representing the generic parameter for the
                 * given indexes. Indexes are zero based; for example given the type
                 * {@code Map<Integer, List<String>>}, {@code getGeneric(0)} will access the
                 * {@code Integer}. Nested generics can be accessed by specifying multiple indexes;
                 * for example {@code getGeneric(1, 0)} will access the {@code String} from the
                 * nested {@code List}. For convenience, if no indexes are specified the first
                 * generic is returned.
                 * <p>If no generic is available at the specified indexes {@link #NONE} is returned.
                 * @param indexes the indexes that refer to the generic parameter
                 *  (may be omitted to return the first generic)
                 * @return a {#link ResolvableType} for the specified generic, or {@link #NONE}
                 * @see #hasGenerics()
                 * @see #getGenerics()
                 * @see #resolveGeneric(int...)
                 * @see #resolveGenerics()
                 */
                // @ts-ignore
                public getGeneric(...indexes: number /*int*/[]): org.springframework.core.ResolvableType
                /**
                 * Return an array of {@link ResolvableType ResolvableTypes} representing the generic parameters of
                 * this type. If no generics are available an empty array is returned. If you need to
                 * access a specific generic consider using the {@link #getGeneric(int...)} method as
                 * it allows access to nested generics and protects against
                 * {@code IndexOutOfBoundsExceptions}.
                 * @return an array of {#link ResolvableType ResolvableTypes} representing the generic parameters
                 *  (never {@code null})
                 * @see #hasGenerics()
                 * @see #getGeneric(int...)
                 * @see #resolveGeneric(int...)
                 * @see #resolveGenerics()
                 */
                // @ts-ignore
                public getGenerics(): org.springframework.core.ResolvableType[]
                /**
                 * Convenience method that will {@link #getGenerics() get} and
                 * {@link #resolve() resolve} generic parameters.
                 * @return an array of resolved generic parameters (the resulting array
                 *  will never be {#code null}, but it may contain {@code null} elements})
                 * @see #getGenerics()
                 * @see #resolve()
                 */
                // @ts-ignore
                public resolveGenerics(): java.lang.Class<any>[]
                /**
                 * Convenience method that will {@link #getGenerics() get} and {@link #resolve()
                 * resolve} generic parameters, using the specified {@code fallback} if any type
                 * cannot be resolved.
                 * @param fallback the fallback class to use if resolution fails
                 * @return an array of resolved generic parameters
                 * @see #getGenerics()
                 * @see #resolve()
                 */
                // @ts-ignore
                public resolveGenerics(fallback: java.lang.Class<any>): java.lang.Class<any>[]
                /**
                 * Convenience method that will {@link #getGeneric(int...) get} and
                 * {@link #resolve() resolve} a specific generic parameters.
                 * @param indexes the indexes that refer to the generic parameter
                 *  (may be omitted to return the first generic)
                 * @return a resolved {#link Class} or {@code null}
                 * @see #getGeneric(int...)
                 * @see #resolve()
                 */
                // @ts-ignore
                public resolveGeneric(...indexes: number /*int*/[]): java.lang.Class<any>
                /**
                 * Resolve this type to a {@link java.lang.Class}, returning {@code null}
                 * if the type cannot be resolved. This method will consider bounds of
                 * {@link TypeVariable TypeVariables} and {@link WildcardType WildcardTypes} if
                 * direct resolution fails; however, bounds of {@code Object.class} will be ignored.
                 * <p>If this method returns a non-null {@code Class} and {@link #hasGenerics()}
                 * returns {@code false}, the given type effectively wraps a plain {@code Class},
                 * allowing for plain {@code Class} processing if desirable.
                 * @return the resolved {#link Class}, or {@code null} if not resolvable
                 * @see #resolve(Class)
                 * @see #resolveGeneric(int...)
                 * @see #resolveGenerics()
                 */
                // @ts-ignore
                public resolve(): java.lang.Class<any>
                /**
                 * Resolve this type to a {@link java.lang.Class}, returning the specified
                 * {@code fallback} if the type cannot be resolved. This method will consider bounds
                 * of {@link TypeVariable TypeVariables} and {@link WildcardType WildcardTypes} if
                 * direct resolution fails; however, bounds of {@code Object.class} will be ignored.
                 * @param fallback the fallback class to use if resolution fails
                 * @return the resolved {#link Class} or the {@code fallback}
                 * @see #resolve()
                 * @see #resolveGeneric(int...)
                 * @see #resolveGenerics()
                 */
                // @ts-ignore
                public resolve(fallback: java.lang.Class<any>): java.lang.Class<any>
                // @ts-ignore
                public equals(other: java.lang.Object | any): boolean
                // @ts-ignore
                public hashCode(): number /*int*/
                /**
                 * Return a String representation of this type in its fully resolved form
                 * (including any generic parameters).
                 */
                // @ts-ignore
                public toString(): string
                /**
                 * Return a {@link ResolvableType} for the specified {@link Class},
                 * using the full generic type information for assignability checks.
                 * For example: {@code ResolvableType.forClass(MyArrayList.class)}.
                 * @param clazz the class to introspect ({#code null} is semantically
                 *  equivalent to {@code Object.class} for typical use cases here)
                 * @return a {#link ResolvableType} for the specified class
                 * @see #forClass(Class, Class)
                 * @see #forClassWithGenerics(Class, Class...)
                 */
                // @ts-ignore
                public static forClass(clazz: java.lang.Class<any>): org.springframework.core.ResolvableType
                /**
                 * Return a {@link ResolvableType} for the specified {@link Class},
                 * doing assignability checks against the raw class only (analogous to
                 * {@link Class#isAssignableFrom}, which this serves as a wrapper for.
                 * For example: {@code ResolvableType.forRawClass(List.class)}.
                 * @param clazz the class to introspect ({#code null} is semantically
                 *  equivalent to {@code Object.class} for typical use cases here)
                 * @return a {#link ResolvableType} for the specified class
                 * @since 4.2
                 * @see #forClass(Class)
                 * @see #getRawClass()
                 */
                // @ts-ignore
                public static forRawClass(clazz: java.lang.Class<any>): org.springframework.core.ResolvableType
                /**
                 * Return a {@link ResolvableType} for the specified base type
                 * (interface or base class) with a given implementation class.
                 * For example: {@code ResolvableType.forClass(List.class, MyArrayList.class)}.
                 * @param baseType the base type (must not be {#code null})
                 * @param implementationClass the implementation class
                 * @return a {#link ResolvableType} for the specified base type backed by the
                 *  given implementation class
                 * @see #forClass(Class)
                 * @see #forClassWithGenerics(Class, Class...)
                 */
                // @ts-ignore
                public static forClass(baseType: java.lang.Class<any>, implementationClass: java.lang.Class<any>): org.springframework.core.ResolvableType
                /**
                 * Return a {@link ResolvableType} for the specified {@link Class} with pre-declared generics.
                 * @param clazz the class (or interface) to introspect
                 * @param generics the generics of the class
                 * @return a {#link ResolvableType} for the specific class and generics
                 * @see #forClassWithGenerics(Class, ResolvableType...)
                 */
                // @ts-ignore
                public static forClassWithGenerics(clazz: java.lang.Class<any>, ...generics: java.lang.Class<any>[]): org.springframework.core.ResolvableType
                /**
                 * Return a {@link ResolvableType} for the specified {@link Class} with pre-declared generics.
                 * @param clazz the class (or interface) to introspect
                 * @param generics the generics of the class
                 * @return a {#link ResolvableType} for the specific class and generics
                 * @see #forClassWithGenerics(Class, Class...)
                 */
                // @ts-ignore
                public static forClassWithGenerics(clazz: java.lang.Class<any>, ...generics: org.springframework.core.ResolvableType[]): org.springframework.core.ResolvableType
                /**
                 * Return a {@link ResolvableType} for the specified instance. The instance does not
                 * convey generic information but if it implements {@link ResolvableTypeProvider} a
                 * more precise {@link ResolvableType} can be used than the simple one based on
                 * the {@link #forClass(Class) Class instance}.
                 * @param instance the instance
                 * @return a {#link ResolvableType} for the specified instance
                 * @since 4.2
                 * @see ResolvableTypeProvider
                 */
                // @ts-ignore
                public static forInstance(instance: java.lang.Object | any): org.springframework.core.ResolvableType
                /**
                 * Return a {@link ResolvableType} for the specified {@link Field}.
                 * @param field the source field
                 * @return a {#link ResolvableType} for the specified field
                 * @see #forField(Field, Class)
                 */
                // @ts-ignore
                public static forField(field: java.lang.reflect.Field): org.springframework.core.ResolvableType
                /**
                 * Return a {@link ResolvableType} for the specified {@link Field} with a given
                 * implementation.
                 * <p>Use this variant when the class that declares the field includes generic
                 * parameter variables that are satisfied by the implementation class.
                 * @param field the source field
                 * @param implementationClass the implementation class
                 * @return a {#link ResolvableType} for the specified field
                 * @see #forField(Field)
                 */
                // @ts-ignore
                public static forField(field: java.lang.reflect.Field, implementationClass: java.lang.Class<any>): org.springframework.core.ResolvableType
                /**
                 * Return a {@link ResolvableType} for the specified {@link Field} with a given
                 * implementation.
                 * <p>Use this variant when the class that declares the field includes generic
                 * parameter variables that are satisfied by the implementation type.
                 * @param field the source field
                 * @param implementationType the implementation type
                 * @return a {#link ResolvableType} for the specified field
                 * @see #forField(Field)
                 */
                // @ts-ignore
                public static forField(field: java.lang.reflect.Field, implementationType: org.springframework.core.ResolvableType): org.springframework.core.ResolvableType
                /**
                 * Return a {@link ResolvableType} for the specified {@link Field} with the
                 * given nesting level.
                 * @param field the source field
                 * @param nestingLevel the nesting level (1 for the outer level; 2 for a nested
                 *  generic type; etc)
                 * @see #forField(Field)
                 */
                // @ts-ignore
                public static forField(field: java.lang.reflect.Field, nestingLevel: number /*int*/): org.springframework.core.ResolvableType
                /**
                 * Return a {@link ResolvableType} for the specified {@link Field} with a given
                 * implementation and the given nesting level.
                 * <p>Use this variant when the class that declares the field includes generic
                 * parameter variables that are satisfied by the implementation class.
                 * @param field the source field
                 * @param nestingLevel the nesting level (1 for the outer level; 2 for a nested
                 *  generic type; etc)
                 * @param implementationClass the implementation class
                 * @return a {#link ResolvableType} for the specified field
                 * @see #forField(Field)
                 */
                // @ts-ignore
                public static forField(field: java.lang.reflect.Field, nestingLevel: number /*int*/, implementationClass: java.lang.Class<any>): org.springframework.core.ResolvableType
                /**
                 * Return a {@link ResolvableType} for the specified {@link Constructor} parameter.
                 * @param constructor the source constructor (must not be {#code null})
                 * @param parameterIndex the parameter index
                 * @return a {#link ResolvableType} for the specified constructor parameter
                 * @see #forConstructorParameter(Constructor, int, Class)
                 */
                // @ts-ignore
                public static forConstructorParameter(constructor: java.lang.reflect.Constructor<any>, parameterIndex: number /*int*/): org.springframework.core.ResolvableType
                /**
                 * Return a {@link ResolvableType} for the specified {@link Constructor} parameter
                 * with a given implementation. Use this variant when the class that declares the
                 * constructor includes generic parameter variables that are satisfied by the
                 * implementation class.
                 * @param constructor the source constructor (must not be {#code null})
                 * @param parameterIndex the parameter index
                 * @param implementationClass the implementation class
                 * @return a {#link ResolvableType} for the specified constructor parameter
                 * @see #forConstructorParameter(Constructor, int)
                 */
                // @ts-ignore
                public static forConstructorParameter(constructor: java.lang.reflect.Constructor<any>, parameterIndex: number /*int*/, implementationClass: java.lang.Class<any>): org.springframework.core.ResolvableType
                /**
                 * Return a {@link ResolvableType} for the specified {@link Method} return type.
                 * @param method the source for the method return type
                 * @return a {#link ResolvableType} for the specified method return
                 * @see #forMethodReturnType(Method, Class)
                 */
                // @ts-ignore
                public static forMethodReturnType(method: java.lang.reflect.Method): org.springframework.core.ResolvableType
                /**
                 * Return a {@link ResolvableType} for the specified {@link Method} return type.
                 * Use this variant when the class that declares the method includes generic
                 * parameter variables that are satisfied by the implementation class.
                 * @param method the source for the method return type
                 * @param implementationClass the implementation class
                 * @return a {#link ResolvableType} for the specified method return
                 * @see #forMethodReturnType(Method)
                 */
                // @ts-ignore
                public static forMethodReturnType(method: java.lang.reflect.Method, implementationClass: java.lang.Class<any>): org.springframework.core.ResolvableType
                /**
                 * Return a {@link ResolvableType} for the specified {@link Method} parameter.
                 * @param method the source method (must not be {#code null})
                 * @param parameterIndex the parameter index
                 * @return a {#link ResolvableType} for the specified method parameter
                 * @see #forMethodParameter(Method, int, Class)
                 * @see #forMethodParameter(MethodParameter)
                 */
                // @ts-ignore
                public static forMethodParameter(method: java.lang.reflect.Method, parameterIndex: number /*int*/): org.springframework.core.ResolvableType
                /**
                 * Return a {@link ResolvableType} for the specified {@link Method} parameter with a
                 * given implementation. Use this variant when the class that declares the method
                 * includes generic parameter variables that are satisfied by the implementation class.
                 * @param method the source method (must not be {#code null})
                 * @param parameterIndex the parameter index
                 * @param implementationClass the implementation class
                 * @return a {#link ResolvableType} for the specified method parameter
                 * @see #forMethodParameter(Method, int, Class)
                 * @see #forMethodParameter(MethodParameter)
                 */
                // @ts-ignore
                public static forMethodParameter(method: java.lang.reflect.Method, parameterIndex: number /*int*/, implementationClass: java.lang.Class<any>): org.springframework.core.ResolvableType
                /**
                 * Return a {@link ResolvableType} for the specified {@link MethodParameter}.
                 * @param methodParameter the source method parameter (must not be {#code null})
                 * @return a {#link ResolvableType} for the specified method parameter
                 * @see #forMethodParameter(Method, int)
                 */
                // @ts-ignore
                public static forMethodParameter(methodParameter: org.springframework.core.MethodParameter): org.springframework.core.ResolvableType
                /**
                 * Return a {@link ResolvableType} for the specified {@link MethodParameter} with a
                 * given implementation type. Use this variant when the class that declares the method
                 * includes generic parameter variables that are satisfied by the implementation type.
                 * @param methodParameter the source method parameter (must not be {#code null})
                 * @param implementationType the implementation type
                 * @return a {#link ResolvableType} for the specified method parameter
                 * @see #forMethodParameter(MethodParameter)
                 */
                // @ts-ignore
                public static forMethodParameter(methodParameter: org.springframework.core.MethodParameter, implementationType: org.springframework.core.ResolvableType): org.springframework.core.ResolvableType
                /**
                 * Return a {@link ResolvableType} for the specified {@link MethodParameter},
                 * overriding the target type to resolve with a specific given type.
                 * @param methodParameter the source method parameter (must not be {#code null})
                 * @param targetType the type to resolve (a part of the method parameter's type)
                 * @return a {#link ResolvableType} for the specified method parameter
                 * @see #forMethodParameter(Method, int)
                 */
                // @ts-ignore
                public static forMethodParameter(methodParameter: org.springframework.core.MethodParameter, targetType: java.lang.reflect.Type): org.springframework.core.ResolvableType
                /**
                 * Return a {@link ResolvableType} as a array of the specified {@code componentType}.
                 * @param componentType the component type
                 * @return a {#link ResolvableType} as an array of the specified component type
                 */
                // @ts-ignore
                public static forArrayComponent(componentType: org.springframework.core.ResolvableType): org.springframework.core.ResolvableType
                /**
                 * Return a {@link ResolvableType} for the specified {@link Type}.
                 * <p>Note: The resulting {@link ResolvableType} instance may not be {@link Serializable}.
                 * @param type the source type (potentially {#code null})
                 * @return a {#link ResolvableType} for the specified {@link Type}
                 * @see #forType(Type, ResolvableType)
                 */
                // @ts-ignore
                public static forType(type: java.lang.reflect.Type): org.springframework.core.ResolvableType
                /**
                 * Return a {@link ResolvableType} for the specified {@link Type} backed by the given
                 * owner type.
                 * <p>Note: The resulting {@link ResolvableType} instance may not be {@link Serializable}.
                 * @param type the source type or {#code null}
                 * @param owner the owner type used to resolve variables
                 * @return a {#link ResolvableType} for the specified {@link Type} and owner
                 * @see #forType(Type)
                 */
                // @ts-ignore
                public static forType(type: java.lang.reflect.Type, owner: org.springframework.core.ResolvableType): org.springframework.core.ResolvableType
                /**
                 * Return a {@link ResolvableType} for the specified {@link ParameterizedTypeReference}.
                 * <p>Note: The resulting {@link ResolvableType} instance may not be {@link Serializable}.
                 * @param typeReference the reference to obtain the source type from
                 * @return a {#link ResolvableType} for the specified {@link ParameterizedTypeReference}
                 * @since 4.3.12
                 * @see #forType(Type)
                 */
                // @ts-ignore
                public static forType(typeReference: org.springframework.core.ParameterizedTypeReference<any>): org.springframework.core.ResolvableType
                /**
                 * Clear the internal {@code ResolvableType}/{@code SerializableTypeWrapper} cache.
                 * @since 4.2
                 */
                // @ts-ignore
                public static clearCache(): void
            }
        }
    }
}
