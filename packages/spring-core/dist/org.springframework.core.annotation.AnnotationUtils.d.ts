declare namespace org {
    namespace springframework {
        namespace core {
            namespace annotation {
                /**
                 * General utility methods for working with annotations, handling meta-annotations,
                 * bridge methods (which the compiler generates for generic declarations) as well
                 * as super methods (for optional <em>annotation inheritance</em>).
                 * <p>Note that most of the features of this class are not provided by the
                 * JDK's introspection facilities themselves.
                 * <p>As a general rule for runtime-retained application annotations (e.g. for
                 * transaction control, authorization, or service exposure), always use the
                 * lookup methods on this class (e.g. {@link #findAnnotation(Method, Class)} or
                 * {@link #getAnnotation(Method, Class)}) instead of the plain annotation lookup
                 * methods in the JDK. You can still explicitly choose between a <em>get</em>
                 * lookup on the given class level only ({@link #getAnnotation(Method, Class)})
                 * and a <em>find</em> lookup in the entire inheritance hierarchy of the given
                 * method ({@link #findAnnotation(Method, Class)}).
                 * <h3>Terminology</h3>
                 * The terms <em>directly present</em>, <em>indirectly present</em>, and
                 * <em>present</em> have the same meanings as defined in the class-level
                 * javadoc for {@link AnnotatedElement} (in Java 8).
                 * <p>An annotation is <em>meta-present</em> on an element if the annotation
                 * is declared as a meta-annotation on some other annotation which is
                 * <em>present</em> on the element. Annotation {@code A} is <em>meta-present</em>
                 * on another annotation if {@code A} is either <em>directly present</em> or
                 * <em>meta-present</em> on the other annotation.
                 * <h3>Meta-annotation Support</h3>
                 * <p>Most {@code find*()} methods and some {@code get*()} methods in this class
                 * provide support for finding annotations used as meta-annotations. Consult the
                 * javadoc for each method in this class for details. For fine-grained support for
                 * meta-annotations with <em>attribute overrides</em> in <em>composed annotations</em>,
                 * consider using {@link AnnotatedElementUtils}'s more specific methods instead.
                 * <h3>Attribute Aliases</h3>
                 * <p>All public methods in this class that return annotations, arrays of
                 * annotations, or {@link AnnotationAttributes} transparently support attribute
                 * aliases configured via {@link AliasFor @AliasFor}. Consult the various
                 * {@code synthesizeAnnotation*(..)} methods for details.
                 * <h3>Search Scope</h3>
                 * <p>The search algorithms used by methods in this class stop searching for
                 * an annotation once the first annotation of the specified type has been
                 * found. As a consequence, additional annotations of the specified type will
                 * be silently ignored.
                 * @author Rob Harrop
                 * @author Juergen Hoeller
                 * @author Sam Brannen
                 * @author Mark Fisher
                 * @author Chris Beams
                 * @author Phillip Webb
                 * @author Oleg Zhurakousky
                 * @since 2.0
                 * @see AliasFor
                 * @see AnnotationAttributes
                 * @see AnnotatedElementUtils
                 * @see BridgeMethodResolver
                 * @see java.lang.reflect.AnnotatedElement#getAnnotations()
                 * @see java.lang.reflect.AnnotatedElement#getAnnotation(Class)
                 * @see java.lang.reflect.AnnotatedElement#getDeclaredAnnotations()
                 */
                // @ts-ignore
                class AnnotationUtils extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * The attribute name for annotations with a single element.
                     */
                    // @ts-ignore
                    readonly VALUE: string
                    /**
                     * Determine whether the given class is a candidate for carrying one of the specified
                     * annotations (at type, method or field level).
                     * @param clazz the class to introspect
                     * @param annotationTypes the searchable annotation types
                     * @return {#code false} if the class is known to have no such annotations at any level;
                     *  {@code true} otherwise. Callers will usually perform full method/field introspection
                     *  if {@code true} is being returned here.
                     * @since 5.2
                     * @see #isCandidateClass(Class, Class)
                     * @see #isCandidateClass(Class, String)
                     */
                    // @ts-ignore
                    isCandidateClass(clazz: java.lang.Class<any>, annotationTypes: Array<java.lang.Class<java.lang.annotation.Annotation>>): boolean
                    /**
                     * Determine whether the given class is a candidate for carrying the specified annotation
                     * (at type, method or field level).
                     * @param clazz the class to introspect
                     * @param annotationType the searchable annotation type
                     * @return {#code false} if the class is known to have no such annotations at any level;
                     *  {@code true} otherwise. Callers will usually perform full method/field introspection
                     *  if {@code true} is being returned here.
                     * @since 5.2
                     * @see #isCandidateClass(Class, String)
                     */
                    // @ts-ignore
                    isCandidateClass(clazz: java.lang.Class<any>, annotationType: java.lang.Class<java.lang.annotation.Annotation>): boolean
                    /**
                     * Determine whether the given class is a candidate for carrying the specified annotation
                     * (at type, method or field level).
                     * @param clazz the class to introspect
                     * @param annotationName the fully-qualified name of the searchable annotation type
                     * @return {#code false} if the class is known to have no such annotations at any level;
                     *  {@code true} otherwise. Callers will usually perform full method/field introspection
                     *  if {@code true} is being returned here.
                     * @since 5.2
                     * @see #isCandidateClass(Class, Class)
                     */
                    // @ts-ignore
                    isCandidateClass(clazz: java.lang.Class<any>, annotationName: string): boolean
                    /**
                     * Get a single {@link Annotation} of {@code annotationType} from the supplied
                     * annotation: either the given annotation itself or a direct meta-annotation
                     * thereof.
                     * <p>Note that this method supports only a single level of meta-annotations.
                     * For support for arbitrary levels of meta-annotations, use one of the
                     * {@code find*()} methods instead.
                     * @param annotation the Annotation to check
                     * @param annotationType the annotation type to look for, both locally and as a meta-annotation
                     * @return the first matching annotation, or {#code null} if not found
                     * @since 4.0
                     */
                    // @ts-ignore
                    getAnnotation<A extends java.lang.annotation.Annotation>(annotation: java.lang.annotation.Annotation, annotationType: java.lang.Class<A>): A
                    /**
                     * Get a single {@link Annotation} of {@code annotationType} from the supplied
                     * {@link AnnotatedElement}, where the annotation is either <em>present</em> or
                     * <em>meta-present</em> on the {@code AnnotatedElement}.
                     * <p>Note that this method supports only a single level of meta-annotations.
                     * For support for arbitrary levels of meta-annotations, use
                     * {@link #findAnnotation(AnnotatedElement, Class)} instead.
                     * @param annotatedElement the {#code AnnotatedElement} from which to get the annotation
                     * @param annotationType the annotation type to look for, both locally and as a meta-annotation
                     * @return the first matching annotation, or {#code null} if not found
                     * @since 3.1
                     */
                    // @ts-ignore
                    getAnnotation<A extends java.lang.annotation.Annotation>(annotatedElement: java.lang.reflect.AnnotatedElement, annotationType: java.lang.Class<A>): A
                    /**
                     * Get a single {@link Annotation} of {@code annotationType} from the
                     * supplied {@link Method}, where the annotation is either <em>present</em>
                     * or <em>meta-present</em> on the method.
                     * <p>Correctly handles bridge {@link Method Methods} generated by the compiler.
                     * <p>Note that this method supports only a single level of meta-annotations.
                     * For support for arbitrary levels of meta-annotations, use
                     * {@link #findAnnotation(Method, Class)} instead.
                     * @param method the method to look for annotations on
                     * @param annotationType the annotation type to look for
                     * @return the first matching annotation, or {#code null} if not found
                     * @see org.springframework.core.BridgeMethodResolver#findBridgedMethod(Method)
                     * @see #getAnnotation(AnnotatedElement, Class)
                     */
                    // @ts-ignore
                    getAnnotation<A extends java.lang.annotation.Annotation>(method: java.lang.reflect.Method, annotationType: java.lang.Class<A>): A
                    /**
                     * Get all {@link Annotation Annotations} that are <em>present</em> on the
                     * supplied {@link AnnotatedElement}.
                     * <p>Meta-annotations will <em>not</em> be searched.
                     * @param annotatedElement the Method, Constructor or Field to retrieve annotations from
                     * @return the annotations found, an empty array, or {#code null} if not
                     *  resolvable (e.g. because nested Class values in annotation attributes
                     *  failed to resolve at runtime)
                     * @since 4.0.8
                     * @see AnnotatedElement#getAnnotations()
                     * @deprecated as of 5.2 since it is superseded by the {#link MergedAnnotations} API
                     */
                    // @ts-ignore
                    getAnnotations(annotatedElement: java.lang.reflect.AnnotatedElement): java.lang.annotation.Annotation[]
                    /**
                     * Get all {@link Annotation Annotations} that are <em>present</em> on the
                     * supplied {@link Method}.
                     * <p>Correctly handles bridge {@link Method Methods} generated by the compiler.
                     * <p>Meta-annotations will <em>not</em> be searched.
                     * @param method the Method to retrieve annotations from
                     * @return the annotations found, an empty array, or {#code null} if not
                     *  resolvable (e.g. because nested Class values in annotation attributes
                     *  failed to resolve at runtime)
                     * @see org.springframework.core.BridgeMethodResolver#findBridgedMethod(Method)
                     * @see AnnotatedElement#getAnnotations()
                     * @deprecated as of 5.2 since it is superseded by the {#link MergedAnnotations} API
                     */
                    // @ts-ignore
                    getAnnotations(method: java.lang.reflect.Method): java.lang.annotation.Annotation[]
                    /**
                     * Get the <em>repeatable</em> {@linkplain Annotation annotations} of
                     * {@code annotationType} from the supplied {@link AnnotatedElement}, where
                     * such annotations are either <em>present</em>, <em>indirectly present</em>,
                     * or <em>meta-present</em> on the element.
                     * <p>This method mimics the functionality of Java 8's
                     * {@link java.lang.reflect.AnnotatedElement#getAnnotationsByType(Class)}
                     * with support for automatic detection of a <em>container annotation</em>
                     * declared via @{@link java.lang.annotation.Repeatable} (when running on
                     * Java 8 or higher) and with additional support for meta-annotations.
                     * <p>Handles both single annotations and annotations nested within a
                     * <em>container annotation</em>.
                     * <p>Correctly handles <em>bridge methods</em> generated by the
                     * compiler if the supplied element is a {@link Method}.
                     * <p>Meta-annotations will be searched if the annotation is not
                     * <em>present</em> on the supplied element.
                     * @param annotatedElement the element to look for annotations on
                     * @param annotationType the annotation type to look for
                     * @return the annotations found or an empty set (never {#code null})
                     * @since 4.2
                     * @see #getRepeatableAnnotations(AnnotatedElement, Class, Class)
                     * @see #getDeclaredRepeatableAnnotations(AnnotatedElement, Class, Class)
                     * @see AnnotatedElementUtils#getMergedRepeatableAnnotations(AnnotatedElement, Class)
                     * @see org.springframework.core.BridgeMethodResolver#findBridgedMethod
                     * @see java.lang.annotation.Repeatable
                     * @see java.lang.reflect.AnnotatedElement#getAnnotationsByType
                     * @deprecated as of 5.2 since it is superseded by the {#link MergedAnnotations} API
                     */
                    // @ts-ignore
                    getRepeatableAnnotations<A extends java.lang.annotation.Annotation>(annotatedElement: java.lang.reflect.AnnotatedElement, annotationType: java.lang.Class<A>): java.util.Set<A>
                    /**
                     * Get the <em>repeatable</em> {@linkplain Annotation annotations} of
                     * {@code annotationType} from the supplied {@link AnnotatedElement}, where
                     * such annotations are either <em>present</em>, <em>indirectly present</em>,
                     * or <em>meta-present</em> on the element.
                     * <p>This method mimics the functionality of Java 8's
                     * {@link java.lang.reflect.AnnotatedElement#getAnnotationsByType(Class)}
                     * with additional support for meta-annotations.
                     * <p>Handles both single annotations and annotations nested within a
                     * <em>container annotation</em>.
                     * <p>Correctly handles <em>bridge methods</em> generated by the
                     * compiler if the supplied element is a {@link Method}.
                     * <p>Meta-annotations will be searched if the annotation is not
                     * <em>present</em> on the supplied element.
                     * @param annotatedElement the element to look for annotations on
                     * @param annotationType the annotation type to look for
                     * @param containerAnnotationType the type of the container that holds
                     *  the annotations; may be {#code null} if a container is not supported
                     *  or if it should be looked up via @{@link java.lang.annotation.Repeatable}
                     *  when running on Java 8 or higher
                     * @return the annotations found or an empty set (never {#code null})
                     * @since 4.2
                     * @see #getRepeatableAnnotations(AnnotatedElement, Class)
                     * @see #getDeclaredRepeatableAnnotations(AnnotatedElement, Class)
                     * @see #getDeclaredRepeatableAnnotations(AnnotatedElement, Class, Class)
                     * @see AnnotatedElementUtils#getMergedRepeatableAnnotations(AnnotatedElement, Class, Class)
                     * @see org.springframework.core.BridgeMethodResolver#findBridgedMethod
                     * @see java.lang.annotation.Repeatable
                     * @see java.lang.reflect.AnnotatedElement#getAnnotationsByType
                     * @deprecated as of 5.2 since it is superseded by the {#link MergedAnnotations} API
                     */
                    // @ts-ignore
                    getRepeatableAnnotations<A extends java.lang.annotation.Annotation>(annotatedElement: java.lang.reflect.AnnotatedElement, annotationType: java.lang.Class<A>, containerAnnotationType: java.lang.Class<java.lang.annotation.Annotation>): java.util.Set<A>
                    /**
                     * Get the declared <em>repeatable</em> {@linkplain Annotation annotations}
                     * of {@code annotationType} from the supplied {@link AnnotatedElement},
                     * where such annotations are either <em>directly present</em>,
                     * <em>indirectly present</em>, or <em>meta-present</em> on the element.
                     * <p>This method mimics the functionality of Java 8's
                     * {@link java.lang.reflect.AnnotatedElement#getDeclaredAnnotationsByType(Class)}
                     * with support for automatic detection of a <em>container annotation</em>
                     * declared via @{@link java.lang.annotation.Repeatable} (when running on
                     * Java 8 or higher) and with additional support for meta-annotations.
                     * <p>Handles both single annotations and annotations nested within a
                     * <em>container annotation</em>.
                     * <p>Correctly handles <em>bridge methods</em> generated by the
                     * compiler if the supplied element is a {@link Method}.
                     * <p>Meta-annotations will be searched if the annotation is not
                     * <em>present</em> on the supplied element.
                     * @param annotatedElement the element to look for annotations on
                     * @param annotationType the annotation type to look for
                     * @return the annotations found or an empty set (never {#code null})
                     * @since 4.2
                     * @see #getRepeatableAnnotations(AnnotatedElement, Class)
                     * @see #getRepeatableAnnotations(AnnotatedElement, Class, Class)
                     * @see #getDeclaredRepeatableAnnotations(AnnotatedElement, Class, Class)
                     * @see AnnotatedElementUtils#getMergedRepeatableAnnotations(AnnotatedElement, Class)
                     * @see org.springframework.core.BridgeMethodResolver#findBridgedMethod
                     * @see java.lang.annotation.Repeatable
                     * @see java.lang.reflect.AnnotatedElement#getDeclaredAnnotationsByType
                     * @deprecated as of 5.2 since it is superseded by the {#link MergedAnnotations} API
                     */
                    // @ts-ignore
                    getDeclaredRepeatableAnnotations<A extends java.lang.annotation.Annotation>(annotatedElement: java.lang.reflect.AnnotatedElement, annotationType: java.lang.Class<A>): java.util.Set<A>
                    /**
                     * Get the declared <em>repeatable</em> {@linkplain Annotation annotations}
                     * of {@code annotationType} from the supplied {@link AnnotatedElement},
                     * where such annotations are either <em>directly present</em>,
                     * <em>indirectly present</em>, or <em>meta-present</em> on the element.
                     * <p>This method mimics the functionality of Java 8's
                     * {@link java.lang.reflect.AnnotatedElement#getDeclaredAnnotationsByType(Class)}
                     * with additional support for meta-annotations.
                     * <p>Handles both single annotations and annotations nested within a
                     * <em>container annotation</em>.
                     * <p>Correctly handles <em>bridge methods</em> generated by the
                     * compiler if the supplied element is a {@link Method}.
                     * <p>Meta-annotations will be searched if the annotation is not
                     * <em>present</em> on the supplied element.
                     * @param annotatedElement the element to look for annotations on
                     * @param annotationType the annotation type to look for
                     * @param containerAnnotationType the type of the container that holds
                     *  the annotations; may be {#code null} if a container is not supported
                     *  or if it should be looked up via @{@link java.lang.annotation.Repeatable}
                     *  when running on Java 8 or higher
                     * @return the annotations found or an empty set (never {#code null})
                     * @since 4.2
                     * @see #getRepeatableAnnotations(AnnotatedElement, Class)
                     * @see #getRepeatableAnnotations(AnnotatedElement, Class, Class)
                     * @see #getDeclaredRepeatableAnnotations(AnnotatedElement, Class)
                     * @see AnnotatedElementUtils#getMergedRepeatableAnnotations(AnnotatedElement, Class, Class)
                     * @see org.springframework.core.BridgeMethodResolver#findBridgedMethod
                     * @see java.lang.annotation.Repeatable
                     * @see java.lang.reflect.AnnotatedElement#getDeclaredAnnotationsByType
                     * @deprecated as of 5.2 since it is superseded by the {#link MergedAnnotations} API
                     */
                    // @ts-ignore
                    getDeclaredRepeatableAnnotations<A extends java.lang.annotation.Annotation>(annotatedElement: java.lang.reflect.AnnotatedElement, annotationType: java.lang.Class<A>, containerAnnotationType: java.lang.Class<java.lang.annotation.Annotation>): java.util.Set<A>
                    /**
                     * Find a single {@link Annotation} of {@code annotationType} on the
                     * supplied {@link AnnotatedElement}.
                     * <p>Meta-annotations will be searched if the annotation is not
                     * <em>directly present</em> on the supplied element.
                     * <p><strong>Warning</strong>: this method operates generically on
                     * annotated elements. In other words, this method does not execute
                     * specialized search algorithms for classes or methods. If you require
                     * the more specific semantics of {@link #findAnnotation(Class, Class)}
                     * or {@link #findAnnotation(Method, Class)}, invoke one of those methods
                     * instead.
                     * @param annotatedElement the {#code AnnotatedElement} on which to find the annotation
                     * @param annotationType the annotation type to look for, both locally and as a meta-annotation
                     * @return the first matching annotation, or {#code null} if not found
                     * @since 4.2
                     */
                    // @ts-ignore
                    findAnnotation<A extends java.lang.annotation.Annotation>(annotatedElement: java.lang.reflect.AnnotatedElement, annotationType: java.lang.Class<A>): A
                    /**
                     * Find a single {@link Annotation} of {@code annotationType} on the supplied
                     * {@link Method}, traversing its super methods (i.e. from superclasses and
                     * interfaces) if the annotation is not <em>directly present</em> on the given
                     * method itself.
                     * <p>Correctly handles bridge {@link Method Methods} generated by the compiler.
                     * <p>Meta-annotations will be searched if the annotation is not
                     * <em>directly present</em> on the method.
                     * <p>Annotations on methods are not inherited by default, so we need to handle
                     * this explicitly.
                     * @param method the method to look for annotations on
                     * @param annotationType the annotation type to look for
                     * @return the first matching annotation, or {#code null} if not found
                     * @see #getAnnotation(Method, Class)
                     */
                    // @ts-ignore
                    findAnnotation<A extends java.lang.annotation.Annotation>(method: java.lang.reflect.Method, annotationType: java.lang.Class<A>): A
                    /**
                     * Find a single {@link Annotation} of {@code annotationType} on the
                     * supplied {@link Class}, traversing its interfaces, annotations, and
                     * superclasses if the annotation is not <em>directly present</em> on
                     * the given class itself.
                     * <p>This method explicitly handles class-level annotations which are not
                     * declared as {@link java.lang.annotation.Inherited inherited} <em>as well
                     * as meta-annotations and annotations on interfaces</em>.
                     * <p>The algorithm operates as follows:
                     * <ol>
                     * <li>Search for the annotation on the given class and return it if found.
                     * <li>Recursively search through all annotations that the given class declares.
                     * <li>Recursively search through all interfaces that the given class declares.
                     * <li>Recursively search through the superclass hierarchy of the given class.
                     * </ol>
                     * <p>Note: in this context, the term <em>recursively</em> means that the search
                     * process continues by returning to step #1 with the current interface,
                     * annotation, or superclass as the class to look for annotations on.
                     * @param clazz the class to look for annotations on
                     * @param annotationType the type of annotation to look for
                     * @return the first matching annotation, or {#code null} if not found
                     */
                    // @ts-ignore
                    findAnnotation<A extends java.lang.annotation.Annotation>(clazz: java.lang.Class<any>, annotationType: java.lang.Class<A>): A
                    /**
                     * Find the first {@link Class} in the inheritance hierarchy of the
                     * specified {@code clazz} (including the specified {@code clazz} itself)
                     * on which an annotation of the specified {@code annotationType} is
                     * <em>directly present</em>.
                     * <p>If the supplied {@code clazz} is an interface, only the interface
                     * itself will be checked; the inheritance hierarchy for interfaces will
                     * not be traversed.
                     * <p>Meta-annotations will <em>not</em> be searched.
                     * <p>The standard {@link Class} API does not provide a mechanism for
                     * determining which class in an inheritance hierarchy actually declares
                     * an {@link Annotation}, so we need to handle this explicitly.
                     * @param annotationType the annotation type to look for
                     * @param clazz the class to check for the annotation on (may be {#code null})
                     * @return the first {#link Class} in the inheritance hierarchy that
                     *  declares an annotation of the specified {@code annotationType},
                     *  or {@code null} if not found
                     * @see Class#isAnnotationPresent(Class)
                     * @see Class#getDeclaredAnnotations()
                     * @deprecated as of 5.2 since it is superseded by the {#link MergedAnnotations} API
                     */
                    // @ts-ignore
                    findAnnotationDeclaringClass(annotationType: java.lang.Class<java.lang.annotation.Annotation>, clazz: java.lang.Class<any>): java.lang.Class<?>
                    /**
                     * Find the first {@link Class} in the inheritance hierarchy of the
                     * specified {@code clazz} (including the specified {@code clazz} itself)
                     * on which at least one of the specified {@code annotationTypes} is
                     * <em>directly present</em>.
                     * <p>If the supplied {@code clazz} is an interface, only the interface
                     * itself will be checked; the inheritance hierarchy for interfaces will
                     * not be traversed.
                     * <p>Meta-annotations will <em>not</em> be searched.
                     * <p>The standard {@link Class} API does not provide a mechanism for
                     * determining which class in an inheritance hierarchy actually declares
                     * one of several candidate {@linkplain Annotation annotations}, so we
                     * need to handle this explicitly.
                     * @param annotationTypes the annotation types to look for
                     * @param clazz the class to check for the annotation on (may be {#code null})
                     * @return the first {#link Class} in the inheritance hierarchy that
                     *  declares an annotation of at least one of the specified
                     *  {@code annotationTypes}, or {@code null} if not found
                     * @since 3.2.2
                     * @see Class#isAnnotationPresent(Class)
                     * @see Class#getDeclaredAnnotations()
                     * @deprecated as of 5.2 since it is superseded by the {#link MergedAnnotations} API
                     */
                    // @ts-ignore
                    findAnnotationDeclaringClassForTypes(annotationTypes: Array<java.lang.Class<java.lang.annotation.Annotation>>, clazz: java.lang.Class<any>): java.lang.Class<?>
                    /**
                     * Determine whether an annotation of the specified {@code annotationType}
                     * is declared locally (i.e. <em>directly present</em>) on the supplied
                     * {@code clazz}.
                     * <p>The supplied {@link Class} may represent any type.
                     * <p>Meta-annotations will <em>not</em> be searched.
                     * <p>Note: This method does <strong>not</strong> determine if the annotation
                     * is {@linkplain java.lang.annotation.Inherited inherited}.
                     * @param annotationType the annotation type to look for
                     * @param clazz the class to check for the annotation on
                     * @return {#code true} if an annotation of the specified {@code annotationType}
                     *  is <em>directly present</em>
                     * @see java.lang.Class#getDeclaredAnnotations()
                     * @see java.lang.Class#getDeclaredAnnotation(Class)
                     */
                    // @ts-ignore
                    isAnnotationDeclaredLocally(annotationType: java.lang.Class<java.lang.annotation.Annotation>, clazz: java.lang.Class<any>): boolean
                    /**
                     * Determine whether an annotation of the specified {@code annotationType}
                     * is <em>present</em> on the supplied {@code clazz} and is
                     * {@linkplain java.lang.annotation.Inherited inherited}
                     * (i.e. not <em>directly present</em>).
                     * <p>Meta-annotations will <em>not</em> be searched.
                     * <p>If the supplied {@code clazz} is an interface, only the interface
                     * itself will be checked. In accordance with standard meta-annotation
                     * semantics in Java, the inheritance hierarchy for interfaces will not
                     * be traversed. See the {@linkplain java.lang.annotation.Inherited javadoc}
                     * for the {@code @Inherited} meta-annotation for further details regarding
                     * annotation inheritance.
                     * @param annotationType the annotation type to look for
                     * @param clazz the class to check for the annotation on
                     * @return {#code true} if an annotation of the specified {@code annotationType}
                     *  is <em>present</em> and <em>inherited</em>
                     * @see Class#isAnnotationPresent(Class)
                     * @see #isAnnotationDeclaredLocally(Class, Class)
                     * @deprecated as of 5.2 since it is superseded by the {#link MergedAnnotations} API
                     */
                    // @ts-ignore
                    isAnnotationInherited(annotationType: java.lang.Class<java.lang.annotation.Annotation>, clazz: java.lang.Class<any>): boolean
                    /**
                     * Determine if an annotation of type {@code metaAnnotationType} is
                     * <em>meta-present</em> on the supplied {@code annotationType}.
                     * @param annotationType the annotation type to search on
                     * @param metaAnnotationType the type of meta-annotation to search for
                     * @return {#code true} if such an annotation is meta-present
                     * @since 4.2.1
                     * @deprecated as of 5.2 since it is superseded by the {#link MergedAnnotations} API
                     */
                    // @ts-ignore
                    isAnnotationMetaPresent(annotationType: java.lang.Class<java.lang.annotation.Annotation>, metaAnnotationType: java.lang.Class<java.lang.annotation.Annotation>): boolean
                    /**
                     * Determine if the supplied {@link Annotation} is defined in the core JDK
                     * {@code java.lang.annotation} package.
                     * @param annotation the annotation to check
                     * @return {#code true} if the annotation is in the {@code java.lang.annotation} package
                     */
                    // @ts-ignore
                    isInJavaLangAnnotationPackage(annotation: java.lang.annotation.Annotation): boolean
                    /**
                     * Determine if the {@link Annotation} with the supplied name is defined
                     * in the core JDK {@code java.lang.annotation} package.
                     * @param annotationType the name of the annotation type to check
                     * @return {#code true} if the annotation is in the {@code java.lang.annotation} package
                     * @since 4.2
                     */
                    // @ts-ignore
                    isInJavaLangAnnotationPackage(annotationType: string): boolean
                    /**
                     * Check the declared attributes of the given annotation, in particular covering
                     * Google App Engine's late arrival of {@code TypeNotPresentExceptionProxy} for
                     * {@code Class} values (instead of early {@code Class.getAnnotations() failure}.
                     * <p>This method not failing indicates that {@link #getAnnotationAttributes(Annotation)}
                     * won't failure either (when attempted later on).
                     * @param annotation the annotation to validate
                     * @throws IllegalStateException if a declared {#code Class} attribute could not be read
                     * @since 4.3.15
                     * @see Class#getAnnotations()
                     * @see #getAnnotationAttributes(Annotation)
                     */
                    // @ts-ignore
                    validateAnnotation(annotation: java.lang.annotation.Annotation): void
                    /**
                     * Retrieve the given annotation's attributes as a {@link Map}, preserving all
                     * attribute types.
                     * <p>Equivalent to calling {@link #getAnnotationAttributes(Annotation, boolean, boolean)}
                     * with the {@code classValuesAsString} and {@code nestedAnnotationsAsMap} parameters
                     * set to {@code false}.
                     * <p>Note: This method actually returns an {@link AnnotationAttributes} instance.
                     * However, the {@code Map} signature has been preserved for binary compatibility.
                     * @param annotation the annotation to retrieve the attributes for
                     * @return the Map of annotation attributes, with attribute names as keys and
                     *  corresponding attribute values as values (never {#code null})
                     * @see #getAnnotationAttributes(AnnotatedElement, Annotation)
                     * @see #getAnnotationAttributes(Annotation, boolean, boolean)
                     * @see #getAnnotationAttributes(AnnotatedElement, Annotation, boolean, boolean)
                     */
                    // @ts-ignore
                    getAnnotationAttributes(annotation: java.lang.annotation.Annotation): java.util.Map<java.lang.String, java.lang.Object>
                    /**
                     * Retrieve the given annotation's attributes as a {@link Map}.
                     * <p>Equivalent to calling {@link #getAnnotationAttributes(Annotation, boolean, boolean)}
                     * with the {@code nestedAnnotationsAsMap} parameter set to {@code false}.
                     * <p>Note: This method actually returns an {@link AnnotationAttributes} instance.
                     * However, the {@code Map} signature has been preserved for binary compatibility.
                     * @param annotation the annotation to retrieve the attributes for
                     * @param classValuesAsString whether to convert Class references into Strings (for
                     *  compatibility with {#link org.springframework.core.type.AnnotationMetadata})
                     *  or to preserve them as Class references
                     * @return the Map of annotation attributes, with attribute names as keys and
                     *  corresponding attribute values as values (never {#code null})
                     * @see #getAnnotationAttributes(Annotation, boolean, boolean)
                     */
                    // @ts-ignore
                    getAnnotationAttributes(annotation: java.lang.annotation.Annotation, classValuesAsString: boolean): java.util.Map<java.lang.String, java.lang.Object>
                    /**
                     * Retrieve the given annotation's attributes as an {@link AnnotationAttributes} map.
                     * <p>This method provides fully recursive annotation reading capabilities on par with
                     * the reflection-based {@link org.springframework.core.type.StandardAnnotationMetadata}.
                     * @param annotation the annotation to retrieve the attributes for
                     * @param classValuesAsString whether to convert Class references into Strings (for
                     *  compatibility with {#link org.springframework.core.type.AnnotationMetadata})
                     *  or to preserve them as Class references
                     * @param nestedAnnotationsAsMap whether to convert nested annotations into
                     *  {#link AnnotationAttributes} maps (for compatibility with
                     *  {@link org.springframework.core.type.AnnotationMetadata}) or to preserve them as
                     *  {@code Annotation} instances
                     * @return the annotation attributes (a specialized Map) with attribute names as keys
                     *  and corresponding attribute values as values (never {#code null})
                     * @since 3.1.1
                     */
                    // @ts-ignore
                    getAnnotationAttributes(annotation: java.lang.annotation.Annotation, classValuesAsString: boolean, nestedAnnotationsAsMap: boolean): org.springframework.core.annotation.AnnotationAttributes
                    /**
                     * Retrieve the given annotation's attributes as an {@link AnnotationAttributes} map.
                     * <p>Equivalent to calling {@link #getAnnotationAttributes(AnnotatedElement, Annotation, boolean, boolean)}
                     * with the {@code classValuesAsString} and {@code nestedAnnotationsAsMap} parameters
                     * set to {@code false}.
                     * @param annotatedElement the element that is annotated with the supplied annotation;
                     *  may be {#code null} if unknown
                     * @param annotation the annotation to retrieve the attributes for
                     * @return the annotation attributes (a specialized Map) with attribute names as keys
                     *  and corresponding attribute values as values (never {#code null})
                     * @since 4.2
                     * @see #getAnnotationAttributes(AnnotatedElement, Annotation, boolean, boolean)
                     */
                    // @ts-ignore
                    getAnnotationAttributes(annotatedElement: java.lang.reflect.AnnotatedElement, annotation: java.lang.annotation.Annotation): org.springframework.core.annotation.AnnotationAttributes
                    /**
                     * Retrieve the given annotation's attributes as an {@link AnnotationAttributes} map.
                     * <p>This method provides fully recursive annotation reading capabilities on par with
                     * the reflection-based {@link org.springframework.core.type.StandardAnnotationMetadata}.
                     * @param annotatedElement the element that is annotated with the supplied annotation;
                     *  may be {#code null} if unknown
                     * @param annotation the annotation to retrieve the attributes for
                     * @param classValuesAsString whether to convert Class references into Strings (for
                     *  compatibility with {#link org.springframework.core.type.AnnotationMetadata})
                     *  or to preserve them as Class references
                     * @param nestedAnnotationsAsMap whether to convert nested annotations into
                     *  {#link AnnotationAttributes} maps (for compatibility with
                     *  {@link org.springframework.core.type.AnnotationMetadata}) or to preserve them as
                     *  {@code Annotation} instances
                     * @return the annotation attributes (a specialized Map) with attribute names as keys
                     *  and corresponding attribute values as values (never {#code null})
                     * @since 4.2
                     */
                    // @ts-ignore
                    getAnnotationAttributes(annotatedElement: java.lang.reflect.AnnotatedElement, annotation: java.lang.annotation.Annotation, classValuesAsString: boolean, nestedAnnotationsAsMap: boolean): org.springframework.core.annotation.AnnotationAttributes
                    /**
                     * Register the annotation-declared default values for the given attributes,
                     * if available.
                     * @param attributes the annotation attributes to process
                     * @since 4.3.2
                     */
                    // @ts-ignore
                    registerDefaultValues(attributes: org.springframework.core.annotation.AnnotationAttributes): void
                    /**
                     * Post-process the supplied {@link AnnotationAttributes}, preserving nested
                     * annotations as {@code Annotation} instances.
                     * <p>Specifically, this method enforces <em>attribute alias</em> semantics
                     * for annotation attributes that are annotated with {@link AliasFor @AliasFor}
                     * and replaces default value placeholders with their original default values.
                     * @param annotatedElement the element that is annotated with an annotation or
                     *  annotation hierarchy from which the supplied attributes were created;
                     *  may be {#code null} if unknown
                     * @param attributes the annotation attributes to post-process
                     * @param classValuesAsString whether to convert Class references into Strings (for
                     *  compatibility with {#link org.springframework.core.type.AnnotationMetadata})
                     *  or to preserve them as Class references
                     * @since 4.3.2
                     * @see #getDefaultValue(Class, String)
                     */
                    // @ts-ignore
                    postProcessAnnotationAttributes(annotatedElement: any, attributes: org.springframework.core.annotation.AnnotationAttributes, classValuesAsString: boolean): void
                    /**
                     * Retrieve the <em>value</em> of the {@code value} attribute of a
                     * single-element Annotation, given an annotation instance.
                     * @param annotation the annotation instance from which to retrieve the value
                     * @return the attribute value, or {#code null} if not found unless the attribute
                     *  value cannot be retrieved due to an {@link AnnotationConfigurationException},
                     *  in which case such an exception will be rethrown
                     * @see #getValue(Annotation, String)
                     */
                    // @ts-ignore
                    getValue(annotation: java.lang.annotation.Annotation): java.lang.Object
                    /**
                     * Retrieve the <em>value</em> of a named attribute, given an annotation instance.
                     * @param annotation the annotation instance from which to retrieve the value
                     * @param attributeName the name of the attribute value to retrieve
                     * @return the attribute value, or {#code null} if not found unless the attribute
                     *  value cannot be retrieved due to an {@link AnnotationConfigurationException},
                     *  in which case such an exception will be rethrown
                     * @see #getValue(Annotation)
                     */
                    // @ts-ignore
                    getValue(annotation: java.lang.annotation.Annotation, attributeName: string): java.lang.Object
                    /**
                     * Retrieve the <em>default value</em> of the {@code value} attribute
                     * of a single-element Annotation, given an annotation instance.
                     * @param annotation the annotation instance from which to retrieve the default value
                     * @return the default value, or {#code null} if not found
                     * @see #getDefaultValue(Annotation, String)
                     */
                    // @ts-ignore
                    getDefaultValue(annotation: java.lang.annotation.Annotation): java.lang.Object
                    /**
                     * Retrieve the <em>default value</em> of a named attribute, given an annotation instance.
                     * @param annotation the annotation instance from which to retrieve the default value
                     * @param attributeName the name of the attribute value to retrieve
                     * @return the default value of the named attribute, or {#code null} if not found
                     * @see #getDefaultValue(Class, String)
                     */
                    // @ts-ignore
                    getDefaultValue(annotation: java.lang.annotation.Annotation, attributeName: string): java.lang.Object
                    /**
                     * Retrieve the <em>default value</em> of the {@code value} attribute
                     * of a single-element Annotation, given the {@link Class annotation type}.
                     * @param annotationType the <em>annotation type</em> for which the default value should be retrieved
                     * @return the default value, or {#code null} if not found
                     * @see #getDefaultValue(Class, String)
                     */
                    // @ts-ignore
                    getDefaultValue(annotationType: java.lang.Class<java.lang.annotation.Annotation>): java.lang.Object
                    /**
                     * Retrieve the <em>default value</em> of a named attribute, given the
                     * {@link Class annotation type}.
                     * @param annotationType the <em>annotation type</em> for which the default value should be retrieved
                     * @param attributeName the name of the attribute value to retrieve.
                     * @return the default value of the named attribute, or {#code null} if not found
                     * @see #getDefaultValue(Annotation, String)
                     */
                    // @ts-ignore
                    getDefaultValue(annotationType: java.lang.Class<java.lang.annotation.Annotation>, attributeName: string): java.lang.Object
                    /**
                     * <em>Synthesize</em> an annotation from the supplied {@code annotation}
                     * by wrapping it in a dynamic proxy that transparently enforces
                     * <em>attribute alias</em> semantics for annotation attributes that are
                     * annotated with {@link AliasFor @AliasFor}.
                     * @param annotation the annotation to synthesize
                     * @param annotatedElement the element that is annotated with the supplied
                     *  annotation; may be {#code null} if unknown
                     * @return the synthesized annotation if the supplied annotation is
                     *  <em>synthesizable</em>; {#code null} if the supplied annotation is
                     *  {@code null}; otherwise the supplied annotation unmodified
                     * @throws AnnotationConfigurationException if invalid configuration of
                     *  {#code @AliasFor} is detected
                     * @since 4.2
                     * @see #synthesizeAnnotation(Map, Class, AnnotatedElement)
                     * @see #synthesizeAnnotation(Class)
                     */
                    // @ts-ignore
                    synthesizeAnnotation<A extends java.lang.annotation.Annotation>(annotation: A extends java.lang.annotation.Annotation, annotatedElement: java.lang.reflect.AnnotatedElement): A
                    /**
                     * <em>Synthesize</em> an annotation from its default attributes values.
                     * <p>This method simply delegates to
                     * {@link #synthesizeAnnotation(Map, Class, AnnotatedElement)},
                     * supplying an empty map for the source attribute values and {@code null}
                     * for the {@link AnnotatedElement}.
                     * @param annotationType the type of annotation to synthesize
                     * @return the synthesized annotation
                     * @throws IllegalArgumentException if a required attribute is missing
                     * @throws AnnotationConfigurationException if invalid configuration of
                     *  {#code @AliasFor} is detected
                     * @since 4.2
                     * @see #synthesizeAnnotation(Map, Class, AnnotatedElement)
                     * @see #synthesizeAnnotation(Annotation, AnnotatedElement)
                     */
                    // @ts-ignore
                    synthesizeAnnotation<A extends java.lang.annotation.Annotation>(annotationType: java.lang.Class<A>): A
                    /**
                     * <em>Synthesize</em> an annotation from the supplied map of annotation
                     * attributes by wrapping the map in a dynamic proxy that implements an
                     * annotation of the specified {@code annotationType} and transparently
                     * enforces <em>attribute alias</em> semantics for annotation attributes
                     * that are annotated with {@link AliasFor @AliasFor}.
                     * <p>The supplied map must contain a key-value pair for every attribute
                     * defined in the supplied {@code annotationType} that is not aliased or
                     * does not have a default value. Nested maps and nested arrays of maps
                     * will be recursively synthesized into nested annotations or nested
                     * arrays of annotations, respectively.
                     * <p>Note that {@link AnnotationAttributes} is a specialized type of
                     * {@link Map} that is an ideal candidate for this method's
                     * {@code attributes} argument.
                     * @param attributes the map of annotation attributes to synthesize
                     * @param annotationType the type of annotation to synthesize
                     * @param annotatedElement the element that is annotated with the annotation
                     *  corresponding to the supplied attributes; may be {#code null} if unknown
                     * @return the synthesized annotation
                     * @throws IllegalArgumentException if a required attribute is missing or if an
                     *  attribute is not of the correct type
                     * @throws AnnotationConfigurationException if invalid configuration of
                     *  {#code @AliasFor} is detected
                     * @since 4.2
                     * @see #synthesizeAnnotation(Annotation, AnnotatedElement)
                     * @see #synthesizeAnnotation(Class)
                     * @see #getAnnotationAttributes(AnnotatedElement, Annotation)
                     * @see #getAnnotationAttributes(AnnotatedElement, Annotation, boolean, boolean)
                     */
                    // @ts-ignore
                    synthesizeAnnotation<A extends java.lang.annotation.Annotation>(attributes: java.util.Map<java.lang.String, java.lang.Object>, annotationType: java.lang.Class<A>, annotatedElement: java.lang.reflect.AnnotatedElement): A
                    /**
                     * Clear the internal annotation metadata cache.
                     * @since 4.3.15
                     */
                    // @ts-ignore
                    clearCache(): void
                }
            }
        }
    }
}
