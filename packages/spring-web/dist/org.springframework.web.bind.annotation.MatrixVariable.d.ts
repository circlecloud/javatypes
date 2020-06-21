declare namespace org {
    namespace springframework {
        namespace web {
            namespace bind {
                namespace annotation {
                    /**
                     * Annotation which indicates that a method parameter should be bound to a
                     * name-value pair within a path segment. Supported for {@link RequestMapping}
                     * annotated handler methods.
                     * <p>If the method parameter type is {@link java.util.Map} and a matrix variable
                     * name is specified, then the matrix variable value is converted to a
                     * {@link java.util.Map} assuming an appropriate conversion strategy is available.
                     * <p>If the method parameter is {@link java.util.Map Map&lt;String, String&gt;} or
                     * {@link org.springframework.util.MultiValueMap MultiValueMap&lt;String, String&gt;}
                     * and a variable name is not specified, then the map is populated with all
                     * matrix variable names and values.
                     * @author Rossen Stoyanchev
                     * @author Sam Brannen
                     * @since 3.2
                     */
                    // @ts-ignore
                    abstract class MatrixVariable implements java.lang.annotation.Annotation {
                    }
                }
            }
        }
    }
}
