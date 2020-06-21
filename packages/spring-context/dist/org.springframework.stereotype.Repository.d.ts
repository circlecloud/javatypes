declare namespace org {
    namespace springframework {
        namespace stereotype {
            /**
             * Indicates that an annotated class is a "Repository", originally defined by
             * Domain-Driven Design (Evans, 2003) as "a mechanism for encapsulating storage,
             * retrieval, and search behavior which emulates a collection of objects".
             * <p>Teams implementing traditional Java EE patterns such as "Data Access Object"
             * may also apply this stereotype to DAO classes, though care should be taken to
             * understand the distinction between Data Access Object and DDD-style repositories
             * before doing so. This annotation is a general-purpose stereotype and individual teams
             * may narrow their semantics and use as appropriate.
             * <p>A class thus annotated is eligible for Spring
             * {@link org.springframework.dao.DataAccessException DataAccessException} translation
             * when used in conjunction with a {@link
             * org.springframework.dao.annotation.PersistenceExceptionTranslationPostProcessor
             * PersistenceExceptionTranslationPostProcessor}. The annotated class is also clarified as
             * to its role in the overall application architecture for the purpose of tooling,
             * aspects, etc.
             * <p>As of Spring 2.5, this annotation also serves as a specialization of
             * {@link Component @Component}, allowing for implementation classes to be autodetected
             * through classpath scanning.
             * @author Rod Johnson
             * @author Juergen Hoeller
             * @since 2.0
             * @see Component
             * @see Service
             * @see org.springframework.dao.DataAccessException
             * @see org.springframework.dao.annotation.PersistenceExceptionTranslationPostProcessor
             */
            // @ts-ignore
            abstract class Repository implements java.lang.annotation.Annotation {
            }
        }
    }
}
