declare namespace org {
    namespace springframework {
        namespace validation {
            /**
             * A validator for application-specific objects.
             * <p>This interface is totally divorced from any infrastructure
             * or context; that is to say it is not coupled to validating
             * only objects in the web tier, the data-access tier, or the
             * whatever-tier. As such it is amenable to being used in any layer
             * of an application, and supports the encapsulation of validation
             * logic as a first-class citizen in its own right.
             * <p>Find below a simple but complete {@code Validator}
             * implementation, which validates that the various {@link String}
             * properties of a {@code UserLogin} instance are not empty
             * (that is they are not {@code null} and do not consist
             * wholly of whitespace), and that any password that is present is
             * at least {@code 'MINIMUM_PASSWORD_LENGTH'} characters in length.
             * <pre class="code"> public class UserLoginValidator implements Validator {
             * private static final int MINIMUM_PASSWORD_LENGTH = 6;
             * public boolean supports(Class clazz) {
             * return UserLogin.class.isAssignableFrom(clazz);
             * }
             * public void validate(Object target, Errors errors) {
             * ValidationUtils.rejectIfEmptyOrWhitespace(errors, "userName", "field.required");
             * ValidationUtils.rejectIfEmptyOrWhitespace(errors, "password", "field.required");
             * UserLogin login = (UserLogin) target;
             * if (login.getPassword() != null
             * && login.getPassword().trim().length() < MINIMUM_PASSWORD_LENGTH) {
             * errors.rejectValue("password", "field.min.length",
             * new Object[]{Integer.valueOf(MINIMUM_PASSWORD_LENGTH)},
             * "The password must be at least [" + MINIMUM_PASSWORD_LENGTH + "] characters in length.");
             * }
             * }
             * }</pre>
             * <p>See also the Spring reference manual for a fuller discussion of
             * the {@code Validator} interface and its role in an enterprise
             * application.
             * @author Rod Johnson
             * @see SmartValidator
             * @see Errors
             * @see ValidationUtils
             */
            // @ts-ignore
            interface Validator {
                /**
                 * Can this {@link Validator} {@link #validate(Object, Errors) validate}
                 * instances of the supplied {@code clazz}?
                 * <p>This method is <i>typically</i> implemented like so:
                 * <pre class="code">return Foo.class.isAssignableFrom(clazz);</pre>
                 * (Where {@code Foo} is the class (or superclass) of the actual
                 * object instance that is to be {@link #validate(Object, Errors) validated}.)
                 * @param clazz the {#link Class} that this {@link Validator} is
                 *  being asked if it can {@link #validate(Object, Errors) validate}
                 * @return {#code true} if this {@link Validator} can indeed
                 *  {@link #validate(Object, Errors) validate} instances of the
                 *  supplied {@code clazz}
                 */
                // @ts-ignore
                supports(clazz: java.lang.Class<any>): boolean
                /**
                 * Validate the supplied {@code target} object, which must be
                 * of a {@link Class} for which the {@link #supports(Class)} method
                 * typically has (or would) return {@code true}.
                 * <p>The supplied {@link Errors errors} instance can be used to report
                 * any resulting validation errors.
                 * @param target the object that is to be validated
                 * @param errors contextual state about the validation process
                 * @see ValidationUtils
                 */
                // @ts-ignore
                validate(target: any, errors: org.springframework.validation.Errors): void
            }
        }
    }
}
