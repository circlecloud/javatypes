declare namespace org {
    namespace springframework {
        namespace asm {
            /**
             * A visitor to visit a Java class. The methods of this class must be called in the following order:
             * {@code visit} [ {@code visitSource} ] [ {@code visitModule} ][ {@code visitNestHost} ][ {@code
             * visitPermittedSubtype} ][ {@code visitOuterClass} ] ( {@code visitAnnotation} | {@code
             * visitTypeAnnotation} | {@code visitAttribute} )* ( {@code visitNestMember} | {@code
             * visitInnerClass} | {@code visitField} | {@code visitMethod} )* {@code visitEnd}.
             * @author Eric Bruneton
             */
            // @ts-ignore
            abstract class ClassVisitor extends java.lang.Object {
                /**
                 * Constructs a new {@link ClassVisitor}.
                 * @param api the ASM API version implemented by this visitor. Must be one of {#link
                 *      Opcodes#ASM4}, {@link Opcodes#ASM5}, {@link Opcodes#ASM6} or {@link Opcodes#ASM7}.
                 */
                // @ts-ignore
                constructor(api: number /*int*/)
                /**
                 * Constructs a new {@link ClassVisitor}.
                 * @param api the ASM API version implemented by this visitor. Must be one of {#link
                 *      Opcodes#ASM4}, {@link Opcodes#ASM5}, {@link Opcodes#ASM6} or {@link Opcodes#ASM7}.
                 * @param classVisitor the class visitor to which this visitor must delegate method calls. May be
                 *      null.
                 */
                // @ts-ignore
                constructor(api: number /*int*/, classVisitor: org.springframework.asm.ClassVisitor)
                /**
                 * The ASM API version implemented by this visitor. The value of this field must be one of {@link
                 * Opcodes#ASM4}, {@link Opcodes#ASM5}, {@link Opcodes#ASM6} or {@link Opcodes#ASM7}.
                 */
                // @ts-ignore
                readonly api: number /*int*/
                /**
                 * The class visitor to which this visitor must delegate method calls. May be {@literal null}.
                 */
                // @ts-ignore
                cv: org.springframework.asm.ClassVisitor
                /**
                 * Visits the header of the class.
                 * @param version the class version. The minor version is stored in the 16 most significant bits,
                 *      and the major version in the 16 least significant bits.
                 * @param access the class's access flags (see {#link Opcodes}). This parameter also indicates if
                 *      the class is deprecated.
                 * @param name the internal name of the class (see {#link Type#getInternalName()}).
                 * @param signature the signature of this class. May be {#literal null} if the class is not a
                 *      generic one, and does not extend or implement generic classes or interfaces.
                 * @param superName the internal of name of the super class (see {#link Type#getInternalName()}).
                 *      For interfaces, the super class is {@link Object}. May be {@literal null}, but only for the
                 *      {@link Object} class.
                 * @param interfaces the internal names of the class's interfaces (see {#link
                 *      Type#getInternalName()}). May be {@literal null}.
                 */
                // @ts-ignore
                public visit(version: number /*int*/, access: number /*int*/, name: java.lang.String | string, signature: java.lang.String | string, superName: java.lang.String | string, interfaces: java.lang.String[] | string[]): void
                /**
                 * Visits the source of the class.
                 * @param source the name of the source file from which the class was compiled. May be {#literal
                 *      null}.
                 * @param debug additional debug information to compute the correspondence between source and
                 *      compiled elements of the class. May be {#literal null}.
                 */
                // @ts-ignore
                public visitSource(source: java.lang.String | string, debug: java.lang.String | string): void
                /**
                 * Visit the module corresponding to the class.
                 * @param name the fully qualified name (using dots) of the module.
                 * @param access the module access flags, among {#code ACC_OPEN}, {@code ACC_SYNTHETIC} and {@code
                 *      ACC_MANDATED}.
                 * @param version the module version, or {#literal null}.
                 * @return a visitor to visit the module values, or {#literal null} if this visitor is not
                 *      interested in visiting this module.
                 */
                // @ts-ignore
                public visitModule(name: java.lang.String | string, access: number /*int*/, version: java.lang.String | string): org.springframework.asm.ModuleVisitor
                /**
                 * Visits the nest host class of the class. A nest is a set of classes of the same package that
                 * share access to their private members. One of these classes, called the host, lists the other
                 * members of the nest, which in turn should link to the host of their nest. This method must be
                 * called only once and only if the visited class is a non-host member of a nest. A class is
                 * implicitly its own nest, so it's invalid to call this method with the visited class name as
                 * argument.
                 * @param nestHost the internal name of the host class of the nest.
                 */
                // @ts-ignore
                public visitNestHost(nestHost: java.lang.String | string): void
                /**
                 * Visits the enclosing class of the class. This method must be called only if the class has an
                 * enclosing class.
                 * @param owner internal name of the enclosing class of the class.
                 * @param name the name of the method that contains the class, or {#literal null} if the class is
                 *      not enclosed in a method of its enclosing class.
                 * @param descriptor the descriptor of the method that contains the class, or {#literal null} if
                 *      the class is not enclosed in a method of its enclosing class.
                 */
                // @ts-ignore
                public visitOuterClass(owner: java.lang.String | string, name: java.lang.String | string, descriptor: java.lang.String | string): void
                /**
                 * Visits an annotation of the class.
                 * @param descriptor the class descriptor of the annotation class.
                 * @param visible {#literal true} if the annotation is visible at runtime.
                 * @return a visitor to visit the annotation values, or {#literal null} if this visitor is not
                 *      interested in visiting this annotation.
                 */
                // @ts-ignore
                public visitAnnotation(descriptor: java.lang.String | string, visible: boolean): org.springframework.asm.AnnotationVisitor
                /**
                 * Visits an annotation on a type in the class signature.
                 * @param typeRef a reference to the annotated type. The sort of this type reference must be
                 *      {#link TypeReference#CLASS_TYPE_PARAMETER}, {@link
                 *      TypeReference#CLASS_TYPE_PARAMETER_BOUND} or {@link TypeReference#CLASS_EXTENDS}. See
                 *      {@link TypeReference}.
                 * @param typePath the path to the annotated type argument, wildcard bound, array element type, or
                 *      static inner type within 'typeRef'. May be {#literal null} if the annotation targets
                 *      'typeRef' as a whole.
                 * @param descriptor the class descriptor of the annotation class.
                 * @param visible {#literal true} if the annotation is visible at runtime.
                 * @return a visitor to visit the annotation values, or {#literal null} if this visitor is not
                 *      interested in visiting this annotation.
                 */
                // @ts-ignore
                public visitTypeAnnotation(typeRef: number /*int*/, typePath: org.springframework.asm.TypePath, descriptor: java.lang.String | string, visible: boolean): org.springframework.asm.AnnotationVisitor
                /**
                 * Visits a non standard attribute of the class.
                 * @param attribute an attribute.
                 */
                // @ts-ignore
                public visitAttribute(attribute: org.springframework.asm.Attribute): void
                /**
                 * Visits a member of the nest. A nest is a set of classes of the same package that share access
                 * to their private members. One of these classes, called the host, lists the other members of the
                 * nest, which in turn should link to the host of their nest. This method must be called only if
                 * the visited class is the host of a nest. A nest host is implicitly a member of its own nest, so
                 * it's invalid to call this method with the visited class name as argument.
                 * @param nestMember the internal name of a nest member.
                 */
                // @ts-ignore
                public visitNestMember(nestMember: java.lang.String | string): void
                /**
                 * <b>Experimental, use at your own risk. This method will be renamed when it becomes stable, this
                 * will break existing code using it</b>. Visits a permitted subtypes. A permitted subtypes is one
                 * of the allowed subtypes of the current class.
                 * @param permittedSubtype the internal name of a permitted subtype.
                 * @deprecated this API is experimental.
                 */
                // @ts-ignore
                public visitPermittedSubtypeExperimental(permittedSubtype: java.lang.String | string): void
                /**
                 * Visits information about an inner class. This inner class is not necessarily a member of the
                 * class being visited.
                 * @param name the internal name of an inner class (see {#link Type#getInternalName()}).
                 * @param outerName the internal name of the class to which the inner class belongs (see {#link
                 *      Type#getInternalName()}). May be {@literal null} for not member classes.
                 * @param innerName the (simple) name of the inner class inside its enclosing class. May be
                 *      {#literal null} for anonymous inner classes.
                 * @param access the access flags of the inner class as originally declared in the enclosing
                 *      class.
                 */
                // @ts-ignore
                public visitInnerClass(name: java.lang.String | string, outerName: java.lang.String | string, innerName: java.lang.String | string, access: number /*int*/): void
                /**
                 * Visits a record component of the class.
                 * @param access the record component access flags, the only possible value is {#link
                 *      Opcodes#ACC_DEPRECATED}.
                 * @param name the record component name.
                 * @param descriptor the record component descriptor (see {#link Type}).
                 * @param signature the record component signature. May be {#literal null} if the record component
                 *      type does not use generic types.
                 * @return a visitor to visit this record component annotations and attributes, or {#literal null}
                 *      if this class visitor is not interested in visiting these annotations and attributes.
                 * @deprecated this API is experimental.
                 */
                // @ts-ignore
                public visitRecordComponentExperimental(access: number /*int*/, name: java.lang.String | string, descriptor: java.lang.String | string, signature: java.lang.String | string): org.springframework.asm.RecordComponentVisitor
                /**
                 * Visits a field of the class.
                 * @param access the field's access flags (see {#link Opcodes}). This parameter also indicates if
                 *      the field is synthetic and/or deprecated.
                 * @param name the field's name.
                 * @param descriptor the field's descriptor (see {#link Type}).
                 * @param signature the field's signature. May be {#literal null} if the field's type does not use
                 *      generic types.
                 * @param value the field's initial value. This parameter, which may be {#literal null} if the
                 *      field does not have an initial value, must be an {@link Integer}, a {@link Float}, a {@link
                 *      Long}, a {@link Double} or a {@link String} (for {@code int}, {@code float}, {@code long}
                 *      or {@code String} fields respectively). <i>This parameter is only used for static
                 *      fields</i>. Its value is ignored for non static fields, which must be initialized through
                 *      bytecode instructions in constructors or methods.
                 * @return a visitor to visit field annotations and attributes, or {#literal null} if this class
                 *      visitor is not interested in visiting these annotations and attributes.
                 */
                // @ts-ignore
                public visitField(access: number /*int*/, name: java.lang.String | string, descriptor: java.lang.String | string, signature: java.lang.String | string, value: java.lang.Object | any): org.springframework.asm.FieldVisitor
                /**
                 * Visits a method of the class. This method <i>must</i> return a new {@link MethodVisitor}
                 * instance (or {@literal null}) each time it is called, i.e., it should not return a previously
                 * returned visitor.
                 * @param access the method's access flags (see {#link Opcodes}). This parameter also indicates if
                 *      the method is synthetic and/or deprecated.
                 * @param name the method's name.
                 * @param descriptor the method's descriptor (see {#link Type}).
                 * @param signature the method's signature. May be {#literal null} if the method parameters,
                 *      return type and exceptions do not use generic types.
                 * @param exceptions the internal names of the method's exception classes (see {#link
                 *      Type#getInternalName()}). May be {@literal null}.
                 * @return an object to visit the byte code of the method, or {#literal null} if this class
                 *      visitor is not interested in visiting the code of this method.
                 */
                // @ts-ignore
                public visitMethod(access: number /*int*/, name: java.lang.String | string, descriptor: java.lang.String | string, signature: java.lang.String | string, exceptions: java.lang.String[] | string[]): org.springframework.asm.MethodVisitor
                /**
                 * Visits the end of the class. This method, which is the last one to be called, is used to inform
                 * the visitor that all the fields and methods of the class have been visited.
                 */
                // @ts-ignore
                public visitEnd(): void
            }
        }
    }
}
