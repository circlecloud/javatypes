declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                /**
                 * {@link RowMapper} implementation that converts a row into a new instance
                 * of the specified mapped target class. The mapped target class must be a
                 * top-level class and it must have a default or no-arg constructor.
                 * <p>Column values are mapped based on matching the column name as obtained from result set
                 * meta-data to public setters for the corresponding properties. The names are matched either
                 * directly or by transforming a name separating the parts with underscores to the same name
                 * using "camel" case.
                 * <p>Mapping is provided for fields in the target class for many common types, e.g.:
                 * String, boolean, Boolean, byte, Byte, short, Short, int, Integer, long, Long,
                 * float, Float, double, Double, BigDecimal, {@code java.util.Date}, etc.
                 * <p>To facilitate mapping between columns and fields that don't have matching names,
                 * try using column aliases in the SQL statement like "select fname as first_name from customer".
                 * <p>For 'null' values read from the database, we will attempt to call the setter, but in the case of
                 * Java primitives, this causes a TypeMismatchException. This class can be configured (using the
                 * primitivesDefaultedForNullValue property) to trap this exception and use the primitives default value.
                 * Be aware that if you use the values from the generated bean to update the database the primitive value
                 * will have been set to the primitive's default value instead of null.
                 * <p>Please note that this class is designed to provide convenience rather than high performance.
                 * For best performance, consider using a custom {@link RowMapper} implementation.
                 * @author Thomas Risberg
                 * @author Juergen Hoeller
                 * @since 2.5
                 * @param <T> the result type
                 */
                // @ts-ignore
                class BeanPropertyRowMapper<T> extends java.lang.Object implements org.springframework.jdbc.core.RowMapper<T> {
                    /**
                     * Create a new {@code BeanPropertyRowMapper} for bean-style configuration.
                     * @see #setMappedClass
                     * @see #setCheckFullyPopulated
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new {@code BeanPropertyRowMapper}, accepting unpopulated
                     * properties in the target bean.
                     * <p>Consider using the {@link #newInstance} factory method instead,
                     * which allows for specifying the mapped type once only.
                     * @param mappedClass the class that each row should be mapped to
                     */
                    // @ts-ignore
                    constructor(mappedClass: java.lang.Class<T>)
                    /**
                     * Create a new {@code BeanPropertyRowMapper}.
                     * @param mappedClass the class that each row should be mapped to
                     * @param checkFullyPopulated whether we're strictly validating that
                     *  all bean properties have been mapped from corresponding database fields
                     */
                    // @ts-ignore
                    constructor(mappedClass: java.lang.Class<T>, checkFullyPopulated: boolean)
                    /**
                     * Logger available to subclasses.
                     */
                    // @ts-ignore
                    readonly logger: Log
                    /**
                     * Set the class that each row should be mapped to.
                     */
                    // @ts-ignore
                    public setMappedClass(mappedClass: java.lang.Class<T>): void
                    /**
                     * Get the class that we are mapping to.
                     */
                    // @ts-ignore
                    public getMappedClass(): java.lang.Class<T>
                    /**
                     * Set whether we're strictly validating that all bean properties have been mapped
                     * from corresponding database fields.
                     * <p>Default is {@code false}, accepting unpopulated properties in the target bean.
                     */
                    // @ts-ignore
                    public setCheckFullyPopulated(checkFullyPopulated: boolean): void
                    /**
                     * Return whether we're strictly validating that all bean properties have been
                     * mapped from corresponding database fields.
                     */
                    // @ts-ignore
                    public isCheckFullyPopulated(): boolean
                    /**
                     * Set whether we're defaulting Java primitives in the case of mapping a null value
                     * from corresponding database fields.
                     * <p>Default is {@code false}, throwing an exception when nulls are mapped to Java primitives.
                     */
                    // @ts-ignore
                    public setPrimitivesDefaultedForNullValue(primitivesDefaultedForNullValue: boolean): void
                    /**
                     * Return whether we're defaulting Java primitives in the case of mapping a null value
                     * from corresponding database fields.
                     */
                    // @ts-ignore
                    public isPrimitivesDefaultedForNullValue(): boolean
                    /**
                     * Set a {@link ConversionService} for binding JDBC values to bean properties,
                     * or {@code null} for none.
                     * <p>Default is a {@link DefaultConversionService}, as of Spring 4.3. This
                     * provides support for {@code java.time} conversion and other special types.
                     * @since 4.3
                     * @see #initBeanWrapper(BeanWrapper)
                     */
                    // @ts-ignore
                    public setConversionService(conversionService: ConversionService): void
                    /**
                     * Return a {@link ConversionService} for binding JDBC values to bean properties,
                     * or {@code null} if none.
                     * @since 4.3
                     */
                    // @ts-ignore
                    public getConversionService(): ConversionService
                    /**
                     * Initialize the mapping meta-data for the given class.
                     * @param mappedClass the mapped class
                     */
                    // @ts-ignore
                    initialize(mappedClass: java.lang.Class<T>): void
                    /**
                     * Convert a name in camelCase to an underscored name in lower case.
                     * Any upper case letters are converted to lower case with a preceding underscore.
                     * @param name the original name
                     * @return the converted name
                     * @since 4.2
                     * @see #lowerCaseName
                     */
                    // @ts-ignore
                    underscoreName(name: java.lang.String | string): string
                    /**
                     * Convert the given name to lower case.
                     * By default, conversions will happen within the US locale.
                     * @param name the original name
                     * @return the converted name
                     * @since 4.2
                     */
                    // @ts-ignore
                    lowerCaseName(name: java.lang.String | string): string
                    /**
                     * Extract the values for all columns in the current row.
                     * <p>Utilizes public setters and result set meta-data.
                     * @see java.sql.ResultSetMetaData
                     */
                    // @ts-ignore
                    public mapRow(rs: java.sql.ResultSet, rowNumber: number /*int*/): T
                    /**
                     * Initialize the given BeanWrapper to be used for row mapping.
                     * To be called for each row.
                     * <p>The default implementation applies the configured {@link ConversionService},
                     * if any. Can be overridden in subclasses.
                     * @param bw the BeanWrapper to initialize
                     * @see #getConversionService()
                     * @see BeanWrapper#setConversionService
                     */
                    // @ts-ignore
                    initBeanWrapper(bw: BeanWrapper): void
                    /**
                     * Retrieve a JDBC object value for the specified column.
                     * <p>The default implementation calls
                     * {@link JdbcUtils#getResultSetValue(java.sql.ResultSet, int, Class)}.
                     * Subclasses may override this to check specific value types upfront,
                     * or to post-process values return from {@code getResultSetValue}.
                     * @param rs is the ResultSet holding the data
                     * @param index is the column index
                     * @param pd the bean property that each result object is expected to match
                     * @return the Object value
                     * @throws SQLException in case of extraction failure
                     * @see org.springframework.jdbc.support.JdbcUtils#getResultSetValue(java.sql.ResultSet, int, Class)
                     */
                    // @ts-ignore
                    getColumnValue(rs: java.sql.ResultSet, index: number /*int*/, pd: java.beans.PropertyDescriptor): any
                    /**
                     * Static factory method to create a new {@code BeanPropertyRowMapper}
                     * (with the mapped class specified only once).
                     * @param mappedClass the class that each row should be mapped to
                     * @see #newInstance(Class, ConversionService)
                     */
                    // @ts-ignore
                    public static newInstance<T>(mappedClass: java.lang.Class<T>): org.springframework.jdbc.core.BeanPropertyRowMapper<T>
                    /**
                     * Static factory method to create a new {@code BeanPropertyRowMapper}
                     * (with the required type specified only once).
                     * @param mappedClass the class that each row should be mapped to
                     * @param conversionService the {#link ConversionService} for binding
                     *  JDBC values to bean properties, or {@code null} for none
                     * @since 5.2.3
                     * @see #newInstance(Class)
                     * @see #setConversionService
                     */
                    // @ts-ignore
                    public static newInstance<T>(mappedClass: java.lang.Class<T>, conversionService: ConversionService): org.springframework.jdbc.core.BeanPropertyRowMapper<T>
                }
            }
        }
    }
}
