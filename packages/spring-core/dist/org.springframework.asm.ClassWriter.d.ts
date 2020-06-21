declare namespace org {
    namespace springframework {
        namespace asm {
            /**
             * A {@link ClassVisitor} that generates a corresponding ClassFile structure, as defined in the Java
             * Virtual Machine Specification (JVMS). It can be used alone, to generate a Java class "from
             * scratch", or with one or more {@link ClassReader} and adapter {@link ClassVisitor} to generate a
             * modified class from one or more existing Java classes.
             * @see <a href="https://docs.oracle.com/javase/specs/jvms/se9/html/jvms-4.html">JVMS 4</a>
             * @author Eric Bruneton
             */
            // @ts-ignore
            class ClassWriter extends org.springframework.asm.ClassVisitor {
                /**
                 * Constructs a new {@link ClassWriter} object.
                 * @param flags option flags that can be used to modify the default behavior of this class. Must
                 *      be zero or more of {#link #COMPUTE_MAXS} and {@link #COMPUTE_FRAMES}.
                 */
                // @ts-ignore
                constructor(flags: number /*int*/)
                /**
                 * Constructs a new {@link ClassWriter} object and enables optimizations for "mostly add" bytecode
                 * transformations. These optimizations are the following:
                 * <ul>
                 * <li>The constant pool and bootstrap methods from the original class are copied as is in the
                 * new class, which saves time. New constant pool entries and new bootstrap methods will be
                 * added at the end if necessary, but unused constant pool entries or bootstrap methods
                 * <i>won't be removed</i>.
                 * <li>Methods that are not transformed are copied as is in the new class, directly from the
                 * original class bytecode (i.e. without emitting visit events for all the method
                 * instructions), which saves a <i>lot</i> of time. Untransformed methods are detected by
                 * the fact that the {@link ClassReader} receives {@link MethodVisitor} objects that come
                 * from a {@link ClassWriter} (and not from any other {@link ClassVisitor} instance).
                 * </ul>
                 * @param classReader the {#link ClassReader} used to read the original class. It will be used to
                 *      copy the entire constant pool and bootstrap methods from the original class and also to
                 *      copy other fragments of original bytecode where applicable.
                 * @param flags option flags that can be used to modify the default behavior of this class.Must be
                 *      zero or more of {#link #COMPUTE_MAXS} and {@link #COMPUTE_FRAMES}. <i>These option flags do
                 *      not affect methods that are copied as is in the new class. This means that neither the
                 *      maximum stack size nor the stack frames will be computed for these methods</i>.
                 */
                // @ts-ignore
                constructor(classReader: org.springframework.asm.ClassReader, flags: number /*int*/)
                /**
                 * A flag to automatically compute the maximum stack size and the maximum number of local
                 * variables of methods. If this flag is set, then the arguments of the {@link
                 * MethodVisitor#visitMaxs} method of the {@link MethodVisitor} returned by the {@link
                 * #visitMethod} method will be ignored, and computed automatically from the signature and the
                 * bytecode of each method.
                 * <p><b>Note:</b> for classes whose version is {@link Opcodes#V1_7} of more, this option requires
                 * valid stack map frames. The maximum stack size is then computed from these frames, and from the
                 * bytecode instructions in between. If stack map frames are not present or must be recomputed,
                 * used {@link #COMPUTE_FRAMES} instead.
                 * @see #ClassWriter(int)
                 */
                // @ts-ignore
                public static readonly COMPUTE_MAXS: number /*int*/
                /**
                 * A flag to automatically compute the stack map frames of methods from scratch. If this flag is
                 * set, then the calls to the {@link MethodVisitor#visitFrame} method are ignored, and the stack
                 * map frames are recomputed from the methods bytecode. The arguments of the {@link
                 * MethodVisitor#visitMaxs} method are also ignored and recomputed from the bytecode. In other
                 * words, {@link #COMPUTE_FRAMES} implies {@link #COMPUTE_MAXS}.
                 * @see #ClassWriter(int)
                 */
                // @ts-ignore
                public static readonly COMPUTE_FRAMES: number /*int*/
                // @ts-ignore
                public visit(version: number /*int*/, access: number /*int*/, name: java.lang.String | string, signature: java.lang.String | string, superName: java.lang.String | string, interfaces: java.lang.String[] | string[]): void
                // @ts-ignore
                public visitSource(file: java.lang.String | string, debug: java.lang.String | string): void
                // @ts-ignore
                public visitModule(name: java.lang.String | string, access: number /*int*/, version: java.lang.String | string): org.springframework.asm.ModuleVisitor
                // @ts-ignore
                public visitNestHost(nestHost: java.lang.String | string): void
                // @ts-ignore
                public visitOuterClass(owner: java.lang.String | string, name: java.lang.String | string, descriptor: java.lang.String | string): void
                // @ts-ignore
                public visitAnnotation(descriptor: java.lang.String | string, visible: boolean): org.springframework.asm.AnnotationVisitor
                // @ts-ignore
                public visitTypeAnnotation(typeRef: number /*int*/, typePath: org.springframework.asm.TypePath, descriptor: java.lang.String | string, visible: boolean): org.springframework.asm.AnnotationVisitor
                // @ts-ignore
                public visitAttribute(attribute: org.springframework.asm.Attribute): void
                // @ts-ignore
                public visitNestMember(nestMember: java.lang.String | string): void
                // @ts-ignore
                public visitPermittedSubtypeExperimental(permittedSubtype: java.lang.String | string): void
                // @ts-ignore
                public visitInnerClass(name: java.lang.String | string, outerName: java.lang.String | string, innerName: java.lang.String | string, access: number /*int*/): void
                // @ts-ignore
                public visitRecordComponentExperimental(access: number /*int*/, name: java.lang.String | string, descriptor: java.lang.String | string, signature: java.lang.String | string): org.springframework.asm.RecordComponentVisitor
                // @ts-ignore
                public visitField(access: number /*int*/, name: java.lang.String | string, descriptor: java.lang.String | string, signature: java.lang.String | string, value: java.lang.Object | any): org.springframework.asm.FieldVisitor
                // @ts-ignore
                public visitMethod(access: number /*int*/, name: java.lang.String | string, descriptor: java.lang.String | string, signature: java.lang.String | string, exceptions: java.lang.String[] | string[]): org.springframework.asm.MethodVisitor
                // @ts-ignore
                public visitEnd(): void
                /**
                 * Returns the content of the class file that was built by this ClassWriter.
                 * @return the binary content of the JVMS ClassFile structure that was built by this ClassWriter.
                 * @throws ClassTooLargeException if the constant pool of the class is too large.
                 * @throws MethodTooLargeException if the Code attribute of a method is too large.
                 */
                // @ts-ignore
                public toByteArray(): number /*byte*/[]
                /**
                 * Adds a number or string constant to the constant pool of the class being build. Does nothing if
                 * the constant pool already contains a similar item. <i>This method is intended for {@link
                 * Attribute} sub classes, and is normally not needed by class generators or adapters.</i>
                 * @param value the value of the constant to be added to the constant pool. This parameter must be
                 *      an {#link Integer}, a {@link Float}, a {@link Long}, a {@link Double} or a {@link String}.
                 * @return the index of a new or already existing constant item with the given value.
                 */
                // @ts-ignore
                public newConst(value: java.lang.Object | any): number /*int*/
                /**
                 * Adds an UTF8 string to the constant pool of the class being build. Does nothing if the constant
                 * pool already contains a similar item. <i>This method is intended for {@link Attribute} sub
                 * classes, and is normally not needed by class generators or adapters.</i>
                 * @param value the String value.
                 * @return the index of a new or already existing UTF8 item.
                 */
                // @ts-ignore
                public newUTF8(value: java.lang.String | string): number /*int*/
                /**
                 * Adds a class reference to the constant pool of the class being build. Does nothing if the
                 * constant pool already contains a similar item. <i>This method is intended for {@link Attribute}
                 * sub classes, and is normally not needed by class generators or adapters.</i>
                 * @param value the internal name of the class.
                 * @return the index of a new or already existing class reference item.
                 */
                // @ts-ignore
                public newClass(value: java.lang.String | string): number /*int*/
                /**
                 * Adds a method type reference to the constant pool of the class being build. Does nothing if the
                 * constant pool already contains a similar item. <i>This method is intended for {@link Attribute}
                 * sub classes, and is normally not needed by class generators or adapters.</i>
                 * @param methodDescriptor method descriptor of the method type.
                 * @return the index of a new or already existing method type reference item.
                 */
                // @ts-ignore
                public newMethodType(methodDescriptor: java.lang.String | string): number /*int*/
                /**
                 * Adds a module reference to the constant pool of the class being build. Does nothing if the
                 * constant pool already contains a similar item. <i>This method is intended for {@link Attribute}
                 * sub classes, and is normally not needed by class generators or adapters.</i>
                 * @param moduleName name of the module.
                 * @return the index of a new or already existing module reference item.
                 */
                // @ts-ignore
                public newModule(moduleName: java.lang.String | string): number /*int*/
                /**
                 * Adds a package reference to the constant pool of the class being build. Does nothing if the
                 * constant pool already contains a similar item. <i>This method is intended for {@link Attribute}
                 * sub classes, and is normally not needed by class generators or adapters.</i>
                 * @param packageName name of the package in its internal form.
                 * @return the index of a new or already existing module reference item.
                 */
                // @ts-ignore
                public newPackage(packageName: java.lang.String | string): number /*int*/
                /**
                 * Adds a handle to the constant pool of the class being build. Does nothing if the constant pool
                 * already contains a similar item. <i>This method is intended for {@link Attribute} sub classes,
                 * and is normally not needed by class generators or adapters.</i>
                 * @param tag the kind of this handle. Must be {#link Opcodes#H_GETFIELD}, {@link
                 *      Opcodes#H_GETSTATIC}, {@link Opcodes#H_PUTFIELD}, {@link Opcodes#H_PUTSTATIC}, {@link
                 *      Opcodes#H_INVOKEVIRTUAL}, {@link Opcodes#H_INVOKESTATIC}, {@link Opcodes#H_INVOKESPECIAL},
                 *      {@link Opcodes#H_NEWINVOKESPECIAL} or {@link Opcodes#H_INVOKEINTERFACE}.
                 * @param owner the internal name of the field or method owner class.
                 * @param name the name of the field or method.
                 * @param descriptor the descriptor of the field or method.
                 * @return the index of a new or already existing method type reference item.
                 * @deprecated this method is superseded by {#link #newHandle(int, String, String, String,
                 *      boolean)}.
                 */
                // @ts-ignore
                public newHandle(tag: number /*int*/, owner: java.lang.String | string, name: java.lang.String | string, descriptor: java.lang.String | string): number /*int*/
                /**
                 * Adds a handle to the constant pool of the class being build. Does nothing if the constant pool
                 * already contains a similar item. <i>This method is intended for {@link Attribute} sub classes,
                 * and is normally not needed by class generators or adapters.</i>
                 * @param tag the kind of this handle. Must be {#link Opcodes#H_GETFIELD}, {@link
                 *      Opcodes#H_GETSTATIC}, {@link Opcodes#H_PUTFIELD}, {@link Opcodes#H_PUTSTATIC}, {@link
                 *      Opcodes#H_INVOKEVIRTUAL}, {@link Opcodes#H_INVOKESTATIC}, {@link Opcodes#H_INVOKESPECIAL},
                 *      {@link Opcodes#H_NEWINVOKESPECIAL} or {@link Opcodes#H_INVOKEINTERFACE}.
                 * @param owner the internal name of the field or method owner class.
                 * @param name the name of the field or method.
                 * @param descriptor the descriptor of the field or method.
                 * @param isInterface true if the owner is an interface.
                 * @return the index of a new or already existing method type reference item.
                 */
                // @ts-ignore
                public newHandle(tag: number /*int*/, owner: java.lang.String | string, name: java.lang.String | string, descriptor: java.lang.String | string, isInterface: boolean): number /*int*/
                /**
                 * Adds a dynamic constant reference to the constant pool of the class being build. Does nothing
                 * if the constant pool already contains a similar item. <i>This method is intended for {@link
                 * Attribute} sub classes, and is normally not needed by class generators or adapters.</i>
                 * @param name the name of the invoked method.
                 * @param descriptor field descriptor of the constant type.
                 * @param bootstrapMethodHandle the bootstrap method.
                 * @param bootstrapMethodArguments the bootstrap method constant arguments.
                 * @return the index of a new or already existing dynamic constant reference item.
                 */
                // @ts-ignore
                public newConstantDynamic(name: java.lang.String | string, descriptor: java.lang.String | string, bootstrapMethodHandle: org.springframework.asm.Handle, ...bootstrapMethodArguments: java.lang.Object[] | any[]): number /*int*/
                /**
                 * Adds an invokedynamic reference to the constant pool of the class being build. Does nothing if
                 * the constant pool already contains a similar item. <i>This method is intended for {@link
                 * Attribute} sub classes, and is normally not needed by class generators or adapters.</i>
                 * @param name the name of the invoked method.
                 * @param descriptor descriptor of the invoke method.
                 * @param bootstrapMethodHandle the bootstrap method.
                 * @param bootstrapMethodArguments the bootstrap method constant arguments.
                 * @return the index of a new or already existing invokedynamic reference item.
                 */
                // @ts-ignore
                public newInvokeDynamic(name: java.lang.String | string, descriptor: java.lang.String | string, bootstrapMethodHandle: org.springframework.asm.Handle, ...bootstrapMethodArguments: java.lang.Object[] | any[]): number /*int*/
                /**
                 * Adds a field reference to the constant pool of the class being build. Does nothing if the
                 * constant pool already contains a similar item. <i>This method is intended for {@link Attribute}
                 * sub classes, and is normally not needed by class generators or adapters.</i>
                 * @param owner the internal name of the field's owner class.
                 * @param name the field's name.
                 * @param descriptor the field's descriptor.
                 * @return the index of a new or already existing field reference item.
                 */
                // @ts-ignore
                public newField(owner: java.lang.String | string, name: java.lang.String | string, descriptor: java.lang.String | string): number /*int*/
                /**
                 * Adds a method reference to the constant pool of the class being build. Does nothing if the
                 * constant pool already contains a similar item. <i>This method is intended for {@link Attribute}
                 * sub classes, and is normally not needed by class generators or adapters.</i>
                 * @param owner the internal name of the method's owner class.
                 * @param name the method's name.
                 * @param descriptor the method's descriptor.
                 * @param isInterface {#literal true} if {@code owner} is an interface.
                 * @return the index of a new or already existing method reference item.
                 */
                // @ts-ignore
                public newMethod(owner: java.lang.String | string, name: java.lang.String | string, descriptor: java.lang.String | string, isInterface: boolean): number /*int*/
                /**
                 * Adds a name and type to the constant pool of the class being build. Does nothing if the
                 * constant pool already contains a similar item. <i>This method is intended for {@link Attribute}
                 * sub classes, and is normally not needed by class generators or adapters.</i>
                 * @param name a name.
                 * @param descriptor a type descriptor.
                 * @return the index of a new or already existing name and type item.
                 */
                // @ts-ignore
                public newNameType(name: java.lang.String | string, descriptor: java.lang.String | string): number /*int*/
                /**
                 * Returns the common super type of the two given types. The default implementation of this method
                 * <i>loads</i> the two given classes and uses the java.lang.Class methods to find the common
                 * super class. It can be overridden to compute this common super type in other ways, in
                 * particular without actually loading any class, or to take into account the class that is
                 * currently being generated by this ClassWriter, which can of course not be loaded since it is
                 * under construction.
                 * @param type1 the internal name of a class.
                 * @param type2 the internal name of another class.
                 * @return the internal name of the common super class of the two given classes.
                 */
                // @ts-ignore
                getCommonSuperClass(type1: java.lang.String | string, type2: java.lang.String | string): string
                /**
                 * Returns the {@link ClassLoader} to be used by the default implementation of {@link
                 * #getCommonSuperClass(String, String)}, that of this {@link ClassWriter}'s runtime type by
                 * default.
                 * @return ClassLoader
                 */
                // @ts-ignore
                getClassLoader(): java.lang.ClassLoader
            }
        }
    }
}
