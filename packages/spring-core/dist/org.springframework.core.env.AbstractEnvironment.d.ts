declare namespace org {
    namespace springframework {
        namespace core {
            namespace env {
                /**
                 * Abstract base class for {@link Environment} implementations. Supports the notion of
                 * reserved default profile names and enables specifying active and default profiles
                 * through the {@link #ACTIVE_PROFILES_PROPERTY_NAME} and
                 * {@link #DEFAULT_PROFILES_PROPERTY_NAME} properties.
                 * <p>Concrete subclasses differ primarily on which {@link PropertySource} objects they
                 * add by default. {@code AbstractEnvironment} adds none. Subclasses should contribute
                 * property sources through the protected {@link #customizePropertySources(MutablePropertySources)}
                 * hook, while clients should customize using {@link ConfigurableEnvironment#getPropertySources()}
                 * and working against the {@link MutablePropertySources} API.
                 * See {@link ConfigurableEnvironment} javadoc for usage examples.
                 * @author Chris Beams
                 * @author Juergen Hoeller
                 * @since 3.1
                 * @see ConfigurableEnvironment
                 * @see StandardEnvironment
                 */
                // @ts-ignore
                class AbstractEnvironment extends java.lang.Object implements org.springframework.core.env.ConfigurableEnvironment {
                    /**
                     * Create a new {@code Environment} instance, calling back to
                     * {@link #customizePropertySources(MutablePropertySources)} during construction to
                     * allow subclasses to contribute or manipulate {@link PropertySource} instances as
                     * appropriate.
                     * @see #customizePropertySources(MutablePropertySources)
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * System property that instructs Spring to ignore system environment variables,
                     * i.e. to never attempt to retrieve such a variable via {@link System#getenv()}.
                     * <p>The default is "false", falling back to system environment variable checks if a
                     * Spring environment property (e.g. a placeholder in a configuration String) isn't
                     * resolvable otherwise. Consider switching this flag to "true" if you experience
                     * log warnings from {@code getenv} calls coming from Spring, e.g. on WebSphere
                     * with strict SecurityManager settings and AccessControlExceptions warnings.
                     * @see #suppressGetenvAccess()
                     */
                    // @ts-ignore
                    readonly IGNORE_GETENV_PROPERTY_NAME: string
                    /**
                     * Name of property to set to specify active profiles: {@value}. Value may be comma
                     * delimited.
                     * <p>Note that certain shell environments such as Bash disallow the use of the period
                     * character in variable names. Assuming that Spring's {@link SystemEnvironmentPropertySource}
                     * is in use, this property may be specified as an environment variable as
                     * {@code SPRING_PROFILES_ACTIVE}.
                     * @see ConfigurableEnvironment#setActiveProfiles
                     */
                    // @ts-ignore
                    readonly ACTIVE_PROFILES_PROPERTY_NAME: string
                    /**
                     * Name of property to set to specify profiles active by default: {@value}. Value may
                     * be comma delimited.
                     * <p>Note that certain shell environments such as Bash disallow the use of the period
                     * character in variable names. Assuming that Spring's {@link SystemEnvironmentPropertySource}
                     * is in use, this property may be specified as an environment variable as
                     * {@code SPRING_PROFILES_DEFAULT}.
                     * @see ConfigurableEnvironment#setDefaultProfiles
                     */
                    // @ts-ignore
                    readonly DEFAULT_PROFILES_PROPERTY_NAME: string
                    /**
                     * Name of reserved default profile name: {@value}. If no default profile names are
                     * explicitly and no active profile names are explicitly set, this profile will
                     * automatically be activated by default.
                     * @see #getReservedDefaultProfiles
                     * @see ConfigurableEnvironment#setDefaultProfiles
                     * @see ConfigurableEnvironment#setActiveProfiles
                     * @see AbstractEnvironment#DEFAULT_PROFILES_PROPERTY_NAME
                     * @see AbstractEnvironment#ACTIVE_PROFILES_PROPERTY_NAME
                     */
                    // @ts-ignore
                    readonly RESERVED_DEFAULT_PROFILE_NAME: string
                    // @ts-ignore
                    readonly logger: Log
                    /**
                     * Customize the set of {@link PropertySource} objects to be searched by this
                     * {@code Environment} during calls to {@link #getProperty(String)} and related
                     * methods.
                     * <p>Subclasses that override this method are encouraged to add property
                     * sources using {@link MutablePropertySources#addLast(PropertySource)} such that
                     * further subclasses may call {@code super.customizePropertySources()} with
                     * predictable results. For example:
                     * <pre class="code">
                     * public class Level1Environment extends AbstractEnvironment {
                     * &#064;Override
                     * protected void customizePropertySources(MutablePropertySources propertySources) {
                     * super.customizePropertySources(propertySources); // no-op from base class
                     * propertySources.addLast(new PropertySourceA(...));
                     * propertySources.addLast(new PropertySourceB(...));
                     * }
                     * }
                     * public class Level2Environment extends Level1Environment {
                     * &#064;Override
                     * protected void customizePropertySources(MutablePropertySources propertySources) {
                     * super.customizePropertySources(propertySources); // add all from superclass
                     * propertySources.addLast(new PropertySourceC(...));
                     * propertySources.addLast(new PropertySourceD(...));
                     * }
                     * }
                     * </pre>
                     * In this arrangement, properties will be resolved against sources A, B, C, D in that
                     * order. That is to say that property source "A" has precedence over property source
                     * "D". If the {@code Level2Environment} subclass wished to give property sources C
                     * and D higher precedence than A and B, it could simply call
                     * {@code super.customizePropertySources} after, rather than before adding its own:
                     * <pre class="code">
                     * public class Level2Environment extends Level1Environment {
                     * &#064;Override
                     * protected void customizePropertySources(MutablePropertySources propertySources) {
                     * propertySources.addLast(new PropertySourceC(...));
                     * propertySources.addLast(new PropertySourceD(...));
                     * super.customizePropertySources(propertySources); // add all from superclass
                     * }
                     * }
                     * </pre>
                     * The search order is now C, D, A, B as desired.
                     * <p>Beyond these recommendations, subclasses may use any of the {@code add&#42;},
                     * {@code remove}, or {@code replace} methods exposed by {@link MutablePropertySources}
                     * in order to create the exact arrangement of property sources desired.
                     * <p>The base implementation registers no property sources.
                     * <p>Note that clients of any {@link ConfigurableEnvironment} may further customize
                     * property sources via the {@link #getPropertySources()} accessor, typically within
                     * an {@link org.springframework.context.ApplicationContextInitializer
                     * ApplicationContextInitializer}. For example:
                     * <pre class="code">
                     * ConfigurableEnvironment env = new StandardEnvironment();
                     * env.getPropertySources().addLast(new PropertySourceX(...));
                     * </pre>
                     * <h2>A warning about instance variable access</h2>
                     * Instance variables declared in subclasses and having default initial values should
                     * <em>not</em> be accessed from within this method. Due to Java object creation
                     * lifecycle constraints, any initial value will not yet be assigned when this
                     * callback is invoked by the {@link #AbstractEnvironment()} constructor, which may
                     * lead to a {@code NullPointerException} or other problems. If you need to access
                     * default values of instance variables, leave this method as a no-op and perform
                     * property source manipulation and instance variable access directly within the
                     * subclass constructor. Note that <em>assigning</em> values to instance variables is
                     * not problematic; it is only attempting to read default values that must be avoided.
                     * @see MutablePropertySources
                     * @see PropertySourcesPropertyResolver
                     * @see org.springframework.context.ApplicationContextInitializer
                     */
                    // @ts-ignore
                    customizePropertySources(propertySources: org.springframework.core.env.MutablePropertySources): void
                    /**
                     * Return the set of reserved default profile names. This implementation returns
                     * {@value #RESERVED_DEFAULT_PROFILE_NAME}. Subclasses may override in order to
                     * customize the set of reserved names.
                     * @see #RESERVED_DEFAULT_PROFILE_NAME
                     * @see #doGetDefaultProfiles()
                     */
                    // @ts-ignore
                    getReservedDefaultProfiles(): java.util.Set<java.lang.String>
                    // @ts-ignore
                    getActiveProfiles(): java.lang.String[]
                    /**
                     * Return the set of active profiles as explicitly set through
                     * {@link #setActiveProfiles} or if the current set of active profiles
                     * is empty, check for the presence of the {@value #ACTIVE_PROFILES_PROPERTY_NAME}
                     * property and assign its value to the set of active profiles.
                     * @see #getActiveProfiles()
                     * @see #ACTIVE_PROFILES_PROPERTY_NAME
                     */
                    // @ts-ignore
                    doGetActiveProfiles(): java.util.Set<java.lang.String>
                    // @ts-ignore
                    setActiveProfiles(...profiles: string[]): void
                    // @ts-ignore
                    addActiveProfile(profile: string): void
                    // @ts-ignore
                    getDefaultProfiles(): java.lang.String[]
                    /**
                     * Return the set of default profiles explicitly set via
                     * {@link #setDefaultProfiles(String...)} or if the current set of default profiles
                     * consists only of {@linkplain #getReservedDefaultProfiles() reserved default
                     * profiles}, then check for the presence of the
                     * {@value #DEFAULT_PROFILES_PROPERTY_NAME} property and assign its value (if any)
                     * to the set of default profiles.
                     * @see #AbstractEnvironment()
                     * @see #getDefaultProfiles()
                     * @see #DEFAULT_PROFILES_PROPERTY_NAME
                     * @see #getReservedDefaultProfiles()
                     */
                    // @ts-ignore
                    doGetDefaultProfiles(): java.util.Set<java.lang.String>
                    /**
                     * Specify the set of profiles to be made active by default if no other profiles
                     * are explicitly made active through {@link #setActiveProfiles}.
                     * <p>Calling this method removes overrides any reserved default profiles
                     * that may have been added during construction of the environment.
                     * @see #AbstractEnvironment()
                     * @see #getReservedDefaultProfiles()
                     */
                    // @ts-ignore
                    setDefaultProfiles(...profiles: string[]): void
                    // @ts-ignore
                    acceptsProfiles(...profiles: string[]): boolean
                    // @ts-ignore
                    acceptsProfiles(profiles: org.springframework.core.env.Profiles): boolean
                    /**
                     * Return whether the given profile is active, or if active profiles are empty
                     * whether the profile should be active by default.
                     * @throws IllegalArgumentException per {#link #validateProfile(String)}
                     */
                    // @ts-ignore
                    isProfileActive(profile: string): boolean
                    /**
                     * Validate the given profile, called internally prior to adding to the set of
                     * active or default profiles.
                     * <p>Subclasses may override to impose further restrictions on profile syntax.
                     * @throws IllegalArgumentException if the profile is null, empty, whitespace-only or
                     *  begins with the profile NOT operator (!).
                     * @see #acceptsProfiles
                     * @see #addActiveProfile
                     * @see #setDefaultProfiles
                     */
                    // @ts-ignore
                    validateProfile(profile: string): void
                    // @ts-ignore
                    getPropertySources(): org.springframework.core.env.MutablePropertySources
                    // @ts-ignore
                    getSystemProperties(): java.util.Map<java.lang.String, java.lang.Object>
                    // @ts-ignore
                    getSystemEnvironment(): java.util.Map<java.lang.String, java.lang.Object>
                    /**
                     * Determine whether to suppress {@link System#getenv()}/{@link System#getenv(String)}
                     * access for the purposes of {@link #getSystemEnvironment()}.
                     * <p>If this method returns {@code true}, an empty dummy Map will be used instead
                     * of the regular system environment Map, never even trying to call {@code getenv}
                     * and therefore avoiding security manager warnings (if any).
                     * <p>The default implementation checks for the "spring.getenv.ignore" system property,
                     * returning {@code true} if its value equals "true" in any case.
                     * @see #IGNORE_GETENV_PROPERTY_NAME
                     * @see SpringProperties#getFlag
                     */
                    // @ts-ignore
                    suppressGetenvAccess(): boolean
                    // @ts-ignore
                    merge(parent: org.springframework.core.env.ConfigurableEnvironment): void
                    // @ts-ignore
                    getConversionService(): org.springframework.core.convert.support.ConfigurableConversionService
                    // @ts-ignore
                    setConversionService(conversionService: org.springframework.core.convert.support.ConfigurableConversionService): void
                    // @ts-ignore
                    setPlaceholderPrefix(placeholderPrefix: string): void
                    // @ts-ignore
                    setPlaceholderSuffix(placeholderSuffix: string): void
                    // @ts-ignore
                    setValueSeparator(valueSeparator: string): void
                    // @ts-ignore
                    setIgnoreUnresolvableNestedPlaceholders(ignoreUnresolvableNestedPlaceholders: boolean): void
                    // @ts-ignore
                    setRequiredProperties(...requiredProperties: string[]): void
                    // @ts-ignore
                    validateRequiredProperties(): void
                    // @ts-ignore
                    containsProperty(key: string): boolean
                    // @ts-ignore
                    getProperty(key: string): java.lang.String
                    // @ts-ignore
                    getProperty(key: string, defaultValue: string): java.lang.String
                    // @ts-ignore
                    getProperty<T>(key: string, targetType: java.lang.Class<T>): T
                    // @ts-ignore
                    getProperty<T>(key: string, targetType: java.lang.Class<T>, defaultValue: T): T
                    // @ts-ignore
                    getRequiredProperty(key: string): java.lang.String
                    // @ts-ignore
                    getRequiredProperty<T>(key: string, targetType: java.lang.Class<T>): T
                    // @ts-ignore
                    resolvePlaceholders(text: string): java.lang.String
                    // @ts-ignore
                    resolveRequiredPlaceholders(text: string): java.lang.String
                    // @ts-ignore
                    toString(): java.lang.String
                }
            }
        }
    }
}
